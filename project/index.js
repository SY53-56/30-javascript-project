const input = document.querySelector(".input");
const store = document.querySelector(".task-list");
const btnAdd = document.querySelector(".btn");
const taskNum = document.querySelector(".score");
const completeedTask = document.querySelector(".completeTask")

// Page load hone ke baad tasks render karo
window.addEventListener("DOMContentLoaded", loadTasks);

 let completedScore= 0;
function todoData() {
    const inputValue = input.value.trim();
    if (!inputValue) return;

    const newTask = { id: Date.now(), text: inputValue }; // unique object
    showData(newTask);       
    saveData(newTask);       
    updateScoreFromStorage();  // score update karo

    input.value = "";
};

function showData(task) {
    const div = document.createElement("div");
    div.classList.add("taskDiv");
    div.dataset.id = task.id;

    const p = document.createElement("p");
    p.textContent = task.text;
    
    p.addEventListener("click",function(){
        p.style.textDecoration = "line-through"
        completedScore ++
    })
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "update";
    updateBtn.addEventListener("click", () => {
        const newValue = prompt("Update task:", p.textContent);
        if (newValue === null || newValue.trim() === "") return;
        updateData(Number(div.dataset.id), newValue.trim());
        p.textContent = newValue.trim();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.addEventListener("click", () => {
        deleteData(Number(div.dataset.id));
        store.removeChild(div);
        updateScoreFromStorage();  // score update karo
    });

    buttonContainer.appendChild(updateBtn);
    buttonContainer.appendChild(deleteBtn);
    div.appendChild(p);
    div.appendChild(buttonContainer);
    store.appendChild(div);
}

function saveData(task) {
    const tasks = JSON.parse(localStorage.getItem("data") || "[]");
    tasks.push(task);
    localStorage.setItem("data", JSON.stringify(tasks));
}

function updateData(id, newTask) {
    const tasks = JSON.parse(localStorage.getItem("data") || "[]");
    const index = tasks.findIndex(value => value.id === id);
    if (index !== -1) {
        tasks[index].text = newTask;
        localStorage.setItem("data", JSON.stringify(tasks));
    }
}

function deleteData(id) {
    let tasks = JSON.parse(localStorage.getItem("data") || "[]");
    tasks = tasks.filter(value => value.id !== id);
    localStorage.setItem("data", JSON.stringify(tasks));
}

btnAdd.addEventListener("click", todoData);

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("data") || "[]");
    tasks.forEach(task => showData(task));
    updateScoreFromStorage(); // page load hone ke baad bhi score update
}

function updateScoreFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("data") || "[]");
    taskNum.textContent = tasks.length; // UI update hamesha localStorage ke hisaab se
    completeedTask.textContent = completedScore
}
