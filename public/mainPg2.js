function nouvelleTache(category) {
    let inputValue = document.getElementById("taskInput").value.trim();
    let dueDateValue = document.getElementById("dueDate").value;

    if (inputValue === '') {
        alert("You must write something");
        return;
    }

    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    let taskTextDiv = document.createElement("div");
    taskTextDiv.className = "taskText";
    taskTextDiv.textContent = inputValue;

    let taskDateDiv = document.createElement("div");
    taskDateDiv.className = "taskDate";
    taskDateDiv.textContent = "Due date: " + dueDateValue;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
        taskDiv.remove();
    };

    let editButton = document.createElement("button")
    editButton.textContent = "🛠️"
    editButton.onclick = function() {
        editTask(taskTextDiv)
    };

    let doneButton = document.createElement("button")
    doneButton.textContent = "❎"
    doneButton.onclick = function() {
        markDone(taskDiv)
    };

    let taskButtonsDiv = document.createElement("div");
    taskButtonsDiv.className = "taskButtons";
    taskButtonsDiv.appendChild(deleteButton);
    taskButtonsDiv.appendChild(editButton); 
    taskButtonsDiv.appendChild(doneButton); 

    taskDiv.appendChild(taskTextDiv);
    taskDiv.appendChild(taskDateDiv);
    taskDiv.appendChild(taskButtonsDiv);

    document.getElementById(`${category}Tasks`).appendChild(taskDiv);

    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";
}

document.querySelectorAll(".category-button").forEach(button => {
    button.addEventListener("click", function() {
        let category = this.dataset.category;
        nouvelleTache(category);
    });
});


function deleteTask(taskDiv) {
    taskDiv.remove();
}

function editTask(taskTextDiv) {
    let newTaskText = prompt("Edit task:", taskTextDiv.textContent);
    if (newTaskText !== null) {
        taskTextDiv.textContent = newTaskText;
    }
}

function markDone(taskDiv) {
    taskDiv.querySelector(".taskText").style.textDecoration = "line-through";
    taskDiv.style.backgroundColor = "green";
}



