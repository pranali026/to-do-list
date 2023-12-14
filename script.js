
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");

        var li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskList = document.getElementById("task-list");
    var li = button.parentElement;
    taskList.removeChild(li);
}
