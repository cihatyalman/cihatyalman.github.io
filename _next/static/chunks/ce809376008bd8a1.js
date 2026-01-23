(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},32451,e=>{e.v({sections:{about:"Who Am I ?",skills:"Skills",projects:"Projects",experiences:"Experiences",education:"Education",contact:"Contact"},cover:{welcome:"A computer engineer who continuously [improves] himself, [shares] his knowledge and experience, and adopts and [applies] new technologies."},about:{title:"Hello! I'm Cihat. 👋",description:"I have been developing mobile applications with Flutter for more than 4 years. During this time, I have taken an active role in all stages of many projects, from the idea phase to planning, development, and store publishing. Thanks to the opportunity to work on different types of projects, I have gained experience with various technologies and deepened my knowledge and expertise in Flutter."},contact:{description:"I am always open to new projects and collaborations.\nI look forward to bringing your ideas to life."},others:{cv:"Download CV"}})},70740,e=>{e.v({sections:{about:"Ben Kimim ?",skills:"Yetenekler",projects:"Projeler",experiences:"Deneyimler",education:"Eğitim",contact:"İletişim"},cover:{welcome:"Her daim kendini [geliştiren], bilgilerini ve öğrendiklerini başkalarına [aktaran], yeni teknolojileri benimseyip [uygulayan] bir bilgisayar mühendisi."},about:{title:"Merhaba! Ben Cihat. 👋",description:"Flutter ile 4 yılı aşkın süredir mobil uygulama geliştiriyorum. Bu süreçte birçok projede fikir aşamasından planlamaya, geliştirme sürecinden mağaza yayınına kadar tüm aşamalarda aktif görev aldım. Farklı türde projelerle çalışma fırsatım sayesinde, çeşitli teknolojilerle deneyim kazanarak Flutter ile ilgili bilgi ve tecrübemi derinleştirdim."},projects:{project1:{title:"Flutter Architecture",description:"Flutter projelerinde kullanılmak üzere, okunabilirlik, düzenli dosya yönetimi ve SOLID prensiplerine dikkat edilerek hazırlanmıştır. Ayrıca, içerisinde birçok hazır widget barındırarak, geliştirme sürecini daha verimli ve etkili hale getirmeyi amaçlamaktadır."},project2:{title:"Flutter Core",description:"Flutter projelerinizde kullanabileceğiniz içerisinde Firebase, Local Veritabanı, API, QR, Medya(kamera, ses, video, dosya), Cache, Harita, Bildirim servislerini bulunduran çekirdek katman."}},experiences:{experience1:{title:"KutuSoft | Kurucu",description:"Proje fikirlerimi daha profesyonel bir şekilde hayata geçirmek için bir girişimde bulundum. Bu süreçte, mobil uygulama üretmenin sadece mobil tarafında değil, arka plan altyapısından web sitesine, reklamdan sosyal medya yönetimine kadar uzanan geniş bir yelpazede deneyim kazandım."},experience2:{title:"Internative Yazılım | Mobil Uygulama Geliştiricisi",description:"Bu 1 yıllık süre zarfında beş farklı projede aktif rol aldım. Yarım kalan projeleri başarıyla tamamlarken, birçok projeyi de sıfırdan başlattım. Bu süreç, farklı yazılım mimarileri ve prensipleri deneyimleyerek geniş bir tecrübe kazanmamı sağladı."},experience3:{title:"Kendi İşim | Mobil Uygulama ve Oyun Geliştiricisi",description:"Python ile okul projeleri geliştirirken aynı zamanda Unity kullanarak oyun geliştirme üzerine çalıştım. Birkaç oyun geliştirip yayınladıktan sonra, uygulama fikirlerimi hayata geçirmek amacıyla Flutter öğrenmeye başladım ve birkaç mobil uygulama geliştirip yayınladım. Yaklaşık 3 yıl süren bu süreçte, Python, Unity ve Flutter konusunda çeşitli tecrübeler edinerek bu alanlarda derinlemesine bilgi sahibi oldum."}},educations:{education:{title:"Bilecik Şeyh Edebali Üniversitesi | Bilgisayar Mühendisliği",description:"Okul projelerim için python kullanarak çeşitli projeler hazırladım.\n- Python ile görüntü işleme kullanılarak kameradan obje şekil tanımlama programı\n- Python tabanlı Android arayüzlü film uygulaması\n- Python tabanlı kullanıcı takibi yapabilen e-ticaret sitesi"}},contact:{description:"Yeni projelere ve işbirliklerine her zaman açığım.\nFikirlerinizi hayata geçirmek için sabırsızlanıyorum."},others:{cv:"CV İndir"}})},72636,e=>{e.v("/_next/static/media/error-image.e3add95c.png")},49705,e=>{e.v("/_next/static/media/placeholder.5ab3b4a0.png")},63178,e=>{"use strict";var t=e.i(71645),a=(e,t,a,i,r,o,n,s)=>{let l=document.documentElement,d=["light","dark"];function c(t){var a;(Array.isArray(e)?e:[e]).forEach(e=>{let a="class"===e,i=a&&o?r.map(e=>o[e]||e):r;a?(l.classList.remove(...i),l.classList.add(o&&o[t]?o[t]:t)):l.setAttribute(e,t)}),a=t,s&&d.includes(a)&&(l.style.colorScheme=a)}if(i)c(i);else try{let e=localStorage.getItem(t)||a,i=n&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(i)}catch(e){}},i=["light","dark"],r="(prefers-color-scheme: dark)",o="undefined"==typeof window,n=t.createContext(void 0),s={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=t.useContext(n))?e:s},d=e=>t.useContext(n)?t.createElement(t.Fragment,null,e.children):t.createElement(m,{...e}),c=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:a=!1,enableSystem:o=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:d=c,defaultTheme:m=o?"system":"light",attribute:h="data-theme",value:b,children:g,nonce:v,scriptProps:k})=>{let[w,x]=t.useState(()=>p(l,m)),[E,j]=t.useState(()=>"system"===w?f():w),C=b?Object.values(b):d,z=t.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=f());let r=b?b[t]:t,n=a?y(v):null,l=document.documentElement,d=e=>{"class"===e?(l.classList.remove(...C),r&&l.classList.add(r)):e.startsWith("data-")&&(r?l.setAttribute(e,r):l.removeAttribute(e))};if(Array.isArray(h)?h.forEach(d):d(h),s){let e=i.includes(m)?m:null,a=i.includes(t)?t:e;l.style.colorScheme=a}null==n||n()},[v]),T=t.useCallback(e=>{let t="function"==typeof e?e(w):e;x(t);try{localStorage.setItem(l,t)}catch(e){}},[w]),I=t.useCallback(t=>{j(f(t)),"system"===w&&o&&!e&&z("system")},[w,e]);t.useEffect(()=>{let e=window.matchMedia(r);return e.addListener(I),I(e),()=>e.removeListener(I)},[I]),t.useEffect(()=>{let e=e=>{e.key===l&&(e.newValue?x(e.newValue):T(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),t.useEffect(()=>{z(null!=e?e:w)},[e,w]);let P=t.useMemo(()=>({theme:w,setTheme:T,forcedTheme:e,resolvedTheme:"system"===w?E:w,themes:o?[...d,"system"]:d,systemTheme:o?E:void 0}),[w,T,e,E,o,d]);return t.createElement(n.Provider,{value:P},t.createElement(u,{forcedTheme:e,storageKey:l,attribute:h,enableSystem:o,enableColorScheme:s,defaultTheme:m,value:b,themes:d,nonce:v,scriptProps:k}),g)},u=t.memo(({forcedTheme:e,storageKey:i,attribute:r,enableSystem:o,enableColorScheme:n,defaultTheme:s,value:l,themes:d,nonce:c,scriptProps:m})=>{let u=JSON.stringify([r,i,s,e,d,l,o,n]).slice(1,-1);return t.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:`(${a.toString()})(${u})`}})}),p=(e,t)=>{let a;if(!o){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},f=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light");e.s(["ThemeProvider",()=>d,"useTheme",()=>l])},5766,e=>{"use strict";let t,a;var i,r=e.i(71645);let o={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let a="",i="",r="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+n+";":i+="f"==o[1]?d(n,o):o+"{"+d(n,"k"==o[1]?"":t)+"}":"object"==typeof n?i+=d(n,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(o,n):o+":"+n+";")}return a+(t&&r?t+"{"+r+"}":r)+i},c={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e};function u(e){let t,a,i=this||{},r=e.call?e(i.p):e;return((e,t,a,i,r)=>{var o;let u=m(e),p=c[u]||(c[u]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(u));if(!c[p]){let t=u!==e?e:(e=>{let t,a,i=[{}];for(;t=n.exec(e.replace(s,""));)t[4]?i.shift():t[3]?(a=t[3].replace(l," ").trim(),i.unshift(i[0][a]=i[0][a]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);c[p]=d(r?{["@keyframes "+p]:t}:t,a?"":"."+p)}let y=a&&c.g?c.g:null;return a&&(c.g=c[p]),o=c[p],y?t.data=t.data.replace(y,o):-1===t.data.indexOf(o)&&(t.data=i?o+t.data:t.data+o),p})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=i.p,r.reduce((e,i,r)=>{let o=t[r];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+i+(null==o?"":o)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(i.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o})(i.target),i.g,i.o,i.k)}u.bind({g:1});let p,y,f,h=u.bind({k:1});function b(e,t){let a=this||{};return function(){let i=arguments;function r(o,n){let s=Object.assign({},o),l=s.className||r.className;a.p=Object.assign({theme:y&&y()},s),a.o=/ *go\d+/.test(l),s.className=u.apply(a,i)+(l?" "+l:""),t&&(s.ref=n);let d=e;return e[0]&&(d=s.as||e,delete s.as),f&&d[0]&&f(s),p(d,s)}return t?t(r):r}}var g=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),k=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},w="default",x=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return x(e,{type:+!!e.toasts.find(e=>e.id===i.id),toast:i});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},E=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},z=(e,t=w)=>{C[t]=x(C[t]||j,e),E.forEach(([e,a])=>{e===t&&a(C[t])})},T=e=>Object.keys(C).forEach(t=>z(e,t)),I=(e=w)=>t=>{z(t,e)},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=(e={},t=w)=>{let[a,i]=(0,r.useState)(C[t]||j),o=(0,r.useRef)(C[t]);(0,r.useEffect)(()=>(o.current!==C[t]&&i(C[t]),E.push([t,i]),()=>{let e=E.findIndex(([e])=>e===t);e>-1&&E.splice(e,1)}),[t]);let n=a.toasts.map(t=>{var a,i,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:n}},S=e=>(t,a)=>{let i,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||v()}))(t,e,a);return I(r.toasterId||(i=r.id,Object.keys(C).find(e=>C[e].toasts.some(e=>e.id===i))))({type:2,toast:r}),r.id},O=(e,t)=>S("blank")(e,t);O.error=S("error"),O.success=S("success"),O.loading=S("loading"),O.custom=S("custom"),O.dismiss=(e,t)=>{let a={type:3,toastId:e};t?I(t)(a):T(a)},O.dismissAll=e=>O.dismiss(void 0,e),O.remove=(e,t)=>{let a={type:4,toastId:e};t?I(t)(a):T(a)},O.removeAll=e=>O.remove(void 0,e),O.promise=(e,t,a)=>{let i=O.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?g(t.success,e):void 0;return r?O.success(r,{id:i,...a,...null==a?void 0:a.success}):O.dismiss(i),e}).catch(e=>{let r=t.error?g(t.error,e):void 0;r?O.error(r,{id:i,...a,...null==a?void 0:a.error}):O.dismiss(i)}),e};var $=1e3,F=(e,t="default")=>{let{toasts:a,pausedAt:i}=A(e,t),o=(0,r.useRef)(new Map).current,n=(0,r.useCallback)((e,t=$)=>{if(o.has(e))return;let a=setTimeout(()=>{o.delete(e),s({type:4,toastId:e})},t);o.set(e,a)},[]);(0,r.useEffect)(()=>{if(i)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let i=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(i<0){a.visible&&O.dismiss(a.id);return}return setTimeout(()=>O.dismiss(a.id,t),i)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,i,t]);let s=(0,r.useCallback)(I(t),[t]),l=(0,r.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),d=(0,r.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),c=(0,r.useCallback)(()=>{i&&s({type:6,time:Date.now()})},[i,s]),m=(0,r.useCallback)((e,t)=>{let{reverseOrder:i=!1,gutter:r=8,defaultPosition:o}=t||{},n=a.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,r.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[a,n]),{toasts:a,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:m}}},L=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,N=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${N} 1s linear infinite;
`,H=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=b("div")`
  position: absolute;
`,V=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return void 0!==t?"string"==typeof t?r.createElement(W,null,t):t:"blank"===a?null:r.createElement(V,null,r.createElement(_,{...i}),"loading"!==a&&r.createElement(R,null,"error"===a?r.createElement(B,{...i}):r.createElement(U,{...i})))},q=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=r.memo(({toast:e,position:t,style:a,children:i})=>{let o=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[i,r]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(G,{toast:e}),s=r.createElement(J,{...e.ariaProps},g(e.message,e));return r.createElement(q,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof i?i({icon:n,message:s}):r.createElement(r.Fragment,null,n,s))});i=r.createElement,d.p=void 0,p=i,y=void 0,f=void 0;var Z=({id:e,className:t,style:a,onHeightUpdate:i,children:o})=>{let n=r.useCallback(t=>{if(t){let a=()=>{i(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return r.createElement("div",{ref:n,className:t,style:a},o)},X=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:o,toasterId:n,containerStyle:s,containerClassName:l})=>{let{toasts:d,handlers:c}=F(a,n);return r.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let n,s,l=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:i,defaultPosition:t}),m=(n=l.includes("top"),s=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...s});return r.createElement(Z,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?X:"",style:m},"custom"===a.type?g(a.message,a):o?o(a):r.createElement(Q,{toast:a,position:l}))}))};e.s(["CheckmarkIcon",()=>U,"ErrorIcon",()=>B,"LoaderIcon",()=>_,"ToastBar",()=>Q,"ToastIcon",()=>G,"Toaster",()=>ee,"default",()=>O,"resolveValue",()=>g,"toast",()=>O,"useToaster",()=>F,"useToasterStore",()=>A],5766)},8437,e=>{"use strict";var t=e.i(71645),a=e.i(23754);function i(){let e=(0,a.useClientLocale)();return(0,t.useEffect)(()=>{document.documentElement.lang=e},[e]),null}e.s(["default",()=>i])},86648,e=>{e.v(e=>Promise.resolve().then(()=>e(32451)))},72389,e=>{e.v(e=>Promise.resolve().then(()=>e(70740)))}]);