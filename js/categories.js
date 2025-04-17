// Categories functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log("Categories script loaded");
    
    // Get all category cards
    const categoryCards = document.querySelectorAll('.category-card');
    
    if (!categoryCards || categoryCards.length === 0) {
        console.warn("No category cards found on page");
        return;
    }
    
    console.log(`Found ${categoryCards.length} category cards`);
    
    // Add click event listener to each card
    categoryCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Check if this is a "Coming soon" category
            const cardText = card.textContent.trim();
            if (cardText.includes('Coming soon')) {
                event.preventDefault();
                alert('This category will be available soon. Stay tuned!');
                return;
            }
            
            // Get category from the href attribute
            const href = this.getAttribute('href');
            if (!href) {
                console.error("Card has no href attribute");
                return;
            }
            
            const categoryParam = href.split('=')[1];
            console.log(`Selected category: ${categoryParam}`);
            
            // Store selected category in localStorage so flashcards page can use it
            if (categoryParam) {
                localStorage.setItem('selectedCategory', categoryParam);
                console.log(`Category ${categoryParam} saved to localStorage`);
            }
            
            // Let the default navigation happen
        });
    });
    
    // Add visual indicator for coming soon categories
    categoryCards.forEach(card => {
        if (card.textContent.includes('Coming soon')) {
            card.style.opacity = '0.7';
            card.style.cursor = 'not-allowed';
        }
    });
});