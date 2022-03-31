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
const handleIntersectEspelet = (entrie, observer3)=>{
    console.log(entrie[0]);
    if (entrie[0].intersectionRatio > ratio) {
        entrie[0].target.classList.add('slide');
        observer3.unobserve(entrie[0].target);
    }
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.printDesign__page').forEach((r)=>{
    observer.observe(r);
});
const observer2 = new IntersectionObserver(handleIntersectEspelet, options);
observer2.observe(document.getElementById('espelet'));

//# sourceMappingURL=index.98bc5bdb.js.map
