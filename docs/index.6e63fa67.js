!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},l=n.parcelRequireae31;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},n.parcelRequireae31=l);var i=l.register;i("lGKbD",function(t,n){e(t.exports,"register",function(){return o},function(e){return o=e});var o,r=new Map;o=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("17QCl",function(t,n){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});var o,r={};o=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),l("lGKbD").register(l("17QCl").getBundleURL("e0M7J"),JSON.parse('["e0M7J","index.6e63fa67.js","hNqs3","4.b7f0690e.png","6dFNL","1.6fdf6571.png","gAros","2.e3c532bb.png"]'));var a={};a=l("17QCl").getBundleURL("e0M7J")+"1.6fdf6571.png";var c={};c=l("17QCl").getBundleURL("e0M7J")+"2.e3c532bb.png";var d={};d=l("17QCl").getBundleURL("e0M7J")+"4.b7f0690e.png";var s={},u={};u=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}};var f={"text/plain":"Text","text/html":"Url",default:"Text"};function g(e,t){let n=t.reduce((e,t)=>e[t],e);return"number"==typeof n?n:0}s=function(e,t){var n,o,r,l,i,a,c,d,s=!1;t||(t={}),r=t.debug||!1;try{if(i=u(),a=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=f[t.format]||f.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),a.selectNodeContents(d),c.addRange(a),!document.execCommand("copy"))throw Error("copy command was unsuccessful");s=!0}catch(i){r&&console.error("unable to copy using execCommand: ",i),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(i){r&&console.error("unable to copy using clipboardData: ",i),r&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,o),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(a):c.removeAllRanges()),d&&document.body.removeChild(d),i()}return s};let m=document.getElementById("target"),p=document.getElementById("editor"),h=document.getElementById("guide"),y=document.getElementById("render"),v=p.getContext("2d"),w=h.getContext("2d"),E=y.getContext("2d");if(!v||!E||!w)throw Error("Canvas context could not be retrieved");function b(){v.clearRect(0,0,p.width,p.height)}function C(e,t){E.fill();for(let n=0;n<3;n++)for(let o=0;o<3;o++)for(let r=0;r<7;r++)for(let l=0;l<7;l++){let i=1===g(e,[n,o,r,l])?J.paintColor:"#fff0";v.fillStyle=i,E.fillStyle=i;let a=(7*n+r)*t,c=(7*o+l)*t;if(!(1===n&&1===o)){E.clearRect(a,c,t,t),E.fillRect(a,c,t,t);let e=16*a/t,n=16*c/t;v.fillRect(e+1,n+1,15,15)}}L(e,t)}function x(e,t){let n=L(e,t),o=document.getElementById("border-style");if(o&&o.remove(),(o=document.createElement("style")).id="border-style",document.head.appendChild(o),!o.sheet)throw Error("Style sheet could not be retrieved");let r=7*t,l=`.bordy {
    border-image:  url("${n}") ${r} /  ${r}px / 0 round;
    border-width:  ${r}px;
    border-style:  solid;
}`;o.sheet.insertRule(l),m.textContent=l}function L(e,t){let n=`<svg 
      width="${7*t*3}px"
      height="${7*t*3}px"
      viewBox="0 0 ${7*t*3} ${7*t*3}" 
      fill="${J.paintColor}"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      >`;for(let o=0;o<3;o++)for(let r=0;r<3;r++)for(let l=0;l<7;l++)for(let i=0;i<7;i++){let a=g(e,[o,r,l,i]),c=(7*o+l)*t,d=(7*r+i)*t;(1!=o||1!=r)&&1==a&&(n+=`<rect x="${c}" y="${d}" width="${t}px" height="${t}px"/>`)}return"data:image/svg+xml,"+encodeURIComponent(n+="</svg>").replace(/'/g,"%27").replace(/"/g,"%22")}function R(){m.setAttribute("data-after","[Click to copy]")}E.imageSmoothingEnabled=!1,m.addEventListener("click",function(){let e=m.textContent||"";t(s)(e,{message:"Press #{key} to copy css"}),m.setAttribute("data-after","Copied to your clipboard!"),m.classList.remove("flash"),window.setTimeout(()=>{m.classList.add("flash")},1),window.setTimeout(R,2500)}),R();let S=document.getElementById("pen"),D=document.getElementById("eraser"),k=document.getElementById("symmetry"),T=document.getElementById("undo"),A=document.getElementById("scale"),B=document.getElementById("color"),I=document.getElementById("editor-frame"),_=document.getElementById("editor"),$=document.getElementById("guide"),H=document.getElementById("render");_.width=336,_.height=336,$.width=336,$.height=336;let U=2,M=[1,2,4],N=[t(a),t(c),t(d)],P=M[U],F=0;H.width=7*P*3,H.height=7*P*3,A.addEventListener("click",()=>{U=(U+1)%M.length,A.src=N[U],P=M[U],H.width=7*P*3,H.height=7*P*3,C(z,P),x(z,P),O()});let J={paintColor:"#000000"};function O(){I.style.height=`${_.getBoundingClientRect().width}px`}B?B.addEventListener("input",e=>{let t=e.target;J.paintColor=t.value,C(z,P),x(z,P)}):console.error("Color picker element not found"),document.addEventListener("DOMContentLoaded",O),window.addEventListener("resize",O);let X=!1,Q=!1,Y=!0;k.addEventListener("click",()=>{Y=!Y,k.classList.toggle("selected")}),D.addEventListener("click",()=>{Q=!0,D.classList.add("selected"),S.classList.remove("selected")}),S.addEventListener("click",()=>{Q=!1,S.classList.add("selected"),D.classList.remove("selected")});let z=Array.from({length:3},()=>Array.from({length:3},()=>Array.from({length:7},()=>Array(7).fill(0)))),q=[JSON.stringify(z)];function j(){let e=JSON.stringify(z);e!==q[q.length-1]&&(q.push(e),q.length>50&&q.shift(),T.classList.add("selected"))}function G(e,t=!1,n=!1){let{left:o,top:r,width:l,height:i}=_.getBoundingClientRect(),a=e.clientX-o,c=e.clientY-r,d=a/l*_.width,s=c/i*_.height,u=Math.floor(d/16),f=Math.floor(s/16),m=Y?function([e,t],n=1){return[[e,t],[20-t,e],[20-e,20-t],[t,20-e]]}([u,f]):[[u,f]];b(),m.forEach(([e,o])=>{var r,l;let i=Math.floor(e/7),a=Math.floor(o/7),c=[i,a,e%7,o%7];if(i<0||i>2||a<0||a>2)return;if(n){let e,t;r=z,e=7*c[0]+c[2],t=7*c[1]+c[3],v.fillStyle=(g(r,c),"#dde"),(1!=c[0]||1!=c[1])&&v.fillRect(16*e+0,16*t+0,16,16)}let d=g(z,c);t||(d=0),Q&&(d=1),l=d,X&&function(e,t,n=1){let o=e;for(let e=0;e<t.length-1;e++)o=o[t[e]];if(Array.isArray(o)&&"number"==typeof t[t.length-1])o[t[t.length-1]]=n;else throw Error("Invalid location or target array")}(z,c,1-l)}),C(z,P),setTimeout(()=>x(z,P),0)}T.addEventListener("click",e=>{(function(){q.pop();let e=q[q.length-1];e&&(z=JSON.parse(e),b(),C(z,P),x(z,P))})(),q.length<2&&T.classList.remove("selected"),e.preventDefault()}),function(){for(let e=1;e<3;e++){w.strokeStyle="#33f",w.lineWidth=.5;let t=e*p.width/3;w.beginPath(),w.moveTo(t,0),w.lineTo(t,p.height),w.stroke(),w.beginPath(),w.moveTo(0,t),w.lineTo(p.height,t),w.stroke()}for(let e=0;e<21;e++){w.strokeStyle="#ccc";let t=e*p.width/21;w.beginPath(),w.moveTo(t,0),w.lineTo(t,p.height),w.stroke(),w.beginPath(),w.moveTo(0,t),w.lineTo(p.height,t),w.stroke()}let e=p.width/3;w.clearRect(e+1,e+1,e-2,e-2),w.beginPath(),w.moveTo(1*e,2*e),w.lineTo(2*e,1*e),w.stroke(),w.beginPath(),w.moveTo(1*e,1*e),w.lineTo(2*e,2*e),w.stroke()}(),C(z,P),x(z,P),_.addEventListener("mousedown",e=>{X=!0,G(e,!0)}),_.addEventListener("mousemove",e=>{G(e,!1,!0)}),_.addEventListener("mouseout",()=>{b(),C(z,P)}),window.addEventListener("mousedown",()=>{X=!0}),window.addEventListener("mouseup",()=>{X=!1,j()}),_.addEventListener("touchend",()=>{X=!1,j()}),_.addEventListener("touchstart",e=>{X=!0,e.preventDefault(),[...e.targetTouches].forEach(e=>{G({clientX:e.clientX,clientY:e.clientY})})}),_.addEventListener("touchmove",e=>{e.preventDefault(),X=!0,[...e.targetTouches].forEach(e=>{G({clientX:e.clientX,clientY:e.clientY})})}),window.addEventListener("touchend",e=>{e.timeStamp-F<=500&&(e.preventDefault(),e.target.click()),X=!1,F=e.timeStamp})}();
//# sourceMappingURL=index.6e63fa67.js.map
