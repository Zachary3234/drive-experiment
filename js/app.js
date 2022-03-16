const app = new (function Application() {
    //初始化3D场景
    var renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('canvas'),
        antialias: true
    });
    renderer.setSize($('#render').width(), $('#render').height());
    renderer.setClearColor(0xcccccc);
    renderer.setPixelRatio(1.5);
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
    var pause = false;
    var decision = false;
    var reaction = false;
    var control = {
        baseSpeed: 0.1,
        maxSpeed: 0.2,
        maxHeight: 170,
    };
    this.control = control;

    //加载场景
    loadObjects().then((sceneObjects) => {
        //保存场景对象
        // objects.light = sceneObjects.getObjectByName("Directional Light");
        objects.blocks = sceneObjects.getObjectByName("blocks").children;
        objects.lanes = sceneObjects.getObjectByName("lanes").children;
        objects.intersections = sceneObjects.getObjectByName("intersections").children;
        objects.carsOri = sceneObjects.getObjectByName("cars").children;
        objects.clouds = sceneObjects.getObjectByName("clouds").children;
        // 去掉一些不要的对象
        objects.lanes = [objects.lanes.find((ele) => { return ele.name === "Road_Lane_01_fixed" })];
        objects.intersections = [objects.intersections.find((ele) => { return ele.name === "Road_Intersection_03_merged_fixed" })];
        objects.carsOri.splice(13, 1); //"Vehicle_Police Car"
        objects.carsOri.splice(0, 1); //"Vehicle_Ambulance"
        // 给车加上车灯
        objects.cars = addLightForCars(objects.carsOri);

        //搭建场景
        viewControl = new initView();
        worldControl = new initWorld();
        carsControl = new initCars();
        //启动
        update();
    });

    //尺寸更新
    window.onresize = function () {
        renderer.setSize($('#render').width(), $('#render').height());
        camera.aspect = $('#render').width() / $('#render').height();
        camera.updateProjectionMatrix();
    }
    
    var distance = 0;
    var deciRes = {stopSelf:true,stopOther:true};
    //渲染画面
    var timeS = 0;
    var clock = new THREE.Clock();
    var FPS = 60;
    var renderT = 1 / FPS; //单位秒  间隔多长时间渲染渲染一次
    function update() {
        requestAnimationFrame(update);

        timeS = timeS + clock.getDelta();
        // requestAnimationFrame默认调用render函数60次，通过时间判断，降低renderer.render执行频率
        if (timeS > renderT) {
            // 控制台查看渲染器渲染方法的调用周期，也就是间隔时间是多少
            // console.log(`调用.render时间间隔`,timeS*1000+'毫秒');
            // renderer.render(scene, camera); //执行渲染操作
            viewControl && viewControl.update();
            if (!pause) {
                worldControl && worldControl.update();
                carsControl && carsControl.update();
            }
    
            //触发决策
            if (carsControl && carsControl.carSelf && carsControl.carOther){
                distance = carsControl.carSelf.getWorldPosition().z - carsControl.carOther.getWorldPosition().z;
                if (carsControl.carSelf.isBigCar)
                    distance -= 1.5;
                if (carsControl.carOther.isBigCar)
                    distance -= 1.5;
            }
            if (void 0 != carsControl && 
                !decision && 
                distance > 80 && distance < 90) {
                decision = true;
                exp.startDecision();
                control.maxSpeed = control.baseSpeed;
            }
            //决策结束
            if (void 0 != carsControl && 
                decision && 
                distance > 10 && distance < 20) {
                decision = false;
                reaction = true;
                deciRes = exp.endDecision();
                // deciRes = {stopSelf:false,stopOther:false};
                control.maxSpeed = control.baseSpeed*2;
            }
            //决策结果
            if (void 0 != carsControl && reaction && distance < 20) {
                deciRes.stopSelf && app.stopSelf();
                deciRes.stopOther && app.stopOther();
                
                if (!deciRes.stopSelf && !deciRes.stopOther){
                    //双方都前进，相撞
                    if (distance < 7){
                        app.crashCar();
                        reaction = false;
                    }
                }else{
                    reaction = false;
                }
            }
            if (!pause) {
                renderer.render(scene, camera);
            }

            //renderer.render每执行一次，timeS置0
            timeS = 0;
        }
    }

    //全局控制
    this.reset = function () {
        worldControl && worldControl.reset();
        carsControl && carsControl.reset();
        decision = false;
        reaction = false;
    };
    this.pause = function () {
        pause = !pause;
    };
    //车辆控制
    this.stopSelf = function () {
        carsControl && carsControl.carSelf && (carsControl.carSelf.stop = !carsControl.carSelf.stop);
    };
    this.stopOther = function () {
        carsControl && carsControl.carOther && (carsControl.carOther.stop = !carsControl.carOther.stop);
    };
    this.crashCar = function () {
        carsControl && 
        (carsControl.carSelf && (carsControl.carSelf.crash = true)),
        (carsControl.carOther && (carsControl.carOther.crash = true));
    };
    this.setSelf = function (zoffset) {
        carsControl && carsControl.setSelf(zoffset);
    };
    this.setOther = function () {
        carsControl && carsControl.setOther();
    };
    this.setSelfType = function (type) {
        carsControl && carsControl.setSelfType(type);
    }
    this.setOtherType = function (type) {
        carsControl && carsControl.setOtherType(type);
    }
    //其他控制
    this.setSpeed = function (val) {
        control.maxSpeed = control.baseSpeed*parseFloat(val);
        // console.log(parseFloat(val),control.maxSpeed);
    };
    this.setBaseSpeed = function (val) {
        control.baseSpeed = 0.1*parseFloat(val);
        // console.log(parseFloat(val),control.maxSpeed);
    };
    this.setHeight = function (val) {
        control.maxHeight = parseFloat(val);
    };


    // 初始化视角
    function initView() {
        const _center = new THREE.Vector3(0, 0, 0);
        var targetHeight = control.maxHeight;
        var len = 3000;
        camera.position.set(0, targetHeight + 60, 80);
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
                camera.position.z = 80.1;
                camera.position.y += .05 * (targetHeight - camera.position.y);
            }
            camera.lookAt(_center);
        }
    }
    // 初始化世界
    function initWorld() {
        var nRows = 8;
        var nCols = 6;
        var chunkSize = 60;
        var citySizeX = nCols * chunkSize;
        var citySizeZ = nRows * chunkSize;
        this.chunkTable = buildCity(nRows, nCols);

        var zoffset = 10;
        var sceneOffset = new THREE.Vector3(0,0,zoffset);
        chunkScene.position.set(0,0,zoffset);
        this.update = function () {
            // 跟随主车辆
            carsControl && carsControl.carSelf && (sceneOffset.z = -carsControl.carSelf.position.z+zoffset);
            chunkScene.position.lerp(sceneOffset, .05);
            refreshPosition();
        }
        this.reset = function () {
            sceneOffset = new THREE.Vector3(0,0,zoffset);
            chunkScene.position.set(0,0,zoffset);
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    chunkScene.remove(this.chunkTable[i][j]);
                }
            }
            this.chunkTable = buildCity(nRows, nCols);
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
        var currCord = {row:1,col:2};
        var meetChunk = worldControl.chunkTable[currCord.row][currCord.col];
        this.carSelf = null;
        this.carOther = null;
        this.carOtherLast = null;

        this.update = function () {
            this.carSelf && this.carSelf.moveUpdate();
            this.carOther && this.carOther.moveUpdate();
            if(this.carOtherLast){
                this.carOtherLast.moveUpdate();
                if (Math.abs(this.carOtherLast.position.x-meetChunk.position.x)>60){
                    this.carOtherLast.remove();
                    this.carOtherLast = null;
                }
            }
        }
        this.reset = function () {
            this.carSelf && this.carSelf.remove();
            this.carOther && this.carOther.remove();
            this.carOtherLast && this.carOtherLast.remove();
            this.carSelf = null;
            this.carOther = null;
            this.carOtherLast = null;
            currCord = {row:1,col:2};
            meetChunk = worldControl.chunkTable[currCord.row][currCord.col];
        }
        this.setSelf = function (zoffset = 0) {
            if (this.carSelf){
                this.carSelf.position.copy((new THREE.Vector3(3.4, 0, zoffset)).add(meetChunk.position));
                this.carSelf.rotation.copy(new THREE.Euler(0, 0, 0));
                this.carSelf.stop = false;
                this.carOther && this.carOther.remove();
                this.carOther = null;
                this.carOtherLast && this.carOtherLast.remove();
                this.carOtherLast = null;
            }else{
                this.carSelf = initCar((new THREE.Vector3(3.4, 0, zoffset)).add(meetChunk.position),
                                    null,null,null,
                                    carSelfType>=0?carTypeSet[carSelfType]:null);
            }
        }
        this.setOther = function () {
            if (null == this.carSelf) return;
            if (this.carOther){
                this.carOtherLast && this.carOtherLast.remove();
                this.carOtherLast = this.carOther;
            }
            currCord.row = checkChunkRow(this.carSelf,30);
            if(currCord.row == undefined) currCord.row = 1;
            meetChunk = worldControl.chunkTable[currCord.row][currCord.col];
            this.carOther = initCar((new THREE.Vector3(-3.4, 0, meetChunk.position.z-this.carSelf.position.z-53.5)).add(meetChunk.position),
                                    new THREE.Euler(0, Math.PI, 0), 1, null,
                                    carOtherType>=0?carTypeSet[carOtherType]:null);
        }

        var carSelfType = -1;
        var carOtherType = -1;
        var carTypeNone    = [objects.cars[3],objects.cars[5],objects.cars[10],objects.cars[17]];
        var carTypeSocial  = [objects.cars[1],objects.cars[6],objects.cars[14],objects.cars[16]];
        var carTypeSelfish = [objects.cars[2],objects.cars[8],objects.cars[9]];
        var carTypeSet = [carTypeNone,carTypeSocial,carTypeSelfish];
        this.setSelfType = function (type) {
            carSelfType = type;
        }
        this.setOtherType = function (type) {
            carOtherType = type;
        }
        function checkChunkRow(car,offset = 0){
            for (let i=0;i<worldControl.chunkTable.length;i++){
                if (Math.abs(car.position.z - worldControl.chunkTable[i][currCord.col].position.z - offset)<30){
                    return i;
                }
            }
        }
        
        function initCar(position, rotation, turn = 0, stop = false, iniCars) {
            var car = void 0 != iniCars ? randomPop(iniCars) : randomPop(objects.cars);//randomPop(objects.cars);

            car.carSet = iniCars;

            chunkScene.add(car);
            position && (car.position.copy(position));
            rotation && (car.rotation.copy(rotation));
            car.direction = car.getWorldDirection().negate();
            car.direction.set(Math.round(car.direction.x), Math.round(car.direction.y), Math.round(car.direction.z));

            car.stop = stop;
            car.turn = turn;
            car.speed = control.maxSpeed;
            car.speedRatio = 1;

            var turnCord = turn==0 ? null : {row:currCord.row,col:currCord.col};
            var value = new THREE.Vector3;
            var turnSpeed;
            var checkTurn;
            var lightSign = 0;
            car.moveUpdate = function () {
                //转向
                checkTurn = turnCord ? this.isOnIntersection(null, turnCord.row, turnCord.col) : 0;
                if (checkTurn >= 1) {
                    if (this.turn != 0){
                        //打转向灯
                        lightSign--;
                        if (lightSign <= 0) {
                            if (this.turn > 0) {
                                car.getObjectByName('leftLight').material.opacity = 1;
                            } else if (this.turn < 0) {
                                car.getObjectByName('rightLight').material.opacity = 1;
                            }
                            lightSign = 30;
                        }else if(lightSign <= 10){
                            car.getObjectByName('leftLight').material.opacity = 0;
                            car.getObjectByName('rightLight').material.opacity = 0;
                        }
                    }
                    else{
                        car.getObjectByName('leftLight').material.opacity = 0;
                        car.getObjectByName('rightLight').material.opacity = 0;
                    }
                }else{
                    car.getObjectByName('leftLight').material.opacity = 0;
                    car.getObjectByName('rightLight').material.opacity = 0;
                }
                if (checkTurn == 2) {
                    if (this.turn > 0) {
                        //左转
                        turnSpeed = 0.01 * this.speedRatio * control.maxSpeed * 5;
                        // turnSpeed = 0.01 * this.speed * 5;
                        this.turn -= turnSpeed;
                        this.rotation.y += turnSpeed * Math.PI / 2;
                        this.direction = this.getWorldDirection().negate();
                    }
                    else if (this.turn < 0) {
                        //右转
                        turnSpeed = 0.02 * this.speedRatio * control.maxSpeed * 5;
                        // turnSpeed = 0.02 * this.speed * 5;
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
                if (this.crash) {
                    this.stop = true;
                    this.speedRatio -= .375 * 2 * control.maxSpeed;
                    if (this == carsControl.carSelf)
                        this.rotation.y -= 0.1 * control.maxSpeed *  Math.PI / 2;
                    else
                        this.rotation.y += 0.1 * control.maxSpeed *  Math.PI / 2;
                    if (this.speedRatio <= 0) {
                        this.speedRatio = 0;
                        this.crash = false;
                    }
                    // else if (this.speedRatio <= 0.5) {
                    //     this.turn = 0.5;
                    // }
                }else {
                    if (this.stop) {
                        this.speedRatio -= .375 * control.maxSpeed;
                        this.speedRatio = Math.max(this.speedRatio, 0);
                    } else if (this.speedRatio < 1) {
                        this.speedRatio += .375 * control.maxSpeed;
                        this.speedRatio = Math.min(this.speedRatio, 1);
                    } else if (this.speedRatio > 1) {
                        this.speedRatio = 1;
                    }
                }
                // if (this.stop) {
                //     this.speed -= .0375 * control.maxSpeed;
                //     this.speed = Math.max(this.speed, 0);
                // } else if (this.speed < control.maxSpeed) {
                //     this.speed += .0375 * control.maxSpeed;
                //     this.speed = Math.min(this.speed, control.maxSpeed);
                // } else if (this.speed > control.maxSpeed) {
                //     this.speed -= .00375;
                //     this.speed = Math.max(this.speed, control.maxSpeed);
                // }
                //移动
                value.copy(this.direction).multiplyScalar(this.speedRatio * control.maxSpeed);
                // value.copy(this.direction).multiplyScalar(this.speed);
                this.position.add(value);
            }
            var testInterOffset = 0.6;
            var testCloseInterOffset = -15;
            car.isOnIntersection = function (checkChunk, row, col) {
                checkChunk = checkChunk || worldControl.chunkTable[row][col];
                return (this.getWorldPosition().x <= checkChunk.getWorldPosition().x + 10 - testInterOffset) &&
                    (this.getWorldPosition().x >= checkChunk.getWorldPosition().x - 10 + testInterOffset) &&
                    (this.getWorldPosition().z <= checkChunk.getWorldPosition().z - 20 - testInterOffset) &&
                    (this.getWorldPosition().z >= checkChunk.getWorldPosition().z - 40 + testInterOffset)
                    ? 2 : (this.getWorldPosition().x <= checkChunk.getWorldPosition().x + 10 - testCloseInterOffset) &&
                    (this.getWorldPosition().x >= checkChunk.getWorldPosition().x - 10 + testCloseInterOffset) &&
                    (this.getWorldPosition().z <= checkChunk.getWorldPosition().z - 20 - testCloseInterOffset) &&
                    (this.getWorldPosition().z >= checkChunk.getWorldPosition().z - 40 + testCloseInterOffset);
            }
            car.remove = function () {
                this.rotation.copy(new THREE.Euler(0, 0, 0));
                this.carSet.push(this);
                chunkScene.remove(this);
            }
            return car;
        }
    }
    function addLightForCars(cars) {
        var carsMod = [];
        cars.forEach(car0 => {
            var car = new THREE.Object3D();

            var carMesh = car0.clone();
            car.add(carMesh);
            car.name = carMesh.name;
            carMesh.name = 'carMesh';

            var texture = new THREE.TextureLoader().load('assets/textures/light.png');
            var material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: 0
            });
            var rightLight = new THREE.Sprite(material);
            rightLight.name = "rightLight";
            car.add(rightLight);
            material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: 0
            });
            leftLight = new THREE.Sprite(material);
            leftLight.name = "leftLight";
            car.add(leftLight);

            if (car.name.indexOf('_Bus_') != -1) {
                rightLight.position.set(1.3, 1.12, -4.7);
                leftLight.position.set(-1.3, 1.12, -4.7);
                car.isBigCar = true;
            } else if (car.name.indexOf('_Car_') != -1) {
                rightLight.position.set(1.1, 1.1, -3);
                leftLight.position.set(-1.1, 1.1, -3);
            } else if (car.name.indexOf('_Container_') != -1) {
                rightLight.position.set(1.2, 1.5, -4.6);
                leftLight.position.set(-1.2, 1.5, -4.6);
                car.isBigCar = true;
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
                car.isBigCar = true;
            }

            carsMod.push(car);
        });
        return carsMod;
    }
})();
//辅助函数
function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function randomPop(array) {
    return array.splice(Math.floor(Math.random() * array.length),1)[0];
}
function randomDecide(rate) {
    return Math.random()<rate;
}