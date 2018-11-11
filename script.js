const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");
const contacts = document.querySelectorAll(".contact-right");

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
  if (window.innerWidth <= 1366) {
    hamburgerToggle();
    mobileNavDisplay();
  };
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
})