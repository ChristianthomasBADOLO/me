document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const cards = document.querySelectorAll('.card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter cards
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});