// 模拟数据：按日期分组的待办事项
const todoItemsByDate = {
  "22": [
    { text: "学习前端基础", action: "edit" }
  ],
  "23": [
    { text: "结构学习", action: "edit" },
    { text: "网页部署", action: "edit" }
  ],
  "24": [
    { text: "复习 CSS", action: "edit" }
  ],
  "25": [],
  "26": [
    { text: "完成项目文档", action: "edit" }
  ],
  "27": [],
  "28": [
    { text: "准备下周会议", action: "edit" }
  ]
};

// 获取 DOM 元素
const todoDays = document.querySelectorAll('.todo-day');
const todoList = document.getElementById('todo-list');
let currentDay = '23';

// 渲染指定日期的待办事项
function renderTodoList(date) {
  const items = todoItemsByDate[date] || [];
  todoList.innerHTML = '';

  if (items.length === 0) {
    todoList.innerHTML = '<div class="todo-empty">暂无待办事项</div>';
    return;
  }

  items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'todo-item';
    itemEl.innerHTML = `
      <span class="todo-item-text">${item.text}</span>
      <div class="todo-item-actions">
        <button class="todo-icon-button" data-action="edit">✏️</button>
        <button class="todo-icon-button" data-action="delete">🗑️</button>
      </div>
    `;
    todoList.appendChild(itemEl);
  });
}

// 切换日期并更新列表
todoDays.forEach(dayBtn => {
  dayBtn.addEventListener('click', () => {
    todoDays.forEach(btn => btn.classList.remove('is-active'));
    dayBtn.classList.add('is-active');
    currentDay = dayBtn.dataset.day;
    renderTodoList(currentDay);
  });
});

// 初始化
renderTodoList(currentDay);

// 打开弹窗
function openTodoModal() {
  const backdrop = document.getElementById('todo-backdrop');
  backdrop.classList.add('is-visible');
  renderTodoList(currentDay);
}

// 关闭弹窗并跳转回首页
function closeTodoModal() {
  const backdrop = document.getElementById('todo-backdrop');
  backdrop.classList.remove('is-visible');
  window.location.href = 'index第一页.html'; // 跳转到首页
}