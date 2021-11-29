function CreateShaderMaterial(parameters) {
    var material = new THREE.RawShaderMaterial(shader);
    material.extensions = {
        derivatives : true,
        shaderTextureLOD : true
    };
    material.pbr = true;
    material.lights = false;
    material.defines.USE_ALBEDOMAP = true;
    material.side = parameters.side || THREE.FrontSide;

    material.uuid = parameters.uuid;
    material.name = parameters.name;
    
    // material._uAlbedoPBRFactor = parameters.albedoFactor || 1;
    // material._uNormalMapFactor = parameters.normalMapFactor || 1;
    // material._uMetalnessPBRFactor = parameters.metalFactor || 1;
    // material._uGlossinessPBRFactor = parameters.glossFactor || 1;
    // material._uAOPBRFactor = parameters.aoFactor || 1;
    // material._uSpecularF0Factor = parameters.f0Factor || .5;
    // material._occludeSpecular = parameters.occludeSpecular ? 1 : 0 || 1;
    // material._uFlipY = parameters.flipNormals || 0;
    // material._opacity = parameters.opacity || 1;
    // material._color = (new THREE.Color).setHex(void 0 !== parameters.color ? parameters.color : 16777215);
    // material._uEnvironmentExposure = parameters.exposure || 1;
    // material._uEnvironmentTransform = new THREE.Matrix4;
    // material._uDiffuseSPH = parameters.uDiffuseSPH;
    
    material.uniforms.uAlbedoPBRFactor.value = parameters.albedoFactor || 1;
    material.uniforms.uNormalMapFactor.value = parameters.normalMapFactor || 1;
    material.uniforms.uMetalnessPBRFactor.value = parameters.metalFactor || 1;
    material.uniforms.uGlossinessPBRFactor.value = parameters.glossFactor || 1;
    material.uniforms.uAOPBRFactor.value = parameters.aoFactor || 1;
    material.uniforms.uSpecularF0Factor.value = parameters.f0Factor || .5;
    material.uniforms.uOccludeSpecular.value = parameters.occludeSpecular ? 1 : 0 || 1;
    material.uniforms.uFlipY.value = parameters.flipNormals || 0;
    material.uniforms.uOpacityFactor.value = parameters.opacity || 1;
    material.uniforms.uColor.value = (new THREE.Color).setHex(void 0 !== parameters.color ? parameters.color : 16777215);
    material.uniforms.uEnvironmentExposure.value = parameters.exposure || 1;
    material.uniforms.uEnvironmentTransform.value = new THREE.Matrix4;
    material.uniforms.uDiffuseSPH.value = parameters.uDiffuseSPH;

    var defaultWhiteTexture = new THREE.DataTexture(4*4*3, 4, 4, THREE.RGBFormat);
    // defaultWhiteTexture.needsUpdate = true;
	console.log(defaultWhiteTexture,defaultWhiteTexture.needsUpdate);
    for (var i = 0; i < defaultWhiteTexture.image.data.length; i++) {
        defaultNormalTexture.image.data[i] = 255;
    }
    var defaultNormalTexture = new THREE.DataTexture(4*4*3, 4, 4, THREE.RGBFormat);
    // defaultNormalTexture.needsUpdate = true;
    for (var i = 0; i < defaultNormalTexture.image.data.length; i+=3) {
        defaultNormalTexture.image.data[i] = 128;
        defaultNormalTexture.image.data[i + 1] = 128;
        defaultNormalTexture.image.data[i + 2] = 255;
    }
	// parameters.albedoMap.needsUpdate = true;
	// console.log(parameters.albedoMap);
	// console.log(defaultWhiteTexture,defaultWhiteTexture.needsUpdate);
    // material._sTextureAlbedoMap = parameters.albedoMap;
    // material._sTextureAlbedoMap2 = defaultWhiteTexture;
    // material._sTextureNormalMap = defaultNormalTexture;
    // material._sTextureNormalMap2 = defaultNormalTexture;
    // material._sTextureAOMap = defaultWhiteTexture,
    // material._sTextureAOMap2 = defaultWhiteTexture;
    // material._sTexturePBRMaps = defaultWhiteTexture;
    // material._sTextureEmissiveMap = defaultWhiteTexture;
    // material._sTextureLightMap = defaultWhiteTexture;
    // material._sTextureLightMapDir = defaultWhiteTexture;

    // material.uniforms.sTextureAlbedoMap.value = parameters.albedoMap;
    // material.uniforms.sTextureAlbedoMap2.value = defaultWhiteTexture;
    // material.uniforms.sTextureNormalMap.value = defaultNormalTexture;
    // material.uniforms.sTextureNormalMap2.value = defaultNormalTexture;
    // material.uniforms.sTextureAOMap.value = parameters.aoMap,
    // material.uniforms.sTextureAOMap2.value = defaultWhiteTexture;
    // material.uniforms.sTexturePBRMaps.value = defaultWhiteTexture;
    // material.uniforms.sTextureEmissiveMap.value = defaultWhiteTexture;
    // material.uniforms.sTextureLightMap.value = defaultWhiteTexture;
    // material.uniforms.sTextureLightMapDir.value = defaultWhiteTexture;

    material.uniforms.sTextureAlbedoMap.value = parameters.albedoMap;
    material.uniforms.sTextureAlbedoMap2.value = parameters.albedoMap;
    material.uniforms.sTextureNormalMap.value = parameters.albedoMap;
    material.uniforms.sTextureNormalMap2.value = parameters.albedoMap;
    material.uniforms.sTextureAOMap.value = parameters.aoMap,
    material.uniforms.sTextureAOMap2.value = parameters.albedoMap;
    material.uniforms.sTexturePBRMaps.value = parameters.albedoMap;
    material.uniforms.sTextureEmissiveMap.value = parameters.albedoMap;
    material.uniforms.sTextureLightMap.value = parameters.albedoMap;
    material.uniforms.sTextureLightMapDir.value = parameters.albedoMap;

    console.log(material)
    return material;
}

const shader = {
    uniforms: {
        uAOPBRFactor: {
            type: "f",
            value: 1
        },
        uAlbedoPBRFactor: {
            type: "f",
            value: 1
        },
        uGlossinessPBRFactor: {
            type: "f",
            value: 1
        },
        uMetalnessPBRFactor: {
            type: "f",
            value: 1
        },
        uNormalMapFactor: {
            type: "f",
            value: 1
        },
        uSpecularF0Factor: {
            type: "f",
            value: 1
        },
        uEnvironmentExposure: {
            type: "f",
            value: 1
        },
        uOpacityFactor: {
            type: "f",
            value: 1
        },
        sTextureAlbedoMap: {
            type: "t",
            value: null
        },
        sTextureAlbedoMap2: {
            type: "t",
            value: null
        },
        sTextureNormalMap: {
            type: "t",
            value: null
        },
        sTextureNormalMap2: {
            type: "t",
            value: null
        },
        sTextureAOMap: {
            type: "t",
            value: null
        },
        sTextureAOMap2: {
            type: "t",
            value: null
        },
        sTexturePBRMaps: {
            type: "t",
            value: null
        },
        sTextureEmissiveMap: {
            type: "t",
            value: null
        },
        sTextureLightMap: {
            type: "t",
            value: null
        },
        sTextureLightMapDir: {
            type: "t",
            value: null
        },
        sSpecularPBR: {
            type: "t",
            value: null
        },
        sPanoramaPBR: {
            type: "t",
            value: null
        },
        uTextureEnvironmentSpecularPBRLodRange: {
            type: "v2",
            value: new THREE.Vector2(10, 5)
        },
        uTextureEnvironmentSpecularPBRTextureSize: {
            type: "v2",
            value: new THREE.Vector2
        },
        uDiffuseSPH: {
            type: "3fv",
            value: null
        },
        uFlipY: {
            type: "i",
            value: 0
        },
        uOccludeSpecular: {
            type: "i",
            value: 0
        },
        uOutputLinear: {
            type: "i",
            value: 0
        },
        uEnvironmentTransform: {
            type: "m4",
            value: new THREE.Matrix4
        },
        uMode: {
            type: "i",
            value: 0
        },
        uColor: {
            type: "c",
            value: null
        },
        uAlphaTest: {
            type: "f",
            value: 0
        },
        uContrast: {
            type: "f",
            value: 1.1
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        offsetRepeatDetail: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        viewLightDir: {
            type: "v3",
            value: new THREE.Vector3
        },
        specularHighlights: {
            type: "i",
            value: 1
        },
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
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
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
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        fogNear: {
            type: "f",
            value: 225
        },
        fogFar: {
            type: "f",
            value: 325
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(10676479)
        }
    },
    vertexShader: `#define PI 3.14159265359
		#define PI2 6.28318530718
		#define PI_HALF 1.5707963267949
		#define RECIPROCAL_PI 0.31830988618
		#define RECIPROCAL_PI2 0.15915494
		#define LOG2 1.442695
		#define EPSILON 1e-6
		#ifdef GL_ES
			precision mediump float;
			precision mediump int;
		#endif
		
		#define saturate(a) clamp( a, 0.0, 1.0 )
		#define whiteCompliment(a) ( 1.0 - saturate( a ) )
		
		attribute vec3 position;
		attribute vec3 normal;
		attribute vec4 tangent;
		attribute vec2 uv;
		attribute vec2 uv2;
		
		uniform mat4 modelMatrix;
		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;
		uniform mat4 viewMatrix;
		uniform mat3 normalMatrix;
		uniform vec3 cameraPosition;
		
		uniform vec4 offsetRepeat;
		uniform vec4 offsetRepeatDetail;
		
		// varying vec3 FragPosition;
		varying vec3 FragNormal;
		varying vec4 FragTangent;
		varying vec4 FragEyeVector;
		varying vec2 vUv;
		
		// Optimization just for this experiment
		varying vec3 vEyeLightDir;
		varying float vDotNL;
		varying vec3 vComputeGGXResult;
		
		#if NUM_DIR_LIGHTS > 0
		  #define G1V(dotNV, k) (1.0/(dotNV*(1.0-k)+k))
		
		  struct DirectionalLight {
		    vec3 direction;
		    vec3 color;
		
		    int shadow;
		    float shadowBias;
		    float shadowRadius;
		    vec2 shadowMapSize;
		    float intensity;
		  };
		
		  uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
		
		  vec3 computeGGX(const vec4 precomputeGGX, const vec3 normal, const vec3 eyeVector, const vec3 eyeLightDir, const vec3 F0, const float dotNL) {
		
		      vec3 H = normalize(eyeVector + eyeLightDir);
		      float dotNH = saturate(dot(normal, H));
		      // D
		      float alphaSqr = precomputeGGX.y;
		      float denom = dotNH * dotNH * (alphaSqr - 1.0) + 1.0;
		      float D = alphaSqr / (PI * denom * denom);
		
		      // F
		      float dotLH = saturate(dot(eyeLightDir, H));
		      float dotLH5 = pow(1.0 - dotLH, 5.0);
		      vec3 F = vec3(F0) + (vec3(1.0) - F0) * (dotLH5);
		
		      // V
		      float visNL = G1V(dotNL, precomputeGGX.z);
		      return D * F * visNL * precomputeGGX.w;
		  }
		
		#endif
		
		#if defined(USE_ALBEDO2) || defined(USE_NORMALMAP2) || defined(USE_AOMAP2)
		varying vec2 vUvDetail;
		#endif
		
		varying vec2 vUv2;
		
		#ifdef USE_SHADOWMAP
		
		  #if NUM_DIR_LIGHTS > 0
		
		    uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];
		    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
		
		  #endif
		
		  #if NUM_SPOT_LIGHTS > 0
		
		    uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];
		    varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];
		
		  #endif
		
		  #if NUM_POINT_LIGHTS > 0
		
		    uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];
		    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];
		
		  #endif
		#endif
		
		#ifdef USE_FOG
		
		  varying float fogDepth;
		
		#endif
		
		void main() {
		  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
		
		  FragEyeVector = viewMatrix * worldPosition;
		
		  // FragPosition = worldPosition.xyz;
		
		  gl_Position = projectionMatrix * FragEyeVector;
		
		  vUv = uv.xy * offsetRepeat.zw + offsetRepeat.xy;
		
		  #if defined(USE_ALBEDO2) || defined(USE_NORMALMAP2) || defined(USE_AOMAP2)
		  vUvDetail = uv.xy * offsetRepeatDetail.zw + offsetRepeatDetail.xy;
		  #endif
		
		  FragNormal = normalMatrix * normal;
		  FragTangent.xyz = normalMatrix * tangent.xyz;
		  FragTangent.w = tangent.w;
		
		  vUv2 = uv2.xy;
		
		  #ifdef USE_SHADOWMAP
		
		    #if NUM_DIR_LIGHTS > 0
		
		      vDirectionalShadowCoord[ 0 ] = directionalShadowMatrix[ 0 ] * worldPosition;
		
		    #endif
		
		  #endif
		
		
		  #ifdef USE_FOG
		    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
		    fogDepth = -mvPosition.z;
		  #endif
		
		
		  #if NUM_DIR_LIGHTS > 0
		
		    // Precompute sun in VS because we have no normal map
		
		    DirectionalLight dirLight;
		
		    dirLight = directionalLights[0];
		
		    vec3 normalizedNormal = normalize(FragNormal);
		
		    vEyeLightDir = dirLight.direction;
		    vDotNL = dot(dirLight.direction, normalizedNormal);
		
		    vec3 eyeVector = normalize(-FragEyeVector.rgb);
		
		    vec4 prepGGX = vec4(0.251, 0.063, 0.125, 1.0);
		
		    vComputeGGXResult = computeGGX(prepGGX, normalizedNormal, eyeVector, dirLight.direction, vec3(0.05), vDotNL);
		
		  #endif
		}
		`,
    fragmentShader: `#define MOBILE
		#define LUV
		#ifdef GL_ES
			precision mediump float;
			precision mediump int;
		#endif
		
		uniform float uAOPBRFactor;
		uniform float uAlbedoPBRFactor;
		uniform float uEnvironmentExposure;
		uniform float uGlossinessPBRFactor;
		uniform float uMetalnessPBRFactor;
		uniform float uNormalMapFactor;
		uniform float uOpacityFactor;
		uniform float uSpecularF0Factor;
		
		uniform int uMode;
		uniform vec3 uColor;
		uniform float uAlphaTest;
		
		uniform int uFlipY;
		uniform int uOccludeSpecular;
		uniform int uOutputLinear;
		
		uniform sampler2D sTextureAlbedoMap;
		uniform sampler2D sTextureAlbedoMap2;
		uniform sampler2D sTextureNormalMap;
		uniform sampler2D sTextureNormalMap2;
		uniform sampler2D sTextureAOMap;
		uniform sampler2D sTextureAOMap2;
		uniform sampler2D sTextureEmissiveMap;
		uniform sampler2D sTexturePBRMaps;
		
		uniform vec2 uTextureEnvironmentSpecularPBRLodRange;
		uniform vec2 uTextureEnvironmentSpecularPBRTextureSize;
		uniform vec3 uDiffuseSPH[9];
		uniform mat4 uEnvironmentTransform;
		
		// varying vec3 FragPosition;
		varying vec3 FragNormal;
		varying vec4 FragTangent;
		varying vec4 FragEyeVector;
		varying vec2 vUv;
		
		#if defined(USE_ALBEDO2) || defined(USE_NORMALMAP2) || defined(USE_AOMAP2)
		varying vec2 vUvDetail;
		#endif
		
		#ifdef USE_LIGHTMAP
		  uniform sampler2D sTextureLightMap;
		  uniform sampler2D sTextureLightMapAlpha;
		#endif
		
		varying vec2 vUv2;
		
		#ifdef USE_FOG
		
		  uniform vec3 fogColor;
		  varying float fogDepth;
		  uniform float fogNear;
		  uniform float fogFar;
		
		#endif
		
		
		// THREE.js common.glsl
		#define PI 3.14159265359
		#define PI2 6.28318530718
		#define PI_HALF 1.5707963267949
		#define RECIPROCAL_PI 0.31830988618
		#define RECIPROCAL_PI2 0.15915494
		#define LOG2 1.442695
		#define EPSILON 1e-6
		
		#define saturate(a) clamp( a, 0.0, 1.0 )
		#define whiteCompliment(a) ( 1.0 - saturate( a ) )
		
		float pow2( const in float x ) { return x*x; }
		float pow3( const in float x ) { return x*x*x; }
		float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
		float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
		// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
		// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
		highp float rand( const in vec2 uv ) {
		  const highp float a = 12.9898, b = 78.233, c = 43758.5453;
		  highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
		  return fract(sin(sn) * c);
		}
		
		struct IncidentLight {
		  vec3 color;
		  vec3 direction;
		  bool visible;
		};
		
		struct ReflectedLight {
		  vec3 directDiffuse;
		  vec3 directSpecular;
		  vec3 indirectDiffuse;
		  vec3 indirectSpecular;
		};
		
		struct GeometricContext {
		  vec3 position;
		  vec3 normal;
		  vec3 viewDir;
		};
		
		vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
		
		  return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
		
		}
		
		// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations
		vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
		
		  return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
		
		}
		
		vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
		
		  float distance = dot( planeNormal, point - pointOnPlane );
		
		  return - distance * planeNormal + point;
		
		}
		
		float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
		
		  return sign( dot( point - pointOnPlane, planeNormal ) );
		
		}
		
		vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
		
		  return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
		
		}
		
		mat3 transposeMat3( const in mat3 m ) {
		
		  mat3 tmp;
		
		  tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
		  tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
		  tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
		
		  return tmp;
		
		}
		
		// https://en.wikipedia.org/wiki/Relative_luminance
		float linearToRelativeLuminance( const in vec3 color ) {
		
		  vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
		
		  return dot( weights, color.rgb );
		
		}
		
		// end common.glsl
		
		// THREE.js packing
		
		vec3 packNormalToRGB( const in vec3 normal ) {
		  return normalize( normal ) * 0.5 + 0.5;
		}
		
		vec3 unpackRGBToNormal( const in vec3 rgb ) {
		  return 2.0 * rgb.xyz - 1.0;
		}
		
		const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
		const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
		
		const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
		const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
		
		const float ShiftRight8 = 1. / 256.;
		
		vec4 packDepthToRGBA( const in float v ) {
		  vec4 r = vec4( fract( v * PackFactors ), v );
		  r.yzw -= r.xyz * ShiftRight8; // tidy overflow
		  return r * PackUpscale;
		}
		
		float unpackRGBAToDepth( const in vec4 v ) {
		  return dot( v, UnpackFactors );
		}
		
		// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions
		
		float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
		  return ( viewZ + near ) / ( near - far );
		}
		float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
		  return linearClipZ * ( near - far ) - near;
		}
		
		float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
		  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
		}
		float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
		  return ( near * far ) / ( ( far - near ) * invClipZ - far );
		}
		
		// end packing
		
		float blendOverlay(float base, float blend) {
		  return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
		}
		
		vec3 blendOverlay(vec3 base, vec3 blend) {
		  return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
		}
		
		vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
		  return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
		}
		
		// references
		// https://www.khronos.org/registry/gles/extensions/EXT/EXT_sRGB.txt
		
		// approximation
		// http://chilliant.blogspot.fr/2012/08/srgb-approximations-for-hlsl.html
		float linearTosRGB(const in float c) {
		  if (c >= 1.0) return 1.0;
		  float S1 = sqrt(c);
		  float S2 = sqrt(S1);
		  float S3 = sqrt(S2);
		  return 0.662002687 * S1 + 0.684122060 * S2 - 0.323583601 * S3 - 0.0225411470 * c;
		}
		
		vec3 linearTosRGB(const in vec3 c) {
		  // vec3 cm = min(c, 1.0);
		  vec3 cm = c;
		  vec3 S1 = sqrt(cm);
		  vec3 S2 = sqrt(S1);
		  vec3 S3 = sqrt(S2);
		  return 0.662002687 * S1 + 0.684122060 * S2 - 0.323583601 * S3 - 0.0225411470 * cm;
		}
		
		vec4 linearTosRGB(const in vec4 c) {
		  vec3 cm = min(c.rgb, 1.0);
		  vec3 S1 = sqrt(cm);
		  vec3 S2 = sqrt(S1);
		  vec3 S3 = sqrt(S2);
		  return vec4(0.662002687 * S1 + 0.684122060 * S2 - 0.323583601 * S3 - 0.0225411470 * cm, c.a);
		}
		
		float sRGBToLinear(const in float c) {
		  return c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878);
		}
		
		vec3 sRGBToLinear(const in vec3 c) {
		  return c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878);
		}
		
		vec4 sRGBToLinear(const in vec4 c) {
		  return vec4(c.rgb * (c.rgb * (c.rgb * 0.305306011 + 0.682171111) + 0.012522878), c.a);
		}
		
		//http://graphicrants.blogspot.fr/2009/04/rgbm-color-encoding.html
		vec3 RGBMToRGB(const in vec4 rgba) {
		  const float maxRange = 8.0;
		  return rgba.rgb * maxRange * rgba.a;
		}
		
		const mat3 LUVInverse = mat3(6.0013,    -2.700,   -1.7995,
		                -1.332,    3.1029,   -5.7720,
		                0.3007,    -1.088,    5.6268);
		
		vec3 LUVToRGB(const in vec4 vLogLuv) {
		  float Le = vLogLuv.z * 255.0 + vLogLuv.w;
		  vec3 Xp_Y_XYZp;
		  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);
		  Xp_Y_XYZp.z = Xp_Y_XYZp.y / vLogLuv.y;
		  Xp_Y_XYZp.x = vLogLuv.x * Xp_Y_XYZp.z;
		  vec3 vRGB = LUVInverse * Xp_Y_XYZp;
		  return max(vRGB, 0.0);
		}
		
		// http://graphicrants.blogspot.fr/2009/04/rgbm-color-encoding.html
		vec4 encodeRGBM(const in vec3 col, const in float range) {
		  if(range <= 0.0)
		    return vec4(col, 1.0);
		  vec4 rgbm;
		  vec3 color = col / range;
		  rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
		  rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
		  rgbm.rgb = color / rgbm.a;
		  return rgbm;
		}
		
		vec3 decodeRGBM(const in vec4 col, const in float range) {
		  if(range <= 0.0)
		    return col.rgb;
		  return range * col.rgb * col.a;
		}
		
		vec3 textureRGB(const in sampler2D texture, const in vec2 uv) {
		  return texture2D(texture, uv.xy).rgb;
		}
		
		vec4 textureRGBA(const in sampler2D texture, const in vec2 uv) {
		  return texture2D(texture, uv.xy).rgba;
		}
		
		float textureIntensity(const in sampler2D texture, const in vec2 uv) {
		  return texture2D(texture, uv).r;
		}
		
		float textureAlpha(const in sampler2D texture, const in vec2 uv) {
		  return texture2D(texture, uv.xy).a;
		}
		
		float adjustSpecular(const in float specular, const in vec3 normal) {
		  // Based on The Order : 1886 SIGGRAPH course notes implementation (page 21 notes)
		  float normalLen = length(normal);
		  if (normalLen < 1.0) {
		    float normalLen2 = normalLen * normalLen;
		    float kappa = (3.0 * normalLen -  normalLen2 * normalLen)/(1.0 - normalLen2);
		    // http://www.frostbite.com/2014/11/moving-frostbite-to-pbr/
		    // page 91 : they use 0.5/kappa instead
		    return 1.0-min(1.0, sqrt((1.0-specular) * (1.0-specular) + 1.0/kappa));
		  }
		  return specular;
		}
		
		vec3 mtexNspaceTangent(const in vec4 tangent, const in vec3 normal, const in vec3 texnormal) {
		  vec3 tang = vec3(0.0,1.0,0.0);
		  float l = length(tangent.xyz);
		  if (l != 0.0) {
		    //normalize reusing length computations
		    // tang =  normalize(tangent.xyz);
		    tang =  tangent.xyz / l;
		  }
		  vec3 B = tangent.w * normalize(cross(normal, tang));
		  return normalize(texnormal.x*tang + texnormal.y*B + texnormal.z*normal);
		}
		
		vec2 normalMatcap(const in vec3 normal, const in vec3 nm_z) {
		  vec3 nm_x = vec3(-nm_z.z, 0.0, nm_z.x);
		  vec3 nm_y = cross(nm_x, nm_z);
		  return vec2(dot(normal.xz, nm_x.xz), dot(normal, nm_y)) * vec2(0.5)  + vec2(0.5) ; //MADD vector form
		}
		
		vec3 rgbToNormal(const in vec3 texel, const in int flipNormalY) {
		  vec3 rgb = texel * vec3(2.0) + vec3(-1.0); // MADD vec form
		  rgb[1] = flipNormalY == 1 ? -rgb[1] : rgb[1];
		  return rgb;
		}
		
		vec3 bumpMap(const in vec4 tangent, const in vec3 normal, const in vec2 gradient) {
		  vec3 outnormal;
		  float l = length(tangent.xyz);
		  if (l != 0.0) {
		    //normalize reusing length computations
		    // vec3 tang =  normalize(tangent.xyz);
		    vec3 tang =  tangent.xyz / l;
		    vec3 binormal = tangent.w * normalize(cross(normal, tang));
		    outnormal = normal + gradient.x * tang + gradient.y * binormal;
		  }
		  else {
		     outnormal = vec3(normal.x + gradient.x, normal.y + gradient.y, normal.z);
		  }
		  return normalize(outnormal);
		}
		
		float specularOcclusion(const in int occlude, const in float ao, const in vec3 N, const in vec3 V) {
		  if(occlude == 0)
		    return 1.0;
		  // Yoshiharu Gotanda's specular occlusion approximation:
		  // cf http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx pg59
		  float d = dot(N, V) + ao;
		  return clamp((d * d) - 1.0 + ao, 0.0, 1.0);
		}
		
		float adjustRoughnessNormalMap(const in float roughness, const in vec3 normal) {
		  // Based on The Order : 1886 SIGGRAPH course notes implementation (page 21 notes)
		  float normalLen = length(normal);
		  if (normalLen < 1.0) {
		    float normalLen2 = normalLen * normalLen;
		    float kappa = (3.0 * normalLen -  normalLen2 * normalLen)/(1.0 - normalLen2);
		    // http://www.frostbite.com/2014/11/moving-frostbite-to-pbr/
		    // page 91 : they use 0.5/kappa instead
		    return min(1.0, sqrt(roughness * roughness + 1.0/kappa));
		  }
		  return roughness;
		}
		
		float adjustRoughnessGeometry(const in float roughness, const in vec3 normal) {
		  // Geometric Specular Aliasing (slide 43)
		  // http://alex.vlachos.com/graphics/Alex_Vlachos_Advanced_VR_Rendering_GDC2015.pdf
		// #ifdef GL_OES_standard_derivatives
		//     vec3 vDx = dFdx(normal.xyz);
		//     vec3 vDy = dFdy(normal.xyz);
		//     return max(roughness, pow(clamp(max(dot(vDx, vDx), dot(vDy, vDy)), 0.0, 1.0), 0.333));
		// #else
		  return roughness;
		// #endif
		}
		
		mat3 environmentTransformPBR(const in mat4 tr) {
		  // TODO trick from animation matrix transpose?
		  vec3 x = vec3(tr[0][0], tr[1][0], tr[2][0]);
		  vec3 y = vec3(tr[0][1], tr[1][1], tr[2][1]);
		  vec3 z = vec3(tr[0][2], tr[1][2], tr[2][2]);
		  mat3 m = mat3(x, y, z);
		  return m;
		}
		
		vec3 evaluateDiffuseSphericalHarmonics(const in vec3 s[9], const in mat3 envTrans, const in vec3 N) {
		  vec3 n = envTrans * N;
		  // https://github.com/cedricpinson/envtools/blob/master/Cubemap.cpp#L523
		  vec3 result = (s[0]+s[1]*n.y+s[2]*n.z+s[3]*n.x+s[4]*n.y*n.x+s[5]*n.y*n.z+s[6]*(3.0*n.z*n.z-1.0)+s[7]*(n.z*n.x)+s[8]*(n.x*n.x-n.y*n.y));
		  return max(result, vec3(0.0));
		}
		
		// Frostbite, Lagarde paper p67
		// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
		float linRoughnessToMipmap(const in float roughnessLinear) {
		  return sqrt(roughnessLinear);
		}
		
		vec3 integrateBRDF(const in vec3 specular, const in float r, const in float NoV, const in sampler2D tex) {
		  vec4 rgba = texture2D(tex, vec2(NoV, r));
		  float b = (rgba[3] * 65280.0 + rgba[2] * 255.0);
		  float a = (rgba[1] * 65280.0 + rgba[0] * 255.0);
		  const float div = 1.0/65535.0;
		  return (specular * a + b) * div;
		}
		
		// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
		// TODO should we use somehow specular f0 ?
		vec3 integrateBRDFApprox(const in vec3 specular, const in float roughness, const in float NoV) {
		  const vec4 c0 = vec4(-1, -0.0275, -0.572, 0.022);
		  const vec4 c1 = vec4(1, 0.0425, 1.04, -0.04);
		  vec4 r = roughness * c0 + c1;
		  float a004 = min(r.x * r.x, exp2(-9.28 * NoV)) * r.x + r.y;
		  vec2 AB = vec2(-1.04, 1.04) * a004 + r.zw;
		  return specular * AB.x + AB.y;
		}
		
		vec3 computeIBLDiffuseUE4(const in vec3 normal, const in vec3 albedo, const in mat3 envTrans, const in vec3 sphHarm[9]) {
		  return albedo * evaluateDiffuseSphericalHarmonics(sphHarm, envTrans, normal);
		}
		
		
		#ifdef CUBEMAP
		vec3 textureCubemapLod(const in samplerCube texture, const in vec3 dir, const in float lod) {
		  vec4 rgba = textureCubeLodEXT(texture, dir, lod);
		#ifdef FLOAT
		  return rgba.rgb;
		#endif
		#ifdef RGBM
		  return RGBMToRGB(rgba);
		#endif
		#ifdef LUV
		  return LUVToRGB(rgba);
		#endif
		}
		
		vec3 textureCubeLodEXTFixed(const in samplerCube texture, const in vec2 size, const in vec3 direction, const in float lodInput, const in float maxLod) {
		  vec3 dir = direction;
		  float lod = min(maxLod, lodInput);
		
		  // http://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/
		  float scale = 1.0 - exp2(lod) / size.x;
		  vec3 absDir = abs(dir);
		  float M = max(max(absDir.x, absDir.y), absDir.z);
		
		  if (absDir.x != M) dir.x *= scale;
		  if (absDir.y != M) dir.y *= scale;
		  if (absDir.z != M) dir.z *= scale;
		
		  return textureCubemapLod(texture, dir, lod);
		}
		
		vec3 prefilterEnvMapCube(const in float rLinear, const in vec3 R, const in samplerCube tex, const in vec2 lodRange, const in vec2 size){
		  float lod = linRoughnessToMipmap(rLinear) * lodRange[1];
		  return textureCubeLodEXTFixed(tex, size, R, lod, lodRange[0]);
		}
		
		#define samplerEnv samplerCube
		#define prefilterEnvMap prefilterEnvMapCube
		
		#else
		#ifdef PANORAMA
		vec2 computeUVForMipmap(const in float level, const in vec2 uvBase, const in float size, const in float maxLOD) {
		  vec2 uv = uvBase;
		  float widthForLevel = exp2(maxLOD - level);
		  float heightForLevel = widthForLevel * 0.5;
		  float widthFactor = pow(0.5, level);
		  float heightFactor = widthFactor * 0.5;
		  float texelSize = 1.0 / size;
		
		  uv.y = 1.0 - uv.y;
		
		  float resizeX = (widthForLevel - 2.0) * texelSize;
		  float resizeY = (heightForLevel - 2.0) * texelSize;
		
		  float uvSpaceLocalX = texelSize + uv.x * resizeX;
		  float uvSpaceLocalY = texelSize + uv.y * resizeY;
		
		  uvSpaceLocalY += heightFactor;
		
		  return vec2(uvSpaceLocalX, uvSpaceLocalY);
		}
		
		vec2 normalToPanoramaUVY(const in vec3 dir) {
		  float n = length(dir.xz);
		
		  // to avoid bleeding the max(-1.0,dir.x / n) is needed
		  vec2 pos = vec2((n > 0.0000001) ? max(-1.0, dir.x / n) : 0.0, dir.y);
		
		  // fix edge bleeding
		  if (pos.x > 0.0) pos.x = min(0.999999, pos.x);
		
		  pos = acos(pos) * 0.3183098861837907; // inv_pi
		
		  pos.x = (dir.z > 0.0) ? pos.x * 0.5 : 1.0 - (pos.x * 0.5);
		
		  // shift u to center the panorama to -z
		  pos.x = mod(pos.x - 0.25 + 1.0, 1.0);
		  pos.y = 1.0 - pos.y;
		  return pos;
		}
		
		vec3 texturePanorama(const in sampler2D texture, const in vec2 uv) {
		  vec4 rgba = texture2D(texture, uv);
		#ifdef FLOAT
		  return rgba.rgb;
		#endif
		#ifdef RGBM
		  return RGBMToRGB(rgba);
		#endif
		#ifdef LUV
		  return LUVToRGB(rgba);
		#endif
		}
		
		vec3 texturePanoramaLod(const in sampler2D texture, const in vec2 size, const in vec3 direction, const in float lodInput, const in float maxLOD) {
		  float lod = min(maxLOD, lodInput);
		  vec2 uvBase = normalToPanoramaUVY(direction);
		
		  float lod0 = floor(lod);
		  vec2 uv0 = computeUVForMipmap(lod0, uvBase, size.x, maxLOD);
		  vec3 texel0 = texturePanorama(texture, uv0.xy);
		
		  float lod1 = ceil(lod);
		  vec2 uv1 = computeUVForMipmap(lod1, uvBase, size.x, maxLOD);
		  vec3 texel1 = texturePanorama(texture, uv1.xy);
		
		  return mix(texel0, texel1, fract(lod));
		}
		
		vec3 prefilterEnvMapPanorama(const in float rLinear, const in vec3 R, const in sampler2D tex, const in vec2 lodRange, const in vec2 size) {
		  float lod = linRoughnessToMipmap(rLinear) * lodRange[1]; //(uEnvironmentMaxLod - 1.0);
		  return texturePanoramaLod(tex, size, R, lod, lodRange[0]);
		}
		
		#define samplerEnv sampler2D
		#define prefilterEnvMap prefilterEnvMapPanorama
		
		#else
		// in case there is no environment node ?
		vec3 prefilterEnvMap(const in float rLinear, const in vec3 R, const in sampler2D tex, const in vec2 lodRange, const in vec2 size) {
		  return vec3(0.0);
		}
		#define samplerEnv sampler2D
		#endif // PANORAMA
		
		#endif // CUBEMAP
		
		vec3 getSpecularDominantDir(const in vec3 N, const in vec3 R, const in float realRoughness) {
		  float smoothness = 1.0 - realRoughness;
		  float lerpFactor = smoothness * (sqrt(smoothness) + realRoughness);
		  // The result is not normalized as we fetch in a cubemap
		  return mix(N, R, lerpFactor);
		}
		
		// samplerEnv and prefilterEnvMap are both defined above (cubemap or panorama)
		vec3 computeIBLSpecularUE4(
		  const in vec3 N,
		  const in vec3 V,
		  const in float rLinear,
		  const in vec3 specular,
		  const in mat3 envTrans,
		  const in samplerEnv texEnv,
		  const in vec2 lodRange,
		  const in vec2 size,
		  const in vec3 frontNormal
		  #ifdef MOBILE
		){
		  #else
		  ,const in sampler2D texBRDF) {
		  #endif
		
		  float rough = max(rLinear, 0.0);
		
		  float NoV = clamp(dot(N, V), 0.0, 1.0);
		  vec3 R = normalize(NoV * 2.0 * N - V);
		
		  R = getSpecularDominantDir(N, R, rLinear);
		  // could use that, especially if NoV comes from shared preCompSpec
		  // vec3 R = reflect(-V, N);
		
		  vec3 dir = envTrans * R;
		
		  vec3 prefilteredColor = prefilterEnvMap(rough, dir, texEnv, lodRange, size);
		  // http://marmosetco.tumblr.com/post/81245981087
		  // TODO we set a min value (10%) to avoid pure blackness (in case of pure metal)
		  float factor = clamp(1.0 + 1.3 * dot(R, frontNormal), 0.1, 1.0);
		  prefilteredColor *= factor * factor;
		  #ifdef MOBILE
		  return prefilteredColor * integrateBRDFApprox(specular, rough, NoV);
		  #else
		  return prefilteredColor * integrateBRDF(specular, rough, NoV, texBRDF);
		  #endif
		}
		
		vec4 linearToGamma(vec4 value, float gammaFactor) {
		  return vec4(pow(value.xyz, vec3(1.0 / gammaFactor)), value.w);
		}
		
		float luma(vec3 color) {
		  return dot(color, vec3(0.299, 0.587, 0.114));
		}
		
		// Lights 
		
		#if NUM_DIR_LIGHTS > 0
		
		  varying vec3 vEyeLightDir;
		  varying float vDotNL;
		  varying vec3 vComputeGGXResult;
		
		  #define G1V(dotNV, k) (1.0/(dotNV*(1.0-k)+k))
		
		  void precomputeSun(
		          const in vec3 normal,
		          const in vec3 lightViewDirection,
		    
		          out float attenuation,
		          out vec3 eyeLightDir,
		          out float dotNL) {
		
		      attenuation = 1.0;
		      eyeLightDir = lightViewDirection;
		      dotNL = dot(eyeLightDir, normal);
		  }
		
		  vec4 precomputeGGX(const in vec3 normal, const in vec3 eyeVector, const in float roughness) {
		      float dotNV = saturate(dot(normal, eyeVector));
		      float alpha = roughness * roughness;
		      float k = alpha * 0.5;
		      float visNV = G1V(dotNV, k);
		
		      return vec4(alpha, alpha * alpha, k, visNV);
		  }
		
		  vec3 computeGGX(const vec4 precomputeGGX, const vec3 normal, const vec3 eyeVector, const vec3 eyeLightDir, const vec3 F0, const float dotNL) {
		
		      vec3 H = normalize(eyeVector + eyeLightDir);
		      float dotNH = saturate(dot(normal, H));
		      // D
		      float alphaSqr = precomputeGGX.y;
		      float denom = dotNH * dotNH * (alphaSqr - 1.0) + 1.0;
		      float D = alphaSqr / (PI * denom * denom);
		
		      // F
		      float dotLH = saturate(dot(eyeLightDir, H));
		      float dotLH5 = pow(1.0 - dotLH, 5.0);
		      vec3 F = vec3(F0) + (vec3(1.0) - F0) * (dotLH5);
		
		      // V
		      float visNL = G1V(dotNL, precomputeGGX.z);
		      return D * F * visNL * precomputeGGX.w;
		  }
		
		  void computeLightLambertGGX(
		      const in vec3 normal,
		      const in vec3 eyeVector,
		      const in float dotNL,
		      const in vec4 precomputeGGX,
		      
		      const in vec3 diffuse,
		      const in vec3 specular,
		      
		      const in float attenuation,
		      const in vec3 lightColor,
		      const in vec3 eyeLightDir,
		      const in float lightIntensity,
		      
		      out vec3 diffuseOut,
		      out vec3 specularOut,
		      out bool lighted) {
		
		      lighted = dotNL > 0.0;
		      if (lighted == false) {
		          specularOut = diffuseOut = vec3(0.0);
		          return;
		      }
		
		      vec3 colorAttenuate = attenuation * dotNL * lightColor * lightIntensity;
		      specularOut = colorAttenuate * vComputeGGXResult;
		      diffuseOut = colorAttenuate * diffuse;
		  }
		#endif
		
		// THREE.js lights_pars
		uniform vec3 ambientLightColor;
		
		vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
		
		  vec3 irradiance = ambientLightColor;
		
		  #ifndef PHYSICALLY_CORRECT_LIGHTS
		
		    irradiance *= PI;
		
		  #endif
		
		  return irradiance;
		
		}
		
		#if NUM_DIR_LIGHTS > 0
		
		  struct DirectionalLight {
		    vec3 direction;
		    vec3 color;
		
		    int shadow;
		    float shadowBias;
		    float shadowRadius;
		    vec2 shadowMapSize;
		    float intensity;
		  };
		
		  uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
		
		  void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		
		    directLight.color = directionalLight.color;
		    directLight.direction = directionalLight.direction;
		    directLight.visible = true;
		
		  }
		
		#endif
		
		
		// Shadowmaps
		// THREE.js shadowmap_pars_fragment.fs
		
		#ifdef USE_SHADOWMAP
		
		  #if NUM_DIR_LIGHTS > 0
		
		    uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];
		    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
		
		  #endif
		
		  #if NUM_SPOT_LIGHTS > 0
		
		    uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];
		    varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];
		
		  #endif
		
		  #if NUM_POINT_LIGHTS > 0
		
		    uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];
		    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];
		
		  #endif
		
		  /*
		  #if NUM_RECT_AREA_LIGHTS > 0
		
		    // TODO (abelnation): create uniforms for area light shadows
		
		  #endif
		  */
		
		  float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		
		    return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
		
		  }
		
		  float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {
		
		    const vec2 offset = vec2( 0.0, 1.0 );
		
		    vec2 texelSize = vec2( 1.0 ) / size;
		    vec2 centroidUV = floor( uv * size + 0.5 ) / size;
		
		    float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		    float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		    float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		    float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );
		
		    vec2 f = fract( uv * size + 0.5 );
		
		    float a = mix( lb, lt, f.y );
		    float b = mix( rb, rt, f.y );
		    float c = mix( a, b, f.x );
		
		    return c;
		
		  }
		
		  float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		
		    shadowCoord.xyz /= shadowCoord.w;
		    shadowCoord.z += shadowBias;
		
		    // if ( something && something ) breaks ATI OpenGL shader compiler
		    // if ( all( something, something ) ) using this instead
		
		    bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		    bool inFrustum = all( inFrustumVec );
		
		    bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		
		    bool frustumTest = all( frustumTestVec );
		
		    if ( frustumTest ) {
		
		    #if defined( SHADOWMAP_TYPE_PCF )
		
		      vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
		
		      float dx0 = - texelSize.x * shadowRadius;
		      float dy0 = - texelSize.y * shadowRadius;
		      float dx1 = + texelSize.x * shadowRadius;
		      float dy1 = + texelSize.y * shadowRadius;
		
		      return (
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
		        texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
		      ) * ( 1.0 / 9.0 );
		
		    #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
		
		      vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
		
		      float dx0 = - texelSize.x * shadowRadius;
		      float dy0 = - texelSize.y * shadowRadius;
		      float dx1 = + texelSize.x * shadowRadius;
		      float dy1 = + texelSize.y * shadowRadius;
		
		      return (
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
		        texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
		      ) * ( 1.0 / 9.0 );
		
		    #else // no percentage-closer filtering:
		
		      return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		
		    #endif
		
		    }
		
		    return 1.0;
		
		  }
		
		  // cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
		  // vector suitable for 2D texture mapping. This code uses the following layout for the
		  // 2D texture:
		  //
		  // xzXZ
		  //  y Y
		  //
		  // Y - Positive y direction
		  // y - Negative y direction
		  // X - Positive x direction
		  // x - Negative x direction
		  // Z - Positive z direction
		  // z - Negative z direction
		  //
		  // Source and test bed:
		  // https://gist.github.com/tschw/da10c43c467ce8afd0c4
		
		  vec2 cubeToUV( vec3 v, float texelSizeY ) {
		
		    // Number of texels to avoid at the edge of each square
		
		    vec3 absV = abs( v );
		
		    // Intersect unit cube
		
		    float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		    absV *= scaleToCube;
		
		    // Apply scale to avoid seams
		
		    // two texels less per square (one texel will do for NEAREST)
		    v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		
		    // Unwrap
		
		    // space: -1 ... 1 range for each square
		    //
		    // #X##   dim    := ( 4 , 2 )
		    //  # #   center := ( 1 , 1 )
		
		    vec2 planar = v.xy;
		
		    float almostATexel = 1.5 * texelSizeY;
		    float almostOne = 1.0 - almostATexel;
		
		    if ( absV.z >= almostOne ) {
		
		      if ( v.z > 0.0 )
		        planar.x = 4.0 - v.x;
		
		    } else if ( absV.x >= almostOne ) {
		
		      float signX = sign( v.x );
		      planar.x = v.z * signX + 2.0 * signX;
		
		    } else if ( absV.y >= almostOne ) {
		
		      float signY = sign( v.y );
		      planar.x = v.x + 2.0 * signY + 2.0;
		      planar.y = v.z * signY - 2.0;
		
		    }
		
		    // Transform to UV space
		
		    // scale := 0.5 / dim
		    // translate := ( center + 0.5 ) / dim
		    return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
		
		  }
		
		  float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		
		    vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		
		    // for point lights, the uniform @vShadowCoord is re-purposed to hold
		    // the distance from the light to the world-space position of the fragment.
		    vec3 lightToPosition = shadowCoord.xyz;
		
		    // bd3D = base direction 3D
		    vec3 bd3D = normalize( lightToPosition );
		    // dp = distance from light to fragment position
		    float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;
		
		    #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )
		
		      vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
		
		      return (
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
		        texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
		      ) * ( 1.0 / 9.0 );
		
		    #else // no percentage-closer filtering
		
		      return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		
		    #endif
		
		  }
		
		#endif
		
		
		
		void main() {
		  vec3 eyeVector = normalize(-FragEyeVector.rgb);
		  mat3 transform = environmentTransformPBR(uEnvironmentTransform);
		
		  vec4 frontTangent = gl_FrontFacing ? FragTangent : -FragTangent;
		  vec3 frontNormal = gl_FrontFacing ? FragNormal : -FragNormal;
		
		  vec3 normal = normalize(frontNormal);
		
		  // Normal map
		  #ifdef USE_NORMALMAP
		    vec3 nmTexel = rgbToNormal(textureRGB(sTextureNormalMap, vUv.xy), uFlipY);
		    vec3 normalMap = vec3(uNormalMapFactor * nmTexel.xy, nmTexel.z);
		    vec3 geoNormal = mtexNspaceTangent(frontTangent, normal, normalMap);
		    if (uMode == -1) {
		      geoNormal = normal;
		    }
		  #else
		    vec3 geoNormal = normal;
		  #endif
		
		  // Metalness / Glossiness
		  vec3 combinedTexel = textureRGB(sTexturePBRMaps, vUv.xy);
		  float metalness = combinedTexel.r;
		  float glossiness = combinedTexel.b;
		  float channelMetalnessPBR = metalness * uMetalnessPBRFactor;
		  float channelGlossinessPBR = glossiness * uGlossinessPBRFactor;
		  float roughness = 1.0 - channelGlossinessPBR;
		  float tmp_51 = max(1.e-4, roughness);
		  #ifdef USE_NORMALMAP
		    float tmp_52 = adjustRoughnessNormalMap(tmp_51, normalMap);
		    float materialRoughness = adjustRoughnessGeometry(tmp_52, normal);
		  #else
		    float materialRoughness = tmp_51;
		  #endif
		
		  // Albedo
		  vec4 albedoMap = vec4(uColor, 1.0);
		  #ifdef USE_ALBEDOMAP
		    albedoMap *= textureRGBA(sTextureAlbedoMap, vUv.xy);
		  #endif
		
		  vec3 channelAlbedoPBR = sRGBToLinear(albedoMap.rgb) * uAlbedoPBRFactor;
		  vec3 materialDiffusePBR = channelAlbedoPBR * (1.0 - channelMetalnessPBR);
		
		  // Ambient occlusion
		  float ao = textureIntensity(sTextureAOMap, vUv2.xy);
		  float channelAOPBR = mix(1.0, ao, uAOPBRFactor);
		
		  // Diffuse 
		  vec3 diffuse = computeIBLDiffuseUE4(geoNormal, materialDiffusePBR, transform, uDiffuseSPH);
		
		  // Specular
		  float materialSpecularf0 = mix(0.0, 0.08, uSpecularF0Factor);
		  vec3 materialSpecularPBR = mix(vec3(materialSpecularf0), channelAlbedoPBR, channelMetalnessPBR);
		
		  // Optimization because we don't have reflective surfaces and a very simple environment
		  vec3 specular = vec3(0.004, 0.004, 0.012);
		
		  vec3 color = diffuse + specular;
		
		  color *= uEnvironmentExposure;
		
		  float shadow = 1.0;
		
		  #if NUM_DIR_LIGHTS > 0
		    DirectionalLight directionalLight;
		
		    // vec4 prepGGX = precomputeGGX( geoNormal, eyeVector, materialRoughness );
		    vec4 prepGGX = vec4(0.251, 0.063, 0.125, 1.0);
		
		    float attenuation; vec3 eyeLightDir; float dotNL; vec3 lightDiffuse; vec3 lightSpecular; bool lighted; vec3 lightCol;
		
		    directionalLight = directionalLights[ 0 ];
		
		    lightCol = directionalLight.color;
		
		    // Do this in the vertex shader because we have no normal map in this project
		    // precomputeSun( geoNormal, directionalLight.direction, attenuation, eyeLightDir, dotNL );
		    attenuation = 1.0;
		    eyeLightDir = vEyeLightDir;
		    dotNL = vDotNL;
		
		    computeLightLambertGGX( geoNormal, eyeVector, dotNL, prepGGX, materialDiffusePBR, materialSpecularPBR, attenuation, lightCol, eyeLightDir, 1.0, lightDiffuse, lightSpecular, lighted );
		
		    #ifdef USE_SHADOWMAP
		      // TODO: should check wether light has shadows enabled via directionalLight.shadow property
		      shadow = getShadow( directionalShadowMap[ 0 ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ 0 ] );
		      lightDiffuse *= shadow;
		    #endif
		
		    color += lightDiffuse;
		
		    color += lightSpecular;
		  #endif
		
		  color *= channelAOPBR;
		
		  float channelOpacity = mix(albedoMap.a * uOpacityFactor, 1.0, luma(specular) * 2.0);
		
		  #ifdef USE_EMISSIVEMAP
		    color += sRGBToLinear(emissive);
		  #endif
		
		  if (uMode <= 0) {
		    gl_FragColor = vec4(linearTosRGB(color), channelOpacity);
		  } else if (uMode == 1) {
		    gl_FragColor = vec4(geoNormal, 1.0);
		  } else if (uMode == 2) {
		    #ifdef USE_LIGHTMAP
		    gl_FragColor = vec4(linearTosRGB(lightmap), 1.0);
		    #else
		    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
		    #endif
		  } else if (uMode == 3) {
		    gl_FragColor = vec4(vec3(channelAOPBR), 1.0);
		  } else if (uMode == 4) {
		    gl_FragColor = vec4(vec3(channelMetalnessPBR), 1.0);
		  } else if (uMode == 5) {
		    gl_FragColor = vec4(vec3(channelGlossinessPBR), 1.0);
		  } else if (uMode == 6) {
		    gl_FragColor = vec4(channelAlbedoPBR, 1.0);
		  }
		
		  #ifdef ALPHATEST
		    if (gl_FragColor.a < uAlphaTest) {
		      discard;
		    } else {
		      gl_FragColor.a = 1.0;
		    }
		  #endif
		
		  #ifdef USE_FOG
		    float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
		    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
		  #endif
		}`,
}