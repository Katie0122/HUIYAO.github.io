const teamData = [
    { name: "李明", email: "3316654@qq.com", role: "讲师", avatar: "images/icons/头像1.png" },
    { name: "凯迪", email: "2278965@qq.com", role: "讲师", avatar: "images/icons/头像2.png" },
    { name: "宋为", email: "29945768@kt.com", role: "学生", avatar: "images/icons/头像3.png" },
    { name: "迈克", email: "159243817@qq.com", role: "学生", avatar: "images/icons/头像5.png" },
    { name: "辛迪", email: "1377986@qq.com", role: "学生", avatar: "images/icons/头像4.png" },
    { name: "威尔", email: "13429876@qq.com", role: "学生", avatar: "images/icons/头像5.png" },
    { name: "南希", email: "1764976@altbox.com", role: "学生", avatar: "images/icons/头像1.png" },
    { name: "史蒂夫", email: "17649754@kt.com", role: "学生", avatar: "images/icons/头像2.png" },
];

function renderTable() {
  const listContainer = document.getElementById('team-list');
  listContainer.innerHTML = '';

  teamData.forEach(user => {
    const row = document.createElement('div');
    row.className = 'table-row';
    row.innerHTML = `
      <div class="user-cell">
        <div class="avatar" style="width: 24px; height: 24px;">
          <img src="${user.avatar}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
        <span>${user.name}</span>
      </div>
      <div class="email-cell">${user.email}</div>
      <div class="role-cell">${user.role}</div>
    `;
    listContainer.appendChild(row);
  });
}
// 获取太阳图标元素
const sunIcon = document.querySelector('.sun-icon');

// 添加点击事件监听器
if(sunIcon) {
    sunIcon.addEventListener('click', function() {
        // 跳转到浅色模式页面
        window.location.href = 'index我的团队 浅色模式.html'; 
        // 或者根据您的文件命名规则调整路径
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
