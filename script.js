document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed");
    });

    const textNode = document.createElement("span");
    textNode.className = "task-text"; // Added class for styling
    textNode.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
