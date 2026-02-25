



// swiper js picture slider

var swiper = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// calculate savings js

function calculateSavings(){

    const material = document.getElementById("material").value;
    const weight = document.getElementById("weight").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if(weight == ""){
      result.innerText = "Input a specific weight"
      return false;
    }

   if(material === "plastic" && unit === "kg"){
     let total = weight * 2.5;
     result.innerHTML = `CO<sub>2</sub>e = ${total}${unit} CO<sub>2</sub>e (You saved ${total}${unit} of CO<sub>2</sub>e by recycling ${weight}${unit} of plastic.)`
    }
    else if(material === "paper" && unit === "kg"){
      let total = weight * 1.2;
     result.innerHTML = `CO<sub>2</sub>e = ${total}${unit} CO<sub>2</sub>e (You saved ${total}${unit} of CO<sub>2</sub>e by recycling ${weight}${unit} of paper.)`
    }
  
}


// reset function
function reset(){
    document.getElementById("material").value = "plastic";
    document.getElementById("weight").value = "";
    document.getElementById("unit").value = "kg";
    document.getElementById("result").innerHTML = "";
}



// Nav slide

function navSlide() {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  if (!burger || !navbar) return;

  burger.addEventListener('click', function () {
    navbar.classList.toggle('active');
    burger.classList.toggle('close');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbar.classList.remove('active');
      burger.classList.remove('close');
    });
  });
}

navSlide();


// ScrollSpy (index page section tracking)
function initScrollSpy() {
  const navbar = document.querySelector('#main-navbar');
  const body = document.body;

  if (!navbar || typeof bootstrap === 'undefined') return;

  bootstrap.ScrollSpy.getOrCreateInstance(body, {
    target: '#main-navbar',
    offset: 110
  });

  const hashLinks = navbar.querySelectorAll('.nav-link[href^="#"]');
  const syncNavActiveClass = () => {
    hashLinks.forEach(link => link.classList.remove('nav-active'));
    const activeHashLink = navbar.querySelector('.nav-link.active[href^="#"]');
    if (activeHashLink) activeHashLink.classList.add('nav-active');
  };

  body.addEventListener('activate.bs.scrollspy', syncNavActiveClass);
  syncNavActiveClass();
}

initScrollSpy();


// Nav Hover effect

function navActiveState() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (this.getAttribute('href').startsWith('#')) return;
      navLinks.forEach(l => l.classList.remove('nav-active'));
      this.classList.add('nav-active');
    });
  });
}
navActiveState();
