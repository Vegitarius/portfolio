document.getElementById("nav-top").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  if (window.innerWidth <= 1366) {
    hamburgerToggle();
    mobileNavDisplay();
  }
})

document.getElementById("nav-contact").addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  })
  if (window.innerWidth <= 1366) {
    hamburgerToggle();
    mobileNavDisplay();
  }
})