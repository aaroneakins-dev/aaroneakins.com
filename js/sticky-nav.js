(function () {
    const nav = document.querySelector(`nav`);
    if (!nav) return;

    const sentinel = document.createElement(`div`);
    sentinel.style.position = `absolute`;
    sentinel.style.top = `20`;
    sentinel.style.width = `2px`;
    sentinel.style.height = `2px`;
    nav.parentNode.insertBefore(sentinel, nav);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add(`stuck`);
            } else {
                nav.classList.remove(`stuck`);
            }
        });
}, {
    root: null,
    threshold: 0
});
    observer.observe(sentinel);
})();