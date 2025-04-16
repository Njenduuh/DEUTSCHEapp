// This file will handle category-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all category cards
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Add click event listener to each card
    categoryCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Get category from the href attribute
            const href = this.getAttribute('href');
            const categoryParam = href.split('=')[1];
            
            // Store selected category in localStorage so flashcards page can use it
            if (categoryParam) {
                localStorage.setItem('selectedCategory', categoryParam);
            }
            
            // Let the default navigation happen
        });
    });
    
    // Handle "Coming soon" categories
    const comingSoonCards = document.querySelectorAll('.category-card p:contains("Coming soon")');
    comingSoonCards.forEach(card => {
        const parentCard = card.closest('.category-card');
        
        parentCard.addEventListener('click', function(event) {
            event.preventDefault();
            alert('This category will be available soon. Stay tuned!');
        });
        
        // Add a visual indicator
        parentCard.style.opacity = '0.7';
    });
});

// Helper function for text content selection
// This is needed because :contains is not a standard selector in querySelector
NodeList.prototype.forEach = Array.prototype.forEach;
HTMLCollection.prototype.forEach = Array.prototype.forEach;

// Using a workaround since :contains is not standard
document.querySelectorAll = function(selector) {
    if (selector.includes(':contains')) {
        // Split the selector to extract the text to find
        const parts = selector.split(':contains(');
        const baseSelector = parts[0];
        const textToFind = parts[1].slice(0, -1).replace(/["']/g, '');
        
        // Get all elements matching the base selector
        const elements = document.querySelectorAll(baseSelector);
        
        // Filter them by text content
        return Array.from(elements).filter(el => 
            el.textContent.includes(textToFind)
        );
    } else {
        // Normal selection
        return document.querySelectorAll(selector);
    }
};