document.addEventListener('DOMContentLoaded', async () => {
    // Load navigation
    await loadNavigation();
    
    // Get current service from URL
    const servicePath = window.location.pathname.split('/').pop().replace('.html', '');
    const config = servicesConfig[servicePath];
    
    // Load service content
    loadServiceContent(config);
}); 