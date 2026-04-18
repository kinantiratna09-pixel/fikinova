const goToLogin = () => {
    window.location.href = 'login.html';
};

const loginButton = document.getElementById('loginButton');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (loginButton) loginButton.addEventListener('click', goToLogin);

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