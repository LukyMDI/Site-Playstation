//----------Animação da Navbar-----------//
var nav = document.getElementById('header');

document.addEventListener("scroll", function(){
    var posicaoy = window.pageYOffset;
    if(posicaoy <= 150){
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
            txtbg2.style.animation = "bg2-anim 2.5s";
            txtbg2.style.transition = "none";
            txtbg2.style.opacity = "1";
        }else if(posicaoy < 600){
            txtbg2.style.animation = "none";
            txtbg2.style.transition = "opacity 1s";
            txtbg2.style.opacity = "0";
        }
    }else{
        bg2.style.animation = "none";
    }
});
//-------------Animação box do terceiro background-----------//
var bg3 = document.getElementById('box-bg3');
var quad1Bg3 = document.getElementById('quad1-bg3');
var linha1Bg3 = document.getElementById('linha1-bg3');
var quad2Bg3 = document.getElementById('quad2-bg3');
var linha2Bg3 = document.getElementById('linha2-bg3');
var quad3Bg3 = document.getElementById('quad3-bg3');
var linha3Bg3 = document.getElementById('linha3-bg3');

document.addEventListener("scroll", function(){
    var posicaoy = window.pageYOffset;

    if(posicaoy >= 1000){
        bg3.style.opacity = "1";
        linha1Bg3.style.opacity = "1";
        linha1Bg3.style.transition = "opacity 0.8s linear 400ms";
        quad1Bg3.style.opacity = "1";
        quad1Bg3.style.transition = "opacity 0.8s linear 800ms";
        linha2Bg3.style.opacity = "1";
        linha2Bg3.style.transition = "opacity 0.8s linear 1200ms";
        quad2Bg3.style.opacity = "1";
        quad2Bg3.style.transition = "opacity 0.8s linear 1600ms";
        linha3Bg3.style.opacity = "1";
        linha3Bg3.style.transition = "opacity 0.8s linear 2000ms";
        quad3Bg3.style.opacity = "1";
        quad3Bg3.style.transition = "opacity 0.8s linear 2400ms";
    }else{
        bg3.style.opacity = "0";
        linha1Bg3.style.opacity = "0";
        linha1Bg3.style.transition = "opacity 0s linear 0ms";
        quad1Bg3.style.opacity = "0";
        quad1Bg3.style.transition = "opacity 0s linear 0ms";
        linha2Bg3.style.opacity = "0";
        linha2Bg3.style.transition = "opacity 0s linear 0ms";
        quad2Bg3.style.opacity = "0";
        quad2Bg3.style.transition = "opacity 0s linear 0ms";
        linha3Bg3.style.opacity = "0";
        linha3Bg3.style.transition = "opacity 0s linear 0ms";
        quad3Bg3.style.opacity = "0";
        quad3Bg3.style.transition = "opacity 0s linear 0ms";
    }
});