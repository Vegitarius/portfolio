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

const contactScroll = () => {
  document.getElementById('contact').scrollIntoView({ 
    behavior: 'smooth' 
  });
  hamburger.classList.toggle("change");
  mobileNavDisplay();
};

const qualScroll = () => {
  document.getElementById("qualifications").scrollIntoView({
    behavior: 'smooth'
  });
  hamburger.classList.toggle("change");
  mobileNavDisplay();
};

const aboutScroll = () => {
  document.getElementById("about").scrollIntoView({
    behavior: 'smooth'
  });
  hamburger.classList.toggle("change");
  mobileNavDisplay();
};

const aboutScrollOutside = () => {
  window.location.href = "/";
  aboutScroll();
};