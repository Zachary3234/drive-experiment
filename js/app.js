const app = new (function Application() {
    //初始化3D场景
    var renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('canvas'),
    });
    renderer.setSize($('#render').width(), $('#render').height());
    renderer.setClearColor(0xcccccc);
    renderer.setPixelRatio(2);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(10676479);
    scene.fog = new THREE.Fog(new THREE.Color(10676479), 225, 325);
    var camera = new THREE.PerspectiveCamera(30, $('#render').width() / $('#render').height(), 1, 400);
    var light = new THREE.DirectionalLight(16774618, 1.2);
    scene.add(light);
    scene.add(light.target);
    light.position.set(40, 160, 80);
    light.castShadow = true;
    light.shadow.radius = 2;
    light.shadow.bias = -.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 50;
    light.shadow.camera.far = 1000;
    var halfHeight = 75 * Math.max($('#render').width() / $('#render').height(), 1.25);
    light.shadow.camera.left = .9 * -halfHeight;
    light.shadow.camera.right = 1.3 * halfHeight;
    light.shadow.camera.top = 1.8 * halfHeight;
    light.shadow.camera.bottom = -halfHeight;
    light.shadow.camera.updateProjectionMatrix();

    //场景物件
    var objects = {};
    var chunkScene = new THREE.Scene();
    scene.add(chunkScene);
    //场景更新控制
    var viewControl = null;
    var worldControl = null;
    var carsControl = null;
    //控制参数
    var control = {
        pause: false,
        maxSpeed: 0.2,
        maxHeight: 180,
    };

    //加载场景
    loadObjects().then((sceneObjects) => {
        //保存场景对象
        // objects.light = sceneObjects.getObjectByName("Directional Light");
        objects.blocks = sceneObjects.getObjectByName("blocks").children;
        objects.lanes = sceneObjects.getObjectByName("lanes").children;
        objects.intersections = sceneObjects.getObjectByName("intersections").children;
        objects.cars = sceneObjects.getObjectByName("cars").children;
        objects.clouds = sceneObjects.getObjectByName("clouds").children;
        // 去掉一些不要的对象
        objects.lanes = [objects.lanes.find((ele) => { return ele.name === "Road_Lane_01_fixed" })];
        objects.intersections = [objects.intersections.find((ele) => { return ele.name === "Road_Intersection_03_merged_fixed" })];
        objects.cars.splice(13, 1); //"Vehicle_Police Car"
        objects.cars.splice(0, 1); //"Vehicle_Ambulance"
        // 给车加上车灯
        objects.cars = addLightForCars(objects.cars);

        //搭建场景
        viewControl = new initView();
        worldControl = new initWorld();
        carsControl = new initCars();
        carsControl.carOther && (carsControl.carOther.turn = 1);
        //启动
        update();
    });

    //尺寸更新
    window.onresize = function () {
        renderer.setSize($('#render').width(), $('#render').height());
        camera.aspect = $('#render').width() / $('#render').height();
        camera.updateProjectionMatrix();
    }
    //渲染画面
    function update() {
        viewControl && viewControl.update();
        if (!control.pause) {
            worldControl && worldControl.update();
            carsControl && carsControl.update();
        }

        renderer.render(scene, camera);
        requestAnimationFrame(update);
    }

    //全局控制
    this.reset = function () {
        worldControl && worldControl.reset();
        carsControl && (carsControl.reset(), carsControl.carOther.turn = 1);
    };
    this.pause = function () {
        control.pause = !control.pause;
    };
    //车辆控制
    this.stopSelf = function () {
        carsControl && carsControl.carSelf && (carsControl.carSelf.stop = !carsControl.carSelf.stop);
    };
    this.stopOther = function () {
        carsControl && carsControl.carOther && (carsControl.carOther.stop = !carsControl.carOther.stop);
    };
    this.turnOther = function () {
        carsControl && carsControl.carOther && (carsControl.carOther.turn = 1);
    };
    //其他控制
    this.setSpeed = function (val) {
        control.maxSpeed = val;
    };
    this.setHeight = function (val) {
        control.maxHeight = val;
    };


    // 初始化视角
    function initView() {
        const _offsetZ = -10;
        const _center = new THREE.Vector3(0, 0, _offsetZ);
        // var maxHeight = control.maxHeight;//180;
        var targetHeight = control.maxHeight;
        var len = 1000;
        camera.position.set(0, targetHeight + 60, 80 + _offsetZ);
        camera.lookAt(_center);

        $(renderer.domElement).on('mousewheel', function (event) {
            len = len + event.originalEvent.deltaY;
            len = Math.min(Math.max(len, 0), 3000);
            targetHeight = THREE.Math.mapLinear(Math.min(len, 1000), 0, 1000, 30, control.maxHeight);
        });

        this.update = function () {
            if (len >= 2000) {
                camera.position.z = 0.1;
                camera.position.y = control.maxHeight;
            } else {
                camera.position.z = 80;
                camera.position.y += .05 * (targetHeight - camera.position.y);
            }
            camera.lookAt(_center);
        }
    }
    // 初始化世界
    function initWorld() {
        var nRows = 8;
        var nCols = 4;
        var chunkSize = 60;
        var citySizeX = nCols * chunkSize;
        var citySizeZ = nRows * chunkSize;
        this.chunkTable = buildCity(nRows, nCols);

        var sceneOffset = new THREE.Vector3;
        this.offset = new THREE.Vector2;
        this.update = function () {
            // 跟随主车辆
            carsControl && carsControl.carSelf && (this.offset.y = -carsControl.carSelf.position.z);
            sceneOffset.z = this.offset.y;
            sceneOffset.x = -this.offset.x;
            chunkScene.position.lerp(sceneOffset, .05);
            refreshPosition();
        }
        this.reset = function () {
            if (chunkScene.position.z > citySizeZ) {
                chunkScene.position.copy(new THREE.Vector3(0, 0, 0));
            }
        }

        function buildChunk() {
            var chunk = new THREE.Object3D();
            chunk.name = "chunk";
            var offsetX = -30;
            var offsetZ = 0;

            var block = randomPick(objects.blocks).clone();
            block.position.set(0 + offsetX, 0, 0 + offsetZ);
            block.rotation.set(0, Math.floor(Math.random() * 4) * Math.PI / 2, 0);
            chunk.add(block);

            var lane = randomPick(objects.lanes).clone();
            lane.position.set(30 + offsetX, 0, 10 + offsetZ);
            chunk.add(lane);
            var lane = randomPick(objects.lanes).clone();
            lane.position.set(30 + offsetX, 0, -10 + offsetZ);
            chunk.add(lane);
            var lane = randomPick(objects.lanes).clone();
            lane.position.set(10 + offsetX, 0, -30 + offsetZ);
            lane.rotation.set(0, Math.PI / 2, 0);
            chunk.add(lane);
            var lane = randomPick(objects.lanes).clone();
            lane.position.set(-10 + offsetX, 0, -30 + offsetZ);
            lane.rotation.set(0, Math.PI / 2, 0);
            chunk.add(lane);

            var intersection = randomPick(objects.intersections).clone();
            intersection.position.set(30 + offsetX, 0, -30 + offsetZ);
            chunk.add(intersection);

            return chunk;
        }
        function buildCity(nRows, nCols) {
            var chunkTable = [];
            var offsetX = -chunkSize * (Math.ceil(nCols / 2) - 1);
            var offsetZ = chunkSize * (nRows > 1);
            for (let i = 0; i < nRows; i++) {
                var chunkRow = [];
                for (let j = 0; j < nCols; j++) {
                    var chunk = buildChunk();
                    chunk.position.set(chunkSize * j + offsetX, 0, -chunkSize * i + offsetZ);
                    chunk.col = i;
                    chunk.row = j;
                    // console.log(i,j,chunk.position.x,chunk.position.z)
                    chunkScene.add(chunk);
                    chunkRow.push(chunk);
                }
                chunkTable.push(chunkRow);
            }
            return chunkTable;
        }
        function refreshPosition() {
            var worldPosition;
            var chunk;
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    chunk = worldControl.chunkTable[i][j];
                    worldPosition = chunk.getWorldPosition();
                    // if (i==0 && j==0) console.log(chunk.getWorldPosition());
                    if (worldPosition.z >= 2 * chunkSize) {
                        chunk.position.z -= citySizeZ;
                    } else if (worldPosition.z < -citySizeZ + 2 * chunkSize) {
                        chunk.position.z += citySizeZ;
                    }
                    if (worldPosition.x >= citySizeX / 2 + chunkSize / 2) {
                        chunk.position.x -= citySizeX;
                    } else if (worldPosition.x < -citySizeX / 2 + chunkSize / 2) {
                        chunk.position.x += citySizeX;
                    }
                }
            }
        }
    }

    // 初始化车辆
    function initCars() {
        this.carSelf = initCar(new THREE.Vector3(3.4, 0, 6.5));
        this.carOther = initCar(new THREE.Vector3(-3.4, 0, -180), new THREE.Euler(0, Math.PI, 0));

        // for (let i = 0; i < objects.cars.length; i++) {
        //     initCar(new THREE.Vector3(4*i-30-40,0,-30),new THREE.Euler(0,Math.PI,0),false,i);
        // }

        this.update = function () {
            this.carSelf && this.carSelf.moveUpdate();
            this.carOther && this.carOther.moveUpdate();
        }
        this.reset = function () {
            this.carSelf && this.carSelf.reset();
            this.carOther && this.carOther.reset();
        }

        function initCar(position, rotation, stop, ind) {
            var car = void 0 != ind ? objects.cars[ind].clone() : randomPick(objects.cars).clone();
            chunkScene.add(car);
            position && (car.position.copy(position));
            rotation && (car.rotation.copy(rotation));
            car.direction = car.getWorldDirection().negate();
            car.direction.set(Math.round(car.direction.x), Math.round(car.direction.y), Math.round(car.direction.z));

            car.stop = stop || false;
            car.turn = 0;
            car.speed = control.maxSpeed;

            car.reset = function () {
                position && (this.position.copy(position));
                rotation && (this.rotation.copy(rotation));
                this.direction = this.getWorldDirection().negate();
                this.direction.set(Math.round(this.direction.x), Math.round(this.direction.y), Math.round(car.direction.z));

                this.stop = false;
                this.turn = 0;
                this.speed = control.maxSpeed;
            }

            var value = new THREE.Vector3;
            var turnSpeed;
            var checkTurn;
            var lightSign = 0;
            car.moveUpdate = function () {
                //转向
                checkTurn = this.isOnIntersection(3, 1);
                lightSign > 0 && lightSign--;
                if (lightSign <= 10) {
                    car.getObjectByName('leftLight').material.opacity = 0;
                    car.getObjectByName('rightLight').material.opacity = 0;
                }
                if (checkTurn >= 1 && this.turn != 0) {
                    //打转向灯
                    if (lightSign == 0) {
                        if (this.turn > 0) {
                            car.getObjectByName('leftLight').material.opacity = 1;
                        } else if (this.turn < 0) {
                            car.getObjectByName('rightLight').material.opacity = 1;
                        }
                        lightSign = 30;
                    }
                }
                if (checkTurn == 2) {
                    if (this.turn > 0) {
                        //左转
                        turnSpeed = 0.01 * this.speed * 5;
                        this.turn -= turnSpeed;
                        this.rotation.y += turnSpeed * Math.PI / 2;
                        this.direction = this.getWorldDirection().negate();
                    }
                    else if (this.turn < 0) {
                        //右转
                        turnSpeed = 0.02 * this.speed * 5;
                        this.turn += turnSpeed;
                        this.rotation.y -= turnSpeed * Math.PI / 2;
                        this.direction = this.getWorldDirection().negate();
                    }
                    if (Math.abs(this.turn) < 0.005 && this.turn != 0) {
                        this.turn = 0;
                        this.rotation.y = Math.round(this.rotation.y * 2 / Math.PI) * Math.PI / 2;
                        this.direction = this.getWorldDirection().negate();
                        this.direction.set(Math.round(this.direction.x), Math.round(this.direction.y), Math.round(car.direction.z));
                    }
                }
                //启停
                if (this.stop) {
                    this.speed -= .0375 * control.maxSpeed;
                    this.speed = Math.max(this.speed, 0);
                } else if (this.speed < control.maxSpeed) {
                    this.speed += .0375 * control.maxSpeed;
                    this.speed = Math.min(this.speed, control.maxSpeed);
                } else if (this.speed > control.maxSpeed) {
                    this.speed -= .00375;
                    this.speed = Math.max(this.speed, control.maxSpeed);
                }
                //移动
                value.copy(this.direction).multiplyScalar(this.speed);
                this.position.add(value);
            }
            var testChunk;
            var testInterOffset = 0.6;
            var testCloseInterOffset = -15;
            car.isOnIntersection = function (row, col) {
                testChunk = worldControl.chunkTable[row][col];
                // console.log(this.getWorldPosition().x,this.getWorldPosition().z);
                // console.log(testChunk.getWorldPosition().x,testChunk.getWorldPosition().z);
                return (this.getWorldPosition().x <= testChunk.getWorldPosition().x + 10 - testInterOffset) &&
                    (this.getWorldPosition().x >= testChunk.getWorldPosition().x - 10 + testInterOffset) &&
                    (this.getWorldPosition().z <= testChunk.getWorldPosition().z + 40 - testInterOffset) &&
                    (this.getWorldPosition().z >= testChunk.getWorldPosition().z + 20 + testInterOffset)
                    ? 2 : (this.getWorldPosition().x <= testChunk.getWorldPosition().x + 10 - testCloseInterOffset) &&
                    (this.getWorldPosition().x >= testChunk.getWorldPosition().x - 10 + testCloseInterOffset) &&
                    (this.getWorldPosition().z <= testChunk.getWorldPosition().z + 40 - testCloseInterOffset) &&
                    (this.getWorldPosition().z >= testChunk.getWorldPosition().z + 20 + testCloseInterOffset);
            }
            return car;
        }
    }
    function addLightForCars(cars) {
        cars.map((car) => {
            var texture = new THREE.TextureLoader().load('assets/textures/light.png');
            var material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0
            });
            var geometry = new THREE.PlaneGeometry(.5, .5);
            var rightLight = new THREE.Mesh(geometry, material);
            rightLight.name = "rightLight";
            car.add(rightLight);
            material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0
            });
            geometry = new THREE.PlaneGeometry(.5, .5);
            leftLight = new THREE.Mesh(geometry, material);
            leftLight.name = "leftLight";
            car.add(leftLight);
            // console.log(car.name);
            if (car.name.indexOf('_Bus_') != -1) {
                rightLight.position.set(1.3, 1.12, -4.7);
                leftLight.position.set(-1.3, 1.12, -4.7);
            } else if (car.name.indexOf('_Car_') != -1) {
                rightLight.position.set(1.1, 1.1, -3);
                leftLight.position.set(-1.1, 1.1, -3);
            } else if (car.name.indexOf('_Container_') != -1) {
                rightLight.position.set(1.2, 1.5, -4.5);
                leftLight.position.set(-1.2, 1.5, -4.5);
            } else if (car.name.indexOf('_Pick up Truck_') != -1) {
                rightLight.position.set(1.2, 1.15, -3.2);
                leftLight.position.set(-1.2, 1.15, -3.2);
            } else if (car.name.indexOf('_SUV_') != -1) {
                rightLight.position.set(1.1, 1.11, -3);
                leftLight.position.set(-1.25, 1.11, -3);
            } else if (car.name.indexOf('_Taxi') != -1) {
                rightLight.position.set(1.05, 1.11, -3);
                leftLight.position.set(-1.05, 1.11, -3);
            } else if (car.name.indexOf('_Truck_') != -1) {
                rightLight.position.set(1.2, 1.5, -4.5);
                leftLight.position.set(-1.2, 1.5, -4.5);
            }
            return car;
        })
        return cars;
    }
    //辅助函数
    function randomPick(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
})();
