//Displying current date and time Using moment.js
var dateTime = moment().format('dddd, MMMM Do - h:mm:ss a');
$('#current').text(dateTime);
// console.log(dateTime);
//for each method to loop over each time block and display the colors
function workDay() {
    var hourNow = moment().hour(); //displaying the current hour
    $(".time-block").each(function() {//targetting the class timeblock which is common in each div
        var Time = $(this).attr("id").split("-")[1];//It will return the string "hour-9" and soon.we will remove the dash using split()method and pull the index 1.
        console.log (Time);
        //Adding and Updating class past, present and future.
        if(Time < hourNow) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if(Time == hourNow){
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }   
    });}
    workDay();
    //Event Listener assigned to Save Button   
    $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".des").val().trim();//grabbing the des class from sibling textarea html element 
        console.log(text);
        var value = $(this).parent().attr("id");
        console.log(value);
        localStorage.setItem(value,text);//saving the data into local storage using set item method
     });
     
    //Retrieving the stored data from local storage 
    //https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
    function displayData(){
    $("#hour-8 .des").val(localStorage.getItem("hour-8"));
    $("#hour-9 .des").val(localStorage.getItem("hour-9"));
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