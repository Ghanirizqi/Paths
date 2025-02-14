const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');
const successMessage = document.querySelector('.success-message');
const buttons = document.querySelector('.buttons');
const question = document.querySelector('.question');

let noCount = 1;

noBtn.addEventListener('mouseenter', () => {
    noBtn.style.transform = 'scale(1.1)';
});

noBtn.addEventListener('mouseleave', () => {
    noBtn.style.transform = 'scale(1)';
});

noBtn.addEventListener('click', () => {
    noCount++;
    if (noCount <= 10) {
        // Remove previous size class
        for (let i = 1; i <= 10; i++) {
            noBtn.classList.remove(`size-${i}`);
        }
        // Add new size class
        noBtn.classList.add(`size-${noCount}`);
    }

    // Random position when clicking No
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

yesBtn.addEventListener('click', () => {
    // Hide question and buttons
    buttons.style.display = 'none';
    question.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';

    // Optional: Add confetti or other celebration effects here
    // You could add a confetti library for extra effects
});
