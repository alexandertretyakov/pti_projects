var todos = [];

$('.source button').on('click', function() {
    var todo = {
        title: $('.source input').val(),
        complete: false,
        important: false
    };
    todos.push(todo);
    $('.items').html(doT.template($('#todo-template').html())(todos));
    $('.source input').val('');
});


$('.items').on('dblclick', function(e) {
    if (e.target.classList.contains('title')) {
        e.target.parentNode.classList.toggle('complete');
    }
});

$('.important').on('click', function () {

})




