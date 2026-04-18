const goToLogin = () => {
    window.location.href = 'pages/login.html';
};

// Navigation active indicator
const setActiveLink = () => {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.classList.remove('active');
        
        // Get the href from the link
        const href = link.getAttribute('href');
        
        // Check if current page matches
        if (currentPath.includes(href) || 
            (currentPath.endsWith('/') && href === 'index.html') ||
            (currentPath.endsWith('index.html') && href === 'index.html') ||
            (href === 'index.html' && currentPath.includes('tugas_fikinova/'))) {
            link.classList.add('active');
        }
    });
};

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveLink);

// Login buttons
const loginButton = document.getElementById('loginButton');
const heroLoginButton = document.getElementById('heroLoginButton');
const ctaLoginButton = document.getElementById('ctaLoginButton');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');

if (loginButton) loginButton.addEventListener('click', goToLogin);
if (heroLoginButton) heroLoginButton.addEventListener('click', goToLogin);
if (ctaLoginButton) ctaLoginButton.addEventListener('click', goToLogin);

// Mobile menu functionality
if (menuToggle && menu && menuOverlay) {
    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.toggle('open');
        menuOverlay.classList.toggle('active', isOpen);
        menuToggle.classList.toggle('open', isOpen);
        const expanded = menu.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', expanded.toString());
        document.body.classList.toggle('menu-open', isOpen);
    });
    
    // Close menu on overlay click
    menuOverlay.addEventListener('click', () => {
        menu.classList.remove('open');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    });
    
    // Close menu on link click (mobile only)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menu.classList.remove('open');
                menuOverlay.classList.remove('active');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('open');
            menuOverlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

