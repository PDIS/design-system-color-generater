/*! For license information please see material-color-utilities-webpack.js.LICENSE.txt */
(()=>{"use strict";function t(t){return t<0?-1:0===t?0:1}function n(t,n,r){return(1-r)*t+r*n}function r(t){return(t%=360)<0&&(t+=360),t}function o(t,n){return 180-Math.abs(Math.abs(t-n)-180)}function e(t,n){return[t[0]*n[0][0]+t[1]*n[0][1]+t[2]*n[0][2],t[0]*n[1][0]+t[1]*n[1][1]+t[2]*n[1][2],t[0]*n[2][0]+t[1]*n[2][1]+t[2]*n[2][2]]}function a(t){return t>>16&255}function s(t){return t>>8&255}function h(t){return 255&t}function i(t,n,r){const o=e([t,n,r],[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]);return(255<<24|(255&l(o[0]))<<16|(255&l(o[1]))<<8|255&l(o[2]))>>>0}function c(t){const n=(t+16)/116,r=24389/27,o=n*n*n>216/24389,e=[95.047,100,108.883];return i((o?n*n*n:t/r)*e[0],(t>8?n*n*n:t/r)*e[1],(o?n*n*n:t/r)*e[2])}function u(t){const n=function(t){return e([M(a(t)),M(s(t)),M(h(t))],[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]])}(t)[1]/100;return n<=216/24389?24389/27*n:116*Math.pow(n,1/3)-16}function f(t){return t>8?100*Math.pow((t+16)/116,3):t/24389/27*100}function M(t){const n=t/255;return n<=.040449936?n/12.92*100:100*Math.pow((n+.055)/1.055,2.4)}function l(t){const n=t/100;let r=0;return r=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055,0,255,(o=Math.round(255*r))<0?0:o>255?255:o;var o}class m{constructor(t,n,r,o,e,a,s,h,i,c){this.n=t,this.aw=n,this.nbb=r,this.ncb=o,this.c=e,this.nc=a,this.rgbD=s,this.fl=h,this.fLRoot=i,this.z=c}static make(t=[95.047,100,108.883],r=200/Math.PI*f(50)/100,o=50,e=2,a=!1){const s=t,h=.401288*s[0]+.650173*s[1]+-.051461*s[2],i=-.250268*s[0]+1.204414*s[1]+.045854*s[2],c=-.002079*s[0]+.048952*s[1]+.953127*s[2],u=.8+e/10,M=u>=.9?n(.59,.69,10*(u-.9)):n(.525,.59,10*(u-.8));let l=a?1:u*(1-1/3.6*Math.exp((-r-42)/92));l=l>1?1:l<0?0:l;const w=u,I=[l*(100/h)+1-l,l*(100/i)+1-l,l*(100/c)+1-l],b=1/(5*r+1),p=b*b*b*b,g=1-p,C=p*r+.1*g*g*Math.cbrt(5*r),T=f(o)/t[1],d=1.48+Math.sqrt(T),O=.725/Math.pow(T,.2),A=O,H=[Math.pow(C*I[0]*h/100,.42),Math.pow(C*I[1]*i/100,.42),Math.pow(C*I[2]*c/100,.42)],E=[400*H[0]/(H[0]+27.13),400*H[1]/(H[1]+27.13),400*H[2]/(H[2]+27.13)];return new m(T,(2*E[0]+E[1]+.05*E[2])*O,O,A,M,w,I,C,Math.pow(C,.25),d)}}m.DEFAULT=m.make();class w{constructor(t,n,r,o,e,a,s,h,i){this.hue=t,this.chroma=n,this.j=r,this.q=o,this.m=e,this.s=a,this.jstar=s,this.astar=h,this.bstar=i}distance(t){const n=this.jstar-t.jstar,r=this.astar-t.astar,o=this.bstar-t.bstar,e=Math.sqrt(n*n+r*r+o*o);return 1.41*Math.pow(e,.63)}static fromInt(t){return w.fromIntInViewingConditions(t,m.DEFAULT)}static fromIntInViewingConditions(n,r){const o=(65280&n)>>8,e=255&n,a=M((16711680&n)>>16),s=M(o),h=M(e),i=.41233895*a+.35762064*s+.18051042*h,c=.2126*a+.7152*s+.0722*h,u=.01932141*a+.11916382*s+.95034478*h,f=.401288*i+.650173*c-.051461*u,l=-.250268*i+1.204414*c+.045854*u,m=-.002079*i+.048952*c+.953127*u,I=r.rgbD[0]*f,b=r.rgbD[1]*l,p=r.rgbD[2]*m,g=Math.pow(r.fl*Math.abs(I)/100,.42),C=Math.pow(r.fl*Math.abs(b)/100,.42),T=Math.pow(r.fl*Math.abs(p)/100,.42),d=400*t(I)*g/(g+27.13),O=400*t(b)*C/(C+27.13),A=400*t(p)*T/(T+27.13),H=(11*d+-12*O+A)/11,E=(d+O-2*A)/9,R=(20*d+20*O+21*A)/20,_=(40*d+20*O+A)/20,F=180*Math.atan2(E,H)/Math.PI,P=F<0?F+360:F>=360?F-360:F,D=P*Math.PI/180,U=_*r.nbb,v=100*Math.pow(U/r.aw,r.c*r.z),L=4/r.c*Math.sqrt(v/100)*(r.aw+4)*r.fLRoot,j=P<20.14?P+360:P,q=5e4/13*(.25*(Math.cos(j*Math.PI/180+2)+3.8))*r.nc*r.ncb*Math.sqrt(H*H+E*E)/(R+.305),S=Math.pow(q,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),G=S*Math.sqrt(v/100),V=G*r.fLRoot,x=50*Math.sqrt(S*r.c/(r.aw+4)),z=(1+100*.007)*v/(1+.007*v),W=1/.0228*Math.log(1+.0228*V),J=W*Math.cos(D),N=W*Math.sin(D);return new w(P,G,v,L,V,x,z,J,N)}static fromJch(t,n,r){return w.fromJchInViewingConditions(t,n,r,m.DEFAULT)}static fromJchInViewingConditions(t,n,r,o){const e=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,a=n*o.fLRoot,s=n/Math.sqrt(t/100),h=50*Math.sqrt(s*o.c/(o.aw+4)),i=r*Math.PI/180,c=(1+100*.007)*t/(1+.007*t),u=1/.0228*Math.log(1+.0228*a),f=u*Math.cos(i),M=u*Math.sin(i);return new w(r,n,t,e,a,h,c,f,M)}static fromUcs(t,n,r){return w.fromUcsInViewingConditions(t,n,r,m.DEFAULT)}static fromUcsInViewingConditions(t,n,r,o){const e=n,a=r,s=Math.sqrt(e*e+a*a),h=(Math.exp(.0228*s)-1)/.0228/o.fLRoot;let i=Math.atan2(a,e)*(180/Math.PI);i<0&&(i+=360);const c=t/(1-.007*(t-100));return w.fromJchInViewingConditions(c,h,i,o)}viewedInSrgb(){return this.viewed(m.DEFAULT)}viewed(n){const r=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(r/Math.pow(1.64-Math.pow(.29,n.n),.73),1/.9),e=this.hue*Math.PI/180,a=.25*(Math.cos(e+2)+3.8),s=n.aw*Math.pow(this.j/100,1/n.c/n.z),h=a*(5e4/13)*n.nc*n.ncb,c=s/n.nbb,u=Math.sin(e),f=Math.cos(e),M=23*(c+.305)*o/(23*h+11*o*f+108*o*u),l=M*f,m=M*u,w=(460*c+451*l+288*m)/1403,I=(460*c-891*l-261*m)/1403,b=(460*c-220*l-6300*m)/1403,p=Math.max(0,27.13*Math.abs(w)/(400-Math.abs(w))),g=t(w)*(100/n.fl)*Math.pow(p,1/.42),C=Math.max(0,27.13*Math.abs(I)/(400-Math.abs(I))),T=t(I)*(100/n.fl)*Math.pow(C,1/.42),d=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),O=t(b)*(100/n.fl)*Math.pow(d,1/.42),A=g/n.rgbD[0],H=T/n.rgbD[1],E=O/n.rgbD[2];return i(1.86206786*A-1.01125463*H+.14918677*E,.38752654*A+.62144744*H-.00897398*E,-.0158415*A-.03412294*H+1.04996444*E)}}class I{constructor(t,n,r){this.internalHue=t,this.internalChroma=n,this.internalTone=r,this.setInternalState(this.toInt())}static from(t,n,r){return new I(t,n,r)}static fromInt(t){const n=w.fromInt(t),r=u(t);return new I(n.hue,n.chroma,r)}toInt(){return b(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(t){this.setInternalState(b(r(t),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(b(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(b(this.internalHue,this.internalChroma,t))}setInternalState(t){const n=w.fromInt(t),r=u(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=r}}function b(t,n,o){return function(t,n,o,e){if(n<1||Math.round(o)<=0||Math.round(o)>=100)return c(o);t=r(t);let a=n,s=n,h=0,i=!0,u=null;for(;Math.abs(h-a)>=.4;){const n=p(t,s,o);if(i){if(null!=n)return n.viewed(e);i=!1,s=h+(a-h)/2}else null===n?a=s:(u=n,h=s),s=h+(a-h)/2}return null===u?c(o):u.viewed(e)}(r(t),n,(100,(e=o)<0?0:e>100?100:e),m.DEFAULT);var e}function p(t,n,r){let o=0,e=100,a=0,s=1e3,h=1e3,i=null;for(;Math.abs(o-e)>.01;){a=o+(e-o)/2;const c=w.fromJch(a,n,t).viewedInSrgb(),f=u(c),M=Math.abs(r-f);if(M<.2){const n=w.fromInt(c),r=n.distance(w.fromJch(n.j,n.chroma,t));r<=1&&r<=h&&(s=M,h=r,i=n)}if(0===s&&0===h)break;f<r?o=a:e=a}return i}class g{static harmonize(t,n){const e=I.fromInt(t),a=I.fromInt(n),s=o(e.hue,a.hue),h=Math.min(.5*s,15),i=r(e.hue+h*g.rotationDirection(e.hue,a.hue));return I.from(i,e.chroma,e.tone).toInt()}static hctHue(t,n,r){const o=g.cam16ucs(t,n,r),e=I.fromInt(o),a=I.fromInt(t);return I.from(e.hue,a.chroma,a.tone).toInt()}static cam16ucs(t,n,r){const o=w.fromInt(t),e=w.fromInt(n),a=o.jstar,s=o.astar,h=o.bstar,i=a+(e.jstar-a)*r,c=s+(e.astar-s)*r,u=h+(e.bstar-h)*r;return w.fromUcs(i,c,u).viewedInSrgb()}static rotationDirection(t,n){const r=n-t,o=n-t+360,e=n-t-360,a=Math.abs(r),s=Math.abs(o),h=Math.abs(e);return a<=s&&a<=h?r>=0?1:-1:s<=a&&s<=h?o>=0?1:-1:e>=0?1:-1}}class C{constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}static fromInt(t){const n=I.fromInt(t);return C.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new C(t,n)}tone(t){let n=this.cache.get(t);return void 0===n&&(n=I.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}}class T{constructor(t){const n=I.fromInt(t),r=n.hue;this.a1=C.fromHueAndChroma(r,Math.max(48,n.chroma)),this.a2=C.fromHueAndChroma(r,16),this.a3=C.fromHueAndChroma(r+60,24),this.n1=C.fromHueAndChroma(r,4),this.n2=C.fromHueAndChroma(r,8),this.error=C.fromHueAndChroma(25,84)}static of(t){return new T(t)}}class d{constructor(){}static score(t){let n=0;for(const r of t.values())n+=r;const r=new Map,e=new Map,a=new Array(360).fill(0);for(const[o,s]of t.entries()){const t=s/n;r.set(o,t);const h=w.fromInt(o);e.set(o,h),a[Math.round(h.hue)]+=t}const s=new Map;for(const[t,n]of e.entries()){const r=Math.round(n.hue);let o=0;for(let t=r-15;t<r+15;t++)o+=a[(h=t,(h%=360)<0&&(h+=360),h)];s.set(t,o)}var h;const i=new Map;for(const[t,n]of e.entries()){const r=100*s.get(t)*d.WEIGHT_PROPORTION,o=n.chroma<d.TARGET_CHROMA?d.WEIGHT_CHROMA_BELOW:d.WEIGHT_CHROMA_ABOVE,e=r+(n.chroma-d.TARGET_CHROMA)*o;i.set(t,e)}const c=d.filter(s,e),u=new Map;for(const t of c){let n=!1;const r=e.get(t).hue;for(const[t]of u)if(o(r,e.get(t).hue)<15){n=!0;break}n||u.set(t,i.get(t))}const f=Array.from(u.entries());f.sort(((t,n)=>n[1]-t[1]));const M=f.map((t=>t[0]));return 0===M.length&&M.push(4282549748),M}static filter(t,n){const r=new Array;for(const[o,e]of n.entries()){const n=t.get(o);e.chroma>=d.CUTOFF_CHROMA&&u(o)>=d.CUTOFF_TONE&&n>=d.CUTOFF_EXCITED_PROPORTION&&r.push(o)}return r}}d.TARGET_CHROMA=48,d.WEIGHT_PROPORTION=.7,d.WEIGHT_CHROMA_ABOVE=.3,d.WEIGHT_CHROMA_BELOW=.1,d.CUTOFF_CHROMA=15,d.CUTOFF_TONE=10,d.CUTOFF_EXCITED_PROPORTION=.01;const O=t=>{const n=3===(t=t.replace("#","")).length,r=6===t.length,o=8===t.length;if(!n&&!r&&!o)throw new Error("unexpected hex "+t);let e=0,a=0,s=0;return n?(e=A(t.slice(0,1).repeat(2)),a=A(t.slice(1,2).repeat(2)),s=A(t.slice(2,3).repeat(2))):r?(e=A(t.slice(0,2)),a=A(t.slice(2,4)),s=A(t.slice(4,6))):o&&(e=A(t.slice(2,4)),a=A(t.slice(4,6)),s=A(t.slice(6,8))),(255<<24|(255&e)<<16|(255&a)<<8|255&s)>>>0};function A(t){return parseInt(t,16)}window.themeFromSourceColor=function(t,n,r,o){const e={tonalPalettes:{},light:{},dark:{}},i=T.of(O(t)),c=T.of(g.harmonize(O(n),O(t))),u=T.of(g.harmonize(O("#286B2A"),O(t))),f=T.of(g.harmonize(O(r),O(t))),M=T.of(g.harmonize(O(o),O(t))),l={brand:i.a1,accent:c.a1,positive:u.a1,negative:i.error,information:f.a1,warning:M.a1,netural:i.n1,neutralvariant:i.n2},m=[0,10,20,25,30,35,40,50,60,70,80,90,95,98,99,100];return Object.entries(l).forEach((([t,n])=>{e.tonalPalettes[t]={},m.forEach((r=>{e.tonalPalettes[t]["tone"+r]=(t=>{const n=a(t),r=s(t),o=h(t),e=[n.toString(16),r.toString(16),o.toString(16)];for(const[t,n]of e.entries())1===n.length&&(e[t]="0"+n);return"#"+e.join("")})(n.tone(r))}))})),e}})();