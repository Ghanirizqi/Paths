document.addEventListener('DOMContentLoaded', () => {
    const loveMessages = [
        "You're my sunshine on a cloudy day! ☀️",
        "Every moment with you is magical! ✨",
        "You make my heart skip a beat! 💓",
        "You're the sweetest valentine! 🍫",
        "Together forever! 💑",
        "You complete me! 💖"
    ];

    let counter = 0;
    const counterElement = document.getElementById('loveCounter');
    const messageBox = document.getElementById('message');
    const loveBtn = document.getElementById('loveBtn');
    const heartItems = document.querySelectorAll('.heart-item');
    const musicToggle = document.getElementById('musicToggle');
    
    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    // Create sparkle effect
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }

    // Event listeners
    loveBtn.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
        messageBox.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4b6e', '#ff8fa3', '#ffc0cb']
        });
    });

    heartItems.forEach(heart => {
        heart.addEventListener('click', (e) => {
            const rect = heart.getBoundingClientRect();
            createSparkle(rect.left + rect.width/2, rect.top + rect.height/2);
            heart.style.transform = 'scale(1.2) rotate(20deg)';
            setTimeout(() => heart.style.transform = '', 500);
        });
    });

    // Start floating hearts
    setInterval(createFloatingHearts, 300);

    // Hover effect on cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width/2;
            const yc = rect.height/2;
            
            const dx = x - xc;
            const dy = y - yc;
            
            card.style.transform = `rotateY(${dx/10}deg) rotateX(${-dy/10}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
