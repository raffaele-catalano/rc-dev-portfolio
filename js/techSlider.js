const slideTrack = document.querySelector('.slide-track');
let slideIndex = 0;
const slideWidth = document.querySelector('.slide').clientWidth;
const slides = document.querySelectorAll('.slide');

function autoScroll() {
    slideIndex++;
    slideTrack.style.transition = "transform 2s linear";
    slideTrack.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

    slideTrack.addEventListener('transitionend', function () {
    if (slideIndex >= slides.length - 1) {
        slideIndex = 0;
        slideTrack.style.transition = "none";
        slideTrack.style.transform = `translateX(0)`;
        }
    });
}

setInterval(autoScroll, 4000);

// *******************************************

function cloneIcons() {
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slideTrack.appendChild(slide.cloneNode(true));
    });

    slideTrack.style.animation = "none";
    void slideTrack.offsetWidth;
    slideTrack.style.animation = "scroll 40s linear infinite";
}

cloneIcons();