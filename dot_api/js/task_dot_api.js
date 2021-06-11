// Write your code here
console.log('Hello world!');
//Games
document.querySelector('.add-games').addEventListener('click', function()  {
    var gameTemplate = document.querySelector('#game-template').innerHTML;
    document.querySelector('#games').innerHTML += doT.template(gameTemplate)(games)
    document.querySelector('#games').css('display', 'block')
})



//Whores
document.querySelector('.add-whores').addEventListener('click', function()  {
    var whoreTemplate = document.querySelector('#whore-template').innerHTML;
    document.querySelector('#whores').innerHTML += doT.template(whoreTemplate)(whores)
})