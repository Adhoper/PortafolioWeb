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


// Idioma del portafolio (Español / English)
const translations = {
  es: {
    "meta.title": "Portafolio AC",
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.prefix": "Soy",
    "hero.typed": ["Programador", "Desarrollador"],
    "hero.description": "Full Stack con visión técnica, enfoque humano y mentalidad de mejora constante.",
    "hero.downloadCv": "Descargar CV",
    "about.title": "Acerca de mí",
    "about.introductionTitle": "Mi introducción",
    "about.introduction": "Desarrollador Full Stack con experiencia en Angular, ASP.NET Core API y SQL Server, enfocado en soluciones web funcionales desde el backend hasta el frontend.<br><br>Ingeniero en Tecnologías Computacionales (UNIBE) y egresado del ITLA (Software). Actualmente amplío mis conocimientos en desarrollo web y exploro el desarrollo de videojuegos como complemento.",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.database": "Base de datos",
    "about.gamesInspiration": "Los videojuegos han sido mi fuente constante de diversión e inspiración",
    "about.gameDev": "Explorando el mundo del desarrollo de videojuegos",
    "experience.title": "Experiencia",
    "experience.itlaDate": "Junio 2023 – Actualidad",
    "experience.itlaRole": "Técnico Programador (Full Stack)",
    "experience.itlaDescription": "Desarrollé y optimicé soluciones web utilizando Angular, JavaScript, SQL Server y ASP.NET Core, aplicando buenas prácticas para construir sistemas eficientes y escalables.",
    "experience.xpertDate": "Enero 2021 – Marzo 2021",
    "experience.xpertRole": "Programador Junior",
    "experience.xpertDescription": "Fortalecí mis habilidades en desarrollo web con JavaScript y adquirí experiencia en la gestión de sitios con WordPress.",
    "projects.title": "Proyectos",
    "projects.simuverse": "Es una plataforma de laboratorios virtuales (VR) para física, química y electrónica. Creada con Unity VR, Angular, Tailwind y ASP.NET Core (JWT), permite prácticas inmersivas y seguras sin equipos costosos.",
    "projects.equilibrapp": "Es una aplicación web de finanzas personales. Desarrollada con Angular, Tailwind y ASP.NET Core, facilita la gestión de ingresos, gastos y cuentas por periodos, ofreciendo reportes claros y prácticos.",
    "projects.dualBalance": "Endless runner 2D desarrollado en Unity/C# bajo Adhoper Games, con sistema de energía dual, mecánicas de ataque, obstáculos dinámicos y UI/UX para Android y PC.",
    "projects.previous": "Proyecto anterior",
    "projects.next": "Proyecto siguiente",
    "projects.dualGithub": "Dual Balance en GitHub",
    "projects.dualGooglePlay": "Dual Balance en Google Play",
    "projects.dualItchio": "Dual Balance en itch.io",
    "contact.title": "A un toque",
    "contact.subtitle": "A la disposición, contáctame aquí.",
    "contact.findMe": "Encuéntrame",
    "contact.namePlaceholder": "Nombre",
    "contact.emailPlaceholder": "Correo",
    "contact.messagePlaceholder": "Mensaje",
    "contact.emailTitle": "Contacto desde Portafolio AC",
    "contact.send": "Contactar",
    "footer.rights": "Todos los derechos reservados",
    "modal.sending": "Enviando…",
    "modal.close": "Cerrar",
    "modal.successTitle": "¡Mensaje enviado!",
    "modal.successText": "Gracias por contactarme. Te responderé pronto.",
    "modal.errorTitle": "No se pudo enviar",
    "modal.errorText": "Hubo un problema al enviar tu mensaje. Intenta más tarde.",
    "modal.accept": "Aceptar"
  },
  en: {
    "meta.title": "AC Portfolio",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.prefix": "I'm a",
    "hero.typed": ["Programmer", "Developer"],
    "hero.description": "Full Stack developer with a technical mindset, a human-centered approach, and a focus on continuous improvement.",
    "hero.downloadCv": "Download CV",
    "about.title": "About me",
    "about.introductionTitle": "My introduction",
    "about.introduction": "Full Stack Developer with experience in Angular, ASP.NET Core API, and SQL Server, focused on building functional web solutions from backend to frontend.<br><br>Computer Technologies Engineer (UNIBE) and ITLA Software graduate. I currently expand my knowledge in web development and explore game development as a complementary field.",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.database": "Database",
    "about.gamesInspiration": "Video games have been a constant source of fun and inspiration for me",
    "about.gameDev": "Exploring the world of game development",
    "experience.title": "Experience",
    "experience.itlaDate": "June 2023 – Present",
    "experience.itlaRole": "Technical Programmer (Full Stack)",
    "experience.itlaDescription": "Developed and optimized web solutions using Angular, JavaScript, SQL Server, and ASP.NET Core, applying best practices to build efficient and scalable systems.",
    "experience.xpertDate": "January 2021 – March 2021",
    "experience.xpertRole": "Junior Programmer",
    "experience.xpertDescription": "Strengthened my web development skills with JavaScript and gained experience managing WordPress sites.",
    "projects.title": "Projects",
    "projects.simuverse": "A virtual laboratory platform (VR) for physics, chemistry, and electronics. Built with Unity VR, Angular, Tailwind, and ASP.NET Core (JWT), it enables immersive and safe practice without costly equipment.",
    "projects.equilibrapp": "A personal finance web application built with Angular, Tailwind, and ASP.NET Core. It simplifies the management of income, expenses, and accounts by period, providing clear and practical reports.",
    "projects.dualBalance": "2D endless runner developed in Unity/C# under Adhoper Games, featuring a dual-energy system, attack mechanics, dynamic obstacles, and UI/UX for Android and PC.",
    "projects.previous": "Previous project",
    "projects.next": "Next project",
    "projects.dualGithub": "Dual Balance on GitHub",
    "projects.dualGooglePlay": "Dual Balance on Google Play",
    "projects.dualItchio": "Dual Balance on itch.io",
    "contact.title": "Get in touch",
    "contact.subtitle": "Available to connect. Contact me here.",
    "contact.findMe": "Find me",
    "contact.namePlaceholder": "Name",
    "contact.emailPlaceholder": "Email",
    "contact.messagePlaceholder": "Message",
    "contact.emailTitle": "Contact from AC Portfolio",
    "contact.send": "Send",
    "footer.rights": "All rights reserved",
    "modal.sending": "Sending…",
    "modal.close": "Close",
    "modal.successTitle": "Message sent!",
    "modal.successText": "Thanks for reaching out. I'll get back to you soon.",
    "modal.errorTitle": "Message could not be sent",
    "modal.errorText": "There was a problem sending your message. Please try again later.",
    "modal.accept": "OK"
  }
};

const languageToggle = document.getElementById("languageToggle");
const languageToggleText = document.getElementById("languageToggleText");
let currentLanguage = localStorage.getItem("portfolioLanguage") || "es";
let typingEffect = null;

if (!translations[currentLanguage]) {
  currentLanguage = "es";
}

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.es[key] ?? key;
}

function applyLanguage(language, { refreshTyping = true } = {}) {
  if (!translations[language]) return;

  currentLanguage = language;
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (typeof value === "string") element.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-value]").forEach((element) => {
    const value = dictionary[element.dataset.i18nValue];
    if (typeof value === "string") element.value = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  if (languageToggle && languageToggleText) {
    const switchToEnglish = language === "es";
    languageToggleText.textContent = switchToEnglish ? "EN" : "ES";
    languageToggle.setAttribute(
      "aria-label",
      switchToEnglish ? "Cambiar a inglés" : "Switch to Spanish"
    );
    languageToggle.title = switchToEnglish ? "English" : "Español";
  }

  localStorage.setItem("portfolioLanguage", language);

  if (refreshTyping) {
    refreshTypingEffect();
  }
}

function refreshTypingEffect() {
  if (typingEffect) {
    typingEffect.destroy();
  }

  typingEffect = new Typed(".typedText", {
    strings: t("hero.typed"),
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
}

applyLanguage(currentLanguage, { refreshTyping: false });
refreshTypingEffect();

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "es" ? "en" : "es");
});

// Efecto de escritura administrado por el sistema de idioma

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

// srLeft.reveal('.about-info',{delay: 18})
srLeft.reveal('.contact-info',{delay: 18})
srLeft.reveal('.about-bento-left',{delay:18})

//Skills y Forms

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1050,
    reset: false
})


// Nueva animación para sección "Acerca de mí"
srLeft.reveal('.about-info-card', { delay: 100 });
srLeft.reveal('.about-bento-right',{delay:100})
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
    if (!button) return;

    const span = button.querySelector("span");
    if (!span) return;

    function updateButtonText() {
        if (window.innerWidth <= 1050) {
            span.textContent = " CV ";
        } else {
            span.textContent = currentLanguage === "en" ? " Download CV " : " Descargar CV ";
        }
    }

    updateButtonText();
    window.addEventListener("resize", updateButtonText);
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
const slide = document.querySelector('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const projectContainer = slide?.closest('.project-container');

let isProjectAnimating = false;

const isMobileProjectView = () => window.matchMedia('(max-width: 1024px)').matches;

function setProjectSwitching(isSwitching) {
  projectContainer?.classList.toggle('is-switching', isSwitching);
}

function waitForProjectTransition(element, callback, fallback = 340) {
  let finished = false;
  let timer;

  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    element.removeEventListener('transitionend', onTransitionEnd);
    element.removeEventListener('transitioncancel', finish);
    callback();
  };

  const onTransitionEnd = (event) => {
    if (
      event.target === element &&
      (event.propertyName === 'transform' || event.propertyName === 'opacity')
    ) {
      finish();
    }
  };

  element.addEventListener('transitionend', onTransitionEnd);
  element.addEventListener('transitioncancel', finish, { once: true });
  timer = setTimeout(finish, fallback);
}

if (next && prev && slide) {
  next.addEventListener('click', function () {
    if (isProjectAnimating || slide.children.length <= 1) return;

    const first = slide.firstElementChild;
    if (!first) return;

    /* Escritorio conserva exactamente el comportamiento anterior. */
    if (!isMobileProjectView()) {
      isProjectAnimating = true;
      first.classList.add('transition-out');

      setTimeout(() => {
        slide.appendChild(first);
        first.classList.remove('transition-out');
        isProjectAnimating = false;
      }, 250);

      return;
    }

    /* Móvil: sincroniza el DOM con la transición real para evitar tirones. */
    isProjectAnimating = true;
    setProjectSwitching(true);
    first.classList.add('transition-out');

    waitForProjectTransition(first, () => {
      slide.appendChild(first);
      first.classList.remove('transition-out');

      const newActive = slide.firstElementChild;
      if (!newActive) {
        setProjectSwitching(false);
        isProjectAnimating = false;
        return;
      }

      waitForProjectTransition(newActive, () => {
        setProjectSwitching(false);
        isProjectAnimating = false;
      });
    });
  });

  prev.addEventListener('click', function () {
    if (isProjectAnimating || slide.children.length <= 1) return;

    const last = slide.lastElementChild;
    if (!last) return;

    /* Escritorio conserva exactamente el comportamiento anterior. */
    if (!isMobileProjectView()) {
      isProjectAnimating = true;
      slide.prepend(last);

      requestAnimationFrame(() => {
        isProjectAnimating = false;
      });

      return;
    }

    /* Móvil: una sola transición de transform/opacity, sin animar layout. */
    isProjectAnimating = true;
    setProjectSwitching(true);
    slide.prepend(last);

    waitForProjectTransition(last, () => {
      setProjectSwitching(false);
      isProjectAnimating = false;
    });
  });
}

// ScrollReveal animación
if (isMobileProjectView()) {
  // En móvil la entrada es más corta para evitar un tirón al componer el carrusel.
  sr.reveal('.project-container-wrapper', { delay: 0, distance: '20px', duration: 500 });
} else {
  sr.reveal('.project-container-wrapper', { delay: 100 });
}


document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'cv/adriancuretCV.pdf'; // ruta del PDF
  link.download = 'CV-AdrianCuret.pdf'; // nombre con el que se descargará
  document.body.appendChild(link); // necesario para Firefox
  link.click();
  document.body.removeChild(link);
});



// Ejecuta cuando carga y cuando haces scroll
window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);


//Enviar Correo

// ---- EmailJS ----
const SERVICE_ID = 'service_i387kka';   // Dashboard → Email Services
const TEMPLATE_ID = 'template_bsjfmri'; // Dashboard → Email Templates

const form = document.getElementById('contactForm');
const btn = document.getElementById('sendBtn');
const statusEl = document.getElementById('formStatus'); // si lo usas
const loader = document.getElementById('loaderOverlay');

// Modal refs
const modal = document.getElementById('modalOverlay');
const modalOk = document.getElementById('modalOk');
const modalClose = document.getElementById('modalClose');
const modalFA = document.getElementById('modalFA');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

function showLoader(show) {
  document.body.classList.toggle('no-scroll', show);
  loader.classList.toggle('hidden', !show);
  loader.setAttribute('aria-hidden', show ? 'false' : 'true');
}
function openModal({ title, text, type = 'success' }) {
  // icono
  modalFA.className = 'fa-solid ' + (type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation');
  modalFA.classList.toggle('icon-error', type === 'error');
  modalTitle.textContent = title;
  modalText.textContent = text;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  modalOk.focus();
}
function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}
modalOk.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Limpia estado previo y muestra loader
  statusEl && (statusEl.textContent = '');
  btn.disabled = true;
  showLoader(true);

  const params = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
    title: document.getElementById('title') ? document.getElementById('title').value : 'Contacto'
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
    form.reset();
    openModal({
      title: t('modal.successTitle'),
      text: t('modal.successText'),
      type: 'success'
    });
  } catch (err) {
    console.error(err);
    openModal({
      title: t('modal.errorTitle'),
      text: t('modal.errorText'),
      type: 'error'
    });
  } finally {
    btn.disabled = false;
    showLoader(false);
  }
});