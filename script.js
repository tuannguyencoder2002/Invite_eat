// Particles animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Love button interaction
function showLove() {
    const messages = [
        "💕 Anh yêu em nhiều lắm! 💕",
        "💖 Em có đồng ý không? 💖",
        "💗 Hãy đi cùng anh nhé! 💗",
        "💝 Anh sẽ chờ em! 💝",
        "💕 Cảm ơn em đã đọc! 💕",
        "💖 Em là tất cả của anh! 💖",
        "💗 Anh muốn tạo kỷ niệm đẹp với em! 💗"
    ];
    
    const loveMessage = document.getElementById('loveMessage');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    loveMessage.textContent = randomMessage;
    loveMessage.classList.add('show');
    
    // Create floating balloons effect
    createFloatingBalloons();
    
    // Hide message after 3 seconds
    setTimeout(() => {
        loveMessage.classList.remove('show');
    }, 3000);
}

// Create floating balloons when button is clicked
function createFloatingBalloons() {
    const container = document.querySelector('.floating-balloons');
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈'];
    const balloonColors = ['balloon-red', 'balloon-blue', 'balloon-green', 'balloon-yellow', 'balloon-purple', 'balloon-orange', 'balloon-pink', 'balloon-cyan'];
    
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'floating-balloon ' + balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(balloon);
        
        // Remove balloon after animation
        setTimeout(() => {
            if (balloon.parentNode) {
                balloon.parentNode.removeChild(balloon);
            }
        }, 5000);
    }
}

// Balloon click animation
function addBalloonClickEffect() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {
            // Create burst effect
            this.style.transform = 'scale(1.5) translateY(-20px)';
            this.style.filter = 'brightness(1.5)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) translateY(0)';
                this.style.filter = 'brightness(1)';
            }, 300);
            
            // Create mini floating balloons
            createMiniBalloons(this);
        });
    });
}

// Create mini floating balloons around clicked balloon
function createMiniBalloons(parentBalloon) {
    const miniBalloons = ['🎈', '🎈', '🎈'];
    const balloonColors = ['balloon-red', 'balloon-blue', 'balloon-green', 'balloon-yellow', 'balloon-purple', 'balloon-orange', 'balloon-pink', 'balloon-cyan'];
    const rect = parentBalloon.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const miniBalloon = document.createElement('div');
        miniBalloon.textContent = miniBalloons[Math.floor(Math.random() * miniBalloons.length)];
        miniBalloon.className = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        miniBalloon.style.position = 'fixed';
        miniBalloon.style.left = (rect.left + rect.width / 2) + 'px';
        miniBalloon.style.top = (rect.top + rect.height / 2) + 'px';
        miniBalloon.style.fontSize = '1rem';
        miniBalloon.style.pointerEvents = 'none';
        miniBalloon.style.zIndex = '1000';
        miniBalloon.style.animation = 'miniFloat 2s ease-out forwards';
        
        document.body.appendChild(miniBalloon);
        
        // Remove after animation
        setTimeout(() => {
            if (miniBalloon.parentNode) {
                miniBalloon.parentNode.removeChild(miniBalloon);
            }
        }, 2000);
    }
}

// Add CSS for mini floating balloons
const style = document.createElement('style');
style.textContent = `
    @keyframes miniFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, -100px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Typing effect for greeting
function startTypingEffect() {
    const greeting = document.querySelector('.greeting');
    const text = greeting.textContent;
    greeting.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            greeting.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Smooth scroll effect for envelope
function addEnvelopeEffect() {
    const envelope = document.querySelector('.envelope');
    
    envelope.addEventListener('mouseenter', function() {
        this.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
    });
    
    envelope.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
    });
}

// Parallax effect for floating balloons
function addParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingBalloons = document.querySelectorAll('.floating-balloon');
        
        floatingBalloons.forEach((balloon, index) => {
            const speed = 0.5 + (index * 0.1);
            balloon.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Start typing effect
    setTimeout(startTypingEffect, 1000);
    
    // Add balloon click effects
    addBalloonClickEffect();
    
    // Add envelope effects
    addEnvelopeEffect();
    
    // Add parallax effect
    addParallaxEffect();
    
    // Add some random floating balloons periodically
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 5 seconds
            createFloatingBalloons();
        }
    }, 5000);
});

// Add some romantic music suggestion (just a comment for now)
// You can add background music by uncommenting and adding an audio element
/*
function addBackgroundMusic() {
    const audio = document.createElement('audio');
    audio.src = 'romantic-music.mp3'; // Add your music file
    audio.loop = true;
    audio.volume = 0.3;
    audio.autoplay = true;
    document.body.appendChild(audio);
}
*/

// Add confetti effect for special occasions
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3ba', '#ffc0cb', '#ffd1dc'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = 'confettiFall 3s linear forwards';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 3000);
    }
}

// Add confetti CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Add confetti effect to love button
document.addEventListener('DOMContentLoaded', function() {
    const loveButton = document.querySelector('.love-button');
    loveButton.addEventListener('click', function() {
        setTimeout(createConfetti, 500);
    });
});
