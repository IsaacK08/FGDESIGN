/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* MENU SHOW */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*CONTACT*/

const inputs = document.querySelectorAll(".input");

function focusFunc(){
let parent = this.parentNode;
parent.classList.add("focus");
}

function blurFunc(){
    let parent2 = this.parentNode;
    if (this.value =="") {

        parent2.classList.remove("focus");
    }   
  }

inputs.forEach((input2) => {
    input2.addEventListener("focus", focusFunc);
    input2.addEventListener("blur", blurFunc);
});


/* MENU HIDDEN */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


/* PORTFOLIO SWIPER  */
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  
  },
});

/*MODAL PORTFOLIO*/
// Obtén todas las imágenes del carrusel y el modal
const portfolioImages = document.querySelectorAll('.portfolio__img');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

// Función para mostrar el modal con la imagen correspondiente
function openModal(imgSrc) {
  modal.style.display = 'block';
  modalImg.src = imgSrc;
}

// Event listeners para abrir el modal cuando se hace clic en una imagen del carrusel o en el enlace button-port
portfolioImages.forEach(image => {
  image.addEventListener('click', () => {
    openModal(image.src);
  });
});

const buttonPort = document.querySelectorAll('.button-port');
buttonPort.forEach(button => {
  button.addEventListener('click', () => {
    openModal(button.parentNode.previousElementSibling.src);
  });
});

// Event listener para cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Event listener para cerrar el modal al hacer clic fuera del modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    
  }
});

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/**/
/*TEXTO SUBTITULO*/

consoleText(['We create your identity', 'We design your website', 'We create your logo', 'We create digital content', 'We create your story'], 'text',['','','']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = [''];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 4000) /*tiempo de espera*/
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () =>{

    themeToggler.classList.toggle('active');

    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}

// theme
const icons = [...document.querySelectorAll(".theme-icon")];

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="bx bx-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="bx bx-moon"></i>';
        icon.style.color = "#121713";
      }
    });
  }
});

/*CAMBIAR IDIOMA*/
let select_dropdown = document.querySelector('.dropdown');

async function countryList() {
  let data = await fetch('img/tukishopdef.png');
  let response = await data.json();

  response.forEach((element) => {
    let option = document.createElement('li');
    option.className = 'option';
    option.setAttribute('value', element.name.common);
    option.innerHTML = `<img src="${element.flags.svg}" alt="${element.name.common}" /> <span>${element.name.common}</span>`;
    select_dropdown.appendChild(option);
  });

  let select = document.querySelector('.select');
  let select_value = document.querySelector('.select span');
  let options = document.querySelectorAll('.dropdown-list__item');

  select.addEventListener('click', () => {
    select.classList.toggle('selected');
    select_dropdown.classList.toggle('active');
  });

  options.forEach((option) => {
    option.addEventListener('click', (e) => {
      let selected = e.target.innerText;
      select.classList.remove('selected');
      select_dropdown.classList.remove('active');
      select_value.innerText = selected;
    });
  });
}
countryList();

