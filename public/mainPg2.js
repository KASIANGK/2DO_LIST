function nouvelleTache() {
    let li = document.createElement("li")
    let inputValue = document.getElementById("myInput").value
    let dueDateValue = document.getElementById("dueDate").value

    
    let taskTextDiv = document.createElement("div")
    taskTextDiv.className = "taskText"
    taskTextDiv.textContent = inputValue
    
    let taskDateDiv = document.createElement("div")
    taskDateDiv.className = "taskDate"
    taskDateDiv.textContent = "Due date: " + dueDateValue


    li.appendChild(taskTextDiv)
    li.appendChild(taskDateDiv)

    if (inputValue === '') {
        alert("U must write smtgh")
    } else {
        document.getElementById("tasksContainer").appendChild(li)

        let squareDiv = document.createElement("div")
        squareDiv.className = "square"
        squareDiv.textContent = inputValue

        document.body.appendChild(squareDiv);

        document.getElementById("myInput").value = ""
        document.getElementById("dueDate").value = "";

        squareDiv.addEventListener("click", function() {
            this.style.display = "none"
        });
    }
}




function addTask() {
    let taskInput = document.getElementById("taskInput")
    let taskText = taskInput.value.trim() //pour supprimer les espaces blancs au début et à la fin d'une chaîne de caractères. Les espaces blancs comprennent les espaces, les tabulations et les sauts de ligne.

    if (taskText !== "") {
        var category

        while (true) {
            category = prompt("Category of the taskt => work, perso, other):").toLowerCase();

            if (category === "work" || category === "perso" || category === "other") {
                break; 
            } else {
                alert("Oooops, enter a correct category (work, perso, other)")
            }
        }

        let taskDiv = document.createElement("div")
        taskDiv.className = "task"

        let taskTextDiv = document.createElement("div")
        taskTextDiv.className = "taskText"
        taskTextDiv.textContent = taskText

        let taskBoutonsDiv = document.createElement("div")
        taskBoutonsDiv.className = "taskBoutons"

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "❌"
        deleteButton.onclick = function() {
            deleteTask(taskDiv)
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

        taskBoutonsDiv.appendChild(deleteButton)
        taskBoutonsDiv.appendChild(editButton)
        taskBoutonsDiv.appendChild(doneButton)

        taskDiv.appendChild(taskTextDiv)
        taskDiv.appendChild(taskBoutonsDiv)

        if (category === "work") {
            taskDiv.classList.add("task-travail")
        } else if (category === "perso") {
            taskDiv.classList.add("task-perso")
        } else if (category === "other") {
            taskDiv.classList.add("task-autre")
        }

        document.getElementById("tasksContainer").appendChild(taskDiv)

        taskInput.value = ""
    }
}






function deleteTask(taskDiv) {
    taskDiv.remove() // supprimer la tâche de la structure DOM

}



function editTask(taskTextDiv) {
    let newTaskText = prompt("Edit task:", taskTextDiv.textContent)
    if (newTaskText !== null) {
        taskTextDiv.textContent = newTaskText
    }
}



function markDone(taskDiv) {
    taskDiv.querySelector(".taskText").style.textDecoration = "line-through"

    taskDiv.style.backgroundColor = "green"
}