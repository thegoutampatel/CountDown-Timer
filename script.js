const endDate = "01 December 2023 01:37 AM";
document.getElementById("end-date").innerText = endDate;

//fetch all input tags
const inputs = document.querySelectorAll("input");

function clock(){

    //date given by me
    const end = new Date(endDate);
    //current date according to our system
    const now = new Date();
    //cal milisec btw current date and given date and convert into sec
    const diff = (end - now)/1000;
    if(diff<0){
        return;
    }
    //convert into days and put in input[0] as value
    inputs[0].value = Math.floor(diff / 3600 /24);
    //Remaing Hours 
    inputs[1].value = Math.floor(diff/3600)%24;
    //Remaing Min
    inputs[2].value = Math.floor(diff/60)%60;
    //Remaing Sec
    inputs[3].value = Math.floor(diff) % 60;
}

//setInterval function call clock function every sec
setInterval(()=>{
    clock()
},1000)