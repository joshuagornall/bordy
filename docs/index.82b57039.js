function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequireae31;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequireae31=r),(0,r.register)("4SSe9",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("4SSe9").register(new URL("",import.meta.url).toString(),JSON.parse('["4ZZJg","index.82b57039.js","jDyA5","1.6fdf6571.png","hd9kQ","2.e3c532bb.png","7CZw5","4.b7f0690e.png"]'));var l={};l=new URL("1.6fdf6571.png",import.meta.url).toString();var i={};i=new URL("2.e3c532bb.png",import.meta.url).toString();var a={};a=new URL("4.b7f0690e.png",import.meta.url).toString();var d={},c={};c=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}};var s={"text/plain":"Text","text/html":"Url",default:"Text"};function u(e,t){let n=t.reduce((e,t)=>e[t],e);return"number"==typeof n?n:0}d=function(e,t){var n,o,r,l,i,a,d,u,f=!1;t||(t={}),r=t.debug||!1;try{if(i=c(),a=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=s[t.format]||s.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),a.selectNodeContents(u),d.addRange(a),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(i){r&&console.error("unable to copy using execCommand: ",i),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(i){r&&console.error("unable to copy using clipboardData: ",i),r&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,o),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(a):d.removeAllRanges()),u&&document.body.removeChild(u),i()}return f};const f=document.getElementById("target"),g=document.getElementById("editor"),m=document.getElementById("guide"),p=document.getElementById("render"),h=g.getContext("2d"),y=m.getContext("2d"),v=p.getContext("2d");if(!h||!v||!y)throw Error("Canvas context could not be retrieved");function w(){h.clearRect(0,0,g.width,g.height)}function E(e,t){v.fill();for(let n=0;n<3;n++)for(let o=0;o<3;o++)for(let r=0;r<7;r++)for(let l=0;l<7;l++){let i=1===u(e,[n,o,r,l])?N.paintColor:"#fff0";h.fillStyle=i,v.fillStyle=i;let a=(7*n+r)*t,d=(7*o+l)*t;if(!(1===n&&1===o)){v.clearRect(a,d,t,t),v.fillRect(a,d,t,t);let e=16*a/t,n=16*d/t;h.fillRect(e+1,n+1,15,15)}}x(e,t)}function b(e,t){let n=x(e,t),o=document.getElementById("border-style");if(o&&o.remove(),(o=document.createElement("style")).id="border-style",document.head.appendChild(o),!o.sheet)throw Error("Style sheet could not be retrieved");let r=7*t,l=`.bordy {
    border-image:  url("${n}") ${r} /  ${r}px / 0 round;
    border-width:  ${r}px;
    border-style:  solid;
}`;o.sheet.insertRule(l),f.textContent=l}function x(e,t){let n=`<svg 
      width="${7*t*3}px"
      height="${7*t*3}px"
      viewBox="0 0 ${7*t*3} ${7*t*3}" 
      fill="${N.paintColor}"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
      >`;for(let o=0;o<3;o++)for(let r=0;r<3;r++)for(let l=0;l<7;l++)for(let i=0;i<7;i++){let a=u(e,[o,r,l,i]),d=(7*o+l)*t,c=(7*r+i)*t;(1!=o||1!=r)&&1==a&&(n+=`<rect x="${d}" y="${c}" width="${t}px" height="${t}px"/>`)}return"data:image/svg+xml,"+encodeURIComponent(n+="</svg>").replace(/'/g,"%27").replace(/"/g,"%22")}function C(){f.setAttribute("data-after","[Click to copy]")}v.imageSmoothingEnabled=!1,f.addEventListener("click",function(){let t=f.textContent||"";e(d)(t,{message:"Press #{key} to copy css"}),f.setAttribute("data-after","Copied to your clipboard!"),f.classList.remove("flash"),window.setTimeout(()=>{f.classList.add("flash")},1),window.setTimeout(C,2500)}),C();const S=document.getElementById("pen"),L=document.getElementById("eraser"),R=document.getElementById("symmetry"),k=document.getElementById("undo"),D=document.getElementById("scale"),T=document.getElementById("color"),A=document.getElementById("editor-frame"),I=document.getElementById("editor"),B=document.getElementById("guide"),_=document.getElementById("render");I.width=336,I.height=336,B.width=336,B.height=336;let H=2;const U=[1,2,4],$=[e(l),e(i),e(a)];let P=U[H],M=0;_.width=7*P*3,_.height=7*P*3,D.addEventListener("click",()=>{H=(H+1)%U.length,D.src=$[H],P=U[H],_.width=7*P*3,_.height=7*P*3,E(Y,P),b(Y,P),O()});const N={paintColor:"#000000"};function O(){A.style.height=`${I.getBoundingClientRect().width}px`}T?T.addEventListener("input",e=>{let t=e.target;N.paintColor=t.value,E(Y,P),b(Y,P)}):console.error("Color picker element not found"),document.addEventListener("DOMContentLoaded",O),window.addEventListener("resize",O);let F=!1,X=!1,J=!0;R.addEventListener("click",()=>{J=!J,R.classList.toggle("selected")}),L.addEventListener("click",()=>{X=!0,L.classList.add("selected"),S.classList.remove("selected")}),S.addEventListener("click",()=>{X=!1,S.classList.add("selected"),L.classList.remove("selected")});let Y=Array.from({length:3},()=>Array.from({length:3},()=>Array.from({length:7},()=>Array(7).fill(0)))),j=[JSON.stringify(Y)];function Z(){let e=JSON.stringify(Y);e!==j[j.length-1]&&(j.push(e),j.length>50&&j.shift(),k.classList.add("selected"))}function q(e,t=!1,n=!1){let{left:o,top:r,width:l,height:i}=I.getBoundingClientRect(),a=e.clientX-o,d=e.clientY-r,c=a/l*I.width,s=d/i*I.height,f=Math.floor(c/16),g=Math.floor(s/16),m=J?function([e,t],n=1){return[[e,t],[20-t,e],[20-e,20-t],[t,20-e]]}([f,g]):[[f,g]];w(),m.forEach(([e,o])=>{var r,l;let i=Math.floor(e/7),a=Math.floor(o/7),d=[i,a,e%7,o%7];if(i<0||i>2||a<0||a>2)return;if(n){let e,t;r=Y,e=7*d[0]+d[2],t=7*d[1]+d[3],h.fillStyle=(u(r,d),"#dde"),(1!=d[0]||1!=d[1])&&h.fillRect(16*e+0,16*t+0,16,16)}let c=u(Y,d);t||(c=0),X&&(c=1),l=c,F&&function(e,t,n=1){let o=e;for(let e=0;e<t.length-1;e++)o=o[t[e]];if(Array.isArray(o)&&"number"==typeof t[t.length-1])o[t[t.length-1]]=n;else throw Error("Invalid location or target array")}(Y,d,1-l)}),E(Y,P),setTimeout(()=>b(Y,P),0)}k.addEventListener("click",e=>{(function(){j.pop();let e=j[j.length-1];e&&(Y=JSON.parse(e),w(),E(Y,P),b(Y,P))})(),j.length<2&&k.classList.remove("selected"),e.preventDefault()}),function(){for(let e=1;e<3;e++){y.strokeStyle="#33f",y.lineWidth=.5;let t=e*g.width/3;y.beginPath(),y.moveTo(t,0),y.lineTo(t,g.height),y.stroke(),y.beginPath(),y.moveTo(0,t),y.lineTo(g.height,t),y.stroke()}for(let e=0;e<21;e++){y.strokeStyle="#ccc";let t=e*g.width/21;y.beginPath(),y.moveTo(t,0),y.lineTo(t,g.height),y.stroke(),y.beginPath(),y.moveTo(0,t),y.lineTo(g.height,t),y.stroke()}let e=g.width/3;y.clearRect(e+1,e+1,e-2,e-2),y.beginPath(),y.moveTo(1*e,2*e),y.lineTo(2*e,1*e),y.stroke(),y.beginPath(),y.moveTo(1*e,1*e),y.lineTo(2*e,2*e),y.stroke()}(),E(Y,P),b(Y,P),I.addEventListener("mousedown",e=>{F=!0,q(e,!0)}),I.addEventListener("mousemove",e=>{q(e,!1,!0)}),I.addEventListener("mouseout",()=>{w(),E(Y,P)}),window.addEventListener("mousedown",()=>{F=!0}),window.addEventListener("mouseup",()=>{F=!1,Z()}),I.addEventListener("touchend",()=>{F=!1,Z()}),I.addEventListener("touchstart",e=>{F=!0,e.preventDefault(),[...e.targetTouches].forEach(e=>{q({clientX:e.clientX,clientY:e.clientY})})}),I.addEventListener("touchmove",e=>{e.preventDefault(),F=!0,[...e.targetTouches].forEach(e=>{q({clientX:e.clientX,clientY:e.clientY})})}),window.addEventListener("touchend",e=>{e.timeStamp-M<=500&&(e.preventDefault(),e.target.click()),F=!1,M=e.timeStamp});
//# sourceMappingURL=index.82b57039.js.map