
particlesJS.load('particles-js', '../../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const welcome = document.getElementById("welcome-button");
const about = document.getElementById("nav-about");
const qual = document.getElementById("nav-qual");

welcome.addEventListener("click", function() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

about.addEventListener("click", function() {
  const about = document.getElementById("about")
  about.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
    hamburgerToggle();
});

qual.addEventListener("click", function() {
  const quals = document.getElementById("qualifications");
  quals.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
    hamburgerToggle();
});