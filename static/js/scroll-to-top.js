btn = document.getElementById('scroll-to-top');

btn.addEventListener("click", function (e) {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});