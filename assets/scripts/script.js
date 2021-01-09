$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  //Gets local storage of each task and sets text area

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

  //Saves text area of each box on any click

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

  //calls Loading function

  loading();

  //Sets color of each task based on time

  $(".col-md-10").each(function () {
    var taskTime = parseInt($(this).attr("data-value"));
    var actualTime = moment().format("H");

    if (taskTime < actualTime) {
      $(this).addClass("past");
    }

    if (taskTime > actualTime) {
      $(this).addClass("future");
    }

    if (taskTime == actualTime) {
      $(this).addClass("present");
    }
  });
});
