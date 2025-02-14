document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.love-button');
    const message = document.querySelector('.love-message');
    const card = document.querySelector('.valentine-card');
    const messages = [
        "You mean the world to me! 🌍💖",
        "My love for you grows every day! 🌹",
        "You're my happily ever after! 👑",
        "My heart beats only for you! 💓",
        "You're the missing piece of my heart! 🧩"
    ];

    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.opacity = Math.random();
            heartsContainer.appendChild(heart);
        }
    }

    button.addEventListener('click', () => {
        // Show random message
        message.style.opacity = 0;
        setTimeout(() => {
            message.textContent = messages[Math.floor(Math.random() * messages.length)];
            message.style.opacity = 1;
        }, 300);

        // Confetti effect
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff3f3f', '#ff6b6b', '#ff9aa2']
        });

        // Card animation
        card.style.transform = `rotate(${Math.random() * 4 - 2}deg) scale(1.05)`;
        setTimeout(() => {
            card.style.transform = 'rotate(0deg) scale(1)';
        }, 500);
    });

    // Hover effect on card
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    createHearts();
});