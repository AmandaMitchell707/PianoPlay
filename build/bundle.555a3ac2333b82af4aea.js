!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t){window.addEventListener("DOMContentLoaded",()=>{sessionStorage.setItem("voice","classic"),document.getElementById("voiceSelector").addEventListener("change",function(){let e=document.getElementById("voiceSelector").value;sessionStorage.setItem("voice",e)});let e=["classic","cello"];function t(e,t,n){let o=document.createElement("audio");return o.dataset.key=e,o.src=`assets/audio/${n}/${t}.mp3`,o}!function(n,o){let r=document.createElement("div");r.className="audio-tags";for(let a=0;a<n.length;a++)r.appendChild(t(n[a],o[a],e[0])),r.appendChild(t(n[a],o[a],e[1]));document.querySelector("body").appendChild(r)}([90,88,67,86,65,83,68,70,71,72,74,75,76,89,85,73,79,80,81,87,69,49,50,51,52,53,54,55,56,57,48],["2_f","2_g","2_a","2_b","3_c","3_d","3_e","3_f","3_g","3_a","3_b","4_c","4_d","4_e","4_f","4_g","4_a","4_b","2_fsharp","2_gsharp","2_asharp","3_csharp","3_dsharp","3_fsharp","3_gsharp","3_asharp","4_csharp","4_dsharp","4_fsharp","4_gsharp","4_asharp"]);let n={};function o(e){this.classList.remove("playing")}window.addEventListener("keydown",e=>{let t;t="classic"===sessionStorage.voice?document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[0]:document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[1];const o=document.querySelector(`.key[data-key="${e.keyCode}"]`);t&&(void 0==n[e.keyCode]||n[e.keyCode])&&(n[e.keyCode]=!1,t.currentTime=0,t.play(),o.classList.add("playing"))}),window.addEventListener("keyup",e=>{n[e.keyCode]=!0}),document.querySelectorAll(".key").forEach(e=>e.addEventListener("transitionend",o))})}});
//# sourceMappingURL=bundle.555a3ac2333b82af4aea.js.map