//DOM
// querySelector / querySelectorAll
// let links = document.querySelectorAll("a");
// links.forEach(function (link) {
//     console.log(link);
// })

// let celdas = document.querySelectorAll("td");
// celdas.forEach(function (td) {
//     td.addEventListener('click',function () {
//         console.log(this)
//     })

// })

//obtener los elementos de la clase .close
let salida = document.querySelectorAll(".close");
//recorrerlos
salida.forEach(function (salir) {
    //agregar un evento click a cada uno de ellos 
    salir.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content_agentes = document.querySelector('.content_agentes');
        content_agentes.classList.remove("animate__fadeInLeft");
        content_agentes.classList.remove("animate__animated");

        content_agentes.classList.add("animate__fadeOutLeft");
        content_agentes.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/";
        },500);
    });
});

// let salida = document.querySelector(".cambio");
// salida.forEach(function (salir) {
//     //agregar un evento click a cada uno de ellos 
//     salir.addEventListener("click", function (ev) {
//         ev.preventDefault();
//         let content = document.querySelector('.content');
//         content.classList.remove("animate__fadeInRight");
//         content.classList.remove("animate__animated");

//         content.classList.add("animate__fadeOutRight");
//         content.classList.add("animate__animated");

//         setTimeout(function(){
//             location.href = "/";
//         },500);
//     });
// });








