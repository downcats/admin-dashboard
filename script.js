const menuButton = document.getElementsByClassName('hamburger-btn')[0];
const menuLinks = document.getElementsByClassName('hamburger-links')[0];

menuButton.addEventListener('click', () => {
    if (searchLinks.classList.contains('active')){
        searchLinks.classList.toggle('active');
    }
    menuLinks.classList.toggle('active');
})

const searchButton = document.getElementsByClassName('search-btn')[0];
const searchLinks = document.getElementsByClassName('searchbar')[0];

searchButton.addEventListener('click', () => {
    if (menuLinks.classList.contains('active')){
        menuLinks.classList.toggle('active');
    }
    searchLinks.classList.toggle('active');
})