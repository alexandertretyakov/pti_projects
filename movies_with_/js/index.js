//#movie-template-one
$.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:3000/movies',
    dataType: 'json'
}).done(function(movies) {
    var movieTemplate = $('#movie-template-one').html();
    $('.state-tiles').html(doT.template(movieTemplate)(movies));
});

//#movie-template-two
$.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:3000/movies',
    dataType: 'json'
}).done(function(movies) {
    //Время в часах
    var timeHours = function (movies) {
        var i = 0;
        while (i < movies.length) {
            movies[i].hours = movies[i].time / 60;
            movies[i].hours.toFixed(2)
            console.log(movies[i].hours.toFixed(2))
            i++;
        }
        return movies.hours
    }
    timeHours(movies)

    var movieTemplate = $('#movie-template-two').html();
    $('.state-list').html(doT.template(movieTemplate)(movies));
});

//Отображение списком
$('.list').on('click', function () {
    $('.state-tiles').toggleClass('hidden');
})

//Отображение плиткой
$('.tile').on('click', function () {
    $('.state-list').toggleClass('hidden');
})

