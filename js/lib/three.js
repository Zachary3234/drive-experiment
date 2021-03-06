var THREE = {};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE),
void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
void 0 === Math.sign && (Math.sign = function(e) {
    return e < 0 ? -1 : e > 0 ? 1 : +e
}
),
void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
}),
void 0 === Object.assign && (Object.assign = function(e) {
    "use strict";
    if (void 0 === e || null === e)
        throw new TypeError("Cannot convert undefined or null to object");
    for (var t = Object(e), r = 1; r < arguments.length; r++) {
        var i = arguments[r];
        if (void 0 !== i && null !== i)
            for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
    }
    return t
}
),
Object.assign(THREE, {
    MOUSE: {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    },
    CullFaceNone: 0,
    CullFaceBack: 1,
    CullFaceFront: 2,
    CullFaceFrontBack: 3,
    FrontFaceDirectionCW: 0,
    FrontFaceDirectionCCW: 1,
    BasicShadowMap: 0,
    PCFShadowMap: 1,
    PCFSoftShadowMap: 2,
    FrontSide: 0,
    BackSide: 1,
    DoubleSide: 2,
    FlatShading: 1,
    SmoothShading: 2,
    NoColors: 0,
    FaceColors: 1,
    VertexColors: 2,
    NoBlending: 0,
    NormalBlending: 1,
    AdditiveBlending: 2,
    SubtractiveBlending: 3,
    MultiplyBlending: 4,
    CustomBlending: 5,
    AddEquation: 100,
    SubtractEquation: 101,
    ReverseSubtractEquation: 102,
    MinEquation: 103,
    MaxEquation: 104,
    ZeroFactor: 200,
    OneFactor: 201,
    SrcColorFactor: 202,
    OneMinusSrcColorFactor: 203,
    SrcAlphaFactor: 204,
    OneMinusSrcAlphaFactor: 205,
    DstAlphaFactor: 206,
    OneMinusDstAlphaFactor: 207,
    DstColorFactor: 208,
    OneMinusDstColorFactor: 209,
    SrcAlphaSaturateFactor: 210,
    NeverDepth: 0,
    AlwaysDepth: 1,
    LessDepth: 2,
    LessEqualDepth: 3,
    EqualDepth: 4,
    GreaterEqualDepth: 5,
    GreaterDepth: 6,
    NotEqualDepth: 7,
    MultiplyOperation: 0,
    MixOperation: 1,
    AddOperation: 2,
    NoToneMapping: 0,
    LinearToneMapping: 1,
    ReinhardToneMapping: 2,
    Uncharted2ToneMapping: 3,
    CineonToneMapping: 4,
    UVMapping: 300,
    CubeReflectionMapping: 301,
    CubeRefractionMapping: 302,
    EquirectangularReflectionMapping: 303,
    EquirectangularRefractionMapping: 304,
    SphericalReflectionMapping: 305,
    CubeUVReflectionMapping: 306,
    CubeUVRefractionMapping: 307,
    RepeatWrapping: 1e3,
    ClampToEdgeWrapping: 1001,
    MirroredRepeatWrapping: 1002,
    NearestFilter: 1003,
    NearestMipMapNearestFilter: 1004,
    NearestMipMapLinearFilter: 1005,
    LinearFilter: 1006,
    LinearMipMapNearestFilter: 1007,
    LinearMipMapLinearFilter: 1008,
    UnsignedByteType: 1009,
    ByteType: 1010,
    ShortType: 1011,
    UnsignedShortType: 1012,
    IntType: 1013,
    UnsignedIntType: 1014,
    FloatType: 1015,
    HalfFloatType: 1025,
    UnsignedShort4444Type: 1016,
    UnsignedShort5551Type: 1017,
    UnsignedShort565Type: 1018,
    AlphaFormat: 1019,
    RGBFormat: 1020,
    RGBAFormat: 1021,
    LuminanceFormat: 1022,
    LuminanceAlphaFormat: 1023,
    RGBEFormat: THREE.RGBAFormat,
    DepthFormat: 1026,
    RGB_S3TC_DXT1_Format: 2001,
    RGBA_S3TC_DXT1_Format: 2002,
    RGBA_S3TC_DXT3_Format: 2003,
    RGBA_S3TC_DXT5_Format: 2004,
    RGB_PVRTC_4BPPV1_Format: 2100,
    RGB_PVRTC_2BPPV1_Format: 2101,
    RGBA_PVRTC_4BPPV1_Format: 2102,
    RGBA_PVRTC_2BPPV1_Format: 2103,
    RGB_ETC1_Format: 2151,
    LoopOnce: 2200,
    LoopRepeat: 2201,
    LoopPingPong: 2202,
    InterpolateDiscrete: 2300,
    InterpolateLinear: 2301,
    InterpolateSmooth: 2302,
    ZeroCurvatureEnding: 2400,
    ZeroSlopeEnding: 2401,
    WrapAroundEnding: 2402,
    TrianglesDrawMode: 0,
    TriangleStripDrawMode: 1,
    TriangleFanDrawMode: 2,
    LinearEncoding: 3e3,
    sRGBEncoding: 3001,
    GammaEncoding: 3007,
    RGBEEncoding: 3002,
    LogLuvEncoding: 3003,
    RGBM7Encoding: 3004,
    RGBM16Encoding: 3005,
    RGBDEncoding: 3006,
    BasicDepthPacking: 3200,
    RGBADepthPacking: 3201
}),
THREE.Color = function(e, t, r) {
    return void 0 === t && void 0 === r ? this.set(e) : this.setRGB(e, t, r)
}
,
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(e) {
        return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
        this
    },
    setScalar: function(e) {
        this.r = e,
        this.g = e,
        this.b = e
    },
    setHex: function(e) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (255 & e) / 255,
        this
    },
    setRGB: function(e, t, r) {
        return this.r = e,
        this.g = t,
        this.b = r,
        this
    },
    setHSL: function() {
        function e(e, t, r) {
            return r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - r) : e
        }
        return function(t, r, i) {
            if (t = THREE.Math.euclideanModulo(t, 1),
            r = THREE.Math.clamp(r, 0, 1),
            i = THREE.Math.clamp(i, 0, 1),
            0 === r)
                this.r = this.g = this.b = i;
            else {
                var n = i <= .5 ? i * (1 + r) : i + r - i * r
                  , a = 2 * i - n;
                this.r = e(a, n, t + 1 / 3),
                this.g = e(a, n, t),
                this.b = e(a, n, t - 1 / 3)
            }
            return this
        }
    }(),
    setStyle: function(e) {
        function t(t) {
            void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        var r;
        if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
            var i, n = r[1], a = r[2];
            switch (n) {
            case "rgb":
            case "rgba":
                if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                    return this.r = Math.min(255, parseInt(i[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(i[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(i[3], 10)) / 255,
                    t(i[5]),
                    this;
                if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                    return this.r = Math.min(100, parseInt(i[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(i[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(i[3], 10)) / 100,
                    t(i[5]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                    var o = parseFloat(i[1]) / 360
                      , s = parseInt(i[2], 10) / 100
                      , c = parseInt(i[3], 10) / 100;
                    return t(i[5]),
                    this.setHSL(o, s, c)
                }
            }
        } else if (r = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
            var h = (l = r[1]).length;
            if (3 === h)
                return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255,
                this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255,
                this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255,
                this;
            if (6 === h)
                return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255,
                this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255,
                this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255,
                this
        }
        if (e && e.length > 0) {
            var l = THREE.ColorKeywords[e];
            void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + e)
        }
        return this
    },
    clone: function() {
        return new this.constructor(this.r,this.g,this.b)
    },
    copy: function(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    },
    copyGammaToLinear: function(e, t) {
        return void 0 === t && (t = 2),
        this.r = Math.pow(e.r, t),
        this.g = Math.pow(e.g, t),
        this.b = Math.pow(e.b, t),
        this
    },
    copyLinearToGamma: function(e, t) {
        void 0 === t && (t = 2);
        var r = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, r),
        this.g = Math.pow(e.g, r),
        this.b = Math.pow(e.b, r),
        this
    },
    convertGammaToLinear: function() {
        var e = this.r
          , t = this.g
          , r = this.b;
        return this.r = e * e,
        this.g = t * t,
        this.b = r * r,
        this
    },
    convertLinearToGamma: function() {
        return this.r = Math.sqrt(this.r),
        this.g = Math.sqrt(this.g),
        this.b = Math.sqrt(this.b),
        this
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(e) {
        var t, r, i = e || {
            h: 0,
            s: 0,
            l: 0
        }, n = this.r, a = this.g, o = this.b, s = Math.max(n, a, o), c = Math.min(n, a, o), h = (c + s) / 2;
        if (c === s)
            t = 0,
            r = 0;
        else {
            var l = s - c;
            switch (r = h <= .5 ? l / (s + c) : l / (2 - s - c),
            s) {
            case n:
                t = (a - o) / l + (a < o ? 6 : 0);
                break;
            case a:
                t = (o - n) / l + 2;
                break;
            case o:
                t = (n - a) / l + 4
            }
            t /= 6
        }
        return i.h = t,
        i.s = r,
        i.l = h,
        i
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(e, t, r) {
        var i = this.getHSL();
        return i.h += e,
        i.s += t,
        i.l += r,
        this.setHSL(i.h, i.s, i.l),
        this
    },
    add: function(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    },
    addColors: function(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    },
    addScalar: function(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    },
    sub: function(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    },
    multiply: function(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    },
    multiplyScalar: function(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    },
    lerp: function(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    },
    equals: function(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
},
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
},
THREE.Quaternion = function(e, t, r, i) {
    this._x = e || 0,
    this._y = t || 0,
    this._z = r || 0,
    this._w = void 0 !== i ? i : 1
}
,
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e,
        this.onChangeCallback()
    },
    get w() {
        return this._w
    },
    set w(e) {
        this._w = e,
        this.onChangeCallback()
    },
    set: function(e, t, r, i) {
        return this._x = e,
        this._y = t,
        this._z = r,
        this._w = i,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    },
    copy: function(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this.onChangeCallback(),
        this
    },
    setFromEuler: function(e, t) {
        if (e instanceof THREE.Euler == !1)
            throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var r = Math.cos(e._x / 2)
          , i = Math.cos(e._y / 2)
          , n = Math.cos(e._z / 2)
          , a = Math.sin(e._x / 2)
          , o = Math.sin(e._y / 2)
          , s = Math.sin(e._z / 2)
          , c = e.order;
        return "XYZ" === c ? (this._x = a * i * n + r * o * s,
        this._y = r * o * n - a * i * s,
        this._z = r * i * s + a * o * n,
        this._w = r * i * n - a * o * s) : "YXZ" === c ? (this._x = a * i * n + r * o * s,
        this._y = r * o * n - a * i * s,
        this._z = r * i * s - a * o * n,
        this._w = r * i * n + a * o * s) : "ZXY" === c ? (this._x = a * i * n - r * o * s,
        this._y = r * o * n + a * i * s,
        this._z = r * i * s + a * o * n,
        this._w = r * i * n - a * o * s) : "ZYX" === c ? (this._x = a * i * n - r * o * s,
        this._y = r * o * n + a * i * s,
        this._z = r * i * s - a * o * n,
        this._w = r * i * n + a * o * s) : "YZX" === c ? (this._x = a * i * n + r * o * s,
        this._y = r * o * n + a * i * s,
        this._z = r * i * s - a * o * n,
        this._w = r * i * n - a * o * s) : "XZY" === c && (this._x = a * i * n - r * o * s,
        this._y = r * o * n - a * i * s,
        this._z = r * i * s + a * o * n,
        this._w = r * i * n + a * o * s),
        !1 !== t && this.onChangeCallback(),
        this
    },
    setFromAxisAngle: function(e, t) {
        var r = t / 2
          , i = Math.sin(r);
        return this._x = e.x * i,
        this._y = e.y * i,
        this._z = e.z * i,
        this._w = Math.cos(r),
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(e) {
        var t, r = e.elements, i = r[0], n = r[4], a = r[8], o = r[1], s = r[5], c = r[9], h = r[2], l = r[6], u = r[10], p = i + s + u;
        return p > 0 ? (t = .5 / Math.sqrt(p + 1),
        this._w = .25 / t,
        this._x = (l - c) * t,
        this._y = (a - h) * t,
        this._z = (o - n) * t) : i > s && i > u ? (t = 2 * Math.sqrt(1 + i - s - u),
        this._w = (l - c) / t,
        this._x = .25 * t,
        this._y = (n + o) / t,
        this._z = (a + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - i - u),
        this._w = (a - h) / t,
        this._x = (n + o) / t,
        this._y = .25 * t,
        this._z = (c + l) / t) : (t = 2 * Math.sqrt(1 + u - i - s),
        this._w = (o - n) / t,
        this._x = (a + h) / t,
        this._y = (c + l) / t,
        this._z = .25 * t),
        this.onChangeCallback(),
        this
    },
    setFromUnitVectors: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector3),
            (t = r.dot(i) + 1) < 1e-6 ? (t = 0,
            Math.abs(r.x) > Math.abs(r.z) ? e.set(-r.y, r.x, 0) : e.set(0, -r.z, r.y)) : e.crossVectors(r, i),
            this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = t,
            this.normalize()
        }
    }(),
    inverse: function() {
        return this.conjugate().normalize()
    },
    conjugate: function() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this.onChangeCallback(),
        this
    },
    dot: function(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var e = this.length();
        return 0 === e ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this.onChangeCallback(),
        this
    },
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
        this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    },
    premultiply: function(e) {
        return this.multiplyQuaternions(e, this)
    },
    multiplyQuaternions: function(e, t) {
        var r = e._x
          , i = e._y
          , n = e._z
          , a = e._w
          , o = t._x
          , s = t._y
          , c = t._z
          , h = t._w;
        return this._x = r * h + a * o + i * c - n * s,
        this._y = i * h + a * s + n * o - r * c,
        this._z = n * h + a * c + r * s - i * o,
        this._w = a * h - r * o - i * s - n * c,
        this.onChangeCallback(),
        this
    },
    slerp: function(e, t) {
        if (0 === t)
            return this;
        if (1 === t)
            return this.copy(e);
        var r = this._x
          , i = this._y
          , n = this._z
          , a = this._w
          , o = a * e._w + r * e._x + i * e._y + n * e._z;
        if (o < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        o = -o) : this.copy(e),
        o >= 1)
            return this._w = a,
            this._x = r,
            this._y = i,
            this._z = n,
            this;
        var s = Math.sqrt(1 - o * o);
        if (Math.abs(s) < .001)
            return this._w = .5 * (a + this._w),
            this._x = .5 * (r + this._x),
            this._y = .5 * (i + this._y),
            this._z = .5 * (n + this._z),
            this;
        var c = Math.atan2(s, o)
          , h = Math.sin((1 - t) * c) / s
          , l = Math.sin(t * c) / s;
        return this._w = a * h + this._w * l,
        this._x = r * h + this._x * l,
        this._y = i * h + this._y * l,
        this._z = n * h + this._z * l,
        this.onChangeCallback(),
        this
    },
    equals: function(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this.onChangeCallback(),
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    },
    onChange: function(e) {
        return this.onChangeCallback = e,
        this
    },
    onChangeCallback: function() {}
},
Object.assign(THREE.Quaternion, {
    slerp: function(e, t, r, i) {
        return r.copy(e).slerp(t, i)
    },
    slerpFlat: function(e, t, r, i, n, a, o) {
        var s = r[i + 0]
          , c = r[i + 1]
          , h = r[i + 2]
          , l = r[i + 3]
          , u = n[a + 0]
          , p = n[a + 1]
          , d = n[a + 2]
          , f = n[a + 3];
        if (l !== f || s !== u || c !== p || h !== d) {
            var E = 1 - o
              , m = s * u + c * p + h * d + l * f
              , g = m >= 0 ? 1 : -1
              , v = 1 - m * m;
            if (v > Number.EPSILON) {
                var T = Math.sqrt(v)
                  , y = Math.atan2(T, m * g);
                E = Math.sin(E * y) / T,
                o = Math.sin(o * y) / T
            }
            var R = o * g;
            if (s = s * E + u * R,
            c = c * E + p * R,
            h = h * E + d * R,
            l = l * E + f * R,
            E === 1 - o) {
                var x = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                s *= x,
                c *= x,
                h *= x,
                l *= x
            }
        }
        e[t] = s,
        e[t + 1] = c,
        e[t + 2] = h,
        e[t + 3] = l
    }
}),
THREE.Vector2 = function(e, t) {
    this.x = e || 0,
    this.y = t || 0
}
,
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    get width() {
        return this.x
    },
    set width(e) {
        this.x = e
    },
    get height() {
        return this.y
    },
    set height(e) {
        this.y = e
    },
    set: function(e, t) {
        return this.x = e,
        this.y = t,
        this
    },
    setScalar: function(e) {
        return this.x = e,
        this.y = e,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    },
    multiply: function(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e,
        this.y *= e) : (this.x = 0,
        this.y = 0),
        this
    },
    divide: function(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector2,
            t = new THREE.Vector2),
            e.set(r, r),
            t.set(i, i),
            this.clamp(e, t)
        }
    }(),
    clampLength: function(e, t) {
        var r = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r)
    },
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    angle: function() {
        var e = Math.atan2(this.y, this.x);
        return e < 0 && (e += 2 * Math.PI),
        e
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.x - e.x
          , r = this.y - e.y;
        return t * t + r * r
    },
    distanceToManhattan: function(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    },
    lerpVectors: function(e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e)
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e
    },
    fromAttribute: function(e, t, r) {
        return void 0 === r && (r = 0),
        t = t * e.itemSize + r,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this
    },
    rotateAround: function(e, t) {
        var r = Math.cos(t)
          , i = Math.sin(t)
          , n = this.x - e.x
          , a = this.y - e.y;
        return this.x = n * r - a * i + e.x,
        this.y = n * i + a * r + e.y,
        this
    }
},
THREE.Vector3 = function(e, t, r) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = r || 0
}
,
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(e, t, r) {
        return this.x = e,
        this.y = t,
        this.z = r,
        this
    },
    setScalar: function(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setZ: function(e) {
        return this.z = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    },
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
        this.multiplyVectors(e, t)) : (this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this)
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e,
        this.y *= e,
        this.z *= e) : (this.x = 0,
        this.y = 0,
        this.z = 0),
        this
    },
    multiplyVectors: function(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    },
    applyEuler: function() {
        var e;
        return function(t) {
            return t instanceof THREE.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            void 0 === e && (e = new THREE.Quaternion),
            this.applyQuaternion(e.setFromEuler(t))
        }
    }(),
    applyAxisAngle: function() {
        var e;
        return function(t, r) {
            return void 0 === e && (e = new THREE.Quaternion),
            this.applyQuaternion(e.setFromAxisAngle(t, r))
        }
    }(),
    applyMatrix3: function(e) {
        var t = this.x
          , r = this.y
          , i = this.z
          , n = e.elements;
        return this.x = n[0] * t + n[3] * r + n[6] * i,
        this.y = n[1] * t + n[4] * r + n[7] * i,
        this.z = n[2] * t + n[5] * r + n[8] * i,
        this
    },
    applyMatrix4: function(e) {
        var t = this.x
          , r = this.y
          , i = this.z
          , n = e.elements;
        return this.x = n[0] * t + n[4] * r + n[8] * i + n[12],
        this.y = n[1] * t + n[5] * r + n[9] * i + n[13],
        this.z = n[2] * t + n[6] * r + n[10] * i + n[14],
        this
    },
    applyProjection: function(e) {
        var t = this.x
          , r = this.y
          , i = this.z
          , n = e.elements
          , a = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
        return this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * a,
        this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * a,
        this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * a,
        this
    },
    applyQuaternion: function(e) {
        var t = this.x
          , r = this.y
          , i = this.z
          , n = e.x
          , a = e.y
          , o = e.z
          , s = e.w
          , c = s * t + a * i - o * r
          , h = s * r + o * t - n * i
          , l = s * i + n * r - a * t
          , u = -n * t - a * r - o * i;
        return this.x = c * s + u * -n + h * -o - l * -a,
        this.y = h * s + u * -a + l * -n - c * -o,
        this.z = l * s + u * -o + c * -a - h * -n,
        this
    },
    project: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
            this.applyProjection(e)
        }
    }(),
    unproject: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
            this.applyProjection(e)
        }
    }(),
    transformDirection: function(e) {
        var t = this.x
          , r = this.y
          , i = this.z
          , n = e.elements;
        return this.x = n[0] * t + n[4] * r + n[8] * i,
        this.y = n[1] * t + n[5] * r + n[9] * i,
        this.z = n[2] * t + n[6] * r + n[10] * i,
        this.normalize()
    },
    divide: function(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector3,
            t = new THREE.Vector3),
            e.set(r, r, r),
            t.set(i, i, i),
            this.clamp(e, t)
        }
    }(),
    clampLength: function(e, t) {
        var r = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r)
    },
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    },
    lerpVectors: function(e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e)
    },
    cross: function(e, t) {
        if (void 0 !== t)
            return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(e, t);
        var r = this.x
          , i = this.y
          , n = this.z;
        return this.x = i * e.z - n * e.y,
        this.y = n * e.x - r * e.z,
        this.z = r * e.y - i * e.x,
        this
    },
    crossVectors: function(e, t) {
        var r = e.x
          , i = e.y
          , n = e.z
          , a = t.x
          , o = t.y
          , s = t.z;
        return this.x = i * s - n * o,
        this.y = n * a - r * s,
        this.z = r * o - i * a,
        this
    },
    projectOnVector: function(e) {
        var t = e.dot(this) / e.lengthSq();
        return this.copy(e).multiplyScalar(t)
    },
    projectOnPlane: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            e.copy(this).projectOnVector(t),
            this.sub(e)
        }
    }(),
    reflect: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        }
    }(),
    angleTo: function(e) {
        var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
        return Math.acos(THREE.Math.clamp(t, -1, 1))
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.x - e.x
          , r = this.y - e.y
          , i = this.z - e.z;
        return t * t + r * r + i * i
    },
    distanceToManhattan: function(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    },
    setFromSpherical: function(e) {
        var t = Math.sin(e.phi) * e.radius;
        return this.x = t * Math.sin(e.theta),
        this.y = Math.cos(e.phi) * e.radius,
        this.z = t * Math.cos(e.theta),
        this
    },
    setFromMatrixPosition: function(e) {
        return this.setFromMatrixColumn(e, 3)
    },
    setFromMatrixScale: function(e) {
        var t = this.setFromMatrixColumn(e, 0).length()
          , r = this.setFromMatrixColumn(e, 1).length()
          , i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = r,
        this.z = i,
        this
    },
    setFromMatrixColumn: function(e, t) {
        if ("number" == typeof e) {
            console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
            var r = e;
            e = t,
            t = r
        }
        return this.fromArray(e.elements, 4 * t)
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    },
    fromAttribute: function(e, t, r) {
        return void 0 === r && (r = 0),
        t = t * e.itemSize + r,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this.z = e.array[t + 2],
        this
    }
},
THREE.Vector4 = function(e, t, r, i) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = r || 0,
    this.w = void 0 !== i ? i : 1
}
,
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(e, t, r, i) {
        return this.x = e,
        this.y = t,
        this.z = r,
        this.w = i,
        this
    },
    setScalar: function(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setZ: function(e) {
        return this.z = e,
        this
    },
    setW: function(e) {
        return this.w = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = void 0 !== e.w ? e.w : 1,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e) : (this.x = 0,
        this.y = 0,
        this.z = 0,
        this.w = 0),
        this
    },
    applyMatrix4: function(e) {
        var t = this.x
          , r = this.y
          , i = this.z
          , n = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * r + a[8] * i + a[12] * n,
        this.y = a[1] * t + a[5] * r + a[9] * i + a[13] * n,
        this.z = a[2] * t + a[6] * r + a[10] * i + a[14] * n,
        this.w = a[3] * t + a[7] * r + a[11] * i + a[15] * n,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    setAxisAngleFromQuaternion: function(e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    },
    setAxisAngleFromRotationMatrix: function(e) {
        var t, r, i, n, a = e.elements, o = a[0], s = a[4], c = a[8], h = a[1], l = a[5], u = a[9], p = a[2], d = a[6], f = a[10];
        if (Math.abs(s - h) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
            if (Math.abs(s + h) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(o + l + f - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            var E = (o + 1) / 2
              , m = (l + 1) / 2
              , g = (f + 1) / 2
              , v = (s + h) / 4
              , T = (c + p) / 4
              , y = (u + d) / 4;
            return E > m && E > g ? E < .01 ? (r = 0,
            i = .707106781,
            n = .707106781) : (i = v / (r = Math.sqrt(E)),
            n = T / r) : m > g ? m < .01 ? (r = .707106781,
            i = 0,
            n = .707106781) : (r = v / (i = Math.sqrt(m)),
            n = y / i) : g < .01 ? (r = .707106781,
            i = .707106781,
            n = 0) : (r = T / (n = Math.sqrt(g)),
            i = y / n),
            this.set(r, i, n, t),
            this
        }
        var R = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (h - s) * (h - s));
        return Math.abs(R) < .001 && (R = 1),
        this.x = (d - u) / R,
        this.y = (c - p) / R,
        this.z = (h - s) / R,
        this.w = Math.acos((o + l + f - 1) / 2),
        this
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector4,
            t = new THREE.Vector4),
            e.set(r, r, r, r),
            t.set(i, i, i, i),
            this.clamp(e, t)
        }
    }(),
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    },
    roundToZero: function() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    },
    lerpVectors: function(e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e)
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    },
    fromAttribute: function(e, t, r) {
        return void 0 === r && (r = 0),
        t = t * e.itemSize + r,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this.z = e.array[t + 2],
        this.w = e.array[t + 3],
        this
    }
},
THREE.Euler = function(e, t, r, i) {
    this._x = e || 0,
    this._y = t || 0,
    this._z = r || 0,
    this._order = i || THREE.Euler.DefaultOrder
}
,
THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
THREE.Euler.DefaultOrder = "XYZ",
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e,
        this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(e) {
        this._order = e,
        this.onChangeCallback()
    },
    set: function(e, t, r, i) {
        return this._x = e,
        this._y = t,
        this._z = r,
        this._order = i || this._order,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    },
    copy: function(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(e, t, r) {
        var i = THREE.Math.clamp
          , n = e.elements
          , a = n[0]
          , o = n[4]
          , s = n[8]
          , c = n[1]
          , h = n[5]
          , l = n[9]
          , u = n[2]
          , p = n[6]
          , d = n[10];
        return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(i(s, -1, 1)),
        Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d),
        this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h),
        this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(l, -1, 1)),
        Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d),
        this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a),
        this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(p, -1, 1)),
        Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d),
        this._z = Math.atan2(-o, h)) : (this._y = 0,
        this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-i(u, -1, 1)),
        Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d),
        this._z = Math.atan2(c, a)) : (this._x = 0,
        this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(i(c, -1, 1)),
        Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h),
        this._y = Math.atan2(-u, a)) : (this._x = 0,
        this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-i(o, -1, 1)),
        Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h),
        this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d),
        this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t),
        this._order = t,
        !1 !== r && this.onChangeCallback(),
        this
    },
    setFromQuaternion: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(e, r, i)
        }
    }(),
    setFromVector3: function(e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    },
    reorder: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            return e.setFromEuler(this),
            this.setFromQuaternion(e, t)
        }
    }(),
    equals: function(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    fromArray: function(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        void 0 !== e[3] && (this._order = e[3]),
        this.onChangeCallback(),
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    },
    toVector3: function(e) {
        return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x,this._y,this._z)
    },
    onChange: function(e) {
        return this.onChangeCallback = e,
        this
    },
    onChangeCallback: function() {}
},
THREE.Line3 = function(e, t) {
    this.start = void 0 !== e ? e : new THREE.Vector3,
    this.end = void 0 !== t ? t : new THREE.Vector3
}
,
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(e, t) {
        return this.start.copy(e),
        this.end.copy(t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.start.copy(e.start),
        this.end.copy(e.end),
        this
    },
    center: function(e) {
        return (e || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(e) {
        return (e || new THREE.Vector3).subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(e, t) {
        var r = t || new THREE.Vector3;
        return this.delta(r).multiplyScalar(e).add(this.start)
    },
    closestPointToPointParameter: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(r, i) {
            e.subVectors(r, this.start),
            t.subVectors(this.end, this.start);
            var n = t.dot(t)
              , a = t.dot(e) / n;
            return i && (a = THREE.Math.clamp(a, 0, 1)),
            a
        }
    }(),
    closestPointToPoint: function(e, t, r) {
        var i = this.closestPointToPointParameter(e, t)
          , n = r || new THREE.Vector3;
        return this.delta(n).multiplyScalar(i).add(this.start)
    },
    applyMatrix4: function(e) {
        return this.start.applyMatrix4(e),
        this.end.applyMatrix4(e),
        this
    },
    equals: function(e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }
},
THREE.Box2 = function(e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0,1 / 0),
    this.max = void 0 !== t ? t : new THREE.Vector2(-1 / 0,-1 / 0)
}
,
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    },
    setFromPoints: function(e) {
        this.makeEmpty();
        for (var t = 0, r = e.length; t < r; t++)
            this.expandByPoint(e[t]);
        return this
    },
    setFromCenterAndSize: function() {
        var e = new THREE.Vector2;
        return function(t, r) {
            var i = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(i),
            this.max.copy(t).add(i),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = 1 / 0,
        this.max.x = this.max.y = -1 / 0,
        this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(e) {
        return (e || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(e) {
        return (e || new THREE.Vector2).subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    },
    expandByVector: function(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    },
    expandByScalar: function(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    },
    containsPoint: function(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
    },
    containsBox: function(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
    },
    getParameter: function(e, t) {
        return (t || new THREE.Vector2).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
    },
    clampPoint: function(e, t) {
        return (t || new THREE.Vector2).copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var e = new THREE.Vector2;
        return function(t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    }(),
    intersect: function(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this
    },
    union: function(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    },
    translate: function(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    },
    equals: function(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},
THREE.Box3 = function(e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0,1 / 0,1 / 0),
    this.max = void 0 !== t ? t : new THREE.Vector3(-1 / 0,-1 / 0,-1 / 0)
}
,
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    },
    setFromArray: function(e) {
        for (var t = 1 / 0, r = 1 / 0, i = 1 / 0, n = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.length; s < c; s += 3) {
            var h = e[s]
              , l = e[s + 1]
              , u = e[s + 2];
            h < t && (t = h),
            l < r && (r = l),
            u < i && (i = u),
            h > n && (n = h),
            l > a && (a = l),
            u > o && (o = u)
        }
        this.min.set(t, r, i),
        this.max.set(n, a, o)
    },
    setFromPoints: function(e) {
        this.makeEmpty();
        for (var t = 0, r = e.length; t < r; t++)
            this.expandByPoint(e[t]);
        return this
    },
    setFromCenterAndSize: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            var i = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(i),
            this.max.copy(t).add(i),
            this
        }
    }(),
    setFromObject: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var r = this;
            return t.updateMatrixWorld(!0),
            this.makeEmpty(),
            t.traverse(function(t) {
                var i = t.geometry;
                if (void 0 !== i)
                    if (i instanceof THREE.Geometry)
                        for (var n = i.vertices, a = 0, o = n.length; a < o; a++)
                            e.copy(n[a]),
                            e.applyMatrix4(t.matrixWorld),
                            r.expandByPoint(e);
                    else if (i instanceof THREE.BufferGeometry) {
                        var s = i.attributes.position;
                        if (void 0 !== s) {
                            var c, h, l;
                            s instanceof THREE.InterleavedBufferAttribute ? (c = s.data.array,
                            h = s.offset,
                            l = s.data.stride) : (c = s.array,
                            h = 0,
                            l = 3);
                            for (var a = h, o = c.length; a < o; a += l)
                                e.fromArray(c, a),
                                e.applyMatrix4(t.matrixWorld),
                                r.expandByPoint(e)
                        }
                    }
            }),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(e) {
        return (e || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(e) {
        return (e || new THREE.Vector3).subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    },
    expandByVector: function(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    },
    expandByScalar: function(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    },
    containsPoint: function(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    },
    containsBox: function(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    },
    getParameter: function(e, t) {
        return (t || new THREE.Vector3).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    },
    intersectsSphere: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            this.clampPoint(t.center, e),
            e.distanceToSquared(t.center) <= t.radius * t.radius
        }
    }(),
    intersectsPlane: function(e) {
        var t, r;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        r = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        r = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        r += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        r += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        r += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        r += e.normal.z * this.min.z),
        t <= e.constant && r >= e.constant
    },
    clampPoint: function(e, t) {
        return (t || new THREE.Vector3).copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    }(),
    getBoundingSphere: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var r = t || new THREE.Sphere;
            return r.center = this.center(),
            r.radius = .5 * this.size(e).length(),
            r
        }
    }(),
    intersect: function(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    },
    union: function(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    },
    applyMatrix4: function() {
        var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function(t) {
            return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(e),
            this)
        }
    }(),
    translate: function(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    },
    equals: function(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},
THREE.Matrix3 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
    arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}
,
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(e, t, r, i, n, a, o, s, c) {
        var h = this.elements;
        return h[0] = e,
        h[1] = i,
        h[2] = o,
        h[3] = t,
        h[4] = n,
        h[5] = s,
        h[6] = r,
        h[7] = a,
        h[8] = c,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements)
    },
    copy: function(e) {
        var t = e.elements;
        return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]),
        this
    },
    setFromMatrix4: function(e) {
        var t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    },
    applyToVector3Array: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length);
            for (var n = 0, a = r; n < i; n += 3,
            a += 3)
                e.fromArray(t, a),
                e.applyMatrix3(this),
                e.toArray(t, a);
            return t
        }
    }(),
    applyToBuffer: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length / t.itemSize);
            for (var n = 0, a = r; n < i; n++,
            a++)
                e.x = t.getX(a),
                e.y = t.getY(a),
                e.z = t.getZ(a),
                e.applyMatrix3(this),
                t.setXYZ(e.x, e.y, e.z);
            return t
        }
    }(),
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    },
    determinant: function() {
        var e = this.elements
          , t = e[0]
          , r = e[1]
          , i = e[2]
          , n = e[3]
          , a = e[4]
          , o = e[5]
          , s = e[6]
          , c = e[7]
          , h = e[8];
        return t * a * h - t * o * c - r * n * h + r * o * s + i * n * c - i * a * s
    },
    getInverse: function(e, t) {
        e instanceof THREE.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
        var r = e.elements
          , i = this.elements
          , n = r[0]
          , a = r[1]
          , o = r[2]
          , s = r[3]
          , c = r[4]
          , h = r[5]
          , l = r[6]
          , u = r[7]
          , p = r[8]
          , d = p * c - h * u
          , f = h * l - p * s
          , E = u * s - c * l
          , m = n * d + a * f + o * E;
        if (0 === m) {
            var g = "THREE.Matrix3.getInverse(): can'boot invert matrix, determinant is 0";
            if (t)
                throw new Error(g);
            return console.warn(g),
            this.identity()
        }
        var v = 1 / m;
        return i[0] = d * v,
        i[1] = (o * u - p * a) * v,
        i[2] = (h * a - o * c) * v,
        i[3] = f * v,
        i[4] = (p * n - o * l) * v,
        i[5] = (o * s - h * n) * v,
        i[6] = E * v,
        i[7] = (a * l - u * n) * v,
        i[8] = (c * n - a * s) * v,
        this
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    },
    flattenToArrayOffset: function(e, t) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
        this.toArray(e, t)
    },
    getNormalMatrix: function(e) {
        return this.setFromMatrix4(e).getInverse(this).transpose()
    },
    transposeIntoArray: function(e) {
        var t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    },
    fromArray: function(e) {
        return this.elements.set(e),
        this
    },
    toArray: function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = 0);
        var r = this.elements;
        return e[t] = r[0],
        e[t + 1] = r[1],
        e[t + 2] = r[2],
        e[t + 3] = r[3],
        e[t + 4] = r[4],
        e[t + 5] = r[5],
        e[t + 6] = r[6],
        e[t + 7] = r[7],
        e[t + 8] = r[8],
        e
    }
},
THREE.Matrix4 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
    arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
,
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(e, t, r, i, n, a, o, s, c, h, l, u, p, d, f, E) {
        var m = this.elements;
        return m[0] = e,
        m[4] = t,
        m[8] = r,
        m[12] = i,
        m[1] = n,
        m[5] = a,
        m[9] = o,
        m[13] = s,
        m[2] = c,
        m[6] = h,
        m[10] = l,
        m[14] = u,
        m[3] = p,
        m[7] = d,
        m[11] = f,
        m[15] = E,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new THREE.Matrix4).fromArray(this.elements)
    },
    copy: function(e) {
        return this.elements.set(e.elements),
        this
    },
    copyPosition: function(e) {
        var t = this.elements
          , r = e.elements;
        return t[12] = r[12],
        t[13] = r[13],
        t[14] = r[14],
        this
    },
    extractBasis: function(e, t, r) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        r.setFromMatrixColumn(this, 2),
        this
    },
    makeBasis: function(e, t, r) {
        return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1),
        this
    },
    extractRotation: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Vector3);
            var r = this.elements
              , i = t.elements
              , n = 1 / e.setFromMatrixColumn(t, 0).length()
              , a = 1 / e.setFromMatrixColumn(t, 1).length()
              , o = 1 / e.setFromMatrixColumn(t, 2).length();
            return r[0] = i[0] * n,
            r[1] = i[1] * n,
            r[2] = i[2] * n,
            r[4] = i[4] * a,
            r[5] = i[5] * a,
            r[6] = i[6] * a,
            r[8] = i[8] * o,
            r[9] = i[9] * o,
            r[10] = i[10] * o,
            this
        }
    }(),
    makeRotationFromEuler: function(e) {
        e instanceof THREE.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements
          , r = e.x
          , i = e.y
          , n = e.z
          , a = Math.cos(r)
          , o = Math.sin(r)
          , s = Math.cos(i)
          , c = Math.sin(i)
          , h = Math.cos(n)
          , l = Math.sin(n);
        if ("XYZ" === e.order) {
            var u = a * h
              , p = a * l
              , d = o * h
              , f = o * l;
            t[0] = s * h,
            t[4] = -s * l,
            t[8] = c,
            t[1] = p + d * c,
            t[5] = u - f * c,
            t[9] = -o * s,
            t[2] = f - u * c,
            t[6] = d + p * c,
            t[10] = a * s
        } else if ("YXZ" === e.order) {
            var E = s * h
              , m = s * l
              , g = c * h
              , v = c * l;
            t[0] = E + v * o,
            t[4] = g * o - m,
            t[8] = a * c,
            t[1] = a * l,
            t[5] = a * h,
            t[9] = -o,
            t[2] = m * o - g,
            t[6] = v + E * o,
            t[10] = a * s
        } else if ("ZXY" === e.order) {
            var E = s * h
              , m = s * l
              , g = c * h
              , v = c * l;
            t[0] = E - v * o,
            t[4] = -a * l,
            t[8] = g + m * o,
            t[1] = m + g * o,
            t[5] = a * h,
            t[9] = v - E * o,
            t[2] = -a * c,
            t[6] = o,
            t[10] = a * s
        } else if ("ZYX" === e.order) {
            var u = a * h
              , p = a * l
              , d = o * h
              , f = o * l;
            t[0] = s * h,
            t[4] = d * c - p,
            t[8] = u * c + f,
            t[1] = s * l,
            t[5] = f * c + u,
            t[9] = p * c - d,
            t[2] = -c,
            t[6] = o * s,
            t[10] = a * s
        } else if ("YZX" === e.order) {
            var T = a * s
              , y = a * c
              , R = o * s
              , x = o * c;
            t[0] = s * h,
            t[4] = x - T * l,
            t[8] = R * l + y,
            t[1] = l,
            t[5] = a * h,
            t[9] = -o * h,
            t[2] = -c * h,
            t[6] = y * l + R,
            t[10] = T - x * l
        } else if ("XZY" === e.order) {
            var T = a * s
              , y = a * c
              , R = o * s
              , x = o * c;
            t[0] = s * h,
            t[4] = -l,
            t[8] = c * h,
            t[1] = T * l + x,
            t[5] = a * h,
            t[9] = y * l - R,
            t[2] = R * l - y,
            t[6] = o * h,
            t[10] = x * l + T
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    },
    makeRotationFromQuaternion: function(e) {
        var t = this.elements
          , r = e.x
          , i = e.y
          , n = e.z
          , a = e.w
          , o = r + r
          , s = i + i
          , c = n + n
          , h = r * o
          , l = r * s
          , u = r * c
          , p = i * s
          , d = i * c
          , f = n * c
          , E = a * o
          , m = a * s
          , g = a * c;
        return t[0] = 1 - (p + f),
        t[4] = l - g,
        t[8] = u + m,
        t[1] = l + g,
        t[5] = 1 - (h + f),
        t[9] = d - E,
        t[2] = u - m,
        t[6] = d + E,
        t[10] = 1 - (h + p),
        t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    },
    lookAt: function() {
        var e, t, r;
        return function(i, n, a) {
            void 0 === e && (e = new THREE.Vector3,
            t = new THREE.Vector3,
            r = new THREE.Vector3);
            var o = this.elements;
            return r.subVectors(i, n).normalize(),
            0 === r.lengthSq() && (r.z = 1),
            e.crossVectors(a, r).normalize(),
            0 === e.lengthSq() && (r.z += 1e-4,
            e.crossVectors(a, r).normalize()),
            t.crossVectors(r, e),
            o[0] = e.x,
            o[4] = t.x,
            o[8] = r.x,
            o[1] = e.y,
            o[5] = t.y,
            o[9] = r.y,
            o[2] = e.z,
            o[6] = t.z,
            o[10] = r.z,
            this
        }
    }(),
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
        this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    },
    premultiply: function(e) {
        return this.multiplyMatrices(e, this)
    },
    multiplyMatrices: function(e, t) {
        var r = e.elements
          , i = t.elements
          , n = this.elements
          , a = r[0]
          , o = r[4]
          , s = r[8]
          , c = r[12]
          , h = r[1]
          , l = r[5]
          , u = r[9]
          , p = r[13]
          , d = r[2]
          , f = r[6]
          , E = r[10]
          , m = r[14]
          , g = r[3]
          , v = r[7]
          , T = r[11]
          , y = r[15]
          , R = i[0]
          , x = i[4]
          , H = i[8]
          , b = i[12]
          , _ = i[1]
          , M = i[5]
          , w = i[9]
          , S = i[13]
          , A = i[2]
          , L = i[6]
          , C = i[10]
          , P = i[14]
          , B = i[3]
          , U = i[7]
          , D = i[11]
          , I = i[15];
        return n[0] = a * R + o * _ + s * A + c * B,
        n[4] = a * x + o * M + s * L + c * U,
        n[8] = a * H + o * w + s * C + c * D,
        n[12] = a * b + o * S + s * P + c * I,
        n[1] = h * R + l * _ + u * A + p * B,
        n[5] = h * x + l * M + u * L + p * U,
        n[9] = h * H + l * w + u * C + p * D,
        n[13] = h * b + l * S + u * P + p * I,
        n[2] = d * R + f * _ + E * A + m * B,
        n[6] = d * x + f * M + E * L + m * U,
        n[10] = d * H + f * w + E * C + m * D,
        n[14] = d * b + f * S + E * P + m * I,
        n[3] = g * R + v * _ + T * A + y * B,
        n[7] = g * x + v * M + T * L + y * U,
        n[11] = g * H + v * w + T * C + y * D,
        n[15] = g * b + v * S + T * P + y * I,
        this
    },
    multiplyToArray: function(e, t, r) {
        var i = this.elements;
        return this.multiplyMatrices(e, t),
        r[0] = i[0],
        r[1] = i[1],
        r[2] = i[2],
        r[3] = i[3],
        r[4] = i[4],
        r[5] = i[5],
        r[6] = i[6],
        r[7] = i[7],
        r[8] = i[8],
        r[9] = i[9],
        r[10] = i[10],
        r[11] = i[11],
        r[12] = i[12],
        r[13] = i[13],
        r[14] = i[14],
        r[15] = i[15],
        this
    },
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    },
    applyToVector3Array: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length);
            for (var n = 0, a = r; n < i; n += 3,
            a += 3)
                e.fromArray(t, a),
                e.applyMatrix4(this),
                e.toArray(t, a);
            return t
        }
    }(),
    applyToBuffer: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length / t.itemSize);
            for (var n = 0, a = r; n < i; n++,
            a++)
                e.x = t.getX(a),
                e.y = t.getY(a),
                e.z = t.getZ(a),
                e.applyMatrix4(this),
                t.setXYZ(e.x, e.y, e.z);
            return t
        }
    }(),
    determinant: function() {
        var e = this.elements
          , t = e[0]
          , r = e[4]
          , i = e[8]
          , n = e[12]
          , a = e[1]
          , o = e[5]
          , s = e[9]
          , c = e[13]
          , h = e[2]
          , l = e[6]
          , u = e[10]
          , p = e[14];
        return e[3] * (+n * s * l - i * c * l - n * o * u + r * c * u + i * o * p - r * s * p) + e[7] * (+t * s * p - t * c * u + n * a * u - i * a * p + i * c * h - n * s * h) + e[11] * (+t * c * l - t * o * p - n * a * l + r * a * p + n * o * h - r * c * h) + e[15] * (-i * o * h - t * s * l + t * o * u + i * a * l - r * a * u + r * s * h)
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this
    },
    flattenToArrayOffset: function(e, t) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
        this.toArray(e, t)
    },
    getPosition: function() {
        var e;
        return function() {
            return void 0 === e && (e = new THREE.Vector3),
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
            e.setFromMatrixColumn(this, 3)
        }
    }(),
    setPosition: function(e) {
        var t = this.elements;
        return t[12] = e.x,
        t[13] = e.y,
        t[14] = e.z,
        this
    },
    getInverse: function(e, t) {
        var r = this.elements
          , i = e.elements
          , n = i[0]
          , a = i[1]
          , o = i[2]
          , s = i[3]
          , c = i[4]
          , h = i[5]
          , l = i[6]
          , u = i[7]
          , p = i[8]
          , d = i[9]
          , f = i[10]
          , E = i[11]
          , m = i[12]
          , g = i[13]
          , v = i[14]
          , T = i[15]
          , y = d * v * u - g * f * u + g * l * E - h * v * E - d * l * T + h * f * T
          , R = m * f * u - p * v * u - m * l * E + c * v * E + p * l * T - c * f * T
          , x = p * g * u - m * d * u + m * h * E - c * g * E - p * h * T + c * d * T
          , H = m * d * l - p * g * l - m * h * f + c * g * f + p * h * v - c * d * v
          , b = n * y + a * R + o * x + s * H;
        if (0 === b) {
            var _ = "THREE.Matrix4.getInverse(): can'boot invert matrix, determinant is 0";
            if (t)
                throw new Error(_);
            return console.warn(_),
            this.identity()
        }
        var M = 1 / b;
        return r[0] = y * M,
        r[1] = (g * f * s - d * v * s - g * o * E + a * v * E + d * o * T - a * f * T) * M,
        r[2] = (h * v * s - g * l * s + g * o * u - a * v * u - h * o * T + a * l * T) * M,
        r[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * E - a * l * E) * M,
        r[4] = R * M,
        r[5] = (p * v * s - m * f * s + m * o * E - n * v * E - p * o * T + n * f * T) * M,
        r[6] = (m * l * s - c * v * s - m * o * u + n * v * u + c * o * T - n * l * T) * M,
        r[7] = (c * f * s - p * l * s + p * o * u - n * f * u - c * o * E + n * l * E) * M,
        r[8] = x * M,
        r[9] = (m * d * s - p * g * s - m * a * E + n * g * E + p * a * T - n * d * T) * M,
        r[10] = (c * g * s - m * h * s + m * a * u - n * g * u - c * a * T + n * h * T) * M,
        r[11] = (p * h * s - c * d * s - p * a * u + n * d * u + c * a * E - n * h * E) * M,
        r[12] = H * M,
        r[13] = (p * g * o - m * d * o + m * a * f - n * g * f - p * a * v + n * d * v) * M,
        r[14] = (m * h * o - c * g * o - m * a * l + n * g * l + c * a * v - n * h * v) * M,
        r[15] = (c * d * o - p * h * o + p * a * l - n * d * l - c * a * f + n * h * f) * M,
        this
    },
    scale: function(e) {
        var t = this.elements
          , r = e.x
          , i = e.y
          , n = e.z;
        return t[0] *= r,
        t[4] *= i,
        t[8] *= n,
        t[1] *= r,
        t[5] *= i,
        t[9] *= n,
        t[2] *= r,
        t[6] *= i,
        t[10] *= n,
        t[3] *= r,
        t[7] *= i,
        t[11] *= n,
        this
    },
    getMaxScaleOnAxis: function() {
        var e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, r, i))
    },
    makeTranslation: function(e, t, r) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1),
        this
    },
    makeRotationX: function(e) {
        var t = Math.cos(e)
          , r = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1),
        this
    },
    makeRotationY: function(e) {
        var t = Math.cos(e)
          , r = Math.sin(e);
        return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1),
        this
    },
    makeRotationZ: function(e) {
        var t = Math.cos(e)
          , r = Math.sin(e);
        return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    makeRotationAxis: function(e, t) {
        var r = Math.cos(t)
          , i = Math.sin(t)
          , n = 1 - r
          , a = e.x
          , o = e.y
          , s = e.z
          , c = n * a
          , h = n * o;
        return this.set(c * a + r, c * o - i * s, c * s + i * o, 0, c * o + i * s, h * o + r, h * s - i * a, 0, c * s - i * o, h * s + i * a, n * s * s + r, 0, 0, 0, 0, 1),
        this
    },
    makeScale: function(e, t, r) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1),
        this
    },
    compose: function(e, t, r) {
        return this.makeRotationFromQuaternion(t),
        this.scale(r),
        this.setPosition(e),
        this
    },
    decompose: function() {
        var e, t;
        return function(r, i, n) {
            void 0 === e && (e = new THREE.Vector3,
            t = new THREE.Matrix4);
            var a = this.elements
              , o = e.set(a[0], a[1], a[2]).length()
              , s = e.set(a[4], a[5], a[6]).length()
              , c = e.set(a[8], a[9], a[10]).length();
            this.determinant() < 0 && (o = -o),
            r.x = a[12],
            r.y = a[13],
            r.z = a[14],
            t.elements.set(this.elements);
            var h = 1 / o
              , l = 1 / s
              , u = 1 / c;
            return t.elements[0] *= h,
            t.elements[1] *= h,
            t.elements[2] *= h,
            t.elements[4] *= l,
            t.elements[5] *= l,
            t.elements[6] *= l,
            t.elements[8] *= u,
            t.elements[9] *= u,
            t.elements[10] *= u,
            i.setFromRotationMatrix(t),
            n.x = o,
            n.y = s,
            n.z = c,
            this
        }
    }(),
    makeFrustum: function(e, t, r, i, n, a) {
        var o = this.elements
          , s = 2 * n / (t - e)
          , c = 2 * n / (i - r)
          , h = (t + e) / (t - e)
          , l = (i + r) / (i - r)
          , u = -(a + n) / (a - n)
          , p = -2 * a * n / (a - n);
        return o[0] = s,
        o[4] = 0,
        o[8] = h,
        o[12] = 0,
        o[1] = 0,
        o[5] = c,
        o[9] = l,
        o[13] = 0,
        o[2] = 0,
        o[6] = 0,
        o[10] = u,
        o[14] = p,
        o[3] = 0,
        o[7] = 0,
        o[11] = -1,
        o[15] = 0,
        this
    },
    makePerspective: function(e, t, r, i) {
        var n = r * Math.tan(THREE.Math.DEG2RAD * e * .5)
          , a = -n
          , o = a * t
          , s = n * t;
        return this.makeFrustum(o, s, a, n, r, i)
    },
    makeOrthographic: function(e, t, r, i, n, a) {
        var o = this.elements
          , s = 1 / (t - e)
          , c = 1 / (r - i)
          , h = 1 / (a - n)
          , l = (t + e) * s
          , u = (r + i) * c
          , p = (a + n) * h;
        return o[0] = 2 * s,
        o[4] = 0,
        o[8] = 0,
        o[12] = -l,
        o[1] = 0,
        o[5] = 2 * c,
        o[9] = 0,
        o[13] = -u,
        o[2] = 0,
        o[6] = 0,
        o[10] = -2 * h,
        o[14] = -p,
        o[3] = 0,
        o[7] = 0,
        o[11] = 0,
        o[15] = 1,
        this
    },
    equals: function(e) {
        for (var t = this.elements, r = e.elements, i = 0; i < 16; i++)
            if (t[i] !== r[i])
                return !1;
        return !0
    },
    fromArray: function(e) {
        return this.elements.set(e),
        this
    },
    toArray: function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = 0);
        var r = this.elements;
        return e[t] = r[0],
        e[t + 1] = r[1],
        e[t + 2] = r[2],
        e[t + 3] = r[3],
        e[t + 4] = r[4],
        e[t + 5] = r[5],
        e[t + 6] = r[6],
        e[t + 7] = r[7],
        e[t + 8] = r[8],
        e[t + 9] = r[9],
        e[t + 10] = r[10],
        e[t + 11] = r[11],
        e[t + 12] = r[12],
        e[t + 13] = r[13],
        e[t + 14] = r[14],
        e[t + 15] = r[15],
        e
    }
},
THREE.Ray = function(e, t) {
    this.origin = void 0 !== e ? e : new THREE.Vector3,
    this.direction = void 0 !== t ? t : new THREE.Vector3
}
,
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    },
    at: function(e, t) {
        return (t || new THREE.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
    },
    lookAt: function(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    },
    recast: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return this.origin.copy(this.at(t, e)),
            this
        }
    }(),
    closestPointToPoint: function(e, t) {
        var r = t || new THREE.Vector3;
        r.subVectors(e, this.origin);
        var i = r.dot(this.direction);
        return i < 0 ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
    },
    distanceToPoint: function(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    },
    distanceSqToPoint: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var r = e.subVectors(t, this.origin).dot(this.direction);
            return r < 0 ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin),
            e.distanceToSquared(t))
        }
    }(),
    distanceSqToSegment: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3
          , r = new THREE.Vector3;
        return function(i, n, a, o) {
            e.copy(i).add(n).multiplyScalar(.5),
            t.copy(n).sub(i).normalize(),
            r.copy(this.origin).sub(e);
            var s, c, h, l, u = .5 * i.distanceTo(n), p = -this.direction.dot(t), d = r.dot(this.direction), f = -r.dot(t), E = r.lengthSq(), m = Math.abs(1 - p * p);
            if (m > 0)
                if (s = p * f - d,
                c = p * d - f,
                l = u * m,
                s >= 0)
                    if (c >= -l)
                        if (c <= l) {
                            var g = 1 / m;
                            h = (s *= g) * (s + p * (c *= g) + 2 * d) + c * (p * s + c + 2 * f) + E
                        } else
                            c = u,
                            h = -(s = Math.max(0, -(p * c + d))) * s + c * (c + 2 * f) + E;
                    else
                        c = -u,
                        h = -(s = Math.max(0, -(p * c + d))) * s + c * (c + 2 * f) + E;
                else
                    c <= -l ? h = -(s = Math.max(0, -(-p * u + d))) * s + (c = s > 0 ? -u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + E : c <= l ? (s = 0,
                    h = (c = Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + E) : h = -(s = Math.max(0, -(p * u + d))) * s + (c = s > 0 ? u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + E;
            else
                c = p > 0 ? -u : u,
                h = -(s = Math.max(0, -(p * c + d))) * s + c * (c + 2 * f) + E;
            return a && a.copy(this.direction).multiplyScalar(s).add(this.origin),
            o && o.copy(t).multiplyScalar(c).add(e),
            h
        }
    }(),
    intersectSphere: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            e.subVectors(t.center, this.origin);
            var i = e.dot(this.direction)
              , n = e.dot(e) - i * i
              , a = t.radius * t.radius;
            if (n > a)
                return null;
            var o = Math.sqrt(a - n)
              , s = i - o
              , c = i + o;
            return s < 0 && c < 0 ? null : s < 0 ? this.at(c, r) : this.at(s, r)
        }
    }(),
    intersectsSphere: function(e) {
        return this.distanceToPoint(e.center) <= e.radius
    },
    distanceToPlane: function(e) {
        var t = e.normal.dot(this.direction);
        if (0 === t)
            return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        var r = -(this.origin.dot(e.normal) + e.constant) / t;
        return r >= 0 ? r : null
    },
    intersectPlane: function(e, t) {
        var r = this.distanceToPlane(e);
        return null === r ? null : this.at(r, t)
    },
    intersectsPlane: function(e) {
        var t = e.distanceToPoint(this.origin);
        if (0 === t)
            return !0;
        return e.normal.dot(this.direction) * t < 0
    },
    intersectBox: function(e, t) {
        var r, i, n, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
        return c >= 0 ? (r = (e.min.x - u.x) * c,
        i = (e.max.x - u.x) * c) : (r = (e.max.x - u.x) * c,
        i = (e.min.x - u.x) * c),
        h >= 0 ? (n = (e.min.y - u.y) * h,
        a = (e.max.y - u.y) * h) : (n = (e.max.y - u.y) * h,
        a = (e.min.y - u.y) * h),
        r > a || n > i ? null : ((n > r || r != r) && (r = n),
        (a < i || i != i) && (i = a),
        l >= 0 ? (o = (e.min.z - u.z) * l,
        s = (e.max.z - u.z) * l) : (o = (e.max.z - u.z) * l,
        s = (e.min.z - u.z) * l),
        r > s || o > i ? null : ((o > r || r != r) && (r = o),
        (s < i || i != i) && (i = s),
        i < 0 ? null : this.at(r >= 0 ? r : i, t)))
    },
    intersectsBox: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return null !== this.intersectBox(t, e)
        }
    }(),
    intersectTriangle: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3
          , r = new THREE.Vector3
          , i = new THREE.Vector3;
        return function(n, a, o, s, c) {
            t.subVectors(a, n),
            r.subVectors(o, n),
            i.crossVectors(t, r);
            var h, l = this.direction.dot(i);
            if (l > 0) {
                if (s)
                    return null;
                h = 1
            } else {
                if (!(l < 0))
                    return null;
                h = -1,
                l = -l
            }
            e.subVectors(this.origin, n);
            var u = h * this.direction.dot(r.crossVectors(e, r));
            if (u < 0)
                return null;
            var p = h * this.direction.dot(t.cross(e));
            if (p < 0)
                return null;
            if (u + p > l)
                return null;
            var d = -h * e.dot(i);
            return d < 0 ? null : this.at(d / l, c)
        }
    }(),
    applyMatrix4: function(e) {
        return this.direction.add(this.origin).applyMatrix4(e),
        this.origin.applyMatrix4(e),
        this.direction.sub(this.origin),
        this.direction.normalize(),
        this
    },
    equals: function(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
},
THREE.Sphere = function(e, t) {
    this.center = void 0 !== e ? e : new THREE.Vector3,
    this.radius = void 0 !== t ? t : 0
}
,
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    },
    setFromPoints: function() {
        var e = new THREE.Box3;
        return function(t, r) {
            var i = this.center;
            void 0 !== r ? i.copy(r) : e.setFromPoints(t).center(i);
            for (var n = 0, a = 0, o = t.length; a < o; a++)
                n = Math.max(n, i.distanceToSquared(t[a]));
            return this.radius = Math.sqrt(n),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    },
    empty: function() {
        return this.radius <= 0
    },
    containsPoint: function(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(e) {
        return e.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    },
    intersectsBox: function(e) {
        return e.intersectsSphere(this)
    },
    intersectsPlane: function(e) {
        return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
    },
    clampPoint: function(e, t) {
        var r = this.center.distanceToSquared(e)
          , i = t || new THREE.Vector3;
        return i.copy(e),
        r > this.radius * this.radius && (i.sub(this.center).normalize(),
        i.multiplyScalar(this.radius).add(this.center)),
        i
    },
    getBoundingBox: function(e) {
        var t = e || new THREE.Box3;
        return t.set(this.center, this.center),
        t.expandByScalar(this.radius),
        t
    },
    applyMatrix4: function(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    },
    translate: function(e) {
        return this.center.add(e),
        this
    },
    equals: function(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
},
THREE.Frustum = function(e, t, r, i, n, a) {
    this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== a ? a : new THREE.Plane]
}
,
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(e, t, r, i, n, a) {
        var o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(r),
        o[3].copy(i),
        o[4].copy(n),
        o[5].copy(a),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        for (var t = this.planes, r = 0; r < 6; r++)
            t[r].copy(e.planes[r]);
        return this
    },
    setFromMatrix: function(e) {
        var t = this.planes
          , r = e.elements
          , i = r[0]
          , n = r[1]
          , a = r[2]
          , o = r[3]
          , s = r[4]
          , c = r[5]
          , h = r[6]
          , l = r[7]
          , u = r[8]
          , p = r[9]
          , d = r[10]
          , f = r[11]
          , E = r[12]
          , m = r[13]
          , g = r[14]
          , v = r[15];
        return t[0].setComponents(o - i, l - s, f - u, v - E).normalize(),
        t[1].setComponents(o + i, l + s, f + u, v + E).normalize(),
        t[2].setComponents(o + n, l + c, f + p, v + m).normalize(),
        t[3].setComponents(o - n, l - c, f - p, v - m).normalize(),
        t[4].setComponents(o - a, l - h, f - d, v - g).normalize(),
        t[5].setComponents(o + a, l + h, f + d, v + g).normalize(),
        this
    },
    intersectsObject: function() {
        var e = new THREE.Sphere;
        return function(t) {
            var r = t.geometry;
            return null === r.boundingSphere && r.computeBoundingSphere(),
            e.copy(r.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(e)
        }
    }(),
    intersectsSprite: function() {
        var e = new THREE.Sphere;
        return function(t) {
            return e.center.set(0, 0, 0),
            e.radius = .7071067811865476,
            e.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(e)
        }
    }(),
    intersectsSphere: function(e) {
        for (var t = this.planes, r = e.center, i = -e.radius, n = 0; n < 6; n++) {
            if (t[n].distanceToPoint(r) < i)
                return !1
        }
        return !0
    },
    intersectsBox: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(r) {
            for (var i = this.planes, n = 0; n < 6; n++) {
                var a = i[n];
                e.x = a.normal.x > 0 ? r.min.x : r.max.x,
                t.x = a.normal.x > 0 ? r.max.x : r.min.x,
                e.y = a.normal.y > 0 ? r.min.y : r.max.y,
                t.y = a.normal.y > 0 ? r.max.y : r.min.y,
                e.z = a.normal.z > 0 ? r.min.z : r.max.z,
                t.z = a.normal.z > 0 ? r.max.z : r.min.z;
                var o = a.distanceToPoint(e)
                  , s = a.distanceToPoint(t);
                if (o < 0 && s < 0)
                    return !1
            }
            return !0
        }
    }(),
    containsPoint: function(e) {
        for (var t = this.planes, r = 0; r < 6; r++)
            if (t[r].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
},
THREE.Plane = function(e, t) {
    this.normal = void 0 !== e ? e : new THREE.Vector3(1,0,0),
    this.constant = void 0 !== t ? t : 0
}
,
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    },
    setComponents: function(e, t, r, i) {
        return this.normal.set(e, t, r),
        this.constant = i,
        this
    },
    setFromNormalAndCoplanarPoint: function(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    },
    setFromCoplanarPoints: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(r, i, n) {
            var a = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize();
            return this.setFromNormalAndCoplanarPoint(a, r),
            this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    },
    normalize: function() {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    },
    negate: function() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    },
    distanceToPoint: function(e) {
        return this.normal.dot(e) + this.constant
    },
    distanceToSphere: function(e) {
        return this.distanceToPoint(e.center) - e.radius
    },
    projectPoint: function(e, t) {
        return this.orthoPoint(e, t).sub(e).negate()
    },
    orthoPoint: function(e, t) {
        var r = this.distanceToPoint(e);
        return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(r)
    },
    intersectLine: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            var i = r || new THREE.Vector3
              , n = t.delta(e)
              , a = this.normal.dot(n);
            if (0 !== a) {
                var o = -(t.start.dot(this.normal) + this.constant) / a;
                if (!(o < 0 || o > 1))
                    return i.copy(n).multiplyScalar(o).add(t.start)
            } else if (0 === this.distanceToPoint(t.start))
                return i.copy(t.start)
        }
    }(),
    intersectsLine: function(e) {
        var t = this.distanceToPoint(e.start)
          , r = this.distanceToPoint(e.end);
        return t < 0 && r > 0 || r < 0 && t > 0
    },
    intersectsBox: function(e) {
        return e.intersectsPlane(this)
    },
    intersectsSphere: function(e) {
        return e.intersectsPlane(this)
    },
    coplanarPoint: function(e) {
        return (e || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
        var e = new THREE.Vector3
          , t = new THREE.Matrix3;
        return function(r, i) {
            var n = this.coplanarPoint(e).applyMatrix4(r)
              , a = i || t.getNormalMatrix(r)
              , o = this.normal.applyMatrix3(a).normalize();
            return this.constant = -n.dot(o),
            this
        }
    }(),
    translate: function(e) {
        return this.constant = this.constant - e.dot(this.normal),
        this
    },
    equals: function(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
},
THREE.Spherical = function(e, t, r) {
    return this.radius = void 0 !== e ? e : 1,
    this.phi = void 0 !== t ? t : 0,
    this.theta = void 0 !== r ? r : 0,
    this
}
,
THREE.Spherical.prototype = {
    constructor: THREE.Spherical,
    set: function(e, t, r) {
        return this.radius = e,
        this.phi = t,
        this.theta = r,
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.radius.copy(e.radius),
        this.phi.copy(e.phi),
        this.theta.copy(e.theta),
        this
    },
    makeSafe: function() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
        this
    },
    setFromVector3: function(e) {
        return this.radius = e.length(),
        0 === this.radius ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(e.x, e.z),
        this.phi = Math.acos(THREE.Math.clamp(e.y / this.radius, -1, 1))),
        this
    }
},
THREE.Math = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function() {
        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), i = 0;
        return function() {
            for (var n = 0; n < 36; n++)
                8 === n || 13 === n || 18 === n || 23 === n ? r[n] = "-" : 14 === n ? r[n] = "4" : (i <= 2 && (i = 33554432 + 16777216 * Math.random() | 0),
                e = 15 & i,
                i >>= 4,
                r[n] = t[19 === n ? 3 & e | 8 : e]);
            return r.join("")
        }
    }(),
    clamp: function(e, t, r) {
        return Math.max(t, Math.min(r, e))
    },
    euclideanModulo: function(e, t) {
        return (e % t + t) % t
    },
    mapLinear: function(e, t, r, i, n) {
        return i + (e - t) * (n - i) / (r - t)
    },
    smoothstep: function(e, t, r) {
        return e <= t ? 0 : e >= r ? 1 : (e = (e - t) / (r - t)) * e * (3 - 2 * e)
    },
    smootherstep: function(e, t, r) {
        return e <= t ? 0 : e >= r ? 1 : (e = (e - t) / (r - t)) * e * e * (e * (6 * e - 15) + 10)
    },
    random16: function() {
        return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
        Math.random()
    },
    randInt: function(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
        return e * (.5 - Math.random())
    },
    degToRad: function(e) {
        return e * THREE.Math.DEG2RAD
    },
    radToDeg: function(e) {
        return e * THREE.Math.RAD2DEG
    },
    isPowerOfTwo: function(e) {
        return 0 == (e & e - 1) && 0 !== e
    },
    nearestPowerOfTwo: function(e) {
        return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    },
    nextPowerOfTwo: function(e) {
        return e--,
        e |= e >> 1,
        e |= e >> 2,
        e |= e >> 4,
        e |= e >> 8,
        e |= e >> 16,
        ++e
    }
},
THREE.Spline = function(e) {
    function t(e, t, r, i, n, a, o) {
        var s = .5 * (r - e)
          , c = .5 * (i - t);
        return (2 * (t - r) + s + c) * o + (-3 * (t - r) - 2 * s - c) * a + s * n + t
    }
    this.points = e;
    var r, i, n, a, o, s, c, h, l, u = [], p = {
        x: 0,
        y: 0,
        z: 0
    };
    this.initFromArray = function(e) {
        this.points = [];
        for (var t = 0; t < e.length; t++)
            this.points[t] = {
                x: e[t][0],
                y: e[t][1],
                z: e[t][2]
            }
    }
    ,
    this.getPoint = function(e) {
        return r = (this.points.length - 1) * e,
        i = Math.floor(r),
        n = r - i,
        u[0] = 0 === i ? i : i - 1,
        u[1] = i,
        u[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1,
        u[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2,
        s = this.points[u[0]],
        c = this.points[u[1]],
        h = this.points[u[2]],
        l = this.points[u[3]],
        a = n * n,
        o = n * a,
        p.x = t(s.x, c.x, h.x, l.x, n, a, o),
        p.y = t(s.y, c.y, h.y, l.y, n, a, o),
        p.z = t(s.z, c.z, h.z, l.z, n, a, o),
        p
    }
    ,
    this.getControlPointsArray = function() {
        var e, t, r = this.points.length, i = [];
        for (e = 0; e < r; e++)
            t = this.points[e],
            i[e] = [t.x, t.y, t.z];
        return i
    }
    ,
    this.getLength = function(e) {
        var t, r, i, n, a = 0, o = 0, s = 0, c = new THREE.Vector3, h = new THREE.Vector3, l = [], u = 0;
        for (l[0] = 0,
        e || (e = 100),
        i = this.points.length * e,
        c.copy(this.points[0]),
        t = 1; t < i; t++)
            r = t / i,
            n = this.getPoint(r),
            h.copy(n),
            u += h.distanceTo(c),
            c.copy(n),
            a = (this.points.length - 1) * r,
            (o = Math.floor(a)) !== s && (l[o] = u,
            s = o);
        return l[l.length] = u,
        {
            chunks: l,
            total: u
        }
    }
    ,
    this.reparametrizeByArcLength = function(e) {
        var t, r, i, n, a, o, s, c, h = [], l = new THREE.Vector3, u = this.getLength();
        for (h.push(l.copy(this.points[0]).clone()),
        t = 1; t < this.points.length; t++) {
            for (o = u.chunks[t] - u.chunks[t - 1],
            s = Math.ceil(e * o / u.total),
            n = (t - 1) / (this.points.length - 1),
            a = t / (this.points.length - 1),
            r = 1; r < s - 1; r++)
                i = n + r * (1 / s) * (a - n),
                c = this.getPoint(i),
                h.push(l.copy(c).clone());
            h.push(l.copy(this.points[t]).clone())
        }
        this.points = h
    }
}
,
THREE.Triangle = function(e, t, r) {
    this.a = void 0 !== e ? e : new THREE.Vector3,
    this.b = void 0 !== t ? t : new THREE.Vector3,
    this.c = void 0 !== r ? r : new THREE.Vector3
}
,
THREE.Triangle.normal = function() {
    var e = new THREE.Vector3;
    return function(t, r, i, n) {
        var a = n || new THREE.Vector3;
        a.subVectors(i, r),
        e.subVectors(t, r),
        a.cross(e);
        var o = a.lengthSq();
        return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
    }
}(),
THREE.Triangle.barycoordFromPoint = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , r = new THREE.Vector3;
    return function(i, n, a, o, s) {
        e.subVectors(o, n),
        t.subVectors(a, n),
        r.subVectors(i, n);
        var c = e.dot(e)
          , h = e.dot(t)
          , l = e.dot(r)
          , u = t.dot(t)
          , p = t.dot(r)
          , d = c * u - h * h
          , f = s || new THREE.Vector3;
        if (0 === d)
            return f.set(-2, -1, -1);
        var E = 1 / d
          , m = (u * l - h * p) * E
          , g = (c * p - h * l) * E;
        return f.set(1 - m - g, g, m)
    }
}(),
THREE.Triangle.containsPoint = function() {
    var e = new THREE.Vector3;
    return function(t, r, i, n) {
        var a = THREE.Triangle.barycoordFromPoint(t, r, i, n, e);
        return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
    }
}(),
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(e, t, r) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(r),
        this
    },
    setFromPointsAndIndices: function(e, t, r, i) {
        return this.a.copy(e[t]),
        this.b.copy(e[r]),
        this.c.copy(e[i]),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    },
    area: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function() {
            return e.subVectors(this.c, this.b),
            t.subVectors(this.a, this.b),
            .5 * e.cross(t).length()
        }
    }(),
    midpoint: function(e) {
        return (e || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(e) {
        return THREE.Triangle.normal(this.a, this.b, this.c, e)
    },
    plane: function(e) {
        return (e || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(e, t) {
        return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    },
    containsPoint: function(e) {
        return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
    },
    closestPointToPoint: function() {
        var e, t, r, i;
        return function(n, a) {
            void 0 === e && (e = new THREE.Plane,
            t = [new THREE.Line3, new THREE.Line3, new THREE.Line3],
            r = new THREE.Vector3,
            i = new THREE.Vector3);
            var o = a || new THREE.Vector3
              , s = 1 / 0;
            if (e.setFromCoplanarPoints(this.a, this.b, this.c),
            e.projectPoint(n, r),
            !0 === this.containsPoint(r))
                o.copy(r);
            else {
                t[0].set(this.a, this.b),
                t[1].set(this.b, this.c),
                t[2].set(this.c, this.a);
                for (var c = 0; c < t.length; c++) {
                    t[c].closestPointToPoint(r, !0, i);
                    var h = r.distanceToSquared(i);
                    h < s && (s = h,
                    o.copy(i))
                }
            }
            return o
        }
    }(),
    equals: function(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
},
THREE.Interpolant = function(e, t, r, i) {
    this.parameterPositions = e,
    this._cachedIndex = 0,
    this.resultBuffer = void 0 !== i ? i : new t.constructor(r),
    this.sampleValues = t,
    this.valueSize = r
}
,
THREE.Interpolant.prototype = {
    constructor: THREE.Interpolant,
    evaluate: function(e) {
        var t = this.parameterPositions
          , r = this._cachedIndex
          , i = t[r]
          , n = t[r - 1];
        e: {
            t: {
                var a;
                r: {
                    i: if (!(e < i)) {
                        for (s = r + 2; ; ) {
                            if (void 0 === i) {
                                if (e < n)
                                    break i;
                                return r = t.length,
                                this._cachedIndex = r,
                                this.afterEnd_(r - 1, e, n)
                            }
                            if (r === s)
                                break;
                            if (n = i,
                            i = t[++r],
                            e < i)
                                break t
                        }
                        a = t.length;
                        break r
                    }
                    {
                        if (e >= n)
                            break e;
                        var o = t[1];
                        e < o && (r = 2,
                        n = o);
                        for (var s = r - 2; ; ) {
                            if (void 0 === n)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, e, i);
                            if (r === s)
                                break;
                            if (i = n,
                            n = t[--r - 1],
                            e >= n)
                                break t
                        }
                        a = r,
                        r = 0
                    }
                }
                for (; r < a; ) {
                    var c = r + a >>> 1;
                    e < t[c] ? a = c : r = c + 1
                }
                if (i = t[r],
                void 0 === (n = t[r - 1]))
                    return this._cachedIndex = 0,
                    this.beforeStart_(0, e, i);
                if (void 0 === i)
                    return r = t.length,
                    this._cachedIndex = r,
                    this.afterEnd_(r - 1, n, e)
            }
            this._cachedIndex = r,
            this.intervalChanged_(r, n, i)
        }
        return this.interpolate_(r, n, e, i)
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
        return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(e) {
        for (var t = this.resultBuffer, r = this.sampleValues, i = this.valueSize, n = e * i, a = 0; a !== i; ++a)
            t[a] = r[n + a];
        return t
    },
    interpolate_: function(e, t, r, i) {
        throw new Error("call to abstract method")
    },
    intervalChanged_: function(e, t, r) {}
},
Object.assign(THREE.Interpolant.prototype, {
    beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
    afterEnd_: THREE.Interpolant.prototype.copySampleValue_
}),
THREE.CubicInterpolant = function(e, t, r, i) {
    THREE.Interpolant.call(this, e, t, r, i),
    this._weightPrev = -0,
    this._offsetPrev = -0,
    this._weightNext = -0,
    this._offsetNext = -0
}
,
THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.CubicInterpolant,
    DefaultSettings_: {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    },
    intervalChanged_: function(e, t, r) {
        var i = this.parameterPositions
          , n = e - 2
          , a = e + 1
          , o = i[n]
          , s = i[a];
        if (void 0 === o)
            switch (this.getSettings_().endingStart) {
            case THREE.ZeroSlopeEnding:
                n = e,
                o = 2 * t - r;
                break;
            case THREE.WrapAroundEnding:
                o = t + i[n = i.length - 2] - i[n + 1];
                break;
            default:
                n = e,
                o = r
            }
        if (void 0 === s)
            switch (this.getSettings_().endingEnd) {
            case THREE.ZeroSlopeEnding:
                a = e,
                s = 2 * r - t;
                break;
            case THREE.WrapAroundEnding:
                a = 1,
                s = r + i[1] - i[0];
                break;
            default:
                a = e - 1,
                s = t
            }
        var c = .5 * (r - t)
          , h = this.valueSize;
        this._weightPrev = c / (t - o),
        this._weightNext = c / (s - r),
        this._offsetPrev = n * h,
        this._offsetNext = a * h
    },
    interpolate_: function(e, t, r, i) {
        for (var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (r - t) / (i - t), f = d * d, E = f * d, m = -u * E + 2 * u * f - u * d, g = (1 + u) * E + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, v = (-1 - p) * E + (1.5 + p) * f + .5 * d, T = p * E - p * f, y = 0; y !== o; ++y)
            n[y] = m * a[h + y] + g * a[c + y] + v * a[s + y] + T * a[l + y];
        return n
    }
}),
THREE.DiscreteInterpolant = function(e, t, r, i) {
    THREE.Interpolant.call(this, e, t, r, i)
}
,
THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.DiscreteInterpolant,
    interpolate_: function(e, t, r, i) {
        return this.copySampleValue_(e - 1)
    }
}),
THREE.LinearInterpolant = function(e, t, r, i) {
    THREE.Interpolant.call(this, e, t, r, i)
}
,
THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.LinearInterpolant,
    interpolate_: function(e, t, r, i) {
        for (var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = (r - t) / (i - t), l = 1 - h, u = 0; u !== o; ++u)
            n[u] = a[c + u] * l + a[s + u] * h;
        return n
    }
}),
THREE.QuaternionLinearInterpolant = function(e, t, r, i) {
    THREE.Interpolant.call(this, e, t, r, i)
}
,
THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.QuaternionLinearInterpolant,
    interpolate_: function(e, t, r, i) {
        for (var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = (r - t) / (i - t), h = s + o; s !== h; s += 4)
            THREE.Quaternion.slerpFlat(n, 0, a, s - o, a, s, c);
        return n
    }
}),
THREE.Clock = function(e) {
    this.autoStart = void 0 === e || e,
    this.startTime = 0,
    this.oldTime = 0,
    this.elapsedTime = 0,
    this.running = !1
}
,
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.startTime = (performance || Date).now(),
        this.oldTime = this.startTime,
        this.running = !0
    },
    stop: function() {
        this.getElapsedTime(),
        this.running = !1
    },
    getElapsedTime: function() {
        return this.getDelta(),
        this.elapsedTime
    },
    getDelta: function() {
        var e = 0;
        if (this.autoStart && !this.running && this.start(),
        this.running) {
            var t = (performance || Date).now();
            e = (t - this.oldTime) / 1e3,
            this.oldTime = t,
            this.elapsedTime += e
        }
        return e
    }
},
THREE.EventDispatcher = function() {}
,
Object.assign(THREE.EventDispatcher.prototype, {
    addEventListener: function(e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var r = this._listeners;
        void 0 === r[e] && (r[e] = []),
        -1 === r[e].indexOf(t) && r[e].push(t)
    },
    hasEventListener: function(e, t) {
        if (void 0 === this._listeners)
            return !1;
        var r = this._listeners;
        return void 0 !== r[e] && -1 !== r[e].indexOf(t)
    },
    removeEventListener: function(e, t) {
        if (void 0 !== this._listeners) {
            var r = this._listeners[e];
            if (void 0 !== r) {
                var i = r.indexOf(t);
                -1 !== i && r.splice(i, 1)
            }
        }
    },
    dispatchEvent: function(e) {
        if (void 0 !== this._listeners) {
            var t = this._listeners[e.type];
            if (void 0 !== t) {
                e.target = this;
                var r = []
                  , i = 0
                  , n = t.length;
                for (i = 0; i < n; i++)
                    r[i] = t[i];
                for (i = 0; i < n; i++)
                    r[i].call(this, e)
            }
        }
    }
}),
THREE.Layers = function() {
    this.mask = 1
}
,
THREE.Layers.prototype = {
    constructor: THREE.Layers,
    set: function(e) {
        this.mask = 1 << e
    },
    enable: function(e) {
        this.mask |= 1 << e
    },
    toggle: function(e) {
        this.mask ^= 1 << e
    },
    disable: function(e) {
        this.mask &= ~(1 << e)
    },
    test: function(e) {
        return 0 != (this.mask & e.mask)
    }
},
function(e) {
    function t(e, t) {
        return e.distance - t.distance
    }
    function r(e, t, i, n) {
        if (!1 !== e.visible && (e.raycast(t, i),
        !0 === n))
            for (var a = e.children, o = 0, s = a.length; o < s; o++)
                r(a[o], t, i, !0)
    }
    e.Raycaster = function(t, r, i, n) {
        this.ray = new e.Ray(t,r),
        this.near = i || 0,
        this.far = n || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    ,
    e.Raycaster.prototype = {
        constructor: e.Raycaster,
        linePrecision: 1,
        set: function(e, t) {
            this.ray.set(e, t)
        },
        setFromCamera: function(t, r) {
            r instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, (r.near + r.far) / (r.near - r.far)).unproject(r),
            this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(e, i) {
            var n = [];
            return r(e, this, n, i),
            n.sort(t),
            n
        },
        intersectObjects: function(e, i) {
            var n = [];
            if (!1 === Array.isArray(e))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                n;
            for (var a = 0, o = e.length; a < o; a++)
                r(e[a], this, n, i);
            return n.sort(t),
            n
        }
    }
}(THREE),
THREE.Object3D = function() {
    Object.defineProperty(this, "id", {
        value: THREE.Object3DIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Object3D",
    this.parent = null,
    this.children = [],
    this.up = THREE.Object3D.DefaultUp.clone();
    var e = new THREE.Vector3
      , t = new THREE.Euler
      , r = new THREE.Quaternion
      , i = new THREE.Vector3(1,1,1);
    t.onChange(function() {
        r.setFromEuler(t, !1)
    }),
    r.onChange(function() {
        t.setFromQuaternion(r, void 0, !1)
    }),
    Object.defineProperties(this, {
        position: {
            enumerable: !0,
            value: e
        },
        rotation: {
            enumerable: !0,
            value: t
        },
        quaternion: {
            enumerable: !0,
            value: r
        },
        scale: {
            enumerable: !0,
            value: i
        },
        modelViewMatrix: {
            value: new THREE.Matrix4
        },
        normalMatrix: {
            value: new THREE.Matrix3
        }
    }),
    this.matrix = new THREE.Matrix4,
    this.matrixWorld = new THREE.Matrix4,
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate,
    this.matrixWorldNeedsUpdate = !1,
    this.layers = new THREE.Layers,
    this.visible = !0,
    this.castShadow = !1,
    this.receiveShadow = !1,
    this.frustumCulled = !0,
    this.renderOrder = 0,
    this.userData = {}
}
,
THREE.Object3D.DefaultUp = new THREE.Vector3(0,1,0),
THREE.Object3D.DefaultMatrixAutoUpdate = !0,
Object.assign(THREE.Object3D.prototype, THREE.EventDispatcher.prototype, {
    applyMatrix: function(e) {
        this.matrix.multiplyMatrices(e, this.matrix),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    },
    setRotationFromEuler: function(e) {
        this.quaternion.setFromEuler(e, !0)
    },
    setRotationFromMatrix: function(e) {
        this.quaternion.setFromRotationMatrix(e)
    },
    setRotationFromQuaternion: function(e) {
        this.quaternion.copy(e)
    },
    rotateOnAxis: function() {
        var e = new THREE.Quaternion;
        return function(t, r) {
            return e.setFromAxisAngle(t, r),
            this.quaternion.multiply(e),
            this
        }
    }(),
    rotateX: function() {
        var e = new THREE.Vector3(1,0,0);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateY: function() {
        var e = new THREE.Vector3(0,1,0);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateZ: function() {
        var e = new THREE.Vector3(0,0,1);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    translateOnAxis: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            return e.copy(t).applyQuaternion(this.quaternion),
            this.position.add(e.multiplyScalar(r)),
            this
        }
    }(),
    translateX: function() {
        var e = new THREE.Vector3(1,0,0);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateY: function() {
        var e = new THREE.Vector3(0,1,0);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateZ: function() {
        var e = new THREE.Vector3(0,0,1);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    localToWorld: function(e) {
        return e.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
        var e = new THREE.Matrix4;
        return function(t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function() {
        var e = new THREE.Matrix4;
        return function(t) {
            e.lookAt(t, this.position, this.up),
            this.quaternion.setFromRotationMatrix(e)
        }
    }(),
    add: function(e) {
        if (arguments.length > 1) {
            for (var t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can'boot be added as a child of itself.", e),
        this) : (e instanceof THREE.Object3D ? (null !== e.parent && e.parent.remove(e),
        e.parent = this,
        e.dispatchEvent({
            type: "added"
        }),
        this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    },
    remove: function(e) {
        if (arguments.length > 1)
            for (var t = 0; t < arguments.length; t++)
                this.remove(arguments[t]);
        var r = this.children.indexOf(e);
        -1 !== r && (e.parent = null,
        e.dispatchEvent({
            type: "removed"
        }),
        this.children.splice(r, 1))
    },
    getObjectById: function(e) {
        return this.getObjectByProperty("id", e)
    },
    getObjectByName: function(e) {
        return this.getObjectByProperty("name", e)
    },
    getObjectByProperty: function(e, t) {
        if (this[e] === t)
            return this;
        for (var r = 0, i = this.children.length; r < i; r++) {
            var n = this.children[r].getObjectByProperty(e, t);
            if (void 0 !== n)
                return n
        }
    },
    getWorldPosition: function(e) {
        var t = e || new THREE.Vector3;
        return this.updateMatrixWorld(!0),
        t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(r) {
            var i = r || new THREE.Quaternion;
            return this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, i, t),
            i
        }
    }(),
    getWorldRotation: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            var r = t || new THREE.Euler;
            return this.getWorldQuaternion(e),
            r.setFromQuaternion(e, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function() {
        var e = new THREE.Vector3
          , t = new THREE.Quaternion;
        return function(r) {
            var i = r || new THREE.Vector3;
            return this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, t, i),
            i
        }
    }(),
    getWorldDirection: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            var r = t || new THREE.Vector3;
            return this.getWorldQuaternion(e),
            r.set(0, 0, 1).applyQuaternion(e)
        }
    }(),
    raycast: function() {},
    traverse: function(e) {
        e(this);
        for (var t = this.children, r = 0, i = t.length; r < i; r++)
            t[r].traverse(e)
    },
    traverseVisible: function(e) {
        if (!1 !== this.visible) {
            e(this);
            for (var t = this.children, r = 0, i = t.length; r < i; r++)
                t[r].traverseVisible(e)
        }
    },
    traverseAncestors: function(e) {
        var t = this.parent;
        null !== t && (e(t),
        t.traverseAncestors(e))
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(e) {
        !0 === this.matrixAutoUpdate && this.updateMatrix(),
        !0 !== this.matrixWorldNeedsUpdate && !0 !== e || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        for (var t = 0, r = this.children.length; t < r; t++)
            this.children[t].updateMatrixWorld(e)
    },
    toJSON: function(e) {
        function t(e) {
            var t = [];
            for (var r in e) {
                var i = e[r];
                delete i.metadata,
                t.push(i)
            }
            return t
        }
        var r = void 0 === e || "" === e
          , i = {};
        r && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {}
        },
        i.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var n = {};
        if (n.uuid = this.uuid,
        n.type = this.type,
        "" !== this.name && (n.name = this.name),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        !0 === this.castShadow && (n.castShadow = !0),
        !0 === this.receiveShadow && (n.receiveShadow = !0),
        !1 === this.visible && (n.visible = !1),
        n.matrix = this.matrix.toArray(),
        void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)),
        n.geometry = this.geometry.uuid),
        void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)),
        n.material = this.material.uuid),
        this.children.length > 0) {
            n.children = [];
            for (var a = 0; a < this.children.length; a++)
                n.children.push(this.children[a].toJSON(e).object)
        }
        if (r) {
            var o = t(e.geometries)
              , s = t(e.materials)
              , c = t(e.textures)
              , h = t(e.images);
            o.length > 0 && (i.geometries = o),
            s.length > 0 && (i.materials = s),
            c.length > 0 && (i.textures = c),
            h.length > 0 && (i.images = h)
        }
        return i.object = n,
        i
    },
    clone: function(e) {
        return (new this.constructor).copy(this, e)
    },
    copy: function(e, t) {
        if (void 0 === t && (t = !0),
        this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        !0 === t)
            for (var r = 0; r < e.children.length; r++) {
                var i = e.children[r];
                this.add(i.clone())
            }
        return this
    }
}),
THREE.Object3DIdCount = 0,
THREE.Face3 = function(e, t, r, i, n, a) {
    this.a = e,
    this.b = t,
    this.c = r,
    this.normal = i instanceof THREE.Vector3 ? i : new THREE.Vector3,
    this.vertexNormals = Array.isArray(i) ? i : [],
    this.color = n instanceof THREE.Color ? n : new THREE.Color,
    this.vertexColors = Array.isArray(n) ? n : [],
    this.materialIndex = void 0 !== a ? a : 0
}
,
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.a = e.a,
        this.b = e.b,
        this.c = e.c,
        this.normal.copy(e.normal),
        this.color.copy(e.color),
        this.materialIndex = e.materialIndex;
        for (var t = 0, r = e.vertexNormals.length; t < r; t++)
            this.vertexNormals[t] = e.vertexNormals[t].clone();
        for (var t = 0, r = e.vertexColors.length; t < r; t++)
            this.vertexColors[t] = e.vertexColors[t].clone();
        return this
    }
},
THREE.BufferAttribute = function(e, t, r) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = e,
    this.itemSize = t,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0,
    this.normalized = !0 === r
}
,
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get count() {
        return this.array.length / this.itemSize
    },
    set needsUpdate(e) {
        !0 === e && this.version++
    },
    setDynamic: function(e) {
        return this.dynamic = e,
        this
    },
    copy: function(e) {
        return this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.dynamic = e.dynamic,
        this
    },
    copyAt: function(e, t, r) {
        e *= this.itemSize,
        r *= t.itemSize;
        for (var i = 0, n = this.itemSize; i < n; i++)
            this.array[e + i] = t.array[r + i];
        return this
    },
    copyArray: function(e) {
        return this.array.set(e),
        this
    },
    copyColorsArray: function(e) {
        for (var t = this.array, r = 0, i = 0, n = e.length; i < n; i++) {
            var a = e[i];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
            a = new THREE.Color),
            t[r++] = a.r,
            t[r++] = a.g,
            t[r++] = a.b
        }
        return this
    },
    copyIndicesArray: function(e) {
        for (var t = this.array, r = 0, i = 0, n = e.length; i < n; i++) {
            var a = e[i];
            t[r++] = a.a,
            t[r++] = a.b,
            t[r++] = a.c
        }
        return this
    },
    copyVector2sArray: function(e) {
        for (var t = this.array, r = 0, i = 0, n = e.length; i < n; i++) {
            var a = e[i];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
            a = new THREE.Vector2),
            t[r++] = a.x,
            t[r++] = a.y
        }
        return this
    },
    copyVector3sArray: function(e) {
        for (var t = this.array, r = 0, i = 0, n = e.length; i < n; i++) {
            var a = e[i];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
            a = new THREE.Vector3),
            t[r++] = a.x,
            t[r++] = a.y,
            t[r++] = a.z
        }
        return this
    },
    copyVector4sArray: function(e) {
        for (var t = this.array, r = 0, i = 0, n = e.length; i < n; i++) {
            var a = e[i];
            void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
            a = new THREE.Vector4),
            t[r++] = a.x,
            t[r++] = a.y,
            t[r++] = a.z,
            t[r++] = a.w
        }
        return this
    },
    set: function(e, t) {
        return void 0 === t && (t = 0),
        this.array.set(e, t),
        this
    },
    getX: function(e) {
        return this.array[e * this.itemSize]
    },
    setX: function(e, t) {
        return this.array[e * this.itemSize] = t,
        this
    },
    getY: function(e) {
        return this.array[e * this.itemSize + 1]
    },
    setY: function(e, t) {
        return this.array[e * this.itemSize + 1] = t,
        this
    },
    getZ: function(e) {
        return this.array[e * this.itemSize + 2]
    },
    setZ: function(e, t) {
        return this.array[e * this.itemSize + 2] = t,
        this
    },
    getW: function(e) {
        return this.array[e * this.itemSize + 3]
    },
    setW: function(e, t) {
        return this.array[e * this.itemSize + 3] = t,
        this
    },
    setXY: function(e, t, r) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = r,
        this
    },
    setXYZ: function(e, t, r, i) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = r,
        this.array[e + 2] = i,
        this
    },
    setXYZW: function(e, t, r, i, n) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = r,
        this.array[e + 2] = i,
        this.array[e + 3] = n,
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.Int8Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int8Array(e),t)
}
,
THREE.Uint8Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint8Array(e),t)
}
,
THREE.Uint8ClampedAttribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(e),t)
}
,
THREE.Int16Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int16Array(e),t)
}
,
THREE.Uint16Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint16Array(e),t)
}
,
THREE.Int32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int32Array(e),t)
}
,
THREE.Uint32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint32Array(e),t)
}
,
THREE.Float32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Float32Array(e),t)
}
,
THREE.Float64Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Float64Array(e),t)
}
,
THREE.DynamicBufferAttribute = function(e, t) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
    new THREE.BufferAttribute(e,t).setDynamic(!0)
}
,
THREE.InstancedBufferAttribute = function(e, t, r) {
    THREE.BufferAttribute.call(this, e, t),
    this.meshPerAttribute = r || 1
}
,
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype),
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute,
THREE.InstancedBufferAttribute.prototype.copy = function(e) {
    return THREE.BufferAttribute.prototype.copy.call(this, e),
    this.meshPerAttribute = e.meshPerAttribute,
    this
}
,
THREE.InterleavedBuffer = function(e, t) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = e,
    this.stride = t,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0
}
,
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer,
    get length() {
        return this.array.length
    },
    get count() {
        return this.array.length / this.stride
    },
    set needsUpdate(e) {
        !0 === e && this.version++
    },
    setDynamic: function(e) {
        return this.dynamic = e,
        this
    },
    copy: function(e) {
        return this.array = new e.array.constructor(e.array),
        this.stride = e.stride,
        this.dynamic = e.dynamic,
        this
    },
    copyAt: function(e, t, r) {
        e *= this.stride,
        r *= t.stride;
        for (var i = 0, n = this.stride; i < n; i++)
            this.array[e + i] = t.array[r + i];
        return this
    },
    set: function(e, t) {
        return void 0 === t && (t = 0),
        this.array.set(e, t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.InstancedInterleavedBuffer = function(e, t, r) {
    THREE.InterleavedBuffer.call(this, e, t),
    this.meshPerAttribute = r || 1
}
,
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype),
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer,
THREE.InstancedInterleavedBuffer.prototype.copy = function(e) {
    return THREE.InterleavedBuffer.prototype.copy.call(this, e),
    this.meshPerAttribute = e.meshPerAttribute,
    this
}
,
THREE.InterleavedBufferAttribute = function(e, t, r, i) {
    this.uuid = THREE.Math.generateUUID(),
    this.data = e,
    this.itemSize = t,
    this.offset = r,
    this.normalized = !0 === i
}
,
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute,
    get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
        this.array.length
    },
    get count() {
        return this.data.count
    },
    get array() {
        return this.data.array
    },
    setX: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t,
        this
    },
    setY: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    },
    setZ: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    },
    setW: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    },
    getX: function(e) {
        return this.data.array[e * this.data.stride + this.offset]
    },
    getY: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    },
    getZ: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    },
    getW: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    },
    setXY: function(e, t, r) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = r,
        this
    },
    setXYZ: function(e, t, r, i) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = r,
        this.data.array[e + 2] = i,
        this
    },
    setXYZW: function(e, t, r, i, n) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = r,
        this.data.array[e + 2] = i,
        this.data.array[e + 3] = n,
        this
    }
},
THREE.Geometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Geometry",
    this.vertices = [],
    this.colors = [],
    this.faces = [],
    this.faceVertexUvs = [[]],
    this.morphTargets = [],
    this.morphNormals = [],
    this.skinWeights = [],
    this.skinIndices = [],
    this.lineDistances = [],
    this.boundingBox = null,
    this.boundingSphere = null,
    this.elementsNeedUpdate = !1,
    this.verticesNeedUpdate = !1,
    this.uvsNeedUpdate = !1,
    this.normalsNeedUpdate = !1,
    this.colorsNeedUpdate = !1,
    this.lineDistancesNeedUpdate = !1,
    this.groupsNeedUpdate = !1
}
,
Object.assign(THREE.Geometry.prototype, THREE.EventDispatcher.prototype, {
    applyMatrix: function(e) {
        for (var t = (new THREE.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; r < i; r++) {
            this.vertices[r].applyMatrix4(e)
        }
        for (var r = 0, i = this.faces.length; r < i; r++) {
            var n = this.faces[r];
            n.normal.applyMatrix3(t).normalize();
            for (var a = 0, o = n.vertexNormals.length; a < o; a++)
                n.vertexNormals[a].applyMatrix3(t).normalize()
        }
        return null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this.verticesNeedUpdate = !0,
        this.normalsNeedUpdate = !0,
        this
    },
    rotateX: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationX(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateY: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationY(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateZ: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationZ(t),
            this.applyMatrix(e),
            this
        }
    }(),
    translate: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeTranslation(t, r, i),
            this.applyMatrix(e),
            this
        }
    }(),
    scale: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeScale(t, r, i),
            this.applyMatrix(e),
            this
        }
    }(),
    lookAt: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Object3D),
            e.lookAt(t),
            e.updateMatrix(),
            this.applyMatrix(e.matrix)
        }
    }(),
    fromBufferGeometry: function(e) {
        function t(e, t, i, n) {
            var a = void 0 !== o ? [l[e].clone(), l[t].clone(), l[i].clone()] : []
              , d = void 0 !== s ? [r.colors[e].clone(), r.colors[t].clone(), r.colors[i].clone()] : []
              , f = new THREE.Face3(e,t,i,a,d,n);
            r.faces.push(f),
            void 0 !== c && r.faceVertexUvs[0].push([u[e].clone(), u[t].clone(), u[i].clone()]),
            void 0 !== h && r.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[i].clone()])
        }
        var r = this
          , i = null !== e.index ? e.index.array : void 0
          , n = e.attributes
          , a = n.position.array
          , o = void 0 !== n.normal ? n.normal.array : void 0
          , s = void 0 !== n.color ? n.color.array : void 0
          , c = void 0 !== n.uv ? n.uv.array : void 0
          , h = void 0 !== n.uv2 ? n.uv2.array : void 0;
        void 0 !== h && (this.faceVertexUvs[1] = []);
        for (var l = [], u = [], p = [], d = 0, f = 0; d < a.length; d += 3,
        f += 2)
            r.vertices.push(new THREE.Vector3(a[d],a[d + 1],a[d + 2])),
            void 0 !== o && l.push(new THREE.Vector3(o[d],o[d + 1],o[d + 2])),
            void 0 !== s && r.colors.push(new THREE.Color(s[d],s[d + 1],s[d + 2])),
            void 0 !== c && u.push(new THREE.Vector2(c[f],c[f + 1])),
            void 0 !== h && p.push(new THREE.Vector2(h[f],h[f + 1]));
        if (void 0 !== i) {
            var E = e.groups;
            if (E.length > 0)
                for (d = 0; d < E.length; d++)
                    for (var m = E[d], g = m.start, f = g, v = g + m.count; f < v; f += 3)
                        t(i[f], i[f + 1], i[f + 2], m.materialIndex);
            else
                for (d = 0; d < i.length; d += 3)
                    t(i[d], i[d + 1], i[d + 2])
        } else
            for (d = 0; d < a.length / 3; d += 3)
                t(d, d + 1, d + 2);
        return this.computeFaceNormals(),
        null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
        this
    },
    center: function() {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z),
        e
    },
    normalize: function() {
        this.computeBoundingSphere();
        var e = this.boundingSphere.center
          , t = this.boundingSphere.radius
          , r = 0 === t ? 1 : 1 / t
          , i = new THREE.Matrix4;
        return i.set(r, 0, 0, -r * e.x, 0, r, 0, -r * e.y, 0, 0, r, -r * e.z, 0, 0, 0, 1),
        this.applyMatrix(i),
        this
    },
    computeFaceNormals: function() {
        for (var e = new THREE.Vector3, t = new THREE.Vector3, r = 0, i = this.faces.length; r < i; r++) {
            var n = this.faces[r]
              , a = this.vertices[n.a]
              , o = this.vertices[n.b]
              , s = this.vertices[n.c];
            e.subVectors(s, o),
            t.subVectors(a, o),
            e.cross(t),
            e.normalize(),
            n.normal.copy(e)
        }
    },
    computeVertexNormals: function(e) {
        void 0 === e && (e = !0);
        var t, r, i, n, a, o;
        for (o = new Array(this.vertices.length),
        t = 0,
        r = this.vertices.length; t < r; t++)
            o[t] = new THREE.Vector3;
        if (e) {
            var s, c, h, l = new THREE.Vector3, u = new THREE.Vector3;
            for (i = 0,
            n = this.faces.length; i < n; i++)
                a = this.faces[i],
                s = this.vertices[a.a],
                c = this.vertices[a.b],
                h = this.vertices[a.c],
                l.subVectors(h, c),
                u.subVectors(s, c),
                l.cross(u),
                o[a.a].add(l),
                o[a.b].add(l),
                o[a.c].add(l)
        } else
            for (i = 0,
            n = this.faces.length; i < n; i++)
                o[(a = this.faces[i]).a].add(a.normal),
                o[a.b].add(a.normal),
                o[a.c].add(a.normal);
        for (t = 0,
        r = this.vertices.length; t < r; t++)
            o[t].normalize();
        for (i = 0,
        n = this.faces.length; i < n; i++) {
            var p = (a = this.faces[i]).vertexNormals;
            3 === p.length ? (p[0].copy(o[a.a]),
            p[1].copy(o[a.b]),
            p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(),
            p[1] = o[a.b].clone(),
            p[2] = o[a.c].clone())
        }
        this.faces.length > 0 && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
        var e, t, r, i, n;
        for (r = 0,
        i = this.faces.length; r < i; r++)
            for ((n = this.faces[r]).__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(),
            n.__originalVertexNormals || (n.__originalVertexNormals = []),
            e = 0,
            t = n.vertexNormals.length; e < t; e++)
                n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
        var a = new THREE.Geometry;
        for (a.faces = this.faces,
        e = 0,
        t = this.morphTargets.length; e < t; e++) {
            if (!this.morphNormals[e]) {
                this.morphNormals[e] = {},
                this.morphNormals[e].faceNormals = [],
                this.morphNormals[e].vertexNormals = [];
                var o = this.morphNormals[e].faceNormals
                  , s = this.morphNormals[e].vertexNormals;
                for (r = 0,
                i = this.faces.length; r < i; r++)
                    h = new THREE.Vector3,
                    l = {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    },
                    o.push(h),
                    s.push(l)
            }
            var c = this.morphNormals[e];
            a.vertices = this.morphTargets[e].vertices,
            a.computeFaceNormals(),
            a.computeVertexNormals();
            var h, l;
            for (r = 0,
            i = this.faces.length; r < i; r++)
                n = this.faces[r],
                h = c.faceNormals[r],
                l = c.vertexNormals[r],
                h.copy(n.normal),
                l.a.copy(n.vertexNormals[0]),
                l.b.copy(n.vertexNormals[1]),
                l.c.copy(n.vertexNormals[2])
        }
        for (r = 0,
        i = this.faces.length; r < i; r++)
            (n = this.faces[r]).normal = n.__originalFaceNormal,
            n.vertexNormals = n.__originalVertexNormals
    },
    computeTangents: function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
        for (var e = 0, t = this.vertices, r = 0, i = t.length; r < i; r++)
            r > 0 && (e += t[r].distanceTo(t[r - 1])),
            this.lineDistances[r] = e
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3),
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere),
        this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(e, t, r) {
        if (e instanceof THREE.Geometry != !1) {
            var i, n = this.vertices.length, a = this.vertices, o = e.vertices, s = this.faces, c = e.faces, h = this.faceVertexUvs[0], l = e.faceVertexUvs[0];
            void 0 === r && (r = 0),
            void 0 !== t && (i = (new THREE.Matrix3).getNormalMatrix(t));
            for (var u = 0, p = o.length; u < p; u++) {
                var d = o[u].clone();
                void 0 !== t && d.applyMatrix4(t),
                a.push(d)
            }
            for (u = 0,
            p = c.length; u < p; u++) {
                var f, E, m, g = c[u], v = g.vertexNormals, T = g.vertexColors;
                (f = new THREE.Face3(g.a + n,g.b + n,g.c + n)).normal.copy(g.normal),
                void 0 !== i && f.normal.applyMatrix3(i).normalize();
                for (var y = 0, R = v.length; y < R; y++)
                    E = v[y].clone(),
                    void 0 !== i && E.applyMatrix3(i).normalize(),
                    f.vertexNormals.push(E);
                f.color.copy(g.color);
                for (var y = 0, R = T.length; y < R; y++)
                    m = T[y],
                    f.vertexColors.push(m.clone());
                f.materialIndex = g.materialIndex + r,
                s.push(f)
            }
            for (u = 0,
            p = l.length; u < p; u++) {
                var x = l[u]
                  , H = [];
                if (void 0 !== x) {
                    for (var y = 0, R = x.length; y < R; y++)
                        H.push(x[y].clone());
                    h.push(H)
                }
            }
        } else
            console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e)
    },
    mergeMesh: function(e) {
        e instanceof THREE.Mesh != !1 ? (e.matrixAutoUpdate && e.updateMatrix(),
        this.merge(e.geometry, e.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e)
    },
    mergeVertices: function() {
        var e, t, r, i, n, a, o, s, c = {}, h = [], l = [], u = Math.pow(10, 4);
        for (r = 0,
        i = this.vertices.length; r < i; r++)
            e = this.vertices[r],
            void 0 === c[t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" + Math.round(e.z * u)] ? (c[t] = r,
            h.push(this.vertices[r]),
            l[r] = h.length - 1) : l[r] = l[c[t]];
        var p = [];
        for (r = 0,
        i = this.faces.length; r < i; r++) {
            (n = this.faces[r]).a = l[n.a],
            n.b = l[n.b],
            n.c = l[n.c],
            a = [n.a, n.b, n.c];
            for (var d = 0; d < 3; d++)
                if (a[d] === a[(d + 1) % 3]) {
                    d,
                    p.push(r);
                    break
                }
        }
        for (r = p.length - 1; r >= 0; r--) {
            var f = p[r];
            for (this.faces.splice(f, 1),
            o = 0,
            s = this.faceVertexUvs.length; o < s; o++)
                this.faceVertexUvs[o].splice(f, 1)
        }
        var E = this.vertices.length - h.length;
        return this.vertices = h,
        E
    },
    sortFacesByMaterialIndex: function() {
        for (var e = this.faces, t = e.length, r = 0; r < t; r++)
            e[r]._id = r;
        e.sort(function(e, t) {
            return e.materialIndex - t.materialIndex
        });
        var i, n, a = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
        a && a.length === t && (i = []),
        o && o.length === t && (n = []);
        for (r = 0; r < t; r++) {
            var s = e[r]._id;
            i && i.push(a[s]),
            n && n.push(o[s])
        }
        i && (this.faceVertexUvs[0] = i),
        n && (this.faceVertexUvs[1] = n)
    },
    toJSON: function() {
        function e(e, t, r) {
            return r ? e | 1 << t : e & ~(1 << t)
        }
        function t(e) {
            var t = e.x.toString() + e.y.toString() + e.z.toString();
            return void 0 !== p[t] ? p[t] : (p[t] = u.length / 3,
            u.push(e.x, e.y, e.z),
            p[t])
        }
        function r(e) {
            var t = e.r.toString() + e.g.toString() + e.b.toString();
            return void 0 !== f[t] ? f[t] : (f[t] = d.length,
            d.push(e.getHex()),
            f[t])
        }
        function i(e) {
            var t = e.x.toString() + e.y.toString();
            return void 0 !== m[t] ? m[t] : (m[t] = E.length / 2,
            E.push(e.x, e.y),
            m[t])
        }
        var n = {
            metadata: {
                version: 4.4,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        if (n.uuid = this.uuid,
        n.type = this.type,
        "" !== this.name && (n.name = this.name),
        void 0 !== this.parameters) {
            var a = this.parameters;
            for (var o in a)
                void 0 !== a[o] && (n[o] = a[o]);
            return n
        }
        for (var s = [], c = 0; c < this.vertices.length; c++) {
            var h = this.vertices[c];
            s.push(h.x, h.y, h.z)
        }
        for (var l = [], u = [], p = {}, d = [], f = {}, E = [], m = {}, c = 0; c < this.faces.length; c++) {
            var g = this.faces[c]
              , v = void 0 !== this.faceVertexUvs[0][c]
              , T = g.normal.length() > 0
              , y = g.vertexNormals.length > 0
              , R = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b
              , x = g.vertexColors.length > 0
              , H = 0;
            if (H = e(H, 0, 0),
            H = e(H, 1, !0),
            H = e(H, 2, !1),
            H = e(H, 3, v),
            H = e(H, 4, T),
            H = e(H, 5, y),
            H = e(H, 6, R),
            H = e(H, 7, x),
            l.push(H),
            l.push(g.a, g.b, g.c),
            l.push(g.materialIndex),
            v) {
                var b = this.faceVertexUvs[0][c];
                l.push(i(b[0]), i(b[1]), i(b[2]))
            }
            if (T && l.push(t(g.normal)),
            y) {
                var _ = g.vertexNormals;
                l.push(t(_[0]), t(_[1]), t(_[2]))
            }
            if (R && l.push(r(g.color)),
            x) {
                var M = g.vertexColors;
                l.push(r(M[0]), r(M[1]), r(M[2]))
            }
        }
        return n.data = {},
        n.data.vertices = s,
        n.data.normals = u,
        d.length > 0 && (n.data.colors = d),
        E.length > 0 && (n.data.uvs = [E]),
        n.data.faces = l,
        n
    },
    clone: function() {
        return (new THREE.Geometry).copy(this)
    },
    copy: function(e) {
        this.vertices = [],
        this.faces = [],
        this.faceVertexUvs = [[]];
        for (var t = e.vertices, r = 0, i = t.length; r < i; r++)
            this.vertices.push(t[r].clone());
        for (var n = e.faces, r = 0, i = n.length; r < i; r++)
            this.faces.push(n[r].clone());
        for (var r = 0, i = e.faceVertexUvs.length; r < i; r++) {
            var a = e.faceVertexUvs[r];
            void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
            for (var o = 0, s = a.length; o < s; o++) {
                for (var c = a[o], h = [], l = 0, u = c.length; l < u; l++) {
                    var p = c[l];
                    h.push(p.clone())
                }
                this.faceVertexUvs[r].push(h)
            }
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}),
THREE.GeometryIdCount = 0,
THREE.DirectGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "DirectGeometry",
    this.indices = [],
    this.vertices = [],
    this.normals = [],
    this.colors = [],
    this.uvs = [],
    this.uvs2 = [],
    this.groups = [],
    this.morphTargets = {},
    this.skinWeights = [],
    this.skinIndices = [],
    this.boundingBox = null,
    this.boundingSphere = null,
    this.verticesNeedUpdate = !1,
    this.normalsNeedUpdate = !1,
    this.colorsNeedUpdate = !1,
    this.uvsNeedUpdate = !1,
    this.groupsNeedUpdate = !1
}
,
Object.assign(THREE.DirectGeometry.prototype, THREE.EventDispatcher.prototype, {
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function() {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function() {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function(e) {
        for (var t, r, i = [], n = e.faces, a = 0; a < n.length; a++) {
            var o = n[a];
            o.materialIndex !== r && (r = o.materialIndex,
            void 0 !== t && (t.count = 3 * a - t.start,
            i.push(t)),
            t = {
                start: 3 * a,
                materialIndex: r
            })
        }
        void 0 !== t && (t.count = 3 * a - t.start,
        i.push(t)),
        this.groups = i
    },
    fromGeometry: function(e) {
        var t, r = e.faces, i = e.vertices, n = e.faceVertexUvs, a = n[0] && n[0].length > 0, o = n[1] && n[1].length > 0, s = e.morphTargets, c = s.length;
        if (c > 0) {
            t = [];
            for (m = 0; m < c; m++)
                t[m] = [];
            this.morphTargets.position = t
        }
        var h, l = e.morphNormals, u = l.length;
        if (u > 0) {
            h = [];
            for (m = 0; m < u; m++)
                h[m] = [];
            this.morphTargets.normal = h
        }
        for (var p = e.skinIndices, d = e.skinWeights, f = p.length === i.length, E = d.length === i.length, m = 0; m < r.length; m++) {
            var g = r[m];
            this.vertices.push(i[g.a], i[g.b], i[g.c]);
            var v = g.vertexNormals;
            if (3 === v.length)
                this.normals.push(v[0], v[1], v[2]);
            else {
                var T = g.normal;
                this.normals.push(T, T, T)
            }
            var y = g.vertexColors;
            if (3 === y.length)
                this.colors.push(y[0], y[1], y[2]);
            else {
                var R = g.color;
                this.colors.push(R, R, R)
            }
            if (!0 === a) {
                void 0 !== (x = n[0][m]) ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m),
                this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))
            }
            if (!0 === o) {
                var x = n[1][m];
                void 0 !== x ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", m),
                this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))
            }
            for (b = 0; b < c; b++) {
                var H = s[b].vertices;
                t[b].push(H[g.a], H[g.b], H[g.c])
            }
            for (var b = 0; b < u; b++) {
                var _ = l[b].vertexNormals[m];
                h[b].push(_.a, _.b, _.c)
            }
            f && this.skinIndices.push(p[g.a], p[g.b], p[g.c]),
            E && this.skinWeights.push(d[g.a], d[g.b], d[g.c])
        }
        return this.computeGroups(e),
        this.verticesNeedUpdate = e.verticesNeedUpdate,
        this.normalsNeedUpdate = e.normalsNeedUpdate,
        this.colorsNeedUpdate = e.colorsNeedUpdate,
        this.uvsNeedUpdate = e.uvsNeedUpdate,
        this.groupsNeedUpdate = e.groupsNeedUpdate,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}),
THREE.BufferGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "BufferGeometry",
    this.index = null,
    this.attributes = {},
    this.morphAttributes = {},
    this.groups = [],
    this.boundingBox = null,
    this.boundingSphere = null,
    this.drawRange = {
        start: 0,
        count: 1 / 0
    }
}
,
Object.assign(THREE.BufferGeometry.prototype, THREE.EventDispatcher.prototype, {
    getIndex: function() {
        return this.index
    },
    setIndex: function(e) {
        this.index = e
    },
    addAttribute: function(e, t) {
        return t instanceof THREE.BufferAttribute == !1 && t instanceof THREE.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
        void this.addAttribute(e, new THREE.BufferAttribute(arguments[1],arguments[2]))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
        void this.setIndex(t)) : (this.attributes[e] = t,
        this)
    },
    getAttribute: function(e) {
        return this.attributes[e]
    },
    removeAttribute: function(e) {
        return delete this.attributes[e],
        this
    },
    addGroup: function(e, t, r) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: void 0 !== r ? r : 0
        })
    },
    clearGroups: function() {
        this.groups = []
    },
    setDrawRange: function(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    },
    applyMatrix: function(e) {
        var t = this.attributes.position;
        void 0 !== t && (e.applyToVector3Array(t.array),
        t.needsUpdate = !0);
        var r = this.attributes.normal;
        if (void 0 !== r) {
            (new THREE.Matrix3).getNormalMatrix(e).applyToVector3Array(r.array),
            r.needsUpdate = !0
        }
        return null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
    },
    rotateX: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationX(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateY: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationY(t),
            this.applyMatrix(e),
            this
        }
    }(),
    rotateZ: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationZ(t),
            this.applyMatrix(e),
            this
        }
    }(),
    translate: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeTranslation(t, r, i),
            this.applyMatrix(e),
            this
        }
    }(),
    scale: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeScale(t, r, i),
            this.applyMatrix(e),
            this
        }
    }(),
    lookAt: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Object3D),
            e.lookAt(t),
            e.updateMatrix(),
            this.applyMatrix(e.matrix)
        }
    }(),
    center: function() {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z),
        e
    },
    setFromObject: function(e) {
        var t = e.geometry;
        if (e instanceof THREE.Points || e instanceof THREE.Line) {
            var r = new THREE.Float32Attribute(3 * t.vertices.length,3)
              , i = new THREE.Float32Attribute(3 * t.colors.length,3);
            if (this.addAttribute("position", r.copyVector3sArray(t.vertices)),
            this.addAttribute("color", i.copyColorsArray(t.colors)),
            t.lineDistances && t.lineDistances.length === t.vertices.length) {
                var n = new THREE.Float32Attribute(t.lineDistances.length,1);
                this.addAttribute("lineDistance", n.copyArray(t.lineDistances))
            }
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
        } else
            e instanceof THREE.Mesh && t instanceof THREE.Geometry && this.fromGeometry(t);
        return this
    },
    updateFromObject: function(e) {
        var t = e.geometry;
        if (e instanceof THREE.Mesh) {
            var r = t.__directGeometry;
            if (void 0 === r || !0 === t.elementsNeedUpdate)
                return this.fromGeometry(t);
            r.verticesNeedUpdate = t.verticesNeedUpdate || t.elementsNeedUpdate,
            r.normalsNeedUpdate = t.normalsNeedUpdate || t.elementsNeedUpdate,
            r.colorsNeedUpdate = t.colorsNeedUpdate || t.elementsNeedUpdate,
            r.uvsNeedUpdate = t.uvsNeedUpdate || t.elementsNeedUpdate,
            r.groupsNeedUpdate = t.groupsNeedUpdate || t.elementsNeedUpdate,
            t.elementsNeedUpdate = !1,
            t.verticesNeedUpdate = !1,
            t.normalsNeedUpdate = !1,
            t.colorsNeedUpdate = !1,
            t.uvsNeedUpdate = !1,
            t.groupsNeedUpdate = !1,
            t = r
        }
        var i;
        return !0 === t.verticesNeedUpdate && (void 0 !== (i = this.attributes.position) && (i.copyVector3sArray(t.vertices),
        i.needsUpdate = !0),
        t.verticesNeedUpdate = !1),
        !0 === t.normalsNeedUpdate && (void 0 !== (i = this.attributes.normal) && (i.copyVector3sArray(t.normals),
        i.needsUpdate = !0),
        t.normalsNeedUpdate = !1),
        !0 === t.colorsNeedUpdate && (void 0 !== (i = this.attributes.color) && (i.copyColorsArray(t.colors),
        i.needsUpdate = !0),
        t.colorsNeedUpdate = !1),
        t.uvsNeedUpdate && (void 0 !== (i = this.attributes.uv) && (i.copyVector2sArray(t.uvs),
        i.needsUpdate = !0),
        t.uvsNeedUpdate = !1),
        t.lineDistancesNeedUpdate && (void 0 !== (i = this.attributes.lineDistance) && (i.copyArray(t.lineDistances),
        i.needsUpdate = !0),
        t.lineDistancesNeedUpdate = !1),
        t.groupsNeedUpdate && (t.computeGroups(e.geometry),
        this.groups = t.groups,
        t.groupsNeedUpdate = !1),
        this
    },
    fromGeometry: function(e) {
        return e.__directGeometry = (new THREE.DirectGeometry).fromGeometry(e),
        this.fromDirectGeometry(e.__directGeometry)
    },
    fromDirectGeometry: function(e) {
        var t = new Float32Array(3 * e.vertices.length);
        if (this.addAttribute("position", new THREE.BufferAttribute(t,3).copyVector3sArray(e.vertices)),
        e.normals.length > 0) {
            var r = new Float32Array(3 * e.normals.length);
            this.addAttribute("normal", new THREE.BufferAttribute(r,3).copyVector3sArray(e.normals))
        }
        if (e.colors.length > 0) {
            var i = new Float32Array(3 * e.colors.length);
            this.addAttribute("color", new THREE.BufferAttribute(i,3).copyColorsArray(e.colors))
        }
        if (e.uvs.length > 0) {
            var n = new Float32Array(2 * e.uvs.length);
            this.addAttribute("uv", new THREE.BufferAttribute(n,2).copyVector2sArray(e.uvs))
        }
        if (e.uvs2.length > 0) {
            var a = new Float32Array(2 * e.uvs2.length);
            this.addAttribute("uv2", new THREE.BufferAttribute(a,2).copyVector2sArray(e.uvs2))
        }
        if (e.indices.length > 0) {
            var o = new (e.vertices.length > 65535 ? Uint32Array : Uint16Array)(3 * e.indices.length);
            this.setIndex(new THREE.BufferAttribute(o,1).copyIndicesArray(e.indices))
        }
        this.groups = e.groups;
        for (var s in e.morphTargets) {
            for (var c = [], h = e.morphTargets[s], l = 0, u = h.length; l < u; l++) {
                var p = h[l]
                  , d = new THREE.Float32Attribute(3 * p.length,3);
                c.push(d.copyVector3sArray(p))
            }
            this.morphAttributes[s] = c
        }
        if (e.skinIndices.length > 0) {
            var f = new THREE.Float32Attribute(4 * e.skinIndices.length,4);
            this.addAttribute("skinIndex", f.copyVector4sArray(e.skinIndices))
        }
        if (e.skinWeights.length > 0) {
            var E = new THREE.Float32Attribute(4 * e.skinWeights.length,4);
            this.addAttribute("skinWeight", E.copyVector4sArray(e.skinWeights))
        }
        return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
        null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        this
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        var e = this.attributes.position.array;
        void 0 !== e ? this.boundingBox.setFromArray(e) : this.boundingBox.makeEmpty(),
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    },
    computeBoundingSphere: function() {
        var e = new THREE.Box3
          , t = new THREE.Vector3;
        return function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var r = this.attributes.position;
            if (r) {
                var i = r.array
                  , n = this.boundingSphere.center;
                e.setFromArray(i),
                e.center(n);
                for (var a = 0, o = 0, s = i.length; o < s; o += 3)
                    t.fromArray(i, o),
                    a = Math.max(a, n.distanceToSquared(t));
                this.boundingSphere.radius = Math.sqrt(a),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var e = this.index
          , t = this.attributes
          , r = this.groups;
        if (t.position) {
            var i = t.position.array;
            if (void 0 === t.normal)
                this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(i.length),3));
            else
                for (var n = t.normal.array, a = 0, o = n.length; a < o; a++)
                    n[a] = 0;
            var s, c, h, l = t.normal.array, u = new THREE.Vector3, p = new THREE.Vector3, d = new THREE.Vector3, f = new THREE.Vector3, E = new THREE.Vector3;
            if (e) {
                var m = e.array;
                0 === r.length && this.addGroup(0, m.length);
                for (var g = 0, v = r.length; g < v; ++g)
                    for (var T = r[g], y = T.start, a = y, o = y + T.count; a < o; a += 3)
                        s = 3 * m[a + 0],
                        c = 3 * m[a + 1],
                        h = 3 * m[a + 2],
                        u.fromArray(i, s),
                        p.fromArray(i, c),
                        d.fromArray(i, h),
                        f.subVectors(d, p),
                        E.subVectors(u, p),
                        f.cross(E),
                        l[s] += f.x,
                        l[s + 1] += f.y,
                        l[s + 2] += f.z,
                        l[c] += f.x,
                        l[c + 1] += f.y,
                        l[c + 2] += f.z,
                        l[h] += f.x,
                        l[h + 1] += f.y,
                        l[h + 2] += f.z
            } else
                for (var a = 0, o = i.length; a < o; a += 9)
                    u.fromArray(i, a),
                    p.fromArray(i, a + 3),
                    d.fromArray(i, a + 6),
                    f.subVectors(d, p),
                    E.subVectors(u, p),
                    f.cross(E),
                    l[a] = f.x,
                    l[a + 1] = f.y,
                    l[a + 2] = f.z,
                    l[a + 3] = f.x,
                    l[a + 4] = f.y,
                    l[a + 5] = f.z,
                    l[a + 6] = f.x,
                    l[a + 7] = f.y,
                    l[a + 8] = f.z;
            this.normalizeNormals(),
            t.normal.needsUpdate = !0
        }
    },
    merge: function(e, t) {
        if (e instanceof THREE.BufferGeometry != !1) {
            void 0 === t && (t = 0);
            var r = this.attributes;
            for (var i in r)
                if (void 0 !== e.attributes[i])
                    for (var n = r[i].array, a = e.attributes[i], o = a.array, s = 0, c = a.itemSize * t; s < o.length; s++,
                    c++)
                        n[c] = o[s];
            return this
        }
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
    },
    join: function(e) {
        if (!(null != e && "object" == typeof e) || !1 === e.isBufferGeometry && e.constructor !== Array)
            return console.error("THREE.BufferGeometry.join(): geometry not an instance of THREE.BufferGeometry or Array.", e),
            this;
        var t;
        e instanceof THREE.BufferGeometry ? t = [e, this] : (t = e).push(this);
        var r, i, n, a = new THREE.BufferGeometry;
        for (i = 0; i < t.length; i++)
            (n = t[i]).index && (n = n.toNonIndexed(),
            t[i] = n);
        for (var o in this.attributes)
            if (this.attributes[o].array.constructor === Float32Array) {
                var s = [];
                for (i = 0; i < t.length; i++) {
                    if (!(n = t[i]).attributes[o])
                        return console.error("Mismatched geometry attributes: " + o),
                        this;
                    var c = n.attributes[o].array;
                    for (r = 0; r < c.length; r++)
                        s.push(c[r])
                }
                a.addAttribute(o, new THREE.BufferAttribute(new Float32Array(s),this.attributes[o].itemSize))
            }
        for (i = 0; i < t.length; i++)
            t[i].dispose();
        return a
    },
    normalizeNormals: function() {
        for (var e, t, r, i, n = this.attributes.normal.array, a = 0, o = n.length; a < o; a += 3)
            e = n[a],
            t = n[a + 1],
            r = n[a + 2],
            i = 1 / Math.sqrt(e * e + t * t + r * r),
            n[a] *= i,
            n[a + 1] *= i,
            n[a + 2] *= i
    },
    toNonIndexed: function() {
        if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
            this;
        var e = new THREE.BufferGeometry
          , t = this.index.array
          , r = this.attributes;
        for (var i in r) {
            for (var n = r[i], a = n.array, o = n.itemSize, s = new a.constructor(t.length * o), c = 0, h = 0, l = 0, u = t.length; l < u; l++) {
                c = t[l] * o;
                for (var p = 0; p < o; p++)
                    s[h++] = a[c++]
            }
            e.addAttribute(i, new THREE.BufferAttribute(s,o))
        }
        return e
    },
    toJSON: function() {
        var e = {
            metadata: {
                version: 4.4,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        "" !== this.name && (e.name = this.name),
        void 0 !== this.parameters) {
            var t = this.parameters;
            for (var r in t)
                void 0 !== t[r] && (e[r] = t[r]);
            return e
        }
        e.data = {
            attributes: {}
        };
        var i = this.index;
        if (null !== i) {
            o = Array.prototype.slice.call(i.array);
            e.data.index = {
                type: i.array.constructor.name,
                array: o
            }
        }
        var n = this.attributes;
        for (var r in n) {
            var a = n[r]
              , o = Array.prototype.slice.call(a.array);
            e.data.attributes[r] = {
                itemSize: a.itemSize,
                type: a.array.constructor.name,
                array: o,
                normalized: a.normalized
            }
        }
        var s = this.groups;
        s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
        var c = this.boundingSphere;
        return null !== c && (e.data.boundingSphere = {
            center: c.center.toArray(),
            radius: c.radius
        }),
        e
    },
    clone: function() {
        return (new THREE.BufferGeometry).copy(this)
    },
    copy: function(e) {
        var t = e.index;
        null !== t && this.setIndex(t.clone());
        var r = e.attributes;
        for (var i in r) {
            var n = r[i];
            this.addAttribute(i, n.clone())
        }
        for (var a = e.groups, o = 0, s = a.length; o < s; o++) {
            var c = a[o];
            this.addGroup(c.start, c.count, c.materialIndex)
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}),
THREE.BufferGeometry.MaxIndex = 65535,
THREE.InstancedBufferGeometry = function() {
    THREE.BufferGeometry.call(this),
    this.type = "InstancedBufferGeometry",
    this.maxInstancedCount = void 0
}
,
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry,
THREE.InstancedBufferGeometry.prototype.addGroup = function(e, t, r) {
    this.groups.push({
        start: e,
        count: t,
        instances: r
    })
}
,
THREE.InstancedBufferGeometry.prototype.copy = function(e) {
    var t = e.index;
    null !== t && this.setIndex(t.clone());
    var r = e.attributes;
    for (var i in r) {
        var n = r[i];
        this.addAttribute(i, n.clone())
    }
    for (var a = e.groups, o = 0, s = a.length; o < s; o++) {
        var c = a[o];
        this.addGroup(c.start, c.count, c.instances)
    }
    return this
}
,
THREE.Uniform = function(e) {
    "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
    e = arguments[1]),
    this.value = e,
    this.dynamic = !1
}
,
THREE.Uniform.prototype = {
    constructor: THREE.Uniform,
    onUpdate: function(e) {
        return this.dynamic = !0,
        this.onUpdateCallback = e,
        this
    }
},
THREE.AnimationAction = function() {
    throw new Error("THREE.AnimationAction: Use mixer.clipAction for construction.")
}
,
THREE.AnimationAction._new = function(e, t, r) {
    this._mixer = e,
    this._clip = t,
    this._localRoot = r || null;
    for (var i = t.tracks, n = i.length, a = new Array(n), o = {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    }, s = 0; s !== n; ++s) {
        var c = i[s].createInterpolant(null);
        a[s] = c,
        c.settings = o
    }
    this._interpolantSettings = o,
    this._interpolants = a,
    this._propertyBindings = new Array(n),
    this._cacheIndex = null,
    this._byClipCacheIndex = null,
    this._timeScaleInterpolant = null,
    this._weightInterpolant = null,
    this.loop = THREE.LoopRepeat,
    this._loopCount = -1,
    this._startTime = null,
    this.time = 0,
    this.timeScale = 1,
    this._effectiveTimeScale = 1,
    this.weight = 1,
    this._effectiveWeight = 1,
    this.repetitions = 1 / 0,
    this.paused = !1,
    this.enabled = !0,
    this.clampWhenFinished = !1,
    this.zeroSlopeAtStart = !0,
    this.zeroSlopeAtEnd = !0
}
,
THREE.AnimationAction._new.prototype = {
    constructor: THREE.AnimationAction._new,
    play: function() {
        return this._mixer._activateAction(this),
        this
    },
    stop: function() {
        return this._mixer._deactivateAction(this),
        this.reset()
    },
    reset: function() {
        return this.paused = !1,
        this.enabled = !0,
        this.time = 0,
        this._loopCount = -1,
        this._startTime = null,
        this.stopFading().stopWarping()
    },
    isRunning: function() {
        this._startTime;
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
        return this._mixer._isActiveAction(this)
    },
    startAt: function(e) {
        return this._startTime = e,
        this
    },
    setLoop: function(e, t) {
        return this.loop = e,
        this.repetitions = t,
        this
    },
    setEffectiveWeight: function(e) {
        return this.weight = e,
        this._effectiveWeight = this.enabled ? e : 0,
        this.stopFading()
    },
    getEffectiveWeight: function() {
        return this._effectiveWeight
    },
    fadeIn: function(e) {
        return this._scheduleFading(e, 0, 1)
    },
    fadeOut: function(e) {
        return this._scheduleFading(e, 1, 0)
    },
    crossFadeFrom: function(e, t, r) {
        this._mixer;
        if (e.fadeOut(t),
        this.fadeIn(t),
        r) {
            var i = this._clip.duration
              , n = e._clip.duration
              , a = n / i
              , o = i / n;
            e.warp(1, a, t),
            this.warp(o, 1, t)
        }
        return this
    },
    crossFadeTo: function(e, t, r) {
        return e.crossFadeFrom(this, t, r)
    },
    stopFading: function() {
        var e = this._weightInterpolant;
        return null !== e && (this._weightInterpolant = null,
        this._mixer._takeBackControlInterpolant(e)),
        this
    },
    setEffectiveTimeScale: function(e) {
        return this.timeScale = e,
        this._effectiveTimeScale = this.paused ? 0 : e,
        this.stopWarping()
    },
    getEffectiveTimeScale: function() {
        return this._effectiveTimeScale
    },
    setDuration: function(e) {
        return this.timeScale = this._clip.duration / e,
        this.stopWarping()
    },
    syncWith: function(e) {
        return this.time = e.time,
        this.timeScale = e.timeScale,
        this.stopWarping()
    },
    halt: function(e) {
        return this.warp(this._effectiveTimeScale, 0, e)
    },
    warp: function(e, t, r) {
        var i = this._mixer
          , n = i.time
          , a = this._timeScaleInterpolant
          , o = this.timeScale;
        null === a && (a = i._lendControlInterpolant(),
        this._timeScaleInterpolant = a);
        var s = a.parameterPositions
          , c = a.sampleValues;
        return s[0] = n,
        s[1] = n + r,
        c[0] = e / o,
        c[1] = t / o,
        this
    },
    stopWarping: function() {
        var e = this._timeScaleInterpolant;
        return null !== e && (this._timeScaleInterpolant = null,
        this._mixer._takeBackControlInterpolant(e)),
        this
    },
    getMixer: function() {
        return this._mixer
    },
    getClip: function() {
        return this._clip
    },
    getRoot: function() {
        return this._localRoot || this._mixer._root
    },
    _update: function(e, t, r, i) {
        var n = this._startTime;
        if (null !== n) {
            var a = (e - n) * r;
            if (a < 0 || 0 === r)
                return;
            this._startTime = null,
            t = r * a
        }
        t *= this._updateTimeScale(e);
        var o = this._updateTime(t)
          , s = this._updateWeight(e);
        if (s > 0)
            for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l)
                c[l].evaluate(o),
                h[l].accumulate(i, s)
    },
    _updateWeight: function(e) {
        var t = 0;
        if (this.enabled) {
            t = this.weight;
            var r = this._weightInterpolant;
            if (null !== r) {
                var i = r.evaluate(e)[0];
                t *= i,
                e > r.parameterPositions[1] && (this.stopFading(),
                0 === i && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = t,
        t
    },
    _updateTimeScale: function(e) {
        var t = 0;
        if (!this.paused) {
            t = this.timeScale;
            var r = this._timeScaleInterpolant;
            if (null !== r) {
                t *= r.evaluate(e)[0],
                e > r.parameterPositions[1] && (this.stopWarping(),
                0 === t ? this.paused = !0 : this.timeScale = t)
            }
        }
        return this._effectiveTimeScale = t,
        t
    },
    _updateTime: function(e) {
        var t = this.time + e;
        if (0 === e)
            return t;
        var r = this._clip.duration
          , i = this.loop
          , n = this._loopCount;
        if (i === THREE.LoopOnce) {
            -1 === n && (this.loopCount = 0,
            this._setEndings(!0, !0, !1));
            e: {
                if (t >= r)
                    t = r;
                else {
                    if (!(t < 0))
                        break e;
                    t = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e < 0 ? -1 : 1
                })
            }
        } else {
            var a = i === THREE.LoopPingPong;
            if (-1 === n && (e >= 0 ? (n = 0,
            this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
            t >= r || t < 0) {
                var o = Math.floor(t / r);
                t -= r * o,
                n += Math.abs(o);
                var s = this.repetitions - n;
                if (s < 0)
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    t = e > 0 ? r : 0,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: e > 0 ? 1 : -1
                    });
                else {
                    if (0 === s) {
                        var c = e < 0;
                        this._setEndings(c, !c, a)
                    } else
                        this._setEndings(!1, !1, a);
                    this._loopCount = n,
                    this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: o
                    })
                }
            }
            if (a && 1 == (1 & n))
                return this.time = t,
                r - t
        }
        return this.time = t,
        t
    },
    _setEndings: function(e, t, r) {
        var i = this._interpolantSettings;
        r ? (i.endingStart = THREE.ZeroSlopeEnding,
        i.endingEnd = THREE.ZeroSlopeEnding) : (i.endingStart = e ? this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding,
        i.endingEnd = t ? this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding)
    },
    _scheduleFading: function(e, t, r) {
        var i = this._mixer
          , n = i.time
          , a = this._weightInterpolant;
        null === a && (a = i._lendControlInterpolant(),
        this._weightInterpolant = a);
        var o = a.parameterPositions
          , s = a.sampleValues;
        return o[0] = n,
        s[0] = t,
        o[1] = n + e,
        s[1] = r,
        this
    }
},
THREE.AnimationClip = function(e, t, r) {
    this.name = e,
    this.tracks = r,
    this.duration = void 0 !== t ? t : -1,
    this.uuid = THREE.Math.generateUUID(),
    this.duration < 0 && this.resetDuration(),
    this.trim(),
    this.optimize()
}
,
THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip,
    resetDuration: function() {
        for (var e = 0, t = 0, r = this.tracks.length; t !== r; ++t) {
            var i = this.tracks[t];
            e = Math.max(e, i.times[i.times.length - 1])
        }
        this.duration = e
    },
    trim: function() {
        for (var e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    },
    optimize: function() {
        for (var e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
},
Object.assign(THREE.AnimationClip, {
    parse: function(e) {
        for (var t = [], r = e.tracks, i = 1 / (e.fps || 1), n = 0, a = r.length; n !== a; ++n)
            t.push(THREE.KeyframeTrack.parse(r[n]).scale(i));
        return new THREE.AnimationClip(e.name,e.duration,t)
    },
    toJSON: function(e) {
        for (var t = [], r = e.tracks, i = {
            name: e.name,
            duration: e.duration,
            tracks: t
        }, n = 0, a = r.length; n !== a; ++n)
            t.push(THREE.KeyframeTrack.toJSON(r[n]));
        return i
    },
    CreateFromMorphTargetSequence: function(e, t, r, i) {
        for (var n = t.length, a = [], o = 0; o < n; o++) {
            var s = []
              , c = [];
            s.push((o + n - 1) % n, o, (o + 1) % n),
            c.push(0, 1, 0);
            var h = THREE.AnimationUtils.getKeyframeOrder(s);
            s = THREE.AnimationUtils.sortedArray(s, 1, h),
            c = THREE.AnimationUtils.sortedArray(c, 1, h),
            i || 0 !== s[0] || (s.push(n),
            c.push(c[0])),
            a.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + t[o].name + "]",s,c).scale(1 / r))
        }
        return new THREE.AnimationClip(e,-1,a)
    },
    findByName: function(e, t) {
        var r = e;
        if (!Array.isArray(e)) {
            var i = e;
            r = i.geometry && i.geometry.animations || i.animations
        }
        for (var n = 0; n < r.length; n++)
            if (r[n].name === t)
                return r[n];
        return null
    },
    CreateClipsFromMorphTargetSequences: function(e, t, r) {
        for (var i = {}, n = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
            var s = e[a]
              , c = s.name.match(n);
            if (c && c.length > 1) {
                var h = i[u = c[1]];
                h || (i[u] = h = []),
                h.push(s)
            }
        }
        var l = [];
        for (var u in i)
            l.push(THREE.AnimationClip.CreateFromMorphTargetSequence(u, i[u], t, r));
        return l
    },
    parseAnimation: function(e, t, r) {
        if (!e)
            return console.error("  no animation in JSONLoader data"),
            null;
        for (var i = function(e, t, r, i, n) {
            if (0 !== r.length) {
                var a = []
                  , o = [];
                THREE.AnimationUtils.flattenJSON(r, a, o, i),
                0 !== a.length && n.push(new e(t,a,o))
            }
        }, n = [], a = e.name || "default", o = e.length || -1, s = e.fps || 30, c = e.hierarchy || [], h = 0; h < c.length; h++) {
            var l = c[h].keys;
            if (l && 0 !== l.length)
                if (l[0].morphTargets) {
                    for (var u = {}, p = 0; p < l.length; p++)
                        if (l[p].morphTargets)
                            for (m = 0; m < l[p].morphTargets.length; m++)
                                u[l[p].morphTargets[m]] = -1;
                    for (var d in u) {
                        for (var f = [], E = [], m = 0; m !== l[p].morphTargets.length; ++m) {
                            var g = l[p];
                            f.push(g.time),
                            E.push(g.morphTarget === d ? 1 : 0)
                        }
                        n.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + d + "]",f,E))
                    }
                    o = u.length * (s || 1)
                } else {
                    var v = ".bones[" + t[h].name + "]";
                    i(THREE.VectorKeyframeTrack, v + ".position", l, "pos", n),
                    i(THREE.QuaternionKeyframeTrack, v + ".quaternion", l, "rot", n),
                    i(THREE.VectorKeyframeTrack, v + ".scale", l, "scl", n)
                }
        }
        if (0 === n.length)
            return null;
        return new THREE.AnimationClip(a,o,n)
    }
}),
THREE.AnimationMixer = function(e) {
    this._root = e,
    this._initMemoryManager(),
    this._accuIndex = 0,
    this.time = 0,
    this.timeScale = 1
}
,
Object.assign(THREE.AnimationMixer.prototype, THREE.EventDispatcher.prototype, {
    clipAction: function(e, t) {
        var r = t || this._root
          , i = r.uuid
          , n = "string" == typeof e ? THREE.AnimationClip.findByName(r, e) : e
          , a = null !== n ? n.uuid : e
          , o = this._actionsByClip[a]
          , s = null;
        if (void 0 !== o) {
            var c = o.actionByRoot[i];
            if (void 0 !== c)
                return c;
            s = o.knownActions[0],
            null === n && (n = s._clip)
        }
        if (null === n)
            return null;
        var h = new THREE.AnimationMixer._Action(this,n,t);
        return this._bindAction(h, s),
        this._addInactiveAction(h, a, i),
        h
    },
    existingAction: function(e, t) {
        var r = t || this._root
          , i = r.uuid
          , n = "string" == typeof e ? THREE.AnimationClip.findByName(r, e) : e
          , a = n ? n.uuid : e
          , o = this._actionsByClip[a];
        return void 0 !== o ? o.actionByRoot[i] || null : null
    },
    stopAllAction: function() {
        var e = this._actions
          , t = this._nActiveActions
          , r = this._bindings
          , i = this._nActiveBindings;
        this._nActiveActions = 0,
        this._nActiveBindings = 0;
        for (n = 0; n !== t; ++n)
            e[n].reset();
        for (var n = 0; n !== i; ++n)
            r[n].useCount = 0;
        return this
    },
    update: function(e) {
        e *= this.timeScale;
        for (var t = this._actions, r = this._nActiveActions, i = this.time += e, n = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== r; ++o) {
            var s = t[o];
            s.enabled && s._update(i, e, n, a)
        }
        for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o)
            c[o].apply(a);
        return this
    },
    getRoot: function() {
        return this._root
    },
    uncacheClip: function(e) {
        var t = this._actions
          , r = e.uuid
          , i = this._actionsByClip
          , n = i[r];
        if (void 0 !== n) {
            for (var a = n.knownActions, o = 0, s = a.length; o !== s; ++o) {
                var c = a[o];
                this._deactivateAction(c);
                var h = c._cacheIndex
                  , l = t[t.length - 1];
                c._cacheIndex = null,
                c._byClipCacheIndex = null,
                l._cacheIndex = h,
                t[h] = l,
                t.pop(),
                this._removeInactiveBindingsForAction(c)
            }
            delete i[r]
        }
    },
    uncacheRoot: function(e) {
        var t = e.uuid
          , r = this._actionsByClip;
        for (var i in r) {
            var n = r[i].actionByRoot[t];
            void 0 !== n && (this._deactivateAction(n),
            this._removeInactiveAction(n))
        }
        var a = this._bindingsByRootAndName[t];
        if (void 0 !== a)
            for (var o in a) {
                var s = a[o];
                s.restoreOriginalState(),
                this._removeInactiveBinding(s)
            }
    },
    uncacheAction: function(e, t) {
        var r = this.existingAction(e, t);
        null !== r && (this._deactivateAction(r),
        this._removeInactiveAction(r))
    }
}),
THREE.AnimationMixer._Action = THREE.AnimationAction._new,
Object.assign(THREE.AnimationMixer.prototype, {
    _bindAction: function(e, t) {
        var r = e._localRoot || this._root
          , i = e._clip.tracks
          , n = i.length
          , a = e._propertyBindings
          , o = e._interpolants
          , s = r.uuid
          , c = this._bindingsByRootAndName
          , h = c[s];
        void 0 === h && (h = {},
        c[s] = h);
        for (var l = 0; l !== n; ++l) {
            var u = i[l]
              , p = u.name
              , d = h[p];
            if (void 0 !== d)
                a[l] = d;
            else {
                if (void 0 !== (d = a[l])) {
                    null === d._cacheIndex && (++d.referenceCount,
                    this._addInactiveBinding(d, s, p));
                    continue
                }
                var f = t && t._propertyBindings[l].binding.parsedPath;
                ++(d = new THREE.PropertyMixer(THREE.PropertyBinding.create(r, p, f),u.ValueTypeName,u.getValueSize())).referenceCount,
                this._addInactiveBinding(d, s, p),
                a[l] = d
            }
            o[l].resultBuffer = d.buffer
        }
    },
    _activateAction: function(e) {
        if (!this._isActiveAction(e)) {
            if (null === e._cacheIndex) {
                var t = (e._localRoot || this._root).uuid
                  , r = e._clip.uuid
                  , i = this._actionsByClip[r];
                this._bindAction(e, i && i.knownActions[0]),
                this._addInactiveAction(e, r, t)
            }
            for (var n = e._propertyBindings, a = 0, o = n.length; a !== o; ++a) {
                var s = n[a];
                0 == s.useCount++ && (this._lendBinding(s),
                s.saveOriginalState())
            }
            this._lendAction(e)
        }
    },
    _deactivateAction: function(e) {
        if (this._isActiveAction(e)) {
            for (var t = e._propertyBindings, r = 0, i = t.length; r !== i; ++r) {
                var n = t[r];
                0 == --n.useCount && (n.restoreOriginalState(),
                this._takeBackBinding(n))
            }
            this._takeBackAction(e)
        }
    },
    _initMemoryManager: function() {
        this._actions = [],
        this._nActiveActions = 0,
        this._actionsByClip = {},
        this._bindings = [],
        this._nActiveBindings = 0,
        this._bindingsByRootAndName = {},
        this._controlInterpolants = [],
        this._nActiveControlInterpolants = 0;
        var e = this;
        this.stats = {
            actions: {
                get total() {
                    return e._actions.length
                },
                get inUse() {
                    return e._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return e._bindings.length
                },
                get inUse() {
                    return e._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return e._controlInterpolants.length
                },
                get inUse() {
                    return e._nActiveControlInterpolants
                }
            }
        }
    },
    _isActiveAction: function(e) {
        var t = e._cacheIndex;
        return null !== t && t < this._nActiveActions
    },
    _addInactiveAction: function(e, t, r) {
        var i = this._actions
          , n = this._actionsByClip
          , a = n[t];
        if (void 0 === a)
            a = {
                knownActions: [e],
                actionByRoot: {}
            },
            e._byClipCacheIndex = 0,
            n[t] = a;
        else {
            var o = a.knownActions;
            e._byClipCacheIndex = o.length,
            o.push(e)
        }
        e._cacheIndex = i.length,
        i.push(e),
        a.actionByRoot[r] = e
    },
    _removeInactiveAction: function(e) {
        var t = this._actions
          , r = t[t.length - 1]
          , i = e._cacheIndex;
        r._cacheIndex = i,
        t[i] = r,
        t.pop(),
        e._cacheIndex = null;
        var n = e._clip.uuid
          , a = this._actionsByClip
          , o = a[n]
          , s = o.knownActions
          , c = s[s.length - 1]
          , h = e._byClipCacheIndex;
        c._byClipCacheIndex = h,
        s[h] = c,
        s.pop(),
        e._byClipCacheIndex = null;
        delete o.actionByRoot[(t._localRoot || this._root).uuid],
        0 === s.length && delete a[n],
        this._removeInactiveBindingsForAction(e)
    },
    _removeInactiveBindingsForAction: function(e) {
        for (var t = e._propertyBindings, r = 0, i = t.length; r !== i; ++r) {
            var n = t[r];
            0 == --n.referenceCount && this._removeInactiveBinding(n)
        }
    },
    _lendAction: function(e) {
        var t = this._actions
          , r = e._cacheIndex
          , i = this._nActiveActions++
          , n = t[i];
        e._cacheIndex = i,
        t[i] = e,
        n._cacheIndex = r,
        t[r] = n
    },
    _takeBackAction: function(e) {
        var t = this._actions
          , r = e._cacheIndex
          , i = --this._nActiveActions
          , n = t[i];
        e._cacheIndex = i,
        t[i] = e,
        n._cacheIndex = r,
        t[r] = n
    },
    _addInactiveBinding: function(e, t, r) {
        var i = this._bindingsByRootAndName
          , n = i[t]
          , a = this._bindings;
        void 0 === n && (n = {},
        i[t] = n),
        n[r] = e,
        e._cacheIndex = a.length,
        a.push(e)
    },
    _removeInactiveBinding: function(e) {
        var t = this._bindings
          , r = e.binding
          , i = r.rootNode.uuid
          , n = r.path
          , a = this._bindingsByRootAndName
          , o = a[i]
          , s = t[t.length - 1]
          , c = e._cacheIndex;
        s._cacheIndex = c,
        t[c] = s,
        t.pop(),
        delete o[n];
        e: {
            for (var h in o)
                break e;
            delete a[i]
        }
    },
    _lendBinding: function(e) {
        var t = this._bindings
          , r = e._cacheIndex
          , i = this._nActiveBindings++
          , n = t[i];
        e._cacheIndex = i,
        t[i] = e,
        n._cacheIndex = r,
        t[r] = n
    },
    _takeBackBinding: function(e) {
        var t = this._bindings
          , r = e._cacheIndex
          , i = --this._nActiveBindings
          , n = t[i];
        e._cacheIndex = i,
        t[i] = e,
        n._cacheIndex = r,
        t[r] = n
    },
    _lendControlInterpolant: function() {
        var e = this._controlInterpolants
          , t = this._nActiveControlInterpolants++
          , r = e[t];
        return void 0 === r && ((r = new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex = t,
        e[t] = r),
        r
    },
    _takeBackControlInterpolant: function(e) {
        var t = this._controlInterpolants
          , r = e.__cacheIndex
          , i = --this._nActiveControlInterpolants
          , n = t[i];
        e.__cacheIndex = i,
        t[i] = e,
        n.__cacheIndex = r,
        t[r] = n
    },
    _controlInterpolantsResultBuffer: new Float32Array(1)
}),
THREE.AnimationObjectGroup = function(e) {
    this.uuid = THREE.Math.generateUUID(),
    this._objects = Array.prototype.slice.call(arguments),
    this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for (var r = 0, i = arguments.length; r !== i; ++r)
        t[arguments[r].uuid] = r;
    this._paths = [],
    this._parsedPaths = [],
    this._bindings = [],
    this._bindingsIndicesByPath = {};
    var n = this;
    this.stats = {
        objects: {
            get total() {
                return n._objects.length
            },
            get inUse() {
                return this.total - n.nCachedObjects_
            }
        },
        get bindingsPerObject() {
            return n._bindings.length
        }
    }
}
,
THREE.AnimationObjectGroup.prototype = {
    constructor: THREE.AnimationObjectGroup,
    add: function(e) {
        for (var t = this._objects, r = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
            var u = arguments[h]
              , p = u.uuid
              , d = n[p];
            if (void 0 === d) {
                d = r++,
                n[p] = d,
                t.push(u);
                for (var f = 0, E = c; f !== E; ++f)
                    s[f].push(new THREE.PropertyBinding(u,a[f],o[f]))
            } else if (d < i) {
                var m = t[d]
                  , g = --i
                  , v = t[g];
                n[v.uuid] = d,
                t[d] = v,
                n[p] = g,
                t[g] = u;
                for (var f = 0, E = c; f !== E; ++f) {
                    var T = s[f]
                      , y = T[g]
                      , R = T[d];
                    T[d] = y,
                    void 0 === R && (R = new THREE.PropertyBinding(u,a[f],o[f])),
                    T[g] = R
                }
            } else
                t[d] !== m && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
        }
        this.nCachedObjects_ = i
    },
    remove: function(e) {
        for (var t = this._objects, r = (t.length,
        this.nCachedObjects_), i = this._indicesByUUID, n = this._bindings, a = n.length, o = 0, s = arguments.length; o !== s; ++o) {
            var c = arguments[o]
              , h = c.uuid
              , l = i[h];
            if (void 0 !== l && l >= r) {
                var u = r++
                  , p = t[u];
                i[p.uuid] = l,
                t[l] = p,
                i[h] = u,
                t[u] = c;
                for (var d = 0, f = a; d !== f; ++d) {
                    var E = n[d]
                      , m = E[u]
                      , g = E[l];
                    E[l] = m,
                    E[u] = g
                }
            }
        }
        this.nCachedObjects_ = r
    },
    uncache: function(e) {
        for (var t = this._objects, r = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
            var h = arguments[s].uuid
              , l = n[h];
            if (void 0 !== l)
                if (delete n[h],
                l < i) {
                    var u = --i
                      , p = t[u]
                      , d = t[v = --r];
                    n[p.uuid] = l,
                    t[l] = p,
                    n[d.uuid] = u,
                    t[u] = d,
                    t.pop();
                    for (var f = 0, E = o; f !== E; ++f) {
                        var m = (T = a[f])[u]
                          , g = T[v];
                        T[l] = m,
                        T[u] = g,
                        T.pop()
                    }
                } else {
                    var v = --r;
                    n[(d = t[v]).uuid] = l,
                    t[l] = d,
                    t.pop();
                    for (var f = 0, E = o; f !== E; ++f) {
                        var T = a[f];
                        T[l] = T[v],
                        T.pop()
                    }
                }
        }
        this.nCachedObjects_ = i
    },
    subscribe_: function(e, t) {
        var r = this._bindingsIndicesByPath
          , i = r[e]
          , n = this._bindings;
        if (void 0 !== i)
            return n[i];
        var a = this._paths
          , o = this._parsedPaths
          , s = this._objects
          , c = s.length
          , h = this.nCachedObjects_
          , l = new Array(c);
        i = n.length,
        r[e] = i,
        a.push(e),
        o.push(t),
        n.push(l);
        for (var u = h, p = s.length; u !== p; ++u) {
            var d = s[u];
            l[u] = new THREE.PropertyBinding(d,e,t)
        }
        return l
    },
    unsubscribe_: function(e) {
        var t = this._bindingsIndicesByPath
          , r = t[e];
        if (void 0 !== r) {
            var i = this._paths
              , n = this._parsedPaths
              , a = this._bindings
              , o = a.length - 1
              , s = a[o];
            t[e[o]] = r,
            a[r] = s,
            a.pop(),
            n[r] = n[o],
            n.pop(),
            i[r] = i[o],
            i.pop()
        }
    }
},
THREE.AnimationUtils = {
    arraySlice: function(e, t, r) {
        return THREE.AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(t, r)) : e.slice(t, r)
    },
    convertArray: function(e, t, r) {
        return !e || !r && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
    },
    isTypedArray: function(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView)
    },
    getKeyframeOrder: function(e) {
        for (var t = e.length, r = new Array(t), i = 0; i !== t; ++i)
            r[i] = i;
        return r.sort(function(t, r) {
            return e[t] - e[r]
        }),
        r
    },
    sortedArray: function(e, t, r) {
        for (var i = e.length, n = new e.constructor(i), a = 0, o = 0; o !== i; ++a)
            for (var s = r[a] * t, c = 0; c !== t; ++c)
                n[o++] = e[s + c];
        return n
    },
    flattenJSON: function(e, t, r, i) {
        for (var n = 1, a = e[0]; void 0 !== a && void 0 === a[i]; )
            a = e[n++];
        if (void 0 !== a) {
            var o = a[i];
            if (void 0 !== o)
                if (Array.isArray(o))
                    do {
                        void 0 !== (o = a[i]) && (t.push(a.time),
                        r.push.apply(r, o)),
                        a = e[n++]
                    } while (void 0 !== a);
                else if (void 0 !== o.toArray)
                    do {
                        void 0 !== (o = a[i]) && (t.push(a.time),
                        o.toArray(r, r.length)),
                        a = e[n++]
                    } while (void 0 !== a);
                else
                    do {
                        void 0 !== (o = a[i]) && (t.push(a.time),
                        r.push(o)),
                        a = e[n++]
                    } while (void 0 !== a)
        }
    }
},
THREE.KeyframeTrack = function(e, t, r, i) {
    if (void 0 === e)
        throw new Error("track name is undefined");
    if (void 0 === t || 0 === t.length)
        throw new Error("no keyframes in track named " + e);
    this.name = e,
    this.times = THREE.AnimationUtils.convertArray(t, this.TimeBufferType),
    this.values = THREE.AnimationUtils.convertArray(r, this.ValueBufferType),
    this.setInterpolation(i || this.DefaultInterpolation),
    this.validate(),
    this.optimize()
}
,
THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodDiscrete: function(e) {
        return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    InterpolantFactoryMethodLinear: function(e) {
        return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    InterpolantFactoryMethodSmooth: function(e) {
        return new THREE.CubicInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    setInterpolation: function(e) {
        var t;
        switch (e) {
        case THREE.InterpolateDiscrete:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case THREE.InterpolateLinear:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case THREE.InterpolateSmooth:
            t = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 !== t)
            this.createInterpolant = t;
        else {
            var r = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (e === this.DefaultInterpolation)
                    throw new Error(r);
                this.setInterpolation(this.DefaultInterpolation)
            }
            console.warn(r)
        }
    },
    getInterpolation: function() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return THREE.InterpolateDiscrete;
        case this.InterpolantFactoryMethodLinear:
            return THREE.InterpolateLinear;
        case this.InterpolantFactoryMethodSmooth:
            return THREE.InterpolateSmooth
        }
    },
    getValueSize: function() {
        return this.values.length / this.times.length
    },
    shift: function(e) {
        if (0 !== e)
            for (var t = this.times, r = 0, i = t.length; r !== i; ++r)
                t[r] += e;
        return this
    },
    scale: function(e) {
        if (1 !== e)
            for (var t = this.times, r = 0, i = t.length; r !== i; ++r)
                t[r] *= e;
        return this
    },
    trim: function(e, t) {
        for (var r = this.times, i = r.length, n = 0, a = i - 1; n !== i && r[n] < e; )
            ++n;
        for (; -1 !== a && r[a] > t; )
            --a;
        if (++a,
        0 !== n || a !== i) {
            n >= a && (a = Math.max(a, 1),
            n = a - 1);
            var o = this.getValueSize();
            this.times = THREE.AnimationUtils.arraySlice(r, n, a),
            this.values = THREE.AnimationUtils.arraySlice(this.values, n * o, a * o)
        }
        return this
    },
    validate: function() {
        var e = !0
          , t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("invalid value size in track", this),
        e = !1);
        var r = this.times
          , i = this.values
          , n = r.length;
        0 === n && (console.error("track is empty", this),
        e = !1);
        for (var a = null, o = 0; o !== n; o++) {
            var s = r[o];
            if ("number" == typeof s && isNaN(s)) {
                console.error("time is not a valid number", this, o, s),
                e = !1;
                break
            }
            if (null !== a && a > s) {
                console.error("out of order keys", this, o, s, a),
                e = !1;
                break
            }
            a = s
        }
        if (void 0 !== i && THREE.AnimationUtils.isTypedArray(i))
            for (var o = 0, c = i.length; o !== c; ++o) {
                var h = i[o];
                if (isNaN(h)) {
                    console.error("value is not a valid number", this, o, h),
                    e = !1;
                    break
                }
            }
        return e
    },
    optimize: function() {
        for (var e = this.times, t = this.values, r = this.getValueSize(), i = 1, n = 1, a = e.length - 1; n <= a; ++n) {
            var o = !1
              , s = e[n];
            if (s !== e[n + 1] && (1 !== n || s !== s[0]))
                for (var c = n * r, h = c - r, l = c + r, u = 0; u !== r; ++u) {
                    var p = t[c + u];
                    if (p !== t[h + u] || p !== t[l + u]) {
                        o = !0;
                        break
                    }
                }
            if (o) {
                if (n !== i) {
                    e[i] = e[n];
                    for (var d = n * r, f = i * r, u = 0; u !== r; ++u)
                        t[f + u] = t[d + u]
                }
                ++i
            }
        }
        return i !== e.length && (this.times = THREE.AnimationUtils.arraySlice(e, 0, i),
        this.values = THREE.AnimationUtils.arraySlice(t, 0, i * r)),
        this
    }
},
Object.assign(THREE.KeyframeTrack, {
    parse: function(e) {
        if (void 0 === e.type)
            throw new Error("track type undefined, can not parse");
        var t = THREE.KeyframeTrack._getTrackTypeForValueTypeName(e.type);
        if (void 0 === e.times) {
            var r = []
              , i = [];
            THREE.AnimationUtils.flattenJSON(e.keys, r, i, "value"),
            e.times = r,
            e.values = i
        }
        return void 0 !== t.parse ? t.parse(e) : new t(e.name,e.times,e.values,e.interpolation)
    },
    toJSON: function(e) {
        var t, r = e.constructor;
        if (void 0 !== r.toJSON)
            t = r.toJSON(e);
        else {
            t = {
                name: e.name,
                times: THREE.AnimationUtils.convertArray(e.times, Array),
                values: THREE.AnimationUtils.convertArray(e.values, Array)
            };
            var i = e.getInterpolation();
            i !== e.DefaultInterpolation && (t.interpolation = i)
        }
        return t.type = e.ValueTypeName,
        t
    },
    _getTrackTypeForValueTypeName: function(e) {
        switch (e.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return THREE.NumberKeyframeTrack;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return THREE.VectorKeyframeTrack;
        case "color":
            return THREE.ColorKeyframeTrack;
        case "quaternion":
            return THREE.QuaternionKeyframeTrack;
        case "bool":
        case "boolean":
            return THREE.BooleanKeyframeTrack;
        case "string":
            return THREE.StringKeyframeTrack
        }
        throw new Error("Unsupported typeName: " + e)
    }
}),
THREE.PropertyBinding = function(e, t, r) {
    this.path = t,
    this.parsedPath = r || THREE.PropertyBinding.parseTrackName(t),
    this.node = THREE.PropertyBinding.findNode(e, this.parsedPath.nodeName) || e,
    this.rootNode = e
}
,
THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding,
    getValue: function(e, t) {
        this.bind(),
        this.getValue(e, t)
    },
    setValue: function(e, t) {
        this.bind(),
        this.setValue(e, t)
    },
    bind: function() {
        var e = this.node
          , t = this.parsedPath
          , r = t.objectName
          , i = t.propertyName
          , n = t.propertyIndex;
        if (e || (e = THREE.PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode,
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        e) {
            if (r) {
                var a = t.objectIndex;
                switch (r) {
                case "materials":
                    if (!e.material)
                        return void console.error("  can not bind to material as node does not have a material", this);
                    if (!e.material.materials)
                        return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                    e = e.material.materials;
                    break;
                case "bones":
                    if (!e.skeleton)
                        return void console.error("  can not bind to bones as node does not have a skeleton", this);
                    e = e.skeleton.bones;
                    for (h = 0; h < e.length; h++)
                        if (e[h].name === a) {
                            a = h;
                            break
                        }
                    break;
                default:
                    if (void 0 === e[r])
                        return void console.error("  can not bind to objectName of node, undefined", this);
                    e = e[r]
                }
                if (void 0 !== a) {
                    if (void 0 === e[a])
                        return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                    e = e[a]
                }
            }
            var o = e[i];
            if (void 0 !== o) {
                var s = this.Versioning.None;
                void 0 !== e.needsUpdate ? (s = this.Versioning.NeedsUpdate,
                this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate,
                this.targetObject = e);
                var c = this.BindingType.Direct;
                if (void 0 !== n) {
                    if ("morphTargetInfluences" === i) {
                        if (!e.geometry)
                            return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                        if (!e.geometry.morphTargets)
                            return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                        for (var h = 0; h < this.node.geometry.morphTargets.length; h++)
                            if (e.geometry.morphTargets[h].name === n) {
                                n = h;
                                break
                            }
                    }
                    c = this.BindingType.ArrayElement,
                    this.resolvedProperty = o,
                    this.propertyIndex = n
                } else
                    void 0 !== o.fromArray && void 0 !== o.toArray ? (c = this.BindingType.HasFromToArray,
                    this.resolvedProperty = o) : void 0 !== o.length ? (c = this.BindingType.EntireArray,
                    this.resolvedProperty = o) : this.propertyName = i;
                this.getValue = this.GetterByBindingType[c],
                this.setValue = this.SetterByBindingTypeAndVersioning[c][s]
            } else {
                var l = t.nodeName;
                console.error("  trying to update property for track: " + l + "." + i + " but it wasn'boot found.", e)
            }
        } else
            console.error("  trying to update node for track: " + this.path + " but it wasn'boot found.")
    },
    unbind: function() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
},
Object.assign(THREE.PropertyBinding.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    _getValue_unbound: THREE.PropertyBinding.prototype.getValue,
    _setValue_unbound: THREE.PropertyBinding.prototype.setValue,
    BindingType: {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    },
    Versioning: {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(e, t) {
        e[t] = this.node[this.propertyName]
    }
    , function(e, t) {
        for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
            e[t++] = r[i]
    }
    , function(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    , function(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    ],
    SetterByBindingTypeAndVersioning: [[function(e, t) {
        this.node[this.propertyName] = e[t]
    }
    , function(e, t) {
        this.node[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        this.node[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(e, t) {
        for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
            r[i] = e[t++]
    }
    , function(e, t) {
        for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
            r[i] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
            r[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    , function(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    , function(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    , function(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ]]
}),
THREE.PropertyBinding.Composite = function(e, t, r) {
    var i = r || THREE.PropertyBinding.parseTrackName(t);
    this._targetGroup = e,
    this._bindings = e.subscribe_(t, i)
}
,
THREE.PropertyBinding.Composite.prototype = {
    constructor: THREE.PropertyBinding.Composite,
    getValue: function(e, t) {
        this.bind();
        var r = this._targetGroup.nCachedObjects_
          , i = this._bindings[r];
        void 0 !== i && i.getValue(e, t)
    },
    setValue: function(e, t) {
        for (var r = this._bindings, i = this._targetGroup.nCachedObjects_, n = r.length; i !== n; ++i)
            r[i].setValue(e, t)
    },
    bind: function() {
        for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t)
            e[t].bind()
    },
    unbind: function() {
        for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t)
            e[t].unbind()
    }
},
THREE.PropertyBinding.create = function(e, t, r) {
    return e instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(e,t,r) : new THREE.PropertyBinding(e,t,r)
}
,
THREE.PropertyBinding.parseTrackName = function(e) {
    var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/
      , r = t.exec(e);
    if (!r)
        throw new Error("cannot parse trackName at all: " + e);
    r.index === t.lastIndex && t.lastIndex++;
    var i = {
        nodeName: r[3],
        objectName: r[5],
        objectIndex: r[7],
        propertyName: r[9],
        propertyIndex: r[11]
    };
    if (null === i.propertyName || 0 === i.propertyName.length)
        throw new Error("can not parse propertyName from trackName: " + e);
    return i
}
,
THREE.PropertyBinding.findNode = function(e, t) {
    if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
        return e;
    if (e.skeleton) {
        var r = function(e) {
            for (var r = 0; r < e.bones.length; r++) {
                var i = e.bones[r];
                if (i.name === t)
                    return i
            }
            return null
        }(e.skeleton);
        if (r)
            return r
    }
    if (e.children) {
        var i = function(e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                if (n.name === t || n.uuid === t)
                    return n;
                var a = i(n.children);
                if (a)
                    return a
            }
            return null
        }
          , n = i(e.children);
        if (n)
            return n
    }
    return null
}
,
THREE.PropertyMixer = function(e, t, r) {
    this.binding = e,
    this.valueSize = r;
    var i, n = Float64Array;
    switch (t) {
    case "quaternion":
        i = this._slerp;
        break;
    case "string":
    case "bool":
        n = Array,
        i = this._select;
        break;
    default:
        i = this._lerp
    }
    this.buffer = new n(4 * r),
    this._mixBufferRegion = i,
    this.cumulativeWeight = 0,
    this.useCount = 0,
    this.referenceCount = 0
}
,
THREE.PropertyMixer.prototype = {
    constructor: THREE.PropertyMixer,
    accumulate: function(e, t) {
        var r = this.buffer
          , i = this.valueSize
          , n = e * i + i
          , a = this.cumulativeWeight;
        if (0 === a) {
            for (var o = 0; o !== i; ++o)
                r[n + o] = r[o];
            a = t
        } else {
            var s = t / (a += t);
            this._mixBufferRegion(r, n, 0, s, i)
        }
        this.cumulativeWeight = a
    },
    apply: function(e) {
        var t = this.valueSize
          , r = this.buffer
          , i = e * t + t
          , n = this.cumulativeWeight
          , a = this.binding;
        if (this.cumulativeWeight = 0,
        n < 1) {
            var o = 3 * t;
            this._mixBufferRegion(r, i, o, 1 - n, t)
        }
        for (var s = t, c = t + t; s !== c; ++s)
            if (r[s] !== r[s + t]) {
                a.setValue(r, i);
                break
            }
    },
    saveOriginalState: function() {
        var e = this.binding
          , t = this.buffer
          , r = this.valueSize
          , i = 3 * r;
        e.getValue(t, i);
        for (var n = r, a = i; n !== a; ++n)
            t[n] = t[i + n % r];
        this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
        var e = 3 * this.valueSize;
        this.binding.setValue(this.buffer, e)
    },
    _select: function(e, t, r, i, n) {
        if (i >= .5)
            for (var a = 0; a !== n; ++a)
                e[t + a] = e[r + a]
    },
    _slerp: function(e, t, r, i, n) {
        THREE.Quaternion.slerpFlat(e, t, e, t, e, r, i)
    },
    _lerp: function(e, t, r, i, n) {
        for (var a = 1 - i, o = 0; o !== n; ++o) {
            var s = t + o;
            e[s] = e[s] * a + e[r + o] * i
        }
    }
},
THREE.BooleanKeyframeTrack = function(e, t, r) {
    THREE.KeyframeTrack.call(this, e, t, r)
}
,
THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.BooleanKeyframeTrack,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.InterpolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.ColorKeyframeTrack = function(e, t, r, i) {
    THREE.KeyframeTrack.call(this, e, t, r, i)
}
,
THREE.ColorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.ColorKeyframeTrack,
    ValueTypeName: "color"
}),
THREE.NumberKeyframeTrack = function(e, t, r, i) {
    THREE.KeyframeTrack.call(this, e, t, r, i)
}
,
THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.NumberKeyframeTrack,
    ValueTypeName: "number"
}),
THREE.QuaternionKeyframeTrack = function(e, t, r, i) {
    THREE.KeyframeTrack.call(this, e, t, r, i)
}
,
THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.QuaternionKeyframeTrack,
    ValueTypeName: "quaternion",
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodLinear: function(e) {
        return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)
    },
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.StringKeyframeTrack = function(e, t, r, i) {
    THREE.KeyframeTrack.call(this, e, t, r, i)
}
,
THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.StringKeyframeTrack,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.InterpolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
}),
THREE.VectorKeyframeTrack = function(e, t, r, i) {
    THREE.KeyframeTrack.call(this, e, t, r, i)
}
,
THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.VectorKeyframeTrack,
    ValueTypeName: "vector"
}),
THREE.Audio = function(e) {
    THREE.Object3D.call(this),
    this.type = "Audio",
    this.context = e.context,
    this.source = this.context.createBufferSource(),
    this.source.onended = this.onEnded.bind(this),
    this.gain = this.context.createGain(),
    this.gain.connect(e.getInput()),
    this.autoplay = !1,
    this.startTime = 0,
    this.playbackRate = 1,
    this.isPlaying = !1,
    this.hasPlaybackControl = !0,
    this.sourceType = "empty",
    this.filters = []
}
,
THREE.Audio.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Audio,
    getOutput: function() {
        return this.gain
    },
    setNodeSource: function(e) {
        return this.hasPlaybackControl = !1,
        this.sourceType = "audioNode",
        this.source = e,
        this.connect(),
        this
    },
    setBuffer: function(e) {
        return this.source.buffer = e,
        this.sourceType = "buffer",
        this.autoplay && this.play(),
        this
    },
    play: function() {
        if (!0 !== this.isPlaying) {
            if (!1 !== this.hasPlaybackControl) {
                var e = this.context.createBufferSource();
                return e.buffer = this.source.buffer,
                e.loop = this.source.loop,
                e.onended = this.source.onended,
                e.start(0, this.startTime),
                e.playbackRate.value = this.playbackRate,
                this.isPlaying = !0,
                this.source = e,
                this.connect()
            }
            console.warn("THREE.Audio: this Audio has no playback control.")
        } else
            console.warn("THREE.Audio: Audio is already playing.")
    },
    pause: function() {
        if (!1 !== this.hasPlaybackControl)
            return this.source.stop(),
            this.startTime = this.context.currentTime,
            this.isPlaying = !1,
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    stop: function() {
        if (!1 !== this.hasPlaybackControl)
            return this.source.stop(),
            this.startTime = 0,
            this.isPlaying = !1,
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    connect: function() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (var e = 1, t = this.filters.length; e < t; e++)
                this.filters[e - 1].connect(this.filters[e]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else
            this.source.connect(this.getOutput());
        return this
    },
    disconnect: function() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (var e = 1, t = this.filters.length; e < t; e++)
                this.filters[e - 1].disconnect(this.filters[e]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else
            this.source.disconnect(this.getOutput());
        return this
    },
    getFilters: function() {
        return this.filters
    },
    setFilters: function(e) {
        return e || (e = []),
        !0 === this.isPlaying ? (this.disconnect(),
        this.filters = e,
        this.connect()) : this.filters = e,
        this
    },
    getFilter: function() {
        return this.getFilters()[0]
    },
    setFilter: function(e) {
        return this.setFilters(e ? [e] : [])
    },
    setPlaybackRate: function(e) {
        if (!1 !== this.hasPlaybackControl)
            return this.playbackRate = e,
            !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate),
            this;
        console.warn("THREE.Audio: this Audio has no playback control.")
    },
    getPlaybackRate: function() {
        return this.playbackRate
    },
    onEnded: function() {
        this.isPlaying = !1
    },
    getLoop: function() {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
        !1) : this.source.loop
    },
    setLoop: function(e) {
        !1 !== this.hasPlaybackControl ? this.source.loop = e : console.warn("THREE.Audio: this Audio has no playback control.")
    },
    getVolume: function() {
        return this.gain.gain.value
    },
    setVolume: function(e) {
        return this.gain.gain.value = e,
        this
    }
}),
THREE.AudioAnalyser = function(e, t) {
    this.analyser = e.context.createAnalyser(),
    this.analyser.fftSize = void 0 !== t ? t : 2048,
    this.data = new Uint8Array(this.analyser.frequencyBinCount),
    e.getOutput().connect(this.analyser)
}
,
Object.assign(THREE.AudioAnalyser.prototype, {
    getFrequencyData: function() {
        return this.analyser.getByteFrequencyData(this.data),
        this.data
    },
    getAverageFrequency: function() {
        for (var e = 0, t = this.getFrequencyData(), r = 0; r < t.length; r++)
            e += t[r];
        return e / t.length
    }
}),
Object.defineProperty(THREE, "AudioContext", {
    get: function() {
        var e;
        return function() {
            return void 0 === e && (e = new (window.AudioContext || window.webkitAudioContext)),
            e
        }
    }()
}),
THREE.PositionalAudio = function(e) {
    THREE.Audio.call(this, e),
    this.panner = this.context.createPanner(),
    this.panner.connect(this.gain)
}
,
THREE.PositionalAudio.prototype = Object.assign(Object.create(THREE.Audio.prototype), {
    constructor: THREE.PositionalAudio,
    getOutput: function() {
        return this.panner
    },
    getRefDistance: function() {
        return this.panner.refDistance
    },
    setRefDistance: function(e) {
        this.panner.refDistance = e
    },
    getRolloffFactor: function() {
        return this.panner.rolloffFactor
    },
    setRolloffFactor: function(e) {
        this.panner.rolloffFactor = e
    },
    getDistanceModel: function() {
        return this.panner.distanceModel
    },
    setDistanceModel: function(e) {
        this.panner.distanceModel = e
    },
    getMaxDistance: function() {
        return this.panner.maxDistance
    },
    setMaxDistance: function(e) {
        this.panner.maxDistance = e
    },
    updateMatrixWorld: function() {
        var e = new THREE.Vector3;
        return function(t) {
            THREE.Object3D.prototype.updateMatrixWorld.call(this, t),
            e.setFromMatrixPosition(this.matrixWorld),
            this.panner.setPosition(e.x, e.y, e.z)
        }
    }()
}),
THREE.AudioListener = function() {
    THREE.Object3D.call(this),
    this.type = "AudioListener",
    this.context = THREE.AudioContext,
    this.gain = this.context.createGain(),
    this.gain.connect(this.context.destination),
    this.filter = null
}
,
THREE.AudioListener.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.AudioListener,
    getInput: function() {
        return this.gain
    },
    removeFilter: function() {
        null !== this.filter && (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        this.filter = null)
    },
    getFilter: function() {
        return this.filter
    },
    setFilter: function(e) {
        null !== this.filter ? (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
        this.filter = e,
        this.gain.connect(this.filter),
        this.filter.connect(this.context.destination)
    },
    getMasterVolume: function() {
        return this.gain.gain.value
    },
    setMasterVolume: function(e) {
        this.gain.gain.value = e
    },
    updateMatrixWorld: function() {
        var e = new THREE.Vector3
          , t = new THREE.Quaternion
          , r = new THREE.Vector3
          , i = new THREE.Vector3;
        return function(n) {
            THREE.Object3D.prototype.updateMatrixWorld.call(this, n);
            var a = this.context.listener
              , o = this.up;
            this.matrixWorld.decompose(e, t, r),
            i.set(0, 0, -1).applyQuaternion(t),
            a.setPosition(e.x, e.y, e.z),
            a.setOrientation(i.x, i.y, i.z, o.x, o.y, o.z)
        }
    }()
}),
THREE.Camera = function() {
    THREE.Object3D.call(this),
    this.type = "Camera",
    this.matrixWorldInverse = new THREE.Matrix4,
    this.projectionMatrix = new THREE.Matrix4
}
,
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),
THREE.Camera.prototype.constructor = THREE.Camera,
THREE.Camera.prototype.getWorldDirection = function() {
    var e = new THREE.Quaternion;
    return function(t) {
        var r = t || new THREE.Vector3;
        return this.getWorldQuaternion(e),
        r.set(0, 0, -1).applyQuaternion(e)
    }
}(),
THREE.Camera.prototype.lookAt = function() {
    var e = new THREE.Matrix4;
    return function(t) {
        e.lookAt(this.position, t, this.up),
        this.quaternion.setFromRotationMatrix(e)
    }
}(),
THREE.Camera.prototype.clone = function() {
    return (new this.constructor).copy(this)
}
,
THREE.Camera.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.matrixWorldInverse.copy(e.matrixWorldInverse),
    this.projectionMatrix.copy(e.projectionMatrix),
    this
}
,
THREE.CubeCamera = function(e, t, r) {
    THREE.Object3D.call(this),
    this.type = "CubeCamera";
    var i = new THREE.PerspectiveCamera(90,1,e,t);
    i.up.set(0, -1, 0),
    i.lookAt(new THREE.Vector3(1,0,0)),
    this.add(i);
    var n = new THREE.PerspectiveCamera(90,1,e,t);
    n.up.set(0, -1, 0),
    n.lookAt(new THREE.Vector3(-1,0,0)),
    this.add(n);
    var a = new THREE.PerspectiveCamera(90,1,e,t);
    a.up.set(0, 0, 1),
    a.lookAt(new THREE.Vector3(0,1,0)),
    this.add(a);
    var o = new THREE.PerspectiveCamera(90,1,e,t);
    o.up.set(0, 0, -1),
    o.lookAt(new THREE.Vector3(0,-1,0)),
    this.add(o);
    var s = new THREE.PerspectiveCamera(90,1,e,t);
    s.up.set(0, -1, 0),
    s.lookAt(new THREE.Vector3(0,0,1)),
    this.add(s);
    var c = new THREE.PerspectiveCamera(90,1,e,t);
    c.up.set(0, -1, 0),
    c.lookAt(new THREE.Vector3(0,0,-1)),
    this.add(c);
    var h = {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    };
    this.renderTarget = new THREE.WebGLRenderTargetCube(r,r,h),
    this.updateCubeMap = function(e, t) {
        null === this.parent && this.updateMatrixWorld();
        var r = this.renderTarget
          , h = r.texture.generateMipmaps;
        r.texture.generateMipmaps = !1,
        r.activeCubeFace = 0,
        e.render(t, i, r),
        r.activeCubeFace = 1,
        e.render(t, n, r),
        r.activeCubeFace = 2,
        e.render(t, a, r),
        r.activeCubeFace = 3,
        e.render(t, o, r),
        r.activeCubeFace = 4,
        e.render(t, s, r),
        r.texture.generateMipmaps = h,
        r.activeCubeFace = 5,
        e.render(t, c, r),
        e.setRenderTarget(null)
    }
}
,
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera,
THREE.OrthographicCamera = function(e, t, r, i, n, a) {
    THREE.Camera.call(this),
    this.type = "OrthographicCamera",
    this.zoom = 1,
    this.view = null,
    this.left = e,
    this.right = t,
    this.top = r,
    this.bottom = i,
    this.near = void 0 !== n ? n : .1,
    this.far = void 0 !== a ? a : 2e3,
    this.updateProjectionMatrix()
}
,
THREE.OrthographicCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
    constructor: THREE.OrthographicCamera,
    copy: function(e) {
        return THREE.Camera.prototype.copy.call(this, e),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = null === e.view ? null : Object.assign({}, e.view),
        this
    },
    setViewOffset: function(e, t, r, i, n, a) {
        this.view = {
            fullWidth: e,
            fullHeight: t,
            offsetX: r,
            offsetY: i,
            width: n,
            height: a
        },
        this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
        this.view = null,
        this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
        var e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , r = (this.right + this.left) / 2
          , i = (this.top + this.bottom) / 2
          , n = r - e
          , a = r + e
          , o = i + t
          , s = i - t;
        if (null !== this.view) {
            var c = this.zoom / (this.view.width / this.view.fullWidth)
              , h = this.zoom / (this.view.height / this.view.fullHeight)
              , l = (this.right - this.left) / this.view.width
              , u = (this.top - this.bottom) / this.view.height;
            a = (n += l * (this.view.offsetX / c)) + l * (this.view.width / c),
            s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
        }
        this.projectionMatrix.makeOrthographic(n, a, o, s, this.near, this.far)
    },
    toJSON: function(e) {
        var t = THREE.Object3D.prototype.toJSON.call(this, e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t
    }
}),
THREE.PerspectiveCamera = function(e, t, r, i) {
    THREE.Camera.call(this),
    this.type = "PerspectiveCamera",
    this.fov = void 0 !== e ? e : 50,
    this.zoom = 1,
    this.near = void 0 !== r ? r : .1,
    this.far = void 0 !== i ? i : 2e3,
    this.focus = 10,
    this.aspect = void 0 !== t ? t : 1,
    this.view = null,
    this.filmGauge = 35,
    this.filmOffset = 0,
    this.updateProjectionMatrix()
}
,
THREE.PerspectiveCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
    constructor: THREE.PerspectiveCamera,
    copy: function(e) {
        return THREE.Camera.prototype.copy.call(this, e),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = null === e.view ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    },
    setFocalLength: function(e) {
        var t = .5 * this.getFilmHeight() / e;
        this.fov = 2 * THREE.Math.RAD2DEG * Math.atan(t),
        this.updateProjectionMatrix()
    },
    getFocalLength: function() {
        var e = Math.tan(.5 * THREE.Math.DEG2RAD * this.fov);
        return .5 * this.getFilmHeight() / e
    },
    getEffectiveFOV: function() {
        return 2 * THREE.Math.RAD2DEG * Math.atan(Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom)
    },
    getFilmWidth: function() {
        return this.filmGauge * Math.min(this.aspect, 1)
    },
    getFilmHeight: function() {
        return this.filmGauge / Math.max(this.aspect, 1)
    },
    setViewOffset: function(e, t, r, i, n, a) {
        this.aspect = e / t,
        this.view = {
            fullWidth: e,
            fullHeight: t,
            offsetX: r,
            offsetY: i,
            width: n,
            height: a
        },
        this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
        this.view = null,
        this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
        var e = this.near
          , t = e * Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom
          , r = 2 * t
          , i = this.aspect * r
          , n = -.5 * i
          , a = this.view;
        if (null !== a) {
            var o = a.fullWidth
              , s = a.fullHeight;
            n += a.offsetX * i / o,
            t -= a.offsetY * r / s,
            i *= a.width / o,
            r *= a.height / s
        }
        var c = this.filmOffset;
        0 !== c && (n += e * c / this.getFilmWidth()),
        this.projectionMatrix.makeFrustum(n, n + i, t - r, t, e, this.far)
    },
    toJSON: function(e) {
        var t = THREE.Object3D.prototype.toJSON.call(this, e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}),
THREE.StereoCamera = function() {
    this.type = "StereoCamera",
    this.aspect = 1,
    this.cameraL = new THREE.PerspectiveCamera,
    this.cameraL.layers.enable(1),
    this.cameraL.matrixAutoUpdate = !1,
    this.cameraR = new THREE.PerspectiveCamera,
    this.cameraR.layers.enable(2),
    this.cameraR.matrixAutoUpdate = !1
}
,
Object.assign(THREE.StereoCamera.prototype, {
    update: function() {
        var e, t, r, i, n, a = new THREE.Matrix4, o = new THREE.Matrix4;
        return function(s) {
            if (e !== s.focus || t !== s.fov || r !== s.aspect * this.aspect || i !== s.near || n !== s.far) {
                e = s.focus,
                t = s.fov,
                r = s.aspect * this.aspect,
                i = s.near,
                n = s.far;
                var c, h, l = s.projectionMatrix.clone(), u = .032 * i / e, p = i * Math.tan(THREE.Math.DEG2RAD * t * .5);
                o.elements[12] = -.032,
                a.elements[12] = .032,
                c = -p * r + u,
                h = p * r + u,
                l.elements[0] = 2 * i / (h - c),
                l.elements[8] = (h + c) / (h - c),
                this.cameraL.projectionMatrix.copy(l),
                c = -p * r - u,
                h = p * r - u,
                l.elements[0] = 2 * i / (h - c),
                l.elements[8] = (h + c) / (h - c),
                this.cameraR.projectionMatrix.copy(l)
            }
            this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(o),
            this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(a)
        }
    }()
}),
THREE.Light = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Light",
    this.color = new THREE.Color(e),
    this.intensity = void 0 !== t ? t : 1,
    this.receiveShadow = void 0
}
,
THREE.Light.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Light,
    copy: function(e) {
        return THREE.Object3D.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    },
    toJSON: function(e) {
        var t = THREE.Object3D.prototype.toJSON.call(this, e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (t.object.distance = this.distance),
        void 0 !== this.angle && (t.object.angle = this.angle),
        void 0 !== this.decay && (t.object.decay = this.decay),
        void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
        t
    }
}),
THREE.LightShadow = function(e) {
    this.camera = e,
    this.bias = 0,
    this.radius = 1,
    this.mapSize = new THREE.Vector2(512,512),
    this.map = null,
    this.matrix = new THREE.Matrix4
}
,
Object.assign(THREE.LightShadow.prototype, {
    copy: function(e) {
        return this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
}),
THREE.AmbientLight = function(e, t) {
    THREE.Light.call(this, e, t),
    this.type = "AmbientLight",
    this.castShadow = void 0
}
,
THREE.AmbientLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.AmbientLight
}),
THREE.DirectionalLight = function(e, t) {
    THREE.Light.call(this, e, t),
    this.type = "DirectionalLight",
    this.position.copy(THREE.Object3D.DefaultUp),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.shadow = new THREE.DirectionalLightShadow
}
,
THREE.DirectionalLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.DirectionalLight,
    copy: function(e) {
        return THREE.Light.prototype.copy.call(this, e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}),
THREE.DirectionalLightShadow = function(e) {
    THREE.LightShadow.call(this, new THREE.OrthographicCamera(-5,5,5,-5,.5,500))
}
,
THREE.DirectionalLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
    constructor: THREE.DirectionalLightShadow
}),
THREE.HemisphereLight = function(e, t, r) {
    THREE.Light.call(this, e, r),
    this.type = "HemisphereLight",
    this.castShadow = void 0,
    this.position.copy(THREE.Object3D.DefaultUp),
    this.updateMatrix(),
    this.groundColor = new THREE.Color(t)
}
,
THREE.HemisphereLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.HemisphereLight,
    copy: function(e) {
        return THREE.Light.prototype.copy.call(this, e),
        this.groundColor.copy(e.groundColor),
        this
    }
}),
THREE.PointLight = function(e, t, r, i) {
    THREE.Light.call(this, e, t),
    this.type = "PointLight",
    Object.defineProperty(this, "power", {
        get: function() {
            return 4 * this.intensity * Math.PI
        },
        set: function(e) {
            this.intensity = e / (4 * Math.PI)
        }
    }),
    this.distance = void 0 !== r ? r : 0,
    this.decay = void 0 !== i ? i : 1,
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500))
}
,
THREE.PointLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.PointLight,
    copy: function(e) {
        return THREE.Light.prototype.copy.call(this, e),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
}),
THREE.SpotLight = function(e, t, r, i, n, a) {
    THREE.Light.call(this, e, t),
    this.type = "SpotLight",
    this.position.copy(THREE.Object3D.DefaultUp),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    Object.defineProperty(this, "power", {
        get: function() {
            return this.intensity * Math.PI
        },
        set: function(e) {
            this.intensity = e / Math.PI
        }
    }),
    this.distance = void 0 !== r ? r : 0,
    this.angle = void 0 !== i ? i : Math.PI / 3,
    this.penumbra = void 0 !== n ? n : 0,
    this.decay = void 0 !== a ? a : 1,
    this.shadow = new THREE.SpotLightShadow
}
,
THREE.SpotLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
    constructor: THREE.SpotLight,
    copy: function(e) {
        return THREE.Light.prototype.copy.call(this, e),
        this.distance = e.distance,
        this.angle = e.angle,
        this.penumbra = e.penumbra,
        this.decay = e.decay,
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}),
THREE.SpotLightShadow = function() {
    THREE.LightShadow.call(this, new THREE.PerspectiveCamera(50,1,.5,500))
}
,
THREE.SpotLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
    constructor: THREE.SpotLightShadow,
    update: function(e) {
        var t = 2 * THREE.Math.RAD2DEG * e.angle
          , r = this.mapSize.width / this.mapSize.height
          , i = e.distance || 500
          , n = this.camera;
        t === n.fov && r === n.aspect && i === n.far || (n.fov = t,
        n.aspect = r,
        n.far = i,
        n.updateProjectionMatrix())
    }
}),
THREE.AudioLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.AudioLoader.prototype, {
    load: function(e, t, r, i) {
        var n = new THREE.XHRLoader(this.manager);
        n.setResponseType("arraybuffer"),
        n.load(e, function(e) {
            THREE.AudioContext.decodeAudioData(e, function(e) {
                t(e)
            })
        }, r, i)
    }
}),
THREE.Cache = {
    enabled: !1,
    files: {},
    add: function(e, t) {
        !1 !== this.enabled && (this.files[e] = t)
    },
    get: function(e) {
        if (!1 !== this.enabled)
            return this.files[e]
    },
    remove: function(e) {
        delete this.files[e]
    },
    clear: function() {
        this.files = {}
    }
},
THREE.Loader = function() {
    this.onLoadStart = function() {}
    ,
    this.onLoadProgress = function() {}
    ,
    this.onLoadComplete = function() {}
}
,
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    extractUrlBase: function(e) {
        var t = e.split("/");
        return 1 === t.length ? "./" : (t.pop(),
        t.join("/") + "/")
    },
    initMaterials: function(e, t, r) {
        for (var i = [], n = 0; n < e.length; ++n)
            i[n] = this.createMaterial(e[n], t, r);
        return i
    },
    createMaterial: function() {
        var e, t, r;
        return function(i, n, a) {
            function o(e, r, i, o, c) {
                var h, l = n + e, u = THREE.Loader.Handlers.get(l);
                null !== u ? h = u.load(l) : (t.setCrossOrigin(a),
                h = t.load(l)),
                void 0 !== r && (h.repeat.fromArray(r),
                1 !== r[0] && (h.wrapS = THREE.RepeatWrapping),
                1 !== r[1] && (h.wrapT = THREE.RepeatWrapping)),
                void 0 !== i && h.offset.fromArray(i),
                void 0 !== o && ("repeat" === o[0] && (h.wrapS = THREE.RepeatWrapping),
                "mirror" === o[0] && (h.wrapS = THREE.MirroredRepeatWrapping),
                "repeat" === o[1] && (h.wrapT = THREE.RepeatWrapping),
                "mirror" === o[1] && (h.wrapT = THREE.MirroredRepeatWrapping)),
                void 0 !== c && (h.anisotropy = c);
                var p = THREE.Math.generateUUID();
                return s[p] = h,
                p
            }
            void 0 === e && (e = new THREE.Color),
            void 0 === t && (t = new THREE.TextureLoader),
            void 0 === r && (r = new THREE.MaterialLoader);
            var s = {}
              , c = {
                uuid: THREE.Math.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (var h in i) {
                var l = i[h];
                switch (h) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    c.name = l;
                    break;
                case "blending":
                    c.blending = THREE[l];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", h, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    c.color = e.fromArray(l).getHex();
                    break;
                case "colorSpecular":
                    c.specular = e.fromArray(l).getHex();
                    break;
                case "colorEmissive":
                    c.emissive = e.fromArray(l).getHex();
                    break;
                case "specularCoef":
                    c.shininess = l;
                    break;
                case "shading":
                    "basic" === l.toLowerCase() && (c.type = "MeshBasicMaterial"),
                    "phong" === l.toLowerCase() && (c.type = "MeshPhongMaterial"),
                    "standard" === l.toLowerCase() && (c.type = "MeshStandardMaterial");
                    break;
                case "mapDiffuse":
                    c.map = o(l, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapEmissive":
                    c.emissiveMap = o(l, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
                    break;
                case "mapEmissiveRepeat":
                case "mapEmissiveOffset":
                case "mapEmissiveWrap":
                case "mapEmissiveAnisotropy":
                    break;
                case "mapLight":
                    c.lightMap = o(l, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    c.aoMap = o(l, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    c.bumpMap = o(l, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    c.bumpScale = l;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    c.normalMap = o(l, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    c.normalScale = [l, l];
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    c.specularMap = o(l, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapMetalness":
                    c.metalnessMap = o(l, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
                    break;
                case "mapMetalnessRepeat":
                case "mapMetalnessOffset":
                case "mapMetalnessWrap":
                case "mapMetalnessAnisotropy":
                    break;
                case "mapRoughness":
                    c.roughnessMap = o(l, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
                    break;
                case "mapRoughnessRepeat":
                case "mapRoughnessOffset":
                case "mapRoughnessWrap":
                case "mapRoughnessAnisotropy":
                    break;
                case "mapAlpha":
                    c.alphaMap = o(l, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    c.side = THREE.BackSide;
                    break;
                case "doubleSided":
                    c.side = THREE.DoubleSide;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                    c.opacity = l;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    c[h] = l;
                    break;
                case "vertexColors":
                    !0 === l && (c.vertexColors = THREE.VertexColors),
                    "face" === l && (c.vertexColors = THREE.FaceColors);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", h, l)
                }
            }
            return "MeshBasicMaterial" === c.type && delete c.emissive,
            "MeshPhongMaterial" !== c.type && delete c.specular,
            c.opacity < 1 && (c.transparent = !0),
            r.setTextures(s),
            r.parse(c)
        }
    }()
},
THREE.Loader.Handlers = {
    handlers: [],
    add: function(e, t) {
        this.handlers.push(e, t)
    },
    get: function(e) {
        for (var t = this.handlers, r = 0, i = t.length; r < i; r += 2) {
            var n = t[r]
              , a = t[r + 1];
            if (n.test(e))
                return a
        }
        return null
    }
},
THREE.XHRLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.XHRLoader.prototype, {
    load: function(e, t, r, i) {
        void 0 !== this.path && (e = this.path + e);
        var n = this
          , a = THREE.Cache.get(e);
        if (void 0 !== a)
            return n.manager.itemStart(e),
            setTimeout(function() {
                t && t(a),
                n.manager.itemEnd(e)
            }, 0),
            a;
        var o = new XMLHttpRequest;
        return o.overrideMimeType("text/plain"),
        o.open("GET", e, !0),
        o.addEventListener("load", function(r) {
            var a = r.target.response;
            THREE.Cache.add(e, a),
            200 === this.status ? (t && t(a),
            n.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."),
            t && t(a),
            n.manager.itemEnd(e)) : (i && i(r),
            n.manager.itemError(e))
        }, !1),
        void 0 !== r && o.addEventListener("progress", function(e) {
            r(e)
        }, !1),
        o.addEventListener("error", function(t) {
            i && i(t),
            n.manager.itemError(e)
        }, !1),
        void 0 !== this.responseType && (o.responseType = this.responseType),
        void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials),
        o.send(null),
        n.manager.itemStart(e),
        o
    },
    setPath: function(e) {
        return this.path = e,
        this
    },
    setResponseType: function(e) {
        return this.responseType = e,
        this
    },
    setWithCredentials: function(e) {
        return this.withCredentials = e,
        this
    }
}),
THREE.FontLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.FontLoader.prototype, {
    load: function(e, t, r, i) {
        var n = this;
        new THREE.XHRLoader(this.manager).load(e, function(e) {
            var r;
            try {
                r = JSON.parse(e)
            } catch (t) {
                console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                r = JSON.parse(e.substring(65, e.length - 2))
            }
            var i = n.parse(r);
            t && t(i)
        }, r, i)
    },
    parse: function(e) {
        return new THREE.Font(e)
    }
}),
THREE.ImageLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.ImageLoader.prototype, {
    load: function(e, t, r, i) {
        var n = this
          , a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
        if (a.onload = function() {
            URL.revokeObjectURL(a.src),
            t && t(a),
            n.manager.itemEnd(e)
        }
        ,
        0 === e.indexOf("data:"))
            a.src = e;
        else {
            var o = new THREE.XHRLoader;
            o.setPath(this.path),
            o.setResponseType("blob"),
            o.load(e, function(e) {
                a.src = URL.createObjectURL(e)
            }, r, i)
        }
        return n.manager.itemStart(e),
        a
    },
    setCrossOrigin: function(e) {
        return this.crossOrigin = e,
        this
    },
    setPath: function(e) {
        return this.path = e,
        this
    }
}),
THREE.JSONLoader = function(e) {
    "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
    e = void 0),
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.withCredentials = !1
}
,
Object.assign(THREE.JSONLoader.prototype, {
    load: function(e, t, r, i) {
        var n = this
          , a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(e)
          , o = new THREE.XHRLoader(this.manager);
        o.setWithCredentials(this.withCredentials),
        o.load(e, function(r) {
            var i = JSON.parse(r)
              , o = i.metadata;
            if (void 0 !== o) {
                var s = o.type;
                if (void 0 !== s) {
                    if ("object" === s.toLowerCase())
                        return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                    if ("scene" === s.toLowerCase())
                        return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                }
            }
            var c = n.parse(i, a);
            t(c.geometry, c.materials)
        }, r, i)
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    parse: function(e, t) {
        var r = new THREE.Geometry
          , i = void 0 !== e.scale ? 1 / e.scale : 1;
        if (function(t) {
            function i(e, t) {
                return e & 1 << t
            }
            var n, a, o, s, c, h, l, u, p, d, f, E, m, g, v, T, y, R, x, H, b, _, M, w, S, A, L, C = e.faces, P = e.vertices, B = e.normals, U = e.colors, D = 0;
            if (void 0 !== e.uvs) {
                for (n = 0; n < e.uvs.length; n++)
                    e.uvs[n].length && D++;
                for (n = 0; n < D; n++)
                    r.faceVertexUvs[n] = []
            }
            for (s = 0,
            c = P.length; s < c; )
                (R = new THREE.Vector3).x = P[s++] * t,
                R.y = P[s++] * t,
                R.z = P[s++] * t,
                r.vertices.push(R);
            for (s = 0,
            c = C.length; s < c; )
                if (d = C[s++],
                f = i(d, 0),
                E = i(d, 1),
                m = i(d, 3),
                g = i(d, 4),
                v = i(d, 5),
                T = i(d, 6),
                y = i(d, 7),
                f) {
                    if (H = new THREE.Face3,
                    H.a = C[s],
                    H.b = C[s + 1],
                    H.c = C[s + 3],
                    b = new THREE.Face3,
                    b.a = C[s + 1],
                    b.b = C[s + 2],
                    b.c = C[s + 3],
                    s += 4,
                    E && (p = C[s++],
                    H.materialIndex = p,
                    b.materialIndex = p),
                    o = r.faces.length,
                    m)
                        for (n = 0; n < D; n++)
                            for (w = e.uvs[n],
                            r.faceVertexUvs[n][o] = [],
                            r.faceVertexUvs[n][o + 1] = [],
                            a = 0; a < 4; a++)
                                A = w[2 * (u = C[s++])],
                                L = w[2 * u + 1],
                                S = new THREE.Vector2(A,L),
                                2 !== a && r.faceVertexUvs[n][o].push(S),
                                0 !== a && r.faceVertexUvs[n][o + 1].push(S);
                    if (g && (l = 3 * C[s++],
                    H.normal.set(B[l++], B[l++], B[l]),
                    b.normal.copy(H.normal)),
                    v)
                        for (n = 0; n < 4; n++)
                            l = 3 * C[s++],
                            M = new THREE.Vector3(B[l++],B[l++],B[l]),
                            2 !== n && H.vertexNormals.push(M),
                            0 !== n && b.vertexNormals.push(M);
                    if (T && (_ = U[h = C[s++]],
                    H.color.setHex(_),
                    b.color.setHex(_)),
                    y)
                        for (n = 0; n < 4; n++)
                            _ = U[h = C[s++]],
                            2 !== n && H.vertexColors.push(new THREE.Color(_)),
                            0 !== n && b.vertexColors.push(new THREE.Color(_));
                    r.faces.push(H),
                    r.faces.push(b)
                } else {
                    if (x = new THREE.Face3,
                    x.a = C[s++],
                    x.b = C[s++],
                    x.c = C[s++],
                    E && (p = C[s++],
                    x.materialIndex = p),
                    o = r.faces.length,
                    m)
                        for (n = 0; n < D; n++)
                            for (w = e.uvs[n],
                            r.faceVertexUvs[n][o] = [],
                            a = 0; a < 3; a++)
                                A = w[2 * (u = C[s++])],
                                L = w[2 * u + 1],
                                S = new THREE.Vector2(A,L),
                                r.faceVertexUvs[n][o].push(S);
                    if (g && (l = 3 * C[s++],
                    x.normal.set(B[l++], B[l++], B[l])),
                    v)
                        for (n = 0; n < 3; n++)
                            l = 3 * C[s++],
                            M = new THREE.Vector3(B[l++],B[l++],B[l]),
                            x.vertexNormals.push(M);
                    if (T && (h = C[s++],
                    x.color.setHex(U[h])),
                    y)
                        for (n = 0; n < 3; n++)
                            h = C[s++],
                            x.vertexColors.push(new THREE.Color(U[h]));
                    r.faces.push(x)
                }
        }(i),
        function() {
            var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
            if (e.skinWeights)
                for (var i = 0, n = e.skinWeights.length; i < n; i += t) {
                    var a = e.skinWeights[i]
                      , o = t > 1 ? e.skinWeights[i + 1] : 0
                      , s = t > 2 ? e.skinWeights[i + 2] : 0
                      , c = t > 3 ? e.skinWeights[i + 3] : 0;
                    r.skinWeights.push(new THREE.Vector4(a,o,s,c))
                }
            if (e.skinIndices)
                for (var i = 0, n = e.skinIndices.length; i < n; i += t) {
                    var h = e.skinIndices[i]
                      , l = t > 1 ? e.skinIndices[i + 1] : 0
                      , u = t > 2 ? e.skinIndices[i + 2] : 0
                      , p = t > 3 ? e.skinIndices[i + 3] : 0;
                    r.skinIndices.push(new THREE.Vector4(h,l,u,p))
                }
            r.bones = e.bones,
            r.bones && r.bones.length > 0 && (r.skinWeights.length !== r.skinIndices.length || r.skinIndices.length !== r.vertices.length) && console.warn("When skinning, number of vertices (" + r.vertices.length + "), skinIndices (" + r.skinIndices.length + "), and skinWeights (" + r.skinWeights.length + ") should match.")
        }(),
        function(t) {
            if (void 0 !== e.morphTargets)
                for (var i = 0, n = e.morphTargets.length; i < n; i++) {
                    r.morphTargets[i] = {},
                    r.morphTargets[i].name = e.morphTargets[i].name,
                    r.morphTargets[i].vertices = [];
                    for (var a = r.morphTargets[i].vertices, o = e.morphTargets[i].vertices, s = 0, c = o.length; s < c; s += 3) {
                        var h = new THREE.Vector3;
                        h.x = o[s] * t,
                        h.y = o[s + 1] * t,
                        h.z = o[s + 2] * t,
                        a.push(h)
                    }
                }
            if (void 0 !== e.morphColors && e.morphColors.length > 0) {
                console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                for (var l = r.faces, u = e.morphColors[0].colors, i = 0, n = l.length; i < n; i++)
                    l[i].color.fromArray(u, 3 * i)
            }
        }(i),
        function() {
            var t = []
              , i = [];
            void 0 !== e.animation && i.push(e.animation),
            void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
            for (var n = 0; n < i.length; n++) {
                var a = THREE.AnimationClip.parseAnimation(i[n], r.bones);
                a && t.push(a)
            }
            if (r.morphTargets) {
                var o = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(r.morphTargets, 10);
                t = t.concat(o)
            }
            t.length > 0 && (r.animations = t)
        }(),
        r.computeFaceNormals(),
        r.computeBoundingSphere(),
        void 0 === e.materials || 0 === e.materials.length)
            return {
                geometry: r
            };
        var n = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
        return {
            geometry: r,
            materials: n
        }
    }
}),
THREE.LoadingManager = function(e, t, r) {
    var i = this
      , n = !1
      , a = 0
      , o = 0;
    this.onStart = void 0,
    this.onLoad = e,
    this.onProgress = t,
    this.onError = r,
    this.itemStart = function(e) {
        o++,
        !1 === n && void 0 !== i.onStart && i.onStart(e, a, o),
        n = !0
    }
    ,
    this.itemEnd = function(e) {
        a++,
        void 0 !== i.onProgress && i.onProgress(e, a, o),
        a === o && (n = !1,
        void 0 !== i.onLoad && i.onLoad())
    }
    ,
    this.itemError = function(e) {
        void 0 !== i.onError && i.onError(e)
    }
}
,
THREE.DefaultLoadingManager = new THREE.LoadingManager,
THREE.BufferGeometryLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.BufferGeometryLoader.prototype, {
    load: function(e, t, r, i) {
        var n = this;
        new THREE.XHRLoader(n.manager).load(e, function(e) {
            t(n.parse(JSON.parse(e)))
        }, r, i)
    },
    parse: function(e) {
        var t = new THREE.BufferGeometry
          , r = e.data.index
          , i = {
            Int8Array: Int8Array,
            Uint8Array: Uint8Array,
            Uint8ClampedArray: Uint8ClampedArray,
            Int16Array: Int16Array,
            Uint16Array: Uint16Array,
            Int32Array: Int32Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array
        };
        if (void 0 !== r) {
            s = new i[r.type](r.array);
            t.setIndex(new THREE.BufferAttribute(s,1))
        }
        var n = e.data.attributes;
        for (var a in n) {
            var o = n[a]
              , s = new i[o.type](o.array);
            t.addAttribute(a, new THREE.BufferAttribute(s,o.itemSize,o.normalized))
        }
        var c = e.data.groups || e.data.drawcalls || e.data.offsets;
        if (void 0 !== c)
            for (var h = 0, l = c.length; h !== l; ++h) {
                var u = c[h];
                t.addGroup(u.start, u.count, u.materialIndex)
            }
        var p = e.data.boundingSphere;
        if (void 0 !== p) {
            var d = new THREE.Vector3;
            void 0 !== p.center && d.fromArray(p.center),
            t.boundingSphere = new THREE.Sphere(d,p.radius)
        }
        return t
    }
}),
THREE.MaterialLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.textures = {}
}
,
Object.assign(THREE.MaterialLoader.prototype, {
    load: function(e, t, r, i) {
        var n = this;
        new THREE.XHRLoader(n.manager).load(e, function(e) {
            t(n.parse(JSON.parse(e)))
        }, r, i)
    },
    setTextures: function(e) {
        this.textures = e
    },
    getTexture: function(e) {
        var t = this.textures;
        return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e),
        t[e]
    },
    parse: function(e) {
        var t = new THREE[e.type];
        if (void 0 !== e.uuid && (t.uuid = e.uuid),
        void 0 !== e.name && (t.name = e.name),
        void 0 !== e.color && t.color && t.color.setHex(e.color),
        void 0 !== e.roughness && (t.roughness = e.roughness),
        void 0 !== e.metalness && (t.metalness = e.metalness),
        void 0 !== e.emissive && t.emissive.setHex(e.emissive),
        void 0 !== e.specular && t.specular.setHex(e.specular),
        void 0 !== e.shininess && (t.shininess = e.shininess),
        void 0 !== e.uniforms && (t.uniforms = e.uniforms),
        void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader),
        void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader),
        void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors),
        void 0 !== e.shading && (t.shading = e.shading),
        void 0 !== e.blending && (t.blending = e.blending),
        void 0 !== e.side && (t.side = e.side),
        void 0 !== e.opacity && (t.opacity = e.opacity),
        void 0 !== e.transparent && (t.transparent = e.transparent),
        void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest),
        void 0 !== e.depthTest && (t.depthTest = e.depthTest),
        void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite),
        void 0 !== e.colorWrite && (t.colorWrite = e.colorWrite),
        void 0 !== e.wireframe && (t.wireframe = e.wireframe),
        void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth),
        void 0 !== e.size && (t.size = e.size),
        void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation),
        void 0 !== e.map && (t.map = this.getTexture(e.map)),
        void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap),
        t.transparent = !0),
        void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)),
        void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale),
        void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)),
        void 0 !== e.normalScale) {
            var r = e.normalScale;
            !1 === Array.isArray(r) && (r = [r, r]),
            t.normalScale = (new THREE.Vector2).fromArray(r)
        }
        if (void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)),
        void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale),
        void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias),
        void 0 !== e.roughnessMap && (t.roughnessMap = this.getTexture(e.roughnessMap)),
        void 0 !== e.metalnessMap && (t.metalnessMap = this.getTexture(e.metalnessMap)),
        void 0 !== e.emissiveMap && (t.emissiveMap = this.getTexture(e.emissiveMap)),
        void 0 !== e.emissiveIntensity && (t.emissiveIntensity = e.emissiveIntensity),
        void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)),
        void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap),
        t.combine = THREE.MultiplyOperation),
        void 0 !== e.reflectivity && (t.reflectivity = e.reflectivity),
        void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)),
        void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity),
        void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)),
        void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity),
        void 0 !== e.materials)
            for (var i = 0, n = e.materials.length; i < n; i++)
                t.materials.push(this.parse(e.materials[i]));
        return t
    }
}),
THREE.ObjectLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.texturePath = ""
}
,
Object.assign(THREE.ObjectLoader.prototype, {
    load: function(e, t, r, i) {
        "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
        var n = this;
        new THREE.XHRLoader(n.manager).load(e, function(e) {
            n.parse(JSON.parse(e), t)
        }, r, i)
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    parse: function(e, t) {
        var r = this.parseGeometries(e.geometries)
          , i = this.parseImages(e.images, function() {
            void 0 !== t && t(o, e)
        })
          , n = this.parseTextures(e.textures, i)
          , a = this.parseMaterials(e.materials, n)
          , o = this.parseObject(e.object, r, a);
        return e.animations && (o.animations = this.parseAnimations(e.animations)),
        e.cameras && (o.cameras = this.parseCameras(o, e.cameras)),
        void 0 !== e.images && 0 !== e.images.length || void 0 !== t && t(o, e),
        o
    },
    parseCameras: function(e, t) {
        for (var r = [], i = 0; i < t.length; i++) {
            var n = e.getObjectByProperty("uuid", t[i]);
            n && r.push(n)
        }
        return r
    },
    parseGeometries: function(e) {
        var t = {};
        if (void 0 !== e)
            for (var r = new THREE.JSONLoader, i = new THREE.BufferGeometryLoader, n = 0, a = e.length; n < a; n++) {
                var o, s = e[n];
                switch (s.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    o = new THREE[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                    o = new THREE[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    o = new THREE[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    o = new THREE[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                    break;
                case "ConeGeometry":
                case "ConeBufferGeometry":
                    o = new THREE[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    o = new THREE[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                    break;
                case "DodecahedronGeometry":
                case "IcosahedronGeometry":
                case "OctahedronGeometry":
                case "TetrahedronGeometry":
                    o = new THREE[s.type](s.radius,s.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    o = new THREE[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    o = new THREE[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    o = new THREE[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                    break;
                case "LatheGeometry":
                case "LatheBufferGeometry":
                    o = new THREE[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                    break;
                case "BufferGeometry":
                    o = i.parse(s);
                    break;
                case "Geometry":
                    o = r.parse(s.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                    continue
                }
                o.uuid = s.uuid,
                void 0 !== s.name && (o.name = s.name),
                t[s.uuid] = o
            }
        return t
    },
    parseMaterials: function(e, t) {
        var r = {};
        if (void 0 !== e) {
            var i = new THREE.MaterialLoader;
            i.setTextures(t);
            for (var n = 0, a = e.length; n < a; n++) {
                var o = i.parse(e[n]);
                r[o.uuid] = o
            }
        }
        return r
    },
    parseAnimations: function(e) {
        for (var t = [], r = 0; r < e.length; r++) {
            var i = THREE.AnimationClip.parse(e[r]);
            t.push(i)
        }
        return t
    },
    parseImages: function(e, t) {
        function r(e) {
            return i.manager.itemStart(e),
            o.load(e, function() {
                i.manager.itemEnd(e)
            })
        }
        var i = this
          , n = {};
        if (void 0 !== e && e.length > 0) {
            var a = new THREE.LoadingManager(t)
              , o = new THREE.ImageLoader(a);
            o.setCrossOrigin(this.crossOrigin);
            for (var s = 0, c = e.length; s < c; s++) {
                var h = e[s]
                  , l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : i.texturePath + h.url;
                n[h.uuid] = r(l)
            }
        }
        return n
    },
    parseTextures: function(e, t) {
        function r(e) {
            return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e),
            THREE[e])
        }
        var i = {};
        if (void 0 !== e)
            for (var n = 0, a = e.length; n < a; n++) {
                var o, s = e[n];
                if (s.images) {
                    for (var c = [], h = 0, l = s.images.length; h < l; h++)
                        void 0 === t[s.images[h]] && console.warn("THREE.ObjectLoader: Undefined image", s.images[h]),
                        c.push(t[s.images[h]]);
                    o = new THREE.CubeTexture(c)
                } else
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image),
                    o = new THREE.Texture(t[s.image]);
                o.needsUpdate = !0,
                o.uuid = s.uuid,
                void 0 !== s.name && (o.name = s.name),
                void 0 !== s.mapping && (o.mapping = r(s.mapping)),
                void 0 !== s.offset && o.offset.fromArray(s.offset),
                void 0 !== s.repeat && o.repeat.fromArray(s.repeat),
                void 0 !== s.wrap && (o.wrapS = r(s.wrap[0]),
                o.wrapT = r(s.wrap[1])),
                void 0 !== s.minFilter && (o.minFilter = r(s.minFilter)),
                void 0 !== s.magFilter && (o.magFilter = r(s.magFilter)),
                void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy),
                void 0 !== s.flipY && (o.flipY = s.flipY),
                i[s.uuid] = o
            }
        return i
    },
    parseObject: function() {
        var e = new THREE.Matrix4;
        return function(t, r, i) {
            function n(e) {
                return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e),
                r[e]
            }
            function a(e) {
                if (void 0 !== e)
                    return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined material", e),
                    i[e]
            }
            var o;
            switch (t.type) {
            case "Scene":
                o = new THREE.Scene;
                break;
            case "PerspectiveCamera":
                o = new THREE.PerspectiveCamera(t.fov,t.aspect,t.near,t.far),
                void 0 !== t.focus && (o.focus = t.focus),
                void 0 !== t.zoom && (o.zoom = t.zoom),
                void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset),
                void 0 !== t.view && (o.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                o = new THREE.OrthographicCamera(t.left,t.right,t.top,t.bottom,t.near,t.far);
                break;
            case "AmbientLight":
                o = new THREE.AmbientLight(t.color,t.intensity);
                break;
            case "DirectionalLight":
                o = new THREE.DirectionalLight(t.color,t.intensity);
                break;
            case "PointLight":
                o = new THREE.PointLight(t.color,t.intensity,t.distance,t.decay);
                break;
            case "SpotLight":
                o = new THREE.SpotLight(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                break;
            case "HemisphereLight":
                o = new THREE.HemisphereLight(t.color,t.groundColor,t.intensity);
                break;
            case "Mesh":
                var s = n(t.geometry)
                  , c = a(t.material);
                o = s.bones && s.bones.length > 0 ? new THREE.SkinnedMesh(s,c) : new THREE.Mesh(s,c);
                break;
            case "LOD":
                o = new THREE.LOD;
                break;
            case "Line":
                o = new THREE.Line(n(t.geometry),a(t.material),t.mode);
                break;
            case "LineSegments":
                o = new THREE.LineSegments(n(t.geometry),a(t.material));
                break;
            case "PointCloud":
            case "Points":
                o = new THREE.Points(n(t.geometry),a(t.material));
                break;
            case "Sprite":
                o = new THREE.Sprite(a(t.material));
                break;
            case "Group":
                o = new THREE.Group;
                break;
            default:
                o = new THREE.Object3D
            }
            if (o.uuid = t.uuid,
            void 0 !== t.name && (o.name = t.name),
            void 0 !== t.matrix ? (e.fromArray(t.matrix),
            e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position),
            void 0 !== t.rotation && o.rotation.fromArray(t.rotation),
            void 0 !== t.scale && o.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (o.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow),
            void 0 !== t.visible && (o.visible = t.visible),
            void 0 !== t.userData && (o.userData = t.userData),
            void 0 !== t.children)
                for (var h in t.children)
                    o.add(this.parseObject(t.children[h], r, i));
            if ("LOD" === t.type)
                for (var l = t.levels, u = 0; u < l.length; u++) {
                    var p = l[u];
                    void 0 !== (h = o.getObjectByProperty("uuid", p.object)) && o.addLevel(h, p.distance)
                }
            return void 0 !== t.layers && (o.layers.mask = t.layers),
            o
        }
    }()
}),
THREE.TextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.TextureLoader.prototype, {
    load: function(e, t, r, i) {
        var n = new THREE.Texture
          , a = new THREE.ImageLoader(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, function(r) {
            var i = e.search(/\.(jpg|jpeg)$/) > 0 || 0 === e.search(/^data\:image\/jpeg/);
            n.format = i ? THREE.RGBFormat : THREE.RGBAFormat,
            n.image = r,
            n.needsUpdate = !0,
            void 0 !== t && t(n)
        }, r, i),
        n
    },
    setCrossOrigin: function(e) {
        return this.crossOrigin = e,
        this
    },
    setPath: function(e) {
        return this.path = e,
        this
    }
}),
THREE.CubeTextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
Object.assign(THREE.CubeTextureLoader.prototype, {
    load: function(e, t, r, i) {
        function n(r) {
            o.load(e[r], function(e) {
                a.images[r] = e,
                6 === ++s && (a.needsUpdate = !0,
                t && t(a))
            }, void 0, i)
        }
        var a = new THREE.CubeTexture
          , o = new THREE.ImageLoader(this.manager);
        o.setCrossOrigin(this.crossOrigin),
        o.setPath(this.path);
        for (var s = 0, c = 0; c < e.length; ++c)
            n(c);
        return a
    },
    setCrossOrigin: function(e) {
        return this.crossOrigin = e,
        this
    },
    setPath: function(e) {
        return this.path = e,
        this
    }
}),
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this._parser = null
}
,
Object.assign(THREE.BinaryTextureLoader.prototype, {
    load: function(e, t, r, i) {
        var n = this
          , a = new THREE.DataTexture
          , o = new THREE.XHRLoader(this.manager);
        return o.setResponseType("arraybuffer"),
        o.load(e, function(e) {
            var r = n._parser(e);
            r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width,
            a.image.height = r.height,
            a.image.data = r.data),
            a.wrapS = void 0 !== r.wrapS ? r.wrapS : THREE.ClampToEdgeWrapping,
            a.wrapT = void 0 !== r.wrapT ? r.wrapT : THREE.ClampToEdgeWrapping,
            a.magFilter = void 0 !== r.magFilter ? r.magFilter : THREE.LinearFilter,
            a.minFilter = void 0 !== r.minFilter ? r.minFilter : THREE.LinearMipMapLinearFilter,
            a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1,
            void 0 !== r.format && (a.format = r.format),
            void 0 !== r.type && (a.type = r.type),
            void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps),
            1 === r.mipmapCount && (a.minFilter = THREE.LinearFilter),
            a.needsUpdate = !0,
            t && t(a, r))
        }, r, i),
        a
    }
}),
THREE.CompressedTextureLoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this._parser = null
}
,
Object.assign(THREE.CompressedTextureLoader.prototype, {
    load: function(e, t, r, i) {
        function n(n) {
            c.load(e[n], function(e) {
                var r = a._parser(e, !0);
                o[n] = {
                    width: r.width,
                    height: r.height,
                    format: r.format,
                    mipmaps: r.mipmaps
                },
                6 === (h += 1) && (1 === r.mipmapCount && (s.minFilter = THREE.LinearFilter),
                s.format = r.format,
                s.needsUpdate = !0,
                t && t(s))
            }, r, i)
        }
        var a = this
          , o = []
          , s = new THREE.CompressedTexture;
        s.image = o;
        var c = new THREE.XHRLoader(this.manager);
        if (c.setPath(this.path),
        c.setResponseType("arraybuffer"),
        Array.isArray(e))
            for (var h = 0, l = 0, u = e.length; l < u; ++l)
                n(l);
        else
            c.load(e, function(e) {
                var r = a._parser(e, !0);
                if (r.isCubemap)
                    for (var i = r.mipmaps.length / r.mipmapCount, n = 0; n < i; n++) {
                        o[n] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < r.mipmapCount; c++)
                            o[n].mipmaps.push(r.mipmaps[n * r.mipmapCount + c]),
                            o[n].format = r.format,
                            o[n].width = r.width,
                            o[n].height = r.height
                    }
                else
                    s.image.width = r.width,
                    s.image.height = r.height,
                    s.mipmaps = r.mipmaps;
                1 === r.mipmapCount && (s.minFilter = THREE.LinearFilter),
                s.format = r.format,
                s.needsUpdate = !0,
                t && t(s)
            }, r, i);
        return s
    },
    setPath: function(e) {
        return this.path = e,
        this
    }
}),
THREE.Material = function() {
    Object.defineProperty(this, "id", {
        value: THREE.MaterialIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Material",
    this.fog = !0,
    this.lights = !0,
    this.blending = THREE.NormalBlending,
    this.side = THREE.FrontSide,
    this.shading = THREE.SmoothShading,
    this.vertexColors = THREE.NoColors,
    this.opacity = 1,
    this.transparent = !1,
    this.blendSrc = THREE.SrcAlphaFactor,
    this.blendDst = THREE.OneMinusSrcAlphaFactor,
    this.blendEquation = THREE.AddEquation,
    this.blendSrcAlpha = null,
    this.blendDstAlpha = null,
    this.blendEquationAlpha = null,
    this.depthFunc = THREE.LessEqualDepth,
    this.depthTest = !0,
    this.depthWrite = !0,
    this.clippingPlanes = null,
    this.clipShadows = !1,
    this.colorWrite = !0,
    this.precision = null,
    this.polygonOffset = !1,
    this.polygonOffsetFactor = 0,
    this.polygonOffsetUnits = 0,
    this.alphaTest = 0,
    this.premultipliedAlpha = !1,
    this.overdraw = 0,
    this.visible = !0,
    this._needsUpdate = !0
}
,
THREE.Material.prototype = {
    constructor: THREE.Material,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(e) {
        !0 === e && this.update(),
        this._needsUpdate = e
    },
    setValues: function(e) {
        if (void 0 !== e)
            for (var t in e) {
                var r = e[t];
                if (void 0 !== r) {
                    var i = this[t];
                    void 0 !== i ? i instanceof THREE.Color ? i.set(r) : i instanceof THREE.Vector3 && r instanceof THREE.Vector3 ? i.copy(r) : this[t] = "overdraw" === t ? Number(r) : r : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                } else
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.")
            }
    },
    toJSON: function(e) {
        function t(e) {
            var t = [];
            for (var r in e) {
                var i = e[r];
                delete i.metadata,
                t.push(i)
            }
            return t
        }
        var r = void 0 === e;
        r && (e = {
            textures: {},
            images: {}
        });
        var i = {
            metadata: {
                version: 4.4,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        if (i.uuid = this.uuid,
        i.type = this.type,
        "" !== this.name && (i.name = this.name),
        this.color instanceof THREE.Color && (i.color = this.color.getHex()),
        void 0 !== this.roughness && (i.roughness = this.roughness),
        void 0 !== this.metalness && (i.metalness = this.metalness),
        this.emissive instanceof THREE.Color && (i.emissive = this.emissive.getHex()),
        this.specular instanceof THREE.Color && (i.specular = this.specular.getHex()),
        void 0 !== this.shininess && (i.shininess = this.shininess),
        this.map instanceof THREE.Texture && (i.map = this.map.toJSON(e).uuid),
        this.alphaMap instanceof THREE.Texture && (i.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap instanceof THREE.Texture && (i.lightMap = this.lightMap.toJSON(e).uuid),
        this.bumpMap instanceof THREE.Texture && (i.bumpMap = this.bumpMap.toJSON(e).uuid,
        i.bumpScale = this.bumpScale),
        this.normalMap instanceof THREE.Texture && (i.normalMap = this.normalMap.toJSON(e).uuid,
        i.normalScale = this.normalScale.toArray()),
        this.displacementMap instanceof THREE.Texture && (i.displacementMap = this.displacementMap.toJSON(e).uuid,
        i.displacementScale = this.displacementScale,
        i.displacementBias = this.displacementBias),
        this.roughnessMap instanceof THREE.Texture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap instanceof THREE.Texture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap instanceof THREE.Texture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap instanceof THREE.Texture && (i.specularMap = this.specularMap.toJSON(e).uuid),
        this.envMap instanceof THREE.Texture && (i.envMap = this.envMap.toJSON(e).uuid,
        i.reflectivity = this.reflectivity),
        void 0 !== this.size && (i.size = this.size),
        void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation),
        this.blending !== THREE.NormalBlending && (i.blending = this.blending),
        this.shading !== THREE.SmoothShading && (i.shading = this.shading),
        this.side !== THREE.FrontSide && (i.side = this.side),
        this.vertexColors !== THREE.NoColors && (i.vertexColors = this.vertexColors),
        this.opacity < 1 && (i.opacity = this.opacity),
        !0 === this.transparent && (i.transparent = this.transparent),
        this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
        !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (i.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
        r) {
            var n = t(e.textures)
              , a = t(e.images);
            n.length > 0 && (i.textures = n),
            a.length > 0 && (i.images = a)
        }
        return i
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.name = e.name,
        this.fog = e.fog,
        this.lights = e.lights,
        this.blending = e.blending,
        this.side = e.side,
        this.shading = e.shading,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.alphaTest = e.alphaTest,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.overdraw = e.overdraw,
        this.visible = e.visible,
        this.clipShadows = e.clipShadows;
        var t = e.clippingPlanes
          , r = null;
        if (null !== t) {
            var i = t.length;
            r = new Array(i);
            for (var n = 0; n !== i; ++n)
                r[n] = t[n].clone()
        }
        return this.clippingPlanes = r,
        this
    },
    update: function() {
        this.dispatchEvent({
            type: "update"
        })
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
Object.assign(THREE.Material.prototype, THREE.EventDispatcher.prototype),
THREE.MaterialIdCount = 0,
THREE.LineBasicMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "LineBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.linewidth = 1,
    this.linecap = "round",
    this.linejoin = "round",
    this.lights = !1,
    this.setValues(e)
}
,
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial,
THREE.LineBasicMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.linewidth = e.linewidth,
    this.linecap = e.linecap,
    this.linejoin = e.linejoin,
    this
}
,
THREE.LineDashedMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "LineDashedMaterial",
    this.color = new THREE.Color(16777215),
    this.linewidth = 1,
    this.scale = 1,
    this.dashSize = 3,
    this.gapSize = 1,
    this.lights = !1,
    this.setValues(e)
}
,
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial,
THREE.LineDashedMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.linewidth = e.linewidth,
    this.scale = e.scale,
    this.dashSize = e.dashSize,
    this.gapSize = e.gapSize,
    this
}
,
THREE.MeshBasicMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null,
    this.aoMap = null,
    this.aoMapIntensity = 1,
    this.specularMap = null,
    this.alphaMap = null,
    this.envMap = null,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.skinning = !1,
    this.morphTargets = !1,
    this.lights = !1,
    this.setValues(e)
}
,
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial,
THREE.MeshBasicMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this
}
,
THREE.MeshDepthMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshDepthMaterial",
    this.depthPacking = THREE.BasicDepthPacking,
    this.skinning = !1,
    this.morphTargets = !1,
    this.map = null,
    this.alphaMap = null,
    this.displacementMap = null,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.fog = !1,
    this.lights = !1,
    this.setValues(e)
}
,
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial,
THREE.MeshDepthMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.depthPacking = e.depthPacking,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.map = e.map,
    this.alphaMap = e.alphaMap,
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this
}
,
THREE.MeshLambertMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshLambertMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null,
    this.lightMap = null,
    this.lightMapIntensity = 1,
    this.aoMap = null,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.emissiveMap = null,
    this.specularMap = null,
    this.alphaMap = null,
    this.envMap = null,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.setValues(e)
}
,
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial,
THREE.MeshLambertMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissive.copy(e.emissive),
    this.emissiveMap = e.emissiveMap,
    this.emissiveIntensity = e.emissiveIntensity,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
}
,
THREE.MeshNormalMaterial = function(e) {
    THREE.Material.call(this, e),
    this.type = "MeshNormalMaterial",
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.fog = !1,
    this.lights = !1,
    this.morphTargets = !1,
    this.setValues(e)
}
,
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial,
THREE.MeshNormalMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this
}
,
THREE.MeshPhongMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshPhongMaterial",
    this.color = new THREE.Color(16777215),
    this.specular = new THREE.Color(1118481),
    this.shininess = 30,
    this.map = null,
    this.lightMap = null,
    this.lightMapIntensity = 1,
    this.aoMap = null,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.emissiveMap = null,
    this.bumpMap = null,
    this.bumpScale = 1,
    this.normalMap = null,
    this.normalScale = new THREE.Vector2(1,1),
    this.displacementMap = null,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.specularMap = null,
    this.alphaMap = null,
    this.envMap = null,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.setValues(e)
}
,
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial,
THREE.MeshPhongMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.specular.copy(e.specular),
    this.shininess = e.shininess,
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissive.copy(e.emissive),
    this.emissiveMap = e.emissiveMap,
    this.emissiveIntensity = e.emissiveIntensity,
    this.bumpMap = e.bumpMap,
    this.bumpScale = e.bumpScale,
    this.normalMap = e.normalMap,
    this.normalScale.copy(e.normalScale),
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
}
,
THREE.MeshStandardMaterial = function(e) {
    THREE.Material.call(this),
    this.defines = {
        STANDARD: ""
    },
    this.type = "MeshStandardMaterial",
    this.color = new THREE.Color(16777215),
    this.roughness = .5,
    this.metalness = .5,
    this.map = null,
    this.lightMap = null,
    this.lightMapIntensity = 1,
    this.aoMap = null,
    this.aoMapIntensity = 1,
    this.emissive = new THREE.Color(0),
    this.emissiveIntensity = 1,
    this.emissiveMap = null,
    this.bumpMap = null,
    this.bumpScale = 1,
    this.normalMap = null,
    this.normalScale = new THREE.Vector2(1,1),
    this.displacementMap = null,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.roughnessMap = null,
    this.metalnessMap = null,
    this.alphaMap = null,
    this.envMap = null,
    this.envMapIntensity = 1,
    this.refractionRatio = .98,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinecap = "round",
    this.wireframeLinejoin = "round",
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.setValues(e)
}
,
THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial,
THREE.MeshStandardMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.defines = {
        STANDARD: ""
    },
    this.color.copy(e.color),
    this.roughness = e.roughness,
    this.metalness = e.metalness,
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissive.copy(e.emissive),
    this.emissiveMap = e.emissiveMap,
    this.emissiveIntensity = e.emissiveIntensity,
    this.bumpMap = e.bumpMap,
    this.bumpScale = e.bumpScale,
    this.normalMap = e.normalMap,
    this.normalScale.copy(e.normalScale),
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.roughnessMap = e.roughnessMap,
    this.metalnessMap = e.metalnessMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.envMapIntensity = e.envMapIntensity,
    this.refractionRatio = e.refractionRatio,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
}
,
THREE.MeshPhysicalMaterial = function(e) {
    THREE.MeshStandardMaterial.call(this),
    this.defines = {
        PHYSICAL: ""
    },
    this.type = "MeshPhysicalMaterial",
    this.reflectivity = .5,
    this.clearCoat = 0,
    this.clearCoatRoughness = 0,
    this.setValues(e)
}
,
THREE.MeshPhysicalMaterial.prototype = Object.create(THREE.MeshStandardMaterial.prototype),
THREE.MeshPhysicalMaterial.prototype.constructor = THREE.MeshPhysicalMaterial,
THREE.MeshPhysicalMaterial.prototype.copy = function(e) {
    return THREE.MeshStandardMaterial.prototype.copy.call(this, e),
    this.defines = {
        PHYSICAL: ""
    },
    this.reflectivity = e.reflectivity,
    this.clearCoat = e.clearCoat,
    this.clearCoatRoughness = e.clearCoatRoughness,
    this
}
,
THREE.MultiMaterial = function(e) {
    this.uuid = THREE.Math.generateUUID(),
    this.type = "MultiMaterial",
    this.materials = e instanceof Array ? e : [],
    this.visible = !0
}
,
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial,
    toJSON: function(e) {
        for (var t = {
            metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, r = this.materials, i = 0, n = r.length; i < n; i++) {
            var a = r[i].toJSON(e);
            delete a.metadata,
            t.materials.push(a)
        }
        return t.visible = this.visible,
        t
    },
    clone: function() {
        for (var e = new this.constructor, t = 0; t < this.materials.length; t++)
            e.materials.push(this.materials[t].clone());
        return e.visible = this.visible,
        e
    }
},
THREE.PointsMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "PointsMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null,
    this.size = 1,
    this.sizeAttenuation = !0,
    this.lights = !1,
    this.setValues(e)
}
,
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial,
THREE.PointsMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.size = e.size,
    this.sizeAttenuation = e.sizeAttenuation,
    this
}
,
THREE.ShaderMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "ShaderMaterial",
    this.defines = {},
    this.uniforms = {},
    this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
    this.linewidth = 1,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.fog = !1,
    this.lights = !1,
    this.clipping = !1,
    this.skinning = !1,
    this.morphTargets = !1,
    this.morphNormals = !1,
    this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
    },
    this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    },
    this.index0AttributeName = void 0,
    void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
    this.setValues(e))
}
,
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial,
THREE.ShaderMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.fragmentShader = e.fragmentShader,
    this.vertexShader = e.vertexShader,
    this.uniforms = THREE.UniformsUtils.clone(e.uniforms),
    this.defines = e.defines,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.lights = e.lights,
    this.clipping = e.clipping,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this.extensions = e.extensions,
    this
}
,
THREE.ShaderMaterial.prototype.toJSON = function(e) {
    var t = THREE.Material.prototype.toJSON.call(this, e);
    return t.uniforms = this.uniforms,
    t.vertexShader = this.vertexShader,
    t.fragmentShader = this.fragmentShader,
    t
}
,
THREE.RawShaderMaterial = function(e) {
    THREE.ShaderMaterial.call(this, e),
    this.type = "RawShaderMaterial"
}
,
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial,
THREE.SpriteMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "SpriteMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null,
    this.rotation = 0,
    this.fog = !1,
    this.lights = !1,
    this.setValues(e)
}
,
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial,
THREE.SpriteMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.rotation = e.rotation,
    this
}
,
THREE.ShadowMaterial = function() {
    THREE.ShaderMaterial.call(this, {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.lights, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: THREE.ShaderChunk.shadow_vert,
        fragmentShader: THREE.ShaderChunk.shadow_frag
    }),
    this.lights = !0,
    this.transparent = !0,
    Object.defineProperties(this, {
        opacity: {
            enumerable: !0,
            get: function() {
                return this.uniforms.opacity.value
            },
            set: function(e) {
                this.uniforms.opacity.value = e
            }
        }
    })
}
,
THREE.ShadowMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),
THREE.ShadowMaterial.prototype.constructor = THREE.ShadowMaterial,
THREE.Texture = function(e, t, r, i, n, a, o, s, c, h) {
    Object.defineProperty(this, "id", {
        value: THREE.TextureIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.sourceFile = "",
    this.image = void 0 !== e ? e : THREE.Texture.DEFAULT_IMAGE,
    this.mipmaps = [],
    this.mapping = void 0 !== t ? t : THREE.Texture.DEFAULT_MAPPING,
    this.wrapS = void 0 !== r ? r : THREE.ClampToEdgeWrapping,
    this.wrapT = void 0 !== i ? i : THREE.ClampToEdgeWrapping,
    this.magFilter = void 0 !== n ? n : THREE.LinearFilter,
    this.minFilter = void 0 !== a ? a : THREE.LinearMipMapLinearFilter,
    this.anisotropy = void 0 !== c ? c : 1,
    this.format = void 0 !== o ? o : THREE.RGBAFormat,
    this.type = void 0 !== s ? s : THREE.UnsignedByteType,
    this.offset = new THREE.Vector2(0,0),
    this.repeat = new THREE.Vector2(1,1),
    this.generateMipmaps = !0,
    this.premultiplyAlpha = !1,
    this.flipY = !0,
    this.unpackAlignment = 4,
    this.encoding = void 0 !== h ? h : THREE.LinearEncoding,
    this.version = 0,
    this.onUpdate = null
}
,
THREE.Texture.DEFAULT_IMAGE = void 0,
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping,
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate(e) {
        !0 === e && this.version++
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.image = e.image,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.encoding = e.encoding,
        this
    },
    toJSON: function(e) {
        if (void 0 !== e.textures[this.uuid])
            return e.textures[this.uuid];
        var t = {
            metadata: {
                version: 4.4,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY
        };
        if (void 0 !== this.image) {
            var r = this.image;
            void 0 === r.uuid && (r.uuid = THREE.Math.generateUUID()),
            void 0 === e.images[r.uuid] && (e.images[r.uuid] = {
                uuid: r.uuid,
                url: function(e) {
                    var t;
                    return void 0 !== e.toDataURL ? t = e : ((t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = e.width,
                    t.height = e.height,
                    t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)),
                    t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
                }(r)
            }),
            t.image = r.uuid
        }
        return e.textures[this.uuid] = t,
        t
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    transformUv: function(e) {
        if (this.mapping === THREE.UVMapping) {
            if (e.multiply(this.repeat),
            e.add(this.offset),
            e.x < 0 || e.x > 1)
                switch (this.wrapS) {
                case THREE.RepeatWrapping:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                }
            if (e.y < 0 || e.y > 1)
                switch (this.wrapT) {
                case THREE.RepeatWrapping:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                }
            this.flipY && (e.y = 1 - e.y)
        }
    }
},
Object.assign(THREE.Texture.prototype, THREE.EventDispatcher.prototype),
THREE.TextureIdCount = 0,
THREE.DepthTexture = function(e, t, r, i, n, a, o, s, c) {
    THREE.Texture.call(this, null, i, n, a, o, s, THREE.DepthFormat, r, c),
    this.image = {
        width: e,
        height: t
    },
    this.type = void 0 !== r ? r : THREE.UnsignedShortType,
    this.magFilter = void 0 !== o ? o : THREE.NearestFilter,
    this.minFilter = void 0 !== s ? s : THREE.NearestFilter,
    this.flipY = !1,
    this.generateMipmaps = !1
}
,
THREE.DepthTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.DepthTexture.prototype.constructor = THREE.DepthTexture,
THREE.CanvasTexture = function(e, t, r, i, n, a, o, s, c) {
    THREE.Texture.call(this, e, t, r, i, n, a, o, s, c),
    this.needsUpdate = !0
}
,
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture,
THREE.CubeTexture = function(e, t, r, i, n, a, o, s, c, h) {
    e = void 0 !== e ? e : [],
    t = void 0 !== t ? t : THREE.CubeReflectionMapping,
    THREE.Texture.call(this, e, t, r, i, n, a, o, s, c, h),
    this.flipY = !1
}
,
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture,
Object.defineProperty(THREE.CubeTexture.prototype, "images", {
    get: function() {
        return this.image
    },
    set: function(e) {
        this.image = e
    }
}),
THREE.CompressedTexture = function(e, t, r, i, n, a, o, s, c, h, l, u) {
    THREE.Texture.call(this, null, a, o, s, c, h, i, n, l, u),
    this.image = {
        width: t,
        height: r
    },
    this.mipmaps = e,
    this.flipY = !1,
    this.generateMipmaps = !1
}
,
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture,
THREE.DataTexture = function(e, t, r, i, n, a, o, s, c, h, l, u) {
    THREE.Texture.call(this, null, a, o, s, c, h, i, n, l, u),
    this.image = {
        data: e,
        width: t,
        height: r
    },
    this.magFilter = void 0 !== c ? c : THREE.NearestFilter,
    this.minFilter = void 0 !== h ? h : THREE.NearestFilter,
    this.flipY = !1,
    this.generateMipmaps = !1
}
,
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.DataTexture.prototype.constructor = THREE.DataTexture,
THREE.VideoTexture = function(e, t, r, i, n, a, o, s, c) {
    function h() {
        requestAnimationFrame(h),
        e.readyState >= e.HAVE_CURRENT_DATA && (l.needsUpdate = !0)
    }
    THREE.Texture.call(this, e, t, r, i, n, a, o, s, c),
    this.generateMipmaps = !1;
    var l = this;
    h()
}
,
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture,
THREE.Group = function() {
    THREE.Object3D.call(this),
    this.type = "Group"
}
,
THREE.Group.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Group
}),
THREE.Points = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Points",
    this.geometry = void 0 !== e ? e : new THREE.BufferGeometry,
    this.material = void 0 !== t ? t : new THREE.PointsMaterial({
        color: 16777215 * Math.random()
    })
}
,
THREE.Points.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Points,
    raycast: function() {
        var e = new THREE.Matrix4
          , t = new THREE.Ray
          , r = new THREE.Sphere;
        return function(i, n) {
            function a(e, r) {
                var a = t.distanceSqToPoint(e);
                if (a < u) {
                    var s = t.closestPointToPoint(e);
                    s.applyMatrix4(c);
                    var h = i.ray.origin.distanceTo(s);
                    if (h < i.near || h > i.far)
                        return;
                    n.push({
                        distance: h,
                        distanceToRay: Math.sqrt(a),
                        point: s.clone(),
                        index: r,
                        face: null,
                        object: o
                    })
                }
            }
            var o = this
              , s = this.geometry
              , c = this.matrixWorld
              , h = i.params.Points.threshold;
            if (null === s.boundingSphere && s.computeBoundingSphere(),
            r.copy(s.boundingSphere),
            r.applyMatrix4(c),
            !1 !== i.ray.intersectsSphere(r)) {
                e.getInverse(c),
                t.copy(i.ray).applyMatrix4(e);
                var l = h / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                  , u = l * l
                  , p = new THREE.Vector3;
                if (s instanceof THREE.BufferGeometry) {
                    var d = s.index
                      , f = s.attributes.position.array;
                    if (null !== d)
                        for (var E = d.array, m = 0, g = E.length; m < g; m++) {
                            var v = E[m];
                            p.fromArray(f, 3 * v),
                            a(p, v)
                        }
                    else
                        for (var m = 0, T = f.length / 3; m < T; m++)
                            p.fromArray(f, 3 * m),
                            a(p, m)
                } else
                    for (var y = s.vertices, m = 0, T = y.length; m < T; m++)
                        a(y[m], m)
            }
        }
    }(),
    clone: function() {
        return new this.constructor(this.geometry,this.material).copy(this)
    }
}),
THREE.Line = function(e, t, r) {
    if (1 === r)
        return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
        new THREE.LineSegments(e,t);
    THREE.Object3D.call(this),
    this.type = "Line",
    this.geometry = void 0 !== e ? e : new THREE.BufferGeometry,
    this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    })
}
,
THREE.Line.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Line,
    raycast: function() {
        var e = new THREE.Matrix4
          , t = new THREE.Ray
          , r = new THREE.Sphere;
        return function(i, n) {
            var a = i.linePrecision
              , o = a * a
              , s = this.geometry
              , c = this.matrixWorld;
            if (null === s.boundingSphere && s.computeBoundingSphere(),
            r.copy(s.boundingSphere),
            r.applyMatrix4(c),
            !1 !== i.ray.intersectsSphere(r)) {
                e.getInverse(c),
                t.copy(i.ray).applyMatrix4(e);
                var h = new THREE.Vector3
                  , l = new THREE.Vector3
                  , u = new THREE.Vector3
                  , p = new THREE.Vector3
                  , d = this instanceof THREE.LineSegments ? 2 : 1;
                if (s instanceof THREE.BufferGeometry) {
                    var f = s.index
                      , E = s.attributes.position.array;
                    if (null !== f)
                        for (var m = f.array, g = 0, v = m.length - 1; g < v; g += d) {
                            var T = m[g]
                              , y = m[g + 1];
                            h.fromArray(E, 3 * T),
                            l.fromArray(E, 3 * y);
                            if (!((H = t.distanceSqToSegment(h, l, p, u)) > o)) {
                                p.applyMatrix4(this.matrixWorld);
                                (b = i.ray.origin.distanceTo(p)) < i.near || b > i.far || n.push({
                                    distance: b,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    else
                        for (var g = 0, v = E.length / 3 - 1; g < v; g += d) {
                            h.fromArray(E, 3 * g),
                            l.fromArray(E, 3 * g + 3);
                            if (!((H = t.distanceSqToSegment(h, l, p, u)) > o)) {
                                p.applyMatrix4(this.matrixWorld);
                                (b = i.ray.origin.distanceTo(p)) < i.near || b > i.far || n.push({
                                    distance: b,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: g,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                } else if (s instanceof THREE.Geometry)
                    for (var R = s.vertices, x = R.length, g = 0; g < x - 1; g += d) {
                        var H = t.distanceSqToSegment(R[g], R[g + 1], p, u);
                        if (!(H > o)) {
                            p.applyMatrix4(this.matrixWorld);
                            var b = i.ray.origin.distanceTo(p);
                            b < i.near || b > i.far || n.push({
                                distance: b,
                                point: u.clone().applyMatrix4(this.matrixWorld),
                                index: g,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
            }
        }
    }(),
    clone: function() {
        return new this.constructor(this.geometry,this.material).copy(this)
    }
}),
THREE.LineSegments = function(e, t) {
    THREE.Line.call(this, e, t),
    this.type = "LineSegments"
}
,
THREE.LineSegments.prototype = Object.assign(Object.create(THREE.Line.prototype), {
    constructor: THREE.LineSegments
}),
THREE.Mesh = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Mesh",
    this.geometry = void 0 !== e ? e : new THREE.BufferGeometry,
    this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    }),
    this.drawMode = THREE.TrianglesDrawMode,
    this.updateMorphTargets()
}
,
THREE.Mesh.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Mesh,
    setDrawMode: function(e) {
        this.drawMode = e
    },
    copy: function(e) {
        return THREE.Object3D.prototype.copy.call(this, e),
        this.drawMode = e.drawMode,
        this
    },
    updateMorphTargets: function() {
        if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
            this.morphTargetBase = -1,
            this.morphTargetInfluences = [],
            this.morphTargetDictionary = {};
            for (var e = 0, t = this.geometry.morphTargets.length; e < t; e++)
                this.morphTargetInfluences.push(0),
                this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
        }
    },
    getMorphTargetIndexByName: function(e) {
        return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."),
        0)
    },
    raycast: function() {
        function e(e, t, r, i, n, a, o) {
            return THREE.Triangle.barycoordFromPoint(e, t, r, i, E),
            n.multiplyScalar(E.x),
            a.multiplyScalar(E.y),
            o.multiplyScalar(E.z),
            n.add(a).add(o),
            n.clone()
        }
        function t(e, t, r, i, n, a, o) {
            var s = e.material;
            if (null === (s.side === THREE.BackSide ? r.intersectTriangle(a, n, i, !0, o) : r.intersectTriangle(i, n, a, s.side !== THREE.DoubleSide, o)))
                return null;
            g.copy(o),
            g.applyMatrix4(e.matrixWorld);
            var c = t.ray.origin.distanceTo(g);
            return c < t.near || c > t.far ? null : {
                distance: c,
                point: g.clone(),
                object: e
            }
        }
        function r(r, i, n, a, h, l, u, E) {
            o.fromArray(a, 3 * l),
            s.fromArray(a, 3 * u),
            c.fromArray(a, 3 * E);
            var g = t(r, i, n, o, s, c, m);
            return g && (h && (p.fromArray(h, 2 * l),
            d.fromArray(h, 2 * u),
            f.fromArray(h, 2 * E),
            g.uv = e(m, o, s, c, p, d, f)),
            g.face = new THREE.Face3(l,u,E,THREE.Triangle.normal(o, s, c)),
            g.faceIndex = l),
            g
        }
        var i = new THREE.Matrix4
          , n = new THREE.Ray
          , a = new THREE.Sphere
          , o = new THREE.Vector3
          , s = new THREE.Vector3
          , c = new THREE.Vector3
          , h = new THREE.Vector3
          , l = new THREE.Vector3
          , u = new THREE.Vector3
          , p = new THREE.Vector2
          , d = new THREE.Vector2
          , f = new THREE.Vector2
          , E = new THREE.Vector3
          , m = new THREE.Vector3
          , g = new THREE.Vector3;
        return function(E, g) {
            var v = this.geometry
              , T = this.material
              , y = this.matrixWorld;
            if (void 0 !== T && (null === v.boundingSphere && v.computeBoundingSphere(),
            a.copy(v.boundingSphere),
            a.applyMatrix4(y),
            !1 !== E.ray.intersectsSphere(a) && (i.getInverse(y),
            n.copy(E.ray).applyMatrix4(i),
            null === v.boundingBox || !1 !== n.intersectsBox(v.boundingBox)))) {
                var R, x;
                if (v instanceof THREE.BufferGeometry) {
                    var H, b, _, M = v.index, w = v.attributes, S = w.position.array;
                    if (void 0 !== w.uv && (R = w.uv.array),
                    null !== M)
                        for (var A = M.array, L = 0, C = A.length; L < C; L += 3)
                            H = A[L],
                            b = A[L + 1],
                            _ = A[L + 2],
                            (x = r(this, E, n, S, R, H, b, _)) && (x.faceIndex = Math.floor(L / 3),
                            g.push(x));
                    else
                        for (var L = 0, C = S.length; L < C; L += 9)
                            (x = r(this, E, n, S, R, H = L / 3, b = H + 1, _ = H + 2)) && (x.index = H,
                            g.push(x))
                } else if (v instanceof THREE.Geometry) {
                    var P, B, U, D = T instanceof THREE.MultiMaterial, I = !0 === D ? T.materials : null, F = v.vertices, N = v.faces, O = v.faceVertexUvs[0];
                    O.length > 0 && (R = O);
                    for (var G = 0, V = N.length; G < V; G++) {
                        var z = N[G]
                          , k = !0 === D ? I[z.materialIndex] : T;
                        if (void 0 !== k) {
                            if (P = F[z.a],
                            B = F[z.b],
                            U = F[z.c],
                            !0 === k.morphTargets) {
                                var j = v.morphTargets
                                  , W = this.morphTargetInfluences;
                                o.set(0, 0, 0),
                                s.set(0, 0, 0),
                                c.set(0, 0, 0);
                                for (var X = 0, q = j.length; X < q; X++) {
                                    var Y = W[X];
                                    if (0 !== Y) {
                                        var Z = j[X].vertices;
                                        o.addScaledVector(h.subVectors(Z[z.a], P), Y),
                                        s.addScaledVector(l.subVectors(Z[z.b], B), Y),
                                        c.addScaledVector(u.subVectors(Z[z.c], U), Y)
                                    }
                                }
                                o.add(P),
                                s.add(B),
                                c.add(U),
                                P = o,
                                B = s,
                                U = c
                            }
                            if (x = t(this, E, n, P, B, U, m)) {
                                if (R) {
                                    var K = R[G];
                                    p.copy(K[0]),
                                    d.copy(K[1]),
                                    f.copy(K[2]),
                                    x.uv = e(m, P, B, U, p, d, f)
                                }
                                x.face = z,
                                x.faceIndex = G,
                                g.push(x)
                            }
                        }
                    }
                }
            }
        }
    }(),
    clone: function() {
        return new this.constructor(this.geometry,this.material).copy(this)
    }
}),
THREE.Bone = function(e) {
    THREE.Object3D.call(this),
    this.type = "Bone",
    this.skin = e
}
,
THREE.Bone.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Bone,
    copy: function(e) {
        return THREE.Object3D.prototype.copy.call(this, e),
        this.skin = e.skin,
        this
    }
}),
THREE.Skeleton = function(e, t, r) {
    if (this.useVertexTexture = void 0 === r || r,
    this.identityMatrix = new THREE.Matrix4,
    e = e || [],
    this.bones = e.slice(0),
    this.useVertexTexture) {
        var i = Math.sqrt(4 * this.bones.length);
        i = THREE.Math.nextPowerOfTwo(Math.ceil(i)),
        i = Math.max(i, 4),
        this.boneTextureWidth = i,
        this.boneTextureHeight = i,
        this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
        this.boneTexture = new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)
    } else
        this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === t)
        this.calculateInverses();
    else if (this.bones.length === t.length)
        this.boneInverses = t.slice(0);
    else {
        console.warn("THREE.Skeleton bonInverses is the wrong length."),
        this.boneInverses = [];
        for (var n = 0, a = this.bones.length; n < a; n++)
            this.boneInverses.push(new THREE.Matrix4)
    }
}
,
Object.assign(THREE.Skeleton.prototype, {
    calculateInverses: function() {
        this.boneInverses = [];
        for (var e = 0, t = this.bones.length; e < t; e++) {
            var r = new THREE.Matrix4;
            this.bones[e] && r.getInverse(this.bones[e].matrixWorld),
            this.boneInverses.push(r)
        }
    },
    pose: function() {
        for (var e, t = 0, r = this.bones.length; t < r; t++)
            (e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
        for (var t = 0, r = this.bones.length; t < r; t++)
            (e = this.bones[t]) && (e.parent instanceof THREE.Bone ? (e.matrix.getInverse(e.parent.matrixWorld),
            e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
            e.matrix.decompose(e.position, e.quaternion, e.scale))
    },
    update: function() {
        var e = new THREE.Matrix4;
        return function() {
            for (var t = 0, r = this.bones.length; t < r; t++) {
                var i = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
                e.multiplyMatrices(i, this.boneInverses[t]),
                e.toArray(this.boneMatrices, 16 * t)
            }
            this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
        }
    }(),
    clone: function() {
        return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)
    }
}),
THREE.SkinnedMesh = function(e, t, r) {
    THREE.Mesh.call(this, e, t),
    this.type = "SkinnedMesh",
    this.bindMode = "attached",
    this.bindMatrix = new THREE.Matrix4,
    this.bindMatrixInverse = new THREE.Matrix4;
    var i = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (var n, a, o = 0, s = this.geometry.bones.length; o < s; ++o)
            a = this.geometry.bones[o],
            n = new THREE.Bone(this),
            i.push(n),
            n.name = a.name,
            n.position.fromArray(a.pos),
            n.quaternion.fromArray(a.rotq),
            void 0 !== a.scl && n.scale.fromArray(a.scl);
        for (var o = 0, s = this.geometry.bones.length; o < s; ++o)
            -1 !== (a = this.geometry.bones[o]).parent && null !== a.parent && void 0 !== i[a.parent] ? i[a.parent].add(i[o]) : this.add(i[o])
    }
    this.normalizeSkinWeights(),
    this.updateMatrixWorld(!0),
    this.bind(new THREE.Skeleton(i,void 0,r), this.matrixWorld)
}
,
THREE.SkinnedMesh.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {
    constructor: THREE.SkinnedMesh,
    bind: function(e, t) {
        this.skeleton = e,
        void 0 === t && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.getInverse(t)
    },
    pose: function() {
        this.skeleton.pose()
    },
    normalizeSkinWeights: function() {
        if (this.geometry instanceof THREE.Geometry)
            for (i = 0; i < this.geometry.skinWeights.length; i++) {
                var e = this.geometry.skinWeights[i];
                (n = 1 / e.lengthManhattan()) !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0)
            }
        else if (this.geometry instanceof THREE.BufferGeometry)
            for (var t = new THREE.Vector4, r = this.geometry.attributes.skinWeight, i = 0; i < r.count; i++) {
                t.x = r.getX(i),
                t.y = r.getY(i),
                t.z = r.getZ(i),
                t.w = r.getW(i);
                var n = 1 / t.lengthManhattan();
                n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0),
                r.setXYZW(i, t.x, t.y, t.z, t.w)
            }
    },
    updateMatrixWorld: function(e) {
        THREE.Mesh.prototype.updateMatrixWorld.call(this, !0),
        "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
    },
    clone: function() {
        return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)
    }
}),
THREE.LOD = function() {
    THREE.Object3D.call(this),
    this.type = "LOD",
    Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        }
    })
}
,
THREE.LOD.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.LOD,
    copy: function(e) {
        THREE.Object3D.prototype.copy.call(this, e, !1);
        for (var t = e.levels, r = 0, i = t.length; r < i; r++) {
            var n = t[r];
            this.addLevel(n.object.clone(), n.distance)
        }
        return this
    },
    addLevel: function(e, t) {
        void 0 === t && (t = 0),
        t = Math.abs(t);
        for (var r = this.levels, i = 0; i < r.length && !(t < r[i].distance); i++)
            ;
        r.splice(i, 0, {
            distance: t,
            object: e
        }),
        this.add(e)
    },
    getObjectForDistance: function(e) {
        for (var t = this.levels, r = 1, i = t.length; r < i && !(e < t[r].distance); r++)
            ;
        return t[r - 1].object
    },
    raycast: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            e.setFromMatrixPosition(this.matrixWorld);
            var i = t.ray.origin.distanceTo(e);
            this.getObjectForDistance(i).raycast(t, r)
        }
    }(),
    update: function() {
        var e = new THREE.Vector3
          , t = new THREE.Vector3;
        return function(r) {
            var i = this.levels;
            if (i.length > 1) {
                e.setFromMatrixPosition(r.matrixWorld),
                t.setFromMatrixPosition(this.matrixWorld);
                var n = e.distanceTo(t);
                i[0].object.visible = !0;
                for (var a = 1, o = i.length; a < o && n >= i[a].distance; a++)
                    i[a - 1].object.visible = !1,
                    i[a].object.visible = !0;
                for (; a < o; a++)
                    i[a].object.visible = !1
            }
        }
    }(),
    toJSON: function(e) {
        var t = THREE.Object3D.prototype.toJSON.call(this, e);
        t.object.levels = [];
        for (var r = this.levels, i = 0, n = r.length; i < n; i++) {
            var a = r[i];
            t.object.levels.push({
                object: a.object.uuid,
                distance: a.distance
            })
        }
        return t
    }
}),
THREE.Sprite = function(e) {
    THREE.Object3D.call(this),
    this.type = "Sprite",
    this.material = void 0 !== e ? e : new THREE.SpriteMaterial
}
,
THREE.Sprite.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.Sprite,
    raycast: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            e.setFromMatrixPosition(this.matrixWorld);
            var i = t.ray.distanceSqToPoint(e);
            i > this.scale.x * this.scale.y / 4 || r.push({
                distance: Math.sqrt(i),
                point: this.position,
                face: null,
                object: this
            })
        }
    }(),
    clone: function() {
        return new this.constructor(this.material).copy(this)
    }
}),
THREE.LensFlare = function(e, t, r, i, n) {
    THREE.Object3D.call(this),
    this.lensFlares = [],
    this.positionScreen = new THREE.Vector3,
    this.customUpdateCallback = void 0,
    void 0 !== e && this.add(e, t, r, i, n)
}
,
THREE.LensFlare.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
    constructor: THREE.LensFlare,
    copy: function(e) {
        THREE.Object3D.prototype.copy.call(this, e),
        this.positionScreen.copy(e.positionScreen),
        this.customUpdateCallback = e.customUpdateCallback;
        for (var t = 0, r = e.lensFlares.length; t < r; t++)
            this.lensFlares.push(e.lensFlares[t]);
        return this
    },
    add: function(e, t, r, i, n, a) {
        void 0 === t && (t = -1),
        void 0 === r && (r = 0),
        void 0 === a && (a = 1),
        void 0 === n && (n = new THREE.Color(16777215)),
        void 0 === i && (i = THREE.NormalBlending),
        r = Math.min(r, Math.max(0, r)),
        this.lensFlares.push({
            texture: e,
            size: t,
            distance: r,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotation: 0,
            opacity: a,
            color: n,
            blending: i
        })
    },
    updateLensFlares: function() {
        var e, t, r = this.lensFlares.length, i = 2 * -this.positionScreen.x, n = 2 * -this.positionScreen.y;
        for (e = 0; e < r; e++)
            (t = this.lensFlares[e]).x = this.positionScreen.x + i * t.distance,
            t.y = this.positionScreen.y + n * t.distance,
            t.wantedRotation = t.x * Math.PI * .25,
            t.rotation += .25 * (t.wantedRotation - t.rotation)
    }
}),
THREE.Scene = function() {
    THREE.Object3D.call(this),
    this.type = "Scene",
    this.background = null,
    this.fog = null,
    this.overrideMaterial = null,
    this.autoUpdate = !0
}
,
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),
THREE.Scene.prototype.constructor = THREE.Scene,
THREE.Scene.prototype.copy = function(e, t) {
    return THREE.Object3D.prototype.copy.call(this, e, t),
    null !== e.background && (this.background = e.background.clone()),
    null !== e.fog && (this.fog = e.fog.clone()),
    null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
    this.autoUpdate = e.autoUpdate,
    this.matrixAutoUpdate = e.matrixAutoUpdate,
    this
}
,
THREE.Fog = function(e, t, r) {
    this.name = "",
    this.color = new THREE.Color(e),
    this.near = void 0 !== t ? t : 1,
    this.far = void 0 !== r ? r : 1e3
}
,
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(),this.near,this.far)
}
,
THREE.FogExp2 = function(e, t) {
    this.name = "",
    this.color = new THREE.Color(e),
    this.density = void 0 !== t ? t : 25e-5
}
,
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(),this.density)
}
,
THREE.ShaderChunk = {},
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",
THREE.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
THREE.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n#endif\n",
THREE.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
THREE.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
THREE.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
THREE.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",
THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\boot\tif(absDirection.x > absDirection.y )\n\boot\boot\tface = direction.x > 0.0 ? 0 : 3;\n\boot\telse\n\boot\boot\tface = direction.y > 0.0 ? 1 : 4;\n\boot}\n\telse {\n\boot\tif(absDirection.z > absDirection.y )\n\boot\boot\tface = direction.z > 0.0 ? 2 : 5;\n\boot\telse\n\boot\boot\tface = direction.y > 0.0 ? 1 : 4;\n\boot}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\boot\tr = vec3(direction.x, -direction.z, direction.y);\n\boot\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\boot\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\boot}\n\telse if( face == 1) {\n\boot\tr = vec3(direction.y, direction.x, direction.z);\n\boot\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\boot\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\boot}\n\telse if( face == 2) {\n\boot\tr = vec3(direction.z, direction.x, direction.y);\n\boot\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\boot\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\boot}\n\telse if( face == 3) {\n\boot\tr = vec3(direction.x, direction.z, direction.y);\n\boot\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\boot\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\boot}\n\telse if( face == 4) {\n\boot\tr = vec3(direction.y, direction.x, -direction.z);\n\boot\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\boot\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\boot}\n\telse {\n\boot\tr = vec3(direction.z, -direction.x, direction.y);\n\boot\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\boot\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\boot}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat boot = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, boot);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
THREE.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
THREE.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
THREE.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
THREE.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
THREE.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
THREE.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
THREE.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",
THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
THREE.ShaderChunk.normal_flip = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",
THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\boot\tvec3 q0 = dFdx( eye_pos.xyz );\n\boot\tvec3 q1 = dFdy( eye_pos.xyz );\n\boot\tvec2 st0 = dFdx( vUv.st );\n\boot\tvec2 st1 = dFdy( vUv.st );\n\boot\tvec3 S = normalize( q0 * st1.boot - q1 * st0.boot );\n\boot\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\boot\tvec3 N = normalize( surf_norm );\n\boot\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\boot\tmapN.xy = normalScale * mapN.xy;\n\boot\tmat3 tsn = mat3( S, T, N );\n\boot\treturn normalize( tsn * mapN );\n\boot}\n#endif\n",
THREE.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",
THREE.UniformsUtils = {
    merge: function(e) {
        for (var t = {}, r = 0; r < e.length; r++) {
            var i = this.clone(e[r]);
            for (var n in i)
                t[n] = i[n]
        }
        return t
    },
    clone: function(e) {
        var t = {};
        for (var r in e) {
            t[r] = {};
            for (var i in e[r]) {
                var n = e[r][i];
                n instanceof THREE.Color || n instanceof THREE.Vector2 || n instanceof THREE.Vector3 || n instanceof THREE.Vector4 || n instanceof THREE.Matrix3 || n instanceof THREE.Matrix4 || n instanceof THREE.Texture ? t[r][i] = n.clone() : Array.isArray(n) ? t[r][i] = n.slice() : t[r][i] = n
            }
        }
        return t
    }
},
THREE.UniformsLib = {
    common: {
        diffuse: {
            value: new THREE.Color(15658734)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        offsetRepeat: {
            value: new THREE.Vector4(0,0,1,1)
        },
        specularMap: {
            value: null
        },
        alphaMap: {
            value: null
        },
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new THREE.Vector2(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {
            value: []
        },
        spotShadowMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {},
                shadow: {},
                shadowBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        }
    },
    points: {
        diffuse: {
            value: new THREE.Color(15658734)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        offsetRepeat: {
            value: new THREE.Vector4(0,0,1,1)
        }
    }
},
THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
THREE.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
THREE.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n",
THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
THREE.ShaderChunk.meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n",
THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
THREE.ShaderChunk.shadow_frag = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n",
THREE.ShaderChunk.shadow_vert = "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.meshbasic_vert,
        fragmentShader: THREE.ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                value: new THREE.Color(0)
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshlambert_vert,
        fragmentShader: THREE.ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                value: new THREE.Color(0)
            },
            specular: {
                value: new THREE.Color(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphong_vert,
        fragmentShader: THREE.ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                value: new THREE.Color(0)
            },
            roughness: {
                value: .5
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphysical_vert,
        fragmentShader: THREE.ShaderChunk.meshphysical_frag
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.points_vert,
        fragmentShader: THREE.ShaderChunk.points_frag
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: THREE.ShaderChunk.linedashed_vert,
        fragmentShader: THREE.ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.displacementmap]),
        vertexShader: THREE.ShaderChunk.depth_vert,
        fragmentShader: THREE.ShaderChunk.depth_frag
    },
    normal: {
        uniforms: {
            opacity: {
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.normal_vert,
        fragmentShader: THREE.ShaderChunk.normal_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.cube_vert,
        fragmentShader: THREE.ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            },
            tFlip: {
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.equirect_vert,
        fragmentShader: THREE.ShaderChunk.equirect_frag
    },
    distanceRGBA: {
        uniforms: {
            lightPos: {
                value: new THREE.Vector3
            }
        },
        vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
        fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
    }
},
THREE.ShaderLib.physical = {
    uniforms: THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms, {
        clearCoat: {
            value: 0
        },
        clearCoatRoughness: {
            value: 0
        }
    }]),
    vertexShader: THREE.ShaderChunk.meshphysical_vert,
    fragmentShader: THREE.ShaderChunk.meshphysical_frag
},
THREE.WebGLRenderer = function(e) {
    function t() {
        return null === O ? J : 1
    }
    function r(e, t, r, i) {
        !0 === w && (e *= i,
        t *= i,
        r *= i),
        Ee.clearColor(e, t, r, i)
    }
    function i() {
        Ee.init(),
        Ee.scissor(j.copy($).multiplyScalar(J)),
        Ee.viewport(X.copy(te).multiplyScalar(J)),
        r(Y.r, Y.g, Y.b, Z)
    }
    function n() {
        N = null,
        k = null,
        z = "",
        V = -1,
        Ee.reset()
    }
    function a(e) {
        e.preventDefault(),
        n(),
        i(),
        me.clear()
    }
    function o(e) {
        var t = e.target;
        t.removeEventListener("dispose", o),
        function(e) {
            s(e),
            me.delete(e)
        }(t)
    }
    function s(e) {
        var t = me.get(e).program;
        e.program = void 0,
        void 0 !== t && Te.releaseProgram(t)
    }
    function c(e, t) {
        return Math.abs(t[0]) - Math.abs(e[0])
    }
    function h(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }
    function l(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }
    function u(e, t, r, i, n) {
        var a, o;
        r.transparent ? (a = P,
        o = ++B) : (a = L,
        o = ++C);
        var s = a[o];
        void 0 !== s ? (s.id = e.id,
        s.object = e,
        s.geometry = t,
        s.material = r,
        s.z = ce.z,
        s.group = n) : (s = {
            id: e.id,
            object: e,
            geometry: t,
            material: r,
            z: ce.z,
            group: n
        },
        a.push(s))
    }
    function p(e) {
        if (!re.intersectsSphere(e))
            return !1;
        var t = ie.numPlanes;
        if (0 === t)
            return !0;
        var r = F.clippingPlanes
          , i = e.center
          , n = -e.radius
          , a = 0;
        do {
            if (r[a].distanceToPoint(i) < n)
                return !1
        } while (++a !== t);
        return !0
    }
    function d(e, t) {
        if (!1 !== e.visible) {
            if (e.layers.test(t.layers))
                if (e instanceof THREE.Light)
                    A.push(e);
                else if (e instanceof THREE.Sprite)
                    !1 !== e.frustumCulled && !0 !== function(e) {
                        return oe.center.set(0, 0, 0),
                        oe.radius = .7071067811865476,
                        oe.applyMatrix4(e.matrixWorld),
                        p(oe)
                    }(e) || D.push(e);
                else if (e instanceof THREE.LensFlare)
                    I.push(e);
                else if (e instanceof THREE.ImmediateRenderObject)
                    !0 === F.sortObjects && (ce.setFromMatrixPosition(e.matrixWorld),
                    ce.applyProjection(se)),
                    u(e, null, e.material, ce.z, null);
                else if ((e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && (e instanceof THREE.SkinnedMesh && e.skeleton.update(),
                !1 === e.frustumCulled || !0 === function(e) {
                    var t = e.geometry;
                    return null === t.boundingSphere && t.computeBoundingSphere(),
                    oe.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
                    p(oe)
                }(e))) {
                    var r = e.material;
                    if (!0 === r.visible) {
                        !0 === F.sortObjects && (ce.setFromMatrixPosition(e.matrixWorld),
                        ce.applyProjection(se));
                        var i = ve.update(e);
                        if (r instanceof THREE.MultiMaterial)
                            for (var n = i.groups, a = r.materials, o = 0, s = n.length; o < s; o++) {
                                var c = n[o]
                                  , h = a[c.materialIndex];
                                !0 === h.visible && u(e, i, h, ce.z, c)
                            }
                        else
                            u(e, i, r, ce.z, null)
                    }
                }
            for (var l = e.children, o = 0, s = l.length; o < s; o++)
                d(l[o], t)
        }
    }
    function f(e, t, r, i) {
        for (var n = 0, a = e.length; n < a; n++) {
            var o = e[n]
              , s = o.object
              , c = o.geometry
              , h = void 0 === i ? o.material : i
              , l = o.group;
            if (s.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, s.matrixWorld),
            s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
            s instanceof THREE.ImmediateRenderObject) {
                E(h);
                var u = m(t, r, h, s);
                z = "",
                s.render(function(e) {
                    F.renderBufferImmediate(e, u, h)
                })
            } else
                F.renderBufferDirect(t, r, c, h, s, l)
        }
    }
    function E(e) {
        e.side !== THREE.DoubleSide ? Ee.enable(ue.CULL_FACE) : Ee.disable(ue.CULL_FACE),
        Ee.setFlipSided(e.side === THREE.BackSide),
        !0 === e.transparent ? Ee.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : Ee.setBlending(THREE.NoBlending),
        Ee.setDepthFunc(e.depthFunc),
        Ee.setDepthTest(e.depthTest),
        Ee.setDepthWrite(e.depthWrite),
        Ee.setColorWrite(e.colorWrite),
        Ee.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
    }
    function m(e, t, r, i) {
        q = 0;
        var n = me.get(r);
        if (ne) {
            if (ae || e !== k) {
                var a = e === k && r.id === V;
                ie.setState(r.clippingPlanes, r.clipShadows, e, n, a)
            }
            void 0 !== n.numClippingPlanes && n.numClippingPlanes !== ie.numPlanes && (r.needsUpdate = !0)
        }
        void 0 === n.program && (r.needsUpdate = !0),
        void 0 !== n.lightsHash && n.lightsHash !== he.hash && (r.needsUpdate = !0),
        r.needsUpdate && (!function(e, t, r) {
            var i = me.get(e)
              , n = Te.getParameters(e, he, t, ie.numPlanes, r)
              , a = Te.getProgramCode(e, n)
              , c = i.program
              , h = !0;
            if (void 0 === c)
                e.addEventListener("dispose", o);
            else if (c.code !== a)
                s(e);
            else {
                if (void 0 !== n.shaderID)
                    return;
                h = !1
            }
            if (h) {
                if (n.shaderID) {
                    var l = THREE.ShaderLib[n.shaderID];
                    i.__webglShader = {
                        name: e.type,
                        uniforms: THREE.UniformsUtils.clone(l.uniforms),
                        vertexShader: l.vertexShader,
                        fragmentShader: l.fragmentShader
                    }
                } else
                    i.__webglShader = {
                        name: e.type,
                        uniforms: e.uniforms,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader
                    };
                e.__webglShader = i.__webglShader,
                c = Te.acquireProgram(e, n, a),
                i.program = c,
                e.program = c
            }
            var u = c.getAttributes();
            if (e.morphTargets)
                for (e.numSupportedMorphTargets = 0,
                p = 0; p < F.maxMorphTargets; p++)
                    u["morphTarget" + p] >= 0 && e.numSupportedMorphTargets++;
            if (e.morphNormals) {
                e.numSupportedMorphNormals = 0;
                for (var p = 0; p < F.maxMorphNormals; p++)
                    u["morphNormal" + p] >= 0 && e.numSupportedMorphNormals++
            }
            var d = i.__webglShader.uniforms;
            (e instanceof THREE.ShaderMaterial || e instanceof THREE.RawShaderMaterial) && !0 !== e.clipping || (i.numClippingPlanes = ie.numPlanes,
            d.clippingPlanes = ie.uniform),
            e.lights && (i.lightsHash = he.hash,
            d.ambientLightColor.value = he.ambient,
            d.directionalLights.value = he.directional,
            d.spotLights.value = he.spot,
            d.pointLights.value = he.point,
            d.hemisphereLights.value = he.hemi,
            d.directionalShadowMap.value = he.directionalShadowMap,
            d.directionalShadowMatrix.value = he.directionalShadowMatrix,
            d.spotShadowMap.value = he.spotShadowMap,
            d.spotShadowMatrix.value = he.spotShadowMatrix,
            d.pointShadowMap.value = he.pointShadowMap,
            d.pointShadowMatrix.value = he.pointShadowMatrix);
            var f = i.program.getUniforms()
              , E = THREE.WebGLUniforms.seqWithValue(f.seq, d);
            i.uniformsList = E,
            i.dynamicUniforms = THREE.WebGLUniforms.splitDynamic(E, d)
        }(r, t, i),
        r.needsUpdate = !1);
        var c = !1
          , h = !1
          , l = !1
          , u = n.program
          , p = u.getUniforms()
          , d = n.__webglShader.uniforms;
        if (u.id !== N && (ue.useProgram(u.program),
        N = u.id,
        c = !0,
        h = !0,
        l = !0),
        r.id !== V && (V = r.id,
        h = !0),
        c || e !== k) {
            if (p.set(ue, e, "projectionMatrix"),
            fe.logarithmicDepthBuffer && p.setValue(ue, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
            e !== k && (k = e,
            h = !0,
            l = !0),
            r instanceof THREE.ShaderMaterial || r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshStandardMaterial || r.envMap) {
                var f = p.map.cameraPosition;
                void 0 !== f && f.setValue(ue, ce.setFromMatrixPosition(e.matrixWorld))
            }
            (r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshLambertMaterial || r instanceof THREE.MeshBasicMaterial || r instanceof THREE.MeshStandardMaterial || r instanceof THREE.ShaderMaterial || r.skinning) && p.setValue(ue, "viewMatrix", e.matrixWorldInverse),
            p.set(ue, F, "toneMappingExposure"),
            p.set(ue, F, "toneMappingWhitePoint")
        }
        if (r.skinning) {
            p.setOptional(ue, i, "bindMatrix"),
            p.setOptional(ue, i, "bindMatrixInverse");
            var E = i.skeleton;
            E && (fe.floatVertexTextures && E.useVertexTexture ? (p.set(ue, E, "boneTexture"),
            p.set(ue, E, "boneTextureWidth"),
            p.set(ue, E, "boneTextureHeight")) : p.setOptional(ue, E, "boneMatrices"))
        }
        h && (r.lights && function(e, t) {
            e.ambientLightColor.needsUpdate = t,
            e.directionalLights.needsUpdate = t,
            e.pointLights.needsUpdate = t,
            e.spotLights.needsUpdate = t,
            e.hemisphereLights.needsUpdate = t
        }(d, l),
        t && r.fog && function(e, t) {
            e.fogColor.value = t.color,
            t instanceof THREE.Fog ? (e.fogNear.value = t.near,
            e.fogFar.value = t.far) : t instanceof THREE.FogExp2 && (e.fogDensity.value = t.density)
        }(d, t),
        (r instanceof THREE.MeshBasicMaterial || r instanceof THREE.MeshLambertMaterial || r instanceof THREE.MeshPhongMaterial || r instanceof THREE.MeshStandardMaterial || r instanceof THREE.MeshDepthMaterial) && function(e, t) {
            e.opacity.value = t.opacity,
            e.diffuse.value = t.color,
            t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity);
            e.map.value = t.map,
            e.specularMap.value = t.specularMap,
            e.alphaMap.value = t.alphaMap,
            t.aoMap && (e.aoMap.value = t.aoMap,
            e.aoMapIntensity.value = t.aoMapIntensity);
            var r;
            t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.displacementMap ? r = t.displacementMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.roughnessMap ? r = t.roughnessMap : t.metalnessMap ? r = t.metalnessMap : t.alphaMap ? r = t.alphaMap : t.emissiveMap && (r = t.emissiveMap);
            if (void 0 !== r) {
                r instanceof THREE.WebGLRenderTarget && (r = r.texture);
                var i = r.offset
                  , n = r.repeat;
                e.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
            }
            e.envMap.value = t.envMap,
            e.flipEnvMap.value = t.envMap instanceof THREE.CubeTexture ? -1 : 1,
            e.reflectivity.value = t.reflectivity,
            e.refractionRatio.value = t.refractionRatio
        }(d, r),
        r instanceof THREE.LineBasicMaterial ? g(d, r) : r instanceof THREE.LineDashedMaterial ? (g(d, r),
        function(e, t) {
            e.dashSize.value = t.dashSize,
            e.totalSize.value = t.dashSize + t.gapSize,
            e.scale.value = t.scale
        }(d, r)) : r instanceof THREE.PointsMaterial ? function(e, t) {
            if (e.diffuse.value = t.color,
            e.opacity.value = t.opacity,
            e.size.value = t.size * J,
            e.scale.value = .5 * R.clientHeight,
            e.map.value = t.map,
            null !== t.map) {
                var r = t.map.offset
                  , i = t.map.repeat;
                e.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
            }
        }(d, r) : r instanceof THREE.MeshLambertMaterial ? function(e, t) {
            t.lightMap && (e.lightMap.value = t.lightMap,
            e.lightMapIntensity.value = t.lightMapIntensity);
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
        }(d, r) : r instanceof THREE.MeshPhongMaterial ? function(e, t) {
            e.specular.value = t.specular,
            e.shininess.value = Math.max(t.shininess, 1e-4),
            t.lightMap && (e.lightMap.value = t.lightMap,
            e.lightMapIntensity.value = t.lightMapIntensity);
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
            t.bumpMap && (e.bumpMap.value = t.bumpMap,
            e.bumpScale.value = t.bumpScale);
            t.normalMap && (e.normalMap.value = t.normalMap,
            e.normalScale.value.copy(t.normalScale));
            t.displacementMap && (e.displacementMap.value = t.displacementMap,
            e.displacementScale.value = t.displacementScale,
            e.displacementBias.value = t.displacementBias)
        }(d, r) : r instanceof THREE.MeshPhysicalMaterial ? function(e, t) {
            e.clearCoat.value = t.clearCoat,
            e.clearCoatRoughness.value = t.clearCoatRoughness,
            v(e, t)
        }(d, r) : r instanceof THREE.MeshStandardMaterial ? v(d, r) : r instanceof THREE.MeshDepthMaterial ? r.displacementMap && (d.displacementMap.value = r.displacementMap,
        d.displacementScale.value = r.displacementScale,
        d.displacementBias.value = r.displacementBias) : r instanceof THREE.MeshNormalMaterial && (d.opacity.value = r.opacity),
        THREE.WebGLUniforms.upload(ue, n.uniformsList, d, F)),
        p.set(ue, i, "modelViewMatrix"),
        p.set(ue, i, "normalMatrix"),
        p.setValue(ue, "modelMatrix", i.matrixWorld);
        var m = n.dynamicUniforms;
        return null !== m && (THREE.WebGLUniforms.evalDynamic(m, d, i, e),
        THREE.WebGLUniforms.upload(ue, m, d, F)),
        u
    }
    function g(e, t) {
        e.diffuse.value = t.color,
        e.opacity.value = t.opacity
    }
    function v(e, t) {
        e.roughness.value = t.roughness,
        e.metalness.value = t.metalness,
        t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
        t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
        t.lightMap && (e.lightMap.value = t.lightMap,
        e.lightMapIntensity.value = t.lightMapIntensity),
        t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
        t.bumpMap && (e.bumpMap.value = t.bumpMap,
        e.bumpScale.value = t.bumpScale),
        t.normalMap && (e.normalMap.value = t.normalMap,
        e.normalScale.value.copy(t.normalScale)),
        t.displacementMap && (e.displacementMap.value = t.displacementMap,
        e.displacementScale.value = t.displacementScale,
        e.displacementBias.value = t.displacementBias),
        t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
    }
    function T(e, t) {
        var r, i, n, a, o, s, c, h = 0, l = 0, u = 0, p = t.matrixWorldInverse, d = 0, f = 0, E = 0, m = 0;
        for (r = 0,
        i = e.length; r < i; r++)
            if (n = e[r],
            a = n.color,
            o = n.intensity,
            s = n.distance,
            c = n.shadow && n.shadow.map ? n.shadow.map.texture : null,
            n instanceof THREE.AmbientLight)
                h += a.r * o,
                l += a.g * o,
                u += a.b * o;
            else if (n instanceof THREE.DirectionalLight) {
                (g = ye.get(n)).color.copy(n.color).multiplyScalar(n.intensity),
                g.direction.setFromMatrixPosition(n.matrixWorld),
                ce.setFromMatrixPosition(n.target.matrixWorld),
                g.direction.sub(ce),
                g.direction.transformDirection(p),
                g.shadow = n.castShadow,
                n.castShadow && (g.shadowBias = n.shadow.bias,
                g.shadowRadius = n.shadow.radius,
                g.shadowMapSize = n.shadow.mapSize),
                he.directionalShadowMap[d] = c,
                he.directionalShadowMatrix[d] = n.shadow.matrix,
                he.directional[d++] = g
            } else if (n instanceof THREE.SpotLight) {
                (g = ye.get(n)).position.setFromMatrixPosition(n.matrixWorld),
                g.position.applyMatrix4(p),
                g.color.copy(a).multiplyScalar(o),
                g.distance = s,
                g.direction.setFromMatrixPosition(n.matrixWorld),
                ce.setFromMatrixPosition(n.target.matrixWorld),
                g.direction.sub(ce),
                g.direction.transformDirection(p),
                g.coneCos = Math.cos(n.angle),
                g.penumbraCos = Math.cos(n.angle * (1 - n.penumbra)),
                g.decay = 0 === n.distance ? 0 : n.decay,
                g.shadow = n.castShadow,
                n.castShadow && (g.shadowBias = n.shadow.bias,
                g.shadowRadius = n.shadow.radius,
                g.shadowMapSize = n.shadow.mapSize),
                he.spotShadowMap[E] = c,
                he.spotShadowMatrix[E] = n.shadow.matrix,
                he.spot[E++] = g
            } else if (n instanceof THREE.PointLight) {
                (g = ye.get(n)).position.setFromMatrixPosition(n.matrixWorld),
                g.position.applyMatrix4(p),
                g.color.copy(n.color).multiplyScalar(n.intensity),
                g.distance = n.distance,
                g.decay = 0 === n.distance ? 0 : n.decay,
                g.shadow = n.castShadow,
                n.castShadow && (g.shadowBias = n.shadow.bias,
                g.shadowRadius = n.shadow.radius,
                g.shadowMapSize = n.shadow.mapSize),
                he.pointShadowMap[f] = c,
                void 0 === he.pointShadowMatrix[f] && (he.pointShadowMatrix[f] = new THREE.Matrix4),
                ce.setFromMatrixPosition(n.matrixWorld).negate(),
                he.pointShadowMatrix[f].identity().setPosition(ce),
                he.point[f++] = g
            } else if (n instanceof THREE.HemisphereLight) {
                var g = ye.get(n);
                g.direction.setFromMatrixPosition(n.matrixWorld),
                g.direction.transformDirection(p),
                g.direction.normalize(),
                g.skyColor.copy(n.color).multiplyScalar(o),
                g.groundColor.copy(n.groundColor).multiplyScalar(o),
                he.hemi[m++] = g
            }
        he.ambient[0] = h,
        he.ambient[1] = l,
        he.ambient[2] = u,
        he.directional.length = d,
        he.spot.length = E,
        he.point.length = f,
        he.hemi.length = m,
        he.hash = d + "," + f + "," + E + "," + m + "," + he.shadows.length
    }
    function y(e) {
        var t;
        if (e === THREE.RepeatWrapping)
            return ue.REPEAT;
        if (e === THREE.ClampToEdgeWrapping)
            return ue.CLAMP_TO_EDGE;
        if (e === THREE.MirroredRepeatWrapping)
            return ue.MIRRORED_REPEAT;
        if (e === THREE.NearestFilter)
            return ue.NEAREST;
        if (e === THREE.NearestMipMapNearestFilter)
            return ue.NEAREST_MIPMAP_NEAREST;
        if (e === THREE.NearestMipMapLinearFilter)
            return ue.NEAREST_MIPMAP_LINEAR;
        if (e === THREE.LinearFilter)
            return ue.LINEAR;
        if (e === THREE.LinearMipMapNearestFilter)
            return ue.LINEAR_MIPMAP_NEAREST;
        if (e === THREE.LinearMipMapLinearFilter)
            return ue.LINEAR_MIPMAP_LINEAR;
        if (e === THREE.UnsignedByteType)
            return ue.UNSIGNED_BYTE;
        if (e === THREE.UnsignedShort4444Type)
            return ue.UNSIGNED_SHORT_4_4_4_4;
        if (e === THREE.UnsignedShort5551Type)
            return ue.UNSIGNED_SHORT_5_5_5_1;
        if (e === THREE.UnsignedShort565Type)
            return ue.UNSIGNED_SHORT_5_6_5;
        if (e === THREE.ByteType)
            return ue.BYTE;
        if (e === THREE.ShortType)
            return ue.SHORT;
        if (e === THREE.UnsignedShortType)
            return ue.UNSIGNED_SHORT;
        if (e === THREE.IntType)
            return ue.INT;
        if (e === THREE.UnsignedIntType)
            return ue.UNSIGNED_INT;
        if (e === THREE.FloatType)
            return ue.FLOAT;
        if (null !== (t = de.get("OES_texture_half_float")) && e === THREE.HalfFloatType)
            return t.HALF_FLOAT_OES;
        if (e === THREE.AlphaFormat)
            return ue.ALPHA;
        if (e === THREE.RGBFormat)
            return ue.RGB;
        if (e === THREE.RGBAFormat)
            return ue.RGBA;
        if (e === THREE.LuminanceFormat)
            return ue.LUMINANCE;
        if (e === THREE.LuminanceAlphaFormat)
            return ue.LUMINANCE_ALPHA;
        if (e === THREE.DepthFormat)
            return ue.DEPTH_COMPONENT;
        if (e === THREE.AddEquation)
            return ue.FUNC_ADD;
        if (e === THREE.SubtractEquation)
            return ue.FUNC_SUBTRACT;
        if (e === THREE.ReverseSubtractEquation)
            return ue.FUNC_REVERSE_SUBTRACT;
        if (e === THREE.ZeroFactor)
            return ue.ZERO;
        if (e === THREE.OneFactor)
            return ue.ONE;
        if (e === THREE.SrcColorFactor)
            return ue.SRC_COLOR;
        if (e === THREE.OneMinusSrcColorFactor)
            return ue.ONE_MINUS_SRC_COLOR;
        if (e === THREE.SrcAlphaFactor)
            return ue.SRC_ALPHA;
        if (e === THREE.OneMinusSrcAlphaFactor)
            return ue.ONE_MINUS_SRC_ALPHA;
        if (e === THREE.DstAlphaFactor)
            return ue.DST_ALPHA;
        if (e === THREE.OneMinusDstAlphaFactor)
            return ue.ONE_MINUS_DST_ALPHA;
        if (e === THREE.DstColorFactor)
            return ue.DST_COLOR;
        if (e === THREE.OneMinusDstColorFactor)
            return ue.ONE_MINUS_DST_COLOR;
        if (e === THREE.SrcAlphaSaturateFactor)
            return ue.SRC_ALPHA_SATURATE;
        if (null !== (t = de.get("WEBGL_compressed_texture_s3tc"))) {
            if (e === THREE.RGB_S3TC_DXT1_Format)
                return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT1_Format)
                return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT3_Format)
                return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === THREE.RGBA_S3TC_DXT5_Format)
                return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (null !== (t = de.get("WEBGL_compressed_texture_pvrtc"))) {
            if (e === THREE.RGB_PVRTC_4BPPV1_Format)
                return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGB_PVRTC_2BPPV1_Format)
                return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_4BPPV1_Format)
                return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_2BPPV1_Format)
                return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (null !== (t = de.get("WEBGL_compressed_texture_etc1")) && e === THREE.RGB_ETC1_Format)
            return t.COMPRESSED_RGB_ETC1_WEBGL;
        if (null !== (t = de.get("EXT_blend_minmax"))) {
            if (e === THREE.MinEquation)
                return t.MIN_EXT;
            if (e === THREE.MaxEquation)
                return t.MAX_EXT
        }
        return 0
    }
    var R = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
      , x = void 0 !== e.context ? e.context : null
      , H = void 0 !== e.alpha && e.alpha
      , b = void 0 === e.depth || e.depth
      , _ = void 0 === e.stencil || e.stencil
      , M = void 0 !== e.antialias && e.antialias
      , w = void 0 === e.premultipliedAlpha || e.premultipliedAlpha
      , S = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer
      , A = []
      , L = []
      , C = -1
      , P = []
      , B = -1
      , U = new Float32Array(8)
      , D = []
      , I = [];
    this.domElement = R,
    this.context = null,
    this.autoClear = !0,
    this.autoClearColor = !0,
    this.autoClearDepth = !0,
    this.autoClearStencil = !0,
    this.sortObjects = !0,
    this.clippingPlanes = [],
    this.localClippingEnabled = !1,
    this.gammaFactor = 2,
    this.gammaInput = !1,
    this.gammaOutput = !1,
    this.physicallyCorrectLights = !1,
    this.toneMapping = THREE.LinearToneMapping,
    this.toneMappingExposure = 1,
    this.toneMappingWhitePoint = 1,
    this.maxMorphTargets = 8,
    this.maxMorphNormals = 4;
    var F = this
      , N = null
      , O = null
      , G = null
      , V = -1
      , z = ""
      , k = null
      , j = new THREE.Vector4
      , W = null
      , X = new THREE.Vector4
      , q = 0
      , Y = new THREE.Color(0)
      , Z = 0
      , K = R.width
      , Q = R.height
      , J = 1
      , $ = new THREE.Vector4(0,0,K,Q)
      , ee = !1
      , te = new THREE.Vector4(0,0,K,Q)
      , re = new THREE.Frustum
      , ie = new THREE.WebGLClipping
      , ne = !1
      , ae = !1
      , oe = new THREE.Sphere
      , se = new THREE.Matrix4
      , ce = new THREE.Vector3
      , he = {
        hash: "",
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        shadows: []
    }
      , le = {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
    };
    this.info = {
        render: le,
        memory: {
            geometries: 0,
            textures: 0
        },
        programs: null
    };
    var ue;
    try {
        var pe = {
            alpha: H,
            depth: b,
            stencil: _,
            antialias: M,
            premultipliedAlpha: w,
            preserveDrawingBuffer: S
        };
        if (null === (ue = x || R.getContext("webgl", pe) || R.getContext("experimental-webgl", pe)))
            throw null !== R.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
        void 0 === ue.getShaderPrecisionFormat && (ue.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        ),
        R.addEventListener("webglcontextlost", a, !1)
    } catch (e) {
        console.error("THREE.WebGLRenderer: " + e)
    }
    var de = new THREE.WebGLExtensions(ue);
    de.get("WEBGL_depth_texture"),
    de.get("OES_texture_float"),
    de.get("OES_texture_float_linear"),
    de.get("OES_texture_half_float"),
    de.get("OES_texture_half_float_linear"),
    de.get("OES_standard_derivatives"),
    de.get("ANGLE_instanced_arrays"),
    de.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var fe = new THREE.WebGLCapabilities(ue,de,e)
      , Ee = new THREE.WebGLState(ue,de,y)
      , me = new THREE.WebGLProperties
      , ge = new THREE.WebGLTextures(ue,de,Ee,me,fe,y,this.info)
      , ve = new THREE.WebGLObjects(ue,me,this.info)
      , Te = new THREE.WebGLPrograms(this,fe)
      , ye = new THREE.WebGLLights;
    this.info.programs = Te.programs;
    var Re = new THREE.WebGLBufferRenderer(ue,de,le)
      , xe = new THREE.WebGLIndexedBufferRenderer(ue,de,le)
      , He = new THREE.OrthographicCamera(-1,1,1,-1,0,1)
      , be = new THREE.PerspectiveCamera
      , _e = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),new THREE.MeshBasicMaterial({
        depthTest: !1,
        depthWrite: !1,
        fog: !1
    }))
      , Me = THREE.ShaderLib.cube
      , we = new THREE.Mesh(new THREE.BoxBufferGeometry(5,5,5),new THREE.ShaderMaterial({
        uniforms: Me.uniforms,
        vertexShader: Me.vertexShader,
        fragmentShader: Me.fragmentShader,
        side: THREE.BackSide,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
    }));
    i(),
    this.context = ue,
    this.capabilities = fe,
    this.extensions = de,
    this.properties = me,
    this.state = Ee;
    var Se = new THREE.WebGLShadowMap(this,he,ve,fe);
    this.shadowMap = Se;
    var Ae = new THREE.SpritePlugin(this,D)
      , Le = new THREE.LensFlarePlugin(this,I);
    this.getContext = function() {
        return ue
    }
    ,
    this.getContextAttributes = function() {
        return ue.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
        de.get("WEBGL_lose_context").loseContext()
    }
    ,
    this.getMaxAnisotropy = function() {
        return fe.getMaxAnisotropy()
    }
    ,
    this.getPrecision = function() {
        return fe.precision
    }
    ,
    this.getPixelRatio = function() {
        return J
    }
    ,
    this.setPixelRatio = function(e) {
        void 0 !== e && (J = e,
        this.setSize(te.z, te.w, !1))
    }
    ,
    this.getSize = function() {
        return {
            width: K,
            height: Q
        }
    }
    ,
    this.setSize = function(e, t, r) {
        K = e,
        Q = t,
        R.width = e * J,
        R.height = t * J,
        !1 !== r && (R.style.width = e + "px",
        R.style.height = t + "px"),
        this.setViewport(0, 0, e, t)
    }
    ,
    this.setViewport = function(e, t, r, i) {
        Ee.viewport(te.set(e, t, r, i))
    }
    ,
    this.setScissor = function(e, t, r, i) {
        Ee.scissor($.set(e, t, r, i))
    }
    ,
    this.setScissorTest = function(e) {
        Ee.setScissorTest(ee = e)
    }
    ,
    this.getClearColor = function() {
        return Y
    }
    ,
    this.setClearColor = function(e, t) {
        Y.set(e),
        Z = void 0 !== t ? t : 1,
        r(Y.r, Y.g, Y.b, Z)
    }
    ,
    this.getClearAlpha = function() {
        return Z
    }
    ,
    this.setClearAlpha = function(e) {
        Z = e,
        r(Y.r, Y.g, Y.b, Z)
    }
    ,
    this.clear = function(e, t, r) {
        var i = 0;
        (void 0 === e || e) && (i |= ue.COLOR_BUFFER_BIT),
        (void 0 === t || t) && (i |= ue.DEPTH_BUFFER_BIT),
        (void 0 === r || r) && (i |= ue.STENCIL_BUFFER_BIT),
        ue.clear(i)
    }
    ,
    this.clearColor = function() {
        this.clear(!0, !1, !1)
    }
    ,
    this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }
    ,
    this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }
    ,
    this.clearTarget = function(e, t, r, i) {
        this.setRenderTarget(e),
        this.clear(t, r, i)
    }
    ,
    this.resetGLState = n,
    this.dispose = function() {
        P = [],
        B = -1,
        L = [],
        C = -1,
        R.removeEventListener("webglcontextlost", a, !1)
    }
    ,
    this.renderBufferImmediate = function(e, t, r) {
        Ee.initAttributes();
        var i = me.get(e);
        e.hasPositions && !i.position && (i.position = ue.createBuffer()),
        e.hasNormals && !i.normal && (i.normal = ue.createBuffer()),
        e.hasUvs && !i.uv && (i.uv = ue.createBuffer()),
        e.hasColors && !i.color && (i.color = ue.createBuffer());
        var n = t.getAttributes();
        if (e.hasPositions && (ue.bindBuffer(ue.ARRAY_BUFFER, i.position),
        ue.bufferData(ue.ARRAY_BUFFER, e.positionArray, ue.DYNAMIC_DRAW),
        Ee.enableAttribute(n.position),
        ue.vertexAttribPointer(n.position, 3, ue.FLOAT, !1, 0, 0)),
        e.hasNormals) {
            if (ue.bindBuffer(ue.ARRAY_BUFFER, i.normal),
            "MeshPhongMaterial" !== r.type && "MeshStandardMaterial" !== r.type && "MeshPhysicalMaterial" !== r.type && r.shading === THREE.FlatShading)
                for (var a = 0, o = 3 * e.count; a < o; a += 9) {
                    var s = e.normalArray
                      , c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3
                      , h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3
                      , l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                    s[a + 0] = c,
                    s[a + 1] = h,
                    s[a + 2] = l,
                    s[a + 3] = c,
                    s[a + 4] = h,
                    s[a + 5] = l,
                    s[a + 6] = c,
                    s[a + 7] = h,
                    s[a + 8] = l
                }
            ue.bufferData(ue.ARRAY_BUFFER, e.normalArray, ue.DYNAMIC_DRAW),
            Ee.enableAttribute(n.normal),
            ue.vertexAttribPointer(n.normal, 3, ue.FLOAT, !1, 0, 0)
        }
        e.hasUvs && r.map && (ue.bindBuffer(ue.ARRAY_BUFFER, i.uv),
        ue.bufferData(ue.ARRAY_BUFFER, e.uvArray, ue.DYNAMIC_DRAW),
        Ee.enableAttribute(n.uv),
        ue.vertexAttribPointer(n.uv, 2, ue.FLOAT, !1, 0, 0)),
        e.hasColors && r.vertexColors !== THREE.NoColors && (ue.bindBuffer(ue.ARRAY_BUFFER, i.color),
        ue.bufferData(ue.ARRAY_BUFFER, e.colorArray, ue.DYNAMIC_DRAW),
        Ee.enableAttribute(n.color),
        ue.vertexAttribPointer(n.color, 3, ue.FLOAT, !1, 0, 0)),
        Ee.disableUnusedAttributes(),
        ue.drawArrays(ue.TRIANGLES, 0, e.count),
        e.count = 0
    }
    ,
    this.renderBufferDirect = function(e, r, i, n, a, o) {
        E(n);
        var s = m(e, r, n, a)
          , h = !1
          , l = i.id + "_" + s.id + "_" + n.wireframe;
        l !== z && (z = l,
        h = !0);
        var u = a.morphTargetInfluences;
        if (void 0 !== u) {
            for (var p = [], d = 0, f = u.length; d < f; d++) {
                v = u[d];
                p.push([v, d])
            }
            p.sort(c),
            p.length > 8 && (p.length = 8);
            for (var g = i.morphAttributes, d = 0, f = p.length; d < f; d++) {
                var v = p[d];
                if (U[d] = v[0],
                0 !== v[0]) {
                    T = v[1];
                    !0 === n.morphTargets && g.position && i.addAttribute("morphTarget" + d, g.position[T]),
                    !0 === n.morphNormals && g.normal && i.addAttribute("morphNormal" + d, g.normal[T])
                } else
                    !0 === n.morphTargets && i.removeAttribute("morphTarget" + d),
                    !0 === n.morphNormals && i.removeAttribute("morphNormal" + d)
            }
            s.getUniforms().setValue(ue, "morphTargetInfluences", U),
            h = !0
        }
        var T = i.index
          , y = i.attributes.position;
        !0 === n.wireframe && (T = ve.getWireframeAttribute(i));
        var R;
        null !== T ? (R = xe).setIndex(T) : R = Re,
        h && (!function(e, t, r, i) {
            var n;
            if (r instanceof THREE.InstancedBufferGeometry && null === (n = de.get("ANGLE_instanced_arrays")))
                console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            else {
                void 0 === i && (i = 0),
                Ee.initAttributes();
                var a = r.attributes
                  , o = t.getAttributes()
                  , s = e.defaultAttributeValues;
                for (var c in o) {
                    var h = o[c];
                    if (h >= 0) {
                        var l = a[c];
                        if (void 0 !== l) {
                            var u = ue.FLOAT
                              , p = l.array
                              , d = l.normalized;
                            p instanceof Float32Array ? u = ue.FLOAT : p instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : p instanceof Uint16Array ? u = ue.UNSIGNED_SHORT : p instanceof Int16Array ? u = ue.SHORT : p instanceof Uint32Array ? u = ue.UNSIGNED_INT : p instanceof Int32Array ? u = ue.INT : p instanceof Int8Array ? u = ue.BYTE : p instanceof Uint8Array && (u = ue.UNSIGNED_BYTE);
                            var f = l.itemSize
                              , E = ve.getAttributeBuffer(l);
                            if (l instanceof THREE.InterleavedBufferAttribute) {
                                var m = l.data
                                  , g = m.stride
                                  , v = l.offset;
                                m instanceof THREE.InstancedInterleavedBuffer ? (Ee.enableAttributeAndDivisor(h, m.meshPerAttribute, n),
                                void 0 === r.maxInstancedCount && (r.maxInstancedCount = m.meshPerAttribute * m.count)) : Ee.enableAttribute(h),
                                ue.bindBuffer(ue.ARRAY_BUFFER, E),
                                ue.vertexAttribPointer(h, f, u, d, g * m.array.BYTES_PER_ELEMENT, (i * g + v) * m.array.BYTES_PER_ELEMENT)
                            } else
                                l instanceof THREE.InstancedBufferAttribute ? (Ee.enableAttributeAndDivisor(h, l.meshPerAttribute, n),
                                void 0 === r.maxInstancedCount && (r.maxInstancedCount = l.meshPerAttribute * l.count)) : Ee.enableAttribute(h),
                                ue.bindBuffer(ue.ARRAY_BUFFER, E),
                                ue.vertexAttribPointer(h, f, u, d, 0, i * f * l.array.BYTES_PER_ELEMENT)
                        } else if (void 0 !== s) {
                            var T = s[c];
                            if (void 0 !== T)
                                switch (T.length) {
                                case 2:
                                    ue.vertexAttrib2fv(h, T);
                                    break;
                                case 3:
                                    ue.vertexAttrib3fv(h, T);
                                    break;
                                case 4:
                                    ue.vertexAttrib4fv(h, T);
                                    break;
                                default:
                                    ue.vertexAttrib1fv(h, T)
                                }
                        }
                    }
                }
                Ee.disableUnusedAttributes()
            }
        }(n, s, i),
        null !== T && ue.bindBuffer(ue.ELEMENT_ARRAY_BUFFER, ve.getAttributeBuffer(T)));
        var x = 1 / 0;
        null !== T ? x = T.count : void 0 !== y && (x = y.count);
        var H = i.drawRange.start
          , b = i.drawRange.count
          , _ = null !== o ? o.start : 0
          , M = null !== o ? o.count : 1 / 0
          , w = Math.max(0, H, _)
          , S = Math.min(0 + x, H + b, _ + M) - 1
          , A = Math.max(0, S - w + 1);
        if (a instanceof THREE.Mesh)
            if (!0 === n.wireframe)
                Ee.setLineWidth(n.wireframeLinewidth * t()),
                R.setMode(ue.LINES);
            else
                switch (a.drawMode) {
                case THREE.TrianglesDrawMode:
                    R.setMode(ue.TRIANGLES);
                    break;
                case THREE.TriangleStripDrawMode:
                    R.setMode(ue.TRIANGLE_STRIP);
                    break;
                case THREE.TriangleFanDrawMode:
                    R.setMode(ue.TRIANGLE_FAN)
                }
        else if (a instanceof THREE.Line) {
            var L = n.linewidth;
            void 0 === L && (L = 1),
            Ee.setLineWidth(L * t()),
            a instanceof THREE.LineSegments ? R.setMode(ue.LINES) : R.setMode(ue.LINE_STRIP)
        } else
            a instanceof THREE.Points && R.setMode(ue.POINTS);
        i instanceof THREE.InstancedBufferGeometry ? i.maxInstancedCount > 0 && R.renderInstances(i, w, A) : R.render(w, A)
    }
    ,
    this.render = function(e, t, i, n) {
        if (t instanceof THREE.Camera != !1) {
            var a = e.fog;
            z = "",
            V = -1,
            k = null,
            !0 === e.autoUpdate && e.updateMatrixWorld(),
            null === t.parent && t.updateMatrixWorld(),
            t.matrixWorldInverse.getInverse(t.matrixWorld),
            se.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            re.setFromMatrix(se),
            A.length = 0,
            C = -1,
            B = -1,
            D.length = 0,
            I.length = 0,
            ae = this.localClippingEnabled,
            ne = ie.init(this.clippingPlanes, ae, t),
            d(e, t),
            L.length = C + 1,
            P.length = B + 1,
            !0 === F.sortObjects && (L.sort(h),
            P.sort(l)),
            ne && ie.beginShadows(),
            function(e) {
                for (var t = 0, r = 0, i = e.length; r < i; r++) {
                    var n = e[r];
                    n.castShadow && (he.shadows[t++] = n)
                }
                he.shadows.length = t
            }(A),
            Se.render(e, t),
            T(A, t),
            ne && ie.endShadows(),
            le.calls = 0,
            le.vertices = 0,
            le.faces = 0,
            le.points = 0,
            void 0 === i && (i = null),
            this.setRenderTarget(i);
            var o = e.background;
            if (null === o ? r(Y.r, Y.g, Y.b, Z) : o instanceof THREE.Color && r(o.r, o.g, o.b, 1),
            (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
            o instanceof THREE.CubeTexture ? (be.projectionMatrix.copy(t.projectionMatrix),
            be.matrixWorld.extractRotation(t.matrixWorld),
            be.matrixWorldInverse.getInverse(be.matrixWorld),
            we.material.uniforms.tCube.value = o,
            we.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse, we.matrixWorld),
            ve.update(we),
            F.renderBufferDirect(be, null, we.geometry, we.material, we, null)) : o instanceof THREE.Texture && (_e.material.map = o,
            ve.update(_e),
            F.renderBufferDirect(He, null, _e.geometry, _e.material, _e, null)),
            e.overrideMaterial) {
                var s = e.overrideMaterial;
                f(L, t, a, s),
                f(P, t, a, s)
            } else
                Ee.setBlending(THREE.NoBlending),
                f(L, t, a),
                f(P, t, a);
            Ae.render(e, t),
            Le.render(e, t, X),
            i && ge.updateRenderTargetMipmap(i),
            Ee.setDepthTest(!0),
            Ee.setDepthWrite(!0),
            Ee.setColorWrite(!0)
        } else
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
    }
    ,
    this.setFaceCulling = function(e, t) {
        Ee.setCullFace(e),
        Ee.setFlipSided(t === THREE.FrontFaceDirectionCW)
    }
    ,
    this.allocTextureUnit = function() {
        var e = q;
        return e >= fe.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + fe.maxTextures),
        q += 1,
        e
    }
    ,
    this.setTexture2D = function() {
        var e = !1;
        return function(t, r) {
            t instanceof THREE.WebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don'boot use render targets as textures. Use their .texture property instead."),
            e = !0),
            t = t.texture),
            ge.setTexture2D(t, r)
        }
    }(),
    this.setTexture = function() {
        var e = !1;
        return function(t, r) {
            e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
            e = !0),
            ge.setTexture2D(t, r)
        }
    }(),
    this.setTextureCube = function() {
        var e = !1;
        return function(t, r) {
            t instanceof THREE.WebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don'boot use cube render targets as textures. Use their .texture property instead."),
            e = !0),
            t = t.texture),
            t instanceof THREE.CubeTexture || Array.isArray(t.image) && 6 === t.image.length ? ge.setTextureCube(t, r) : ge.setTextureCubeDynamic(t, r)
        }
    }(),
    this.getCurrentRenderTarget = function() {
        return O
    }
    ,
    this.setRenderTarget = function(e) {
        O = e,
        e && void 0 === me.get(e).__webglFramebuffer && ge.setupRenderTarget(e);
        var t, r = e instanceof THREE.WebGLRenderTargetCube;
        if (e) {
            var i = me.get(e);
            t = r ? i.__webglFramebuffer[e.activeCubeFace] : i.__webglFramebuffer,
            j.copy(e.scissor),
            W = e.scissorTest,
            X.copy(e.viewport)
        } else
            t = null,
            j.copy($).multiplyScalar(J),
            W = ee,
            X.copy(te).multiplyScalar(J);
        if (G !== t && (ue.bindFramebuffer(ue.FRAMEBUFFER, t),
        G = t),
        Ee.scissor(j),
        Ee.setScissorTest(W),
        Ee.viewport(X),
        r) {
            var n = me.get(e.texture);
            ue.framebufferTexture2D(ue.FRAMEBUFFER, ue.COLOR_ATTACHMENT0, ue.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, n.__webglTexture, e.activeMipMapLevel)
        }
    }
    ,
    this.readRenderTargetPixels = function(e, t, r, i, n, a) {
        if (e instanceof THREE.WebGLRenderTarget != !1) {
            var o = me.get(e).__webglFramebuffer;
            if (o) {
                var s = !1;
                o !== G && (ue.bindFramebuffer(ue.FRAMEBUFFER, o),
                s = !0);
                try {
                    var c = e.texture;
                    if (c.format !== THREE.RGBAFormat && y(c.format) !== ue.getParameter(ue.IMPLEMENTATION_COLOR_READ_FORMAT))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(c.type === THREE.UnsignedByteType || y(c.type) === ue.getParameter(ue.IMPLEMENTATION_COLOR_READ_TYPE) || c.type === THREE.FloatType && de.get("WEBGL_color_buffer_float") || c.type === THREE.HalfFloatType && de.get("EXT_color_buffer_half_float")))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    ue.checkFramebufferStatus(ue.FRAMEBUFFER) === ue.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - i && r >= 0 && r <= e.height - n && ue.readPixels(t, r, i, n, y(c.format), y(c.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    s && ue.bindFramebuffer(ue.FRAMEBUFFER, G)
                }
            }
        } else
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
    }
}
,
THREE.WebGLRenderTarget = function(e, t, r) {
    this.uuid = THREE.Math.generateUUID(),
    this.width = e,
    this.height = t,
    this.scissor = new THREE.Vector4(0,0,e,t),
    this.scissorTest = !1,
    this.viewport = new THREE.Vector4(0,0,e,t),
    void 0 === (r = r || {}).minFilter && (r.minFilter = THREE.LinearFilter),
    this.texture = new THREE.Texture(void 0,void 0,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),
    this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer,
    this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer,
    this.depthTexture = null
}
,
Object.assign(THREE.WebGLRenderTarget.prototype, THREE.EventDispatcher.prototype, {
    setSize: function(e, t) {
        this.width === e && this.height === t || (this.width = e,
        this.height = t,
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.width = e.width,
        this.height = e.height,
        this.viewport.copy(e.viewport),
        this.texture = e.texture.clone(),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.depthTexture = e.depthTexture,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}),
THREE.WebGLRenderTargetCube = function(e, t, r) {
    THREE.WebGLRenderTarget.call(this, e, t, r),
    this.activeCubeFace = 0,
    this.activeMipMapLevel = 0
}
,
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,
THREE.WebGLBufferRenderer = function(e, t, r) {
    var i;
    this.setMode = function(e) {
        i = e
    }
    ,
    this.render = function(t, n) {
        e.drawArrays(i, t, n),
        r.calls++,
        r.vertices += n,
        i === e.TRIANGLES && (r.faces += n / 3)
    }
    ,
    this.renderInstances = function(n) {
        var a = t.get("ANGLE_instanced_arrays");
        if (null !== a) {
            var o = n.attributes.position
              , s = 0;
            o instanceof THREE.InterleavedBufferAttribute ? (s = o.data.count,
            a.drawArraysInstancedANGLE(i, 0, s, n.maxInstancedCount)) : (s = o.count,
            a.drawArraysInstancedANGLE(i, 0, s, n.maxInstancedCount)),
            r.calls++,
            r.vertices += s * n.maxInstancedCount,
            i === e.TRIANGLES && (r.faces += n.maxInstancedCount * s / 3)
        } else
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
    }
}
,
THREE.WebGLClipping = function() {
    function e() {
        h.value !== i && (h.value = i,
        h.needsUpdate = n > 0),
        r.numPlanes = n
    }
    function t(e, t, i, n) {
        var a = null !== e ? e.length : 0
          , o = null;
        if (0 !== a) {
            if (o = h.value,
            !0 !== n || null === o) {
                var l = i + 4 * a
                  , u = t.matrixWorldInverse;
                c.getNormalMatrix(u),
                (null === o || o.length < l) && (o = new Float32Array(l));
                for (var p = 0, d = i; p !== a; ++p,
                d += 4)
                    s.copy(e[p]).applyMatrix4(u, c),
                    s.normal.toArray(o, d),
                    o[d + 3] = s.constant
            }
            h.value = o,
            h.needsUpdate = !0
        }
        return r.numPlanes = a,
        o
    }
    var r = this
      , i = null
      , n = 0
      , a = !1
      , o = !1
      , s = new THREE.Plane
      , c = new THREE.Matrix3
      , h = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = h,
    this.numPlanes = 0,
    this.init = function(e, r, o) {
        var s = 0 !== e.length || r || 0 !== n || a;
        return a = r,
        i = t(e, o, 0),
        n = e.length,
        s
    }
    ,
    this.beginShadows = function() {
        o = !0,
        t(null)
    }
    ,
    this.endShadows = function() {
        o = !1,
        e()
    }
    ,
    this.setState = function(r, s, c, l, u) {
        if (!a || null === r || 0 === r.length || o && !s)
            o ? t(null) : e();
        else {
            var p = o ? 0 : n
              , d = 4 * p
              , f = l.clippingState || null;
            h.value = f,
            f = t(r, c, d, u);
            for (var E = 0; E !== d; ++E)
                f[E] = i[E];
            l.clippingState = f,
            this.numPlanes += p
        }
    }
}
,
THREE.WebGLIndexedBufferRenderer = function(e, t, r) {
    var i, n, a;
    this.setMode = function(e) {
        i = e
    }
    ,
    this.setIndex = function(r) {
        r.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (n = e.UNSIGNED_INT,
        a = 4) : (n = e.UNSIGNED_SHORT,
        a = 2)
    }
    ,
    this.render = function(t, o) {
        e.drawElements(i, o, n, t * a),
        r.calls++,
        r.vertices += o,
        i === e.TRIANGLES && (r.faces += o / 3)
    }
    ,
    this.renderInstances = function(o, s, c) {
        var h = t.get("ANGLE_instanced_arrays");
        null !== h ? (h.drawElementsInstancedANGLE(i, c, n, s * a, o.maxInstancedCount),
        r.calls++,
        r.vertices += c * o.maxInstancedCount,
        i === e.TRIANGLES && (r.faces += o.maxInstancedCount * c / 3)) : console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
    }
}
,
THREE.WebGLExtensions = function(e) {
    var t = {};
    this.get = function(r) {
        if (void 0 !== t[r])
            return t[r];
        var i;
        switch (r) {
        case "WEBGL_depth_texture":
            i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        case "WEBGL_compressed_texture_etc1":
            i = e.getExtension("WEBGL_compressed_texture_etc1");
            break;
        default:
            i = e.getExtension(r)
        }
        return null === i && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."),
        t[r] = i,
        i
    }
}
,
THREE.WebGLCapabilities = function(e, t, r) {
    function i(t) {
        if ("highp" === t) {
            if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0)
                return "highp";
            t = "mediump"
        }
        return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    var n;
    this.getMaxAnisotropy = function() {
        if (void 0 !== n)
            return n;
        var r = t.get("EXT_texture_filter_anisotropic");
        return n = null !== r ? e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    ,
    this.getMaxPrecision = i,
    this.precision = void 0 !== r.precision ? r.precision : "highp",
    this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer && r.logarithmicDepthBuffer,
    this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE),
    this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
    this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS),
    this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    this.vertexTextures = this.maxVertexTextures > 0,
    this.floatFragmentTextures = !!t.get("OES_texture_float"),
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
    var a = i(this.precision);
    a !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", a, "instead."),
    this.precision = a),
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
}
,
THREE.WebGLGeometries = function(e, t, r) {
    function i(e) {
        var o = e.target
          , s = a[o.id];
        null !== s.index && n(s.index),
        function(e) {
            for (var t in e)
                n(e[t])
        }(s.attributes),
        o.removeEventListener("dispose", i),
        delete a[o.id];
        var c = t.get(o);
        c.wireframe && n(c.wireframe),
        t.delete(o);
        var h = t.get(s);
        h.wireframe && n(h.wireframe),
        t.delete(s),
        r.memory.geometries--
    }
    function n(r) {
        var i = function(e) {
            return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
        }(r);
        void 0 !== i && (e.deleteBuffer(i),
        function(e) {
            e instanceof THREE.InterleavedBufferAttribute ? t.delete(e.data) : t.delete(e)
        }(r))
    }
    var a = {};
    this.get = function(e) {
        var t = e.geometry;
        if (void 0 !== a[t.id])
            return a[t.id];
        t.addEventListener("dispose", i);
        var n;
        return t instanceof THREE.BufferGeometry ? n = t : t instanceof THREE.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new THREE.BufferGeometry).setFromObject(e)),
        n = t._bufferGeometry),
        a[t.id] = n,
        r.memory.geometries++,
        n
    }
}
,
THREE.WebGLLights = function() {
    var e = {};
    this.get = function(t) {
        if (void 0 !== e[t.id])
            return e[t.id];
        var r;
        switch (t.type) {
        case "DirectionalLight":
            r = {
                direction: new THREE.Vector3,
                color: new THREE.Color,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "SpotLight":
            r = {
                position: new THREE.Vector3,
                direction: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                coneCos: 0,
                penumbraCos: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "PointLight":
            r = {
                position: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "HemisphereLight":
            r = {
                direction: new THREE.Vector3,
                skyColor: new THREE.Color,
                groundColor: new THREE.Color
            }
        }
        return e[t.id] = r,
        r
    }
}
,
THREE.WebGLObjects = function(e, t, r) {
    function i(r, i) {
        var n = r instanceof THREE.InterleavedBufferAttribute ? r.data : r
          , a = t.get(n);
        void 0 === a.__webglBuffer ? function(t, r, i) {
            t.__webglBuffer = e.createBuffer(),
            e.bindBuffer(i, t.__webglBuffer);
            var n = r.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
            e.bufferData(i, r.array, n),
            t.version = r.version
        }(a, n, i) : a.version !== n.version && function(t, r, i) {
            e.bindBuffer(i, t.__webglBuffer),
            !1 === r.dynamic || -1 === r.updateRange.count ? e.bufferSubData(i, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(i, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)),
            r.updateRange.count = 0);
            t.version = r.version
        }(a, n, i)
    }
    function n(e, t, r) {
        if (t > r) {
            var i = t;
            t = r,
            r = i
        }
        var n = e[t];
        return void 0 === n ? (e[t] = [r],
        !0) : -1 === n.indexOf(r) && (n.push(r),
        !0)
    }
    var a = new THREE.WebGLGeometries(e,t,r);
    this.getAttributeBuffer = function(e) {
        return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
    }
    ,
    this.getWireframeAttribute = function(r) {
        var a = t.get(r);
        if (void 0 !== a.wireframe)
            return a.wireframe;
        var o = []
          , s = r.index
          , c = r.attributes
          , h = c.position;
        if (null !== s)
            for (var l = {}, u = 0, p = (m = s.array).length; u < p; u += 3) {
                var d = m[u + 0]
                  , f = m[u + 1]
                  , E = m[u + 2];
                n(l, d, f) && o.push(d, f),
                n(l, f, E) && o.push(f, E),
                n(l, E, d) && o.push(E, d)
            }
        else
            for (var m = c.position.array, u = 0, p = m.length / 3 - 1; u < p; u += 3) {
                var d = u + 0
                  , f = u + 1
                  , E = u + 2;
                o.push(d, f, f, E, E, d)
            }
        var g = h.count > 65535 ? Uint32Array : Uint16Array
          , v = new THREE.BufferAttribute(new g(o),1);
        return i(v, e.ELEMENT_ARRAY_BUFFER),
        a.wireframe = v,
        v
    }
    ,
    this.update = function(t) {
        var r = a.get(t);
        t.geometry instanceof THREE.Geometry && r.updateFromObject(t);
        var n = r.index
          , o = r.attributes;
        null !== n && i(n, e.ELEMENT_ARRAY_BUFFER);
        for (var s in o)
            i(o[s], e.ARRAY_BUFFER);
        var c = r.morphAttributes;
        for (var s in c)
            for (var h = c[s], l = 0, u = h.length; l < u; l++)
                i(h[l], e.ARRAY_BUFFER);
        return r
    }
}
,
THREE.WebGLProgram = function() {
    function e(e) {
        switch (e) {
        case THREE.LinearEncoding:
            return ["Linear", "( value )"];
        case THREE.sRGBEncoding:
            return ["sRGB", "( value )"];
        case THREE.RGBEEncoding:
            return ["RGBE", "( value )"];
        case THREE.RGBM7Encoding:
            return ["RGBM", "( value, 7.0 )"];
        case THREE.RGBM16Encoding:
            return ["RGBM", "( value, 16.0 )"];
        case THREE.RGBDEncoding:
            return ["RGBD", "( value, 256.0 )"];
        case THREE.GammaEncoding:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + e)
        }
    }
    function t(t, r) {
        var i = e(r);
        return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
    }
    function r(e) {
        return "" !== e
    }
    function i(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }
    function n(e) {
        return e.replace(/#include +<([\w\d.]+)>/g, function(e, t) {
            var r = THREE.ShaderChunk[t];
            if (void 0 === r)
                throw new Error("Can not resolve #include <" + t + ">");
            return n(r)
        })
    }
    function a(e) {
        return e.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(e, t, r, i) {
            for (var n = "", a = parseInt(t); a < parseInt(r); a++)
                n += i.replace(/\[ i \]/g, "[ " + a + " ]");
            return n
        })
    }
    var o = 0;
    return function(s, c, h, l) {
        var u = s.context
          , p = h.extensions
          , d = h.defines
          , f = h.__webglShader.vertexShader
          , E = h.__webglShader.fragmentShader
          , m = "SHADOWMAP_TYPE_BASIC";
        l.shadowMapType === THREE.PCFShadowMap ? m = "SHADOWMAP_TYPE_PCF" : l.shadowMapType === THREE.PCFSoftShadowMap && (m = "SHADOWMAP_TYPE_PCF_SOFT");
        var g = "ENVMAP_TYPE_CUBE"
          , v = "ENVMAP_MODE_REFLECTION"
          , T = "ENVMAP_BLENDING_MULTIPLY";
        if (l.envMap) {
            switch (h.envMap.mapping) {
            case THREE.CubeReflectionMapping:
            case THREE.CubeRefractionMapping:
                g = "ENVMAP_TYPE_CUBE";
                break;
            case THREE.CubeUVReflectionMapping:
            case THREE.CubeUVRefractionMapping:
                g = "ENVMAP_TYPE_CUBE_UV";
                break;
            case THREE.EquirectangularReflectionMapping:
            case THREE.EquirectangularRefractionMapping:
                g = "ENVMAP_TYPE_EQUIREC";
                break;
            case THREE.SphericalReflectionMapping:
                g = "ENVMAP_TYPE_SPHERE"
            }
            switch (h.envMap.mapping) {
            case THREE.CubeRefractionMapping:
            case THREE.EquirectangularRefractionMapping:
                v = "ENVMAP_MODE_REFRACTION"
            }
            switch (h.combine) {
            case THREE.MultiplyOperation:
                T = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case THREE.MixOperation:
                T = "ENVMAP_BLENDING_MIX";
                break;
            case THREE.AddOperation:
                T = "ENVMAP_BLENDING_ADD"
            }
        }
        var y, R, x = s.gammaFactor > 0 ? s.gammaFactor : 1, H = function(e, t, i) {
            return [(e = e || {}).derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(r).join("\n")
        }(p, l, s.extensions), b = function(e) {
            var t = [];
            for (var r in e) {
                var i = e[r];
                !1 !== i && t.push("#define " + r + " " + i)
            }
            return t.join("\n")
        }(d), _ = u.createProgram();
        h instanceof THREE.RawShaderMaterial ? (y = ["precision " + l.precision + " float;", "precision " + l.precision + " int;", "#define SHADER_NAME " + h.__webglShader.name, b, "\n"].filter(r).join("\n"),
        R = [H, "precision " + l.precision + " float;", "precision " + l.precision + " int;", "#define SHADER_NAME " + h.__webglShader.name, b, "\n"].filter(r).join("\n")) : (y = ["precision " + l.precision + " float;", "precision " + l.precision + " int;", "#define SHADER_NAME " + h.__webglShader.name, b, l.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + x, "#define MAX_BONES " + l.maxBones, l.map ? "#define USE_MAP" : "", l.envMap ? "#define USE_ENVMAP" : "", l.envMap ? "#define " + v : "", l.lightMap ? "#define USE_LIGHTMAP" : "", l.aoMap ? "#define USE_AOMAP" : "", l.emissiveMap ? "#define USE_EMISSIVEMAP" : "", l.bumpMap ? "#define USE_BUMPMAP" : "", l.normalMap ? "#define USE_NORMALMAP" : "", l.displacementMap && l.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", l.specularMap ? "#define USE_SPECULARMAP" : "", l.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", l.metalnessMap ? "#define USE_METALNESSMAP" : "", l.alphaMap ? "#define USE_ALPHAMAP" : "", l.vertexColors ? "#define USE_COLOR" : "", l.flatShading ? "#define FLAT_SHADED" : "", l.skinning ? "#define USE_SKINNING" : "", l.useVertexTexture ? "#define BONE_TEXTURE" : "", l.morphTargets ? "#define USE_MORPHTARGETS" : "", l.morphNormals && !1 === l.flatShading ? "#define USE_MORPHNORMALS" : "", l.doubleSided ? "#define DOUBLE_SIDED" : "", l.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + l.numClippingPlanes, l.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", l.shadowMapEnabled ? "#define " + m : "", l.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", l.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", l.logarithmicDepthBuffer && s.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(r).join("\n"),
        R = [H, "precision " + l.precision + " float;", "precision " + l.precision + " int;", "#define SHADER_NAME " + h.__webglShader.name, b, l.alphaTest ? "#define ALPHATEST " + l.alphaTest : "", "#define GAMMA_FACTOR " + x, l.useFog && l.fog ? "#define USE_FOG" : "", l.useFog && l.fogExp ? "#define FOG_EXP2" : "", l.map ? "#define USE_MAP" : "", l.envMap ? "#define USE_ENVMAP" : "", l.envMap ? "#define " + g : "", l.envMap ? "#define " + v : "", l.envMap ? "#define " + T : "", l.lightMap ? "#define USE_LIGHTMAP" : "", l.aoMap ? "#define USE_AOMAP" : "", l.emissiveMap ? "#define USE_EMISSIVEMAP" : "", l.bumpMap ? "#define USE_BUMPMAP" : "", l.normalMap ? "#define USE_NORMALMAP" : "", l.specularMap ? "#define USE_SPECULARMAP" : "", l.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", l.metalnessMap ? "#define USE_METALNESSMAP" : "", l.alphaMap ? "#define USE_ALPHAMAP" : "", l.vertexColors ? "#define USE_COLOR" : "", l.flatShading ? "#define FLAT_SHADED" : "", l.doubleSided ? "#define DOUBLE_SIDED" : "", l.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + l.numClippingPlanes, l.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", l.shadowMapEnabled ? "#define " + m : "", l.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", l.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", l.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", l.logarithmicDepthBuffer && s.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", l.envMap && s.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", l.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", l.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", l.toneMapping !== THREE.NoToneMapping ? function(e, t) {
            var r;
            switch (t) {
            case THREE.LinearToneMapping:
                r = "Linear";
                break;
            case THREE.ReinhardToneMapping:
                r = "Reinhard";
                break;
            case THREE.Uncharted2ToneMapping:
                r = "Uncharted2";
                break;
            case THREE.CineonToneMapping:
                r = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + t)
            }
            return "vec3 " + e + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
        }("toneMapping", l.toneMapping) : "", l.outputEncoding || l.mapEncoding || l.envMapEncoding || l.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", l.mapEncoding ? t("mapTexelToLinear", l.mapEncoding) : "", l.envMapEncoding ? t("envMapTexelToLinear", l.envMapEncoding) : "", l.emissiveMapEncoding ? t("emissiveMapTexelToLinear", l.emissiveMapEncoding) : "", l.outputEncoding ? function(t, r) {
            var i = e(r);
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
        }("linearToOutputTexel", l.outputEncoding) : "", l.depthPacking ? "#define DEPTH_PACKING " + h.depthPacking : "", "\n"].filter(r).join("\n")),
        f = i(f = n(f), l),
        E = i(E = n(E), l),
        h instanceof THREE.ShaderMaterial == !1 && (f = a(f),
        E = a(E));
        var M = y + f
          , w = R + E
          , S = THREE.WebGLShader(u, u.VERTEX_SHADER, M)
          , A = THREE.WebGLShader(u, u.FRAGMENT_SHADER, w);
        u.attachShader(_, S),
        u.attachShader(_, A),
        void 0 !== h.index0AttributeName ? u.bindAttribLocation(_, 0, h.index0AttributeName) : !0 === l.morphTargets && u.bindAttribLocation(_, 0, "position"),
        u.linkProgram(_);
        var L = u.getProgramInfoLog(_)
          , C = u.getShaderInfoLog(S)
          , P = u.getShaderInfoLog(A)
          , B = !0
          , U = !0;
        !1 === u.getProgramParameter(_, u.LINK_STATUS) ? (B = !1,
        console.error("THREE.WebGLProgram: shader error: ", u.getError(), "gl.VALIDATE_STATUS", u.getProgramParameter(_, u.VALIDATE_STATUS), "gl.getProgramInfoLog", L, C, P)) : "" !== L ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", L) : "" !== C && "" !== P || (U = !1),
        U && (this.diagnostics = {
            runnable: B,
            material: h,
            programLog: L,
            vertexShader: {
                log: C,
                prefix: y
            },
            fragmentShader: {
                log: P,
                prefix: R
            }
        }),
        u.deleteShader(S),
        u.deleteShader(A);
        var D;
        this.getUniforms = function() {
            return void 0 === D && (D = new THREE.WebGLUniforms(u,_,s)),
            D
        }
        ;
        var I;
        return this.getAttributes = function() {
            return void 0 === I && (I = function(e, t, r) {
                for (var i = {}, n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), a = 0; a < n; a++) {
                    var o = e.getActiveAttrib(t, a).name;
                    i[o] = e.getAttribLocation(t, o)
                }
                return i
            }(u, _)),
            I
        }
        ,
        this.destroy = function() {
            u.deleteProgram(_),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.id = o++,
        this.code = c,
        this.usedTimes = 1,
        this.program = _,
        this.vertexShader = S,
        this.fragmentShader = A,
        this
    }
}(),
THREE.WebGLPrograms = function(e, t) {
    function r(e, t) {
        var r;
        return e ? e instanceof THREE.Texture ? r = e.encoding : e instanceof THREE.WebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don'boot use render targets as textures. Use their .texture property instead."),
        r = e.texture.encoding) : r = THREE.LinearEncoding,
        r === THREE.LinearEncoding && t && (r = THREE.GammaEncoding),
        r
    }
    var i = []
      , n = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points"
    }
      , a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
    this.getParameters = function(i, a, o, s, c) {
        var h = n[i.type]
          , l = function(e) {
            if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture)
                return 1024;
            var r = t.maxVertexUniforms
              , i = Math.floor((r - 20) / 4);
            return void 0 !== e && e instanceof THREE.SkinnedMesh && (i = Math.min(e.skeleton.bones.length, i)) < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)"),
            i
        }(c)
          , u = e.getPrecision();
        null !== i.precision && (u = t.getMaxPrecision(i.precision)) !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", u, "instead.");
        var p = e.getCurrentRenderTarget();
        return {
            shaderID: h,
            precision: u,
            supportsVertexTextures: t.vertexTextures,
            outputEncoding: r(p ? p.texture : null, e.gammaOutput),
            map: !!i.map,
            mapEncoding: r(i.map, e.gammaInput),
            envMap: !!i.envMap,
            envMapMode: i.envMap && i.envMap.mapping,
            envMapEncoding: r(i.envMap, e.gammaInput),
            envMapCubeUV: !!i.envMap && (i.envMap.mapping === THREE.CubeUVReflectionMapping || i.envMap.mapping === THREE.CubeUVRefractionMapping),
            lightMap: !!i.lightMap,
            aoMap: !!i.aoMap,
            emissiveMap: !!i.emissiveMap,
            emissiveMapEncoding: r(i.emissiveMap, e.gammaInput),
            bumpMap: !!i.bumpMap,
            normalMap: !!i.normalMap,
            displacementMap: !!i.displacementMap,
            roughnessMap: !!i.roughnessMap,
            metalnessMap: !!i.metalnessMap,
            specularMap: !!i.specularMap,
            alphaMap: !!i.alphaMap,
            combine: i.combine,
            vertexColors: i.vertexColors,
            fog: !!o,
            useFog: i.fog,
            fogExp: o instanceof THREE.FogExp2,
            flatShading: i.shading === THREE.FlatShading,
            sizeAttenuation: i.sizeAttenuation,
            logarithmicDepthBuffer: t.logarithmicDepthBuffer,
            skinning: i.skinning,
            maxBones: l,
            useVertexTexture: t.floatVertexTextures && c && c.skeleton && c.skeleton.useVertexTexture,
            morphTargets: i.morphTargets,
            morphNormals: i.morphNormals,
            maxMorphTargets: e.maxMorphTargets,
            maxMorphNormals: e.maxMorphNormals,
            numDirLights: a.directional.length,
            numPointLights: a.point.length,
            numSpotLights: a.spot.length,
            numHemiLights: a.hemi.length,
            numClippingPlanes: s,
            shadowMapEnabled: e.shadowMap.enabled && c.receiveShadow && a.shadows.length > 0,
            shadowMapType: e.shadowMap.type,
            toneMapping: e.toneMapping,
            physicallyCorrectLights: e.physicallyCorrectLights,
            premultipliedAlpha: i.premultipliedAlpha,
            alphaTest: i.alphaTest,
            doubleSided: i.side === THREE.DoubleSide,
            flipSided: i.side === THREE.BackSide,
            depthPacking: void 0 !== i.depthPacking && i.depthPacking
        }
    }
    ,
    this.getProgramCode = function(e, t) {
        var r = [];
        if (t.shaderID ? r.push(t.shaderID) : (r.push(e.fragmentShader),
        r.push(e.vertexShader)),
        void 0 !== e.defines)
            for (var i in e.defines)
                r.push(i),
                r.push(e.defines[i]);
        for (var n = 0; n < a.length; n++)
            r.push(t[a[n]]);
        return r.join()
    }
    ,
    this.acquireProgram = function(t, r, n) {
        for (var a, o = 0, s = i.length; o < s; o++) {
            var c = i[o];
            if (c.code === n) {
                ++(a = c).usedTimes;
                break
            }
        }
        return void 0 === a && (a = new THREE.WebGLProgram(e,n,t,r),
        i.push(a)),
        a
    }
    ,
    this.releaseProgram = function(e) {
        if (0 == --e.usedTimes) {
            var t = i.indexOf(e);
            i[t] = i[i.length - 1],
            i.pop(),
            e.destroy()
        }
    }
    ,
    this.programs = i
}
,
THREE.WebGLProperties = function() {
    var e = {};
    this.get = function(t) {
        var r = t.uuid
          , i = e[r];
        return void 0 === i && (i = {},
        e[r] = i),
        i
    }
    ,
    this.delete = function(t) {
        delete e[t.uuid]
    }
    ,
    this.clear = function() {
        e = {}
    }
}
,
THREE.WebGLShader = function() {
    return function(e, t, r) {
        var i = e.createShader(t);
        return e.shaderSource(i, r),
        e.compileShader(i),
        !1 === e.getShaderParameter(i, e.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn'boot compile."),
        "" !== e.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(i), function(e) {
            for (var t = e.split("\n"), r = 0; r < t.length; r++)
                t[r] = r + 1 + ": " + t[r];
            return t.join("\n")
        }(r)),
        i
    }
}(),
THREE.WebGLShadowMap = function(e, t, r, i) {
    function n(t, r, i, n) {
        var a = t.geometry
          , o = null
          , s = T
          , c = t.customDepthMaterial;
        if (i && (s = y,
        c = t.customDistanceMaterial),
        c)
            o = c;
        else {
            var h = !1;
            r.morphTargets && (a instanceof THREE.BufferGeometry ? h = a.morphAttributes && a.morphAttributes.position && a.morphAttributes.position.length > 0 : a instanceof THREE.Geometry && (h = a.morphTargets && a.morphTargets.length > 0));
            var l = t instanceof THREE.SkinnedMesh && r.skinning
              , u = 0;
            h && (u |= m),
            l && (u |= g),
            o = s[u]
        }
        if (e.localClippingEnabled && !0 === r.clipShadows && 0 !== r.clippingPlanes.length) {
            var p = o.uuid
              , d = r.uuid
              , f = R[p];
            void 0 === f && (f = {},
            R[p] = f);
            var E = f[d];
            void 0 === E && (E = o.clone(),
            f[d] = E),
            o = E
        }
        o.visible = r.visible,
        o.wireframe = r.wireframe;
        var v = r.side;
        return B.renderSingleSided && v == THREE.DoubleSide && (v = THREE.FrontSide),
        B.renderReverseSided && (v === THREE.FrontSide ? v = THREE.BackSide : v === THREE.BackSide && (v = THREE.FrontSide)),
        o.side = v,
        o.clipShadows = r.clipShadows,
        o.clippingPlanes = r.clippingPlanes,
        o.wireframeLinewidth = r.wireframeLinewidth,
        o.linewidth = r.linewidth,
        i && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(n),
        o
    }
    function a(e, t, r) {
        if (!1 !== e.visible) {
            if (e.layers.test(t.layers) && (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && e.castShadow && (!1 === e.frustumCulled || !0 === c.intersectsObject(e))) {
                !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e.matrixWorld),
                E.push(e))
            }
            for (var i = e.children, n = 0, o = i.length; n < o; n++)
                a(i[n], t, r)
        }
    }
    var o = e.context
      , s = e.state
      , c = new THREE.Frustum
      , h = new THREE.Matrix4
      , l = t.shadows
      , u = new THREE.Vector2
      , p = new THREE.Vector2(i.maxTextureSize,i.maxTextureSize)
      , d = new THREE.Vector3
      , f = new THREE.Vector3
      , E = []
      , m = 1
      , g = 2
      , v = 1 + (m | g)
      , T = new Array(v)
      , y = new Array(v)
      , R = {}
      , x = [new THREE.Vector3(1,0,0), new THREE.Vector3(-1,0,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1), new THREE.Vector3(0,1,0), new THREE.Vector3(0,-1,0)]
      , H = [new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1)]
      , b = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4]
      , _ = new THREE.MeshDepthMaterial;
    _.depthPacking = THREE.RGBADepthPacking,
    _.clipping = !0;
    for (var M = THREE.ShaderLib.distanceRGBA, w = THREE.UniformsUtils.clone(M.uniforms), S = 0; S !== v; ++S) {
        var A = 0 != (S & m)
          , L = 0 != (S & g)
          , C = _.clone();
        C.morphTargets = A,
        C.skinning = L,
        T[S] = C;
        var P = new THREE.ShaderMaterial({
            defines: {
                USE_SHADOWMAP: ""
            },
            uniforms: w,
            vertexShader: M.vertexShader,
            fragmentShader: M.fragmentShader,
            morphTargets: A,
            skinning: L,
            clipping: !0
        });
        y[S] = P
    }
    var B = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = THREE.PCFShadowMap,
    this.renderReverseSided = !0,
    this.renderSingleSided = !0,
    this.render = function(t, i) {
        if (!1 !== B.enabled && (!1 !== B.autoUpdate || !1 !== B.needsUpdate) && 0 !== l.length) {
            s.clearColor(1, 1, 1, 1),
            s.disable(o.BLEND),
            s.setDepthTest(!0),
            s.setScissorTest(!1);
            for (var m, g, v = 0, T = l.length; v < T; v++) {
                var y = l[v]
                  , R = y.shadow;
                if (void 0 !== R) {
                    var _ = R.camera;
                    if (u.copy(R.mapSize),
                    u.min(p),
                    y instanceof THREE.PointLight) {
                        m = 6,
                        g = !0;
                        var M = u.x
                          , w = u.y;
                        b[0].set(2 * M, w, M, w),
                        b[1].set(0, w, M, w),
                        b[2].set(3 * M, w, M, w),
                        b[3].set(M, w, M, w),
                        b[4].set(3 * M, 0, M, w),
                        b[5].set(M, 0, M, w),
                        u.x *= 4,
                        u.y *= 2
                    } else
                        m = 1,
                        g = !1;
                    if (null === R.map) {
                        var S = {
                            minFilter: THREE.NearestFilter,
                            magFilter: THREE.NearestFilter,
                            format: THREE.RGBAFormat
                        };
                        R.map = new THREE.WebGLRenderTarget(u.x,u.y,S),
                        _.updateProjectionMatrix()
                    }
                    R instanceof THREE.SpotLightShadow && R.update(y);
                    var A = R.map
                      , L = R.matrix;
                    f.setFromMatrixPosition(y.matrixWorld),
                    _.position.copy(f),
                    e.setRenderTarget(A),
                    e.clear();
                    for (var C = 0; C < m; C++) {
                        if (g) {
                            d.copy(_.position),
                            d.add(x[C]),
                            _.up.copy(H[C]),
                            _.lookAt(d);
                            var P = b[C];
                            s.viewport(P)
                        } else
                            d.setFromMatrixPosition(y.target.matrixWorld),
                            _.lookAt(d);
                        _.updateMatrixWorld(),
                        _.matrixWorldInverse.getInverse(_.matrixWorld),
                        L.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                        L.multiply(_.projectionMatrix),
                        L.multiply(_.matrixWorldInverse),
                        h.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse),
                        c.setFromMatrix(h),
                        E.length = 0,
                        a(t, i, _);
                        for (var U = 0, D = E.length; U < D; U++) {
                            var I = E[U]
                              , F = r.update(I)
                              , N = I.material;
                            if (N instanceof THREE.MultiMaterial)
                                for (var O = F.groups, G = N.materials, V = 0, z = O.length; V < z; V++) {
                                    var k = O[V]
                                      , j = G[k.materialIndex];
                                    if (!0 === j.visible) {
                                        W = n(I, j, g, f);
                                        e.renderBufferDirect(_, null, F, W, I, k)
                                    }
                                }
                            else {
                                var W = n(I, N, g, f);
                                e.renderBufferDirect(_, null, F, W, I, null)
                            }
                        }
                    }
                } else
                    console.warn("THREE.WebGLShadowMap:", y, "has no shadow.")
            }
            var X = e.getClearColor()
              , q = e.getClearAlpha();
            e.setClearColor(X, q),
            B.needsUpdate = !1
        }
    }
}
,
THREE.WebGLState = function(e, t, r) {
    function i(t, r, i) {
        var n = new Uint8Array(4)
          , a = e.createTexture();
        e.bindTexture(t, a),
        e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
        e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
        for (var o = 0; o < i; o++)
            e.texImage2D(r + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, n);
        return a
    }
    var n = this;
    this.buffers = {
        color: new THREE.WebGLColorBuffer(e,this),
        depth: new THREE.WebGLDepthBuffer(e,this),
        stencil: new THREE.WebGLStencilBuffer(e,this)
    };
    var a = e.getParameter(e.MAX_VERTEX_ATTRIBS)
      , o = new Uint8Array(a)
      , s = new Uint8Array(a)
      , c = new Uint8Array(a)
      , h = {}
      , l = null
      , u = null
      , p = null
      , d = null
      , f = null
      , E = null
      , m = null
      , g = null
      , v = !1
      , T = null
      , y = null
      , R = null
      , x = null
      , H = null
      , b = null
      , _ = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
      , M = null
      , w = {}
      , S = new THREE.Vector4
      , A = new THREE.Vector4
      , L = {};
    L[e.TEXTURE_2D] = i(e.TEXTURE_2D, e.TEXTURE_2D, 1),
    L[e.TEXTURE_CUBE_MAP] = i(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    this.init = function() {
        this.clearColor(0, 0, 0, 1),
        this.clearDepth(1),
        this.clearStencil(0),
        this.enable(e.DEPTH_TEST),
        this.setDepthFunc(THREE.LessEqualDepth),
        this.setFlipSided(!1),
        this.setCullFace(THREE.CullFaceBack),
        this.enable(e.CULL_FACE),
        this.enable(e.BLEND),
        this.setBlending(THREE.NormalBlending)
    }
    ,
    this.initAttributes = function() {
        for (var e = 0, t = o.length; e < t; e++)
            o[e] = 0
    }
    ,
    this.enableAttribute = function(r) {
        if (o[r] = 1,
        0 === s[r] && (e.enableVertexAttribArray(r),
        s[r] = 1),
        0 !== c[r]) {
            t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(r, 0),
            c[r] = 0
        }
    }
    ,
    this.enableAttributeAndDivisor = function(t, r, i) {
        o[t] = 1,
        0 === s[t] && (e.enableVertexAttribArray(t),
        s[t] = 1),
        c[t] !== r && (i.vertexAttribDivisorANGLE(t, r),
        c[t] = r)
    }
    ,
    this.disableUnusedAttributes = function() {
        for (var t = 0, r = s.length; t !== r; ++t)
            s[t] !== o[t] && (e.disableVertexAttribArray(t),
            s[t] = 0)
    }
    ,
    this.enable = function(t) {
        !0 !== h[t] && (e.enable(t),
        h[t] = !0)
    }
    ,
    this.disable = function(t) {
        !1 !== h[t] && (e.disable(t),
        h[t] = !1)
    }
    ,
    this.getCompressedTextureFormats = function() {
        if (null === l && (l = [],
        t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
            for (var r = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), i = 0; i < r.length; i++)
                l.push(r[i]);
        return l
    }
    ,
    this.setBlending = function(t, i, n, a, o, s, c, h) {
        if (t === THREE.NoBlending)
            return this.disable(e.BLEND),
            void (u = t);
        this.enable(e.BLEND),
        t === u && h === v || (t === THREE.AdditiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === THREE.SubtractiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === THREE.MultiplyBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ZERO, e.SRC_COLOR)) : h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
        e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)),
        u = t,
        v = h),
        t === THREE.CustomBlending ? (o = o || i,
        s = s || n,
        c = c || a,
        i === p && o === E || (e.blendEquationSeparate(r(i), r(o)),
        p = i,
        E = o),
        n === d && a === f && s === m && c === g || (e.blendFuncSeparate(r(n), r(a), r(s), r(c)),
        d = n,
        f = a,
        m = s,
        g = c)) : (p = null,
        d = null,
        f = null,
        E = null,
        m = null,
        g = null)
    }
    ,
    this.setColorWrite = function(e) {
        this.buffers.color.setMask(e)
    }
    ,
    this.setDepthTest = function(e) {
        this.buffers.depth.setTest(e)
    }
    ,
    this.setDepthWrite = function(e) {
        this.buffers.depth.setMask(e)
    }
    ,
    this.setDepthFunc = function(e) {
        this.buffers.depth.setFunc(e)
    }
    ,
    this.setStencilTest = function(e) {
        this.buffers.stencil.setTest(e)
    }
    ,
    this.setStencilWrite = function(e) {
        this.buffers.stencil.setMask(e)
    }
    ,
    this.setStencilFunc = function(e, t, r) {
        this.buffers.stencil.setFunc(e, t, r)
    }
    ,
    this.setStencilOp = function(e, t, r) {
        this.buffers.stencil.setOp(e, t, r)
    }
    ,
    this.setFlipSided = function(t) {
        T !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW),
        T = t)
    }
    ,
    this.setCullFace = function(t) {
        t !== THREE.CullFaceNone ? (this.enable(e.CULL_FACE),
        t !== y && (t === THREE.CullFaceBack ? e.cullFace(e.BACK) : t === THREE.CullFaceFront ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : this.disable(e.CULL_FACE),
        y = t
    }
    ,
    this.setLineWidth = function(t) {
        t !== R && (e.lineWidth(t),
        R = t)
    }
    ,
    this.setPolygonOffset = function(t, r, i) {
        t ? (this.enable(e.POLYGON_OFFSET_FILL),
        x === r && H === i || (e.polygonOffset(r, i),
        x = r,
        H = i)) : this.disable(e.POLYGON_OFFSET_FILL)
    }
    ,
    this.getScissorTest = function() {
        return b
    }
    ,
    this.setScissorTest = function(t) {
        b = t,
        t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
    }
    ,
    this.activeTexture = function(t) {
        void 0 === t && (t = e.TEXTURE0 + _ - 1),
        M !== t && (e.activeTexture(t),
        M = t)
    }
    ,
    this.bindTexture = function(t, r) {
        null === M && n.activeTexture();
        var i = w[M];
        void 0 === i && (i = {
            type: void 0,
            texture: void 0
        },
        w[M] = i),
        i.type === t && i.texture === r || (e.bindTexture(t, r || L[t]),
        i.type = t,
        i.texture = r)
    }
    ,
    this.compressedTexImage2D = function() {
        try {
            e.compressedTexImage2D.apply(e, arguments)
        } catch (e) {
            console.error(e)
        }
    }
    ,
    this.texImage2D = function() {
        try {
            e.texImage2D.apply(e, arguments)
        } catch (e) {
            console.error(e)
        }
    }
    ,
    this.clearColor = function(e, t, r, i) {
        this.buffers.color.setClear(e, t, r, i)
    }
    ,
    this.clearDepth = function(e) {
        this.buffers.depth.setClear(e)
    }
    ,
    this.clearStencil = function(e) {
        this.buffers.stencil.setClear(e)
    }
    ,
    this.scissor = function(t) {
        !1 === S.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
        S.copy(t))
    }
    ,
    this.viewport = function(t) {
        !1 === A.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
        A.copy(t))
    }
    ,
    this.reset = function() {
        for (var t = 0; t < s.length; t++)
            1 === s[t] && (e.disableVertexAttribArray(t),
            s[t] = 0);
        h = {},
        l = null,
        M = null,
        w = {},
        u = null,
        T = null,
        y = null,
        this.buffers.color.reset(),
        this.buffers.depth.reset(),
        this.buffers.stencil.reset()
    }
}
,
THREE.WebGLColorBuffer = function(e, t) {
    var r = !1
      , i = new THREE.Vector4
      , n = null
      , a = new THREE.Vector4;
    this.setMask = function(t) {
        n === t || r || (e.colorMask(t, t, t, t),
        n = t)
    }
    ,
    this.setLocked = function(e) {
        r = e
    }
    ,
    this.setClear = function(t, r, n, o) {
        i.set(t, r, n, o),
        !1 === a.equals(i) && (e.clearColor(t, r, n, o),
        a.copy(i))
    }
    ,
    this.reset = function() {
        r = !1,
        n = null,
        a = new THREE.Vector4
    }
}
,
THREE.WebGLDepthBuffer = function(e, t) {
    var r = !1
      , i = null
      , n = null
      , a = null;
    this.setTest = function(r) {
        r ? t.enable(e.DEPTH_TEST) : t.disable(e.DEPTH_TEST)
    }
    ,
    this.setMask = function(t) {
        i === t || r || (e.depthMask(t),
        i = t)
    }
    ,
    this.setFunc = function(t) {
        if (n !== t) {
            if (t)
                switch (t) {
                case THREE.NeverDepth:
                    e.depthFunc(e.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    e.depthFunc(e.ALWAYS);
                    break;
                case THREE.LessDepth:
                    e.depthFunc(e.LESS);
                    break;
                case THREE.LessEqualDepth:
                    e.depthFunc(e.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    e.depthFunc(e.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    e.depthFunc(e.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    e.depthFunc(e.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    e.depthFunc(e.NOTEQUAL);
                    break;
                default:
                    e.depthFunc(e.LEQUAL)
                }
            else
                e.depthFunc(e.LEQUAL);
            n = t
        }
    }
    ,
    this.setLocked = function(e) {
        r = e
    }
    ,
    this.setClear = function(t) {
        a !== t && (e.clearDepth(t),
        a = t)
    }
    ,
    this.reset = function() {
        r = !1,
        i = null,
        n = null,
        a = null
    }
}
,
THREE.WebGLStencilBuffer = function(e, t) {
    var r = !1
      , i = null
      , n = null
      , a = null
      , o = null
      , s = null
      , c = null
      , h = null
      , l = null;
    this.setTest = function(r) {
        r ? t.enable(e.STENCIL_TEST) : t.disable(e.STENCIL_TEST)
    }
    ,
    this.setMask = function(t) {
        i === t || r || (e.stencilMask(t),
        i = t)
    }
    ,
    this.setFunc = function(t, r, i) {
        n === t && a === r && o === i || (e.stencilFunc(t, r, i),
        n = t,
        a = r,
        o = i)
    }
    ,
    this.setOp = function(t, r, i) {
        s === t && c === r && h === i || (e.stencilOp(t, r, i),
        s = t,
        c = r,
        h = i)
    }
    ,
    this.setLocked = function(e) {
        r = e
    }
    ,
    this.setClear = function(t) {
        l !== t && (e.clearStencil(t),
        l = t)
    }
    ,
    this.reset = function() {
        r = !1,
        i = null,
        n = null,
        a = null,
        o = null,
        s = null,
        c = null,
        h = null,
        l = null
    }
}
,
THREE.WebGLTextures = function(e, t, r, i, n, a, o) {
    function s(e, t) {
        if (e.width > t || e.height > t) {
            var r = t / Math.max(e.width, e.height)
              , i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            i.width = Math.floor(e.width * r),
            i.height = Math.floor(e.height * r);
            return i.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height),
            console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height, e),
            i
        }
        return e
    }
    function c(e) {
        return THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height)
    }
    function h(t) {
        return t === THREE.NearestFilter || t === THREE.NearestMipMapNearestFilter || t === THREE.NearestMipMapLinearFilter ? e.NEAREST : e.LINEAR
    }
    function l(t) {
        var r = t.target;
        r.removeEventListener("dispose", l),
        function(t) {
            var r = i.get(t);
            if (t.image && r.__image__webglTextureCube)
                e.deleteTexture(r.__image__webglTextureCube);
            else {
                if (void 0 === r.__webglInit)
                    return;
                e.deleteTexture(r.__webglTexture)
            }
            i.delete(t)
        }(r),
        g.textures--
    }
    function u(t) {
        var r = t.target;
        r.removeEventListener("dispose", u),
        function(t) {
            var r = i.get(t)
              , n = i.get(t.texture);
            if (!t)
                return;
            void 0 !== n.__webglTexture && e.deleteTexture(n.__webglTexture);
            t.depthTexture && t.depthTexture.dispose();
            if (t instanceof THREE.WebGLRenderTargetCube)
                for (var a = 0; a < 6; a++)
                    e.deleteFramebuffer(r.__webglFramebuffer[a]),
                    r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[a]);
            else
                e.deleteFramebuffer(r.__webglFramebuffer),
                r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer);
            i.delete(t.texture),
            i.delete(t)
        }(r),
        g.textures--
    }
    function p(t, o) {
        var h = i.get(t);
        if (t.version > 0 && h.__version !== t.version) {
            var u = t.image;
            if (void 0 === u)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
            else {
                if (!1 !== u.complete)
                    return void function(t, i, o) {
                        void 0 === t.__webglInit && (t.__webglInit = !0,
                        i.addEventListener("dispose", l),
                        t.__webglTexture = e.createTexture(),
                        g.textures++);
                        r.activeTexture(e.TEXTURE0 + o),
                        r.bindTexture(e.TEXTURE_2D, t.__webglTexture),
                        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, i.flipY),
                        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
                        e.pixelStorei(e.UNPACK_ALIGNMENT, i.unpackAlignment);
                        var h = s(i.image, n.maxTextureSize);
                        (function(e) {
                            return e.wrapS !== THREE.ClampToEdgeWrapping || e.wrapT !== THREE.ClampToEdgeWrapping || e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter
                        }
                        )(i) && !1 === c(h) && (h = function(e) {
                            if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
                                var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                                return t.width = THREE.Math.nearestPowerOfTwo(e.width),
                                t.height = THREE.Math.nearestPowerOfTwo(e.height),
                                t.getContext("2d").drawImage(e, 0, 0, t.width, t.height),
                                console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e),
                                t
                            }
                            return e
                        }(h));
                        var u = c(h)
                          , p = a(i.format)
                          , f = a(i.type);
                        d(e.TEXTURE_2D, i, u);
                        var E, m = i.mipmaps;
                        if (i instanceof THREE.DepthTexture) {
                            var T = e.DEPTH_COMPONENT;
                            if (i.type === THREE.FloatType) {
                                if (!v)
                                    throw new Error("Float Depth Texture only supported in WebGL2.0");
                                T = e.DEPTH_COMPONENT32F
                            } else
                                v && (T = e.DEPTH_COMPONENT16);
                            r.texImage2D(e.TEXTURE_2D, 0, T, h.width, h.height, 0, p, f, null)
                        } else if (i instanceof THREE.DataTexture)
                            if (m.length > 0 && u) {
                                for (var y = 0, R = m.length; y < R; y++)
                                    E = m[y],
                                    r.texImage2D(e.TEXTURE_2D, y, p, E.width, E.height, 0, p, f, E.data);
                                i.generateMipmaps = !1
                            } else
                                r.texImage2D(e.TEXTURE_2D, 0, p, h.width, h.height, 0, p, f, h.data);
                        else if (i instanceof THREE.CompressedTexture)
                            for (var y = 0, R = m.length; y < R; y++)
                                E = m[y],
                                i.format !== THREE.RGBAFormat && i.format !== THREE.RGBFormat ? r.getCompressedTextureFormats().indexOf(p) > -1 ? r.compressedTexImage2D(e.TEXTURE_2D, y, p, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : r.texImage2D(e.TEXTURE_2D, y, p, E.width, E.height, 0, p, f, E.data);
                        else if (m.length > 0 && u) {
                            for (var y = 0, R = m.length; y < R; y++)
                                E = m[y],
                                r.texImage2D(e.TEXTURE_2D, y, p, p, f, E);
                            i.generateMipmaps = !1
                        } else
                            r.texImage2D(e.TEXTURE_2D, 0, p, p, f, h);
                        i.generateMipmaps && u && e.generateMipmap(e.TEXTURE_2D);
                        t.__version = i.version,
                        i.onUpdate && i.onUpdate(i)
                    }(h, t, o);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
            }
        }
        r.activeTexture(e.TEXTURE0 + o),
        r.bindTexture(e.TEXTURE_2D, h.__webglTexture)
    }
    function d(r, o, s) {
        var c;
        if (s ? (e.texParameteri(r, e.TEXTURE_WRAP_S, a(o.wrapS)),
        e.texParameteri(r, e.TEXTURE_WRAP_T, a(o.wrapT)),
        e.texParameteri(r, e.TEXTURE_MAG_FILTER, a(o.magFilter)),
        e.texParameteri(r, e.TEXTURE_MIN_FILTER, a(o.minFilter))) : (e.texParameteri(r, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(r, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        o.wrapS === THREE.ClampToEdgeWrapping && o.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o),
        e.texParameteri(r, e.TEXTURE_MAG_FILTER, h(o.magFilter)),
        e.texParameteri(r, e.TEXTURE_MIN_FILTER, h(o.minFilter)),
        o.minFilter !== THREE.NearestFilter && o.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)),
        c = t.get("EXT_texture_filter_anisotropic")) {
            if (o.type === THREE.FloatType && null === t.get("OES_texture_float_linear"))
                return;
            if (o.type === THREE.HalfFloatType && null === t.get("OES_texture_half_float_linear"))
                return;
            (o.anisotropy > 1 || i.get(o).__currentAnisotropy) && (e.texParameterf(r, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, n.getMaxAnisotropy())),
            i.get(o).__currentAnisotropy = o.anisotropy)
        }
    }
    function f(t, n, o, s) {
        var c = a(n.texture.format)
          , h = a(n.texture.type);
        r.texImage2D(s, 0, c, n.width, n.height, 0, c, h, null),
        e.bindFramebuffer(e.FRAMEBUFFER, t),
        e.framebufferTexture2D(e.FRAMEBUFFER, o, s, i.get(n.texture).__webglTexture, 0),
        e.bindFramebuffer(e.FRAMEBUFFER, null)
    }
    function E(t, r) {
        e.bindRenderbuffer(e.RENDERBUFFER, t),
        r.depthBuffer && !r.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, r.width, r.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : r.depthBuffer && r.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, r.width, r.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, r.width, r.height),
        e.bindRenderbuffer(e.RENDERBUFFER, null)
    }
    function m(t) {
        var r = i.get(t)
          , n = t instanceof THREE.WebGLRenderTargetCube;
        if (t.depthTexture) {
            if (n)
                throw new Error("target.depthTexture not supported in Cube render targets");
            !function(t, r) {
                if (r instanceof THREE.WebGLRenderTargetCube)
                    throw new Error("Depth Texture with cube render targets is not supported!");
                if (e.bindFramebuffer(e.FRAMEBUFFER, t),
                !(r.depthTexture instanceof THREE.DepthTexture))
                    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                r.depthTexture.image.height = r.height,
                r.depthTexture.needsUpdate = !0),
                p(r.depthTexture, 0);
                var n = i.get(r.depthTexture).__webglTexture;
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, n, 0)
            }(r.__webglFramebuffer, t)
        } else if (n) {
            r.__webglDepthbuffer = [];
            for (var a = 0; a < 6; a++)
                e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[a]),
                r.__webglDepthbuffer[a] = e.createRenderbuffer(),
                E(r.__webglDepthbuffer[a], t)
        } else
            e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
            r.__webglDepthbuffer = e.createRenderbuffer(),
            E(r.__webglDepthbuffer, t);
        e.bindFramebuffer(e.FRAMEBUFFER, null)
    }
    var g = o.memory
      , v = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
    this.setTexture2D = p,
    this.setTextureCube = function(t, o) {
        var h = i.get(t);
        if (6 === t.image.length)
            if (t.version > 0 && h.__version !== t.version) {
                h.__image__webglTextureCube || (t.addEventListener("dispose", l),
                h.__image__webglTextureCube = e.createTexture(),
                g.textures++),
                r.activeTexture(e.TEXTURE0 + o),
                r.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube),
                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                for (var u = t instanceof THREE.CompressedTexture, p = t.image[0]instanceof THREE.DataTexture, f = [], E = 0; E < 6; E++)
                    f[E] = u || p ? p ? t.image[E].image : t.image[E] : s(t.image[E], n.maxCubemapSize);
                var m = c(f[0])
                  , v = a(t.format)
                  , T = a(t.type);
                for (d(e.TEXTURE_CUBE_MAP, t, m),
                E = 0; E < 6; E++)
                    if (u)
                        for (var y, R = f[E].mipmaps, x = 0, H = R.length; x < H; x++)
                            y = R[x],
                            t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat ? r.getCompressedTextureFormats().indexOf(v) > -1 ? r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, x, v, y.width, y.height, 0, y.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, x, v, y.width, y.height, 0, v, T, y.data);
                    else
                        p ? r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, v, f[E].width, f[E].height, 0, v, T, f[E].data) : r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, v, v, T, f[E]);
                t.generateMipmaps && m && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                h.__version = t.version,
                t.onUpdate && t.onUpdate(t)
            } else
                r.activeTexture(e.TEXTURE0 + o),
                r.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube)
    }
    ,
    this.setTextureCubeDynamic = function(t, n) {
        r.activeTexture(e.TEXTURE0 + n),
        r.bindTexture(e.TEXTURE_CUBE_MAP, i.get(t).__webglTexture)
    }
    ,
    this.setupRenderTarget = function(t) {
        var n = i.get(t)
          , a = i.get(t.texture);
        t.addEventListener("dispose", u),
        a.__webglTexture = e.createTexture(),
        g.textures++;
        var o = t instanceof THREE.WebGLRenderTargetCube
          , s = c(t);
        if (o)
            for (n.__webglFramebuffer = [],
            h = 0; h < 6; h++)
                n.__webglFramebuffer[h] = e.createFramebuffer();
        else
            n.__webglFramebuffer = e.createFramebuffer();
        if (o) {
            r.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture),
            d(e.TEXTURE_CUBE_MAP, t.texture, s);
            for (var h = 0; h < 6; h++)
                f(n.__webglFramebuffer[h], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + h);
            t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_CUBE_MAP),
            r.bindTexture(e.TEXTURE_CUBE_MAP, null)
        } else
            r.bindTexture(e.TEXTURE_2D, a.__webglTexture),
            d(e.TEXTURE_2D, t.texture, s),
            f(n.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D),
            t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_2D),
            r.bindTexture(e.TEXTURE_2D, null);
        t.depthBuffer && m(t)
    }
    ,
    this.updateRenderTargetMipmap = function(t) {
        var n = t.texture;
        if (n.generateMipmaps && c(t) && n.minFilter !== THREE.NearestFilter && n.minFilter !== THREE.LinearFilter) {
            var a = t instanceof THREE.WebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D
              , o = i.get(n).__webglTexture;
            r.bindTexture(a, o),
            e.generateMipmap(a),
            r.bindTexture(a, null)
        }
    }
}
,
THREE.WebGLUniforms = function() {
    var e = new THREE.Texture
      , t = new THREE.CubeTexture
      , r = function() {
        this.seq = [],
        this.map = {}
    }
      , i = []
      , n = []
      , a = function(e, t, r) {
        var n = e[0];
        if (n <= 0 || n > 0)
            return e;
        var a = t * r
          , o = i[a];
        if (void 0 === o && (o = new Float32Array(a),
        i[a] = o),
        0 !== t) {
            n.toArray(o, 0);
            for (var s = 1, c = 0; s !== t; ++s)
                c += r,
                e[s].toArray(o, c)
        }
        return o
    }
      , o = function(e, t) {
        var r = n[t];
        void 0 === r && (r = new Int32Array(t),
        n[t] = r);
        for (var i = 0; i !== t; ++i)
            r[i] = e.allocTextureUnit();
        return r
    }
      , s = function(e, t) {
        e.uniform1f(this.addr, t)
    }
      , c = function(e, t) {
        e.uniform1i(this.addr, t)
    }
      , h = function(e, t) {
        void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
    }
      , l = function(e, t) {
        void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
    }
      , u = function(e, t) {
        void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
    }
      , p = function(e, t) {
        e.uniformMatrix2fv(this.addr, !1, t.elements || t)
    }
      , d = function(e, t) {
        e.uniformMatrix3fv(this.addr, !1, t.elements || t)
    }
      , f = function(e, t) {
        e.uniformMatrix4fv(this.addr, !1, t.elements || t)
    }
      , E = function(t, r, i) {
        var n = i.allocTextureUnit();
        t.uniform1i(this.addr, n),
        i.setTexture2D(r || e, n)
    }
      , m = function(e, r, i) {
        var n = i.allocTextureUnit();
        e.uniform1i(this.addr, n),
        i.setTextureCube(r || t, n)
    }
      , g = function(e, t) {
        e.uniform2iv(this.addr, t)
    }
      , v = function(e, t) {
        e.uniform3iv(this.addr, t)
    }
      , T = function(e, t) {
        e.uniform4iv(this.addr, t)
    }
      , y = function(e, t) {
        e.uniform1fv(this.addr, t)
    }
      , R = function(e, t) {
        e.uniform1iv(this.addr, t)
    }
      , x = function(e, t) {
        e.uniform2fv(this.addr, a(t, this.size, 2))
    }
      , H = function(e, t) {
        e.uniform3fv(this.addr, a(t, this.size, 3))
    }
      , b = function(e, t) {
        e.uniform4fv(this.addr, a(t, this.size, 4))
    }
      , _ = function(e, t) {
        e.uniformMatrix2fv(this.addr, !1, a(t, this.size, 4))
    }
      , M = function(e, t) {
        e.uniformMatrix3fv(this.addr, !1, a(t, this.size, 9))
    }
      , w = function(e, t) {
        e.uniformMatrix4fv(this.addr, !1, a(t, this.size, 16))
    }
      , S = function(t, r, i) {
        var n = r.length
          , a = o(i, n);
        t.uniform1iv(this.addr, a);
        for (var s = 0; s !== n; ++s)
            i.setTexture2D(r[s] || e, a[s])
    }
      , A = function(e, r, i) {
        var n = r.length
          , a = o(i, n);
        e.uniform1iv(this.addr, a);
        for (var s = 0; s !== n; ++s)
            i.setTextureCube(r[s] || t, a[s])
    }
      , L = function(e, t, r) {
        this.id = e,
        this.addr = r,
        this.setValue = function(e) {
            switch (e) {
            case 5126:
                return s;
            case 35664:
                return h;
            case 35665:
                return l;
            case 35666:
                return u;
            case 35674:
                return p;
            case 35675:
                return d;
            case 35676:
                return f;
            case 35678:
                return E;
            case 35680:
                return m;
            case 5124:
            case 35670:
                return c;
            case 35667:
            case 35671:
                return g;
            case 35668:
            case 35672:
                return v;
            case 35669:
            case 35673:
                return T
            }
        }(t.type)
    }
      , C = function(e, t, r) {
        this.id = e,
        this.addr = r,
        this.size = t.size,
        this.setValue = function(e) {
            switch (e) {
            case 5126:
                return y;
            case 35664:
                return x;
            case 35665:
                return H;
            case 35666:
                return b;
            case 35674:
                return _;
            case 35675:
                return M;
            case 35676:
                return w;
            case 35678:
                return S;
            case 35680:
                return A;
            case 5124:
            case 35670:
                return R;
            case 35667:
            case 35671:
                return g;
            case 35668:
            case 35672:
                return v;
            case 35669:
            case 35673:
                return T
            }
        }(t.type)
    }
      , P = function(e) {
        this.id = e,
        r.call(this)
    };
    P.prototype.setValue = function(e, t) {
        for (var r = this.seq, i = 0, n = r.length; i !== n; ++i) {
            var a = r[i];
            a.setValue(e, t[a.id])
        }
    }
    ;
    var B = /([\w\d_]+)(\])?(\[|\.)?/g
      , U = function(e, t) {
        e.seq.push(t),
        e.map[t.id] = t
    }
      , D = function(e, t, r) {
        var i = e.name
          , n = i.length;
        for (B.lastIndex = 0; ; ) {
            var a = B.exec(i)
              , o = B.lastIndex
              , s = a[1]
              , c = "]" === a[2]
              , h = a[3];
            if (c && (s |= 0),
            void 0 === h || "[" === h && o + 2 === n) {
                U(r, void 0 === h ? new L(s,e,t) : new C(s,e,t));
                break
            }
            var l = r.map[s];
            void 0 === l && (l = new P(s),
            U(r, l)),
            r = l
        }
    }
      , I = function(e, t, i) {
        r.call(this),
        this.renderer = i;
        for (var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), a = 0; a !== n; ++a) {
            var o = e.getActiveUniform(t, a)
              , s = o.name
              , c = e.getUniformLocation(t, s);
            D(o, c, this)
        }
    };
    return I.prototype.setValue = function(e, t, r) {
        var i = this.map[t];
        void 0 !== i && i.setValue(e, r, this.renderer)
    }
    ,
    I.prototype.set = function(e, t, r) {
        var i = this.map[r];
        void 0 !== i && i.setValue(e, t[r], this.renderer)
    }
    ,
    I.prototype.setOptional = function(e, t, r) {
        var i = t[r];
        void 0 !== i && this.setValue(e, r, i)
    }
    ,
    I.upload = function(e, t, r, i) {
        for (var n = 0, a = t.length; n !== a; ++n) {
            var o = t[n]
              , s = r[o.id];
            !1 !== s.needsUpdate && o.setValue(e, s.value, i)
        }
    }
    ,
    I.seqWithValue = function(e, t) {
        for (var r = [], i = 0, n = e.length; i !== n; ++i) {
            var a = e[i];
            a.id in t && r.push(a)
        }
        return r
    }
    ,
    I.splitDynamic = function(e, t) {
        for (var r = null, i = e.length, n = 0, a = 0; a !== i; ++a) {
            var o = e[a]
              , s = t[o.id];
            s && !0 === s.dynamic ? (null === r && (r = []),
            r.push(o)) : (n < a && (e[n] = o),
            ++n)
        }
        return n < i && (e.length = n),
        r
    }
    ,
    I.evalDynamic = function(e, t, r, i) {
        for (var n = 0, a = e.length; n !== a; ++n) {
            var o = t[e[n].id]
              , s = o.onUpdateCallback;
            void 0 !== s && s.call(o, r, i)
        }
    }
    ,
    I
}(),
THREE.LensFlarePlugin = function(e, t) {
    function r() {
        var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
          , r = new Uint16Array([0, 1, 2, 0, 2, 3]);
        i = u.createBuffer(),
        n = u.createBuffer(),
        u.bindBuffer(u.ARRAY_BUFFER, i),
        u.bufferData(u.ARRAY_BUFFER, t, u.STATIC_DRAW),
        u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, n),
        u.bufferData(u.ELEMENT_ARRAY_BUFFER, r, u.STATIC_DRAW),
        h = u.createTexture(),
        l = u.createTexture(),
        p.bindTexture(u.TEXTURE_2D, h),
        u.texImage2D(u.TEXTURE_2D, 0, u.RGB, 16, 16, 0, u.RGB, u.UNSIGNED_BYTE, null),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST),
        p.bindTexture(u.TEXTURE_2D, l),
        u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, 16, 16, 0, u.RGBA, u.UNSIGNED_BYTE, null),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST),
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST),
        a = {
            vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
        },
        o = function(t) {
            var r = u.createProgram()
              , i = u.createShader(u.FRAGMENT_SHADER)
              , n = u.createShader(u.VERTEX_SHADER)
              , a = "precision " + e.getPrecision() + " float;\n";
            return u.shaderSource(i, a + t.fragmentShader),
            u.shaderSource(n, a + t.vertexShader),
            u.compileShader(i),
            u.compileShader(n),
            u.attachShader(r, i),
            u.attachShader(r, n),
            u.linkProgram(r),
            r
        }(a),
        s = {
            vertex: u.getAttribLocation(o, "position"),
            uv: u.getAttribLocation(o, "uv")
        },
        c = {
            renderType: u.getUniformLocation(o, "renderType"),
            map: u.getUniformLocation(o, "map"),
            occlusionMap: u.getUniformLocation(o, "occlusionMap"),
            opacity: u.getUniformLocation(o, "opacity"),
            color: u.getUniformLocation(o, "color"),
            scale: u.getUniformLocation(o, "scale"),
            rotation: u.getUniformLocation(o, "rotation"),
            screenPosition: u.getUniformLocation(o, "screenPosition")
        }
    }
    var i, n, a, o, s, c, h, l, u = e.context, p = e.state;
    this.render = function(a, d, f) {
        if (0 !== t.length) {
            var E = new THREE.Vector3
              , m = f.w / f.z
              , g = .5 * f.z
              , v = .5 * f.w
              , T = 16 / f.w
              , y = new THREE.Vector2(T * m,T)
              , R = new THREE.Vector3(1,1,0)
              , x = new THREE.Vector2(1,1)
              , H = new THREE.Box2;
            H.min.set(0, 0),
            H.max.set(f.z - 16, f.w - 16),
            void 0 === o && r(),
            u.useProgram(o),
            p.initAttributes(),
            p.enableAttribute(s.vertex),
            p.enableAttribute(s.uv),
            p.disableUnusedAttributes(),
            u.uniform1i(c.occlusionMap, 0),
            u.uniform1i(c.map, 1),
            u.bindBuffer(u.ARRAY_BUFFER, i),
            u.vertexAttribPointer(s.vertex, 2, u.FLOAT, !1, 16, 0),
            u.vertexAttribPointer(s.uv, 2, u.FLOAT, !1, 16, 8),
            u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, n),
            p.disable(u.CULL_FACE),
            p.setDepthWrite(!1);
            for (var b = 0, _ = t.length; b < _; b++) {
                T = 16 / f.w,
                y.set(T * m, T);
                var M = t[b];
                if (E.set(M.matrixWorld.elements[12], M.matrixWorld.elements[13], M.matrixWorld.elements[14]),
                E.applyMatrix4(d.matrixWorldInverse),
                E.applyProjection(d.projectionMatrix),
                R.copy(E),
                x.x = f.x + R.x * g + g - 8,
                x.y = f.y + R.y * v + v - 8,
                !0 === H.containsPoint(x)) {
                    p.activeTexture(u.TEXTURE0),
                    p.bindTexture(u.TEXTURE_2D, null),
                    p.activeTexture(u.TEXTURE1),
                    p.bindTexture(u.TEXTURE_2D, h),
                    u.copyTexImage2D(u.TEXTURE_2D, 0, u.RGB, x.x, x.y, 16, 16, 0),
                    u.uniform1i(c.renderType, 0),
                    u.uniform2f(c.scale, y.x, y.y),
                    u.uniform3f(c.screenPosition, R.x, R.y, R.z),
                    p.disable(u.BLEND),
                    p.enable(u.DEPTH_TEST),
                    u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0),
                    p.activeTexture(u.TEXTURE0),
                    p.bindTexture(u.TEXTURE_2D, l),
                    u.copyTexImage2D(u.TEXTURE_2D, 0, u.RGBA, x.x, x.y, 16, 16, 0),
                    u.uniform1i(c.renderType, 1),
                    p.disable(u.DEPTH_TEST),
                    p.activeTexture(u.TEXTURE1),
                    p.bindTexture(u.TEXTURE_2D, h),
                    u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0),
                    M.positionScreen.copy(R),
                    M.customUpdateCallback ? M.customUpdateCallback(M) : M.updateLensFlares(),
                    u.uniform1i(c.renderType, 2),
                    p.enable(u.BLEND);
                    for (var w = 0, S = M.lensFlares.length; w < S; w++) {
                        var A = M.lensFlares[w];
                        A.opacity > .001 && A.scale > .001 && (R.x = A.x,
                        R.y = A.y,
                        R.z = A.z,
                        T = A.size * A.scale / f.w,
                        y.x = T * m,
                        y.y = T,
                        u.uniform3f(c.screenPosition, R.x, R.y, R.z),
                        u.uniform2f(c.scale, y.x, y.y),
                        u.uniform1f(c.rotation, A.rotation),
                        u.uniform1f(c.opacity, A.opacity),
                        u.uniform3f(c.color, A.color.r, A.color.g, A.color.b),
                        p.setBlending(A.blending, A.blendEquation, A.blendSrc, A.blendDst),
                        e.setTexture2D(A.texture, 1),
                        u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0))
                    }
                }
            }
            p.enable(u.CULL_FACE),
            p.enable(u.DEPTH_TEST),
            p.setDepthWrite(!0),
            e.resetGLState()
        }
    }
}
,
THREE.SpritePlugin = function(e, t) {
    function r() {
        var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
          , r = new Uint16Array([0, 1, 2, 0, 2, 3]);
        n = l.createBuffer(),
        a = l.createBuffer(),
        l.bindBuffer(l.ARRAY_BUFFER, n),
        l.bufferData(l.ARRAY_BUFFER, t, l.STATIC_DRAW),
        l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, a),
        l.bufferData(l.ELEMENT_ARRAY_BUFFER, r, l.STATIC_DRAW),
        o = function() {
            var t = l.createProgram()
              , r = l.createShader(l.VERTEX_SHADER)
              , i = l.createShader(l.FRAGMENT_SHADER);
            return l.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
            l.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
            l.compileShader(r),
            l.compileShader(i),
            l.attachShader(t, r),
            l.attachShader(t, i),
            l.linkProgram(t),
            t
        }(),
        s = {
            position: l.getAttribLocation(o, "position"),
            uv: l.getAttribLocation(o, "uv")
        },
        c = {
            uvOffset: l.getUniformLocation(o, "uvOffset"),
            uvScale: l.getUniformLocation(o, "uvScale"),
            rotation: l.getUniformLocation(o, "rotation"),
            scale: l.getUniformLocation(o, "scale"),
            color: l.getUniformLocation(o, "color"),
            map: l.getUniformLocation(o, "map"),
            opacity: l.getUniformLocation(o, "opacity"),
            modelViewMatrix: l.getUniformLocation(o, "modelViewMatrix"),
            projectionMatrix: l.getUniformLocation(o, "projectionMatrix"),
            fogType: l.getUniformLocation(o, "fogType"),
            fogDensity: l.getUniformLocation(o, "fogDensity"),
            fogNear: l.getUniformLocation(o, "fogNear"),
            fogFar: l.getUniformLocation(o, "fogFar"),
            fogColor: l.getUniformLocation(o, "fogColor"),
            alphaTest: l.getUniformLocation(o, "alphaTest")
        };
        var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        i.width = 8,
        i.height = 8;
        var u = i.getContext("2d");
        u.fillStyle = "white",
        u.fillRect(0, 0, 8, 8),
        (h = new THREE.Texture(i)).needsUpdate = !0
    }
    function i(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
    }
    var n, a, o, s, c, h, l = e.context, u = e.state, p = new THREE.Vector3, d = new THREE.Quaternion, f = new THREE.Vector3;
    this.render = function(E, m) {
        if (0 !== t.length) {
            void 0 === o && r(),
            l.useProgram(o),
            u.initAttributes(),
            u.enableAttribute(s.position),
            u.enableAttribute(s.uv),
            u.disableUnusedAttributes(),
            u.disable(l.CULL_FACE),
            u.enable(l.BLEND),
            l.bindBuffer(l.ARRAY_BUFFER, n),
            l.vertexAttribPointer(s.position, 2, l.FLOAT, !1, 16, 0),
            l.vertexAttribPointer(s.uv, 2, l.FLOAT, !1, 16, 8),
            l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, a),
            l.uniformMatrix4fv(c.projectionMatrix, !1, m.projectionMatrix.elements),
            u.activeTexture(l.TEXTURE0),
            l.uniform1i(c.map, 0);
            var g = 0
              , v = 0
              , T = E.fog;
            T ? (l.uniform3f(c.fogColor, T.color.r, T.color.g, T.color.b),
            T instanceof THREE.Fog ? (l.uniform1f(c.fogNear, T.near),
            l.uniform1f(c.fogFar, T.far),
            l.uniform1i(c.fogType, 1),
            g = 1,
            v = 1) : T instanceof THREE.FogExp2 && (l.uniform1f(c.fogDensity, T.density),
            l.uniform1i(c.fogType, 2),
            g = 2,
            v = 2)) : (l.uniform1i(c.fogType, 0),
            g = 0,
            v = 0);
            for (var y = 0, R = t.length; y < R; y++) {
                (H = t[y]).modelViewMatrix.multiplyMatrices(m.matrixWorldInverse, H.matrixWorld),
                H.z = -H.modelViewMatrix.elements[14]
            }
            t.sort(i);
            for (var x = [], y = 0, R = t.length; y < R; y++) {
                var H = t[y]
                  , b = H.material;
                if (!1 !== b.visible) {
                    l.uniform1f(c.alphaTest, b.alphaTest),
                    l.uniformMatrix4fv(c.modelViewMatrix, !1, H.modelViewMatrix.elements),
                    H.matrixWorld.decompose(p, d, f),
                    x[0] = f.x,
                    x[1] = f.y;
                    var _ = 0;
                    E.fog && b.fog && (_ = v),
                    g !== _ && (l.uniform1i(c.fogType, _),
                    g = _),
                    null !== b.map ? (l.uniform2f(c.uvOffset, b.map.offset.x, b.map.offset.y),
                    l.uniform2f(c.uvScale, b.map.repeat.x, b.map.repeat.y)) : (l.uniform2f(c.uvOffset, 0, 0),
                    l.uniform2f(c.uvScale, 1, 1)),
                    l.uniform1f(c.opacity, b.opacity),
                    l.uniform3f(c.color, b.color.r, b.color.g, b.color.b),
                    l.uniform1f(c.rotation, b.rotation),
                    l.uniform2fv(c.scale, x),
                    u.setBlending(b.blending, b.blendEquation, b.blendSrc, b.blendDst),
                    u.setDepthTest(b.depthTest),
                    u.setDepthWrite(b.depthWrite),
                    b.map ? e.setTexture2D(b.map, 0) : e.setTexture2D(h, 0),
                    l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0)
                }
            }
            u.enable(l.CULL_FACE),
            e.resetGLState()
        }
    }
}
,
Object.assign(THREE, {
    Face4: function(e, t, r, i, n, a, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
        new THREE.Face3(e,t,r,n,a,o)
    },
    LineStrip: 0,
    LinePieces: 1,
    MeshFaceMaterial: THREE.MultiMaterial,
    PointCloud: function(e, t) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
        new THREE.Points(e,t)
    },
    Particle: THREE.Sprite,
    ParticleSystem: function(e, t) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
        new THREE.Points(e,t)
    },
    PointCloudMaterial: function(e) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
        new THREE.PointsMaterial(e)
    },
    ParticleBasicMaterial: function(e) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
        new THREE.PointsMaterial(e)
    },
    ParticleSystemMaterial: function(e) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
        new THREE.PointsMaterial(e)
    },
    Vertex: function(e, t, r) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
        new THREE.Vector3(e,t,r)
    }
}),
Object.assign(THREE.Box2.prototype, {
    empty: function() {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
    },
    isIntersectionBox: function(e) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
        this.intersectsBox(e)
    }
}),
Object.assign(THREE.Box3.prototype, {
    empty: function() {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
        this.isEmpty()
    },
    isIntersectionBox: function(e) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
        this.intersectsBox(e)
    },
    isIntersectionSphere: function(e) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
        this.intersectsSphere(e)
    }
}),
Object.assign(THREE.Matrix3.prototype, {
    multiplyVector3: function(e) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
        e.applyMatrix3(this)
    },
    multiplyVector3Array: function(e) {
        return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
        this.applyToVector3Array(e)
    }
}),
Object.assign(THREE.Matrix4.prototype, {
    extractPosition: function(e) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
        this.copyPosition(e)
    },
    setRotationFromQuaternion: function(e) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
        this.makeRotationFromQuaternion(e)
    },
    multiplyVector3: function(e) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
        e.applyProjection(this)
    },
    multiplyVector4: function(e) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        e.applyMatrix4(this)
    },
    multiplyVector3Array: function(e) {
        return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
        this.applyToVector3Array(e)
    },
    rotateAxis: function(e) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
        e.transformDirection(this)
    },
    crossVector: function(e) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        e.applyMatrix4(this)
    },
    translate: function(e) {
        console.error("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function(e) {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function(e) {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function(e) {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function(e, t) {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    }
}),
Object.assign(THREE.Plane.prototype, {
    isIntersectionLine: function(e) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
        this.intersectsLine(e)
    }
}),
Object.assign(THREE.Quaternion.prototype, {
    multiplyVector3: function(e) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        e.applyQuaternion(this)
    }
}),
Object.assign(THREE.Ray.prototype, {
    isIntersectionBox: function(e) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
        this.intersectsBox(e)
    },
    isIntersectionPlane: function(e) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
        this.intersectsPlane(e)
    },
    isIntersectionSphere: function(e) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
        this.intersectsSphere(e)
    }
}),
Object.assign(THREE.Vector3.prototype, {
    setEulerFromRotationMatrix: function() {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    },
    setEulerFromQuaternion: function() {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    },
    getPositionFromMatrix: function(e) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
        this.setFromMatrixPosition(e)
    },
    getScaleFromMatrix: function(e) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
        this.setFromMatrixScale(e)
    },
    getColumnFromMatrix: function(e, t) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
        this.setFromMatrixColumn(t, e)
    }
}),
Object.assign(THREE.Object3D.prototype, {
    getChildByName: function(e) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
        this.getObjectByName(e)
    },
    renderDepth: function(e) {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    },
    translate: function(e, t) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
        this.translateOnAxis(t, e)
    }
}),
Object.defineProperties(THREE.Object3D.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
        },
        set: function(e) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order = e
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function(e) {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
}),
Object.defineProperties(THREE.LOD.prototype, {
    objects: {
        get: function() {
            return console.warn("THREE.LOD: .objects has been renamed to .levels."),
            this.levels
        }
    }
}),
THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
    void 0 !== t && (this.filmGauge = t),
    this.setFocalLength(e)
}
,
Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function(e) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
            this.shadow.camera.fov = e
        }
    },
    shadowCameraLeft: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
            this.shadow.camera.left = e
        }
    },
    shadowCameraRight: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
            this.shadow.camera.right = e
        }
    },
    shadowCameraTop: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
            this.shadow.camera.top = e
        }
    },
    shadowCameraBottom: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
            this.shadow.camera.bottom = e
        }
    },
    shadowCameraNear: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
            this.shadow.camera.near = e
        }
    },
    shadowCameraFar: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
            this.shadow.camera.far = e
        }
    },
    shadowCameraVisible: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(e) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            this.shadow.bias = e
        }
    },
    shadowDarkness: {
        set: function(e) {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(e) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
            this.shadow.mapSize.width = e
        }
    },
    shadowMapHeight: {
        set: function(e) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
            this.shadow.mapSize.height = e
        }
    }
}),
Object.defineProperties(THREE.BufferAttribute.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
            this.array.length
        }
    }
}),
Object.assign(THREE.BufferGeometry.prototype, {
    addIndex: function(e) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
        this.setIndex(e)
    },
    addDrawCall: function(e, t, r) {
        void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
        console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
        this.addGroup(e, t)
    },
    clearDrawCalls: function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
        this.clearGroups()
    },
    computeTangents: function() {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
    },
    computeOffsets: function() {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    }
}),
Object.defineProperties(THREE.BufferGeometry.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
            this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
            this.groups
        }
    }
}),
Object.defineProperties(THREE.Material.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        },
        set: function(e) {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
            new THREE.Color
        }
    }
}),
Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
    metal: {
        get: function() {
            return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
            !1
        },
        set: function(e) {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
    }
}),
Object.defineProperties(THREE.ShaderMaterial.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives
        },
        set: function(e) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives = e
        }
    }
}),
THREE.EventDispatcher.prototype = Object.assign(Object.create({
    constructor: THREE.EventDispatcher,
    apply: function(e) {
        console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),
        Object.assign(e, this)
    }
}), THREE.EventDispatcher.prototype),
Object.assign(THREE.WebGLRenderer.prototype, {
    supportsFloatTextures: function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
        this.extensions.get("OES_texture_float")
    },
    supportsHalfFloatTextures: function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
        this.extensions.get("OES_texture_half_float")
    },
    supportsStandardDerivatives: function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
        this.extensions.get("OES_standard_derivatives")
    },
    supportsCompressedTextureS3TC: function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
        this.extensions.get("WEBGL_compressed_texture_s3tc")
    },
    supportsCompressedTexturePVRTC: function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
        this.extensions.get("WEBGL_compressed_texture_pvrtc")
    },
    supportsBlendMinMax: function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
        this.extensions.get("EXT_blend_minmax")
    },
    supportsVertexTextures: function() {
        return this.capabilities.vertexTextures
    },
    supportsInstancedArrays: function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
        this.extensions.get("ANGLE_instanced_arrays")
    },
    enableScissorTest: function(e) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
        this.setScissorTest(e)
    },
    initMaterial: function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    },
    addPrePlugin: function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    },
    addPostPlugin: function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    },
    updateShadowMap: function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    }
}),
Object.defineProperties(THREE.WebGLRenderer.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
            this.shadowMap.enabled = e
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
            this.shadowMap.type = e
        }
    },
    shadowMapCullFace: {
        get: function() {
            return this.shadowMap.cullFace
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
            this.shadowMap.cullFace = e
        }
    }
}),
Object.defineProperties(THREE.WebGLShadowMap.prototype, {
    cullFace: {
        get: function() {
            return this.renderReverseSided ? THREE.CullFaceFront : THREE.CullFaceBack
        },
        set: function(e) {
            var t = e !== THREE.CullFaceBack;
            console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + t + "."),
            this.renderReverseSided = t
        }
    }
}),
Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS = e
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT = e
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter = e
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter = e
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy = e
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset = e
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat = e
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format = e
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type = e
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps = e
        }
    }
}),
Object.assign(THREE.Audio.prototype, {
    load: function(e) {
        console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
        var t = this;
        return (new THREE.AudioLoader).load(e, function(e) {
            t.setBuffer(e)
        }),
        this
    }
}),
Object.assign(THREE.AudioAnalyser.prototype, {
    getData: function(e) {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
        this.getFrequencyData()
    }
}),
THREE.GeometryUtils = {
    merge: function(e, t, r) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var i;
        t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(),
        i = t.matrix,
        t = t.geometry),
        e.merge(t, i, r)
    },
    center: function(e) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
        e.center()
    }
},
THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function(e, t, r, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var n = new THREE.TextureLoader;
        n.setCrossOrigin(this.crossOrigin);
        var a = n.load(e, r, void 0, i);
        return t && (a.mapping = t),
        a
    },
    loadTextureCube: function(e, t, r, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var n = new THREE.CubeTextureLoader;
        n.setCrossOrigin(this.crossOrigin);
        var a = n.load(e, r, void 0, i);
        return t && (a.mapping = t),
        a
    },
    loadCompressedTexture: function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    },
    loadCompressedTextureCube: function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
},
THREE.Projector = function() {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
    this.projectVector = function(e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."),
        e.project(t)
    }
    ,
    this.unprojectVector = function(e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
        e.unproject(t)
    }
    ,
    this.pickingRay = function(e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
}
,
THREE.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
    this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
    this.clear = function() {}
    ,
    this.render = function() {}
    ,
    this.setClearColor = function() {}
    ,
    this.setSize = function() {}
}
,
THREE.CurveUtils = {
    tangentQuadraticBezier: function(e, t, r, i) {
        return 2 * (1 - e) * (r - t) + 2 * e * (i - r)
    },
    tangentCubicBezier: function(e, t, r, i, n) {
        return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * i * (1 - e) - 3 * e * e * i + 3 * e * e * n
    },
    tangentSpline: function(e, t, r, i, n) {
        return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
    },
    interpolate: function(e, t, r, i, n) {
        var a = .5 * (r - e)
          , o = .5 * (i - t)
          , s = n * n;
        return (2 * t - 2 * r + a + o) * (n * s) + (-3 * t + 3 * r - 2 * a - o) * s + a * n + t
    }
},
THREE.SceneUtils = {
    createMultiMaterialObject: function(e, t) {
        for (var r = new THREE.Group, i = 0, n = t.length; i < n; i++)
            r.add(new THREE.Mesh(e,t[i]));
        return r
    },
    detach: function(e, t, r) {
        e.applyMatrix(t.matrixWorld),
        t.remove(e),
        r.add(e)
    },
    attach: function(e, t, r) {
        var i = new THREE.Matrix4;
        i.getInverse(r.matrixWorld),
        e.applyMatrix(i),
        t.remove(e),
        r.add(e)
    }
},
THREE.ShapeUtils = {
    area: function(e) {
        for (var t = e.length, r = 0, i = t - 1, n = 0; n < t; i = n++)
            r += e[i].x * e[n].y - e[n].x * e[i].y;
        return .5 * r
    },
    triangulate: function() {
        function e(e, t, r, i, n, a) {
            var o, s, c, h, l, u, p, d, f;
            if (s = e[a[t]].x,
            c = e[a[t]].y,
            h = e[a[r]].x,
            l = e[a[r]].y,
            u = e[a[i]].x,
            p = e[a[i]].y,
            Number.EPSILON > (h - s) * (p - c) - (l - c) * (u - s))
                return !1;
            var E, m, g, v, T, y, R, x, H, b, _, M, w, S, A;
            for (E = u - h,
            m = p - l,
            g = s - u,
            v = c - p,
            T = h - s,
            y = l - c,
            o = 0; o < n; o++)
                if (d = e[a[o]].x,
                f = e[a[o]].y,
                !(d === s && f === c || d === h && f === l || d === u && f === p) && (R = d - s,
                x = f - c,
                H = d - h,
                b = f - l,
                _ = d - u,
                M = f - p,
                A = E * b - m * H,
                w = T * x - y * R,
                S = g * M - v * _,
                A >= -Number.EPSILON && S >= -Number.EPSILON && w >= -Number.EPSILON))
                    return !1;
            return !0
        }
        return function(t, r) {
            var i = t.length;
            if (i < 3)
                return null;
            var n, a, o, s = [], c = [], h = [];
            if (THREE.ShapeUtils.area(t) > 0)
                for (a = 0; a < i; a++)
                    c[a] = a;
            else
                for (a = 0; a < i; a++)
                    c[a] = i - 1 - a;
            var l = i
              , u = 2 * l;
            for (a = l - 1; l > 2; ) {
                if (u-- <= 0)
                    return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
                    r ? h : s;
                if (n = a,
                l <= n && (n = 0),
                a = n + 1,
                l <= a && (a = 0),
                o = a + 1,
                l <= o && (o = 0),
                e(t, n, a, o, l, c)) {
                    var p, d, f, E, m;
                    for (p = c[n],
                    d = c[a],
                    f = c[o],
                    s.push([t[p], t[d], t[f]]),
                    h.push([c[n], c[a], c[o]]),
                    E = a,
                    m = a + 1; m < l; E++,
                    m++)
                        c[E] = c[m];
                    u = 2 * --l
                }
            }
            return r ? h : s
        }
    }(),
    triangulateShape: function(e, t) {
        function r(e) {
            var t = e.length;
            t > 2 && e[t - 1].equals(e[0]) && e.pop()
        }
        function i(e, t, r) {
            return e.x !== t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x : t.x <= r.x && r.x <= e.x : e.y < t.y ? e.y <= r.y && r.y <= t.y : t.y <= r.y && r.y <= e.y
        }
        function n(e, t, r, n, a) {
            var o = t.x - e.x
              , s = t.y - e.y
              , c = n.x - r.x
              , h = n.y - r.y
              , l = e.x - r.x
              , u = e.y - r.y
              , p = s * c - o * h
              , d = s * l - o * u;
            if (Math.abs(p) > Number.EPSILON) {
                var f;
                if (p > 0) {
                    if (d < 0 || d > p)
                        return [];
                    if ((f = h * l - c * u) < 0 || f > p)
                        return []
                } else {
                    if (d > 0 || d < p)
                        return [];
                    if ((f = h * l - c * u) > 0 || f < p)
                        return []
                }
                if (0 === f)
                    return !a || 0 !== d && d !== p ? [e] : [];
                if (f === p)
                    return !a || 0 !== d && d !== p ? [t] : [];
                if (0 === d)
                    return [r];
                if (d === p)
                    return [n];
                var E = f / p;
                return [{
                    x: e.x + E * o,
                    y: e.y + E * s
                }]
            }
            if (0 !== d || h * l != c * u)
                return [];
            var m = 0 === o && 0 === s
              , g = 0 === c && 0 === h;
            if (m && g)
                return e.x !== r.x || e.y !== r.y ? [] : [e];
            if (m)
                return i(r, n, e) ? [e] : [];
            if (g)
                return i(e, t, r) ? [r] : [];
            var v, T, y, R, x, H, b, _;
            return 0 !== o ? (e.x < t.x ? (v = e,
            y = e.x,
            T = t,
            R = t.x) : (v = t,
            y = t.x,
            T = e,
            R = e.x),
            r.x < n.x ? (x = r,
            b = r.x,
            H = n,
            _ = n.x) : (x = n,
            b = n.x,
            H = r,
            _ = r.x)) : (e.y < t.y ? (v = e,
            y = e.y,
            T = t,
            R = t.y) : (v = t,
            y = t.y,
            T = e,
            R = e.y),
            r.y < n.y ? (x = r,
            b = r.y,
            H = n,
            _ = n.y) : (x = n,
            b = n.y,
            H = r,
            _ = r.y)),
            y <= b ? R < b ? [] : R === b ? a ? [] : [x] : R <= _ ? [x, T] : [x, H] : y > _ ? [] : y === _ ? a ? [] : [v] : R <= _ ? [v, T] : [v, H]
        }
        function a(e, t, r, i) {
            var n = t.x - e.x
              , a = t.y - e.y
              , o = r.x - e.x
              , s = r.y - e.y
              , c = i.x - e.x
              , h = i.y - e.y
              , l = n * s - a * o
              , u = n * h - a * c;
            if (Math.abs(l) > Number.EPSILON) {
                var p = c * s - h * o;
                return l > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
            }
            return u > 0
        }
        r(e),
        t.forEach(r);
        for (var o, s, c, h, l, u, p = {}, d = e.concat(), f = 0, E = t.length; f < E; f++)
            Array.prototype.push.apply(d, t[f]);
        for (o = 0,
        s = d.length; o < s; o++)
            void 0 !== p[l = d[o].x + ":" + d[o].y] && console.warn("THREE.ShapeUtils: Duplicate point", l, o),
            p[l] = o;
        var m = function(e, t) {
            function r(e, t) {
                var r = v.length - 1
                  , i = e - 1;
                i < 0 && (i = r);
                var n = e + 1;
                n > r && (n = 0);
                var o = a(v[e], v[i], v[n], s[t]);
                if (!o)
                    return !1;
                var c = s.length - 1
                  , h = t - 1;
                h < 0 && (h = c);
                var l = t + 1;
                return l > c && (l = 0),
                !!(o = a(s[t], s[h], s[l], v[e]))
            }
            function i(e, t) {
                var r, i;
                for (r = 0; r < v.length; r++)
                    if (i = r + 1,
                    i %= v.length,
                    n(e, t, v[r], v[i], !0).length > 0)
                        return !0;
                return !1
            }
            function o(e, r) {
                var i, a, o, s;
                for (i = 0; i < T.length; i++)
                    for (a = t[T[i]],
                    o = 0; o < a.length; o++)
                        if (s = o + 1,
                        s %= a.length,
                        n(e, r, a[o], a[s], !0).length > 0)
                            return !0;
                return !1
            }
            for (var s, c, h, l, u, p, d, f, E, m, g, v = e.concat(), T = [], y = [], R = 0, x = t.length; R < x; R++)
                T.push(R);
            for (var H = 0, b = 2 * T.length; T.length > 0; ) {
                if (--b < 0) {
                    console.log("Infinite Loop! Holes left:" + T.length + ", Probably Hole outside Shape!");
                    break
                }
                for (h = H; h < v.length; h++) {
                    for (l = v[h],
                    c = -1,
                    R = 0; R < T.length; R++)
                        if (p = T[R],
                        d = l.x + ":" + l.y + ":" + p,
                        void 0 === y[d]) {
                            s = t[p];
                            for (var _ = 0; _ < s.length; _++)
                                if (u = s[_],
                                r(h, _) && !i(l, u) && !o(l, u)) {
                                    c = _,
                                    T.splice(R, 1),
                                    f = v.slice(0, h + 1),
                                    E = v.slice(h),
                                    m = s.slice(c),
                                    g = s.slice(0, c + 1),
                                    v = f.concat(m).concat(g).concat(E),
                                    H = h;
                                    break
                                }
                            if (c >= 0)
                                break;
                            y[d] = !0
                        }
                    if (c >= 0)
                        break
                }
            }
            return v
        }(e, t)
          , g = THREE.ShapeUtils.triangulate(m, !1);
        for (o = 0,
        s = g.length; o < s; o++)
            for (h = g[o],
            c = 0; c < 3; c++)
                void 0 !== (u = p[l = h[c].x + ":" + h[c].y]) && (h[c] = u);
        return g.concat()
    },
    isClockWise: function(e) {
        return THREE.ShapeUtils.area(e) < 0
    },
    b2: function() {
        return function(e, t, r, i) {
            return function(e, t) {
                var r = 1 - e;
                return r * r * t
            }(e, t) + function(e, t) {
                return 2 * (1 - e) * e * t
            }(e, r) + function(e, t) {
                return e * e * t
            }(e, i)
        }
    }(),
    b3: function() {
        return function(e, t, r, i, n) {
            return function(e, t) {
                var r = 1 - e;
                return r * r * r * t
            }(e, t) + function(e, t) {
                var r = 1 - e;
                return 3 * r * r * e * t
            }(e, r) + function(e, t) {
                return 3 * (1 - e) * e * e * t
            }(e, i) + function(e, t) {
                return e * e * e * t
            }(e, n)
        }
    }()
},
THREE.Curve = function() {}
,
THREE.Curve.prototype = {
    constructor: THREE.Curve,
    getPoint: function(e) {
        return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
        null
    },
    getPointAt: function(e) {
        var t = this.getUtoTmapping(e);
        return this.getPoint(t)
    },
    getPoints: function(e) {
        e || (e = 5);
        for (var t = [], r = 0; r <= e; r++)
            t.push(this.getPoint(r / e));
        return t
    },
    getSpacedPoints: function(e) {
        e || (e = 5);
        for (var t = [], r = 0; r <= e; r++)
            t.push(this.getPointAt(r / e));
        return t
    },
    getLength: function() {
        var e = this.getLengths();
        return e[e.length - 1]
    },
    getLengths: function(e) {
        if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
        this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t, r, i = [], n = this.getPoint(0), a = 0;
        for (i.push(0),
        r = 1; r <= e; r++)
            a += (t = this.getPoint(r / e)).distanceTo(n),
            i.push(a),
            n = t;
        return this.cacheArcLengths = i,
        i
    },
    updateArcLengths: function() {
        this.needsUpdate = !0,
        this.getLengths()
    },
    getUtoTmapping: function(e, t) {
        var r, i = this.getLengths(), n = 0, a = i.length;
        r = t || e * i[a - 1];
        for (var o, s = 0, c = a - 1; s <= c; )
            if (n = Math.floor(s + (c - s) / 2),
            (o = i[n] - r) < 0)
                s = n + 1;
            else {
                if (!(o > 0)) {
                    c = n;
                    break
                }
                c = n - 1
            }
        if (n = c,
        i[n] === r) {
            return l = n / (a - 1)
        }
        var h = i[n]
          , l = (n + (r - h) / (i[n + 1] - h)) / (a - 1);
        return l
    },
    getTangent: function(e) {
        var t = e - 1e-4
          , r = e + 1e-4;
        t < 0 && (t = 0),
        r > 1 && (r = 1);
        var i = this.getPoint(t);
        return this.getPoint(r).clone().sub(i).normalize()
    },
    getTangentAt: function(e) {
        var t = this.getUtoTmapping(e);
        return this.getTangent(t)
    }
},
THREE.Curve.create = function(e, t) {
    return e.prototype = Object.create(THREE.Curve.prototype),
    e.prototype.constructor = e,
    e.prototype.getPoint = t,
    e
}
,
THREE.CurvePath = function() {
    this.curves = [],
    this.autoClose = !1
}
,
THREE.CurvePath.prototype = Object.assign(Object.create(THREE.Curve.prototype), {
    constructor: THREE.CurvePath,
    add: function(e) {
        this.curves.push(e)
    },
    closePath: function() {
        var e = this.curves[0].getPoint(0)
          , t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new THREE.LineCurve(t,e))
    },
    getPoint: function(e) {
        for (var t = e * this.getLength(), r = this.getCurveLengths(), i = 0; i < r.length; ) {
            if (r[i] >= t) {
                var n = r[i] - t
                  , a = this.curves[i]
                  , o = a.getLength()
                  , s = 0 === o ? 0 : 1 - n / o;
                return a.getPointAt(s)
            }
            i++
        }
        return null
    },
    getLength: function() {
        var e = this.getCurveLengths();
        return e[e.length - 1]
    },
    updateArcLengths: function() {
        this.needsUpdate = !0,
        this.cacheLengths = null,
        this.getLengths()
    },
    getCurveLengths: function() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
            return this.cacheLengths;
        for (var e = [], t = 0, r = 0, i = this.curves.length; r < i; r++)
            t += this.curves[r].getLength(),
            e.push(t);
        return this.cacheLengths = e,
        e
    },
    getSpacedPoints: function(e) {
        e || (e = 40);
        for (var t = [], r = 0; r <= e; r++)
            t.push(this.getPoint(r / e));
        return this.autoClose && t.push(t[0]),
        t
    },
    getPoints: function(e) {
        e = e || 12;
        for (var t, r = [], i = 0, n = this.curves; i < n.length; i++)
            for (var a = n[i], o = a instanceof THREE.EllipseCurve ? 2 * e : a instanceof THREE.LineCurve ? 1 : a instanceof THREE.SplineCurve ? e * a.points.length : e, s = a.getPoints(o), c = 0; c < s.length; c++) {
                var h = s[c];
                t && t.equals(h) || (r.push(h),
                t = h)
            }
        return this.autoClose && r.length > 1 && !r[r.length - 1].equals(r[0]) && r.push(r[0]),
        r
    },
    createPointsGeometry: function(e) {
        var t = this.getPoints(e);
        return this.createGeometry(t)
    },
    createSpacedPointsGeometry: function(e) {
        var t = this.getSpacedPoints(e);
        return this.createGeometry(t)
    },
    createGeometry: function(e) {
        for (var t = new THREE.Geometry, r = 0, i = e.length; r < i; r++) {
            var n = e[r];
            t.vertices.push(new THREE.Vector3(n.x,n.y,n.z || 0))
        }
        return t
    }
}),
THREE.Font = function(e) {
    this.data = e
}
,
Object.assign(THREE.Font.prototype, {
    generateShapes: function(e, t, r) {
        void 0 === t && (t = 100),
        void 0 === r && (r = 4);
        for (var i = this.data, n = function(e) {
            for (var n = String(e).split(""), a = t / i.resolution, o = 0, s = [], c = 0; c < n.length; c++) {
                var h = function(e, t, n) {
                    var a = i.glyphs[e] || i.glyphs["?"];
                    if (a) {
                        var o, s, c, h, l, u, p, d, f, E, m, g = new THREE.ShapePath, v = [], T = THREE.ShapeUtils.b2, y = THREE.ShapeUtils.b3;
                        if (a.o)
                            for (var R = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), x = 0, H = R.length; x < H; )
                                switch (R[x++]) {
                                case "m":
                                    o = R[x++] * t + n,
                                    s = R[x++] * t,
                                    g.moveTo(o, s);
                                    break;
                                case "l":
                                    o = R[x++] * t + n,
                                    s = R[x++] * t,
                                    g.lineTo(o, s);
                                    break;
                                case "q":
                                    if (c = R[x++] * t + n,
                                    h = R[x++] * t,
                                    p = R[x++] * t + n,
                                    d = R[x++] * t,
                                    g.quadraticCurveTo(p, d, c, h),
                                    m = v[v.length - 1])
                                        for (l = m.x,
                                        u = m.y,
                                        b = 1; b <= r; b++)
                                            T(_ = b / r, l, p, c),
                                            T(_, u, d, h);
                                    break;
                                case "b":
                                    if (c = R[x++] * t + n,
                                    h = R[x++] * t,
                                    p = R[x++] * t + n,
                                    d = R[x++] * t,
                                    f = R[x++] * t + n,
                                    E = R[x++] * t,
                                    g.bezierCurveTo(p, d, f, E, c, h),
                                    m = v[v.length - 1]) {
                                        l = m.x,
                                        u = m.y;
                                        for (var b = 1; b <= r; b++) {
                                            var _ = b / r;
                                            y(_, l, p, f, c),
                                            y(_, u, d, E, h)
                                        }
                                    }
                                }
                        return {
                            offset: a.ha * t,
                            path: g
                        }
                    }
                }(n[c], a, o);
                o += h.offset,
                s.push(h.path)
            }
            return s
        }(e), a = [], o = 0, s = n.length; o < s; o++)
            Array.prototype.push.apply(a, n[o].toShapes());
        return a
    }
}),
THREE.Path = function(e) {
    THREE.CurvePath.call(this),
    this.currentPoint = new THREE.Vector2,
    e && this.fromPoints(e)
}
,
THREE.Path.prototype = Object.assign(Object.create(THREE.CurvePath.prototype), {
    constructor: THREE.Path,
    fromPoints: function(e) {
        this.moveTo(e[0].x, e[0].y);
        for (var t = 1, r = e.length; t < r; t++)
            this.lineTo(e[t].x, e[t].y)
    },
    moveTo: function(e, t) {
        this.currentPoint.set(e, t)
    },
    lineTo: function(e, t) {
        var r = new THREE.LineCurve(this.currentPoint.clone(),new THREE.Vector2(e,t));
        this.curves.push(r),
        this.currentPoint.set(e, t)
    },
    quadraticCurveTo: function(e, t, r, i) {
        var n = new THREE.QuadraticBezierCurve(this.currentPoint.clone(),new THREE.Vector2(e,t),new THREE.Vector2(r,i));
        this.curves.push(n),
        this.currentPoint.set(r, i)
    },
    bezierCurveTo: function(e, t, r, i, n, a) {
        var o = new THREE.CubicBezierCurve(this.currentPoint.clone(),new THREE.Vector2(e,t),new THREE.Vector2(r,i),new THREE.Vector2(n,a));
        this.curves.push(o),
        this.currentPoint.set(n, a)
    },
    splineThru: function(e) {
        var t = [this.currentPoint.clone()].concat(e)
          , r = new THREE.SplineCurve(t);
        this.curves.push(r),
        this.currentPoint.copy(e[e.length - 1])
    },
    arc: function(e, t, r, i, n, a) {
        var o = this.currentPoint.x
          , s = this.currentPoint.y;
        this.absarc(e + o, t + s, r, i, n, a)
    },
    absarc: function(e, t, r, i, n, a) {
        this.absellipse(e, t, r, r, i, n, a)
    },
    ellipse: function(e, t, r, i, n, a, o, s) {
        var c = this.currentPoint.x
          , h = this.currentPoint.y;
        this.absellipse(e + c, t + h, r, i, n, a, o, s)
    },
    absellipse: function(e, t, r, i, n, a, o, s) {
        var c = new THREE.EllipseCurve(e,t,r,i,n,a,o,s);
        if (this.curves.length > 0) {
            var h = c.getPoint(0);
            h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
        }
        this.curves.push(c);
        var l = c.getPoint(1);
        this.currentPoint.copy(l)
    }
}),
THREE.ShapePath = function() {
    this.subPaths = [],
    this.currentPath = null
}
,
THREE.ShapePath.prototype = {
    moveTo: function(e, t) {
        this.currentPath = new THREE.Path,
        this.subPaths.push(this.currentPath),
        this.currentPath.moveTo(e, t)
    },
    lineTo: function(e, t) {
        this.currentPath.lineTo(e, t)
    },
    quadraticCurveTo: function(e, t, r, i) {
        this.currentPath.quadraticCurveTo(e, t, r, i)
    },
    bezierCurveTo: function(e, t, r, i, n, a) {
        this.currentPath.bezierCurveTo(e, t, r, i, n, a)
    },
    splineThru: function(e) {
        this.currentPath.splineThru(e)
    },
    toShapes: function(e, t) {
        function r(e) {
            for (var t = [], r = 0, i = e.length; r < i; r++) {
                var n = e[r]
                  , a = new THREE.Shape;
                a.curves = n.curves,
                t.push(a)
            }
            return t
        }
        function i(e, t) {
            for (var r = t.length, i = !1, n = r - 1, a = 0; a < r; n = a++) {
                var o = t[n]
                  , s = t[a]
                  , c = s.x - o.x
                  , h = s.y - o.y;
                if (Math.abs(h) > Number.EPSILON) {
                    if (h < 0 && (o = t[a],
                    c = -c,
                    s = t[n],
                    h = -h),
                    e.y < o.y || e.y > s.y)
                        continue;
                    if (e.y === o.y) {
                        if (e.x === o.x)
                            return !0
                    } else {
                        var l = h * (e.x - o.x) - c * (e.y - o.y);
                        if (0 === l)
                            return !0;
                        if (l < 0)
                            continue;
                        i = !i
                    }
                } else {
                    if (e.y !== o.y)
                        continue;
                    if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x)
                        return !0
                }
            }
            return i
        }
        var n = THREE.ShapeUtils.isClockWise
          , a = this.subPaths;
        if (0 === a.length)
            return [];
        if (!0 === t)
            return r(a);
        var o, s, c, h = [];
        if (1 === a.length)
            return s = a[0],
            c = new THREE.Shape,
            c.curves = s.curves,
            h.push(c),
            h;
        var l = !n(a[0].getPoints());
        l = e ? !l : l;
        var u, p = [], d = [], f = [], E = 0;
        d[E] = void 0,
        f[E] = [];
        for (var m = 0, g = a.length; m < g; m++)
            o = n(u = (s = a[m]).getPoints()),
            (o = e ? !o : o) ? (!l && d[E] && E++,
            d[E] = {
                s: new THREE.Shape,
                p: u
            },
            d[E].s.curves = s.curves,
            l && E++,
            f[E] = []) : f[E].push({
                h: s,
                p: u[0]
            });
        if (!d[0])
            return r(a);
        if (d.length > 1) {
            for (var v = !1, T = [], y = 0, R = d.length; y < R; y++)
                p[y] = [];
            for (var y = 0, R = d.length; y < R; y++)
                for (var x = f[y], H = 0; H < x.length; H++) {
                    for (var b = x[H], _ = !0, M = 0; M < d.length; M++)
                        i(b.p, d[M].p) && (y !== M && T.push({
                            froms: y,
                            tos: M,
                            hole: H
                        }),
                        _ ? (_ = !1,
                        p[M].push(b)) : v = !0);
                    _ && p[y].push(b)
                }
            T.length > 0 && (v || (f = p))
        }
        for (var w, m = 0, S = d.length; m < S; m++) {
            c = d[m].s,
            h.push(c);
            for (var A = 0, L = (w = f[m]).length; A < L; A++)
                c.holes.push(w[A].h)
        }
        return h
    }
},
THREE.Shape = function() {
    THREE.Path.apply(this, arguments),
    this.holes = []
}
,
THREE.Shape.prototype = Object.assign(Object.create(THREE.Path.prototype), {
    constructor: THREE.Shape,
    extrude: function(e) {
        return new THREE.ExtrudeGeometry(this,e)
    },
    makeGeometry: function(e) {
        return new THREE.ShapeGeometry(this,e)
    },
    getPointsHoles: function(e) {
        for (var t = [], r = 0, i = this.holes.length; r < i; r++)
            t[r] = this.holes[r].getPoints(e);
        return t
    },
    extractAllPoints: function(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        }
    },
    extractPoints: function(e) {
        return this.extractAllPoints(e)
    }
}),
THREE.LineCurve = function(e, t) {
    this.v1 = e,
    this.v2 = t
}
,
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.LineCurve.prototype.constructor = THREE.LineCurve,
THREE.LineCurve.prototype.getPoint = function(e) {
    if (1 === e)
        return this.v2.clone();
    var t = this.v2.clone().sub(this.v1);
    return t.multiplyScalar(e).add(this.v1),
    t
}
,
THREE.LineCurve.prototype.getPointAt = function(e) {
    return this.getPoint(e)
}
,
THREE.LineCurve.prototype.getTangent = function(e) {
    return this.v2.clone().sub(this.v1).normalize()
}
,
THREE.QuadraticBezierCurve = function(e, t, r) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r
}
,
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve,
THREE.QuadraticBezierCurve.prototype.getPoint = function(e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y))
}
,
THREE.QuadraticBezierCurve.prototype.getTangent = function(e) {
    var t = THREE.CurveUtils.tangentQuadraticBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
}
,
THREE.CubicBezierCurve = function(e, t, r, i) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r,
    this.v3 = i
}
,
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve,
THREE.CubicBezierCurve.prototype.getPoint = function(e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
}
,
THREE.CubicBezierCurve.prototype.getTangent = function(e) {
    var t = THREE.CurveUtils.tangentCubicBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
}
,
THREE.SplineCurve = function(e) {
    this.points = void 0 == e ? [] : e
}
,
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve,
THREE.SplineCurve.prototype.getPoint = function(e) {
    var t = this.points
      , r = (t.length - 1) * e
      , i = Math.floor(r)
      , n = r - i
      , a = t[0 === i ? i : i - 1]
      , o = t[i]
      , s = t[i > t.length - 2 ? t.length - 1 : i + 1]
      , c = t[i > t.length - 3 ? t.length - 1 : i + 2]
      , h = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(h(a.x, o.x, s.x, c.x, n),h(a.y, o.y, s.y, c.y, n))
}
,
THREE.EllipseCurve = function(e, t, r, i, n, a, o, s) {
    this.aX = e,
    this.aY = t,
    this.xRadius = r,
    this.yRadius = i,
    this.aStartAngle = n,
    this.aEndAngle = a,
    this.aClockwise = o,
    this.aRotation = s || 0
}
,
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve,
THREE.EllipseCurve.prototype.getPoint = function(e) {
    for (var t = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, i = Math.abs(r) < Number.EPSILON; r < 0; )
        r += t;
    for (; r > t; )
        r -= t;
    r < Number.EPSILON && (r = i ? 0 : t),
    !0 !== this.aClockwise || i || (r === t ? r = -t : r -= t);
    var n = this.aStartAngle + e * r
      , a = this.aX + this.xRadius * Math.cos(n)
      , o = this.aY + this.yRadius * Math.sin(n);
    if (0 !== this.aRotation) {
        var s = Math.cos(this.aRotation)
          , c = Math.sin(this.aRotation)
          , h = a - this.aX
          , l = o - this.aY;
        a = h * s - l * c + this.aX,
        o = h * c + l * s + this.aY
    }
    return new THREE.Vector2(a,o)
}
,
THREE.ArcCurve = function(e, t, r, i, n, a) {
    THREE.EllipseCurve.call(this, e, t, r, r, i, n, a)
}
,
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve,
THREE.LineCurve3 = THREE.Curve.create(function(e, t) {
    this.v1 = e,
    this.v2 = t
}, function(e) {
    if (1 === e)
        return this.v2.clone();
    var t = new THREE.Vector3;
    return t.subVectors(this.v2, this.v1),
    t.multiplyScalar(e),
    t.add(this.v1),
    t
}),
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(e, t, r) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r
}, function(e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y),t(e, this.v0.z, this.v1.z, this.v2.z))
}),
THREE.CubicBezierCurve3 = THREE.Curve.create(function(e, t, r, i) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r,
    this.v3 = i
}, function(e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
}),
THREE.SplineCurve3 = THREE.Curve.create(function(e) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
    this.points = void 0 == e ? [] : e
}, function(e) {
    var t = this.points
      , r = (t.length - 1) * e
      , i = Math.floor(r)
      , n = r - i
      , a = t[0 == i ? i : i - 1]
      , o = t[i]
      , s = t[i > t.length - 2 ? t.length - 1 : i + 1]
      , c = t[i > t.length - 3 ? t.length - 1 : i + 2]
      , h = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(h(a.x, o.x, s.x, c.x, n),h(a.y, o.y, s.y, c.y, n),h(a.z, o.z, s.z, c.z, n))
}),
THREE.CatmullRomCurve3 = function() {
    function e() {}
    var t = new THREE.Vector3
      , r = new e
      , i = new e
      , n = new e;
    return e.prototype.init = function(e, t, r, i) {
        this.c0 = e,
        this.c1 = r,
        this.c2 = -3 * e + 3 * t - 2 * r - i,
        this.c3 = 2 * e - 2 * t + r + i
    }
    ,
    e.prototype.initNonuniformCatmullRom = function(e, t, r, i, n, a, o) {
        var s = (t - e) / n - (r - e) / (n + a) + (r - t) / a
          , c = (r - t) / a - (i - t) / (a + o) + (i - r) / o;
        s *= a,
        c *= a,
        this.init(t, r, s, c)
    }
    ,
    e.prototype.initCatmullRom = function(e, t, r, i, n) {
        this.init(t, r, n * (r - e), n * (i - t))
    }
    ,
    e.prototype.calc = function(e) {
        var t = e * e
          , r = t * e;
        return this.c0 + this.c1 * e + this.c2 * t + this.c3 * r
    }
    ,
    THREE.Curve.create(function(e) {
        this.points = e || [],
        this.closed = !1
    }, function(e) {
        var a, o, s, c, h = this.points;
        (c = h.length) < 2 && console.log("duh, you need at least 2 points"),
        s = (a = (c - (this.closed ? 0 : 1)) * e) - (o = Math.floor(a)),
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / h.length) + 1) * h.length : 0 === s && o === c - 1 && (o = c - 2,
        s = 1);
        var l, u, p, d;
        if (this.closed || o > 0 ? l = h[(o - 1) % c] : (t.subVectors(h[0], h[1]).add(h[0]),
        l = t),
        u = h[o % c],
        p = h[(o + 1) % c],
        this.closed || o + 2 < c ? d = h[(o + 2) % c] : (t.subVectors(h[c - 1], h[c - 2]).add(h[c - 1]),
        d = t),
        void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var f = "chordal" === this.type ? .5 : .25
              , E = Math.pow(l.distanceToSquared(u), f)
              , m = Math.pow(u.distanceToSquared(p), f)
              , g = Math.pow(p.distanceToSquared(d), f);
            m < 1e-4 && (m = 1),
            E < 1e-4 && (E = m),
            g < 1e-4 && (g = m),
            r.initNonuniformCatmullRom(l.x, u.x, p.x, d.x, E, m, g),
            i.initNonuniformCatmullRom(l.y, u.y, p.y, d.y, E, m, g),
            n.initNonuniformCatmullRom(l.z, u.z, p.z, d.z, E, m, g)
        } else if ("catmullrom" === this.type) {
            var v = void 0 !== this.tension ? this.tension : .5;
            r.initCatmullRom(l.x, u.x, p.x, d.x, v),
            i.initCatmullRom(l.y, u.y, p.y, d.y, v),
            n.initCatmullRom(l.z, u.z, p.z, d.z, v)
        }
        return new THREE.Vector3(r.calc(s),i.calc(s),n.calc(s))
    })
}(),
THREE.ClosedSplineCurve3 = function(e) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."),
    THREE.CatmullRomCurve3.call(this, e),
    this.type = "catmullrom",
    this.closed = !0
}
,
THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype),
THREE.BoxGeometry = function(e, t, r, i, n, a) {
    THREE.Geometry.call(this),
    this.type = "BoxGeometry",
    this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: i,
        heightSegments: n,
        depthSegments: a
    },
    this.fromBufferGeometry(new THREE.BoxBufferGeometry(e,t,r,i,n,a)),
    this.mergeVertices()
}
,
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry,
THREE.CubeGeometry = THREE.BoxGeometry,
THREE.BoxBufferGeometry = function(e, t, r, i, n, a) {
    function o(e, t, r, i, n, a, o, c, h, T, y) {
        for (var R = a / h, x = o / T, H = a / 2, b = o / 2, _ = c / 2, M = h + 1, w = T + 1, S = 0, A = 0, L = new THREE.Vector3, C = 0; C < w; C++)
            for (var P = C * x - b, B = 0; B < M; B++) {
                var U = B * R - H;
                L[e] = U * i,
                L[t] = P * n,
                L[r] = _,
                u[f] = L.x,
                u[f + 1] = L.y,
                u[f + 2] = L.z,
                L[e] = 0,
                L[t] = 0,
                L[r] = c > 0 ? 1 : -1,
                p[f] = L.x,
                p[f + 1] = L.y,
                p[f + 2] = L.z,
                d[E] = B / h,
                d[E + 1] = 1 - C / T,
                f += 3,
                E += 2,
                S += 1
            }
        for (C = 0; C < T; C++)
            for (B = 0; B < h; B++) {
                var D = g + B + M * C
                  , I = g + B + M * (C + 1)
                  , F = g + (B + 1) + M * (C + 1)
                  , N = g + (B + 1) + M * C;
                l[m] = D,
                l[m + 1] = I,
                l[m + 2] = N,
                l[m + 3] = I,
                l[m + 4] = F,
                l[m + 5] = N,
                m += 6,
                A += 6
            }
        s.addGroup(v, A, y),
        v += A,
        g += S
    }
    THREE.BufferGeometry.call(this),
    this.type = "BoxBufferGeometry",
    this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: i,
        heightSegments: n,
        depthSegments: a
    };
    var s = this
      , c = function(e, t, r) {
        var i = 0;
        return i += (e + 1) * (t + 1) * 2,
        i += (e + 1) * (r + 1) * 2,
        i += (r + 1) * (t + 1) * 2
    }(i = Math.floor(i) || 1, n = Math.floor(n) || 1, a = Math.floor(a) || 1)
      , h = function(e, t, r) {
        var i = 0;
        return i += e * t * 2,
        i += e * r * 2,
        6 * (i += r * t * 2)
    }(i, n, a)
      , l = new (h > 65535 ? Uint32Array : Uint16Array)(h)
      , u = new Float32Array(3 * c)
      , p = new Float32Array(3 * c)
      , d = new Float32Array(2 * c)
      , f = 0
      , E = 0
      , m = 0
      , g = 0
      , v = 0;
    o("z", "y", "x", -1, -1, r, t, e, a, n, 0),
    o("z", "y", "x", 1, -1, r, t, -e, a, n, 1),
    o("x", "z", "y", 1, 1, e, r, t, i, a, 2),
    o("x", "z", "y", 1, -1, e, r, -t, i, a, 3),
    o("x", "y", "z", 1, -1, e, t, r, i, n, 4),
    o("x", "y", "z", -1, -1, e, t, -r, i, n, 5),
    this.setIndex(new THREE.BufferAttribute(l,1)),
    this.addAttribute("position", new THREE.BufferAttribute(u,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(p,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(d,2))
}
,
THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry,
THREE.CircleGeometry = function(e, t, r, i) {
    THREE.Geometry.call(this),
    this.type = "CircleGeometry",
    this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: i
    },
    this.fromBufferGeometry(new THREE.CircleBufferGeometry(e,t,r,i))
}
,
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry,
THREE.CircleBufferGeometry = function(e, t, r, i) {
    THREE.BufferGeometry.call(this),
    this.type = "CircleBufferGeometry",
    this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: i
    },
    e = e || 50,
    t = void 0 !== t ? Math.max(3, t) : 8,
    r = void 0 !== r ? r : 0,
    i = void 0 !== i ? i : 2 * Math.PI;
    var n = t + 2
      , a = new Float32Array(3 * n)
      , o = new Float32Array(3 * n)
      , s = new Float32Array(2 * n);
    o[2] = 1,
    s[0] = .5,
    s[1] = .5;
    for (var c = 0, h = 3, l = 2; c <= t; c++,
    h += 3,
    l += 2) {
        var u = r + c / t * i;
        a[h] = e * Math.cos(u),
        a[h + 1] = e * Math.sin(u),
        o[h + 2] = 1,
        s[l] = (a[h] / e + 1) / 2,
        s[l + 1] = (a[h + 1] / e + 1) / 2
    }
    for (var p = [], h = 1; h <= t; h++)
        p.push(h, h + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(p),1)),
    this.addAttribute("position", new THREE.BufferAttribute(a,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(o,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(s,2)),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,e)
}
,
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry,
THREE.CylinderBufferGeometry = function(e, t, r, i, n, a, o, s) {
    function c(r) {
        var n, a, c, l = new THREE.Vector2, u = new THREE.Vector3, p = 0, T = !0 === r ? e : t, x = !0 === r ? 1 : -1;
        for (a = g,
        n = 1; n <= i; n++)
            f.setXYZ(g, 0, y * x, 0),
            E.setXYZ(g, 0, x, 0),
            l.x = .5,
            l.y = .5,
            m.setXY(g, l.x, l.y),
            g++;
        for (c = g,
        n = 0; n <= i; n++) {
            var H = n / i * s + o
              , b = Math.cos(H)
              , _ = Math.sin(H);
            u.x = T * _,
            u.y = y * x,
            u.z = T * b,
            f.setXYZ(g, u.x, u.y, u.z),
            E.setXYZ(g, 0, x, 0),
            l.x = .5 * b + .5,
            l.y = .5 * _ * x + .5,
            m.setXY(g, l.x, l.y),
            g++
        }
        for (n = 0; n < i; n++) {
            var M = a + n
              , w = c + n;
            !0 === r ? (d.setX(v, w),
            v++,
            d.setX(v, w + 1),
            v++,
            d.setX(v, M),
            v++) : (d.setX(v, w + 1),
            v++,
            d.setX(v, w),
            v++,
            d.setX(v, M),
            v++),
            p += 3
        }
        h.addGroup(R, p, !0 === r ? 1 : 2),
        R += p
    }
    THREE.BufferGeometry.call(this),
    this.type = "CylinderBufferGeometry",
    this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: r,
        radialSegments: i,
        heightSegments: n,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
    };
    var h = this;
    e = void 0 !== e ? e : 20,
    t = void 0 !== t ? t : 20,
    r = void 0 !== r ? r : 100,
    i = Math.floor(i) || 8,
    n = Math.floor(n) || 1,
    a = void 0 !== a && a,
    o = void 0 !== o ? o : 0,
    s = void 0 !== s ? s : 2 * Math.PI;
    var l = 0;
    !1 === a && (e > 0 && l++,
    t > 0 && l++);
    var u = function() {
        var e = (i + 1) * (n + 1);
        return !1 === a && (e += (i + 1) * l + i * l),
        e
    }()
      , p = function() {
        var e = i * n * 2 * 3;
        return !1 === a && (e += i * l * 3),
        e
    }()
      , d = new THREE.BufferAttribute(new (p > 65535 ? Uint32Array : Uint16Array)(p),1)
      , f = new THREE.BufferAttribute(new Float32Array(3 * u),3)
      , E = new THREE.BufferAttribute(new Float32Array(3 * u),3)
      , m = new THREE.BufferAttribute(new Float32Array(2 * u),2)
      , g = 0
      , v = 0
      , T = []
      , y = r / 2
      , R = 0;
    !function() {
        var a, c, l = new THREE.Vector3, u = new THREE.Vector3, p = 0, x = (t - e) / r;
        for (c = 0; c <= n; c++) {
            var H = []
              , b = c / n
              , _ = b * (t - e) + e;
            for (a = 0; a <= i; a++) {
                var M = a / i;
                u.x = _ * Math.sin(M * s + o),
                u.y = -b * r + y,
                u.z = _ * Math.cos(M * s + o),
                f.setXYZ(g, u.x, u.y, u.z),
                l.copy(u),
                (0 === e && 0 === c || 0 === t && c === n) && (l.x = Math.sin(M * s + o),
                l.z = Math.cos(M * s + o)),
                l.setY(Math.sqrt(l.x * l.x + l.z * l.z) * x).normalize(),
                E.setXYZ(g, l.x, l.y, l.z),
                m.setXY(g, M, 1 - b),
                H.push(g),
                g++
            }
            T.push(H)
        }
        for (a = 0; a < i; a++)
            for (c = 0; c < n; c++) {
                var w = T[c][a]
                  , S = T[c + 1][a]
                  , A = T[c + 1][a + 1]
                  , L = T[c][a + 1];
                d.setX(v, w),
                v++,
                d.setX(v, S),
                v++,
                d.setX(v, L),
                v++,
                d.setX(v, S),
                v++,
                d.setX(v, A),
                v++,
                d.setX(v, L),
                v++,
                p += 6
            }
        h.addGroup(R, p, 0),
        R += p
    }(),
    !1 === a && (e > 0 && c(!0),
    t > 0 && c(!1)),
    this.setIndex(d),
    this.addAttribute("position", f),
    this.addAttribute("normal", E),
    this.addAttribute("uv", m)
}
,
THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry,
THREE.CylinderGeometry = function(e, t, r, i, n, a, o, s) {
    THREE.Geometry.call(this),
    this.type = "CylinderGeometry",
    this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: r,
        radialSegments: i,
        heightSegments: n,
        openEnded: a,
        thetaStart: o,
        thetaLength: s
    },
    this.fromBufferGeometry(new THREE.CylinderBufferGeometry(e,t,r,i,n,a,o,s)),
    this.mergeVertices()
}
,
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry,
THREE.ConeBufferGeometry = function(e, t, r, i, n, a, o) {
    THREE.CylinderBufferGeometry.call(this, 0, e, t, r, i, n, a, o),
    this.type = "ConeBufferGeometry",
    this.parameters = {
        radius: e,
        height: t,
        radialSegments: r,
        heightSegments: i,
        thetaStart: a,
        thetaLength: o
    }
}
,
THREE.ConeBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.ConeBufferGeometry.prototype.constructor = THREE.ConeBufferGeometry,
THREE.ConeGeometry = function(e, t, r, i, n, a, o) {
    THREE.CylinderGeometry.call(this, 0, e, t, r, i, n, a, o),
    this.type = "ConeGeometry",
    this.parameters = {
        radius: e,
        height: t,
        radialSegments: r,
        heightSegments: i,
        openEnded: n,
        thetaStart: a,
        thetaLength: o
    }
}
,
THREE.ConeGeometry.prototype = Object.create(THREE.CylinderGeometry.prototype),
THREE.ConeGeometry.prototype.constructor = THREE.ConeGeometry,
THREE.EdgesGeometry = function(e, t) {
    function r(e, t) {
        return e - t
    }
    THREE.BufferGeometry.call(this),
    t = void 0 !== t ? t : 1;
    var i, n = Math.cos(THREE.Math.DEG2RAD * t), a = [0, 0], o = {}, s = ["a", "b", "c"];
    e instanceof THREE.BufferGeometry ? (i = new THREE.Geometry).fromBufferGeometry(e) : i = e.clone(),
    i.mergeVertices(),
    i.computeFaceNormals();
    for (var c = i.vertices, h = i.faces, l = 0, u = h.length; l < u; l++)
        for (var p = h[l], d = 0; d < 3; d++) {
            a[0] = p[s[d]],
            a[1] = p[s[(d + 1) % 3]],
            a.sort(r);
            void 0 === o[E = a.toString()] ? o[E] = {
                vert1: a[0],
                vert2: a[1],
                face1: l,
                face2: void 0
            } : o[E].face2 = l
        }
    var f = [];
    for (var E in o) {
        var m = o[E];
        if (void 0 === m.face2 || h[m.face1].normal.dot(h[m.face2].normal) <= n) {
            var g = c[m.vert1];
            f.push(g.x),
            f.push(g.y),
            f.push(g.z),
            g = c[m.vert2],
            f.push(g.x),
            f.push(g.y),
            f.push(g.z)
        }
    }
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(f),3))
}
,
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry,
THREE.ExtrudeGeometry = function(e, t) {
    void 0 !== e ? (THREE.Geometry.call(this),
    this.type = "ExtrudeGeometry",
    e = Array.isArray(e) ? e : [e],
    this.addShapeList(e, t),
    this.computeFaceNormals()) : e = []
}
,
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry,
THREE.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
    for (var r = e.length, i = 0; i < r; i++) {
        var n = e[i];
        this.addShape(n, t)
    }
}
,
THREE.ExtrudeGeometry.prototype.addShape = function(e, t) {
    function r(e, t, r) {
        return t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
        t.clone().multiplyScalar(r).add(e)
    }
    function i(e, t, r) {
        var i, n, a = 1, o = e.x - t.x, s = e.y - t.y, c = r.x - e.x, h = r.y - e.y, l = o * o + s * s, u = o * h - s * c;
        if (Math.abs(u) > Number.EPSILON) {
            var p = Math.sqrt(l)
              , d = Math.sqrt(c * c + h * h)
              , f = t.x - s / p
              , E = t.y + o / p
              , m = ((r.x - h / d - f) * h - (r.y + c / d - E) * c) / (o * h - s * c)
              , g = (i = f + o * m - e.x) * i + (n = E + s * m - e.y) * n;
            if (g <= 2)
                return new THREE.Vector2(i,n);
            a = Math.sqrt(g / 2)
        } else {
            var v = !1;
            o > Number.EPSILON ? c > Number.EPSILON && (v = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (v = !0) : Math.sign(s) === Math.sign(h) && (v = !0),
            v ? (i = -s,
            n = o,
            a = Math.sqrt(l)) : (i = o,
            n = s,
            a = Math.sqrt(l / 2))
        }
        return new THREE.Vector2(i / a,n / a)
    }
    function n(e, t) {
        var r, i;
        for (z = e.length; --z >= 0; ) {
            r = z,
            (i = z - 1) < 0 && (i = e.length - 1);
            var n = 0
              , a = v + 2 * E;
            for (n = 0; n < a; n++) {
                var o = O * n
                  , s = O * (n + 1);
                !function(e, t, r, i, n, a, o, s, c) {
                    e += M,
                    t += M,
                    r += M,
                    i += M,
                    _.faces.push(new THREE.Face3(e,t,i,null,null,1)),
                    _.faces.push(new THREE.Face3(t,r,i,null,null,1));
                    var h = R.generateSideWallUV(_, e, t, r, i);
                    _.faceVertexUvs[0].push([h[0], h[1], h[3]]),
                    _.faceVertexUvs[0].push([h[1], h[2], h[3]])
                }(t + r + o, t + i + o, t + i + s, t + r + s)
            }
        }
    }
    function a(e, t, r) {
        _.vertices.push(new THREE.Vector3(e,t,r))
    }
    function o(e, t, r) {
        e += M,
        t += M,
        r += M,
        _.faces.push(new THREE.Face3(e,t,r,null,null,0));
        var i = R.generateTopUV(_, e, t, r);
        _.faceVertexUvs[0].push(i)
    }
    var s, c, h, l, u, p = void 0 !== t.amount ? t.amount : 100, d = void 0 !== t.bevelThickness ? t.bevelThickness : 6, f = void 0 !== t.bevelSize ? t.bevelSize : d - 2, E = void 0 !== t.bevelSegments ? t.bevelSegments : 3, m = void 0 === t.bevelEnabled || t.bevelEnabled, g = void 0 !== t.curveSegments ? t.curveSegments : 12, v = void 0 !== t.steps ? t.steps : 1, T = t.extrudePath, y = !1, R = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
    T && (s = T.getSpacedPoints(v),
    y = !0,
    m = !1,
    c = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(T,v,!1),
    h = new THREE.Vector3,
    l = new THREE.Vector3,
    u = new THREE.Vector3),
    m || (E = 0,
    d = 0,
    f = 0);
    var x, H, b, _ = this, M = this.vertices.length, w = e.extractPoints(g), S = w.shape, A = w.holes, L = !THREE.ShapeUtils.isClockWise(S);
    if (L) {
        for (S = S.reverse(),
        H = 0,
        b = A.length; H < b; H++)
            x = A[H],
            THREE.ShapeUtils.isClockWise(x) && (A[H] = x.reverse());
        L = !1
    }
    var C = THREE.ShapeUtils.triangulateShape(S, A)
      , P = S;
    for (H = 0,
    b = A.length; H < b; H++)
        x = A[H],
        S = S.concat(x);
    for (var B, U, D, I, F, N, O = S.length, G = C.length, V = [], z = 0, k = P.length, j = k - 1, W = z + 1; z < k; z++,
    j++,
    W++)
        j === k && (j = 0),
        W === k && (W = 0),
        V[z] = i(P[z], P[j], P[W]);
    var X, q = [], Y = V.concat();
    for (H = 0,
    b = A.length; H < b; H++) {
        for (x = A[H],
        X = [],
        z = 0,
        j = (k = x.length) - 1,
        W = z + 1; z < k; z++,
        j++,
        W++)
            j === k && (j = 0),
            W === k && (W = 0),
            X[z] = i(x[z], x[j], x[W]);
        q.push(X),
        Y = Y.concat(X)
    }
    for (B = 0; B < E; B++) {
        for (I = d * (1 - (D = B / E)),
        U = f * Math.sin(D * Math.PI / 2),
        z = 0,
        k = P.length; z < k; z++)
            a((F = r(P[z], V[z], U)).x, F.y, -I);
        for (H = 0,
        b = A.length; H < b; H++)
            for (x = A[H],
            X = q[H],
            z = 0,
            k = x.length; z < k; z++)
                a((F = r(x[z], X[z], U)).x, F.y, -I)
    }
    for (U = f,
    z = 0; z < O; z++)
        F = m ? r(S[z], Y[z], U) : S[z],
        y ? (l.copy(c.normals[0]).multiplyScalar(F.x),
        h.copy(c.binormals[0]).multiplyScalar(F.y),
        u.copy(s[0]).add(l).add(h),
        a(u.x, u.y, u.z)) : a(F.x, F.y, 0);
    var Z;
    for (Z = 1; Z <= v; Z++)
        for (z = 0; z < O; z++)
            F = m ? r(S[z], Y[z], U) : S[z],
            y ? (l.copy(c.normals[Z]).multiplyScalar(F.x),
            h.copy(c.binormals[Z]).multiplyScalar(F.y),
            u.copy(s[Z]).add(l).add(h),
            a(u.x, u.y, u.z)) : a(F.x, F.y, p / v * Z);
    for (B = E - 1; B >= 0; B--) {
        for (I = d * (1 - (D = B / E)),
        U = f * Math.sin(D * Math.PI / 2),
        z = 0,
        k = P.length; z < k; z++)
            a((F = r(P[z], V[z], U)).x, F.y, p + I);
        for (H = 0,
        b = A.length; H < b; H++)
            for (x = A[H],
            X = q[H],
            z = 0,
            k = x.length; z < k; z++)
                F = r(x[z], X[z], U),
                y ? a(F.x, F.y + s[v - 1].y, s[v - 1].x + I) : a(F.x, F.y, p + I)
    }
    !function() {
        if (m) {
            var e = 0
              , t = O * e;
            for (z = 0; z < G; z++)
                o((N = C[z])[2] + t, N[1] + t, N[0] + t);
            for (t = O * (e = v + 2 * E),
            z = 0; z < G; z++)
                o((N = C[z])[0] + t, N[1] + t, N[2] + t)
        } else {
            for (z = 0; z < G; z++)
                o((N = C[z])[2], N[1], N[0]);
            for (z = 0; z < G; z++)
                o((N = C[z])[0] + O * v, N[1] + O * v, N[2] + O * v)
        }
    }(),
    function() {
        var e = 0;
        for (n(P, e),
        e += P.length,
        H = 0,
        b = A.length; H < b; H++)
            n(x = A[H], e),
            e += x.length
    }()
}
,
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(e, t, r, i) {
        var n = e.vertices
          , a = n[t]
          , o = n[r]
          , s = n[i];
        return [new THREE.Vector2(a.x,a.y), new THREE.Vector2(o.x,o.y), new THREE.Vector2(s.x,s.y)]
    },
    generateSideWallUV: function(e, t, r, i, n) {
        var a = e.vertices
          , o = a[t]
          , s = a[r]
          , c = a[i]
          , h = a[n];
        return Math.abs(o.y - s.y) < .01 ? [new THREE.Vector2(o.x,1 - o.z), new THREE.Vector2(s.x,1 - s.z), new THREE.Vector2(c.x,1 - c.z), new THREE.Vector2(h.x,1 - h.z)] : [new THREE.Vector2(o.y,1 - o.z), new THREE.Vector2(s.y,1 - s.z), new THREE.Vector2(c.y,1 - c.z), new THREE.Vector2(h.y,1 - h.z)]
    }
},
THREE.ShapeGeometry = function(e, t) {
    THREE.Geometry.call(this),
    this.type = "ShapeGeometry",
    !1 === Array.isArray(e) && (e = [e]),
    this.addShapeList(e, t),
    this.computeFaceNormals()
}
,
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry,
THREE.ShapeGeometry.prototype.addShapeList = function(e, t) {
    for (var r = 0, i = e.length; r < i; r++)
        this.addShape(e[r], t);
    return this
}
,
THREE.ShapeGeometry.prototype.addShape = function(e, t) {
    void 0 === t && (t = {});
    var r, i, n, a = void 0 !== t.curveSegments ? t.curveSegments : 12, o = t.material, s = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator, c = this.vertices.length, h = e.extractPoints(a), l = h.shape, u = h.holes, p = !THREE.ShapeUtils.isClockWise(l);
    if (p) {
        for (l = l.reverse(),
        r = 0,
        i = u.length; r < i; r++)
            n = u[r],
            THREE.ShapeUtils.isClockWise(n) && (u[r] = n.reverse());
        p = !1
    }
    var d = THREE.ShapeUtils.triangulateShape(l, u);
    for (r = 0,
    i = u.length; r < i; r++)
        n = u[r],
        l = l.concat(n);
    var f, E, m = l.length, g = d.length;
    for (r = 0; r < m; r++)
        f = l[r],
        this.vertices.push(new THREE.Vector3(f.x,f.y,0));
    for (r = 0; r < g; r++) {
        var v = (E = d[r])[0] + c
          , T = E[1] + c
          , y = E[2] + c;
        this.faces.push(new THREE.Face3(v,T,y,null,null,o)),
        this.faceVertexUvs[0].push(s.generateTopUV(this, v, T, y))
    }
}
,
THREE.LatheBufferGeometry = function(e, t, r, i) {
    THREE.BufferGeometry.call(this),
    this.type = "LatheBufferGeometry",
    this.parameters = {
        points: e,
        segments: t,
        phiStart: r,
        phiLength: i
    },
    t = Math.floor(t) || 12,
    r = r || 0,
    i = i || 2 * Math.PI,
    i = THREE.Math.clamp(i, 0, 2 * Math.PI);
    var n, a, o, s = (t + 1) * e.length, c = t * e.length * 2 * 3, h = new THREE.BufferAttribute(new (c > 65535 ? Uint32Array : Uint16Array)(c),1), l = new THREE.BufferAttribute(new Float32Array(3 * s),3), u = new THREE.BufferAttribute(new Float32Array(2 * s),2), p = 0, d = 0, f = (e.length,
    1 / t), E = new THREE.Vector3, m = new THREE.Vector2;
    for (a = 0; a <= t; a++) {
        var g = r + a * f * i
          , v = Math.sin(g)
          , T = Math.cos(g);
        for (o = 0; o <= e.length - 1; o++)
            E.x = e[o].x * v,
            E.y = e[o].y,
            E.z = e[o].x * T,
            l.setXYZ(p, E.x, E.y, E.z),
            m.x = a / t,
            m.y = o / (e.length - 1),
            u.setXY(p, m.x, m.y),
            p++
    }
    for (a = 0; a < t; a++)
        for (o = 0; o < e.length - 1; o++) {
            var y = n = o + a * e.length
              , R = n + e.length
              , x = n + e.length + 1
              , H = n + 1;
            h.setX(d, y),
            d++,
            h.setX(d, R),
            d++,
            h.setX(d, H),
            d++,
            h.setX(d, R),
            d++,
            h.setX(d, x),
            d++,
            h.setX(d, H),
            d++
        }
    if (this.setIndex(h),
    this.addAttribute("position", l),
    this.addAttribute("uv", u),
    this.computeVertexNormals(),
    i === 2 * Math.PI) {
        var b = this.attributes.normal.array
          , _ = new THREE.Vector3
          , M = new THREE.Vector3
          , w = new THREE.Vector3;
        for (n = t * e.length * 3,
        a = 0,
        o = 0; a < e.length; a++,
        o += 3)
            _.x = b[o + 0],
            _.y = b[o + 1],
            _.z = b[o + 2],
            M.x = b[n + o + 0],
            M.y = b[n + o + 1],
            M.z = b[n + o + 2],
            w.addVectors(_, M).normalize(),
            b[o + 0] = b[n + o + 0] = w.x,
            b[o + 1] = b[n + o + 1] = w.y,
            b[o + 2] = b[n + o + 2] = w.z
    }
}
,
THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry,
THREE.LatheGeometry = function(e, t, r, i) {
    THREE.Geometry.call(this),
    this.type = "LatheGeometry",
    this.parameters = {
        points: e,
        segments: t,
        phiStart: r,
        phiLength: i
    },
    this.fromBufferGeometry(new THREE.LatheBufferGeometry(e,t,r,i)),
    this.mergeVertices()
}
,
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry,
THREE.PlaneGeometry = function(e, t, r, i) {
    THREE.Geometry.call(this),
    this.type = "PlaneGeometry",
    this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: i
    },
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e,t,r,i))
}
,
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry,
THREE.PlaneBufferGeometry = function(e, t, r, i) {
    THREE.BufferGeometry.call(this),
    this.type = "PlaneBufferGeometry",
    this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: i
    };
    for (var n = e / 2, a = t / 2, o = Math.floor(r) || 1, s = Math.floor(i) || 1, c = o + 1, h = s + 1, l = e / o, u = t / s, p = new Float32Array(c * h * 3), d = new Float32Array(c * h * 3), f = new Float32Array(c * h * 2), E = 0, m = 0, g = 0; g < h; g++)
        for (var v = g * u - a, T = 0; T < c; T++) {
            var y = T * l - n;
            p[E] = y,
            p[E + 1] = -v,
            d[E + 2] = 1,
            f[m] = T / o,
            f[m + 1] = 1 - g / s,
            E += 3,
            m += 2
        }
    E = 0;
    for (var R = new (p.length / 3 > 65535 ? Uint32Array : Uint16Array)(o * s * 6), g = 0; g < s; g++)
        for (T = 0; T < o; T++) {
            var x = T + c * g
              , H = T + c * (g + 1)
              , b = T + 1 + c * (g + 1)
              , _ = T + 1 + c * g;
            R[E] = x,
            R[E + 1] = H,
            R[E + 2] = _,
            R[E + 3] = H,
            R[E + 4] = b,
            R[E + 5] = _,
            E += 6
        }
    this.setIndex(new THREE.BufferAttribute(R,1)),
    this.addAttribute("position", new THREE.BufferAttribute(p,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(d,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(f,2))
}
,
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry,
THREE.RingBufferGeometry = function(e, t, r, i, n, a) {
    THREE.BufferGeometry.call(this),
    this.type = "RingBufferGeometry",
    this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: n,
        thetaLength: a
    },
    e = e || 20,
    t = t || 50,
    n = void 0 !== n ? n : 0,
    a = void 0 !== a ? a : 2 * Math.PI;
    var o, s, c, h = ((r = void 0 !== r ? Math.max(3, r) : 8) + 1) * ((i = void 0 !== i ? Math.max(1, i) : 1) + 1), l = r * i * 2 * 3, u = new THREE.BufferAttribute(new (l > 65535 ? Uint32Array : Uint16Array)(l),1), p = new THREE.BufferAttribute(new Float32Array(3 * h),3), d = new THREE.BufferAttribute(new Float32Array(3 * h),3), f = new THREE.BufferAttribute(new Float32Array(2 * h),2), E = 0, m = 0, g = e, v = (t - e) / i, T = new THREE.Vector3, y = new THREE.Vector2;
    for (s = 0; s <= i; s++) {
        for (c = 0; c <= r; c++)
            o = n + c / r * a,
            T.x = g * Math.cos(o),
            T.y = g * Math.sin(o),
            p.setXYZ(E, T.x, T.y, T.z),
            d.setXYZ(E, 0, 0, 1),
            y.x = (T.x / t + 1) / 2,
            y.y = (T.y / t + 1) / 2,
            f.setXY(E, y.x, y.y),
            E++;
        g += v
    }
    for (s = 0; s < i; s++) {
        var R = s * (r + 1);
        for (c = 0; c < r; c++) {
            var x = o = c + R
              , H = o + r + 1
              , b = o + r + 2
              , _ = o + 1;
            u.setX(m, x),
            m++,
            u.setX(m, H),
            m++,
            u.setX(m, b),
            m++,
            u.setX(m, x),
            m++,
            u.setX(m, b),
            m++,
            u.setX(m, _),
            m++
        }
    }
    this.setIndex(u),
    this.addAttribute("position", p),
    this.addAttribute("normal", d),
    this.addAttribute("uv", f)
}
,
THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry,
THREE.RingGeometry = function(e, t, r, i, n, a) {
    THREE.Geometry.call(this),
    this.type = "RingGeometry",
    this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: n,
        thetaLength: a
    },
    this.fromBufferGeometry(new THREE.RingBufferGeometry(e,t,r,i,n,a))
}
,
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry,
THREE.SphereGeometry = function(e, t, r, i, n, a, o) {
    THREE.Geometry.call(this),
    this.type = "SphereGeometry",
    this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: i,
        phiLength: n,
        thetaStart: a,
        thetaLength: o
    },
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(e,t,r,i,n,a,o))
}
,
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry,
THREE.SphereBufferGeometry = function(e, t, r, i, n, a, o) {
    THREE.BufferGeometry.call(this),
    this.type = "SphereBufferGeometry",
    this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: i,
        phiLength: n,
        thetaStart: a,
        thetaLength: o
    },
    e = e || 50,
    t = Math.max(3, Math.floor(t) || 8),
    r = Math.max(2, Math.floor(r) || 6),
    i = void 0 !== i ? i : 0,
    n = void 0 !== n ? n : 2 * Math.PI;
    for (var s = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI), c = (t + 1) * (r + 1), h = new THREE.BufferAttribute(new Float32Array(3 * c),3), l = new THREE.BufferAttribute(new Float32Array(3 * c),3), u = new THREE.BufferAttribute(new Float32Array(2 * c),2), p = 0, d = [], f = new THREE.Vector3, E = 0; E <= r; E++) {
        for (var m = [], g = E / r, v = 0; v <= t; v++) {
            var T = v / t
              , y = -e * Math.cos(i + T * n) * Math.sin(a + g * o)
              , R = e * Math.cos(a + g * o)
              , x = e * Math.sin(i + T * n) * Math.sin(a + g * o);
            f.set(y, R, x).normalize(),
            h.setXYZ(p, y, R, x),
            l.setXYZ(p, f.x, f.y, f.z),
            u.setXY(p, T, 1 - g),
            m.push(p),
            p++
        }
        d.push(m)
    }
    for (var H = [], E = 0; E < r; E++)
        for (v = 0; v < t; v++) {
            var b = d[E][v + 1]
              , _ = d[E][v]
              , M = d[E + 1][v]
              , w = d[E + 1][v + 1];
            (0 !== E || a > 0) && H.push(b, _, w),
            (E !== r - 1 || s < Math.PI) && H.push(_, M, w)
        }
    this.setIndex(new (h.count > 65535 ? THREE.Uint32Attribute : THREE.Uint16Attribute)(H,1)),
    this.addAttribute("position", h),
    this.addAttribute("normal", l),
    this.addAttribute("uv", u),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,e)
}
,
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry,
THREE.TextGeometry = function(e, t) {
    var r = (t = t || {}).font;
    if (r instanceof THREE.Font == !1)
        return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
        new THREE.Geometry;
    var i = r.generateShapes(e, t.size, t.curveSegments);
    t.amount = void 0 !== t.height ? t.height : 50,
    void 0 === t.bevelThickness && (t.bevelThickness = 10),
    void 0 === t.bevelSize && (t.bevelSize = 8),
    void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
    THREE.ExtrudeGeometry.call(this, i, t),
    this.type = "TextGeometry"
}
,
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype),
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry,
THREE.TorusBufferGeometry = function(e, t, r, i, n) {
    THREE.BufferGeometry.call(this),
    this.type = "TorusBufferGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: i,
        arc: n
    },
    e = e || 100,
    t = t || 40,
    r = Math.floor(r) || 8,
    i = Math.floor(i) || 6,
    n = n || 2 * Math.PI;
    var a, o, s = (r + 1) * (i + 1), c = r * i * 2 * 3, h = new (c > 65535 ? Uint32Array : Uint16Array)(c), l = new Float32Array(3 * s), u = new Float32Array(3 * s), p = new Float32Array(2 * s), d = 0, f = 0, E = 0, m = new THREE.Vector3, g = new THREE.Vector3, v = new THREE.Vector3;
    for (a = 0; a <= r; a++)
        for (o = 0; o <= i; o++) {
            var T = o / i * n
              , y = a / r * Math.PI * 2;
            g.x = (e + t * Math.cos(y)) * Math.cos(T),
            g.y = (e + t * Math.cos(y)) * Math.sin(T),
            g.z = t * Math.sin(y),
            l[d] = g.x,
            l[d + 1] = g.y,
            l[d + 2] = g.z,
            m.x = e * Math.cos(T),
            m.y = e * Math.sin(T),
            v.subVectors(g, m).normalize(),
            u[d] = v.x,
            u[d + 1] = v.y,
            u[d + 2] = v.z,
            p[f] = o / i,
            p[f + 1] = a / r,
            d += 3,
            f += 2
        }
    for (a = 1; a <= r; a++)
        for (o = 1; o <= i; o++) {
            var R = (i + 1) * a + o - 1
              , x = (i + 1) * (a - 1) + o - 1
              , H = (i + 1) * (a - 1) + o
              , b = (i + 1) * a + o;
            h[E] = R,
            h[E + 1] = x,
            h[E + 2] = b,
            h[E + 3] = x,
            h[E + 4] = H,
            h[E + 5] = b,
            E += 6
        }
    this.setIndex(new THREE.BufferAttribute(h,1)),
    this.addAttribute("position", new THREE.BufferAttribute(l,3)),
    this.addAttribute("normal", new THREE.BufferAttribute(u,3)),
    this.addAttribute("uv", new THREE.BufferAttribute(p,2))
}
,
THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry,
THREE.TorusGeometry = function(e, t, r, i, n) {
    THREE.Geometry.call(this),
    this.type = "TorusGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: i,
        arc: n
    },
    this.fromBufferGeometry(new THREE.TorusBufferGeometry(e,t,r,i,n))
}
,
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry,
THREE.TorusKnotBufferGeometry = function(e, t, r, i, n, a) {
    function o(e, t, r, i, n) {
        var a = Math.cos(e)
          , o = Math.sin(e)
          , s = r / t * e
          , c = Math.cos(s);
        n.x = i * (2 + c) * .5 * a,
        n.y = i * (2 + c) * o * .5,
        n.z = i * Math.sin(s) * .5
    }
    THREE.BufferGeometry.call(this),
    this.type = "TorusKnotBufferGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: r,
        radialSegments: i,
        p: n,
        q: a
    },
    e = e || 100,
    t = t || 40,
    r = Math.floor(r) || 64,
    i = Math.floor(i) || 8,
    n = n || 2,
    a = a || 3;
    var s, c, h = (i + 1) * (r + 1), l = i * r * 2 * 3, u = new THREE.BufferAttribute(new (l > 65535 ? Uint32Array : Uint16Array)(l),1), p = new THREE.BufferAttribute(new Float32Array(3 * h),3), d = new THREE.BufferAttribute(new Float32Array(3 * h),3), f = new THREE.BufferAttribute(new Float32Array(2 * h),2), E = 0, m = 0, g = new THREE.Vector3, v = new THREE.Vector3, T = new THREE.Vector2, y = new THREE.Vector3, R = new THREE.Vector3, x = new THREE.Vector3, H = new THREE.Vector3, b = new THREE.Vector3;
    for (s = 0; s <= r; ++s) {
        var _ = s / r * n * Math.PI * 2;
        for (o(_, n, a, e, y),
        o(_ + .01, n, a, e, R),
        H.subVectors(R, y),
        b.addVectors(R, y),
        x.crossVectors(H, b),
        b.crossVectors(x, H),
        x.normalize(),
        b.normalize(),
        c = 0; c <= i; ++c) {
            var M = c / i * Math.PI * 2
              , w = -t * Math.cos(M)
              , S = t * Math.sin(M);
            g.x = y.x + (w * b.x + S * x.x),
            g.y = y.y + (w * b.y + S * x.y),
            g.z = y.z + (w * b.z + S * x.z),
            p.setXYZ(E, g.x, g.y, g.z),
            v.subVectors(g, y).normalize(),
            d.setXYZ(E, v.x, v.y, v.z),
            T.x = s / r,
            T.y = c / i,
            f.setXY(E, T.x, T.y),
            E++
        }
    }
    for (c = 1; c <= r; c++)
        for (s = 1; s <= i; s++) {
            var A = (i + 1) * (c - 1) + (s - 1)
              , L = (i + 1) * c + (s - 1)
              , C = (i + 1) * c + s
              , P = (i + 1) * (c - 1) + s;
            u.setX(m, A),
            m++,
            u.setX(m, L),
            m++,
            u.setX(m, P),
            m++,
            u.setX(m, L),
            m++,
            u.setX(m, C),
            m++,
            u.setX(m, P),
            m++
        }
    this.setIndex(u),
    this.addAttribute("position", p),
    this.addAttribute("normal", d),
    this.addAttribute("uv", f)
}
,
THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry,
THREE.TorusKnotGeometry = function(e, t, r, i, n, a, o) {
    THREE.Geometry.call(this),
    this.type = "TorusKnotGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: r,
        radialSegments: i,
        p: n,
        q: a
    },
    void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
    this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(e,t,r,i,n,a)),
    this.mergeVertices()
}
,
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry,
THREE.TubeGeometry = function(e, t, r, i, n, a) {
    function o(e, t, r) {
        return S.vertices.push(new THREE.Vector3(e,t,r)) - 1
    }
    THREE.Geometry.call(this),
    this.type = "TubeGeometry",
    this.parameters = {
        path: e,
        segments: t,
        radius: r,
        radialSegments: i,
        closed: n,
        taper: a
    },
    t = t || 64,
    r = r || 1,
    i = i || 8,
    n = n || !1,
    a = a || THREE.TubeGeometry.NoTaper;
    var s, c, h, l, u, p, d, f, E, m, g, v, T, y, R, x, H, b, _, M, w = [], S = this, A = t + 1, L = new THREE.Vector3, C = new THREE.TubeGeometry.FrenetFrames(e,t,n), P = C.tangents, B = C.normals, U = C.binormals;
    for (this.tangents = P,
    this.normals = B,
    this.binormals = U,
    E = 0; E < A; E++)
        for (w[E] = [],
        h = E / (A - 1),
        f = e.getPointAt(h),
        P[E],
        s = B[E],
        c = U[E],
        u = r * a(h),
        m = 0; m < i; m++)
            l = m / i * 2 * Math.PI,
            p = -u * Math.cos(l),
            d = u * Math.sin(l),
            L.copy(f),
            L.x += p * s.x + d * c.x,
            L.y += p * s.y + d * c.y,
            L.z += p * s.z + d * c.z,
            w[E][m] = o(L.x, L.y, L.z);
    for (E = 0; E < t; E++)
        for (m = 0; m < i; m++)
            g = n ? (E + 1) % t : E + 1,
            v = (m + 1) % i,
            T = w[E][m],
            y = w[g][m],
            R = w[g][v],
            x = w[E][v],
            H = new THREE.Vector2(E / t,m / i),
            b = new THREE.Vector2((E + 1) / t,m / i),
            _ = new THREE.Vector2((E + 1) / t,(m + 1) / i),
            M = new THREE.Vector2(E / t,(m + 1) / i),
            this.faces.push(new THREE.Face3(T,y,x)),
            this.faceVertexUvs[0].push([H, b, M]),
            this.faces.push(new THREE.Face3(y,R,x)),
            this.faceVertexUvs[0].push([b.clone(), _, M.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
}
,
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry,
THREE.TubeGeometry.NoTaper = function(e) {
    return 1
}
,
THREE.TubeGeometry.SinusoidalTaper = function(e) {
    return Math.sin(Math.PI * e)
}
,
THREE.TubeGeometry.FrenetFrames = function(e, t, r) {
    var i, n, a, o, s, c, h, l = new THREE.Vector3, u = [], p = [], d = [], f = new THREE.Vector3, E = new THREE.Matrix4, m = t + 1;
    for (this.tangents = u,
    this.normals = p,
    this.binormals = d,
    c = 0; c < m; c++)
        h = c / (m - 1),
        u[c] = e.getTangentAt(h),
        u[c].normalize();
    for (p[0] = new THREE.Vector3,
    d[0] = new THREE.Vector3,
    n = Number.MAX_VALUE,
    a = Math.abs(u[0].x),
    o = Math.abs(u[0].y),
    s = Math.abs(u[0].z),
    a <= n && (n = a,
    l.set(1, 0, 0)),
    o <= n && (n = o,
    l.set(0, 1, 0)),
    s <= n && l.set(0, 0, 1),
    f.crossVectors(u[0], l).normalize(),
    p[0].crossVectors(u[0], f),
    d[0].crossVectors(u[0], p[0]),
    c = 1; c < m; c++)
        p[c] = p[c - 1].clone(),
        d[c] = d[c - 1].clone(),
        f.crossVectors(u[c - 1], u[c]),
        f.length() > Number.EPSILON && (f.normalize(),
        i = Math.acos(THREE.Math.clamp(u[c - 1].dot(u[c]), -1, 1)),
        p[c].applyMatrix4(E.makeRotationAxis(f, i))),
        d[c].crossVectors(u[c], p[c]);
    if (r)
        for (i = Math.acos(THREE.Math.clamp(p[0].dot(p[m - 1]), -1, 1)),
        i /= m - 1,
        u[0].dot(f.crossVectors(p[0], p[m - 1])) > 0 && (i = -i),
        c = 1; c < m; c++)
            p[c].applyMatrix4(E.makeRotationAxis(u[c], i * c)),
            d[c].crossVectors(u[c], p[c])
}
,
THREE.PolyhedronGeometry = function(e, t, r, i) {
    function n(e) {
        var t = e.normalize().clone();
        t.index = c.vertices.push(t) - 1;
        var r = o(e) / 2 / Math.PI + .5
          , i = function(e) {
            return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
        }(e) / Math.PI + .5;
        return t.uv = new THREE.Vector2(r,1 - i),
        t
    }
    function a(e, t, r) {
        var i = new THREE.Face3(e.index,t.index,r.index,[e.clone(), t.clone(), r.clone()]);
        c.faces.push(i),
        g.copy(e).add(t).add(r).divideScalar(3);
        var n = o(g);
        c.faceVertexUvs[0].push([s(e.uv, e, n), s(t.uv, t, n), s(r.uv, r, n)])
    }
    function o(e) {
        return Math.atan2(e.z, -e.x)
    }
    function s(e, t, r) {
        return r < 0 && 1 === e.x && (e = new THREE.Vector2(e.x - 1,e.y)),
        0 === t.x && 0 === t.z && (e = new THREE.Vector2(r / 2 / Math.PI + .5,e.y)),
        e.clone()
    }
    THREE.Geometry.call(this),
    this.type = "PolyhedronGeometry",
    this.parameters = {
        vertices: e,
        indices: t,
        radius: r,
        detail: i
    },
    r = r || 1,
    i = i || 0;
    for (var c = this, h = 0, l = e.length; h < l; h += 3)
        n(new THREE.Vector3(e[h],e[h + 1],e[h + 2]));
    for (var u = this.vertices, p = [], h = 0, d = 0, l = t.length; h < l; h += 3,
    d++) {
        var f = u[t[h]]
          , E = u[t[h + 1]]
          , m = u[t[h + 2]];
        p[d] = new THREE.Face3(f.index,E.index,m.index,[f.clone(), E.clone(), m.clone()])
    }
    for (var g = new THREE.Vector3, h = 0, l = p.length; h < l; h++)
        !function(e, t) {
            for (var r = Math.pow(2, t), i = n(c.vertices[e.a]), o = n(c.vertices[e.b]), s = n(c.vertices[e.c]), h = [], l = 0; l <= r; l++) {
                h[l] = [];
                for (var u = n(i.clone().lerp(s, l / r)), p = n(o.clone().lerp(s, l / r)), d = r - l, f = 0; f <= d; f++)
                    h[l][f] = 0 === f && l === r ? u : n(u.clone().lerp(p, f / d))
            }
            for (l = 0; l < r; l++)
                for (f = 0; f < 2 * (r - l) - 1; f++) {
                    var E = Math.floor(f / 2);
                    f % 2 == 0 ? a(h[l][E + 1], h[l + 1][E], h[l][E]) : a(h[l][E + 1], h[l + 1][E + 1], h[l + 1][E])
                }
        }(p[h], i);
    for (var h = 0, l = this.faceVertexUvs[0].length; h < l; h++) {
        var v = this.faceVertexUvs[0][h]
          , T = v[0].x
          , y = v[1].x
          , R = v[2].x
          , x = Math.max(T, y, R)
          , H = Math.min(T, y, R);
        x > .9 && H < .1 && (T < .2 && (v[0].x += 1),
        y < .2 && (v[1].x += 1),
        R < .2 && (v[2].x += 1))
    }
    for (var h = 0, l = this.vertices.length; h < l; h++)
        this.vertices[h].multiplyScalar(r);
    this.mergeVertices(),
    this.computeFaceNormals(),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,r)
}
,
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry,
THREE.DodecahedronGeometry = function(e, t) {
    var r = (1 + Math.sqrt(5)) / 2
      , i = 1 / r
      , n = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, 0, -r, 0, -i, r, 0, -i, -r, 0, i, r, 0, i];
    THREE.PolyhedronGeometry.call(this, n, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t),
    this.type = "DodecahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry,
THREE.IcosahedronGeometry = function(e, t) {
    var r = (1 + Math.sqrt(5)) / 2
      , i = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1];
    THREE.PolyhedronGeometry.call(this, i, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t),
    this.type = "IcosahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry,
THREE.OctahedronGeometry = function(e, t) {
    THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t),
    this.type = "OctahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry,
THREE.TetrahedronGeometry = function(e, t) {
    THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t),
    this.type = "TetrahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
}
,
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry,
THREE.ParametricGeometry = function(e, t, r) {
    THREE.Geometry.call(this),
    this.type = "ParametricGeometry",
    this.parameters = {
        func: e,
        slices: t,
        stacks: r
    };
    var i, n, a, o, s = this.vertices, c = this.faces, h = this.faceVertexUvs[0], l = t + 1;
    for (i = 0; i <= r; i++)
        for (o = i / r,
        n = 0; n <= t; n++)
            a = e(n / t, o),
            s.push(a);
    var u, p, d, f, E, m, g, v;
    for (i = 0; i < r; i++)
        for (n = 0; n < t; n++)
            u = i * l + n,
            p = i * l + n + 1,
            d = (i + 1) * l + n + 1,
            f = (i + 1) * l + n,
            E = new THREE.Vector2(n / t,i / r),
            m = new THREE.Vector2((n + 1) / t,i / r),
            g = new THREE.Vector2((n + 1) / t,(i + 1) / r),
            v = new THREE.Vector2(n / t,(i + 1) / r),
            c.push(new THREE.Face3(u,p,f)),
            h.push([E, m, v]),
            c.push(new THREE.Face3(p,d,f)),
            h.push([m.clone(), g, v.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
}
,
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry,
THREE.WireframeGeometry = function(e) {
    function t(e, t) {
        return e - t
    }
    THREE.BufferGeometry.call(this);
    var r = [0, 0]
      , i = {}
      , n = ["a", "b", "c"];
    if (e instanceof THREE.Geometry) {
        for (var a = e.vertices, o = e.faces, s = 0, c = new Uint32Array(6 * o.length), h = 0, l = o.length; h < l; h++)
            for (var u = o[h], p = 0; p < 3; p++) {
                r[0] = u[n[p]],
                r[1] = u[n[(p + 1) % 3]],
                r.sort(t);
                void 0 === i[x = r.toString()] && (c[2 * s] = r[0],
                c[2 * s + 1] = r[1],
                i[x] = !0,
                s++)
            }
        for (var d = new Float32Array(2 * s * 3), h = 0, l = s; h < l; h++)
            for (p = 0; p < 2; p++) {
                var f = a[c[2 * h + p]];
                d[(H = 6 * h + 3 * p) + 0] = f.x,
                d[H + 1] = f.y,
                d[H + 2] = f.z
            }
        this.addAttribute("position", new THREE.BufferAttribute(d,3))
    } else if (e instanceof THREE.BufferGeometry)
        if (null !== e.index) {
            var E = e.index.array
              , a = e.attributes.position
              , m = e.groups
              , s = 0;
            0 === m.length && e.addGroup(0, E.length);
            for (var c = new Uint32Array(2 * E.length), g = 0, v = m.length; g < v; ++g)
                for (var T = m[g], y = T.start, h = y, R = y + T.count; h < R; h += 3)
                    for (p = 0; p < 3; p++) {
                        r[0] = E[h + p],
                        r[1] = E[h + (p + 1) % 3],
                        r.sort(t);
                        var x = r.toString();
                        void 0 === i[x] && (c[2 * s] = r[0],
                        c[2 * s + 1] = r[1],
                        i[x] = !0,
                        s++)
                    }
            for (var d = new Float32Array(2 * s * 3), h = 0, l = s; h < l; h++)
                for (p = 0; p < 2; p++) {
                    var H = 6 * h + 3 * p
                      , b = c[2 * h + p];
                    d[H + 0] = a.getX(b),
                    d[H + 1] = a.getY(b),
                    d[H + 2] = a.getZ(b)
                }
            this.addAttribute("position", new THREE.BufferAttribute(d,3))
        } else {
            for (var _ = (s = (a = e.attributes.position.array).length / 3) / 3, d = new Float32Array(2 * s * 3), h = 0, l = _; h < l; h++)
                for (p = 0; p < 3; p++) {
                    var M = 9 * h + 3 * p;
                    d[(H = 18 * h + 6 * p) + 0] = a[M],
                    d[H + 1] = a[M + 1],
                    d[H + 2] = a[M + 2];
                    b = 9 * h + (p + 1) % 3 * 3;
                    d[H + 3] = a[b],
                    d[H + 4] = a[b + 1],
                    d[H + 5] = a[b + 2]
                }
            this.addAttribute("position", new THREE.BufferAttribute(d,3))
        }
}
,
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry,
THREE.AxisHelper = function(e) {
    e = e || 1;
    var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e])
      , r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1])
      , i = new THREE.BufferGeometry;
    i.addAttribute("position", new THREE.BufferAttribute(t,3)),
    i.addAttribute("color", new THREE.BufferAttribute(r,3));
    var n = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.LineSegments.call(this, i, n)
}
,
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper,
THREE.ArrowHelper = function() {
    var e = new THREE.BufferGeometry;
    e.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0],3));
    var t = new THREE.CylinderBufferGeometry(0,.5,1,5,1);
    return t.translate(0, -.5, 0),
    function(r, i, n, a, o, s) {
        THREE.Object3D.call(this),
        void 0 === a && (a = 16776960),
        void 0 === n && (n = 1),
        void 0 === o && (o = .2 * n),
        void 0 === s && (s = .2 * o),
        this.position.copy(i),
        this.line = new THREE.Line(e,new THREE.LineBasicMaterial({
            color: a
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new THREE.Mesh(t,new THREE.MeshBasicMaterial({
            color: a
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(r),
        this.setLength(n, o, s)
    }
}(),
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper,
THREE.ArrowHelper.prototype.setDirection = function() {
    var e, t = new THREE.Vector3;
    return function(r) {
        r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(),
        e = Math.acos(r.y),
        this.quaternion.setFromAxisAngle(t, e))
    }
}(),
THREE.ArrowHelper.prototype.setLength = function(e, t, r) {
    void 0 === t && (t = .2 * e),
    void 0 === r && (r = .2 * t),
    this.line.scale.set(1, Math.max(0, e - t), 1),
    this.line.updateMatrix(),
    this.cone.scale.set(r, t, r),
    this.cone.position.y = e,
    this.cone.updateMatrix()
}
,
THREE.ArrowHelper.prototype.setColor = function(e) {
    this.line.material.color.copy(e),
    this.cone.material.color.copy(e)
}
,
THREE.BoxHelper = function(e, t) {
    void 0 === t && (t = 16776960);
    var r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
      , i = new Float32Array(24)
      , n = new THREE.BufferGeometry;
    n.setIndex(new THREE.BufferAttribute(r,1)),
    n.addAttribute("position", new THREE.BufferAttribute(i,3)),
    THREE.LineSegments.call(this, n, new THREE.LineBasicMaterial({
        color: t
    })),
    void 0 !== e && this.update(e)
}
,
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper,
THREE.BoxHelper.prototype.update = function() {
    var e = new THREE.Box3;
    return function(t) {
        if (t instanceof THREE.Box3 ? e.copy(t) : e.setFromObject(t),
        !e.isEmpty()) {
            var r = e.min
              , i = e.max
              , n = this.geometry.attributes.position
              , a = n.array;
            a[0] = i.x,
            a[1] = i.y,
            a[2] = i.z,
            a[3] = r.x,
            a[4] = i.y,
            a[5] = i.z,
            a[6] = r.x,
            a[7] = r.y,
            a[8] = i.z,
            a[9] = i.x,
            a[10] = r.y,
            a[11] = i.z,
            a[12] = i.x,
            a[13] = i.y,
            a[14] = r.z,
            a[15] = r.x,
            a[16] = i.y,
            a[17] = r.z,
            a[18] = r.x,
            a[19] = r.y,
            a[20] = r.z,
            a[21] = i.x,
            a[22] = r.y,
            a[23] = r.z,
            n.needsUpdate = !0,
            this.geometry.computeBoundingSphere()
        }
    }
}(),
THREE.BoundingBoxHelper = function(e, t) {
    var r = void 0 !== t ? t : 8947848;
    this.object = e,
    this.box = new THREE.Box3,
    THREE.Mesh.call(this, new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
        color: r,
        wireframe: !0
    }))
}
,
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper,
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object),
    this.box.size(this.scale),
    this.box.center(this.position)
}
,
THREE.CameraHelper = function(e) {
    function t(e, t, i) {
        r(e, i),
        r(t, i)
    }
    function r(e, t) {
        i.vertices.push(new THREE.Vector3),
        i.colors.push(new THREE.Color(t)),
        void 0 === a[e] && (a[e] = []),
        a[e].push(i.vertices.length - 1)
    }
    var i = new THREE.Geometry
      , n = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    })
      , a = {};
    t("n1", "n2", 16755200),
    t("n2", "n4", 16755200),
    t("n4", "n3", 16755200),
    t("n3", "n1", 16755200),
    t("f1", "f2", 16755200),
    t("f2", "f4", 16755200),
    t("f4", "f3", 16755200),
    t("f3", "f1", 16755200),
    t("n1", "f1", 16755200),
    t("n2", "f2", 16755200),
    t("n3", "f3", 16755200),
    t("n4", "f4", 16755200),
    t("p", "n1", 16711680),
    t("p", "n2", 16711680),
    t("p", "n3", 16711680),
    t("p", "n4", 16711680),
    t("u1", "u2", 43775),
    t("u2", "u3", 43775),
    t("u3", "u1", 43775),
    t("c", "t", 16777215),
    t("p", "c", 3355443),
    t("cn1", "cn2", 3355443),
    t("cn3", "cn4", 3355443),
    t("cf1", "cf2", 3355443),
    t("cf3", "cf4", 3355443),
    THREE.LineSegments.call(this, i, n),
    this.camera = e,
    this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.pointMap = a,
    this.update()
}
,
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper,
THREE.CameraHelper.prototype.update = function() {
    function e(e, a, o, s) {
        i.set(a, o, s).unproject(n);
        var c = r[e];
        if (void 0 !== c)
            for (var h = 0, l = c.length; h < l; h++)
                t.vertices[c[h]].copy(i)
    }
    var t, r, i = new THREE.Vector3, n = new THREE.Camera;
    return function() {
        t = this.geometry,
        r = this.pointMap;
        n.projectionMatrix.copy(this.camera.projectionMatrix),
        e("c", 0, 0, -1),
        e("t", 0, 0, 1),
        e("n1", -1, -1, -1),
        e("n2", 1, -1, -1),
        e("n3", -1, 1, -1),
        e("n4", 1, 1, -1),
        e("f1", -1, -1, 1),
        e("f2", 1, -1, 1),
        e("f3", -1, 1, 1),
        e("f4", 1, 1, 1),
        e("u1", .7, 1.1, -1),
        e("u2", -.7, 1.1, -1),
        e("u3", 0, 2, -1),
        e("cf1", -1, 0, 1),
        e("cf2", 1, 0, 1),
        e("cf3", 0, -1, 1),
        e("cf4", 0, 1, 1),
        e("cn1", -1, 0, -1),
        e("cn2", 1, 0, -1),
        e("cn3", 0, -1, -1),
        e("cn4", 0, 1, -1),
        t.verticesNeedUpdate = !0
    }
}(),
THREE.DirectionalLightHelper = function(e, t) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    void 0 === t && (t = 1);
    var r = new THREE.BufferGeometry;
    r.addAttribute("position", new THREE.Float32Attribute([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0],3));
    var i = new THREE.LineBasicMaterial({
        fog: !1
    });
    this.add(new THREE.Line(r,i)),
    (r = new THREE.BufferGeometry).addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1],3)),
    this.add(new THREE.Line(r,i)),
    this.update()
}
,
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper,
THREE.DirectionalLightHelper.prototype.dispose = function() {
    var e = this.children[0]
      , t = this.children[1];
    e.geometry.dispose(),
    e.material.dispose(),
    t.geometry.dispose(),
    t.material.dispose()
}
,
THREE.DirectionalLightHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , r = new THREE.Vector3;
    return function() {
        e.setFromMatrixPosition(this.light.matrixWorld),
        t.setFromMatrixPosition(this.light.target.matrixWorld),
        r.subVectors(t, e);
        var i = this.children[0]
          , n = this.children[1];
        i.lookAt(r),
        i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        n.lookAt(r),
        n.scale.z = r.length()
    }
}(),
THREE.EdgesHelper = function(e, t, r) {
    var i = void 0 !== t ? t : 16777215;
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(e.geometry,r), new THREE.LineBasicMaterial({
        color: i
    })),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper,
THREE.FaceNormalsHelper = function(e, t, r, i) {
    this.object = e,
    this.size = void 0 !== t ? t : 1;
    var n = void 0 !== r ? r : 16776960
      , a = void 0 !== i ? i : 1
      , o = 0
      , s = this.object.geometry;
    s instanceof THREE.Geometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    var c = new THREE.BufferGeometry
      , h = new THREE.Float32Attribute(2 * o * 3,3);
    c.addAttribute("position", h),
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: n,
        linewidth: a
    })),
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper,
THREE.FaceNormalsHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , r = new THREE.Matrix3;
    return function() {
        this.object.updateMatrixWorld(!0),
        r.getNormalMatrix(this.object.matrixWorld);
        for (var i = this.object.matrixWorld, n = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
            var u = s[h]
              , p = u.normal;
            e.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(i),
            t.copy(p).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),
            n.setXYZ(c, e.x, e.y, e.z),
            c += 1,
            n.setXYZ(c, t.x, t.y, t.z),
            c += 1
        }
        return n.needsUpdate = !0,
        this
    }
}(),
THREE.GridHelper = function(e, t, r, i) {
    t = t || 1,
    r = new THREE.Color(void 0 !== r ? r : 4473924),
    i = new THREE.Color(void 0 !== i ? i : 8947848);
    for (var n = t / 2, a = 2 * e / t, o = [], s = [], c = 0, h = 0, l = -e; c <= t; c++,
    l += a) {
        o.push(-e, 0, l, e, 0, l),
        o.push(l, 0, -e, l, 0, e);
        var u = c === n ? r : i;
        u.toArray(s, h),
        h += 3,
        u.toArray(s, h),
        h += 3,
        u.toArray(s, h),
        h += 3,
        u.toArray(s, h),
        h += 3
    }
    var p = new THREE.BufferGeometry;
    p.addAttribute("position", new THREE.Float32Attribute(o,3)),
    p.addAttribute("color", new THREE.Float32Attribute(s,3));
    var d = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.LineSegments.call(this, p, d)
}
,
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.GridHelper.prototype.constructor = THREE.GridHelper,
THREE.GridHelper.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
}
,
THREE.HemisphereLightHelper = function(e, t) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.colors = [new THREE.Color, new THREE.Color];
    var r = new THREE.SphereGeometry(t,4,2);
    r.rotateX(-Math.PI / 2);
    for (var i = 0; i < 8; i++)
        r.faces[i].color = this.colors[i < 4 ? 0 : 1];
    var n = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    });
    this.lightSphere = new THREE.Mesh(r,n),
    this.add(this.lightSphere),
    this.update()
}
,
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper,
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose(),
    this.lightSphere.material.dispose()
}
,
THREE.HemisphereLightHelper.prototype.update = function() {
    var e = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
        this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}(),
THREE.PointLightHelper = function(e, t) {
    this.light = e,
    this.light.updateMatrixWorld();
    var r = new THREE.SphereBufferGeometry(t,4,2)
      , i = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    i.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    THREE.Mesh.call(this, r, i),
    this.matrix = this.light.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper,
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose(),
    this.material.dispose()
}
,
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
}
,
THREE.SkeletonHelper = function(e) {
    this.bones = this.getBoneList(e);
    for (var t = new THREE.Geometry, r = 0; r < this.bones.length; r++) {
        this.bones[r].parent instanceof THREE.Bone && (t.vertices.push(new THREE.Vector3),
        t.vertices.push(new THREE.Vector3),
        t.colors.push(new THREE.Color(0,0,1)),
        t.colors.push(new THREE.Color(0,1,0)))
    }
    t.dynamic = !0;
    var i = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    });
    THREE.LineSegments.call(this, t, i),
    this.root = e,
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper,
THREE.SkeletonHelper.prototype.getBoneList = function(e) {
    var t = [];
    e instanceof THREE.Bone && t.push(e);
    for (var r = 0; r < e.children.length; r++)
        t.push.apply(t, this.getBoneList(e.children[r]));
    return t
}
,
THREE.SkeletonHelper.prototype.update = function() {
    for (var e = this.geometry, t = (new THREE.Matrix4).getInverse(this.root.matrixWorld), r = new THREE.Matrix4, i = 0, n = 0; n < this.bones.length; n++) {
        var a = this.bones[n];
        a.parent instanceof THREE.Bone && (r.multiplyMatrices(t, a.matrixWorld),
        e.vertices[i].setFromMatrixPosition(r),
        r.multiplyMatrices(t, a.parent.matrixWorld),
        e.vertices[i + 1].setFromMatrixPosition(r),
        i += 2)
    }
    e.verticesNeedUpdate = !0,
    e.computeBoundingSphere()
}
,
THREE.SpotLightHelper = function(e) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1;
    for (var t = new THREE.BufferGeometry, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, n = 1; i < 32; i++,
    n++) {
        var a = i / 32 * Math.PI * 2
          , o = n / 32 * Math.PI * 2;
        r.push(Math.cos(a), Math.sin(a), 1, Math.cos(o), Math.sin(o), 1)
    }
    t.addAttribute("position", new THREE.Float32Attribute(r,3));
    var s = new THREE.LineBasicMaterial({
        fog: !1
    });
    this.cone = new THREE.LineSegments(t,s),
    this.add(this.cone),
    this.update()
}
,
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper,
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose(),
    this.cone.material.dispose()
}
,
THREE.SpotLightHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3;
    return function() {
        var r = this.light.distance ? this.light.distance : 1e3
          , i = r * Math.tan(this.light.angle);
        this.cone.scale.set(i, i, r),
        e.setFromMatrixPosition(this.light.matrixWorld),
        t.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(t.sub(e)),
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}(),
THREE.VertexNormalsHelper = function(e, t, r, i) {
    this.object = e,
    this.size = void 0 !== t ? t : 1;
    var n = void 0 !== r ? r : 16711680
      , a = void 0 !== i ? i : 1
      , o = 0
      , s = this.object.geometry;
    s instanceof THREE.Geometry ? o = 3 * s.faces.length : s instanceof THREE.BufferGeometry && (o = s.attributes.normal.count);
    var c = new THREE.BufferGeometry
      , h = new THREE.Float32Attribute(2 * o * 3,3);
    c.addAttribute("position", h),
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: n,
        linewidth: a
    })),
    this.matrixAutoUpdate = !1,
    this.update()
}
,
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper,
THREE.VertexNormalsHelper.prototype.update = function() {
    var e = new THREE.Vector3
      , t = new THREE.Vector3
      , r = new THREE.Matrix3;
    return function() {
        var i = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0),
        r.getNormalMatrix(this.object.matrixWorld);
        var n = this.object.matrixWorld
          , a = this.geometry.attributes.position
          , o = this.object.geometry;
        if (o instanceof THREE.Geometry)
            for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
                for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
                    var E = s[p[i[d]]]
                      , m = p.vertexNormals[d];
                    e.copy(E).applyMatrix4(n),
                    t.copy(m).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),
                    a.setXYZ(h, e.x, e.y, e.z),
                    h += 1,
                    a.setXYZ(h, t.x, t.y, t.z),
                    h += 1
                }
        else if (o instanceof THREE.BufferGeometry)
            for (var g = o.attributes.position, v = o.attributes.normal, h = 0, d = 0, f = g.count; d < f; d++)
                e.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(n),
                t.set(v.getX(d), v.getY(d), v.getZ(d)),
                t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),
                a.setXYZ(h, e.x, e.y, e.z),
                h += 1,
                a.setXYZ(h, t.x, t.y, t.z),
                h += 1;
        return a.needsUpdate = !0,
        this
    }
}(),
THREE.WireframeHelper = function(e, t) {
    var r = void 0 !== t ? t : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(e.geometry), new THREE.LineBasicMaterial({
        color: r
    })),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1
}
,
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper,
THREE.ImmediateRenderObject = function(e) {
    THREE.Object3D.call(this),
    this.material = e,
    this.render = function(e) {}
}
,
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject,
THREE.MorphBlendMesh = function(e, t) {
    THREE.Mesh.call(this, e, t),
    this.animationsMap = {},
    this.animationsList = [];
    var r = this.geometry.morphTargets.length
      , i = r - 1
      , n = r / 1;
    this.createAnimation("__default", 0, i, n),
    this.setAnimationWeight("__default", 1)
}
,
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh,
THREE.MorphBlendMesh.prototype.createAnimation = function(e, t, r, i) {
    var n = {
        start: t,
        end: r,
        length: r - t + 1,
        fps: i,
        duration: (r - t) / i,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[e] = n,
    this.animationsList.push(n)
}
,
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
    for (var t, r = /([a-z]+)_?(\d+)/i, i = {}, n = this.geometry, a = 0, o = n.morphTargets.length; a < o; a++) {
        var s = n.morphTargets[a].name.match(r);
        if (s && s.length > 1) {
            i[c = s[1]] || (i[c] = {
                start: 1 / 0,
                end: -1 / 0
            });
            a < (h = i[c]).start && (h.start = a),
            a > h.end && (h.end = a),
            t || (t = c)
        }
    }
    for (var c in i) {
        var h = i[c];
        this.createAnimation(c, h.start, h.end, e)
    }
    this.firstAnimation = t
}
,
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
    var t = this.animationsMap[e];
    t && (t.direction = 1,
    t.directionBackwards = !1)
}
,
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
    var t = this.animationsMap[e];
    t && (t.direction = -1,
    t.directionBackwards = !0)
}
,
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.fps = t,
    r.duration = (r.end - r.start) / r.fps)
}
,
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.duration = t,
    r.fps = (r.end - r.start) / r.duration)
}
,
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.weight = t)
}
,
THREE.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.time = t)
}
,
THREE.MorphBlendMesh.prototype.getAnimationTime = function(e) {
    var t = 0
      , r = this.animationsMap[e];
    return r && (t = r.time),
    t
}
,
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
    var t = -1
      , r = this.animationsMap[e];
    return r && (t = r.duration),
    t
}
,
THREE.MorphBlendMesh.prototype.playAnimation = function(e) {
    var t = this.animationsMap[e];
    t ? (t.time = 0,
    t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
}
,
THREE.MorphBlendMesh.prototype.stopAnimation = function(e) {
    var t = this.animationsMap[e];
    t && (t.active = !1)
}
,
THREE.MorphBlendMesh.prototype.update = function(e) {
    for (var t = 0, r = this.animationsList.length; t < r; t++) {
        var i = this.animationsList[t];
        if (i.active) {
            var n = i.duration / i.length;
            i.time += i.direction * e,
            i.mirroredLoop ? (i.time > i.duration || i.time < 0) && (i.direction *= -1,
            i.time > i.duration && (i.time = i.duration,
            i.directionBackwards = !0),
            i.time < 0 && (i.time = 0,
            i.directionBackwards = !1)) : (i.time = i.time % i.duration,
            i.time < 0 && (i.time += i.duration));
            var a = i.start + THREE.Math.clamp(Math.floor(i.time / n), 0, i.length - 1)
              , o = i.weight;
            a !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0,
            this.morphTargetInfluences[i.currentFrame] = 1 * o,
            this.morphTargetInfluences[a] = 0,
            i.lastFrame = i.currentFrame,
            i.currentFrame = a);
            var s = i.time % n / n;
            i.directionBackwards && (s = 1 - s),
            i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = s * o,
            this.morphTargetInfluences[i.lastFrame] = (1 - s) * o) : this.morphTargetInfluences[i.currentFrame] = o
        }
    }
}
;
