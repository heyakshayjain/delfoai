document.addEventListener('DOMContentLoaded', async () => {
    try {
        const isServicePage = window.location.pathname.includes('/services/');
        const navPath = isServicePage ? '../components/service-navigation.html' : 'components/navigation.html';
        
        const navResponse = await fetch(navPath);
        if (!navResponse.ok) throw new Error('Failed to load navigation');
        const navHtml = await navResponse.text();
        document.getElementById('navigation').innerHTML = navHtml;
        
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Initialize theme
        const isDark = localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.documentElement.classList.toggle('dark', isDark);
        
        // Handle relative paths
        const currentPath = window.location.pathname;
        const isInSubfolder = currentPath.split('/').length > 2;
        
        if (isInSubfolder) {
            document.querySelectorAll('#navigation a[href^="/"]').forEach(link => {
                link.href = '.' + link.getAttribute('href');
            });
        }
    } catch (error) {
        console.error('Navigation loading error:', error);
    }
}); 