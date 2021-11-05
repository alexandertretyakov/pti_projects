var banner = {
    slides: document.querySelectorAll('.banner-text'),
    slidesLength: document.querySelectorAll('.banner-text').length,
    activeSlideIndex: 0,
    next: document.querySelector('.next-banner'),
    previous: document.querySelector('.previous-banner'),

    init: function() {
        this.next.addEventListener('click', function() {
            console.log(banner.activeSlideIndex)
            this.activeSlideIndex = this.activeSlideIndex === this.slidesLength - 1 ? 0 : this.activeSlideIndex + 1;
            this.showSlide();
        }.bind(this));

        this.previous.addEventListener('click', function() {
            this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slidesLength - 1 : this.activeSlideIndex - 1;
            this.showSlide();
        }.bind(this));
    },

    showSlide: function() {
        this.slides.forEach(function(e) {
            e.classList.remove('active');
        });
        this.slides[this.activeSlideIndex].classList.add('active');
    }
};
banner.init();



var pagination = {
    buttons: document.querySelectorAll('.button-pagination'),
    slides: document.querySelectorAll('.banner-text'),

    init: function () {
        this.buttons.forEach(function(el) {
            el.addEventListener('click', function(e) {
                this.buttonsDeleteClass();
                this.buttonAddActive(e);
                this.findIndex();
                this.showSlide();
            }.bind(this))
        });
    },

    buttonsDeleteClass: function() {
        this.buttons.forEach(function(e) {
            e.classList.remove('active');
        });
    },

    buttonAddActive: function(e) {
        e.target.classList.add('active');
    },

    findIndex: function() {
        banner.activeSlideIndex = Number(document.querySelector('.button-pagination.active').dataset.number);
    },

    showSlide: function() {
        this.slides.forEach(function(e) {
            e.classList.remove('active');
        });
        this.slides[banner.activeSlideIndex].classList.add('active');
    }
};
pagination.init();



var switchButton = {
    buttonTurn: document.querySelector('.button-turn'),
    buttonExpand: document.querySelector('.button-expand'),
    moduleBanner: document.querySelector('.module-banner'),

    init: function() {
        this.buttonExpand.addEventListener('click', function() {
            this.showBanner();
        }.bind(this));

        this.buttonTurn.addEventListener('click', function() {
            this.hideBanner();
        }.bind(this));
    },

    showBanner: function() {
        this.moduleBanner.style.display = 'block';
        this.buttonExpand.style.display = 'none';
        this.buttonTurn.style.display = 'block';
    },

    hideBanner: function() {
        this.moduleBanner.style.display = 'none';
        this.buttonTurn.style.display = 'none';
        this.buttonExpand.style.display = 'block';
    }
};
switchButton.init()


