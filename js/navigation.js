document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Get the current page depth and adjust root path
        const pathDepth = window.location.pathname.split('/').length - 2;
        const rootPath = pathDepth > 0 ? '../'.repeat(pathDepth) : './';
        
        // Fetch navigation HTML
        const response = await fetch(`${rootPath}components/navigation.html`);
        const html = await response.text();
        
        // Replace [ROOT] placeholder with correct path
        const adjustedHtml = html.replace(/\[ROOT\]/g, rootPath.slice(0, -1));
        
        // Insert navigation
        const navElement = document.getElementById('navigation');
        navElement.innerHTML = adjustedHtml;

        // Re-initialize Alpine.js on the navigation element
        if (window.Alpine) {
            navElement.querySelectorAll('[x-data]').forEach(el => {
                Alpine.initTree(el);
            });
        }
        
        // Initialize Lucide icons in navigation
        lucide.createIcons();
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}); 