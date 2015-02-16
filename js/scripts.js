$(function(){
  $("#toDoForm").submit(function(event){

    var inputTask = $("#task").val();
    inputTask = inputTask[0].toUpperCase() + inputTask.slice(1);  

    if(inputTask){
      var task = {description1: inputTask};
      $("#toDoList").append("<li><span class='toDo'>" + task.description1 + "</span></li>");
    } else{
      alert("Please input a task")
    }

    $(".toDo").last().click(function(){
      $("#doneList").append("<li><span class='done'>" + task.description1 + "</span></li>");
      $(this).parent('li').remove();
    });

    $("#task").val("");

    event.preventDefault();
  });



});
