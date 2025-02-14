document.addEventListener('DOMContentLoaded', function() {
    function initFAQ() {
        const faqButtons = document.querySelectorAll('.border.dark\\:border-gray-700 button');
        
        faqButtons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('.fas:last-child');
                
                // Close all other FAQs
                faqButtons.forEach(otherButton => {
                    if (otherButton !== this) {
                        const otherContent = otherButton.nextElementSibling;
                        const otherIcon = otherButton.querySelector('.fas:last-child');
                        otherContent.classList.add('hidden');
                        otherIcon.className = 'fas fa-plus bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition-transform duration-300';
                    }
                });
                
                // Toggle current FAQ
                content.classList.toggle('hidden');
                if (!content.classList.contains('hidden')) {
                    icon.className = 'fas fa-minus bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition-transform duration-300';
                } else {
                    icon.className = 'fas fa-plus bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transition-transform duration-300';
                }
            });
        });
    }

    // Initial initialization
    initFAQ();

    // Re-initialize when content might be dynamically loaded
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                initFAQ();
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
});
