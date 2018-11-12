const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");
const contacts = document.querySelectorAll(".contact-right");
let aScrollPosition = window.pageYOffset;
const socialBar =document.getElementById("social-bar");

hamburgerToggle = () => {
  hamburger.classList.toggle("change");
  navbar.classList.toggle("active");
};

hamburger.addEventListener("click", hamburgerToggle);

navLinks.forEach(link => {
  link.onmouseover = (event) => {
    navLinks.forEach(link => {
      link.style.opacity = ".15";
      event.target.style.opacity = "1";
      event.target.classList.add("jello");
    })
  }
});

navLinks.forEach(link => {
  link.onmouseleave = (event) => {
    navLinks.forEach(link => {
      link.style.opacity = "1";
      event.target.classList.remove("jello");
    })
  }
});

document.getElementById("nav-contact").addEventListener("click", function() {
  document.getElementById('contact').scrollIntoView({ 
    behavior: "smooth",
  });
    hamburgerToggle();
});

contacts.forEach(link => {
  link.onmouseover = (event) => {
    event.target.classList.add("pulse");
  }
});

contacts.forEach(link => {
  link.onmouseleave = (event) => {
    event.target.classList.remove("pulse")
  }
});

window.onscroll = function() {
  let bScrollPosition = window.pageYOffset;
  if (aScrollPosition > bScrollPosition) {
    socialBar.style.bottom = "0";
  } else {
    socialBar.style.bottom = "-50px";
  }
  aScrollPosition = bScrollPosition;
  socialBar.style.display = "inline";
}