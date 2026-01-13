const teamData = [
    { name: "Natali Craig", email: "smith@kpmg.com", role: "讲师", avatar: "assets/images/user1.png" },
    { name: "Kate Morrison", email: "melody@altbox.com", role: "讲师", avatar: "assets/images/user2.png" },
    { name: "Drew Cano", email: "max@kt.com", role: "学生", avatar: "assets/images/user3.png" },
    { name: "Orlando Diggs", email: "sean@dellito.com", role: "学生", avatar: "assets/images/user4.png" },
    { name: "Andi Lane", email: "brian@exchange.com", role: "学生", avatar: "assets/images/user5.png" },
    { name: "Natali Craig", email: "smith@kpmg.com", role: "学生", avatar: "assets/images/user1.png" },
    { name: "Kate Morrison", email: "melody@altbox.com", role: "学生", avatar: "assets/images/user2.png" },
    { name: "Drew Cano", email: "max@kt.com", role: "学生", avatar: "assets/images/user3.png" },
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
                    <!-- Placeholder for now -->
                    <div style="width:100%; height:100%; background:#555; border-radius:50%"></div>
                </div>
                <span>${user.name}</span>
            </div>
            <div class="email-cell">${user.email}</div>
            <div class="role-cell">${user.role}</div>
        `;
        listContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
