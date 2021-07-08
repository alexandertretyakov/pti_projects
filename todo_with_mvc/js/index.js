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

        $('.items .important').on('click', function() {
            // TODO
            console.log('Пометить как важное');
        }.bind(this));

        $('.items .delete').on('click', function() {
            // TODO
            console.log('Удалить');
        }.bind(this));

        $('.items .title').on('dblclick', function() {
            // TODO
            console.log('Пометить как завершенное');
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
