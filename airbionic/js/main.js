//---Module: FAQ
var questions = document.querySelectorAll('dt');
var i = 0;
while (i < questions.length) {
    questions[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
    i++;
}