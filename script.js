/* Alumno: Esparza Castañeda Hugo */
function addTask(){
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("priority");

    if(taskInput.value.trim()){
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.priority = prioritySelect.value;
        
        const text = document.createElement("p");
        text.textContent = `Tarea: ${taskInput.value} - Prioridad: ${prioritySelect.value}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            if (card.dataset.priority === 'alta') {
                const confirmDelete = confirm("¿Estás seguro que deseas eliminar esta tarea de alta prioridad?");
                if (!confirmDelete) {
                    return;
                }
            }
            container.removeChild(card);
        }

        switch(prioritySelect.value) {
            case 'alta':
                card.style.borderColor = 'red';
                card.style.backgroundColor = 'red';
                card.style.color = 'white';
                break;
            case 'media':
                card.style.borderColor = 'yellow';
                card.style.backgroundColor = 'yellow';
                card.style.color = 'black';
                break;
            case 'baja':
                card.style.borderColor = 'green';
                card.style.backgroundColor = 'green';
                card.style.color = 'white';
                break;
        }

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}