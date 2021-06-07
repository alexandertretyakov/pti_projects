// var inputs = document.querySelectorAll('input');
// var textarea = document.querySelector('textarea');
// var button = document.querySelector('.submitting');
//
// button.addEventListener('click', function (e) {
//     var i = 0;
//     while (i < inputs.length) {
//         if (inputs[i].value === '') {
//             inputs[i].style.border = '1px solid red';
//             e.preventDefault();
//         }
//         i++;
//     }
//     if (textarea.value === '') {
//         textarea.style.border = '1px solid red';
//         e.preventDefault();
//     }
// });


var galleryItems = document.querySelectorAll('.go');
var overlay = document.querySelector('.overlay');
var i = 0;
while (i < galleryItems.length) {
    galleryItems[i].addEventListener('click', function (e) {
        e.preventDefault();
        var newImage = document.createElement('img');
        newImage.className = 'newImage';
        newImage.setAttribute('src', this.href);
        document.querySelector('.module-projects').appendChild(newImage);
        overlay.style.display = 'block';

        newImage.addEventListener('click', function () {
            this.remove();
            overlay.style.display = 'none';
        })
    });
    i++;
}

