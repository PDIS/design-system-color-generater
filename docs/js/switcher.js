/*! For license information please see switcher.js.LICENSE.txt */
(()=>{"use strict";function t(t){return t<0?-1:0===t?0:1}function e(t,e,n){return(1-n)*t+n*e}function n(t){return(t%=360)<0&&(t+=360),t}function o(t,e){return 180-Math.abs(Math.abs(t-e)-180)}function r(t,e){return[t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2]]}function a(t){return t>>16&255}function s(t){return t>>8&255}function c(t){return 255&t}function i(t,e,n){const o=r([t,e,n],[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]);return(255<<24|(255&f(o[0]))<<16|(255&f(o[1]))<<8|255&f(o[2]))>>>0}function h(t){const e=(t+16)/116,n=24389/27,o=e*e*e>216/24389,r=[95.047,100,108.883];return i((o?e*e*e:t/n)*r[0],(t>8?e*e*e:t/n)*r[1],(o?e*e*e:t/n)*r[2])}function u(t){const e=function(t){return r([m(a(t)),m(s(t)),m(c(t))],[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]])}(t)[1]/100;return e<=216/24389?24389/27*e:116*Math.pow(e,1/3)-16}function l(t){return t>8?100*Math.pow((t+16)/116,3):t/24389/27*100}function m(t){const e=t/255;return e<=.040449936?e/12.92*100:100*Math.pow((e+.055)/1.055,2.4)}function f(t){const e=t/100;let n=0;return n=e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055,0,255,(o=Math.round(255*n))<0?0:o>255?255:o;var o}class d{constructor(t,e,n,o,r,a,s,c,i,h){this.n=t,this.aw=e,this.nbb=n,this.ncb=o,this.c=r,this.nc=a,this.rgbD=s,this.fl=c,this.fLRoot=i,this.z=h}static make(t=[95.047,100,108.883],n=200/Math.PI*l(50)/100,o=50,r=2,a=!1){const s=t,c=.401288*s[0]+.650173*s[1]+-.051461*s[2],i=-.250268*s[0]+1.204414*s[1]+.045854*s[2],h=-.002079*s[0]+.048952*s[1]+.953127*s[2],u=.8+r/10,m=u>=.9?e(.59,.69,10*(u-.9)):e(.525,.59,10*(u-.8));let f=a?1:u*(1-1/3.6*Math.exp((-n-42)/92));f=f>1?1:f<0?0:f;const M=u,p=[f*(100/c)+1-f,f*(100/i)+1-f,f*(100/h)+1-f],w=1/(5*n+1),b=w*w*w*w,I=1-b,g=b*n+.1*I*I*Math.cbrt(5*n),y=l(o)/t[1],E=1.48+Math.sqrt(y),P=.725/Math.pow(y,.2),T=P,C=[Math.pow(g*p[0]*c/100,.42),Math.pow(g*p[1]*i/100,.42),Math.pow(g*p[2]*h/100,.42)],A=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)];return new d(y,(2*A[0]+A[1]+.05*A[2])*P,P,T,m,M,p,g,Math.pow(g,.25),E)}}d.DEFAULT=d.make();class M{constructor(t,e,n,o,r,a,s,c,i){this.hue=t,this.chroma=e,this.j=n,this.q=o,this.m=r,this.s=a,this.jstar=s,this.astar=c,this.bstar=i}distance(t){const e=this.jstar-t.jstar,n=this.astar-t.astar,o=this.bstar-t.bstar,r=Math.sqrt(e*e+n*n+o*o);return 1.41*Math.pow(r,.63)}static fromInt(t){return M.fromIntInViewingConditions(t,d.DEFAULT)}static fromIntInViewingConditions(e,n){const o=(65280&e)>>8,r=255&e,a=m((16711680&e)>>16),s=m(o),c=m(r),i=.41233895*a+.35762064*s+.18051042*c,h=.2126*a+.7152*s+.0722*c,u=.01932141*a+.11916382*s+.95034478*c,l=.401288*i+.650173*h-.051461*u,f=-.250268*i+1.204414*h+.045854*u,d=-.002079*i+.048952*h+.953127*u,p=n.rgbD[0]*l,w=n.rgbD[1]*f,b=n.rgbD[2]*d,I=Math.pow(n.fl*Math.abs(p)/100,.42),g=Math.pow(n.fl*Math.abs(w)/100,.42),y=Math.pow(n.fl*Math.abs(b)/100,.42),E=400*t(p)*I/(I+27.13),P=400*t(w)*g/(g+27.13),T=400*t(b)*y/(y+27.13),C=(11*E+-12*P+T)/11,A=(E+P-2*T)/9,O=(20*E+20*P+21*T)/20,v=(40*E+20*P+T)/20,H=180*Math.atan2(A,C)/Math.PI,R=H<0?H+360:H>=360?H-360:H,_=R*Math.PI/180,D=v*n.nbb,F=100*Math.pow(D/n.aw,n.c*n.z),L=4/n.c*Math.sqrt(F/100)*(n.aw+4)*n.fLRoot,U=R<20.14?R+360:R,j=5e4/13*(.25*(Math.cos(U*Math.PI/180+2)+3.8))*n.nc*n.ncb*Math.sqrt(C*C+A*A)/(O+.305),B=Math.pow(j,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),q=B*Math.sqrt(F/100),S=q*n.fLRoot,k=50*Math.sqrt(B*n.c/(n.aw+4)),G=(1+100*.007)*F/(1+.007*F),V=1/.0228*Math.log(1+.0228*S),W=V*Math.cos(_),x=V*Math.sin(_);return new M(R,q,F,L,S,k,G,W,x)}static fromJch(t,e,n){return M.fromJchInViewingConditions(t,e,n,d.DEFAULT)}static fromJchInViewingConditions(t,e,n,o){const r=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,a=e*o.fLRoot,s=e/Math.sqrt(t/100),c=50*Math.sqrt(s*o.c/(o.aw+4)),i=n*Math.PI/180,h=(1+100*.007)*t/(1+.007*t),u=1/.0228*Math.log(1+.0228*a),l=u*Math.cos(i),m=u*Math.sin(i);return new M(n,e,t,r,a,c,h,l,m)}static fromUcs(t,e,n){return M.fromUcsInViewingConditions(t,e,n,d.DEFAULT)}static fromUcsInViewingConditions(t,e,n,o){const r=e,a=n,s=Math.sqrt(r*r+a*a),c=(Math.exp(.0228*s)-1)/.0228/o.fLRoot;let i=Math.atan2(a,r)*(180/Math.PI);i<0&&(i+=360);const h=t/(1-.007*(t-100));return M.fromJchInViewingConditions(h,c,i,o)}viewedInSrgb(){return this.viewed(d.DEFAULT)}viewed(e){const n=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),o=Math.pow(n/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),r=this.hue*Math.PI/180,a=.25*(Math.cos(r+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),c=a*(5e4/13)*e.nc*e.ncb,h=s/e.nbb,u=Math.sin(r),l=Math.cos(r),m=23*(h+.305)*o/(23*c+11*o*l+108*o*u),f=m*l,d=m*u,M=(460*h+451*f+288*d)/1403,p=(460*h-891*f-261*d)/1403,w=(460*h-220*f-6300*d)/1403,b=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),I=t(M)*(100/e.fl)*Math.pow(b,1/.42),g=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=t(p)*(100/e.fl)*Math.pow(g,1/.42),E=Math.max(0,27.13*Math.abs(w)/(400-Math.abs(w))),P=t(w)*(100/e.fl)*Math.pow(E,1/.42),T=I/e.rgbD[0],C=y/e.rgbD[1],A=P/e.rgbD[2];return i(1.86206786*T-1.01125463*C+.14918677*A,.38752654*T+.62144744*C-.00897398*A,-.0158415*T-.03412294*C+1.04996444*A)}}class p{constructor(t,e,n){this.internalHue=t,this.internalChroma=e,this.internalTone=n,this.setInternalState(this.toInt())}static from(t,e,n){return new p(t,e,n)}static fromInt(t){const e=M.fromInt(t),n=u(t);return new p(e.hue,e.chroma,n)}toInt(){return w(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(t){this.setInternalState(w(n(t),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(w(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(w(this.internalHue,this.internalChroma,t))}setInternalState(t){const e=M.fromInt(t),n=u(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=n}}function w(t,e,o){return function(t,e,o,r){if(e<1||Math.round(o)<=0||Math.round(o)>=100)return h(o);t=n(t);let a=e,s=e,c=0,i=!0,u=null;for(;Math.abs(c-a)>=.4;){const e=b(t,s,o);if(i){if(null!=e)return e.viewed(r);i=!1,s=c+(a-c)/2}else null===e?a=s:(u=e,c=s),s=c+(a-c)/2}return null===u?h(o):u.viewed(r)}(n(t),e,(100,(r=o)<0?0:r>100?100:r),d.DEFAULT);var r}function b(t,e,n){let o=0,r=100,a=0,s=1e3,c=1e3,i=null;for(;Math.abs(o-r)>.01;){a=o+(r-o)/2;const h=M.fromJch(a,e,t).viewedInSrgb(),l=u(h),m=Math.abs(n-l);if(m<.2){const e=M.fromInt(h),n=e.distance(M.fromJch(e.j,e.chroma,t));n<=1&&n<=c&&(s=m,c=n,i=e)}if(0===s&&0===c)break;l<n?o=a:r=a}return i}class I{static harmonize(t,e){const r=p.fromInt(t),a=p.fromInt(e),s=o(r.hue,a.hue),c=Math.min(.5*s,15),i=n(r.hue+c*I.rotationDirection(r.hue,a.hue));return p.from(i,r.chroma,r.tone).toInt()}static hctHue(t,e,n){const o=I.cam16ucs(t,e,n),r=p.fromInt(o),a=p.fromInt(t);return p.from(r.hue,a.chroma,a.tone).toInt()}static cam16ucs(t,e,n){const o=M.fromInt(t),r=M.fromInt(e),a=o.jstar,s=o.astar,c=o.bstar,i=a+(r.jstar-a)*n,h=s+(r.astar-s)*n,u=c+(r.bstar-c)*n;return M.fromUcs(i,h,u).viewedInSrgb()}static rotationDirection(t,e){const n=e-t,o=e-t+360,r=e-t-360,a=Math.abs(n),s=Math.abs(o),c=Math.abs(r);return a<=s&&a<=c?n>=0?1:-1:s<=a&&s<=c?o>=0?1:-1:r>=0?1:-1}}class g{constructor(t,e){this.hue=t,this.chroma=e,this.cache=new Map}static fromInt(t){const e=p.fromInt(t);return g.fromHueAndChroma(e.hue,e.chroma)}static fromHueAndChroma(t,e){return new g(t,e)}tone(t){let e=this.cache.get(t);return void 0===e&&(e=p.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}}class y{constructor(t){const e=p.fromInt(t),n=e.hue;this.a1=g.fromHueAndChroma(n,Math.max(48,e.chroma)),this.a2=g.fromHueAndChroma(n,16),this.a3=g.fromHueAndChroma(n+60,24),this.n1=g.fromHueAndChroma(n,4),this.n2=g.fromHueAndChroma(n,8),this.error=g.fromHueAndChroma(25,84)}static of(t){return new y(t)}}class E{constructor(){}static score(t){let e=0;for(const n of t.values())e+=n;const n=new Map,r=new Map,a=new Array(360).fill(0);for(const[o,s]of t.entries()){const t=s/e;n.set(o,t);const c=M.fromInt(o);r.set(o,c),a[Math.round(c.hue)]+=t}const s=new Map;for(const[t,e]of r.entries()){const n=Math.round(e.hue);let o=0;for(let t=n-15;t<n+15;t++)o+=a[(c=t,(c%=360)<0&&(c+=360),c)];s.set(t,o)}var c;const i=new Map;for(const[t,e]of r.entries()){const n=100*s.get(t)*E.WEIGHT_PROPORTION,o=e.chroma<E.TARGET_CHROMA?E.WEIGHT_CHROMA_BELOW:E.WEIGHT_CHROMA_ABOVE,r=n+(e.chroma-E.TARGET_CHROMA)*o;i.set(t,r)}const h=E.filter(s,r),u=new Map;for(const t of h){let e=!1;const n=r.get(t).hue;for(const[t]of u)if(o(n,r.get(t).hue)<15){e=!0;break}e||u.set(t,i.get(t))}const l=Array.from(u.entries());l.sort(((t,e)=>e[1]-t[1]));const m=l.map((t=>t[0]));return 0===m.length&&m.push(4282549748),m}static filter(t,e){const n=new Array;for(const[o,r]of e.entries()){const e=t.get(o);r.chroma>=E.CUTOFF_CHROMA&&u(o)>=E.CUTOFF_TONE&&e>=E.CUTOFF_EXCITED_PROPORTION&&n.push(o)}return n}}E.TARGET_CHROMA=48,E.WEIGHT_PROPORTION=.7,E.WEIGHT_CHROMA_ABOVE=.3,E.WEIGHT_CHROMA_BELOW=.1,E.CUTOFF_CHROMA=15,E.CUTOFF_TONE=10,E.CUTOFF_EXCITED_PROPORTION=.01;const P=t=>{const e=3===(t=t.replace("#","")).length,n=6===t.length,o=8===t.length;if(!e&&!n&&!o)throw new Error("unexpected hex "+t);let r=0,a=0,s=0;return e?(r=T(t.slice(0,1).repeat(2)),a=T(t.slice(1,2).repeat(2)),s=T(t.slice(2,3).repeat(2))):n?(r=T(t.slice(0,2)),a=T(t.slice(2,4)),s=T(t.slice(4,6))):o&&(r=T(t.slice(2,4)),a=T(t.slice(4,6)),s=T(t.slice(6,8))),(255<<24|(255&r)<<16|(255&a)<<8|255&s)>>>0};function T(t){return parseInt(t,16)}function C(t){const e=function(t,e,n,o){const r={tonalPalettes:{},light:{},dark:{}},i=y.of(P(t)),h=y.of(I.harmonize(P(e),P(t))),u=y.of(I.harmonize(P("#286B2A"),P(t))),l=y.of(I.harmonize(P(n),P(t))),m=y.of(I.harmonize(P(o),P(t))),f={brand:i.a1,accent:h.a1,positive:u.a1,negative:i.error,information:l.a1,warning:m.a1,netural:i.n1,neutralvariant:i.n2},d=[0,10,20,25,30,35,40,50,60,70,80,90,95,98,99,100];return Object.entries(f).forEach((([t,e])=>{r.tonalPalettes[t]={},d.forEach((n=>{r.tonalPalettes[t]["tone"+n]=(t=>{const e=a(t),n=s(t),o=c(t),r=[e.toString(16),n.toString(16),o.toString(16)];for(const[t,e]of r.entries())1===e.length&&(r[t]="0"+e);return"#"+r.join("")})(e.tone(n))}))})),r}(document.getElementById("s-brand").value,document.getElementById("s-accent").value,document.getElementById("s-information").value,document.getElementById("s-warning").value);Object.entries(e.tonalPalettes).forEach((([t,e])=>{document.documentElement.style.setProperty(`--${t}`,e.tone40),document.documentElement.style.setProperty(`--${t}-strong`,e.tone30),document.documentElement.style.setProperty(`--on-${t}`,e.tone100),document.documentElement.style.setProperty(`--${t}-flat`,e.tone90),document.documentElement.style.setProperty(`--${t}-flat-strong`,e.tone80),document.documentElement.style.setProperty(`--on-${t}-flat`,e.tone10)})),document.documentElement.style.setProperty("--background",e.tonalPalettes.netural.tone99),document.documentElement.style.setProperty("--on-background",e.tonalPalettes.netural.tone10),document.documentElement.style.setProperty("--surface",e.tonalPalettes.netural.tone99);const n=e.tonalPalettes.netural.tone99,o=e.tonalPalettes.brand.tone40;document.documentElement.style.setProperty("--surface-1",A(n,o,.05)),document.documentElement.style.setProperty("--surface-2",A(n,o,.08)),document.documentElement.style.setProperty("--surface-3",A(n,o,.11)),document.documentElement.style.setProperty("--surface-4",A(n,o,.12)),document.documentElement.style.setProperty("--surface-5",A(n,o,.14)),document.documentElement.style.setProperty("--on-surface",e.tonalPalettes.netural.tone10),document.documentElement.style.setProperty("--surface-variant",e.tonalPalettes.neutralvariant.tone90),document.documentElement.style.setProperty("--on-surface-variant",e.tonalPalettes.neutralvariant.tone30),document.documentElement.style.setProperty("--outline",e.tonalPalettes.neutralvariant.tone50)}function A(t,e,n){const o=1-n;t=O(t),e=O(e);return"#"+((1<<24)+(Math.round(255*(n*(e.red/255)+o*(t.red/255)))<<16)+(Math.round(255*(n*(e.green/255)+o*(t.green/255)))<<8)+Math.round(255*(n*(e.blue/255)+o*(t.blue/255)))).toString(16).slice(1)}function O(t){return{red:parseInt(t[1]+t[2],16),green:parseInt(t[3]+t[4],16),blue:parseInt(t[5]+t[6],16)}}document.body.insertAdjacentHTML("beforeend",'<button id="switcher" type="button" class="btn btn-secondary switcher">⚙️</button><div id="switcher-content"><button type="button" class="btn-close" id="switcher-close"></button><br><input type="color" class="form-control form-control-color" id="s-brand" value="#2c5ab4" onchange="update(this)"/><p class="d-inline">Brand</p><br><input type="color" class="form-control form-control-color" id="s-accent" value="#705D00" onchange="update(this)"/><p class="d-inline">Accent</p><br><input type="color" class="form-control form-control-color" id="s-information" value="#006687" onchange="update(this)"/><p class="d-inline">Information</p><br><input type="color" class="form-control form-control-color" id="s-warning" value="#A53D00" onchange="update(this)"/><p class="d-inline">Warning</p></div>'),document.getElementById("switcher").addEventListener("click",(()=>{document.getElementById("switcher-content").style.display="block"})),document.getElementById("switcher-close").addEventListener("click",(()=>{document.getElementById("switcher-content").style.display="none"})),window.update=function(){C()},C()})();