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
};

const hamburgerToggle = () => {
  hamburger.classList.toggle("change");
}

hamburger.addEventListener("click", mobileNavDisplay);

hamburger.addEventListener("click", hamburgerToggle);