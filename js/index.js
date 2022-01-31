
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("currentDate").innerHTML = "Today:"+" "+day +"/" +  month + "/" +  year;




// selecting form and adding eventhandler
const frm = document.querySelector("#newTaskForm");
frm.addEventListener("submit", function(e){

//grabbing the newTaskForm  data

const tname = document.querySelector("#newTaskNameInput");
const desc = document.querySelector("#newTaskDescription");
const asn = document.querySelector("#newTaskAssignedTo");
const dt = document.querySelector("#newTaskDueDate");
const st = document.querySelector("#status");
e.preventDefault();

})

    

//I am still working on it.


/*
const taskList = new TaskManager()
taskList.addTask(tname, "Description1", "paramita", "05/02/2022", "new");
taskList.addTask("Task2", "Description2", "paramita2", "05/02/2022", "new");

console.log(taskList.tasks[1]);
*/