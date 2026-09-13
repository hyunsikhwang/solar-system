import * as THREE from 'three';
// Observational / artist-processed planetary maps; attribution is in textures/CREDITS.md.
const loader=new THREE.TextureLoader();
const textures=new Map();
function texture(name,color=true){if(textures.has(name))return textures.get(name);const t=loader.load('./textures/'+name,undefined,undefined,()=>console.warn('Texture unavailable:',name));t.colorSpace=color?THREE.SRGBColorSpace:THREE.NoColorSpace;t.anisotropy=8;textures.set(name,t);return t;}
export function createPlanetMaterial(id){
 const maps=['sun.jpg','mercury.jpg','venus.jpg','earth-day.jpg','mars.jpg','jupiter.jpg','saturn.jpg','uranus.jpg','neptune.jpg'];
 if(id>8)return null;
 if(id===0)return new THREE.MeshBasicMaterial({map:texture(maps[id]),color:0xffefd5});
 if(id===3){
  const mat=new THREE.MeshPhongMaterial({map:texture('earth-day.jpg'),specularMap:texture('earth-specular.jpg',false),specular:new THREE.Color(0x709dbb),shininess:28,normalMap:texture('earth-normal.jpg',false),normalScale:new THREE.Vector2(.16,.16),color:0xffffff});
  mat.onBeforeCompile=shader=>{
   shader.uniforms.nightMap={value:texture('earth-night.jpg')};
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 earthWorldNormal;\nvarying vec3 earthWorldPosition;');
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nearthWorldNormal = normalize(mat3(modelMatrix) * normal);\nearthWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform sampler2D nightMap;\nvarying vec3 earthWorldNormal;\nvarying vec3 earthWorldPosition;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\nfloat night = 1.0 - smoothstep(-0.20, 0.08, dot(normalize(earthWorldNormal), normalize(-earthWorldPosition)));\ntotalEmissiveRadiance += texture2D(nightMap, vMapUv).rgb * night * 0.85;');
  };
  return mat;
 }
 return new THREE.MeshStandardMaterial({map:texture(maps[id]),roughness:id===2?.96:.88,metalness:0,color:0xffffff});
}
function atmosphere(color,scale,strength){
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.BackSide,blending:THREE.AdditiveBlending,uniforms:{tint:{value:new THREE.Color(color)},strength:{value:strength}},vertexShader:`varying vec3 worldN;varying vec3 worldP;void main(){worldN=normalize(mat3(modelMatrix)*normal);worldP=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(worldP,1.);}`,fragmentShader:`uniform vec3 tint;uniform float strength;varying vec3 worldN;varying vec3 worldP;void main(){vec3 N=normalize(worldN);vec3 V=normalize(cameraPosition-worldP);float rim=pow(clamp(1.+dot(N,V),0.,1.),4.);float daylight=smoothstep(-.3,.6,dot(N,normalize(-worldP)));gl_FragColor=vec4(tint,rim*strength*(.12+.88*daylight));}`});
 const shell=new THREE.Mesh(new THREE.SphereGeometry(scale,64,40),material);shell.renderOrder=2;return shell;
}
export function addPlanetDetails(b,scene){
 const tilts=[0,.034,177.4,23.44,25.19,3.13,26.73,97.77,28.32];
 if(b.id<9)b.mesh.rotation.z=THREE.MathUtils.degToRad(tilts[b.id]);
 if(b.id===3){
  b.clouds=new THREE.Mesh(new THREE.SphereGeometry(1.009,64,40),new THREE.MeshPhongMaterial({alphaMap:texture('earth-clouds.jpg',false),transparent:true,opacity:.78,depthWrite:false,shininess:8,color:0xffffff}));
  b.mesh.add(b.clouds);b.mesh.add(atmosphere(0x399bff,1.032,.63));
 }
 if(b.id===2)b.mesh.add(atmosphere(0xffd3a0,1.018,.15));
 if(b.id===7||b.id===8)b.mesh.add(atmosphere(b.id===7?0x93e6ed:0x448aff,1.025,.23));
 if(b.id===6){
  const geometry=new THREE.RingGeometry(1.23,2.27,160,1);
  const uv=geometry.attributes.uv,p=geometry.attributes.position;
  for(let i=0;i<p.count;i++){const r=Math.hypot(p.getX(i),p.getY(i));uv.setXY(i,(r-1.23)/(2.27-1.23),.5);}
  const ring=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({map:texture('saturn-ring.png'),transparent:true,side:THREE.DoubleSide,depthWrite:false,roughness:1,opacity:.88}));
  const pivot=new THREE.Group();pivot.rotation.z=THREE.MathUtils.degToRad(26.73);ring.rotation.x=-Math.PI/2;pivot.add(ring);scene.add(pivot);b.ringPivot=pivot;
 }
}
export function updatePlanetDetails(b,dt,paused){if(b.clouds&&!paused)b.clouds.rotation.y+=dt*.006;if(b.ringPivot){b.ringPivot.position.copy(b.mesh.position);b.ringPivot.scale.copy(b.mesh.scale);}}
