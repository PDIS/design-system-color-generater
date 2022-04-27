/*! For license information please see switcher.js.LICENSE.txt */
(()=>{"use strict";function t(t){return t<0?-1:0===t?0:1}function n(t,n,e){return(1-e)*t+e*n}function e(t){return(t%=360)<0&&(t+=360),t}const a=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],o=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],r=[95.047,100,108.883];function s(t){return t>>16&255}function l(t){return t>>8&255}function i(t){return 255&t}function c(t,n,e){const a=o,r=a[0][0]*t+a[0][1]*n+a[0][2]*e,s=a[1][0]*t+a[1][1]*n+a[1][2]*e,l=a[2][0]*t+a[2][1]*n+a[2][2]*e;return(255<<24|(255&m(r))<<16|(255&m(s))<<8|255&m(l))>>>0}function h(t){const n=(t+16)/116,e=24389/27,a=n*n*n>216/24389;return c((a?n*n*n:t/e)*r[0],(t>8?n*n*n:t/e)*r[1],(a?n*n*n:t/e)*r[2])}function u(t){const n=function(t){return[(n=[d(s(t)),d(l(t)),d(i(t))])[0]*(e=a)[0][0]+n[1]*e[0][1]+n[2]*e[0][2],n[0]*e[1][0]+n[1]*e[1][1]+n[2]*e[1][2],n[0]*e[2][0]+n[1]*e[2][1]+n[2]*e[2][2]];var n,e}(t)[1]/100;return n<=216/24389?24389/27*n:116*Math.pow(n,1/3)-16}function f(t){return t>8?100*Math.pow((t+16)/116,3):t/(24389/27)*100}function d(t){const n=t/255;return n<=.040449936?n/12.92*100:100*Math.pow((n+.055)/1.055,2.4)}function m(t){const n=t/100;let e=0;return e=n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055,0,255,(a=Math.round(255*e))<0?0:a>255?255:a;var a}class g{constructor(t,n,e,a,o,r,s,l,i,c){this.n=t,this.aw=n,this.nbb=e,this.ncb=a,this.c=o,this.nc=r,this.rgbD=s,this.fl=l,this.fLRoot=i,this.z=c}static make(t=function(){return r}(),e=200/Math.PI*f(50)/100,a=50,o=2,s=!1){const l=t,i=.401288*l[0]+.650173*l[1]+-.051461*l[2],c=-.250268*l[0]+1.204414*l[1]+.045854*l[2],h=-.002079*l[0]+.048952*l[1]+.953127*l[2],u=.8+o/10,d=u>=.9?n(.59,.69,10*(u-.9)):n(.525,.59,10*(u-.8));let m=s?1:u*(1-1/3.6*Math.exp((-e-42)/92));m=m>1?1:m<0?0:m;const b=u,P=[m*(100/i)+1-m,m*(100/c)+1-m,m*(100/h)+1-m],M=1/(5*e+1),$=M*M*M*M,w=1-$,p=$*e+.1*w*w*Math.cbrt(5*e),v=f(a)/t[1],I=1.48+Math.sqrt(v),E=.725/Math.pow(v,.2),C=E,T=[Math.pow(p*P[0]*i/100,.42),Math.pow(p*P[1]*c/100,.42),Math.pow(p*P[2]*h/100,.42)],A=[400*T[0]/(T[0]+27.13),400*T[1]/(T[1]+27.13),400*T[2]/(T[2]+27.13)];return new g(v,(2*A[0]+A[1]+.05*A[2])*E,E,C,d,b,P,p,Math.pow(p,.25),I)}}g.DEFAULT=g.make();class b{constructor(t,n,e,a,o,r,s,l,i){this.hue=t,this.chroma=n,this.j=e,this.q=a,this.m=o,this.s=r,this.jstar=s,this.astar=l,this.bstar=i}distance(t){const n=this.jstar-t.jstar,e=this.astar-t.astar,a=this.bstar-t.bstar,o=Math.sqrt(n*n+e*e+a*a);return 1.41*Math.pow(o,.63)}static fromInt(t){return b.fromIntInViewingConditions(t,g.DEFAULT)}static fromIntInViewingConditions(n,e){const a=(65280&n)>>8,o=255&n,r=d((16711680&n)>>16),s=d(a),l=d(o),i=.41233895*r+.35762064*s+.18051042*l,c=.2126*r+.7152*s+.0722*l,h=.01932141*r+.11916382*s+.95034478*l,u=.401288*i+.650173*c-.051461*h,f=-.250268*i+1.204414*c+.045854*h,m=-.002079*i+.048952*c+.953127*h,g=e.rgbD[0]*u,P=e.rgbD[1]*f,M=e.rgbD[2]*m,$=Math.pow(e.fl*Math.abs(g)/100,.42),w=Math.pow(e.fl*Math.abs(P)/100,.42),p=Math.pow(e.fl*Math.abs(M)/100,.42),v=400*t(g)*$/($+27.13),I=400*t(P)*w/(w+27.13),E=400*t(M)*p/(p+27.13),C=(11*v+-12*I+E)/11,T=(v+I-2*E)/9,A=(20*v+20*I+21*E)/20,O=(40*v+20*I+E)/20,y=180*Math.atan2(T,C)/Math.PI,H=y<0?y+360:y>=360?y-360:y,k=H*Math.PI/180,R=O*e.nbb,_=100*Math.pow(R/e.aw,e.c*e.z),L=4/e.c*Math.sqrt(_/100)*(e.aw+4)*e.fLRoot,D=H<20.14?H+360:H,F=5e4/13*(.25*(Math.cos(D*Math.PI/180+2)+3.8))*e.nc*e.ncb*Math.sqrt(C*C+T*T)/(A+.305),B=Math.pow(F,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),U=B*Math.sqrt(_/100),q=U*e.fLRoot,j=50*Math.sqrt(B*e.c/(e.aw+4)),x=(1+100*.007)*_/(1+.007*_),G=1/.0228*Math.log(1+.0228*q),S=G*Math.cos(k),V=G*Math.sin(k);return new b(H,U,_,L,q,j,x,S,V)}static fromJch(t,n,e){return b.fromJchInViewingConditions(t,n,e,g.DEFAULT)}static fromJchInViewingConditions(t,n,e,a){const o=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,r=n*a.fLRoot,s=n/Math.sqrt(t/100),l=50*Math.sqrt(s*a.c/(a.aw+4)),i=e*Math.PI/180,c=(1+100*.007)*t/(1+.007*t),h=1/.0228*Math.log(1+.0228*r),u=h*Math.cos(i),f=h*Math.sin(i);return new b(e,n,t,o,r,l,c,u,f)}static fromUcs(t,n,e){return b.fromUcsInViewingConditions(t,n,e,g.DEFAULT)}static fromUcsInViewingConditions(t,n,e,a){const o=n,r=e,s=Math.sqrt(o*o+r*r),l=(Math.exp(.0228*s)-1)/.0228/a.fLRoot;let i=Math.atan2(r,o)*(180/Math.PI);i<0&&(i+=360);const c=t/(1-.007*(t-100));return b.fromJchInViewingConditions(c,l,i,a)}toInt(){return this.viewed(g.DEFAULT)}viewed(n){const e=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),a=Math.pow(e/Math.pow(1.64-Math.pow(.29,n.n),.73),1/.9),o=this.hue*Math.PI/180,r=.25*(Math.cos(o+2)+3.8),s=n.aw*Math.pow(this.j/100,1/n.c/n.z),l=r*(5e4/13)*n.nc*n.ncb,i=s/n.nbb,h=Math.sin(o),u=Math.cos(o),f=23*(i+.305)*a/(23*l+11*a*u+108*a*h),d=f*u,m=f*h,g=(460*i+451*d+288*m)/1403,b=(460*i-891*d-261*m)/1403,P=(460*i-220*d-6300*m)/1403,M=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),$=t(g)*(100/n.fl)*Math.pow(M,1/.42),w=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),p=t(b)*(100/n.fl)*Math.pow(w,1/.42),v=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),I=t(P)*(100/n.fl)*Math.pow(v,1/.42),E=$/n.rgbD[0],C=p/n.rgbD[1],T=I/n.rgbD[2];return c(1.86206786*E-1.01125463*C+.14918677*T,.38752654*E+.62144744*C-.00897398*T,-.0158415*E-.03412294*C+1.04996444*T)}}class P{constructor(t,n,e){this.internalHue=t,this.internalChroma=n,this.internalTone=e,this.setInternalState(this.toInt())}static from(t,n,e){return new P(t,n,e)}static fromInt(t){const n=b.fromInt(t),e=u(t);return new P(n.hue,n.chroma,e)}toInt(){return M(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(t){this.setInternalState(M(e(t),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(M(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(M(this.internalHue,this.internalChroma,t))}setInternalState(t){const n=b.fromInt(t),e=u(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=e}}function M(t,n,a){return function(t,n,a,o){if(n<1||Math.round(a)<=0||Math.round(a)>=100)return h(a);t=e(t);let r=n,s=n,l=0,i=!0,c=null;for(;Math.abs(l-r)>=.4;){const n=$(t,s,a);if(i){if(null!=n)return n.viewed(o);i=!1,s=l+(r-l)/2}else null===n?r=s:(c=n,l=s),s=l+(r-l)/2}return null===c?h(a):c.viewed(o)}(e(t),n,(100,(o=a)<0?0:o>100?100:o),g.DEFAULT);var o}function $(t,n,e){let a=0,o=100,r=0,s=1e3,l=1e3,i=null;for(;Math.abs(a-o)>.01;){r=a+(o-a)/2;const c=b.fromJch(r,n,t).toInt(),h=u(c),f=Math.abs(e-h);if(f<.2){const n=b.fromInt(c),e=n.distance(b.fromJch(n.j,n.chroma,t));e<=1&&e<=l&&(s=f,l=e,i=n)}if(0===s&&0===l)break;h<e?a=r:o=r}return i}class w{constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}static fromInt(t){const n=P.fromInt(t);return w.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new w(t,n)}tone(t){let n=this.cache.get(t);return void 0===n&&(n=P.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}}class p{constructor(t){const n=P.fromInt(t),e=n.hue;this.a1=w.fromHueAndChroma(e,Math.max(48,n.chroma)),this.a2=w.fromHueAndChroma(e,16),this.a3=w.fromHueAndChroma(e+60,24),this.n1=w.fromHueAndChroma(e,4),this.n2=w.fromHueAndChroma(e,8),this.error=w.fromHueAndChroma(25,84)}static of(t){return new p(t)}}class v{constructor(){}static score(t){let n=0;for(const e of t.values())n+=e;const e=new Map,a=new Map,o=new Array(360).fill(0);for(const[r,s]of t.entries()){const t=s/n;e.set(r,t);const l=b.fromInt(r);a.set(r,l),o[Math.round(l.hue)]+=t}const r=new Map;for(const[t,n]of a.entries()){const e=Math.round(n.hue);let a=0;for(let t=e-15;t<e+15;t++)a+=o[(s=t,(s%=360)<0&&(s+=360),s)];r.set(t,a)}var s;const l=new Map;for(const[t,n]of a.entries()){const e=100*r.get(t)*v.WEIGHT_PROPORTION,a=n.chroma<v.TARGET_CHROMA?v.WEIGHT_CHROMA_BELOW:v.WEIGHT_CHROMA_ABOVE,o=e+(n.chroma-v.TARGET_CHROMA)*a;l.set(t,o)}const i=v.filter(r,a),c=new Map;for(const t of i){let n=!1;const e=a.get(t).hue;for(const[t]of c){if(h=e,u=a.get(t).hue,180-Math.abs(Math.abs(h-u)-180)<15){n=!0;break}}n||c.set(t,l.get(t))}var h,u;const f=Array.from(c.entries());f.sort(((t,n)=>n[1]-t[1]));const d=f.map((t=>t[0]));return 0===d.length&&d.push(4282549748),d}static filter(t,n){const e=new Array;for(const[a,o]of n.entries()){const n=t.get(a);o.chroma>=v.CUTOFF_CHROMA&&u(a)>=v.CUTOFF_TONE&&n>=v.CUTOFF_EXCITED_PROPORTION&&e.push(a)}return e}}v.TARGET_CHROMA=48,v.WEIGHT_PROPORTION=.7,v.WEIGHT_CHROMA_ABOVE=.3,v.WEIGHT_CHROMA_BELOW=.1,v.CUTOFF_CHROMA=15,v.CUTOFF_TONE=10,v.CUTOFF_EXCITED_PROPORTION=.01;const I=t=>{const n=3===(t=t.replace("#","")).length,e=6===t.length,a=8===t.length;if(!n&&!e&&!a)throw new Error("unexpected hex "+t);let o=0,r=0,s=0;return n?(o=E(t.slice(0,1).repeat(2)),r=E(t.slice(1,2).repeat(2)),s=E(t.slice(2,3).repeat(2))):e?(o=E(t.slice(0,2)),r=E(t.slice(2,4)),s=E(t.slice(4,6))):a&&(o=E(t.slice(2,4)),r=E(t.slice(4,6)),s=E(t.slice(6,8))),(255<<24|(255&o)<<16|(255&r)<<8|255&s)>>>0};function E(t){return parseInt(t,16)}function C(t){const n=function(t,n,e,a){const o={tonalPalettes:{},light:{},dark:{}},r=p.of(I(t)),c=p.of(I(n)),h=p.of(I("#286B2A")),u=p.of(I(e)),f=p.of(I(a)),d={brand:r.a1,accent:c.a1,positive:h.a1,negative:r.error,information:u.a1,warning:f.a1,netural:r.n1,neutralvariant:r.n2},m=[0,10,20,25,30,35,40,50,60,70,80,90,95,98,99,100];return Object.entries(d).forEach((([t,n])=>{o.tonalPalettes[t]={},m.forEach((e=>{o.tonalPalettes[t]["tone"+e]=(t=>{const n=s(t),e=l(t),a=i(t),o=[n.toString(16),e.toString(16),a.toString(16)];for(const[t,n]of o.entries())1===n.length&&(o[t]="0"+n);return"#"+o.join("")})(n.tone(e))}))})),o}(document.getElementById("s-brand").value,document.getElementById("s-accent").value,document.getElementById("s-information").value,document.getElementById("s-warning").value),e=n.tonalPalettes.netural.tone99,a=n.tonalPalettes.brand.tone40,o=n.tonalPalettes.netural.tone10,r=n.tonalPalettes.brand.tone80;try{document.getElementById("color").remove()}catch(t){}var c=document.createElement("style");c.id="color",c.appendChild(document.createTextNode(`\n  :root {\n    --brand: ${n.tonalPalettes.brand.tone40};\n    --brand-strong: ${n.tonalPalettes.brand.tone30};\n    --on-brand: ${n.tonalPalettes.brand.tone100};\n    --brand-flat: ${n.tonalPalettes.brand.tone90};\n    --brand-flat-strong: ${n.tonalPalettes.brand.tone80};\n    --on-brand-flat: ${n.tonalPalettes.brand.tone10};\n    --accent: ${n.tonalPalettes.accent.tone40};\n    --accent-strong: ${n.tonalPalettes.accent.tone30};\n    --on-accent: ${n.tonalPalettes.accent.tone100};\n    --accent-flat: ${n.tonalPalettes.accent.tone90};\n    --accent-flat-strong: ${n.tonalPalettes.accent.tone80};\n    --on-accent-flat: ${n.tonalPalettes.accent.tone10};\n    --positive: ${n.tonalPalettes.positive.tone40};\n    --positive-strong: ${n.tonalPalettes.positive.tone30};\n    --on-positive: ${n.tonalPalettes.positive.tone100};\n    --positive-flat: ${n.tonalPalettes.positive.tone90};\n    --positive-flat-strong: ${n.tonalPalettes.positive.tone80};\n    --on-positive-flat: ${n.tonalPalettes.positive.tone10};\n    --negative: ${n.tonalPalettes.negative.tone40};\n    --negative-strong: ${n.tonalPalettes.negative.tone30};\n    --on-negative: ${n.tonalPalettes.negative.tone100};\n    --negative-flat: ${n.tonalPalettes.negative.tone90};\n    --negative-flat-strong: ${n.tonalPalettes.negative.tone80};\n    --on-negative-flat: ${n.tonalPalettes.negative.tone10};\n    --information: ${n.tonalPalettes.information.tone40};\n    --information-strong: ${n.tonalPalettes.information.tone30};\n    --on-information: ${n.tonalPalettes.information.tone100};\n    --information-flat: ${n.tonalPalettes.information.tone90};\n    --information-flat-strong: ${n.tonalPalettes.information.tone80};\n    --on-information-flat: ${n.tonalPalettes.information.tone10};\n    --warning: ${n.tonalPalettes.warning.tone40};\n    --warning-strong: ${n.tonalPalettes.warning.tone30};\n    --on-warning: ${n.tonalPalettes.warning.tone100};\n    --warning-flat: ${n.tonalPalettes.warning.tone90};\n    --warning-flat-strong: ${n.tonalPalettes.warning.tone80};\n    --on-warning-flat: ${n.tonalPalettes.warning.tone10};\n    --surface: ${n.tonalPalettes.netural.tone99};\n    --surface-1: ${T(e,a,.05)};\n    --surface-2: ${T(e,a,.08)};\n    --surface-3: ${T(e,a,.11)};\n    --surface-4: ${T(e,a,.12)};\n    --surface-5: ${T(e,a,.14)};\n    --on-surface: ${n.tonalPalettes.netural.tone10};\n    --surface-variant: ${n.tonalPalettes.neutralvariant.tone90};\n    --on-surface-variant: ${n.tonalPalettes.neutralvariant.tone30};\n    --outline: ${n.tonalPalettes.neutralvariant.tone50};\n    --background: ${n.tonalPalettes.netural.tone99};\n    --on-background: ${n.tonalPalettes.netural.tone10};\n    --bs-body-bg: ${n.tonalPalettes.netural.tone99};\n  }\n  .darkmode {\n    --brand: ${n.tonalPalettes.brand.tone80};\n    --brand-strong: ${n.tonalPalettes.brand.tone90};\n    --on-brand: ${n.tonalPalettes.brand.tone20};\n    --brand-flat: ${n.tonalPalettes.brand.tone30};\n    --brand-flat-strong: ${n.tonalPalettes.brand.tone20};\n    --on-brand-flat: ${n.tonalPalettes.brand.tone90};\n    --accent: ${n.tonalPalettes.accent.tone80};\n    --accent-strong: ${n.tonalPalettes.accent.tone90};\n    --on-accent: ${n.tonalPalettes.accent.tone20};\n    --accent-flat: ${n.tonalPalettes.accent.tone30};\n    --accent-flat-strong: ${n.tonalPalettes.accent.tone20};\n    --on-accent-flat: ${n.tonalPalettes.accent.tone90};\n    --positive: ${n.tonalPalettes.positive.tone80};\n    --positive-strong: ${n.tonalPalettes.positive.tone90};\n    --on-positive: ${n.tonalPalettes.positive.tone20};\n    --positive-flat: ${n.tonalPalettes.positive.tone30};\n    --positive-flat-strong: ${n.tonalPalettes.positive.tone20};\n    --on-positive-flat: ${n.tonalPalettes.positive.tone90};\n    --negative: ${n.tonalPalettes.negative.tone80};\n    --negative-strong: ${n.tonalPalettes.negative.tone90};\n    --on-negative: ${n.tonalPalettes.negative.tone20};\n    --negative-flat: ${n.tonalPalettes.negative.tone30};\n    --negative-flat-strong: ${n.tonalPalettes.negative.tone20};\n    --on-negative-flat: ${n.tonalPalettes.negative.tone90};\n    --information: ${n.tonalPalettes.information.tone80};\n    --information-strong: ${n.tonalPalettes.information.tone90};\n    --on-information: ${n.tonalPalettes.information.tone20};\n    --information-flat: ${n.tonalPalettes.information.tone30};\n    --information-flat-strong: ${n.tonalPalettes.information.tone20};\n    --on-information-flat: ${n.tonalPalettes.information.tone90};\n    --warning: ${n.tonalPalettes.warning.tone80};\n    --warning-strong: ${n.tonalPalettes.warning.tone90};\n    --on-warning: ${n.tonalPalettes.warning.tone20};\n    --warning-flat: ${n.tonalPalettes.warning.tone30};\n    --warning-flat-strong: ${n.tonalPalettes.warning.tone20};\n    --on-warning-flat: ${n.tonalPalettes.warning.tone90};\n    --surface: ${n.tonalPalettes.netural.tone10};\n    --surface-1: ${T(o,r,.05)};\n    --surface-2: ${T(o,r,.08)};\n    --surface-3: ${T(o,r,.11)};\n    --surface-4: ${T(o,r,.12)};\n    --surface-5: ${T(o,r,.14)};\n    --on-surface: ${n.tonalPalettes.netural.tone90};\n    --surface-variant: ${n.tonalPalettes.neutralvariant.tone30};\n    --on-surface-variant: ${n.tonalPalettes.neutralvariant.tone80};\n    --outline: ${n.tonalPalettes.neutralvariant.tone60};\n    --background: ${n.tonalPalettes.netural.tone10};\n    --on-background: ${n.tonalPalettes.netural.tone90};\n    --bs-body-bg:  ${n.tonalPalettes.netural.tone10};\n  }\n  `)),document.body.appendChild(c)}function T(t,n,e){const a=1-e;t=A(t),n=A(n);return"#"+((1<<24)+(Math.round(255*(e*(n.red/255)+a*(t.red/255)))<<16)+(Math.round(255*(e*(n.green/255)+a*(t.green/255)))<<8)+Math.round(255*(e*(n.blue/255)+a*(t.blue/255)))).toString(16).slice(1)}function A(t){return{red:parseInt(t[1]+t[2],16),green:parseInt(t[3]+t[4],16),blue:parseInt(t[5]+t[6],16)}}document.body.insertAdjacentHTML("beforeend",'<button id="switcher" type="button" class="btn switcher">\n  ⚙️\n</button>\n<div id="switcher-content">\n  <button type="button" class="btn-close" id="switcher-close"></button>\n  <br />\n  <div class="form-check">\n    <input class="form-check-input" type="checkbox" value="" id="darkmode">\n    <label class="form-check-label" for="darkmode">\n      Darkmode\n    </label>\n  </div>\n  <input\n    type="color"\n    class="form-control form-control-color"\n    id="s-brand"\n    value="#2c5ab4"\n    onchange="update(this)"\n  />\n  <label class="form-check-label">Brand</label>\n  <br />\n  <input\n    type="color"\n    class="form-control form-control-color"\n    id="s-accent"\n    value="#705D00"\n    onchange="update(this)"\n  />\n  <label class="form-check-label">Accent</label>\n  <br />\n  <input\n    type="color"\n    class="form-control form-control-color"\n    id="s-information"\n    value="#006687"\n    onchange="update(this)"\n  />\n  <label class="form-check-label">Information</label>\n  <br />\n  <input\n    type="color"\n    class="form-control form-control-color"\n    id="s-warning"\n    value="#A53D00"\n    onchange="update(this)"\n  />\n  <label class="form-check-label">Warning</label>\n</div>\n'),document.getElementById("switcher").addEventListener("click",(()=>{document.getElementById("switcher-content").style.display="block"})),document.getElementById("switcher-close").addEventListener("click",(()=>{document.getElementById("switcher-content").style.display="none"})),document.getElementById("darkmode").addEventListener("change",(t=>{t.target.checked?document.body.classList.add("darkmode"):document.body.classList.remove("darkmode")})),window.update=function(){C()},C()})();