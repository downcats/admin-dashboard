const toggleButton = document.getElementsByClassName('hamburger-btn')[0];
const hamburgerLinks = document.getElementsByClassName('hamburger-links')[0];

toggleButton.addEventListener('click', () => {
    hamburgerLinks.classList.toggle('active');
})