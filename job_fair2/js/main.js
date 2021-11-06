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
        this.slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        this.slides[this.activeSlideIndex].classList.add('active');

        this.paginationButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        this.paginationButtons[this.activeSlideIndex].classList.add('active');
    },

    handleClickOnNext: function() {
        this.activeSlideIndex = this.activeSlideIndex === this.slides.length - 1 ? 0 : this.activeSlideIndex + 1;
        this.render();
    },

    handleClickOnPrevious: function() {
        this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slides.length - 1 : this.activeSlideIndex - 1;
        this.render();
    },

    handleClickOnToggler: function() {
        this.el.classList.toggle('state--open');
    },

    handleClickOnPaginationButton: function(e) {
        this.activeSlideIndex = Number(e.target.dataset.number);
        this.render();
    }
};
banner.subscribe();

var news = {
    slides: document.querySelectorAll('.news-panel a'),
    activeSlideIndex: 0,
    nextBtn: document.querySelector('.next-news'),
    previousBtn: document.querySelector('.previous-news'),

    subscribe: function() {
        this.nextBtn.addEventListener('click', this.handleClickOnNext.bind(this));
        this.previousBtn.addEventListener('click', this.handleClickOnPrevious.bind(this));
    },

    handleClickOnNext: function() {
        this.activeSlideIndex = this.activeSlideIndex === this.slides.length - 1 ? 0 : this.activeSlideIndex + 1;
        this.render();
    },

    handleClickOnPrevious: function() {
        this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slides.length - 1 : this.activeSlideIndex - 1;
        this.render();
    },

    render: function() {
        this.slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        this.slides[this.activeSlideIndex].classList.add('active');
    }
};
news.subscribe();