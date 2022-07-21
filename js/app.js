const app = new (function Application() {
    //场景更新控制
    var viewControl = null;
    var worldControl = null;
    var carsControl = null;
    //控制参数
    var pause = true;
    var control = {
        baseSpeed: 0.1,//0.1,
        maxSpeed: 0.2,
        maxHeight: 170,
        selfType: 1,
        otherType: 1,
    };
    //控制函数
    this.pause = function (p = !pause) {
        pause = p;
    }
    this.reset = function () {
        worldControl && worldControl.reset();
        carsControl && carsControl.reset();
    }
    this.nextMove = function (turnSelf = 0,turnOther = 1) {
        carsControl && carsControl.setCars(turnSelf,turnOther);
    }
    //车辆控制
    this.setCarType = function (coopRate, waitRate) {
        // 0:绿车 1:白车 2:红车
        control.selfType = coopRate > 0.5 ? 0 :
            coopRate == 0.5 ? 1 : 2;
        control.otherType = waitRate > 0.5 ? 0 :
            waitRate == 0.5 ? 1 : 2;
        this.changeSelf();
        this.changeOther();
    }
    this.changeSelf = function (ind) {
        carsControl && carsControl.changeSelf(ind);
    }
    this.changeOther = function (ind) {
        carsControl && carsControl.changeOther(ind);
    }
    this.stopSelf = function () {
        carsControl && carsControl.carSelf && (carsControl.carSelf.stop = true);
    };
    this.stopOther = function () {
        carsControl && carsControl.carOther && (carsControl.carOther.stop = true);
    };
    this.crashCar = function () {
        carsControl && 
        (carsControl.carSelf && (carsControl.carSelf.crash = true)),
        (carsControl.carOther && (carsControl.carOther.crash = true));
    };
    //其他控制
    this.setSpeed = function (val) {
        control.maxSpeed = control.baseSpeed*parseFloat(val);
    };
    this.setBaseSpeed = function (val) {
        control.baseSpeed = 0.1*parseFloat(val);
    };
    this.setHeight = function (val) {
        control.maxHeight = parseFloat(val);
    };


    // 初始化3D场景
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
    //灯光
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
        objects.blocks.splice(13,6);
        objects.lanes = [objects.lanes.find((ele) => { return ele.name === "Road_Lane_01_fixed" })];
        objects.intersections = [objects.intersections.find((ele) => { return ele.name === "Road_Intersection_03_merged_fixed" })];
        objects.cars.splice(13, 1); //"Vehicle_Police Car"
        objects.cars.splice(0, 1); //"Vehicle_Ambulance"

        //搭建场景
        viewControl = new initView();
        worldControl = new initWorld();
        carsControl = new initCars();
        //启动
        loaded();
        update();
    });
    //尺寸更新
    window.onresize = function () {
        renderer.setSize($('#render').width(), $('#render').height());
        camera.aspect = $('#render').width() / $('#render').height();
        camera.updateProjectionMatrix();
    }
    //渲染画面
    var timeS = 0;
    var clock = new THREE.Clock();
    var FPS = 60;
    var renderT = 1 / FPS; //单位秒  间隔多长时间渲染渲染一次
    var decision = false;
    var reaction = false;
    var deciRes = {stopSelf:true,stopOther:true};
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
    
            //开始决策
            var distance = NaN;
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
            }
            //结束决策
            if (void 0 != carsControl && 
                decision && 
                distance > 10 && distance < 20) {
                decision = false;
                reaction = true;
                deciRes = exp.endDecision();
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
            chunkScene.position.lerp(sceneOffset, .05*control.maxSpeed/control.baseSpeed);
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
        this.forceAlign = function () {
            sceneOffset.z = -carsControl.carSelf.position.z+zoffset;
            chunkScene.position.copy(sceneOffset);
            refreshPosition();
        }

        function buildChunk() {
            var chunk = new THREE.Object3D();
            chunk.name = "chunk";
            var offsetX = -30;
            var offsetZ = 0;

            var block = objects.blocks.randomPick().clone();
            block.position.set(0 + offsetX, 0, 0 + offsetZ);
            block.rotation.set(0, Math.floor(Math.random() * 4) * Math.PI / 2, 0);
            chunk.add(block);

            var lane = objects.lanes.randomPick().clone();
            lane.position.set(30 + offsetX, 0, 10 + offsetZ);
            chunk.add(lane);
            lane = objects.lanes.randomPick().clone();
            lane.position.set(30 + offsetX, 0, -10 + offsetZ);
            chunk.add(lane);
            lane = objects.lanes.randomPick().clone();
            lane.position.set(10 + offsetX, 0, -30 + offsetZ);
            lane.rotation.set(0, Math.PI / 2, 0);
            chunk.add(lane);
            lane = objects.lanes.randomPick().clone();
            lane.position.set(-10 + offsetX, 0, -30 + offsetZ);
            lane.rotation.set(0, Math.PI / 2, 0);
            chunk.add(lane);

            var intersection = objects.intersections.randomPick().clone();
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
        var currCord = {row:0,col:2};
        var meetChunk = worldControl.chunkTable[currCord.row][currCord.col];
        this.carSelf = null;
        this.carOther = null;
        // this.carOtherLast = null;

        this.update = function () {
            this.carSelf && this.carSelf.moveUpdate();
            this.carOther && this.carOther.moveUpdate();
            // if(this.carOtherLast){
            //     this.carOtherLast.moveUpdate();
            //     if (Math.abs(this.carOtherLast.position.x-meetChunk.position.x)>60){
            //         chunkScene.remove(this.carOtherLast);
            //         this.carOtherLast = null;
            //     }
            // }
        }
        this.reset = function () {
            this.carSelf && chunkScene.remove(this.carSelf);
            this.carOther && chunkScene.remove(this.carOther);
            // this.carOtherLast && chunkScene.remove(this.carOtherLast);
            this.carSelf = null;
            this.carOther = null;
            // this.carOtherLast = null;
            currCord = {row:0,col:2};
            meetChunk = worldControl.chunkTable[currCord.row][currCord.col];
        }
        this.setCars = function (turnSelf = 0,turnOther = 1) {
            // 生成车（没有车的话）
            this.changeSelf();
            this.changeOther();

            // 确定相遇路口
            currCord.row = (currCord.row+1) % worldControl.chunkTable.length;
            meetChunk = worldControl.chunkTable[currCord.row][currCord.col];

            // 设置车位置
            if (turnSelf!=0)
                this.carSelf.position.copy((new THREE.Vector3(3.4, 0, -30+53.5)).add(meetChunk.position));
            else
                this.carSelf.position.copy((new THREE.Vector3(3.4, 0, -30+60)).add(meetChunk.position));
            this.carSelf.rotation.copy(new THREE.Euler(0, 0, 0));
            this.carSelf.direction.set(0,0,-1);
            this.carSelf.turn = turnSelf;
            this.carSelf.stop = false;
            this.carSelf.crash = false;
            if (turnOther!=0)
                this.carOther.position.copy((new THREE.Vector3(-3.4, 0, -30-53.5)).add(meetChunk.position));
            else
                this.carOther.position.copy((new THREE.Vector3(-3.4, 0, -30-60)).add(meetChunk.position));
            this.carOther.rotation.copy(new THREE.Euler(0, Math.PI, 0));
            this.carOther.direction.set(0,0,1);
            this.carOther.turn = turnOther;
            this.carOther.stop = false;
            this.carOther.crash = false;

            worldControl.forceAlign();
        }

        var carTypeSocial  = [objects.cars[14]];//[objects.cars[1],objects.cars[6],objects.cars[14]];
        var carTypeNone    = [objects.cars[3],objects.cars[5],objects.cars[10]];//[objects.cars[3],objects.cars[5],objects.cars[10],objects.cars[17]];
        var carTypeSelfish = [objects.cars[9]];//[objects.cars[2],objects.cars[8],objects.cars[9],objects.cars[16]];
        var carSelf        = [objects.cars[4],objects.cars[11]];
        var carTypeSet = [carTypeSocial,carTypeNone,carTypeSelfish];
        this.changeSelf = function (ind) {
            var newCarMesh = void 0==ind ? carSelf.randomPick() : 
            carSelf[ind % carSelf.length];//4,11

            this.carSelf = initCar(newCarMesh,this.carSelf);
        }
        this.changeOther = function (ind) {
            var newCarMesh = void 0==ind ? carTypeSet[control.otherType].randomPick() : 
                carTypeSet[control.otherType][ind % carTypeSet[control.otherType].length];

            this.carOther = initCar(newCarMesh,this.carOther);
        }

        function initCar(carMesh, carObj = null) {
            var car = addLights(carMesh);
            car.direction = car.getWorldDirection().negate();
            car.direction.set(Math.round(car.direction.x), Math.round(car.direction.y), Math.round(car.direction.z));
            car.speedRatio = 1;
            car.stop = false;
            car.turn = 0;
            car.crash = false;
            car.lightSign = 0;
            if (carObj) {
                car.position.copy(carObj.position);
                car.rotation.copy(carObj.rotation);
                car.direction.copy(carObj.direction);
                car.speedRatio = carObj.speedRatio;
                car.stop = carObj.stop;
                car.turn = carObj.turn;
                car.crash = carObj.crash;
                car.lightSign = carObj.lightSign;
                chunkScene.remove(carObj);
            }
            chunkScene.add(car);

            car.moveUpdate = function () {
                //转向
                var checkTurn = this.isOnIntersection(null, currCord.row, currCord.col);
                if (checkTurn >= 1) {
                    if (this.turn != 0){
                        //打转向灯
                        this.lightSign--;
                        if (this.lightSign <= 0) {
                            if (this.turn > 0) {
                                car.getObjectByName('leftLight').material.opacity = 1;
                            } else if (this.turn < 0) {
                                car.getObjectByName('rightLight').material.opacity = 1;
                            }
                            this.lightSign = 30;
                        }else if(this.lightSign <= 10){
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
                    let turnSpeed;
                    if (this.turn > 0) {
                        //左转
                        turnSpeed = 0.01 * this.speedRatio * control.maxSpeed * 5;
                        this.turn -= turnSpeed;
                        this.rotation.y += turnSpeed * Math.PI / 2;
                        this.direction = this.getWorldDirection().negate();
                    }
                    else if (this.turn < 0) {
                        //右转
                        turnSpeed = 0.02 * this.speedRatio * control.maxSpeed * 5;
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
                    if (this.turn==0)
                        this.rotation.y -= 0.1 * control.maxSpeed *  Math.PI / 2;
                    else
                        this.rotation.y += 0.1 * control.maxSpeed *  Math.PI / 2;
                    if (this.speedRatio <= 0) {
                        this.speedRatio = 0;
                        this.crash = false;
                    }
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
                //移动
                var value = new THREE.Vector3;
                value.copy(this.direction).multiplyScalar(this.speedRatio * control.maxSpeed);
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

            return car;
        }
        function addLights(car0) {
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
            var leftLight = new THREE.Sprite(material);
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
            return car;
        }
    }
})();
