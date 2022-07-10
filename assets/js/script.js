var dateTime = moment().format("MMM Do YY"); //https://momentjs.com/
$("#current").html(dateTime);
var time1 = document.querySelector(".time-block");
var saveBtn = document.querySelectorAll("button");
//var textarea = $("textarea");
var now = moment().hour();//current time
var time = parseInt(time1.innerText.split("")[0]);//blocktime
console.log(time)
console.log(now)
function blockColor() {
    $('.time-block').each(function ()
    {
  var textarea = $(this).children('.textValue')
   if (time == now) {
      { textarea.addClass('present');}
   } else if (time>now)
    { textarea.addClass('future');
}else
{ textarea.addClass('past')};
   })
}


blockColor();