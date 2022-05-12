var AppView = Backbone.View.extend({
    initialize() {
        $('body').append(this.render().el);
    },

    className: 'app',

    render() {
        this.$el.html(doT.template($('#app-template').html()));

        this.$('.main').append(new Module1().render().el);
        this.$('.main').append(new Module1().render().el);
        this.$('.main').append(new Module1().render().el);
        this.$('.aside').append(new Module1().render().el);
        this.$('.aside').append(new Module2().render().el);
        this.$('.aside').append(new Module2().render().el);
        this.$('.aside').append(new Module2().render().el);

        return this;
    }
});

var Module1 = Backbone.View.extend({
    events: {
        'click button': 'onClick'
    },

    className: 'module1',

    onClick() {
        this.$el.toggleClass('outline');
    },

    render() {
        this.$el.html(doT.template($('#module1-template').html()));

        return this;
    }
});

var Module2 = Backbone.View.extend({
    events: {
        'click button': 'onClick'
    },

    className: 'module2',

    onClick() {
        this.$el.toggleClass('bg');
    },

    render() {
        this.$el.html(doT.template($('#module2-template').html()));

        return this;
    }
});

var appView = new AppView;

var CircleModel = Backbone.Model.extend({
    initialize() {
        this.x = x;
        this.y = y;
        this.radius = radius;
    },

    getDiameter() {
        var diameter = 2 * this.radius;
        return diameter;
    },

    getPerimeter() {
        var diameter = 2 * this.radius;
        var perimeter = 3.14 * diameter;
        return perimeter;
    },

    getSquare() {
        var square = 3.14 * this.radius * this.radius;
        return square;
    }
});

var circle1 = new CircleModel(5, 5, 10);
var circle2 = new CircleModel(10, 10, 20);


