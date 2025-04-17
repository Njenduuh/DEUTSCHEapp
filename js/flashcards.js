// Flashcards functionality
document.addEventListener('DOMContentLoaded', function() {
    // Flashcard data - in a real app, this would come from a database
    const flashcardsData = {
        travel: [
            {
                german: 'der Bahnhof',
                english: 'train station',
                example: 'Ich gehe zum Bahnhof. (I am going to the train station.)'
            },
            {
                german: 'der Flughafen',
                english: 'airport',
                example: 'Der Flughafen ist sehr groß. (The airport is very big.)'
            },
            {
                german: 'die Reise',
                english: 'journey, trip',
                example: 'Die Reise nach Berlin war lang. (The trip to Berlin was long.)'
            },
            {
                german: 'der Koffer',
                english: 'suitcase',
                example: 'Mein Koffer ist schwer. (My suitcase is heavy.)'
            },
            {
                german: 'die Fahrkarte',
                english: 'ticket (for travel)',
                example: 'Ich muss eine Fahrkarte kaufen. (I need to buy a ticket.)'
            },
            {
                german: 'die Haltestelle',
                english: 'stop, station',
                example: 'Die nächste Haltestelle ist der Hauptbahnhof. (The next stop is the main station.)'
            },
            {
                german: 'der Zug',
                english: 'train',
                example: 'Der Zug fährt in 5 Minuten ab. (The train leaves in 5 minutes.)'
            },
            {
                german: 'die Straßenbahn',
                english: 'tram',
                example: 'Wir nehmen die Straßenbahn in die Stadt. (We take the tram into the city.)'
            },
            {
                german: 'der Pass',
                english: 'passport',
                example: 'Vergiss deinen Pass nicht! (Don\'t forget your passport!)'
            },
            {
                german: 'die Unterkunft',
                english: 'accommodation',
                example: 'Haben Sie eine günstige Unterkunft? (Do you have affordable accommodation?)'
            }
        ],
        food: [
            {
                german: 'das Brot',
                english: 'bread',
                example: 'Ich esse gern frisches Brot. (I like to eat fresh bread.)'
            },
            {
                german: 'das Wasser',
                english: 'water',
                example: 'Ein Glas Wasser, bitte. (A glass of water, please.)'
            },
            {
                german: 'der Käse',
                english: 'cheese',
                example: 'Ich mag Käse auf meiner Pizza. (I like cheese on my pizza.)'
            },
            {
                german: 'das Restaurant',
                english: 'restaurant',
                example: 'Wir gehen heute ins Restaurant. (We are going to the restaurant today.)'
            },
            {
                german: 'der Kaffee',
                english: 'coffee',
                example: 'Ich trinke morgens immer Kaffee. (I always drink coffee in the morning.)'
            },
            {
                german: 'das Abendessen',
                english: 'dinner',
                example: 'Was gibt es zum Abendessen? (What\'s for dinner?)'
            },
            {
                german: 'der Nachtisch',
                english: 'dessert',
                example: 'Möchtest du einen Nachtisch? (Would you like a dessert?)'
            },
            {
                german: 'die Rechnung',
                english: 'bill, check',
                example: 'Die Rechnung, bitte. (The bill, please.)'
            },
            {
                german: 'die Gabel',
                english: 'fork',
                example: 'Können Sie mir eine Gabel bringen? (Can you bring me a fork?)'
            },
            {
                german: 'das Messer',
                english: 'knife',
                example: 'Das Messer ist nicht scharf. (The knife is not sharp.)'
            },
            {
                german: 'der Löffel',
                english: 'spoon',
                example: 'Ich brauche einen Löffel für die Suppe. (I need a spoon for the soup.)'
            },
            {
                german: 'die Speisekarte',
                english: 'menu',
                example: 'Können wir die Speisekarte sehen? (Can we see the menu?)'
            }
        ],
        daily: [
            {
                german: 'aufstehen',
                english: 'to get up',
                example: 'Ich stehe um 7 Uhr auf. (I get up at 7 o\'clock.)'
            },
            {
                german: 'frühstücken',
                english: 'to have breakfast',
                example: 'Ich frühstücke meistens zu Hause. (I usually have breakfast at home.)'
            },
            {
                german: 'duschen',
                english: 'to shower',
                example: 'Ich dusche jeden Morgen. (I shower every morning.)'
            },
            {
                german: 'arbeiten',
                english: 'to work',
                example: 'Ich arbeite von 9 bis 17 Uhr. (I work from 9 to 5.)'
            },
            {
                german: 'einkaufen',
                english: 'to shop, to buy groceries',
                example: 'Ich gehe am Samstag einkaufen. (I go shopping on Saturday.)'
            },
            {
                german: 'kochen',
                english: 'to cook',
                example: 'Ich koche gern am Wochenende. (I like to cook on the weekend.)'
            },
            {
                german: 'schlafen gehen',
                english: 'to go to sleep',
                example: 'Ich gehe um 23 Uhr schlafen. (I go to sleep at 11 pm.)'
            },
            {
                german: 'fernsehen',
                english: 'to watch TV',
                example: 'Abends sehe ich gern fern. (I like to watch TV in the evening.)'
            }
        ],
        health: [
            {
                german: 'der Arzt / die Ärztin',
                english: 'doctor',
                example: 'Ich muss zum Arzt gehen. (I need to go to the doctor.)'
            },
            {
                german: 'das Krankenhaus',
                english: 'hospital',
                example: 'Das Krankenhaus ist nicht weit von hier. (The hospital is not far from here.)'
            },
            {
                german: 'die Apotheke',
                english: 'pharmacy',
                example: 'Die Apotheke schließt um 18 Uhr. (The pharmacy closes at 6 pm.)'
            },
            {
                german: 'krank',
                english: 'sick, ill',
                example: 'Ich bin heute krank. (I am sick today.)'
            },
            {
                german: 'die Medizin',
                english: 'medicine',
                example: 'Nehmen Sie diese Medizin dreimal täglich. (Take this medicine three times daily.)'
            },
            {
                german: 'gesund',
                english: 'healthy',
                example: 'Obst und Gemüse sind gesund. (Fruit and vegetables are healthy.)'
            }
        ]
    };

    // Check if DOM elements exist before trying to use them
    const flashcardElement = document.querySelector('.flashcard');
    const categorySelect = document.getElementById('category');
    const prevButton = document.getElementById('prevCard');
    const nextButton = document.getElementById('nextCard');
    const currentCardNumElement = document.getElementById('currentCardNum');
    const totalCardsElement = document.getElementById('totalCards');
    const progressFill = document.querySelector('.progress-fill');
    const knownButton = document.getElementById('markKnown');
    const reviewButton = document.getElementById('markReview');

    // If any of the important elements don't exist, exit early
    if (!flashcardElement || !categorySelect || !prevButton || !nextButton || 
        !currentCardNumElement || !totalCardsElement || !progressFill || 
        !knownButton || !reviewButton) {
        console.error("One or more required DOM elements are missing.");
        return;
    }

    // State variables
    let currentCategory = 'travel';
    let currentCardIndex = 0;
    let currentCards = [];
    let knownCards = [];
    let reviewCards = [];

    // Initialize
    function init() {
        console.log("Initializing flashcards");
        
        // Check if there's a selected category in localStorage
        const storedCategory = localStorage.getItem('selectedCategory');
        if (storedCategory && flashcardsData[storedCategory]) {
            currentCategory = storedCategory;
            categorySelect.value = currentCategory;
        }

        // Load cards for the current category
        loadCategory(currentCategory);

        // Add event listeners
        flashcardElement.addEventListener('click', flipCard);
        categorySelect.addEventListener('change', changeCategory);
        prevButton.addEventListener('click', showPrevCard);
        nextButton.addEventListener('click', showNextCard);
        knownButton.addEventListener('click', markAsKnown);
        reviewButton.addEventListener('click', markForReview);

        // Check URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('category')) {
            const categoryParam = urlParams.get('category');
            if (flashcardsData[categoryParam]) {
                currentCategory = categoryParam;
                categorySelect.value = currentCategory;
                loadCategory(currentCategory);
            }
        }
    }

    // Load cards for a specific category
    function loadCategory(category) {
        console.log(`Loading category: ${category}`);
        
        if (flashcardsData[category]) {
            currentCards = [...flashcardsData[category]];
            currentCardIndex = 0;
            updateCardDisplay();
            updateProgress();
        } else {
            console.warn(`Category "${category}" not found in flashcardsData`);
        }
    }

    // Change category
    function changeCategory() {
        const newCategory = categorySelect.value;
        console.log(`Changing to category: ${newCategory}`);
        
        if (newCategory === 'all') {
            // Combine all categories
            currentCards = [];
            for (const category in flashcardsData) {
                currentCards = [...currentCards, ...flashcardsData[category]];
            }
            currentCardIndex = 0;
            updateCardDisplay();
            updateProgress();
        } else {
            loadCategory(newCategory);
        }
        currentCategory = newCategory;
        localStorage.setItem('selectedCategory', newCategory);
    }

    // Update the current card display
    function updateCardDisplay() {
        if (currentCards.length === 0) {
            // No cards in this category
            console.warn("No cards available to display");
            return;
        }

        console.log(`Updating display to card ${currentCardIndex + 1} of ${currentCards.length}`);
        
        const card = currentCards[currentCardIndex];
        const germanWord = flashcardElement.querySelector('.german-word');
        const englishWord = flashcardElement.querySelector('.english-word');
        const example = flashcardElement.querySelector('.example');
        const cardTag = flashcardElement.querySelectorAll('.card-tag');

        germanWord.textContent = card.german;
        englishWord.textContent = card.english;
        example.textContent = card.example;
        
        // Update category tag
        cardTag.forEach(tag => {
            tag.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
        });

        // Reset card flip
        flashcardElement.classList.remove('flipped');
    }

    // Flip the flashcard
    function flipCard() {
        console.log("Flipping card");
        flashcardElement.classList.toggle('flipped');
    }

    // Show the previous card
    function showPrevCard() {
        console.log("Showing previous card");
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCardDisplay();
            updateProgress();
        }
    }

    // Show the next card
    function showNextCard() {
        console.log("Showing next card");
        if (currentCardIndex < currentCards.length - 1) {
            currentCardIndex++;
            updateCardDisplay();
            updateProgress();
        }
    }

    // Mark current card as known
    function markAsKnown() {
        console.log("Marking card as known");
        const currentCard = currentCards[currentCardIndex];
        
        // Add to known cards if not already there
        if (!knownCards.some(card => card.german === currentCard.german)) {
            knownCards.push(currentCard);
        }
        
        // Remove from review cards if it was there
        reviewCards = reviewCards.filter(card => card.german !== currentCard.german);
        
        // Go to next card or stay on last card
        if (currentCardIndex < currentCards.length - 1) {
            showNextCard();
        } else {
            console.log("Already at the last card");
        }
    }

    // Mark current card for review
    function markForReview() {
        console.log("Marking card for review");
        const currentCard = currentCards[currentCardIndex];
        
        // Add to review cards if not already there
        if (!reviewCards.some(card => card.german === currentCard.german)) {
            reviewCards.push(currentCard);
        }
        
        // Remove from known cards if it was there
        knownCards = knownCards.filter(card => card.german !== currentCard.german);
        
        // Go to next card or stay on last card
        if (currentCardIndex < currentCards.length - 1) {
            showNextCard();
        } else {
            console.log("Already at the last card");
        }
    }

    // Update progress indicators
    function updateProgress() {
        currentCardNumElement.textContent = currentCardIndex + 1;
        totalCardsElement.textContent = currentCards.length;
        
        // Update progress bar
        const progressPercentage = ((currentCardIndex + 1) / currentCards.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Update button states
        prevButton.disabled = currentCardIndex === 0;
        nextButton.disabled = currentCardIndex === currentCards.length - 1;
        
        // Visually reflect disabled state
        if (prevButton.disabled) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
        
        if (nextButton.disabled) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    // Initialize the app
    init();
});