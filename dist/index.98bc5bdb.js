const ratio = 0.1;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};
const handleIntersect = (entries, observer)=>{
    entries.forEach((entry)=>{
        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > ratio) entry.target.classList.add('appear');
    });
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.printDesign__page').forEach((r)=>{
    observer.observe(r);
});

//# sourceMappingURL=index.98bc5bdb.js.map
