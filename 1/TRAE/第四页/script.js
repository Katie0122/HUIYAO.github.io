const users = [
  { id: 'CMP801', name: 'Natali Craig', email: 'smith@kpmg.com', role: '讲师', avatar: './assets/avatars/natali.svg' },
  { id: 'CMP802', name: 'Kate Morrison', email: 'melody@altbox.com', role: '讲师', avatar: './assets/avatars/kate.svg' },
  { id: 'CMP803', name: 'Drew Cano', email: 'max@kt.com', role: '学生', avatar: './assets/avatars/drew.svg' },
  { id: 'CMP804', name: 'Orlando Diggs', email: 'sean@delitto.com', role: '学生', avatar: './assets/avatars/orlando.svg' },
  { id: 'CMP805', name: 'Andi Lane', email: 'brian@exchange.com', role: '学生', avatar: './assets/avatars/andi.svg' },
  { id: 'CMP806', name: 'Natali Craig', email: 'smith@kpmg.com', role: '讲师', avatar: './assets/avatars/natali.svg' },
  { id: 'CMP807', name: 'Kate Morrison', email: 'melody@altbox.com', role: '讲师', avatar: './assets/avatars/kate.svg' },
  { id: 'CMP808', name: 'Drew Cano', email: 'max@kt.com', role: '学生', avatar: './assets/avatars/drew.svg' },
  { id: 'CMP809', name: 'Orlando Diggs', email: 'sean@delitto.com', role: '学生', avatar: './assets/avatars/orlando.svg' },
  { id: 'CMP810', name: 'Andi Lane', email: 'brian@exchange.com', role: '学生', avatar: './assets/avatars/andi.svg' },
];

const listBody = document.getElementById('listBody');
const searchInput = document.getElementById('searchInput');
const drawer = document.getElementById('drawer');
const drawerMask = document.getElementById('drawerMask');
const drawerClose = document.getElementById('drawerClose');

const detailName = document.getElementById('detailName');
const detailId = document.getElementById('detailId');
const detailAvatar = document.getElementById('detailAvatar');
const fieldName = document.getElementById('fieldName');
const fieldEmail = document.getElementById('fieldEmail');
const fieldRole = document.getElementById('fieldRole');

function renderRows(data){
  listBody.innerHTML = '';
  data.forEach((u, idx) => {
    const row = document.createElement('div');
    row.className = 'row';
    row.dataset.id = u.id;
    row.innerHTML = `
      <div class="user">
        <img class="avatar" src="${u.avatar}" alt="">
        <div class="name">${u.name}</div>
      </div>
      <div class="email">${u.email}</div>
      <div class="role">${u.role}</div>
    `;
    row.addEventListener('click', () => openDetail(u, row));
    listBody.appendChild(row);
    if (idx === 4) row.classList.add('active');
  });
}

function openDetail(u, rowEl){
  document.querySelectorAll('.row').forEach(r => r.classList.remove('active'));
  rowEl.classList.add('active');
  detailName.textContent = u.name;
  detailId.textContent = `#${u.id}`;
  detailAvatar.src = u.avatar;
  fieldName.value = u.name;
  fieldEmail.value = u.email;
  fieldRole.value = u.role;
  if (window.matchMedia('(max-width: 992px)').matches){
    drawer.classList.add('open');
    drawerMask.classList.add('show');
  }
}

drawerClose.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawerMask.classList.remove('show');
});
drawerMask.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawerMask.classList.remove('show');
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = users.filter(u => (u.name + u.email + u.role).toLowerCase().includes(q));
  renderRows(filtered);
});

renderRows(users);

