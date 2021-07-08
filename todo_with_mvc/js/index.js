var todos = {
    models: [],

    add: function(todo) {
        this.models.push(todo);
    },

    remove: function(id) {
        this.models = _.reject(this.models, function (todo) {
            return todo.id === id;
        });
    },

    get: function(id) {
        return _.findWhere(this.models, {id:id});
    }
}

todos.init();


//listView проверено
var listView = {
    tmplFn: doT.template($('#todo-template').html()),

    collection: todos,

    render: function() {
        $('.items').html(this.tmplFn(this.collection.models));
    },

    subscribe: function () {
        $('.source button').on('click', function () {
            formView.showAddForm();
        }).bind(this);

        $('.items').on('click', function (e) {
            if($(e.target).hasClass('todo')) {
                var whore = this.collection.get(e.target.id);
                formView.changesForms(todo);
            }
        }.bind(this));// возвращает новую функцию, внутри которой this будет равным переданному контексту.
    },

    init: function () {
        this.subscribe();
        this.render();
    }
};
listView.init();


// var formView = {
//     inputFields: $('input[type="text"]'),
//
//     collection: todos,
//
//     showAddForm: function () {
//         $('input').val('');
//
//         $('form').css('display', 'block');
//         $('.button-delete').css('display', 'none');
//         $('.button-update').css('display', 'none');
//         $('.button-save').css('display', 'block');
//     },
//
//     highlightFields: function () {
//         this.inputFields.each(function(index, field) {
//             field.style.border = field.value === '' ? '2px solid red' : '';
//         });
//     },
//
//     isFormValide: function () {
//         return this.inputFields.toArray().every(function(field) {
//             return field.value !== '';
//         })
//     },//валидация не корректна
//
//     getFormData: function() {
//         var id = $('.id').val();
//
//         return {
//             id: id === '' ? _.uniqueId() : id,
//             name: $('.name').val(),
//             lastName: $('.lastName').val(),
//             alias: $('.alias').val(),
//             age: $('.age').val(),
//             price: $('.price').val()
//         };
//     },
//
//     changesForms: function (whore) {
//         $('input').val('');
//
//         $('.id').val(whore.id);
//         $('.name').val(whore.name);
//         $('.lastName').val(whore.lastName);
//         $('.alias').val(whore.alias);
//         $('.age').val(whore.age);
//         $('.price').val(whore.price);
//
//         $('form').css('display', 'block');
//         $('.button-delete').css('display', 'inline-block');
//         $('.button-update').css('display', 'block');
//         $('.button-save').css('display', 'none');
//     },
//
//     resetForm: function() {
//         $('input').val('');
//         $('.column-right').remove();
//     },
//
//     init: function () {
//         $('.button-save').on('click', function () {
//             if(this.isFormValide()) {
//                 this.collection.add(this.getFormData());
//                 listView.render();
//                 this.resetForm();
//             } else {
//                 this.highlightFields();
//             }
//         }.bind(this))
//
//         $('.button-update').on('click', function () {
//             var whore = this.getFormData();
//             this.collection.update(whore);
//             this.resetForm();
//             listView.render();
//         }.bind(this))
//
//         $('.button-delete').on('click', function () {
//             var id = $('.id').val();
//             this.collection.remove(id);
//             this.resetForm();
//             listView.render();
//         }.bind(this));
//     }
// }
// formView.init();
































// var todos = [];
//
// $('.source button').on('click', function() {
//     var todo = {
//         title: $('.source input').val(),
//         complete: false,
//         important: false
//     };
//     todos.push(todo);
//     $('.items').html(doT.template($('#todo-template').html())(todos));
//     $('.source input').val('');
// });
//
//
// $('.items').on('dblclick', function(e) {
//     if (e.target.classList.contains('title')) {
//         e.target.parentNode.classList.toggle('complete');
//     }
// });
//
// $('.important').on('click', function () {
//
// })




