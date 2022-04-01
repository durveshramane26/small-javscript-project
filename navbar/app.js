const navToogle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToogle.addEventListener("click", function() {
    //links.classList.toggle('show-links)
    if (links.classList.contains('show-links')) {
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }
})