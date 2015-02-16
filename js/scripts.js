$(function(){
  $("#toDoForm").submit(function(event){

    var inputTask = $("#task").val();

    var task = {description1: inputTask};

    $("#toDoList").append("<li><span class='toDo'>" + task.description1 + "</span></li>");

    $(".toDo").last().click(function(){
      $("#doneList").append("<li><span class='done'>" + task.description1 + "</span></li>");
      $(this).parent('li').remove();
    });


    event.preventDefault();
  });



});
