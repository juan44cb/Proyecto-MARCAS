// DECLARAMOS LA VARIABLE Y HACEMOS QUE SEA IGUALA 1
var slideIndex = 1;
showSlides(slideIndex);

// DECLARAMOS LA VARIABLE DE CONTROL DE DIAPOSITIVA
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// PROGRAMA DE CONTROL DE IMAGENES
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //++ SIRVE PARA INCREMENTAR 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}