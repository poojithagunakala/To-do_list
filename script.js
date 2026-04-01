document.addEventListener("DOMContentLoaded",loadTasks);
function addTask(){
    const input=
    document.getElementById("taskInput");
    const task=input.value.trim();
    if (task===""){
        alert("Please enter a task");
        return;
    }
    createTaskElement(task);
    saveTasks();
    input.value="";
}
function createTaskElement(taskText){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.textContent = taskText;
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="X";
    deleteBtn.onclick=function (){
        li.remove();
        saveTasks();
    };
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
}
function saveTasks(){
    const tasks = [];
    document.querySelectorAll("#taskList li span").forEach(span=>{
        tasks.push(span.textContent);
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function loadTasks(){
    const tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task=>{
        createTaskElement(task);
    });
}