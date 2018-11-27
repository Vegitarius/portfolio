particlesJS.load('particles-js', '../assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

document.getElementById("welcome-button").addEventListener("click", function() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("nav-about").addEventListener("click", function() {
  const about = document.getElementById("about")
  about.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
    hamburgerToggle();
});

document.getElementById("nav-qual").addEventListener("click", function() {
  const quals = document.getElementById("qualifications");
  quals.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
    hamburgerToggle();
});