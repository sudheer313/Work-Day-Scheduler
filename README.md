## Work-Day-Scheduler

## Decsription of the project
A simple calendar application that allows a user to save events for each hour of the day. It runs in the browser and feature dynamically updated HTML and CSS powered by jQuery. My Time-Blocks are from 8 AM -6 PM.

## Links

[Github URL here](https://github.com/sudheer313/Work-Day-Scheduler)<br>
[Live webpage URL](https://sudheer313.github.io/Work-Day-Scheduler/)<br>

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

```

### Header displays the current day, date and time

<img src =./assets/images/workDay.1.png>

### Color-coded each time-block (PAST - Silver, PRESENT - RED, FUTURE - GREEN)

<img src =./assets/images/workDay.2.png>

### made my application resposive by adding @media screen and (max-width: 768px), screen and (max-width: 575px)

<img src =./assets/images/workDay.3.png>

### Function displayData() will retrieve the data from the local storage and display it on the page.data will still persists after refreshing the page.

```
function displayData(){
    $("#hour-8 .description") .val(localStorage.getItem("hour-9"));
    $("#hour-9 .description") .val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    };
    displayData()
```
## Built with

- HTMLs
- CSS
- Jquery
- Bootstrap. 

## Author

@Sudheer kandula
