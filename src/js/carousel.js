import Siema from 'siema'

// PRINT

const printDesignCarousel = new Siema({
    selector: '.printDesign__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const next = document.getElementById('printDesign_next');
const prev = document.getElementById('printDesign_prev');
    
prev.addEventListener('click', () => printDesignCarousel.prev());
next.addEventListener('click', () => printDesignCarousel.next());

// ESPELET

const projectEspeletCarousel = new Siema({
    selector: '.projectEspelet__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevProjectEspelet = document.getElementById('projectEspelet_prev');
const nextProjectEspelet = document.getElementById('projectEspelet_next');
    
prevProjectEspelet.addEventListener('click', () => {
    projectEspeletCarousel.prev();
    const indexOfCurrent = projectEspeletCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('espletPage').style.opacity = "0";
        document.getElementById('espelet').style.opacity = "0";
    } else {
        document.getElementById('espletPage').style.opacity = "1";
        document.getElementById('espelet').style.opacity = "1";
    }
});
nextProjectEspelet.addEventListener('click', () => {
    projectEspeletCarousel.next();
    const indexOfCurrent = projectEspeletCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('espletPage').style.opacity = "0";
        document.getElementById('espelet').style.opacity = "0";
    } else {
        document.getElementById('espletPage').style.opacity = "1";
        document.getElementById('espelet').style.opacity = "1";
    }
});

// CAPSULECOLLECTION

const capsuleCollectionCarousel = new Siema({
    selector: '.capsuleCollection__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevCapsuleCollection = document.getElementById('capsuleCollection_prev');
const nextCapsuleCollection = document.getElementById('capsuleCollection_next');
    
prevCapsuleCollection.addEventListener('click', () => {
    capsuleCollectionCarousel.prev();
    const indexOfCurrent = capsuleCollectionCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('capsuleCollectionPage').style.opacity = "0";
    } else {
        document.getElementById('capsuleCollectionPage').style.opacity = "1";
    }
});
nextCapsuleCollection.addEventListener('click', () => {
    capsuleCollectionCarousel.next();
    const indexOfCurrent = capsuleCollectionCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('capsuleCollectionPage').style.opacity = "0";
    } else {
        document.getElementById('capsuleCollectionPage').style.opacity = "1";
    }
});

// TRADLIST

const sectiontradiListCarousel = new Siema({
    selector: '.sectiontradiList__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevSectiontradiList = document.getElementById('sectiontradiList_prev');
const nextSectiontradiList = document.getElementById('sectiontradiList_next');
    
prevSectiontradiList.addEventListener('click', () => {
    sectiontradiListCarousel.prev();
    const indexOfCurrent = prevBretonVedrenne.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('tradiListPage').style.opacity = "0";
    } else {
        document.getElementById('tradiListPage').style.opacity = "1";
    }
});
nextSectiontradiList.addEventListener('click', () => {
    sectiontradiListCarousel.next();
    const indexOfCurrent = prevBretonVedrenne.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('tradiListPage').style.opacity = "0";
    } else {
        document.getElementById('tradiListPage').style.opacity = "1";
    }
});

// BRETONVEDRENNE

const bretonVedrenneCarousel = new Siema({
    selector: '.bretonVedrenne__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevBretonVedrenne = document.getElementById('bretonVedrenne_prev');
const nextBretonVedrenne = document.getElementById('bretonVedrenne_next');
    
prevBretonVedrenne.addEventListener('click', () => { 
    bretonVedrenneCarousel.prev();
    const indexOfCurrent = bretonVedrenneCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('bretonVedrennePage').style.opacity = "0";
    } else {
        document.getElementById('bretonVedrennePage').style.opacity = "1";
    }
});
nextBretonVedrenne.addEventListener('click', () => {
    bretonVedrenneCarousel.next();
    const indexOfCurrent = bretonVedrenneCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('bretonVedrennePage').style.opacity = "0";
    } else {
        document.getElementById('bretonVedrennePage').style.opacity = "1";
    }
});

// ANNELISELOGO

const anneLiseLogoCarousel = new Siema({
    selector: '.anneLiseLogo__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevAnneLiseLogo = document.getElementById('anneLiseLogo_prev');
const nextAnneLiseLogo = document.getElementById('anneLiseLogo_next');
    
prevAnneLiseLogo.addEventListener('click', () => {
    anneLiseLogoCarousel.prev();
    const indexOfCurrent = anneLiseLogoCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('anneLiseLogoPage').style.opacity = "0";
    } else {
        document.getElementById('anneLiseLogoPage').style.opacity = "1";
    }
});
nextAnneLiseLogo.addEventListener('click', () => {
    anneLiseLogoCarousel.next();
    const indexOfCurrent = anneLiseLogoCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('anneLiseLogoPage').style.opacity = "0";
    } else {
        document.getElementById('anneLiseLogoPage').style.opacity = "1";
    }
});

// ILLUSTRATION

const illustrationCarousel = new Siema({
    selector: '.illustration__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevIllustration = document.getElementById('illustration_prev');
const nextIllustration = document.getElementById('illustration_next');
    
prevIllustration.addEventListener('click', () => {
    illustrationCarousel.prev();
    const indexOfCurrent = illustrationCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('illustrationPage').style.opacity = "0";
    } else {
        document.getElementById('illustrationPage').style.opacity = "1";
    }
});
nextIllustration.addEventListener('click', () => {
    illustrationCarousel.next();
    const indexOfCurrent = illustrationCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('illustrationPage').style.opacity = "0";
    } else {
        document.getElementById('illustrationPage').style.opacity = "1";
    }
});

// ENNEDIAG

const ennediagCarousel = new Siema({
    selector: '.ennediag__carousel',
    loop: true,
    duration: 300,
    easing: 'ease-in',
    perPage: 1
});

const prevEnnediag = document.getElementById('ennediag_prev');
const nextEnnediag = document.getElementById('ennediag_next');
    
prevEnnediag.addEventListener('click', () => {
    ennediagCarousel.prev();
    const indexOfCurrent = ennediagCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('ennediagPage').style.opacity = "0";
    } else {
        document.getElementById('ennediagPage').style.opacity = "1";
    }
});
nextEnnediag.addEventListener('click', () => {
    ennediagCarousel.next();
    const indexOfCurrent = ennediagCarousel.currentSlide;
    if (indexOfCurrent !== 0) {
        document.getElementById('ennediagPage').style.opacity = "0";
    } else {
        document.getElementById('ennediagPage').style.opacity = "1";
    }
});
