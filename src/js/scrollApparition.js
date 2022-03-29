const ratio = .1;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    })
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.printDesign__page').forEach((r) => {
    observer.observe(r)
});