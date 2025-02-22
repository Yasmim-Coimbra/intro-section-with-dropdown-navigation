const hamburgerIcon = document.getElementById('menu-hamburger');
const mainMenu = document.querySelector('.menu-principal');
const overlayBackground = document.querySelector('.overlay');
const closeIcon = document.getElementById('menu-close');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', () => {
    openMenu();

    body.style.overflow = 'hidden';
})

closeIcon.addEventListener('click', () => {
    closeMenu();

    body.style.overflow = 'auto';
});

function openMenu() {
    mainMenu.classList.add('ativo');
    overlayBackground.classList.add('ativo');
}

function closeMenu() {
    mainMenu.classList.remove('ativo');
    overlayBackground.classList.remove('ativo');
}


const features = document.getElementById('features');
const company = document.getElementById('company');

features.addEventListener('click', () => {
    features.classList.toggle('ativo');
    company.classList.remove('ativo');

    closeAllMenus();
})

company.addEventListener('click', () => {
    company.classList.toggle('ativo');
    features.classList.remove('ativo');

    closeAllMenus();
})

function closeAllMenus() {
    document.addEventListener('click', (event) => {
        if (event.target.id !== 'features' && event.target.id !== 'company') {
            features.classList.remove('ativo');
            company.classList.remove('ativo');
        }
    });
}
