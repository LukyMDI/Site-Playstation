//----------Animação da Navbar-----------//
var nav = document.getElementById('header');

document.addEventListener("scroll", function(){
    var posicaoy = window.pageYOffset;
    if(posicaoy <= 80){
        nav.style.position = "relative";
        nav.style.animation = "none";
    }else{
        nav.style.position = "fixed";
        nav.style.animation = "nav-animation 0.5s";
    }
});
//-----------Animação do segundo background----------//
var bg2 = document.getElementById('bg-2');

document.addEventListener("scroll", function(){
    var posicaoy = window.pageYOffset;
    if(posicaoy >= 100){
        bg2.style.animation = "bg2-anim 0.5s";
    }else{
        bg2.style.animation = "none";
    }
});