// Menu Toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const profileButton = document.getElementById('profileButton');

if (menuToggle && menu) {
    const closeMenu = () => {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const expanded = menu.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', expanded.toString());
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

// Profile button navigation
if (profileButton) {
    profileButton.addEventListener('click', () => {
        window.location.href = 'profil.html';
    });
}

// Level Cards interaction
const levelCards = document.querySelectorAll('.level-card');
const playButtons = document.querySelectorAll('.play-button');

// Sample data: simulating level completion status (in production, this would come from backend)
const levelStatus = {
    1: { completed: true, points: 95 },
    2: { completed: true, points: 88 },
    3: { completed: false, points: 0 },
    4: { completed: false, points: 0 },
    5: { completed: false, points: 0 },
    6: { completed: false, points: 0 },
    7: { completed: false, points: 0 },
    8: { completed: false, points: 0 },
    9: { completed: false, points: 0 },
    10: { completed: false, points: 0 }
};

// Initialize level display
function initializeLevels() {
    updateProgress();
    
    playButtons.forEach((button, index) => {
        const levelNum = index + 1;
        const status = levelStatus[levelNum];
        
        button.addEventListener('click', () => {
            handleLevelStart(levelNum);
        });
    });
}

// Update progress display
function updateProgress() {
    let completedCount = 0;
    let totalPoints = 0;
    
    for (let level in levelStatus) {
        if (levelStatus[level].completed) {
            completedCount++;
            totalPoints += levelStatus[level].points;
        }
    }
    
    const completedDisplay = document.getElementById('completedLevels');
    const pointsDisplay = document.getElementById('totalPoints');
    
    if (completedDisplay) {
        completedDisplay.textContent = `${completedCount}/10`;
    }
    
    if (pointsDisplay) {
        pointsDisplay.textContent = totalPoints.toLocaleString();
    }
}

// Handle level start
function handleLevelStart(levelNum) {
    console.log(`Starting Level ${levelNum}`);
    
    // In production, this would navigate to the actual quiz page
    alert(`Memulai Level ${levelNum}!\n\nFitur ini akan segera diluncurkan. Saat ini masih dalam tahap pengembangan.`);
    
    // Example: window.location.href = `quiz.html?level=${levelNum}`;
}

// Add completion animation when cards are hovered
levelCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeLevels);
