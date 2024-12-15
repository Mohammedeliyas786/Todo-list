document.getElementById("add").addEventListener("click", function() {
    
    const taskText = document.getElementById("input").value;

    
    if (taskText.trim() !== "") {
        
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

       
        const taskContent = document.createElement("span");
        taskContent.classList.add("taskContent");
        taskContent.textContent = taskText;

  
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";

        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(removeButton);

        
        document.getElementById("todoList").appendChild(taskDiv);

      
        document.getElementById("input").value = "";

        
        removeButton.addEventListener("click", function() {
            taskDiv.remove();
        });
    } else {
        alert("Please enter a task!");
    }
});


document.getElementById("input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.getElementById("add").click();
    }
});
