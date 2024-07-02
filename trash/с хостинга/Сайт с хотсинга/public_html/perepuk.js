
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card_s-uslygami');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = 'usluga.php';
      });
    });
  });

