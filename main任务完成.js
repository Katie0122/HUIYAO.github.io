document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            themeBtn.classList.toggle('active');
            const icon = themeBtn.querySelector('i');
            if (icon.classList.contains('ph-sun')) {
                icon.classList.replace('ph-sun', 'ph-moon');
            } else {
                icon.classList.replace('ph-moon', 'ph-sun');
            }
        });
    }

    // Navigation Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Search Bar Focus
    const searchInput = document.querySelector('.search-bar input');
    const searchBar = document.querySelector('.search-bar');
    
    if (searchInput && searchBar) {
        searchInput.addEventListener('focus', () => {
            searchBar.style.boxShadow = '0 0 0 2px var(--color-brand)';
            searchBar.style.backgroundColor = 'white';
        });
        
        searchInput.addEventListener('blur', () => {
            searchBar.style.boxShadow = 'none';
            searchBar.style.backgroundColor = '#F0F2F5';
        });
    }

    // Kanban Drag and Drop
    const cards = document.querySelectorAll('.task-card');
    const columns = document.querySelectorAll('.kanban-column');
    const cardLists = document.querySelectorAll('.card-list');

    let draggedCard = null;

    cards.forEach(card => {
        card.setAttribute('draggable', 'true');
        
        card.addEventListener('dragstart', (e) => {
            draggedCard = card;
            setTimeout(() => {
                card.style.display = 'none';
            }, 0);
        });

        card.addEventListener('dragend', () => {
            setTimeout(() => {
                if (draggedCard) {
                    draggedCard.style.display = 'block';
                    draggedCard = null;
                }
            }, 0);
        });
    });

    cardLists.forEach(list => {
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        list.addEventListener('dragenter', (e) => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0,0,0,0.02)';
            list.style.borderRadius = '16px';
        });

        list.addEventListener('dragleave', (e) => {
            list.style.backgroundColor = 'transparent';
        });

        list.addEventListener('drop', (e) => {
            list.style.backgroundColor = 'transparent';
            if (draggedCard) {
                list.appendChild(draggedCard);
                updateCounts();
            }
        });
    });

    function updateCounts() {
        columns.forEach(col => {
            const list = col.querySelector('.card-list');
            const countSpan = col.querySelector('.count');
            if (list && countSpan) {
                const count = list.children.length;
                countSpan.textContent = count;
            }
        });
    }
});
// 弹窗控制
function showModal() {
  const modal = document.getElementById('taskModal');
  modal.classList.add('active');
}

function hideModal() {
  const modal = document.getElementById('taskModal');
  modal.classList.remove('active');
}

// 绑定关闭按钮事件
document.addEventListener('DOMContentLoaded', () => {
  // 点击卡片打开弹窗
  const editButtons = document.querySelectorAll('.meta-item i.ph-pencil-simple');
  editButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showModal();
    });
  });

  // 关闭弹窗按钮
  const closeBtn = document.querySelector('.dialog-footer .ghost');
  if (closeBtn) {
    closeBtn.addEventListener('click', hideModal);
  }

  // 点击遮罩层关闭
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.addEventListener('click', hideModal);
  }

  // 点击“确定”或“暂存”也可以关闭
  const confirmBtn = document.querySelector('.dialog-footer .primary');
  const saveBtn = document.querySelector('.dialog-footer .secondary');
  if (confirmBtn) confirmBtn.addEventListener('click', hideModal);
  if (saveBtn) saveBtn.addEventListener('click', hideModal);
});