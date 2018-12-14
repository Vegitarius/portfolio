"use strict";

particlesJS.load('particles-js', '../../assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});
var welcome = document.getElementById("welcome-button");
var about = document.getElementById("nav-about");
var qual = document.getElementById("nav-qual");
welcome.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});
about.addEventListener("click", function () {
  var about = document.getElementById("about");
  about.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
  hamburgerToggle();
});
qual.addEventListener("click", function () {
  var quals = document.getElementById("qualifications");
  quals.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
  hamburgerToggle();
});