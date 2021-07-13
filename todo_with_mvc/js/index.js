var tasks = {
    models: [],

    // C => add
    // R => get
    // U => updtae
    // D => remove

    add: function(task) {
        this.models.push(task);
        $(this).trigger('change');
    },

    get: function(id) {
        return _.findWhere(this.models, {id: id});
    },

    update: function(updatedTask) {
        var task = _.findWhere(this.models, {id: updatedTask.id});
        _.extend(task, updatedTask);
        $(this).trigger('change');
    },

    remove: function(id) {
        this.models = _.reject(this.models, function(task) {
            return task.id === id;
        });
        $(this).trigger('change');
    }
};

var listView = {
    tmplFn: doT.template($('#tasks-template').html()),

    collection: tasks,

    render: function() {
        $('#tasks').html(this.tmplFn(this.collection.models));
        this.subscribe();
    },

    subscribe: function () {
        $(this.collection).on('change', function() {
            this.render();
        }.bind(this));

        $('.items .important').on('click', function(e) {
            // TODO
            console.log('Пометить как важное');
            $(e.target.parentNode.parentNode).toggleClass('important')
        }.bind(this));

        $('.items .delete').on('click', function(e) {
            // TODO
            console.log('Удалить');
            $(e.target.parentNode.parentNode).remove()
        }.bind(this));

        $('.items .title').on('dblclick', function(e) {
            // TODO
            console.log('Пометить как завершенное');
            if (e.target.classList.contains('title')) {
                e.target.parentNode.classList.toggle('complete');
            }
        }.bind(this));
    },

    init: function () {
        this.render();
    }
};

listView.init();

var appView = {
    collection: tasks,

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    init: function() {
        $('.source .title').on('keypress', function(e) {
            if (e.keyCode === 13 && e.target.value.trim() !== '') {
                this.collection.add({
                    id: this.getUniqId(),
                    title: e.target.value,
                    complete: false,
                    important: false
                });
                e.target.value = '';
            }
        }.bind(this));
    }
};

appView.init();


//Поисковая строка
var filter = function () {
    var input = document.querySelector('.filter-input');
    input.addEventListener('keyup', function () {
        var filter = input.value.toLowerCase();
        var filterElements = document.querySelectorAll('.item');

        filterElements.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
};

filter();

//Кнопка-фильтр "Все"
$('.all').on('click', function () {
    var items = $('.item');
    var incomplete = _.filter(items, function(element){
        console.log(element)
        console.log($(element).hasClass('complete'))
        if ($(element).hasClass('complete')) {
            $(element).remove()
        }
    });
});


//Кнопка-фильтр "Незавершённые"
$('.incomplete').on('click', function () {
    var items = $('.item');
    var incomplete = _.filter(items, function(element){
        console.log(element)
        console.log($(element).hasClass('complete'))
        if ($(element).hasClass('complete')) {
            $(element).remove()
        }
    });
});


//Кнопка-фильтр "Завершённые"
$('.complete').on('click', function () {
    var items = $('.item');
    var complete = _.filter(items, function(element){
        if ($(element).hasClass('complete')) {
            null
        } else {
            $(element).remove()
        }
    });
});





