# Developer Card Project

A clean and modern developer profile card built with HTML, CSS, and JavaScript. Features a dark theme toggle, animated statistics, and responsive design.

## Event

This project was created for **Ready Player Web** by **GDGOC PLM** (Google Developer Groups on Campus - Pamantasan ng Lungsod ng Maynila)  
Organized by the Web Development Committee 2025-2026

## File Structure

```
dev-card-project/
├── index.html
├── css/
│   └── main.css
├── js/
│   └── app.js
└── assets/
    └── images/
        └── avatar.jpg
```

## Setup Instructions

1. Create the folder structure shown above
2. Add your profile image to `assets/images/avatar.jpg`
3. Copy the code from the sections below into their respective files
4. Open `index.html` in your browser

## HTML Code

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Card</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">🌙</button>
            
            <div class="profile">
                <div class="avatar">
                    <img src="assets/images/avatar.jpg" alt="Developer Avatar">
                </div>
                <h1 class="name">Your Name</h1>
                <p class="role">Your Role</p>
            </div>

            <div class="bio">
                <p>Your bio description goes here.</p>
            </div>

            <div class="skills">
                <span class="skill">HTML</span>
                <span class="skill">CSS</span>
                <span class="skill">JavaScript</span>
                <span class="skill">React</span>
                <span class="skill">Node.js</span>
            </div>

            <div class="stats">
                <div class="stat">
                    <h3 id="projects">0</h3>
                    <p>Projects</p>
                </div>
                <div class="stat">
                    <h3 id="hours">0</h3>
                    <p>Hours Coded</p>
                </div>
                <div class="stat">
                    <h3 id="coffee">0</h3>
                    <p>Coffee Cups</p>
                </div>
            </div>

            <div class="social">
                <a href="#" class="social-link" aria-label="GitHub">
                    <span>GH</span>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                    <span>IN</span>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                    <span>TW</span>
                </a>
            </div>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

## CSS Code

Create `css/main.css`:

```css
/* CSS VARIABLES */
:root {
    --bg: linear-gradient(135deg, #0D1117 0%, #0A0E14 100%);
    --card-bg: #0F1419;
    --text: #E6E1CF;
    --text-light: #B3B1AD;
    --accent: #FFB454;
    --accent-gradient: linear-gradient(135deg, #FFB454 0%, #FF8F40 100%);
    --skill-bg: #1F2430;
    --skill-text: #E6E1CF;
    --stat-bg: #0F1419;
    --stat-border: #1F2430;
    --shadow: rgba(0, 0, 0, 0.3);
    --shadow-lg: rgba(255, 180, 84, 0.15);
}

body.dark {
    --bg: linear-gradient(135deg, #0A0E14 0%, #01060E 100%);
    --card-bg: #0D1017;
    --text: #E6E1CF;
    --text-light: #8A8A80;
    --accent: #39BAE6;
    --accent-gradient: linear-gradient(135deg, #39BAE6 0%, #59C2FF 100%);
    --skill-bg: #151A1F;
    --skill-text: #B3B1AD;
    --stat-bg: #0A0E14;
    --stat-border: #1F2430;
    --shadow: rgba(0, 0, 0, 0.5);
    --shadow-lg: rgba(57, 186, 230, 0.2);
}

/* BASE STYLES */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    transition: all 0.3s ease;
}

/* CONTAINER */
.container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

/* CARD */
.card {
    background: var(--card-bg);
    border-radius: 24px;
    padding: 3rem;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 20px 60px var(--shadow-lg);
    position: relative;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--accent-gradient);
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 25px 60px var(--shadow-lg);
}

/* THEME TOGGLE */
.theme-toggle {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: var(--skill-bg);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s;
}

.theme-toggle:hover {
    transform: rotate(10deg) scale(1.05);
}

/* PROFILE */
.profile {
    text-align: center;
    margin-bottom: 1.5rem;
}

.avatar {
    width: 110px;
    height: 110px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid transparent;
    background: var(--accent-gradient);
    padding: 4px;
    position: relative;
}

.avatar::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--card-bg);
    z-index: 1;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
    border-radius: 50%;
}

.name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.role {
    color: var(--text-light);
    font-size: 1rem;
    font-weight: 500;
}

/* BIO */
.bio {
    text-align: center;
    color: var(--text-light);
    font-size: 0.95rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    padding: 0 1rem;
}

/* SKILLS */
.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    justify-content: center;
    margin-bottom: 2rem;
}

.skill {
    background: var(--skill-bg);
    color: var(--skill-text);
    padding: 0.625rem 1.25rem;
    border-radius: 24px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.skill:hover {
    background: var(--accent-gradient);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
    border-color: var(--accent);
}

/* STATS */
.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
}

.stat {
    background: var(--stat-bg);
    border: 2px solid var(--stat-border);
    border-radius: 16px;
    padding: 1.25rem 0.75rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.stat::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-gradient);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.stat:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
    box-shadow: 0 4px 16px var(--shadow);
}

.stat:hover::before {
    transform: scaleX(1);
}

.stat h3 {
    font-size: 2rem;
    font-weight: 700;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.375rem;
    line-height: 1;
}

.stat p {
    color: var(--text-light);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}

/* SOCIAL */
.social {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-link {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--skill-bg);
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    font-weight: 700;
    font-size: 0.875rem;
}

.social-link:hover {
    background: var(--accent-gradient);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px var(--shadow);
    border-color: var(--accent);
}

/* RESPONSIVE */
@media (max-width: 480px) {
    .card {
        padding: 2rem 1.5rem;
    }

    .name {
        font-size: 1.75rem;
    }

    .stats {
        gap: 0.75rem;
    }

    .stat {
        padding: 1rem 0.5rem;
    }

    .stat h3 {
        font-size: 1.5rem;
    }
}
```

## JavaScript Code

Create `js/app.js`:

```javascript
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Animate Stats
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start animations when page loads
window.addEventListener('load', () => {
    animateValue('projects', 0, 42, 2000);
    animateValue('hours', 0, 1337, 2000);
    animateValue('coffee', 0, 999, 2000);
});
```

## Customization

### Change Your Information

In `index.html`, update:
- `<h1 class="name">` - Your name
- `<p class="role">` - Your job title
- `<div class="bio">` - Your bio text
- Skills in the `.skills` section
- Social media links in the `.social` section
- Stats target values in `app.js` (projects, hours, coffee)

### Change Colors

In `css/main.css`, modify the CSS variables in the `:root` section:
- `--accent` - Primary accent color
- `--accent-gradient` - Gradient colors
- `--card-bg` - Card background
- `--text` - Text color

### Add Your Photo

Place your image file at `assets/images/avatar.jpg` or update the path in `index.html`.

## Browser Support

Works in all modern browsers:
- Chrome, Edge, Firefox, Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Free to use for personal and commercial projects.
