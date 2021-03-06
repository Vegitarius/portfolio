let slideIndex = 1;

showSlides(slideIndex, "proj-1", 'dot1');
showSlides(slideIndex, "proj-2", 'dot2');
showSlides(slideIndex, "proj-3", 'dot3');
showSlides(slideIndex, "proj-4", 'dot4');

function plusSlides(n, pName, dName) {
  showSlides(slideIndex += n, pName, dName);
}

function currentSlide(n, pName, dName) {
  showSlides(slideIndex = n, pName, dName)
}

function showSlides(n, pName, dName) {
  let i;
  let slides = document.getElementsByClassName(pName);
  let dots = document.getElementsByClassName(dName);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}