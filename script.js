/* BOTÓN */
document.getElementById("btnMensaje").addEventListener("click", () => {
  alert("🎶 Gracias por tu interés en Rondalla Sentimientos Metepec 💛");
});

/* CONTROL DE SECCIONES */
const links = document.querySelectorAll("nav a");
const secciones = document.querySelectorAll(".hero, .section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = link.getAttribute("href").replace("#", "");

    secciones.forEach(sec => sec.classList.remove("activa"));

    const seccionActiva = document.getElementById(id);
    if(seccionActiva){
      seccionActiva.classList.add("activa");
      window.scrollTo(0,0);
    }
  });
});
let pageIndex = 0;
const pages = document.querySelectorAll(".page");

function showPage(i){
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function nextPage(){
  pageIndex = (pageIndex + 1) % pages.length;
  showPage(pageIndex);
}

function prevPage(){
  pageIndex = (pageIndex - 1 + pages.length) % pages.length;
  showPage(pageIndex);
}

/* ===============================
   GALERÍA SIMPLE – UNA IMAGEN
=============================== */
const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg",
  "img/25.jpg"
 
];

let currentImage = 0;
const galleryImg = document.getElementById("galleryImage");

function showImage(){
  galleryImg.style.opacity = 0;

  setTimeout(() => {
    galleryImg.src = images[currentImage];
    galleryImg.style.opacity = 1;
  }, 200);
}

function nextImage(){
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

function prevImage(){
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}
