//Ej 1
document.getElementById('gen-1').innerHTML = 'Generasión 1 Pokimon';
//Ej 2
document.getElementsByClassName('infocard-list infocard-list-pkmn-lg')[0].style.backgroundColor = 'green';
//Ej 3 
console.log(window.location.href);
//Ej 4
console.log(window.location.host) 
//Ej 5
console.log(document.images);

/*
let  imgs = document.querySelectorAll('img-fixed img-sprite');
for(let i= 0; i< imgs.length; i++) {
    console.log(imgs[i]);
}
*/
//Ej 6
let imgs = document.images; 
for (let i= 0; i<imgs.length; i++) {
    imgs[i].src= "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
/*
let img = document.querySelectorAll('img');
for (let i = 0; i< img.length; i++) {
    img[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
} */
//Ej 7
