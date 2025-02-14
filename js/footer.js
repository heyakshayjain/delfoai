document.addEventListener('DOMContentLoaded', async () => {
    try {
        const footerResponse = await fetch('/components/footer.html');
        if (!footerResponse.ok) throw new Error('Failed to load footer');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer').innerHTML = footerHtml;
        
        // Initialize Lucide icons in footer
        lucide.createIcons();
        
        // Handle relative paths
        const currentPath = window.location.pathname;
        const isInSubfolder = currentPath.split('/').length > 2;
        
        if (isInSubfolder) {
            document.querySelectorAll('#footer a[href^="/"]').forEach(link => {
                link.href = '.' + link.getAttribute('href');
            });
        }
    } catch (error) {
        console.error('Footer loading error:', error);
    }
}); 