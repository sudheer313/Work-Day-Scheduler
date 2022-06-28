//Displying current date and time Using moment.js
var dateTime = moment().format('dddd, MMMM Do - h:mm:ss a');
$('#current').html(dateTime);

//Event Listener assigned to Save Button   
$(".saveBtn").on("click",function(){
    var text = $(this).siblings(".des").val();//calling the des class from sibling textarea html element 
    var value = $(this).parent().attr("id");
    localStorage.setItem(value,text);//Using setItem method storing value into local Storage
 });
//for each method to loop over each time block and display the colors
function workDay() {
    var hourNow = moment().hour(); //displaying the current hour
    $(".time-block").each(function() {//targetting the class timeblock which is common in each div
        // var Time = parseInt($(this).attr("id").split("hour")[1]);
        var Time = $(this).attr("id").split("-")[1];//It will return the string "hour-9" and soon.we will remove the dash using split()method and pull the index 1.
    
        //Adding and Updating class past, present and future.
        if(Time < hourNow) {
            $(this).addClass("past"); //this checking current time to addclass
            $(this).removeClass("present"); //this is assigned Time
            $(this).removeClass("future");
        }
        else if(Time == hourNow){
            $(this).removeClass("past");  //this checking current time to addclass
            $(this).addClass("present");//this is assigned Time
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");  //this checking current time to addclass
            $(this).removeClass("present");//this is assigned Time
            $(this).addClass("future");
        }   
    });}
    workDay();
    
     
    //Retrieving the stored data from local storage 
    //https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
    function displayData(){
    $("#hour-8  .des").val(localStorage.getItem("hour-8")); //get item gets data from local storage
    $("#hour-9  .des").val(localStorage.getItem("hour-9"));
    $("#hour-10 .des").val(localStorage.getItem("hour-10"));
    $("#hour-11 .des").val(localStorage.getItem("hour-11"));
    $("#hour-12 .des").val(localStorage.getItem("hour-12"));
    $("#hour-13 .des").val(localStorage.getItem("hour-13"));
    $("#hour-14 .des").val(localStorage.getItem("hour-14"));
    $("#hour-15 .des").val(localStorage.getItem("hour-15"));
    $("#hour-16 .des").val(localStorage.getItem("hour-16"));
    $("#hour-17 .des").val(localStorage.getItem("hour-17"));
    $("#hour-18 .des").val(localStorage.getItem("hour-18"));
    };
    displayData();