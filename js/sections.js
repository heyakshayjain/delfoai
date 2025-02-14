document.addEventListener('DOMContentLoaded', async () => {
    const sections = [
        { id: 'hero-section', file: 'hero' },
        { id: 'services-section', file: 'services' },
        { id: 'why-choose-container', file: 'why-choose' },
        { id: 'process-section', file: 'process' },
        { id: 'testimonials-section', file: 'testimonials' },
        { id: 'faq-section', file: 'faq' }
    ];

    try {
        await Promise.all(sections.map(async ({ id, file }) => {
            const response = await fetch(`components/${file}.html`);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
        }));
        
        // Initialize icons after content is loaded
        lucide.createIcons();
        
        // Initialize any section-specific JavaScript
        if (window.initializeSections) {
            window.initializeSections();
        }
    } catch (error) {
        console.error('Error loading sections:', error);
    }
}); 