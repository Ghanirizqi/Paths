const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.valentine-card');
const successMessage = document.querySelector('.success-message');
const buttons = document.querySelector('.buttons');
const question = document.querySelector('.question');

let noCount = 1;

noBtn.addEventListener('click', () => {
    noCount++;

    if (noCount <= 10) {
        noBtn.style.fontSize = `${1 + noCount * 0.2}rem`;
    }

    // Ambil ukuran container & tombol
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = Math.min(containerRect.width - btnRect.width, 200);
    const maxY = Math.min(containerRect.height - btnRect.height, 100);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    buttons.style.display = 'none';
    question.style.display = 'none';
    successMessage.style.display = 'block';
});
