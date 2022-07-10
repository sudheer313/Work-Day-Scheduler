var dateTime = moment().format("MMM Do YY"); //https://momentjs.com/
$("#current").html(dateTime);

var time1 = document.querySelector(".time-block");
var saveBtn = document.querySelectorAll("button");
var textarea = document.querySelectorAll("#textarea");
var now = moment().hour();//current time
var time = parseInt(time1.innerText.split("")[0]);//blocktime
function blockColor() {
    if (time<now){
        textarea.style.backgroundColour="#FF5733";
    }else
    textarea.style.backgroundColour="#33FF57";
    blockColor();
}

