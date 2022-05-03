//----------------------------------------------------AppView
var AppView = Backbone.View.extend({
    initialize() {
        this.$el.addClass('app');
        this.$el.appendTo('body');
        this.render();
    },

    tmplFnApp: $('#app-template').html(),

    render() {
        this.$el.html(doT.template(this.tmplFnApp));
        return this;
    }
});

var appView = new AppView;

//----------------------------------------------------MainView
var MainView = Backbone.View.extend({
    initialize() {
        this.$el.addClass('main');
        $('header').after(this.el);
        this.render();
    },

    tmplFnMain: $('#module1-template').html(),

    events: {
        'click .module1': 'toggleBorder'
    },

    toggleBorder(e) {
        $(e.currentTarget).toggleClass('outline');
    },

    render() {
        this.$el.html(doT.template(this.tmplFnMain)([0, 1, 2, 3]));
        return this;
    }
})

var mainView = new MainView;

//----------------------------------------------------AsideView
var AsideView = Backbone.View.extend({
    initialize() {
        this.$el.addClass('aside');
        $('footer').before(this.el);
        this.render();
    },

    tmplFnAside: $('#module2-template').html(),

    events: {
        'click .module2': 'toggleBackground'
    },

    toggleBackground(e) {
        $(e.currentTarget).toggleClass('bg');
    },

    render() {
        this.$el.html(doT.template(this.tmplFnAside)([0, 1, 2]));
        return this;
    }
})

var asideView = new AsideView;

