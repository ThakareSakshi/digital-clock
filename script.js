let digital_clock=document.querySelector(".digital-clock");


let timer=setInterval(() => {
    let newTime=new Date();

 let hour=newTime.getHours();
 let timeZone="AM";
 if(hour>=12){
    timeZone="PM";
 }
 if(hour>=12){
    hour=hour-12;
 }
    digital_clock.innerHTML=`
    <span class="time-container">
       
       <span> ${hour.toString().padStart(2,"0")} </span>
       <span class="text">Hours</span>

    </span>
    <span class="time-container">
       
       <span>${newTime.getMinutes().toString().padStart(2,"0")}</span>
       <span class="text">Min</span>
    </span>
    <span class="time-container">
       
       <span>${newTime.getSeconds().toString().padStart(2,"0")}</span>
       <span class="text">Sec</span>

    </span>
    <span class="time-container"><span>${timeZone}</span></span>`;
   
}, 1000);
