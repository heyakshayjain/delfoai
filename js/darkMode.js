// Dark mode toggle functionality
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.classList.toggle('dark', savedTheme === 'dark');
} else {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.classList.toggle('dark', systemDark);
}

// Theme toggle button handler
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
}); 