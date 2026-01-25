document.addEventListener('DOMContentLoaded', () => {
    // Search bar interaction
    const searchInput = document.querySelector('.search-bar input');
    const searchBar = document.querySelector('.search-bar');

    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchBar.style.boxShadow = '0 0 0 2px rgba(24, 144, 255, 0.2)';
            searchBar.style.background = '#fff';
        });

        searchInput.addEventListener('blur', () => {
            searchBar.style.boxShadow = 'none';
            searchBar.style.background = '#EAECEF';
        });
    }

    // Navigation interaction (Simple active toggle for demo)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Banner buttons interaction effect
    const bannerBtns = document.querySelectorAll('.action-btn');
    bannerBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});
