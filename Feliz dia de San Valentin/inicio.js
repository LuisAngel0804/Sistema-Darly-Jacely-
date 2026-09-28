const btnAbrir = document.querySelector(".btn-abrir");

if(btnAbrir){
    btnAbrir.addEventListener("click", () => {
        window.location.href = "carta.html";
    });
}
/* 🌹 PÉTALOS CAYENDO */

const contenedor = document.querySelector(".petalos");

if(contenedor){

const emojis = ["🌹","🌸","🌺","🌷","💐"];

for(let i=0;i<40;i++){

    let petalo = document.createElement("span");
    petalo.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    petalo.style.left = Math.random()*100 + "vw";
    petalo.style.animationDuration = (5 + Math.random()*5) + "s";
    petalo.style.fontSize = (20 + Math.random()*30) + "px";

    contenedor.appendChild(petalo);
}

}

const fechaHTML = document.getElementById("fecha");

function actualizarFecha() {
    // 1. Verificamos que fechaHTML no sea null
    if (fechaHTML) {
        const fecha = new Date();
        const opciones = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        let textoFecha = fecha.toLocaleDateString("es-ES", opciones);
        // Ponemos la primera letra en mayúscula
        textoFecha = textoFecha.charAt(0).toUpperCase() + textoFecha.slice(1);

        fechaHTML.innerHTML = "Hoy es " + textoFecha + " 💖";
    }
}

// 2. Solo ejecutamos si el elemento existe en la página actual
if (fechaHTML) {
    setInterval(actualizarFecha, 1000);
    actualizarFecha();
}


const frase = document.getElementById("frase");
const contador = document.getElementById("contador");

/* Año, mes-1, día, hora, minuto, segundo */
const inicio = new Date(2026, 0, 1, 0, 0, 0);

function actualizar() {
    // 🛡️ IMPORTANTE: Solo ejecutar si ambos elementos existen en la página
    if (frase && contador) {
        const ahora = new Date();
        const diferencia = ahora.getTime() - inicio.getTime();

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 1;
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        frase.innerHTML = "⏳ Desde el primer día supe que quería todo contigo… porque cada segundo a tu lado es mi lugar favorito 💘❤️";

        contador.innerHTML = 
            dias + " días " + 
            horas + "h " + 
            minutos + "m " + 
            segundos + "s 💞";
    }
}

// 🛡️ Solo activar el reloj si estamos en la página donde se muestra
if (frase && contador) {
    setInterval(actualizar, 1000);
    actualizar();
}
document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modalFoto");
    const modalImg = document.getElementById("modalImg");
    const modalTexto = document.getElementById("modalTexto");
    const cerrar = document.querySelector(".cerrar");

    document.querySelectorAll(".foto-click").forEach(img => {

        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalTexto.innerText = img.dataset.msg || "";
        });

    });

    if(cerrar){
        cerrar.onclick = () => modal.style.display = "none";
    }

    if(modal){
        modal.onclick = (e) => {
            if(e.target === modal){
                modal.style.display = "none";
            }
        };
    }

});
window.onload = function () {
    const musica = document.getElementById("musica");
    musica.play().catch(() => {});
};











