function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => {
        a.addEventListener('click', (e) => {
            const targetId = a.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => btn.classList.add('active'));
        btn.addEventListener('mouseup', () => btn.classList.remove('active'));
        btn.addEventListener('mouseleave', () => btn.classList.remove('active'));
    });

    const animated = document.querySelectorAll('.animate-fadeUp');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animated.forEach(el => io.observe(el));

    const switchEl = document.getElementById('online-switch');
    const switchText = document.querySelector('.switch-text');
    if (switchEl && switchText) {
        switchEl.addEventListener('change', () => {
            switchText.textContent = switchEl.checked ? '打开' : '关闭';
        });
    }

    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('chip-active'));
            chip.classList.add('chip-active');
        });
    });
});
