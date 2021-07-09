var type = 1;


document.getElementById("time-type-1").addEventListener("click", twelve_hour);
document.getElementById("time-type-2").addEventListener("click", twentyFour_hour);

function twelve_hour() {
	type = 1;
    
   
}
function twentyFour_hour() {
	type = 2;  
}


function oras() {
    let date = new Date();
    
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    let zone = date.getTimezoneOffset()/-60;

    
    // console.log(type);
    // console.log(date.getUTCDate());

    if(type==1){
        if(hrs==0){
            hrs=12
        }
        if(hrs>12){
            hrs -= 12;
            period = "PM";
        }
        document.getElementById("time_period").style.display = "block";
    }
    else{
        document.getElementById("time_period").style.display = "none";
    }
    
    
 
    
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
  
    let time = `${hrs}:${mins}:${secs}`;
   
    document.getElementById("time").innerHTML = time;
    document.getElementById("time_period").innerHTML = period;
    document.getElementById("time_zone").innerHTML = `GMT +${zone}:00`;
    let eme = date.getUTCDay();
    console.log(eme);
  
    
  }



 function color(num){

    if(num==1){
        document.getElementById("time").style.color = "white";
        document.getElementById("time_period").style.color = "white";
        document.getElementById("time_zone").style.color = "white";
    }
    if(num==2){
        document.getElementById("time").style.color = "#f0fc03";
        document.getElementById("time_period").style.color = "#f0fc03";
        document.getElementById("time_zone").style.color = "#f0fc03";
    }
    if(num==3){
        document.getElementById("time").style.color = "#5efc03";
        document.getElementById("time_period").style.color = "#5efc03";
        document.getElementById("time_zone").style.color = "#5efc03";
    }


 }



setInterval(oras, 250);

function getTimezoneOffset(timeZone) {
    const now = new Date();
    const tzString = now.toLocaleString('en-US', { timeZone });
    const localString = now.toLocaleString('en-US');
    const diff = (Date.parse(localString) - Date.parse(tzString)) / 3600000;
    const offset = diff + now.getTimezoneOffset() / 60;
    
    return -offset;
  }
  const offset = getTimezoneOffset('Asia/Dubai');

console.log(offset); // output: -10





