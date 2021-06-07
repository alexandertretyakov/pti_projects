var banners = function (direction) {
    var slides = document.querySelectorAll('.banner-text');
    var activeSlide = document.querySelector('.banner-text.active');
    var activeSlideIndex = [].indexOf.call(slides, activeSlide);
    var slidesLength = slides.length;
    var nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = activeSlideIndex === slidesLength - 1 ? 0 : activeSlideIndex + 1;
    } else {
        nextSlideIndex = activeSlideIndex === 0 ? slidesLength - 1 : activeSlideIndex - 1;
    }
    var next = slides[nextSlideIndex];

    activeSlide.classList.remove('active');
    next.classList.add('active');
}
document.querySelector('.next-banner').addEventListener('click', function () {
    banners('next');
});

document.querySelector('.previous-banner').addEventListener('click', function () {
    banners('previous');
});


var paginationButtons = document.querySelectorAll('.pagination-button');
//var activeButton = document.querySelector('.pagination-button.active');
var i = 0;
while (i < paginationButtons.length) {
    paginationButtons[i].addEventListener('click', function () {
        document.querySelector('.pagination-button.active').classList.remove('active')
        this.classList.add('active')
    });
    i++;
}




