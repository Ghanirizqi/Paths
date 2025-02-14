const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.container');
const successMessage = document.querySelector('.success-message');
const buttons = document.querySelector('.buttons');
const question = document.querySelector('.question');

let noCount = 1;

noBtn.addEventListener('click', () => {
    noCount++;

    if (noCount <= 10) {
        noBtn.style.fontSize = `${1 + noCount * 0.2}rem`;
    }

    // Batas gerakan dalam container
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    // Hide question and buttons
    buttons.style.display = 'none';
    question.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
});
