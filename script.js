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
