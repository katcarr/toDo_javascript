$(function(){
  $("#toDoForm").submit(function(event){

    var inputTask = $("#task").val();

    var task = {description1: inputTask};

    $("#toDoList").append("<li>" + task.description1 + "</li>");

    event.preventDefault();
  });
});
