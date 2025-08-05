let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.querySelector(".task-list");
const taskInput = document.querySelector("input");
const addBtn = document.querySelector("button");
const filterBtns = document.querySelectorAll(".filter");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  taskList.innerHTML = ""; // ✅ Corrected: Clear previous tasks from the list
  tasks.forEach((task, index) => {
    const show =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);

    if (show) {
      const li = document.createElement("li");
      li.className = "task";
      if (task.completed) li.classList.add("completed");

      // ✅ Create label element
      const label = document.createElement("span");
      label.textContent = task.text;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;

      // ✅ Toggle complete on change
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
        renderTasks(filter);
      });

      li.appendChild(checkbox);  // checkbox first
      li.appendChild(label);     // then text
      taskList.appendChild(li);
    }
  });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    renderTasks(filter);
  });
});

renderTasks();



// ✅ Listen for checkbox toggle to mark completed tasks



