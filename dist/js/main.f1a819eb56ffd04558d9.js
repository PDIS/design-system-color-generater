/*! For license information please see main.f1a819eb56ffd04558d9.js.LICENSE.txt */
(()=>{"use strict";function t(t){return t<0?-1:0===t?0:1}function n(t,n,r){return(1-r)*t+r*n}function r(t){return(t%=360)<0&&(t+=360),t}function e(t,n){return 180-Math.abs(Math.abs(t-n)-180)}function a(t,n){return[t[0]*n[0][0]+t[1]*n[0][1]+t[2]*n[0][2],t[0]*n[1][0]+t[1]*n[1][1]+t[2]*n[1][2],t[0]*n[2][0]+t[1]*n[2][1]+t[2]*n[2][2]]}function o(t){return t>>16&255}function s(t){return t>>8&255}function h(t){return 255&t}function i(t,n,r){const e=a([t,n,r],[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]);return(255<<24|(255&m(e[0]))<<16|(255&m(e[1]))<<8|255&m(e[2]))>>>0}function c(t){const n=(t+16)/116,r=24389/27,e=n*n*n>216/24389,a=[95.047,100,108.883];return i((e?n*n*n:t/r)*a[0],(t>8?n*n*n:t/r)*a[1],(e?n*n*n:t/r)*a[2])}function u(t){const n=function(t){return a([l(o(t)),l(s(t)),l(h(t))],[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]])}(t)[1]/100;return n<=216/24389?24389/27*n:116*Math.pow(n,1/3)-16}function f(t){return t>8?100*Math.pow((t+16)/116,3):t/24389/27*100}function l(t){const n=t/255;return n<=.040449936?n/12.92*100:100*Math.pow((n+.055)/1.055,2.4)}function m(t){const n=t/100;let r=0;return r=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055,0,255,(e=Math.round(255*r))<0?0:e>255?255:e;var e}class M{constructor(t,n,r,e,a,o,s,h,i,c){this.n=t,this.aw=n,this.nbb=r,this.ncb=e,this.c=a,this.nc=o,this.rgbD=s,this.fl=h,this.fLRoot=i,this.z=c}static make(t=[95.047,100,108.883],r=200/Math.PI*f(50)/100,e=50,a=2,o=!1){const s=t,h=.401288*s[0]+.650173*s[1]+-.051461*s[2],i=-.250268*s[0]+1.204414*s[1]+.045854*s[2],c=-.002079*s[0]+.048952*s[1]+.953127*s[2],u=.8+a/10,l=u>=.9?n(.59,.69,10*(u-.9)):n(.525,.59,10*(u-.8));let m=o?1:u*(1-1/3.6*Math.exp((-r-42)/92));m=m>1?1:m<0?0:m;const w=u,I=[m*(100/h)+1-m,m*(100/i)+1-m,m*(100/c)+1-m],b=1/(5*r+1),d=b*b*b*b,g=1-d,p=d*r+.1*g*g*Math.cbrt(5*r),C=f(e)/t[1],T=1.48+Math.sqrt(C),E=.725/Math.pow(C,.2),O=E,A=[Math.pow(p*I[0]*h/100,.42),Math.pow(p*I[1]*i/100,.42),Math.pow(p*I[2]*c/100,.42)],H=[400*A[0]/(A[0]+27.13),400*A[1]/(A[1]+27.13),400*A[2]/(A[2]+27.13)];return new M(C,(2*H[0]+H[1]+.05*H[2])*E,E,O,l,w,I,p,Math.pow(p,.25),T)}}M.DEFAULT=M.make();class w{constructor(t,n,r,e,a,o,s,h,i){this.hue=t,this.chroma=n,this.j=r,this.q=e,this.m=a,this.s=o,this.jstar=s,this.astar=h,this.bstar=i}distance(t){const n=this.jstar-t.jstar,r=this.astar-t.astar,e=this.bstar-t.bstar,a=Math.sqrt(n*n+r*r+e*e);return 1.41*Math.pow(a,.63)}static fromInt(t){return w.fromIntInViewingConditions(t,M.DEFAULT)}static fromIntInViewingConditions(n,r){const e=(65280&n)>>8,a=255&n,o=l((16711680&n)>>16),s=l(e),h=l(a),i=.41233895*o+.35762064*s+.18051042*h,c=.2126*o+.7152*s+.0722*h,u=.01932141*o+.11916382*s+.95034478*h,f=.401288*i+.650173*c-.051461*u,m=-.250268*i+1.204414*c+.045854*u,M=-.002079*i+.048952*c+.953127*u,I=r.rgbD[0]*f,b=r.rgbD[1]*m,d=r.rgbD[2]*M,g=Math.pow(r.fl*Math.abs(I)/100,.42),p=Math.pow(r.fl*Math.abs(b)/100,.42),C=Math.pow(r.fl*Math.abs(d)/100,.42),T=400*t(I)*g/(g+27.13),E=400*t(b)*p/(p+27.13),O=400*t(d)*C/(C+27.13),A=(11*T+-12*E+O)/11,H=(T+E-2*O)/9,R=(20*T+20*E+21*O)/20,P=(40*T+20*E+O)/20,v=180*Math.atan2(H,A)/Math.PI,$=v<0?v+360:v>=360?v-360:v,_=$*Math.PI/180,F=P*r.nbb,D=100*Math.pow(F/r.aw,r.c*r.z),U=4/r.c*Math.sqrt(D/100)*(r.aw+4)*r.fLRoot,j=$<20.14?$+360:$,x=5e4/13*(.25*(Math.cos(j*Math.PI/180+2)+3.8))*r.nc*r.ncb*Math.sqrt(A*A+H*H)/(R+.305),L=Math.pow(x,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),q=L*Math.sqrt(D/100),k=q*r.fLRoot,S=50*Math.sqrt(L*r.c/(r.aw+4)),B=(1+100*.007)*D/(1+.007*D),G=1/.0228*Math.log(1+.0228*k),V=G*Math.cos(_),z=G*Math.sin(_);return new w($,q,D,U,k,S,B,V,z)}static fromJch(t,n,r){return w.fromJchInViewingConditions(t,n,r,M.DEFAULT)}static fromJchInViewingConditions(t,n,r,e){const a=4/e.c*Math.sqrt(t/100)*(e.aw+4)*e.fLRoot,o=n*e.fLRoot,s=n/Math.sqrt(t/100),h=50*Math.sqrt(s*e.c/(e.aw+4)),i=r*Math.PI/180,c=(1+100*.007)*t/(1+.007*t),u=1/.0228*Math.log(1+.0228*o),f=u*Math.cos(i),l=u*Math.sin(i);return new w(r,n,t,a,o,h,c,f,l)}static fromUcs(t,n,r){return w.fromUcsInViewingConditions(t,n,r,M.DEFAULT)}static fromUcsInViewingConditions(t,n,r,e){const a=n,o=r,s=Math.sqrt(a*a+o*o),h=(Math.exp(.0228*s)-1)/.0228/e.fLRoot;let i=Math.atan2(o,a)*(180/Math.PI);i<0&&(i+=360);const c=t/(1-.007*(t-100));return w.fromJchInViewingConditions(c,h,i,e)}viewedInSrgb(){return this.viewed(M.DEFAULT)}viewed(n){const r=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),e=Math.pow(r/Math.pow(1.64-Math.pow(.29,n.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),s=n.aw*Math.pow(this.j/100,1/n.c/n.z),h=o*(5e4/13)*n.nc*n.ncb,c=s/n.nbb,u=Math.sin(a),f=Math.cos(a),l=23*(c+.305)*e/(23*h+11*e*f+108*e*u),m=l*f,M=l*u,w=(460*c+451*m+288*M)/1403,I=(460*c-891*m-261*M)/1403,b=(460*c-220*m-6300*M)/1403,d=Math.max(0,27.13*Math.abs(w)/(400-Math.abs(w))),g=t(w)*(100/n.fl)*Math.pow(d,1/.42),p=Math.max(0,27.13*Math.abs(I)/(400-Math.abs(I))),C=t(I)*(100/n.fl)*Math.pow(p,1/.42),T=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),E=t(b)*(100/n.fl)*Math.pow(T,1/.42),O=g/n.rgbD[0],A=C/n.rgbD[1],H=E/n.rgbD[2];return i(1.86206786*O-1.01125463*A+.14918677*H,.38752654*O+.62144744*A-.00897398*H,-.0158415*O-.03412294*A+1.04996444*H)}}class I{constructor(t,n,r){this.internalHue=t,this.internalChroma=n,this.internalTone=r,this.setInternalState(this.toInt())}static from(t,n,r){return new I(t,n,r)}static fromInt(t){const n=w.fromInt(t),r=u(t);return new I(n.hue,n.chroma,r)}toInt(){return b(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(t){this.setInternalState(b(r(t),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(b(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(b(this.internalHue,this.internalChroma,t))}setInternalState(t){const n=w.fromInt(t),r=u(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=r}}function b(t,n,e){return function(t,n,e,a){if(n<1||Math.round(e)<=0||Math.round(e)>=100)return c(e);t=r(t);let o=n,s=n,h=0,i=!0,u=null;for(;Math.abs(h-o)>=.4;){const n=d(t,s,e);if(i){if(null!=n)return n.viewed(a);i=!1,s=h+(o-h)/2}else null===n?o=s:(u=n,h=s),s=h+(o-h)/2}return null===u?c(e):u.viewed(a)}(r(t),n,(100,(a=e)<0?0:a>100?100:a),M.DEFAULT);var a}function d(t,n,r){let e=0,a=100,o=0,s=1e3,h=1e3,i=null;for(;Math.abs(e-a)>.01;){o=e+(a-e)/2;const c=w.fromJch(o,n,t).viewedInSrgb(),f=u(c),l=Math.abs(r-f);if(l<.2){const n=w.fromInt(c),r=n.distance(w.fromJch(n.j,n.chroma,t));r<=1&&r<=h&&(s=l,h=r,i=n)}if(0===s&&0===h)break;f<r?e=o:a=o}return i}class g{static harmonize(t,n){const a=I.fromInt(t),o=I.fromInt(n),s=e(a.hue,o.hue),h=Math.min(.5*s,15),i=r(a.hue+h*g.rotationDirection(a.hue,o.hue));return I.from(i,a.chroma,a.tone).toInt()}static hctHue(t,n,r){const e=g.cam16ucs(t,n,r),a=I.fromInt(e),o=I.fromInt(t);return I.from(a.hue,o.chroma,o.tone).toInt()}static cam16ucs(t,n,r){const e=w.fromInt(t),a=w.fromInt(n),o=e.jstar,s=e.astar,h=e.bstar,i=o+(a.jstar-o)*r,c=s+(a.astar-s)*r,u=h+(a.bstar-h)*r;return w.fromUcs(i,c,u).viewedInSrgb()}static rotationDirection(t,n){const r=n-t,e=n-t+360,a=n-t-360,o=Math.abs(r),s=Math.abs(e),h=Math.abs(a);return o<=s&&o<=h?r>=0?1:-1:s<=o&&s<=h?e>=0?1:-1:a>=0?1:-1}}class p{constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}static fromInt(t){const n=I.fromInt(t);return p.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new p(t,n)}tone(t){let n=this.cache.get(t);return void 0===n&&(n=I.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}}class C{constructor(t){const n=I.fromInt(t),r=n.hue;this.a1=p.fromHueAndChroma(r,Math.max(48,n.chroma)),this.a2=p.fromHueAndChroma(r,16),this.a3=p.fromHueAndChroma(r+60,24),this.n1=p.fromHueAndChroma(r,4),this.n2=p.fromHueAndChroma(r,8),this.error=p.fromHueAndChroma(25,84)}static of(t){return new C(t)}}class T{constructor(){}static score(t){let n=0;for(const r of t.values())n+=r;const r=new Map,a=new Map,o=new Array(360).fill(0);for(const[e,s]of t.entries()){const t=s/n;r.set(e,t);const h=w.fromInt(e);a.set(e,h),o[Math.round(h.hue)]+=t}const s=new Map;for(const[t,n]of a.entries()){const r=Math.round(n.hue);let e=0;for(let t=r-15;t<r+15;t++)e+=o[(h=t,(h%=360)<0&&(h+=360),h)];s.set(t,e)}var h;const i=new Map;for(const[t,n]of a.entries()){const r=100*s.get(t)*T.WEIGHT_PROPORTION,e=n.chroma<T.TARGET_CHROMA?T.WEIGHT_CHROMA_BELOW:T.WEIGHT_CHROMA_ABOVE,a=r+(n.chroma-T.TARGET_CHROMA)*e;i.set(t,a)}const c=T.filter(s,a),u=new Map;for(const t of c){let n=!1;const r=a.get(t).hue;for(const[t]of u)if(e(r,a.get(t).hue)<15){n=!0;break}n||u.set(t,i.get(t))}const f=Array.from(u.entries());f.sort(((t,n)=>n[1]-t[1]));const l=f.map((t=>t[0]));return 0===l.length&&l.push(4282549748),l}static filter(t,n){const r=new Array;for(const[e,a]of n.entries()){const n=t.get(e);a.chroma>=T.CUTOFF_CHROMA&&u(e)>=T.CUTOFF_TONE&&n>=T.CUTOFF_EXCITED_PROPORTION&&r.push(e)}return r}}T.TARGET_CHROMA=48,T.WEIGHT_PROPORTION=.7,T.WEIGHT_CHROMA_ABOVE=.3,T.WEIGHT_CHROMA_BELOW=.1,T.CUTOFF_CHROMA=15,T.CUTOFF_TONE=10,T.CUTOFF_EXCITED_PROPORTION=.01;const E=t=>{const n=3===(t=t.replace("#","")).length,r=6===t.length,e=8===t.length;if(!n&&!r&&!e)throw new Error("unexpected hex "+t);let a=0,o=0,s=0;return n?(a=O(t.slice(0,1).repeat(2)),o=O(t.slice(1,2).repeat(2)),s=O(t.slice(2,3).repeat(2))):r?(a=O(t.slice(0,2)),o=O(t.slice(2,4)),s=O(t.slice(4,6))):e&&(a=O(t.slice(2,4)),o=O(t.slice(4,6)),s=O(t.slice(6,8))),(255<<24|(255&a)<<16|(255&o)<<8|255&s)>>>0};function O(t){return parseInt(t,16)}function A(){const t=function(t,n,r,e){const a={tonalPalettes:{},light:{},dark:{}},i=C.of(E(t)),c=C.of(g.harmonize(E(n),E(t))),u=C.of(g.harmonize(E("#286B2A"),E(t))),f=C.of(g.harmonize(E(r),E(t))),l=C.of(g.harmonize(E(e),E(t))),m={brand:i.a1,accent:c.a1,positive:u.a1,negative:i.error,information:f.a1,warning:l.a1,netural:i.n1,neutralvariant:i.n2},M=[0,10,20,25,30,35,40,50,60,70,80,90,95,98,99,100];return Object.entries(m).forEach((([t,n])=>{a.tonalPalettes[t]={},M.forEach((r=>{a.tonalPalettes[t]["tone"+r]=(t=>{const n=o(t),r=s(t),e=h(t),a=[n.toString(16),r.toString(16),e.toString(16)];for(const[t,n]of a.entries())1===n.length&&(a[t]="0"+n);return"#"+a.join("")})(n.tone(r))}))})),a}(document.getElementById("brand").value,document.getElementById("accent").value,document.getElementById("information").value,document.getElementById("warning").value);Object.entries(t.tonalPalettes).forEach((([t,n])=>{Object.entries(n).forEach((([n,r])=>{$(`div.${t}.${n}`).css("background-color",r),$(`div.${t}.text-${n}`).css("color",r),$(`span.${t}.${n}`).html(`<i class="bi bi-square-fill"></i>${r}`),$(`span.${t}.${n} i`).css("color",r)}))})),[99,10].forEach((n=>{const r=99==n?t.tonalPalettes.netural.tone99:t.tonalPalettes.netural.tone10,e=99==n?t.tonalPalettes.brand.tone40:t.tonalPalettes.netural.tone80;[5,8,11,12,14].forEach((t=>{$(`.netural.tone${n}.surface${t}`).css("background-color",H(r,e,t/100))}))})),$(".netural.surface1").text(H(surface,mask,.05)),$(".netural.surface2").text(H(surface,mask,.08)),$(".netural.surface3").text(H(surface,mask,.11)),$(".netural.surface4").text(H(surface,mask,.12)),$(".netural.surface5").text(H(surface,mask,.14))}function H(t,n,r){const e=1-r;t=R(t),n=R(n);return"#"+((1<<24)+(Math.round(255*(r*(n.red/255)+e*(t.red/255)))<<16)+(Math.round(255*(r*(n.green/255)+e*(t.green/255)))<<8)+Math.round(255*(r*(n.blue/255)+e*(t.blue/255)))).toString(16).slice(1)}function R(t){return{red:parseInt(t[1]+t[2],16),green:parseInt(t[3]+t[4],16),blue:parseInt(t[5]+t[6],16)}}window.update=function(){A()},A()})();