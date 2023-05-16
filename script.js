const nav = document.querySelectorAll('.nav');

function activeLink() {
    nav.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    });
};
nav.forEach((item) => {
item.addEventListener('click', activeLink)
});