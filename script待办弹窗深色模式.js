const initialTodosByDay = {
  "22": ["结构学习", "网页部署"],
  "23": ["结构学习", "网页部署", "网页部署", "结构学习", "结构学习"],
  "24": ["结构学习", "复习重点"],
  "25": ["网页部署", "项目联调"],
  "26": ["阅读文档"],
  "27": ["复盘总结"],
  "28": ["空闲日"]
};

function renderTodoList(day) {
  const listEl = document.querySelector("[data-todo-list]");
  if (!listEl) return;
  const tasks = initialTodosByDay[day] || [];
  listEl.innerHTML = "";
  if (!tasks.length) {
    const empty = document.createElement("div");
    empty.className = "todo-empty";
    empty.textContent = "暂无待办事项";
    listEl.appendChild(empty);
    return;
  }
  tasks.forEach((task) => {
    const item = document.createElement("div");
    item.className = "todo-item";
    const text = document.createElement("div");
    text.className = "todo-item-text";
    text.textContent = task;
    const actions = document.createElement("div");
    actions.className = "todo-item-actions";
    const editBtn = document.createElement("button");
    editBtn.className = "todo-icon-button";
    editBtn.dataset.action = "edit";
    editBtn.type = "button";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-icon-button";
    deleteBtn.dataset.action = "delete";
    deleteBtn.type = "button";
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    item.appendChild(text);
    item.appendChild(actions);
    listEl.appendChild(item);
  });
}

function setActiveDay(target) {
  const buttons = document.querySelectorAll(".todo-day");
  buttons.forEach((btn) => btn.classList.remove("is-active"));
  target.classList.add("is-active");
  const day = target.dataset.day;
  renderTodoList(day);
}

function setupCalendarInteractions() {
  const buttons = document.querySelectorAll(".todo-day");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveDay(btn));
  });
  const active = document.querySelector(".todo-day.is-active");
  if (active) {
    renderTodoList(active.dataset.day);
  }
}

function setupModalToggle() {
  const backdrop = document.querySelector("[data-todo-backdrop]");
  const openBtn = document.querySelector("[data-open-todo]");
  const closeBtn = document.querySelector("[data-close-todo]");
  if (!backdrop) return;
  function open() {
    backdrop.classList.add("is-visible");
  }
  function close() {
    backdrop.classList.remove("is-visible");
  }
  if (openBtn) {
    openBtn.addEventListener("click", open);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", close);
  }
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      close();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupCalendarInteractions();
  setupModalToggle();
});

