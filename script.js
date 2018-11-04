const hamburger = document.getElementById("hamburger");

const mobileNavDisplay = () => {
  const x = document.getElementById("navbar-links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
  };
}

hamburger.addEventListener("click", mobileNavDisplay);

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("change");
});

document.getElementById("nav-about").addEventListener("click", function() {
  const about = document.getElementById("about")
  
  about.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
  if (window.innerWidth <= 1366) {
    hamburger.classList.toggle("change");
    mobileNavDisplay();
    about.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  }
});

document.getElementById("nav-qual").addEventListener("click", function() {
  const quals = document.getElementById("qualifications")
  quals.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
  if (window.innerWidth <= 1366) {
    hamburger.classList.toggle("change");
    mobileNavDisplay();
    quals.scrollIntoView({
      block: "start",
      behavior: "smooth"
    })
  }
});

const contactScroll = () => {
  document.getElementById('contact-topper').scrollIntoView({ 
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
  if (window.innerWidth <= 1366) {
    hamburger.classList.toggle("change");
    mobileNavDisplay();
  }
};