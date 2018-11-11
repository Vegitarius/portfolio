particlesJS.load('particles-js', './assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const projects = document.getElementById("project-anchor");
const proj = projects.querySelector("a");

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
  if (window.innerWidth <= 1366) {
    hamburgerToggle();
    mobileNavDisplay();
    about.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  }
});

document.getElementById("nav-qual").addEventListener("click", function() {
  const quals = document.getElementById("qualifications");
  
  quals.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
  if (window.innerWidth <= 1366) {
    hamburgerToggle();
    mobileNavDisplay();
    quals.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  }
});

proj.onmouseover = (event) => {
  event.target.classList.add("pulse");
};

proj.onmouseleave = (event) => {
  event.target.classList.remove("pulse");
}