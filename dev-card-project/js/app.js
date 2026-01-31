// ==================== THEME MANAGEMENT ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(id, target, duration = 1500) {
    const element = document.getElementById(id);
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== SKILL INTERACTIONS ====================
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);
    });
});

// ==================== INITIALIZE ON LOAD ====================
window.addEventListener('load', () => {
    animateCounter('projects', 67);
    animateCounter('hours', 916);
    animateCounter('coffee', 1738);
});
