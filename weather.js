let option=document.querySelector("#degree");
let btnn=document.querySelector("#theme");
let units,degree;
let lat,long;
units="metric";
degree="°C";
let deg=document.querySelectorAll("#choice-2 li");
function openbtn(btn){
    if(btn.innerText=='Dark'){
    btn.innerText='light';
    document.body.classList.toggle("light");
}
else{
     btn.innerText='Dark';
    document.body.classList.remove("light");
}
}

function  openbtn2(btn) {
   let choice=btn.nextElementSibling;
  if(choice.style.display==''){
     choice.style.display='block';
  }
  else{
    choice.style.display='';
  }
}
  

      for(let selection of deg){
        selection.addEventListener("click",()=>{
            let text=selection.innerText;
            option.innerHTML=`${text}<i class="fa-solid fa-angle-down"></i>`;
            if(text=="°C"){
                units="metric";
                degree="°C";

            }
            else{
                units="imperial";
                degree="°F";
            }
               fn();
        });
      }
    

let search=document.querySelector("#search");
let loc=document.querySelector("#location");
let temp_f=document.querySelector("#temp");
let humid=document.querySelector("#humid");
let wind=document.querySelector("#wind");
let desc=document.querySelector('.desc');
let pressure=document.querySelector("#pressure");
let visibility=document.querySelector("#visibility");
let beloww=document.querySelector(".below");



const fn=()=>{
let prom=fetch(url1);
let resp=prom.then((res)=>{
      return res.json();
});
console.log(resp);
resp.then((data)=>{
    lat=data.results[0]['latitude'];
    long=data.results[0]['longitude'];
}).then(()=>{
let promise=fetch(url2);
let response=promise.then((res)=>{
    return res.json();
})
 console.log(response);
let data=response.then((data)=>{
    beloww.style.display="flex";
    loc.innerHTML=`<b>${data['name']}</b>`;
    temp_f.innerHTML=`feels like <b>${data['main']['feels_like']} ${degree}</b>`;
    humid.innerHTML=`<i class="fa-solid fa-droplet icon"></i><b>${data['main']['humidity']}%</b> Humidity`;
    wind.innerHTML=`<i class="fa-solid fa-wind icon"></i><b>${data['wind']['speed']} mph</b> WSW Wind`;
     pressure.innerHTML=`<i class="fa-solid fa-gauge icon"></i><b>${data['main']['pressure']} mb</b> Pressure`;
     visibility.innerHTML=`<i class="fa-regular fa-eye icon"></i><b>${data['visibility']} metres</b> Visibility`;
     let code=data.weather[0]['icon'];
        desc.innerHTML=`<i class="fa-solid fa-sun fc"  style="color:yellow"></i>&nbsp;<span style="font-size:2rem; font-weight:600;color:#fff">${data['main']['temp']} ${degree}</span><div class="text-a">${data.weather[0]['description']}</div>
         `;
         if(code=='09d' || code=='10d'|| code=='10n' || code=='09n')
            desc.innerHTML=`<i class="fa-solid fa-cloud-rain fc" style="color:lightblue"></i>&nbsp;<span style="font-size:2rem; font-weight:600;color:#fff">${data['main']['temp']} ${degree}</span><div class="text-a">${data.weather[0]['description']}</div>
         `;
});
})

}


    search.addEventListener("change",fn);

 //  }

 //theme and responsivness