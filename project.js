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
});

let imgToggler = (name, amount) => {
  setInterval(function() {
    let img = document.getElementById("project1-image");
    let pic = Number(img.src.slice(-5, -4));
    if (pic >= amount) {
      img.src = `./assets/${name}01.png`
    } else {
      img.src = `./assets/${name}0${++pic}.png`
    }
    console.log(pic, img.src);
  }, 5000)

}

imgToggler("detect", 6);