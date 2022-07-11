var dateTime = moment().format("DD MMM YY HH:MM"); //https://momentjs.com/
$("#current").html(dateTime);
var time1 = document.querySelector(".time-block");
var saveBtn = document.querySelectorAll("button");

var now = moment().hour();//current time
var time = parseInt(time1.innerText.split("")[0]);//blocktime
console.log(time)
console.log(now)
function blockColor() {
    // loop over time blocks
    $('.time-block').each(function() {
        //this will get the time in interger format from time-block
        //referred from BCS help
      var textarea = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
          
      );
      // retrives datafrom local storage
      var preValue=localStorage.getItem(textarea);
      console.log(preValue);
      $(this).children('.des').val(preValue);
    if (textarea < now) {
        $(this).addClass('past');
        } else if (textarea === now) {
        $(this).removeClass('past');
         $(this).addClass('present');
        } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
        }
})
}
blockColor();
$('.saveBtn').click(function (event) {
  console.log("testing");
  var time = $(this).closest('.time-block').attr('id').split('-')[1];
console.log(time);
  // below for the textVal
var textVal=$(this).siblings('.des').val();
  
localStorage.setItem(time,textVal);

})