//---Module: FAQ
var questions = document.querySelectorAll('dt');
var i = 0;
while (i < questions.length) {
    questions[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
    i++;
}

//---Module: Contacts
var inputs = document.querySelectorAll('input');
var textarea = document.querySelector('textarea');
var button = document.querySelector('.submitting');

button.addEventListener('click', function (e) {
    var i = 0;
    while (i < inputs.length) {
        if (inputs[i].value === '') {
            inputs[i].style.border = '2px solid red';
        } else {
            inputs[i].style.border = '2px solid #7e7e7e';
        }
        if (inputs[i].value === '' && textarea.value === '') {
            e.preventDefault();
        }
        i++;
    }

    if (textarea.value === '') {
        textarea.style.border = '2px solid red';
    } else {
        textarea.style.border = '2px solid #7e7e7e';
    }
});
