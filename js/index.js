// Main JavaScript file for DeutschMate
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle (for responsive design)
    const setupMobileNav = () => {
        // If you decide to add a mobile menu button later
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenuBtn) {
            const nav = document.querySelector('nav ul');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('show');
                this.classList.toggle('active');
            });
        }
    };

    // Highlight current page in navigation
    const highlightCurrentPage = () => {
        // Get current page path
        const currentPath = window.location.pathname;
        
        // Get all nav links
        const navLinks = document.querySelectorAll('nav ul li a');
        
        // Check each link against current path
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // If the link href matches the current path, add active class
            if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
                link.classList.add('active');
            } else if (currentPath.endsWith('/') && linkPath === 'index.html') {
                link.classList.add('active');
            }
        });
    };

    // Handle URL parameters
    const handleURLParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        
        // If there's a category parameter, store it
        if (urlParams.has('category')) {
            const category = urlParams.get('category');
            localStorage.setItem('selectedCategory', category);
        }
    };

    // Initialize
    setupMobileNav();
    highlightCurrentPage();
    handleURLParams();
});