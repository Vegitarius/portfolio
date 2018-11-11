const nextArrow1 = document.querySelector(".next-arrow");
const prevArrow1 = document.querySelector(".previous-arrow");

let imgToggleNext = (projectImgId, name, amount) => {
  let img = document.getElementById(projectImgId);
  let pic = Number(img.src.slice(-5, -4));
  if (pic >= amount) {
    img.src = `./assets/${name}01.png`
  } else {
    img.src = `./assets/${name}0${++pic}.png`
  }
};

let imgTogglePrev = (projectImgId, name, amount) => {
  let img = document.getElementById(projectImgId);
  let pic = Number(img.src.slice(-5, -4));
  if (pic <= 1) {
    img.src = `./assets/${name}0${amount}.png`
  } else {
    img.src = `./assets/${name}0${--pic}.png`
  };
};

nextArrow1.addEventListener("click", function() {
  imgToggleNext("project1-image", "detect", 6)
});

prevArrow1.addEventListener("click", function() {
  imgTogglePrev("project1-image", "detect", 6)
});