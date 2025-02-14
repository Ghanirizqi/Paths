document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const card = document.querySelector('.valentine-card');
    const successMessage = document.querySelector('.success-message');
    const buttons = document.querySelector('.buttons');
    const question = document.querySelector('.question');
    
    let clickCount = 0;
    const messages = [
        "Are you sure? 🥺",
        "Really sure? 😢",
        "Think again! 💭",
        "Last chance! 😅",
        "Don't do this! 😭",
        "My heart is breaking... 💔",
        "Okay fine, I'll stop! 😂"
    ];

    // Create floating hearts
    function createHearts(count = 15) {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }
    }

    noBtn.addEventListener('mouseenter', () => {
        createHearts(5);
        noBtn.style.transform = `translate(
            ${Math.random() * 100 - 50}px, 
            ${Math.random() * 100 - 50}px
        ) rotate(${Math.random() * 20 - 10}deg)`;
        
        if(clickCount < messages.length) {
            noBtn.textContent = messages[clickCount];
            clickCount++;
        }
    });

    yesBtn.addEventListener('click', () => {
        buttons.style.display = 'none';
        question.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Confetti effect
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#ff3f3f', '#ff6b6b', '#ff9aa2']
        });

        // Create heart rain
        const heartContainer = document.createElement('div');
        document.body.appendChild(heartContainer);
        for(let i = 0; i < 50; i++) {
            setTimeout(() => createHearts(3), i * 100);
        }

        // Card celebration animation
        card.style.animation = 'celebrate 1s ease';
        setTimeout(() => card.style.animation = '', 1000);
    });

    // Background hearts
    setInterval(() => createHearts(1), 1000);
});