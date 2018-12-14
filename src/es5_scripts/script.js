"use strict";

// require("core-js/modules/web.dom.iterable");

var hamburger = document.getElementById("hamburger");
var navLinks = document.querySelectorAll(".nav-link");
var navbar = document.getElementById("navbar");
var contacts = document.querySelectorAll(".contact-right");
var aScrollPosition = window.pageYOffset;
var socialBar = document.getElementById("social-bar");

var hamburgerToggle = function hamburgerToggle() {
  hamburger.classList.toggle("change");
  navbar.classList.toggle("active");
};

hamburger.addEventListener("click", hamburgerToggle);
navLinks.forEach(function (link) {
  link.onmouseover = function (event) {
    navLinks.forEach(function (link) {
      link.style.opacity = ".15";
      event.target.style.opacity = "1";
      event.target.classList.add("grow");
    });
  };
});
navLinks.forEach(function (link) {
  link.onmouseleave = function (event) {
    navLinks.forEach(function (link) {
      link.style.opacity = "1";
      event.target.classList.remove("grow");
    });
  };
});
document.getElementById("nav-contact").addEventListener("click", function () {
  document.getElementById('contact').scrollIntoView({
    behavior: "smooth"
  });
  hamburgerToggle();
});
contacts.forEach(function (link) {
  link.onmouseover = function (event) {
    event.target.classList.add("grow");
  };
});
contacts.forEach(function (link) {
  link.onmouseleave = function (event) {
    event.target.classList.remove("grow");
  };
});

window.onscroll = function () {
  var bScrollPosition = window.pageYOffset;

  if (aScrollPosition > bScrollPosition) {
    socialBar.style.bottom = "0";
  } else {
    socialBar.style.bottom = "-50px";
  }

  aScrollPosition = bScrollPosition;
  socialBar.style.display = "inline";
};