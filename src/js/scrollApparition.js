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

const handleIntersectEspelet = (entrie, observer) => {
    console.log(entrie[0]);
    if (entrie[0].intersectionRatio > ratio) {
        entrie[0].target.classList.add('slide');
        observer.unobserve(entrie[0].target);
    }
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.printDesign__page').forEach((r) => {
    observer.observe(r)
});

const observer2 = new IntersectionObserver(handleIntersectEspelet, options);
observer2.observe(document.getElementById('espelet'))
