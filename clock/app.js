window.addEventListener("DOMcontentLoaded",showtime());

function showtime(){
    let date = new Date ();
    // console.log(date.setTime(500))

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    

if (h==0){
    h=12;
}

if(h>12){
    h=h-12;
    session="PM";
}

if (h<10){
    h='0' + h;
}
if (m<10){
    m='0'+m;
}
if (s<10){
    s='0'+s;
}

const time =` ${h}:${m}<small>:${s}|${session}</small>`;
// console.log(time)
document.getElementById("clock").innerHTML=time;

setTimeout(showtime,1000)

// background 

let  bg;
let color;

const statusW = "Z K";
const status=document.getElementById("status");

if (h<8 && session==="AM"){
    bg = "url('images/morning.jpeg')";
    status.innerHTML = `Good Morning ${statusW}`;
} else if (h<12 && session==="AM"){
    bg = "url('images/afternoon.jpg')";
    status.innerHTML = `Good day ${statusW}`;
} else if (h<6 && session==="PM"){
    bg = "url('images/evening.jpg')";
    status.innerHTML = `EVENING ${statusW}`;
} 
else if (h<12 && session==="AM"){
    bg = "url('images/night.jpg')";
    status.innerHTML = `NIGHT ${statusW}`;
    color = white;

}
else {
    bg = "url('images/midnight.jpg')";
    status.innerHTML = `MIDNIGHT ${statusW}`;
}

const body=document.querySelector("body");
body.style.background=`${bg} center/cover`


}
    