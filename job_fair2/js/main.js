var banner = {
    el: document.querySelector('.module-banner'),
    slides: document.querySelectorAll('.slide'),
    activeSlideIndex: 0,
    nextBtn: document.querySelector('.next'),
    previousBtn: document.querySelector('.previous'),
    toggler: document.querySelector('.toggler'),
    paginationButtons: document.querySelectorAll('.pagination button'),

    subscribe: function() {
        this.nextBtn.addEventListener('click', this.handleClickOnNext.bind(this));
        this.previousBtn.addEventListener('click', this.handleClickOnPrevious.bind(this));
        this.paginationButtons.forEach(function(button) {
            button.addEventListener('click', this.handleClickOnPaginationButton.bind(this))
        }.bind(this));
        this.toggler.addEventListener('click', this.handleClickOnToggler.bind(this));
    },

    render: function() {
        // внесет изменения в DOM
        // 1. Показать нужный слайд
        // 2. Подсветить нужный pagination button
    },

    handleClickOnNext: function(e) {
        // write your code here
    },

    handleClickOnPrevious: function(e) {
        // write your code here
    },

    handleClickOnToggler: function(e) {
        // write your code here
    },

    handleClickOnPaginationButton: function(e) {
        // write your code here
    }
};
banner2.subscribe();

// var banner = {
//     slides: document.querySelectorAll('.slide'),
//     slidesLength: document.querySelectorAll('.slide').length,
//     activeSlideIndex: 0,
//     next: document.querySelector('.next'),
//     previous: document.querySelector('.previous'),
//
//     init: function() {
//         this.next.addEventListener('click', function() {
//             console.log(banner.activeSlideIndex)
//             this.activeSlideIndex = this.activeSlideIndex === this.slidesLength - 1 ? 0 : this.activeSlideIndex + 1;
//             this.showSlide();
//         }.bind(this));
//
//         this.previous.addEventListener('click', function() {
//             this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slidesLength - 1 : this.activeSlideIndex - 1;
//             this.showSlide();
//         }.bind(this));
//     },
//
//     showSlide: function() {
//         this.slides.forEach(function(e) {
//             e.classList.remove('active');
//         });
//         this.slides[this.activeSlideIndex].classList.add('active');
//     }
// };
// banner.init();



// var pagination = {
//     buttons: document.querySelectorAll('.pagination button'),
//     slides: document.querySelectorAll('.slide'),
//
//     init: function () {
//         this.buttons.forEach(function(el) {
//             el.addEventListener('click', function(e) {
//                 this.buttonsDeleteClass();
//                 this.buttonAddActive(e);
//                 this.findIndex();
//                 this.showSlide();
//             }.bind(this))
//         }.bind(this));
//     },
//
//     buttonsDeleteClass: function() {
//         this.buttons.forEach(function(e) {
//             e.classList.remove('active');
//         });
//     },
//
//     buttonAddActive: function(e) {
//         e.target.classList.add('active');
//     },
//
//     findIndex: function() {
//         banner.activeSlideIndex = Number(document.querySelector('.button-pagination.active').dataset.number);
//     },
//
//     showSlide: function() {
//         this.slides.forEach(function(e) {
//             e.classList.remove('active');
//         });
//         this.slides[banner.activeSlideIndex].classList.add('active');
//     }
// };
// pagination.init();



// var switchButton = {
//     buttonTurn: document.querySelector('.button-turn'),
//     buttonExpand: document.querySelector('.button-expand'),
//     moduleBanner: document.querySelector('.module-banner'),
//
//     init: function() {
//         this.buttonExpand.addEventListener('click', function() {
//             this.showBanner();
//         }.bind(this));
//
//         this.buttonTurn.addEventListener('click', function() {
//             this.hideBanner();
//         }.bind(this));
//     },
//
//     showBanner: function() {
//         this.moduleBanner.style.display = 'block';
//         this.buttonExpand.style.display = 'none';
//         this.buttonTurn.style.display = 'block';
//     },
//
//     hideBanner: function() {
//         this.moduleBanner.style.display = 'none';
//         this.buttonTurn.style.display = 'none';
//         this.buttonExpand.style.display = 'block';
//     }
// };
// switchButton.init();
