import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as y}from"./assets/vendor-BbbuE1sJ.js";let a;const t=document.querySelector("button"),d=document.querySelector("#datetime-picker");t.style.backgroundColor="grey";t.disabled=!0;const s=()=>{t.disabled===!0?t.style.backgroundColor="grey":t.style.backgroundColor=""},h=()=>{a<new Date?(y.show({title:"Warning",message:"Please choose a date in the future",color:"red",position:"topCenter"}),t.disabled=!0,s()):(t.disabled=!1,s())},r=e=>e.padStart(2,"0"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],h()}};m("#datetime-picker",f);function g(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:l,seconds:u}}const S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");t.addEventListener("click",()=>{const e=setInterval(()=>{d.disabled=!0,t.disabled=!0,s();let n=a-Date.now(),o=g(n);console.log(n),S.textContent=r(o.days.toString()),b.textContent=r(o.hours.toString()),p.textContent=r(o.minutes.toString()),C.textContent=r(o.seconds.toString()),n<1e3&&(clearInterval(e),d.disabled=!1)},1e3)});
//# sourceMappingURL=1-timer.js.map
