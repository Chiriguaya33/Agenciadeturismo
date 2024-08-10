document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.mycontainer div');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
