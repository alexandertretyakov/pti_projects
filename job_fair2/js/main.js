// var banner2 = {
//     el: document.querySelector('.module-banner'),
//     slides: document.querySelectorAll('.slide'),
//     activeSlideIndex: 0,
//     nextBtn: document.querySelector('.next'),
//     previousBtn: document.querySelector('.previous'),
//     toggler: document.querySelector('.toggler'),
//     paginationButtons: document.querySelectorAll('.pagination button'),
//
//     subscribe: function() {
//         this.nextBtn.addEventListener('click', this.handleClickOnNext.bind(this));
//         this.previousBtn.addEventListener('click', this.handleClickOnPrevious.bind(this));
//         this.paginationButtons.forEach(function(button) {
//             button.addEventListener('click', this.handleClickOnPaginationButton.bind(this))
//         }.bind(this));
//         this.toggler.addEventListener('click', this.handleClickOnToggler.bind(this));
//     },
//
//     render: function() {
//         this.slides.forEach(function(slide) {
//             slide.classList.remove('active');
//         });
//         this.slides[this.activeSlideIndex].classList.add('active');
//
//         this.paginationButtons.forEach(function(button) {
//             button.classList.remove('active');
//         });
//         this.paginationButtons[this.activeSlideIndex].classList.add('active');
//     },
//
//     handleClickOnNext: function() {
//         this.activeSlideIndex = this.activeSlideIndex === this.slides.length - 1 ? 0 : this.activeSlideIndex + 1;
//         this.render();
//     },
//
//     handleClickOnPrevious: function() {
//         this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slides.length - 1 : this.activeSlideIndex - 1;
//         this.render();
//     },
//
//     handleClickOnToggler: function() {
//         this.el.classList.toggle('state--open');
//     },
//
//     handleClickOnPaginationButton: function(e) {
//         this.activeSlideIndex = Number(e.target.dataset.number);
//         this.render();
//     }
// };
//banner2.subscribe();

// var news2 = {
//     slides: document.querySelectorAll('.news-panel a'),
//     activeSlideIndex: 0,
//     nextBtn: document.querySelector('.next-news'),
//     previousBtn: document.querySelector('.previous-news'),
//
//     subscribe: function() {
//         this.nextBtn.addEventListener('click', this.handleClickOnNext.bind(this));
//         this.previousBtn.addEventListener('click', this.handleClickOnPrevious.bind(this));
//     },
//
//     handleClickOnNext: function() {
//         this.activeSlideIndex = this.activeSlideIndex === this.slides.length - 1 ? 0 : this.activeSlideIndex + 1;
//         this.render();
//     },
//
//     handleClickOnPrevious: function() {
//         this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slides.length - 1 : this.activeSlideIndex - 1;
//         this.render();
//     },
//
//     render: function() {
//         this.slides.forEach(function(slide) {
//             slide.classList.remove('active');
//         });
//         this.slides[this.activeSlideIndex].classList.add('active');
//     }
// };
//news2.subscribe();

class Slider {
    constructor(options) {
        Object.assign(this, options);
        this.subscribe();
    }

    subscribe() {
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', this.handleClickOnNext.bind(this));
        }

        if (this.previousBtn) {
            this.previousBtn.addEventListener('click', this.handleClickOnPrevious.bind(this));
        }

        if (this.paginationButtons) {
            this.paginationButtons.forEach(function(button) {
                button.addEventListener('click', this.handleClickOnPaginationButton.bind(this))
            }.bind(this));
        }

        if (this.toggler) {
            this.toggler.addEventListener('click', this.handleClickOnToggler.bind(this));
        }
    }

    render() {
        this.slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        this.slides[this.activeSlideIndex].classList.add('active');

        if (this.paginationButtons) {
            this.paginationButtons.forEach(function(button) {
                button.classList.remove('active');
            });
            this.paginationButtons[this.activeSlideIndex].classList.add('active');
        }
    }

    handleClickOnNext() {
        this.activeSlideIndex = this.activeSlideIndex === this.slides.length - 1 ? 0 : this.activeSlideIndex + 1;
        this.render();
    }

    handleClickOnPrevious() {
        this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slides.length - 1 : this.activeSlideIndex - 1;
        this.render();
    }

    handleClickOnToggler() {
        this.el.classList.toggle('state--open');
    }

    handleClickOnPaginationButton(e) {
        this.activeSlideIndex = Number(e.target.dataset.number);
        this.render();
    }
}

var banner = new Slider({
    el: document.querySelector('.module-banner'),
    slides: document.querySelectorAll('.slide'),
    activeSlideIndex: 0,
    nextBtn: document.querySelector('.next'),
    previousBtn: document.querySelector('.previous'),
    toggler: document.querySelector('.toggler'),
    paginationButtons: document.querySelectorAll('.pagination button')
});

var news = new Slider({
    slides: document.querySelectorAll('.news-panel a'),
    activeSlideIndex: 0,
    nextBtn: document.querySelector('.next-news'),
    previousBtn: document.querySelector('.previous-news')
});

class Faq {
    constructor(options) {
        // write your code here
    }

    subscribe() {
        // write your code here
    }
}

// Может иметь несколько открытых вопросов
var faq1 = new Faq();

// Только один вопрос может быть открыт в моменте
var faq2 = new Faq();