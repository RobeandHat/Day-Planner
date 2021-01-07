//1. Display current date and time at the top of the screen
//2. Create blocks with forms for each hour of the day
//2.5. 1 row 3 columns
//3. Create buttons for each block that saves the form content to local storage.
//4. Create functions to dynamically change the classes depending upon the current time.

// $('#task9').val() <--- Should pull string of text area

$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  function loading() {
    var task9 = localStorage.getItem("textarea9");
    $("#task9").text(task9);

    var task10 = localStorage.getItem("textarea10");
    $("#task10").text(task10);

    var task11 = localStorage.getItem("textarea11");
    $("#task11").text(task11);

    var task12 = localStorage.getItem("textarea12");
    $("#task12").text(task12);

    var task1 = localStorage.getItem("textarea1");
    $("#task1").text(task1);

    var task2 = localStorage.getItem("textarea2");
    $("#task2").text(task2);

    var task3 = localStorage.getItem("textarea3");
    $("#task3").text(task3);

    var task4 = localStorage.getItem("textarea4");
    $("#task4").text(task4);

    var task5 = localStorage.getItem("textarea5");
    $("#task5").text(task5);

    var task6 = localStorage.getItem("textarea6");
    $("#task6").text(task6);
  }

  $(".saveBtn").click(function () {
    var task9 = $("#task9").val();

    localStorage.setItem("textarea9", task9);

    var task10 = $("#task10").val();

    localStorage.setItem("textarea10", task10);

    var task11 = $("#task11").val();

    localStorage.setItem("textarea11", task11);

    var task12 = $("#task12").val();

    localStorage.setItem("textarea12", task12);

    var task1 = $("#task1").val();

    localStorage.setItem("textarea1", task1);

    var task2 = $("#task2").val();

    localStorage.setItem("textarea2", task2);

    var task3 = $("#task3").val();

    localStorage.setItem("textarea3", task3);

    var task4 = $("#task4").val();

    localStorage.setItem("textarea4", task4);

    var task5 = $("#task5").val();

    localStorage.setItem("textarea5", task5);

    var task6 = $("#task6").val();

    localStorage.setItem("textarea6", task6);
  });

  loading();
});
