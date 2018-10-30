const button = document.getElementById("contact-submit");
const response = document.getElementById("server-response");

particlesJS.load('particles-js', './assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

document.getElementById("welcome-button").addEventListener("click", function() {
  document.location.href = "#about"
});