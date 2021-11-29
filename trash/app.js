const app = new (function Application(){
    //创建场景对象
    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer({
        canvas : document.querySelector('canvas'),
    });
    var camera = new THREE.PerspectiveCamera(30, $('#render').width()/$('#render').height(), 1, 400);
    scene.background = new THREE.Color(10676479);
    scene.fog = new THREE.Fog(new THREE.Color(10676479),225,325);
    renderer.setSize($('#render').width(), $('#render').height());
    renderer.setClearColor(0xcccccc);
    renderer.setPixelRatio(2);

    //场景物件
    var objects = null;
    //场景更新控制
    var viewControl = null;
    var worldControl = null;
    var carsControl = null;
    //控制参数
    var control = {
        pause : false,
        maxSpeed : 2.5,
    };

    //加载场景
    loadObjects().then((data)=>{
        //保存场景对象
        objects = data.objects;
        console.log(objects);
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
        camera.aspect = $('#render').width()/$('#render').height();
        camera.updateProjectionMatrix();
    }
    //渲染画面
    function update() {
        viewControl && viewControl.update();
        worldControl && worldControl.update();
        carsControl && carsControl.update();

        renderer.render( scene, camera );
        requestAnimationFrame( update );
    }
    //全局控制
    // this.start = function(){
    //     update();
    // }
    this.reset = function(){
        worldControl && worldControl.reset();
        carsControl && carsControl.reset();
    };
    this.pause = function(){
        control.pause = true;
    };
    this.resume = function(){
        control.pause = false;
    };
    //车辆控制
    this.stopSelf = function(){
    };
    this.stopOther = function(){
    };
    

    //函数定义
    // 初始化相机
    function initView(){
        const _center = new THREE.Vector3;
        var targetHeight = 140;
        var len = 1000;
        camera.position.set(0,200,-80);
        camera.lookAt(_center);
        
        $(renderer.domElement).on('mousewheel',function (event) {
            len = len + event.originalEvent.deltaY;
            len = Math.min(Math.max(len, 0), 3000);
            targetHeight = THREE.Math.mapLinear(Math.min(len,1000), 0, 1000, 30, 140);
        });

        this.update = function () {
            if (len >= 2000){
                camera.position.z = -0.1;
                camera.position.y = 140;
            }else{
                camera.position.z = -80;
                camera.position.y += .05 * (targetHeight - camera.position.y);
            }
            camera.lookAt(_center);
        }
    }
    // 初始化世界
    function initWorld(){
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.scale.set(5,5,5);

        scene.add(objects['Directional Light'])
        // objects.blocks.children[0].material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        objects.blocks.children[0].position.set(0,0,0);
        scene.add(objects.blocks.children[0])

        this.update = function () {
            cube.rotation.y += 0.01;
        }
        this.reset = function () {
        }
    }
    // 初始化车辆
    function initCars(){
        // function Car(){
        //     // 车辆构造器
        //     // 速度
        //     this.maxSpeed = 2.5;
        //     this.speed = this.maxSpeed;
        //     this.update
        // }

        this.update = function () {
        }
        this.reset = function () {
        }
    }
    // 加载对象
    function loadObjects(){
        const irradiancePath = 'assets/irradiance.json';
        const vignettingPath = 'assets/vignetting.png';
        const scenePath = 'assets/';

        const jsonloader = new THREE.FileLoader();
        const imgloader = new THREE.ImageLoader();
        const binloader = new THREE.FileLoader();
        binloader.setResponseType('arraybuffer');
        
        function load(loader,url,fn) {
            return new Promise(
                (resolve, reject) => {
                    loader.load(
                        url,
                        (data) => {
                            fn && (data = fn(data));
                            resolve(data);
                        },
                        () => {},
                        (err) => {reject(err)}
                    );
                }
            )
        }

        var vignetting = load(imgloader,vignettingPath);

        var objects = Promise.all([
            load(jsonloader,scenePath+'main.json', (data)=>{return JSON.parse(data);}),
            load(binloader,scenePath+'main.bin'),
            load(jsonloader,irradiancePath,
                function(data) {
                    var delta = JSON.parse(data).slice(0, 27);
                    var a = 1 / (2 * Math.sqrt(Math.PI));
                    var e = -(.5 * Math.sqrt(3 / Math.PI));
                    var i = -e;
                    var abcd = e;
                    var knobHalf = .5 * Math.sqrt(15 / Math.PI);
                    var currentRelations = -knobHalf;
                    var c = .25 * Math.sqrt(5 / Math.PI);
                    var addedRelations = currentRelations;
                    var l = .25 * Math.sqrt(15 / Math.PI);
                    var arr = [a, a, a, e, e, e, i, i, i, abcd, abcd, abcd, knobHalf, knobHalf, knobHalf, currentRelations, currentRelations, currentRelations, c, c, c, addedRelations, addedRelations, addedRelations, l, l, l];
                    return arr.map(function (currentValue, index) {
                        return currentValue * delta[index];
                    });
                }
            ),
        ]).then((res)=>{
            var json = res[0];
            var bin = res[1];
            var irradiance = res[2];

            var geometries = parseGeometries(json.geometries);
            var images = parseImages(json.images);
            var textures = parseTextures(json.textures,images);
            var materials = parseMaterials(json.materials,textures);
            var objects = parseObjects(json.objects,geometries,materials);

            function parseGeometries(json){
                var geometries = {};
                json.forEach((ele) => {
                    var geometry = new THREE.BufferGeometry;
                    var key;
                    for (key in ele.offsets) {
                        if (ele.offsets.hasOwnProperty(key)) {
                            var ind = ele.offsets[key];
                            var buf = bin.slice(ind[0], ind[1] + 1);
                            if ("index" === key) {
                                geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(buf), 1));
                            } else {
                                var size = ("uv" === key || "uv2" === key) ? 2 : 
                                    ("position" === key || "normal" === key || "color" === key) ? 3 :
                                    ("tangent" === key) ? 4 : undefined;
                                geometry.setAttribute(key, new THREE.BufferAttribute(new Float32Array(buf), size));
                            }
                        }
                    }
                    geometry.uuid = ele.uuid;
                    if (void 0 !== ele.name) {
                        geometry.name = ele.name;
                    }
                    geometries[ele.uuid] = geometry;
                });
                return geometries;
            }
            function parseImages(json){
                return new Promise((resolve,reject)=>{
                    var images = {};
                    var jsonLength = json.length;
                    json.forEach((img) => {
                        load(imgloader,scenePath+img.url).then((image)=>{
                            images[img.uuid] = image;
                            jsonLength--;
                            if (jsonLength == 0)
                                resolve(images);
                        });
                    });
                });
            }
            async function parseTextures(json,images){
                function parseConstant(value) {
                    return "number" == typeof value ? value : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", value), THREE[value]);
                }
                images = await images;
                var textures = {};
                if (void 0 !== json) {
                    for (var i = 0; i < json.length; i++) {
                        var texture;
                        var data = json[i];
                        if (data.images) {
                            var c = [];
                            for (var i = 0; i < data.images.length; i++) {
                                if (void 0 === images[data.images[i]]) {
                                    console.warn("THREE.ObjectLoader: Undefined image", data.images[i]);
                                }
                                c.push(images[data.images[i]]);
                            }
                            texture = new THREE.CubeTexture(c);
                        } else {
                            if (void 0 === data.image) {
                                console.warn('THREE.ObjectLoader: No "image" specified for', data.uuid);
                            }
                            if (void 0 === images[data.image]) {
                                console.warn("THREE.ObjectLoader: Undefined image", data.image);
                            }
                            texture = new THREE.Texture(images[data.image]);
                        }
                        texture.needsUpdate = true;
                        texture.uuid = data.uuid;
                        if (void 0 !== data.name) {
                            texture.name = data.name;
                        }
                        if (void 0 !== data.mapping) {
                            texture.mapping = parseConstant(data.mapping);
                        }
                        if (void 0 !== data.offset) {
                            texture.offset.fromArray(data.offset);
                        }
                        if (void 0 !== data.repeat) {
                            texture.repeat.fromArray(data.repeat);
                        }
                        if (void 0 !== data.wrap) {
                            texture.wrapS = parseConstant(data.wrap[0]);
                            texture.wrapT = parseConstant(data.wrap[1]);
                        }
                        if (void 0 !== data.minFilter) {
                            texture.minFilter = parseConstant(data.minFilter);
                        }
                        if (void 0 !== data.magFilter) {
                            texture.magFilter = parseConstant(data.magFilter);
                        }
                        if (void 0 !== data.anisotropy) {
                            texture.anisotropy = data.anisotropy;
                        }
                        if (void 0 !== data.flipY) {
                            texture.flipY = data.flipY;
                        }
                        textures[data.uuid] = texture;
                    }
                }
                return textures;
            }
            async function parseMaterials(json,textures){
                function parseMaterial(json){
                    var rawMat = loader.parse(json);
                    var parameters = {
                        uuid : json.uuid,
                        name : json.name,
                        color : json.color,
                        opacity : rawMat.opacity,
                        transparent : rawMat.transparent,
                        alphaTest : rawMat.alphaTest,
                        environment : json.environment,
                        exposure : json.exposure,
                        albedoMap : rawMat.map,
                        albedoMap2 : null,
                        metalGlossMap : null,
                        packedMap : null,
                        metalFactor : json.metalFactor,
                        glossFactor : json.glossFactor,
                        normalMapFactor : json.normalFactor,
                        normalMap : rawMat.normalMap,
                        normalMap2 : null,
                        lightMap : rawMat.lightMap,
                        lightMapM : null,
                        lightMapDir : null,
                        aoMap : rawMat.aoMap,
                        aoMap2 : null,
                        aoFactor : json.aoFactor,
                        occludeSpecular : json.occludeSpecular,
                        emissiveMap : null,
                        uDiffuseSPH : new Float32Array(irradiance, 27)
                    };
                    Object.assign(parameters,shader);
                    return CreateShaderMaterial(parameters);
                }

                textures = await textures;
                var materials = {};
                if (void 0 !== json) {
                    var loader = new THREE.MaterialLoader;
                    loader.setTextures(textures);
                    for (var i = 0; i < json.length; i++) {
                        var mat = loader.parse(json[i]);
                        var material = new THREE.MeshStandardMaterial( {
                            uuid: mat.uuid,
                            name: mat.name,
                            color: 0xffffff,
                            side: THREE.DoubleSide,
                        });
                        mat.map && (material.map = mat.map);
                        mat.aoMap && (material.aoMap = mat.aoMap, console.log(material.aoMap));
                        // mat.aoFactor && (material.aoMapIntensity = mat.aoFactor);
                        materials[mat.uuid] = material;
                        // var material = parseMaterial(json[i]);
                        // materials[material.uuid] = material;
                    }
                }
                return materials;
            }
            async function parseObjects(json, geometries, materials) {
                function getGeometry(name) {
                    return geometries[name];
                }
                function getMaterial(name) {
                    return materials[name];
                }
                function parseObject(data) {
                    var object;
                    switch (data.type) {
                        case "Scene":
                            object = new THREE.Scene;
                            break;
                        case "PerspectiveCamera":
                            object = new THREE.PerspectiveCamera(data.fov, data.aspect, data.near, data.far);
                            if (void 0 !== data.focus) {
                                object.focus = data.focus;
                            }
                            if (void 0 !== data.zoom) {
                                object.zoom = data.zoom;
                            }
                            if (void 0 !== data.filmGauge) {
                                object.filmGauge = data.filmGauge;
                            }
                            if (void 0 !== data.filmOffset) {
                                object.filmOffset = data.filmOffset;
                            }
                            if (void 0 !== data.view) {
                                object.view = Object.assign({}, data.view);
                            }
                            break;
                        case "DirectionalLight":
                            object = new THREE.DirectionalLight(data.color, data.intensity);
                            break;
                        case "Mesh":
                            var geometry = getGeometry(data.geometry);
                            var material = getMaterial(data.material);
                            object = geometry.bones && geometry.bones.length > 0 ? new THREE.SkinnedMesh(geometry, material) : new THREE.Mesh(geometry, material);
                            break;
                        default:
                            object = new THREE.Object3D;
                    }
                    object.uuid = data.uuid;
                    void 0 !== data.name && (object.name = data.name);
                    if (void 0 !== data.matrix) {
                        matrix.fromArray(data.matrix);
                        matrix.decompose(object.position, object.quaternion, object.scale);
                    } else {
                        void 0 !== data.position && object.position.fromArray(data.position);
                        void 0 !== data.rotation && object.rotation.fromArray(data.rotation);
                        void 0 !== data.scale && object.scale.fromArray(data.scale);
                    }
                    void 0 !== data.castShadow && (object.castShadow = data.castShadow);
                    void 0 !== data.receiveShadow && (object.receiveShadow = data.receiveShadow);
                    void 0 !== data.visible && (object.visible = data.visible);
                    void 0 !== data.userData && (object.userData = data.userData);
                    if (void 0 !== data.children) {
                        var child;
                        for (child in data.children) {
                            object.add(parseObject(data.children[child]));
                        }
                    }
                    void 0 !== data.layers && (object.layers.mask = data.layers);
                    return object;
                }
                var matrix = new THREE.Matrix4;
                var objects = {};
                materials = await materials;
                json.children.forEach(ele => {
                    objects[ele.name] = parseObject(ele);
                });
                return objects;
            };
            return objects;
        });

        return new Promise((resolve,reject) => {
            Promise.all([objects,vignetting]).then((res)=>{
                resolve({
                    objects : res[0],
                    vignetting : res[1],
                });
            });
        });
    }
})();
