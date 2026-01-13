document.addEventListener('DOMContentLoaded', () => {
    // Role Selection Logic
    const roleBtns = document.querySelectorAll('.role-btn');
    let currentRole = 'student'; // Default

    // Initialize state
    updateRoleUI(currentRole);

    roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const role = btn.dataset.role;
            currentRole = role;
            updateRoleUI(role);
        });
    });

    function updateRoleUI(selectedRole) {
        roleBtns.forEach(btn => {
            const role = btn.dataset.role;
            if (role === selectedRole) {
                btn.classList.add('active');
                // Set specific colors based on role
                if (role === 'student') {
                    btn.style.backgroundColor = 'var(--primary-blue)';
                    btn.style.color = '#fff';
                    btn.style.border = 'none';
                } else if (role === 'teacher') {
                    btn.style.backgroundColor = 'var(--primary-purple)';
                    btn.style.color = '#fff';
                    btn.style.border = 'none';
                }
            } else {
                btn.classList.remove('active');
                btn.style.backgroundColor = 'transparent';
                btn.style.color = 'var(--text-secondary)';
                btn.style.border = '1px solid var(--input-border)';
            }
        });
    }

    // Form Submission
    const form = document.querySelector('.register-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const terms = document.getElementById('terms').checked;

        if (!terms) {
            alert('请同意使用协议');
            return;
        }

        console.log('Form Submitted:', {
            name,
            email,
            password,
            role: currentRole,
            terms
        });

        alert(`注册成功！\n角色: ${currentRole === 'student' ? '学生' : '教师'}\n姓名: ${name}`);
        form.reset();
        // Reset role to default
        currentRole = 'student';
        updateRoleUI(currentRole);
    });

    // Input Focus Effects (already handled by CSS, but we can add more if needed)
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
});
