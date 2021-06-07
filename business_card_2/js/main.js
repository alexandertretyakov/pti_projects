document.querySelector('.module-faq').addEventListener('click', function (e) {
    e.target.classList.toggle('open');
});

var inputs = document.querySelectorAll('input');
var textarea = document.querySelector('textarea');
var button = document.querySelector('.submitting');

button.addEventListener('click', function (e) {
    var i = 0;
    while (i < inputs.length) {
        if (inputs[i].value === '') {
            inputs[i].style.border = '1px solid red';
            e.preventDefault();
        }
        i++;
    }
    if (textarea.value === '') {
        textarea.style.border = '1px solid red';
        e.preventDefault();
    }
});//работает только в кансоли
