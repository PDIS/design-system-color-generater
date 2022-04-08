/*! For license information please see main.b7cd8fb1a35090ec62f4.js.LICENSE.txt */
(()=>{"use strict";function t(t){return t<0?-1:0===t?0:1}function n(t,n,r){return(1-r)*t+r*n}function r(t){return(t%=360)<0&&(t+=360),t}function e(t,n){return 180-Math.abs(Math.abs(t-n)-180)}function o(t,n){return[t[0]*n[0][0]+t[1]*n[0][1]+t[2]*n[0][2],t[0]*n[1][0]+t[1]*n[1][1]+t[2]*n[1][2],t[0]*n[2][0]+t[1]*n[2][1]+t[2]*n[2][2]]}function a(t){return t>>16&255}function s(t){return t>>8&255}function c(t){return 255&t}function h(t,n,r){const e=o([t,n,r],[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]);return(255<<24|(255&M(e[0]))<<16|(255&M(e[1]))<<8|255&M(e[2]))>>>0}function i(t){const n=(t+16)/116,r=24389/27,e=n*n*n>216/24389,o=[95.047,100,108.883];return h((e?n*n*n:t/r)*o[0],(t>8?n*n*n:t/r)*o[1],(e?n*n*n:t/r)*o[2])}function u(t){const n=function(t){return o([l(a(t)),l(s(t)),l(c(t))],[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]])}(t)[1]/100;return n<=216/24389?24389/27*n:116*Math.pow(n,1/3)-16}function f(t){return t>8?100*Math.pow((t+16)/116,3):t/24389/27*100}function l(t){const n=t/255;return n<=.040449936?n/12.92*100:100*Math.pow((n+.055)/1.055,2.4)}function M(t){const n=t/100;let r=0;return r=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055,0,255,(e=Math.round(255*r))<0?0:e>255?255:e;var e}class m{constructor(t,n,r,e,o,a,s,c,h,i){this.n=t,this.aw=n,this.nbb=r,this.ncb=e,this.c=o,this.nc=a,this.rgbD=s,this.fl=c,this.fLRoot=h,this.z=i}static make(t=[95.047,100,108.883],r=200/Math.PI*f(50)/100,e=50,o=2,a=!1){const s=t,c=.401288*s[0]+.650173*s[1]+-.051461*s[2],h=-.250268*s[0]+1.204414*s[1]+.045854*s[2],i=-.002079*s[0]+.048952*s[1]+.953127*s[2],u=.8+o/10,l=u>=.9?n(.59,.69,10*(u-.9)):n(.525,.59,10*(u-.8));let M=a?1:u*(1-1/3.6*Math.exp((-r-42)/92));M=M>1?1:M<0?0:M;const w=u,I=[M*(100/c)+1-M,M*(100/h)+1-M,M*(100/i)+1-M],d=1/(5*r+1),b=d*d*d*d,g=1-b,p=b*r+.1*g*g*Math.cbrt(5*r),C=f(e)/t[1],T=1.48+Math.sqrt(C),O=.725/Math.pow(C,.2),E=O,A=[Math.pow(p*I[0]*c/100,.42),Math.pow(p*I[1]*h/100,.42),Math.pow(p*I[2]*i/100,.42)],H=[400*A[0]/(A[0]+27.13),400*A[1]/(A[1]+27.13),400*A[2]/(A[2]+27.13)];return new m(C,(2*H[0]+H[1]+.05*H[2])*O,O,E,l,w,I,p,Math.pow(p,.25),T)}}m.DEFAULT=m.make();class w{constructor(t,n,r,e,o,a,s,c,h){this.hue=t,this.chroma=n,this.j=r,this.q=e,this.m=o,this.s=a,this.jstar=s,this.astar=c,this.bstar=h}distance(t){const n=this.jstar-t.jstar,r=this.astar-t.astar,e=this.bstar-t.bstar,o=Math.sqrt(n*n+r*r+e*e);return 1.41*Math.pow(o,.63)}static fromInt(t){return w.fromIntInViewingConditions(t,m.DEFAULT)}static fromIntInViewingConditions(n,r){const e=(65280&n)>>8,o=255&n,a=l((16711680&n)>>16),s=l(e),c=l(o),h=.41233895*a+.35762064*s+.18051042*c,i=.2126*a+.7152*s+.0722*c,u=.01932141*a+.11916382*s+.95034478*c,f=.401288*h+.650173*i-.051461*u,M=-.250268*h+1.204414*i+.045854*u,m=-.002079*h+.048952*i+.953127*u,I=r.rgbD[0]*f,d=r.rgbD[1]*M,b=r.rgbD[2]*m,g=Math.pow(r.fl*Math.abs(I)/100,.42),p=Math.pow(r.fl*Math.abs(d)/100,.42),C=Math.pow(r.fl*Math.abs(b)/100,.42),T=400*t(I)*g/(g+27.13),O=400*t(d)*p/(p+27.13),E=400*t(b)*C/(C+27.13),A=(11*T+-12*O+E)/11,H=(T+O-2*E)/9,R=(20*T+20*O+21*E)/20,$=(40*T+20*O+E)/20,P=180*Math.atan2(H,A)/Math.PI,_=P<0?P+360:P>=360?P-360:P,v=_*Math.PI/180,F=$*r.nbb,D=100*Math.pow(F/r.aw,r.c*r.z),U=4/r.c*Math.sqrt(D/100)*(r.aw+4)*r.fLRoot,j=_<20.14?_+360:_,x=5e4/13*(.25*(Math.cos(j*Math.PI/180+2)+3.8))*r.nc*r.ncb*Math.sqrt(A*A+H*H)/(R+.305),L=Math.pow(x,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),q=L*Math.sqrt(D/100),S=q*r.fLRoot,k=50*Math.sqrt(L*r.c/(r.aw+4)),B=(1+100*.007)*D/(1+.007*D),G=1/.0228*Math.log(1+.0228*S),V=G*Math.cos(v),z=G*Math.sin(v);return new w(_,q,D,U,S,k,B,V,z)}static fromJch(t,n,r){return w.fromJchInViewingConditions(t,n,r,m.DEFAULT)}static fromJchInViewingConditions(t,n,r,e){const o=4/e.c*Math.sqrt(t/100)*(e.aw+4)*e.fLRoot,a=n*e.fLRoot,s=n/Math.sqrt(t/100),c=50*Math.sqrt(s*e.c/(e.aw+4)),h=r*Math.PI/180,i=(1+100*.007)*t/(1+.007*t),u=1/.0228*Math.log(1+.0228*a),f=u*Math.cos(h),l=u*Math.sin(h);return new w(r,n,t,o,a,c,i,f,l)}static fromUcs(t,n,r){return w.fromUcsInViewingConditions(t,n,r,m.DEFAULT)}static fromUcsInViewingConditions(t,n,r,e){const o=n,a=r,s=Math.sqrt(o*o+a*a),c=(Math.exp(.0228*s)-1)/.0228/e.fLRoot;let h=Math.atan2(a,o)*(180/Math.PI);h<0&&(h+=360);const i=t/(1-.007*(t-100));return w.fromJchInViewingConditions(i,c,h,e)}viewedInSrgb(){return this.viewed(m.DEFAULT)}viewed(n){const r=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),e=Math.pow(r/Math.pow(1.64-Math.pow(.29,n.n),.73),1/.9),o=this.hue*Math.PI/180,a=.25*(Math.cos(o+2)+3.8),s=n.aw*Math.pow(this.j/100,1/n.c/n.z),c=a*(5e4/13)*n.nc*n.ncb,i=s/n.nbb,u=Math.sin(o),f=Math.cos(o),l=23*(i+.305)*e/(23*c+11*e*f+108*e*u),M=l*f,m=l*u,w=(460*i+451*M+288*m)/1403,I=(460*i-891*M-261*m)/1403,d=(460*i-220*M-6300*m)/1403,b=Math.max(0,27.13*Math.abs(w)/(400-Math.abs(w))),g=t(w)*(100/n.fl)*Math.pow(b,1/.42),p=Math.max(0,27.13*Math.abs(I)/(400-Math.abs(I))),C=t(I)*(100/n.fl)*Math.pow(p,1/.42),T=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),O=t(d)*(100/n.fl)*Math.pow(T,1/.42),E=g/n.rgbD[0],A=C/n.rgbD[1],H=O/n.rgbD[2];return h(1.86206786*E-1.01125463*A+.14918677*H,.38752654*E+.62144744*A-.00897398*H,-.0158415*E-.03412294*A+1.04996444*H)}}class I{constructor(t,n,r){this.internalHue=t,this.internalChroma=n,this.internalTone=r,this.setInternalState(this.toInt())}static from(t,n,r){return new I(t,n,r)}static fromInt(t){const n=w.fromInt(t),r=u(t);return new I(n.hue,n.chroma,r)}toInt(){return d(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(t){this.setInternalState(d(r(t),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(d(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(d(this.internalHue,this.internalChroma,t))}setInternalState(t){const n=w.fromInt(t),r=u(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=r}}function d(t,n,e){return function(t,n,e,o){if(n<1||Math.round(e)<=0||Math.round(e)>=100)return i(e);t=r(t);let a=n,s=n,c=0,h=!0,u=null;for(;Math.abs(c-a)>=.4;){const n=b(t,s,e);if(h){if(null!=n)return n.viewed(o);h=!1,s=c+(a-c)/2}else null===n?a=s:(u=n,c=s),s=c+(a-c)/2}return null===u?i(e):u.viewed(o)}(r(t),n,(100,(o=e)<0?0:o>100?100:o),m.DEFAULT);var o}function b(t,n,r){let e=0,o=100,a=0,s=1e3,c=1e3,h=null;for(;Math.abs(e-o)>.01;){a=e+(o-e)/2;const i=w.fromJch(a,n,t).viewedInSrgb(),f=u(i),l=Math.abs(r-f);if(l<.2){const n=w.fromInt(i),r=n.distance(w.fromJch(n.j,n.chroma,t));r<=1&&r<=c&&(s=l,c=r,h=n)}if(0===s&&0===c)break;f<r?e=a:o=a}return h}class g{static harmonize(t,n){const o=I.fromInt(t),a=I.fromInt(n),s=e(o.hue,a.hue),c=Math.min(.5*s,15),h=r(o.hue+c*g.rotationDirection(o.hue,a.hue));return I.from(h,o.chroma,o.tone).toInt()}static hctHue(t,n,r){const e=g.cam16ucs(t,n,r),o=I.fromInt(e),a=I.fromInt(t);return I.from(o.hue,a.chroma,a.tone).toInt()}static cam16ucs(t,n,r){const e=w.fromInt(t),o=w.fromInt(n),a=e.jstar,s=e.astar,c=e.bstar,h=a+(o.jstar-a)*r,i=s+(o.astar-s)*r,u=c+(o.bstar-c)*r;return w.fromUcs(h,i,u).viewedInSrgb()}static rotationDirection(t,n){const r=n-t,e=n-t+360,o=n-t-360,a=Math.abs(r),s=Math.abs(e),c=Math.abs(o);return a<=s&&a<=c?r>=0?1:-1:s<=a&&s<=c?e>=0?1:-1:o>=0?1:-1}}class p{constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}static fromInt(t){const n=I.fromInt(t);return p.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new p(t,n)}tone(t){let n=this.cache.get(t);return void 0===n&&(n=I.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}}class C{constructor(t){const n=I.fromInt(t),r=n.hue;this.a1=p.fromHueAndChroma(r,Math.max(48,n.chroma)),this.a2=p.fromHueAndChroma(r,16),this.a3=p.fromHueAndChroma(r+60,24),this.n1=p.fromHueAndChroma(r,4),this.n2=p.fromHueAndChroma(r,8),this.error=p.fromHueAndChroma(25,84)}static of(t){return new C(t)}}class T{constructor(){}static score(t){let n=0;for(const r of t.values())n+=r;const r=new Map,o=new Map,a=new Array(360).fill(0);for(const[e,s]of t.entries()){const t=s/n;r.set(e,t);const c=w.fromInt(e);o.set(e,c),a[Math.round(c.hue)]+=t}const s=new Map;for(const[t,n]of o.entries()){const r=Math.round(n.hue);let e=0;for(let t=r-15;t<r+15;t++)e+=a[(c=t,(c%=360)<0&&(c+=360),c)];s.set(t,e)}var c;const h=new Map;for(const[t,n]of o.entries()){const r=100*s.get(t)*T.WEIGHT_PROPORTION,e=n.chroma<T.TARGET_CHROMA?T.WEIGHT_CHROMA_BELOW:T.WEIGHT_CHROMA_ABOVE,o=r+(n.chroma-T.TARGET_CHROMA)*e;h.set(t,o)}const i=T.filter(s,o),u=new Map;for(const t of i){let n=!1;const r=o.get(t).hue;for(const[t]of u)if(e(r,o.get(t).hue)<15){n=!0;break}n||u.set(t,h.get(t))}const f=Array.from(u.entries());f.sort(((t,n)=>n[1]-t[1]));const l=f.map((t=>t[0]));return 0===l.length&&l.push(4282549748),l}static filter(t,n){const r=new Array;for(const[e,o]of n.entries()){const n=t.get(e);o.chroma>=T.CUTOFF_CHROMA&&u(e)>=T.CUTOFF_TONE&&n>=T.CUTOFF_EXCITED_PROPORTION&&r.push(e)}return r}}T.TARGET_CHROMA=48,T.WEIGHT_PROPORTION=.7,T.WEIGHT_CHROMA_ABOVE=.3,T.WEIGHT_CHROMA_BELOW=.1,T.CUTOFF_CHROMA=15,T.CUTOFF_TONE=10,T.CUTOFF_EXCITED_PROPORTION=.01;const O=t=>{const n=3===(t=t.replace("#","")).length,r=6===t.length,e=8===t.length;if(!n&&!r&&!e)throw new Error("unexpected hex "+t);let o=0,a=0,s=0;return n?(o=E(t.slice(0,1).repeat(2)),a=E(t.slice(1,2).repeat(2)),s=E(t.slice(2,3).repeat(2))):r?(o=E(t.slice(0,2)),a=E(t.slice(2,4)),s=E(t.slice(4,6))):e&&(o=E(t.slice(2,4)),a=E(t.slice(4,6)),s=E(t.slice(6,8))),(255<<24|(255&o)<<16|(255&a)<<8|255&s)>>>0};function E(t){return parseInt(t,16)}function A(){const t=function(t,n,r,e){const o={tonalPalettes:{},light:{},dark:{}},h=C.of(O(t)),i=C.of(g.harmonize(O(n),O(t))),u=C.of(g.harmonize(O("#286B2A"),O(t))),f=C.of(g.harmonize(O(r),O(t))),l=C.of(g.harmonize(O(e),O(t))),M={brand:h.a1,accent:i.a1,positive:u.a1,negative:h.error,information:f.a1,warning:l.a1,netural:h.n1,neutralvariant:h.n2},m=[0,10,20,25,30,35,40,50,60,70,80,90,95,98,99,100];return Object.entries(M).forEach((([t,n])=>{o.tonalPalettes[t]={},m.forEach((r=>{o.tonalPalettes[t]["tone"+r]=(t=>{const n=a(t),r=s(t),e=c(t),o=[n.toString(16),r.toString(16),e.toString(16)];for(const[t,n]of o.entries())1===n.length&&(o[t]="0"+n);return"#"+o.join("")})(n.tone(r))}))})),o}(document.getElementById("brand").value,document.getElementById("accent").value,document.getElementById("information").value,document.getElementById("warning").value);Object.entries(t.tonalPalettes).forEach((([t,n])=>{Object.entries(n).forEach((([n,r])=>{$(`.${t}.${n}`).css("background-color",r),$(`.${t}.text-${n}`).css("color",r),$(`span.${t}.${n}`).html(`<i class="bi bi-square-fill"></i>${r}`),$(`span.${t}.${n} i`).css("color",r)}))}));const n=t.tonalPalettes.netural.tone99,r=t.tonalPalettes.brand.tone40;$("td.surface1").css("background-color",H(n,r,.05)),$("td.surface2").css("background-color",H(n,r,.08)),$("td.surface3").css("background-color",H(n,r,.11)),$("td.surface4").css("background-color",H(n,r,.12)),$("td.surface5").css("background-color",H(n,r,.14)),$(".netural.surface1").text(H(n,r,.05)),$(".netural.surface2").text(H(n,r,.08)),$(".netural.surface3").text(H(n,r,.11)),$(".netural.surface4").text(H(n,r,.12)),$(".netural.surface5").text(H(n,r,.14))}function H(t,n,r){const e=1-r;t=R(t),n=R(n);return"#"+((1<<24)+(Math.round(255*(r*(n.red/255)+e*(t.red/255)))<<16)+(Math.round(255*(r*(n.green/255)+e*(t.green/255)))<<8)+Math.round(255*(r*(n.blue/255)+e*(t.blue/255)))).toString(16).slice(1)}function R(t){return{red:parseInt(t[1]+t[2],16),green:parseInt(t[3]+t[4],16),blue:parseInt(t[5]+t[6],16)}}window.update=function(){A()},A()})();