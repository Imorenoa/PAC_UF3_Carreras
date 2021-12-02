

// Seleccionamos el elemento con id numCoches
const numeroCoches = document.querySelector("#numCoches");
const pista = document.querySelector("#pista");
const participantes = document.querySelector("#numCoches");
//Creamos el array en el que almacenaremos los coches
const arrayCoches = [];



//Creamos un evento que cuando cambie el valor del selector ejecute la funcion
numeroCoches.addEventListener("change", () => {
    if (pista.innerHTML == ""){
    let numCoches = participantes.value;
    return pintaCoches(numCoches);
    };
});
//Esta funcion nos va a "pintar" los coches en el documento añadiendo los divs y las clases segun los participantes que le pasemos
function pintaCoches(participantes){
    for (let i = 0; i < participantes; i++) {
        let dorsal = document.createElement("div");
        dorsal.innerHTML = `<p>Pista numero: ${i + 1}</p>`;
        dorsal.classList.add("dorsal");
        let carril = document.createElement("div");
        carril.classList.add('coche');
        carril.classList.add(`coche${i+1}`);
        let coche = document.createElement("img");
        coche.src = `./img/car${i + 1}.png`;
        // Creamos el div con el dorsal
        pista.appendChild(dorsal);
        //Creamos el carril del coche
        pista.appendChild(carril);
        //Añadimos el coche al carril
        carril.appendChild(coche);
        //Añadimos el coche al array de los coches

    }
};


$(document).ready(function () {
//Al pulsar sobre iniciar se ejecuta la siguiente función. Se crea la animacion a una velocidad aleatoria
//    que terminara al llegar al 80% del ancho
    $("#botonIniciar").click(function (){

        for (let i = 0; i < participantes.value; i++) {
            $(`.coche${i+1}`).animate({"left":"80%"}, (Math.random()*10000),null,
                function (){ //Hacemos que cuando se complete, se ejecute la funcion que almacena el array
                    arrayCoches.push(`coche_${i+1}`);
                    console.log(arrayCoches);
                });
        };
        $("#botonReset").show();
        $("#botonResultados").show();
        $("#botonIniciar").hide();
        console.log("Iniciar");
    });
// Funcion que se ejecuta al pulsar Reiniciar, elimina la pista y vuelve a mostrar el boton iniciar para poder continuar
//    en el momento en el que se seleccione personajes
    $("#botonReset").click(function (){
        // Limpia el div con id pista, el array con las posiciones
        $("#pista").empty();
        arrayCoches.length = 0;
        $("#numCoches").val(0);
        $("#botonIniciar").show();
        $("#botonResultados").hide();
        $("#botonReset").hide();
        console.log("Reiniciar");
        console.log(arrayCoches);
    });
//Nos muestra el array que hemos almacenado con las posiciones
    $("#botonResultados").click(function (){
        $("#pista").empty();
        $("#botonResultados").hide();
        for (let i = 0; i < arrayCoches.length; i++) {
            pista.innerHTML += `<p>Posicion ${i + 1}: ${arrayCoches[i]}</p>`;
        }
    });
});

