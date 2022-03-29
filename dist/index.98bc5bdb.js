const ratio = 0.1;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};
const handleIntersect = (entries, observer1)=>{
    entries.forEach((entry)=>{
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('appear');
            observer1.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.printDesign__page').forEach((r)=>{
    observer.observe(r);
});

//# sourceMappingURL=index.98bc5bdb.js.map
