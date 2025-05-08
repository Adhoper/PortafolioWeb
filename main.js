/* Función de Navegación de la Barra */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}

/* Cerrar menú cuando se haga clic en un enlace */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        var menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.classList.contains("responsive")) {
            menuBtn.classList.remove("responsive");
        }
    });
});


//Modo Oscuro

const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

document.addEventListener("DOMContentLoaded", () => {
    // Verifica si el modo oscuro ya está guardado
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
    }

    // Cuando el usuario hace clic en el toggle, guarda la preferencia
    toggleSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        // Guardar la preferencia en localStorage
        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        headerShadow(); // Esto ya lo tienes
    });
});



/*Sombra en la barra de navegacion mientras se scrolea*/

window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");
    const navMenu = document.querySelector(".nav-menu");

    const isDarkMode = body.classList.contains("dark");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        if(isDarkMode){

            navHeader.style.boxShadow = "0 1px 6px rgba(255, 255, 255, 0.3)"
        }
        else{

            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
        }
        
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = "70px"
    }
    else{
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px"
    }

    //Hace que cuando esta en 900 de tamaño se ajuste al header cuando sube y baja

    if (window.innerWidth <= 900) {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            navMenu.style.top = "68px"
            navMenu.style.height = "93vh"
        }
        else{
            navMenu.style.top = "80px"
            navMenu.style.height = "90vh"
        }

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
    reset: false
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
sr.reveal('.experience-box',{interval: 40});

//Headings

sr.reveal('.top-header',{interval: 18});

//About Info && Contact Info

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1050,
    reset: false
})

srLeft.reveal('.about-info',{delay: 18})
srLeft.reveal('.contact-info',{delay: 18})

//Skills y Forms

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1050,
    reset: false
})


// Nueva animación para sección "Acerca de mí"
srLeft.reveal('.about-info-card', { delay: 100 });
srRight.reveal('.skills-card-column', { interval: 100 });
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

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

//Animacion linea de tiempo
function revealTimeline() {
    const items = document.querySelectorAll('.experience-container');
    const timeline = document.querySelector('.time-line');

    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('in-view');
        }
    });

    // Activa la animación de la línea solo si cualquier ítem está en vista
    if (isInViewport(timeline)) {
        timeline.classList.add('animate-line');
    }
}

//Proyectos

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', function () {
  const items = document.querySelectorAll('.item');
  if (items.length > 1) {
    document.querySelector('.slide').appendChild(items[0]);
  }
});

prev.addEventListener('click', function () {
  const items = document.querySelectorAll('.item');
  if (items.length > 1) {
    document.querySelector('.slide').prepend(items[items.length - 1]);
  }
});

// ScrollReveal animación
sr.reveal('.project-container-wrapper', { delay: 100 });



// Ejecuta cuando carga y cuando haces scroll
window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);


