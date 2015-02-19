$(function(){
  $("#listForm").submit(function(event) {
    event.preventDefault();
    var inputList = $("#list").val();
    inputList = inputList[0].toUpperCase() + inputList.slice(1);
    $("#lists").append("<li><span class='list'>" + inputList + "</span></li>");
    $("#list").val("");
  });





});
  // $("#toDoForm").submit(function(event){
  //
  //   var inputTask = $("#task").val();
  //   inputTask = inputTask[0].toUpperCase() + inputTask.slice(1);
  //
  //   if(inputTask){
  //     var task = {description1: inputTask};
  //     $("#toDoList").append("<li><span class='toDo'>" + task.description1 + "</span></li>");
  //   } else{
  //     alert("Please input a task")
  //   }
  //
  //   $(".toDo").last().click(function(){
  //     $("#doneList").append("<li><span class='done'>" + task.description1 + "</span></li>");
  //     $(this).parent('li').remove();
  //   });
  //
  //   $("#task").val("");
  //
  //   event.preventDefault();
  // });
