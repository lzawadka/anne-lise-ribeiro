import Siema from 'siema'

// PRINT

const printDesignCarousel = new Siema({
    selector: '.printDesign__carousel',
    loop: true,
    duration: 100,
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
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevProjectEspelet = document.getElementById('projectEspelet_prev');
const nextProjectEspelet = document.getElementById('projectEspelet_next');
    
prevProjectEspelet.addEventListener('click', () => projectEspeletCarousel.prev());
nextProjectEspelet.addEventListener('click', () => projectEspeletCarousel.next());

// CAPSULECOLLECTION

const capsuleCollectionCarousel = new Siema({
    selector: '.capsuleCollection__carousel',
    loop: true,
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevCapsuleCollection = document.getElementById('capsuleCollection_prev');
const nextCapsuleCollection = document.getElementById('capsuleCollection_next');
    
prevCapsuleCollection.addEventListener('click', () => capsuleCollectionCarousel.prev());
nextCapsuleCollection.addEventListener('click', () => capsuleCollectionCarousel.next());

// TRADLIST

const sectiontradiListCarousel = new Siema({
    selector: '.sectiontradiList__carousel',
    loop: true,
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevSectiontradiList = document.getElementById('sectiontradiList_prev');
const nextSectiontradiList = document.getElementById('sectiontradiList_next');
    
prevSectiontradiList.addEventListener('click', () => sectiontradiListCarousel.prev());
nextSectiontradiList.addEventListener('click', () => sectiontradiListCarousel.next());

// BRETONVEDRENNE

const bretonVedrenneCarousel = new Siema({
    selector: '.bretonVedrenne__carousel',
    loop: true,
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevBretonVedrenne = document.getElementById('bretonVedrenne_prev');
const nextBretonVedrenne = document.getElementById('bretonVedrenne_next');
    
prevBretonVedrenne.addEventListener('click', () => bretonVedrenneCarousel.prev());
nextBretonVedrenne.addEventListener('click', () => bretonVedrenneCarousel.next());

// ANNELISELOGO

const anneLiseLogoCarousel = new Siema({
    selector: '.anneLiseLogo__carousel',
    loop: true,
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevAnneLiseLogo = document.getElementById('anneLiseLogo_prev');
const nextAnneLiseLogo = document.getElementById('anneLiseLogo_next');
    
prevAnneLiseLogo.addEventListener('click', () => anneLiseLogoCarousel.prev());
nextAnneLiseLogo.addEventListener('click', () => anneLiseLogoCarousel.next());

// ANNELISELOGO

const illustrationCarousel = new Siema({
    selector: '.illustration__carousel',
    loop: true,
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevIllustration = document.getElementById('illustration_prev');
const nextIllustration = document.getElementById('illustration_next');
    
prevIllustration.addEventListener('click', () => illustrationCarousel.prev());
nextIllustration.addEventListener('click', () => illustrationCarousel.next());

// ANNELISELOGO

const ennediagCarousel = new Siema({
    selector: '.ennediag__carousel',
    loop: true,
    duration: 100,
    easing: 'ease-in',
    perPage: 1
});

const prevEnnediag = document.getElementById('ennediag_prev');
const nextEnnediag = document.getElementById('ennediag_next');
    
prevEnnediag.addEventListener('click', () => ennediagCarousel.prev());
nextEnnediag.addEventListener('click', () => ennediagCarousel.next());