class TaskManager {
    constructor(cid=0){
        this._tasks = [];
        this.cid= cid;
    }

    addTask(name,desc,asn,dt,status){
        
        const newTask={
               id:this.cid++,
               TaskName:name,
               Description:desc,
               AssignedTo:asn,
               Date:dt,
               Status:status

        };
        this.tasks.push(newTask);// add the new task to the task array
        
    }
   get tasks(){
       return this._tasks;
       
   }


   
/*
const taskList = new TaskManager()
taskList.addTask("Task1", "Description1", "paramita", "05/02/2022", "new");
taskList.addTask("Task2", "Description2", "paramita2", "05/02/2022", "new");

console.log(taskList.tasks[1]);
*/