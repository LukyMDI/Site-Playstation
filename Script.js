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
var txtbg2 = document.getElementById('txt-bg2');

document.addEventListener("scroll", function(){
    var posicaoy = window.pageYOffset;
    if(posicaoy >= 120){
        bg2.style.animation = "bg2-anim 1.5s";
//---------------Animação do texto-bg2-------------------//
        if(posicaoy >= 650){
            txtbg2.style.animation = "bg2-anim 0.8s";
            txtbg2.style.transition = "none";
            txtbg2.style.opacity = "1";
        }else if(posicaoy < 580){
            txtbg2.style.animation = "none";
            txtbg2.style.transition = "opacity 0.8s";
            txtbg2.style.opacity = "0";
        }
    }else{
        bg2.style.animation = "none";
    }
});