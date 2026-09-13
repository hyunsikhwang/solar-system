// Mean lunar elements; educational fixed-orbit approximation, not a lunar ephemeris.
export const LUNAR_PERIOD_DAYS=27.321661;
export const LUNAR_DISTANCE_KM=384400;
export const LUNAR_DISPLAY_SCALE=60;
export const AU_KM=149597870.7;
export function lunarOffset(days,anomaly){
 const M=anomaly??((days/LUNAR_PERIOD_DAYS*Math.PI*2+Math.PI/3)%(Math.PI*2));
 const e=.0549,i=5.145*Math.PI/180,a=LUNAR_DISTANCE_KM/AU_KM;
 let E=M;for(let k=0;k<8;k++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));
 const x=a*(Math.cos(E)-e),z=-a*Math.sqrt(1-e*e)*Math.sin(E);
 return [x,-z*Math.sin(i),z*Math.cos(i)];
}
