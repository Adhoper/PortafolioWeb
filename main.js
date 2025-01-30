/*Funcion de Navegacion de la Barra*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive"
    }else{
        menuBtn.className = "nav-menu"
    }
}

/*Sombra en la barra de navegacion mientras se scrolea*/

window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = "70px"
    }
    else{
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px"
    }
}

// Efecto de Escritura
var typingEffect = new Typed(".typedText",{
    strings : ["Programador", "Desarrollador"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

//Scroll Animacion de revelado

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: true
})

//Home

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:20})
sr.reveal('.featured-text-info',{delay:40})
sr.reveal('.featured-text-btn',{delay:40})
sr.reveal('.social_icons',{delay:40})
sr.reveal('.featured-image',{delay:65})

//Project Box

sr.reveal('.project-box',{interval: 40});

//Headings

sr.reveal('.top-header',{interval: 18});

//About Info && Contact Info

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1050,
    reset: true
})

srLeft.reveal('.about-info',{delay: 18})
srLeft.reveal('.contact-info',{delay: 18})

//Skills y Forms

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1050,
    reset: true
})

srLeft.reveal('.skills-box',{delay: 18})
srLeft.reveal('.form-control',{delay: 18})

//Cambiar el Link Activo

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.add('active-link');
        }
        else{
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive);

// Cambiar texto del primer boton dependiendo del tamaño

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn-first");
    const span = button.querySelector("span"); // Obtiene el span dentro del botón

    function updateButtonText() {
        if (window.innerWidth <= 1050) {
            span.textContent = " CV "; // Cambia el texto a "CV"
        } else {
            span.textContent = " Descargar CV "; // Restaura el texto completo
        }
    }

    updateButtonText(); // Ejecuta al inicio
    window.addEventListener("resize", updateButtonText); // Escucha cambios de tamaño
});
