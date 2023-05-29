const BASE_URL = "https://swapi.dev/api/people/?page=";
let i=1, dataStarWars1, dataStarWars2, dataStarWars3, datos; 
let notGo = false, notGo2 = false, notGo3 = false, gen, gen2, gen3, tarjetas1, tarjetas2, tarjetas3; 
let mouseOver1, mouseOver2, mouseOver3;

const request = async(url) =>{
    
}

function* tarjetaGenerador(data) {
    //ligar con el DOM tarjetas1
    tarjetas1 = document.getElementById("tarjetas1");
    //tarjetas1.innerHTML = '';
    
    for (let temp of data) {
        yield temp.name;
        //para llamar tiene que ser valores que están en el contexto
        //ambitos de las variables;
        pintarTarjeta(tarjetas1, temp);
        //alert("mouseOver1");
    }
}
function* tarjetaGenerador2(data) {
    //ligar con el DOM tarjetas2
    tarjetas2 = document.getElementById("tarjetas2");
    //tarjetas2.innerHTML = '';
    
    for (let temp of data) {
        yield temp.name;
        //para llamar tiene que ser valores que están en el contexto
        //ambitos de las variables;
        pintarTarjeta(tarjetas2, temp);
        //alert("mouseOver1");
    }
}
function* tarjetaGenerador3(data) {
    //ligar con el DOM tarjetas3
    tarjetas3 = document.getElementById("tarjetas3");
    //tarjetas3.innerHTML = '';
    
    for (let temp of data) {
        yield temp.name;
        //para llamar tiene que ser valores que están en el contexto
        //ambitos de las variables;
        pintarTarjeta(tarjetas3, temp);
        //alert("mouseOver3");
    }
}

function pintarTarjeta(tarjetas, personaje){
    tarjetas.innerHTML += ` 
        <div class="card border-warning mb-3">
        <div class="card-header">Personaje</div>
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Altura:"${personaje.height}"</p>
            <p class="card-text">Peso:"${personaje.mass}"</p>
        </div>
        </div>
            `;
}
function pintarTarjeta2(tarjetas, personaje){
    tarjetas.innerHTML += ` 
        <div class="card border-primary mb-3">
        <div class="card-header">Personaje</div>
        <div class="card-body">
            <h5 class="card-title">"${personaje.name}</h5>
            <p class="card-text">Altura: "${personaje.height}"</p>
            <p class="card-text">Peso: "${personaje.mass}"</p>
        </div>
        </div>
            `;
}

function pintarTarjeta3(tarjetas, personaje){
    tarjetas.innerHTML += ` 
        <div class="card border-success mb-3">
        <div class="card-header">Personaje</div>
        <div class="card-body">
            <h5 class="card-title">"${personaje.name}</h5>
            <p class="card-text">Altura: "${personaje.height}"</p>
            <p class="card-text">Peso: "${personaje.mass}"</p>
        </div>
        </div>
            `;
}

// async function* tarjetaGenerador2() {
//     //ligar con el DOM tarjetas2
//     tarjetas2 = document.getElementById("tarjetas2");
//     //tarjetas2.innerHTML = '';
    
//     for (i=6; i<11; i++) {
//         const character = await request(BASE_URL+i);
//         yield character.name;
        
//         console.log(character);
//         //para llamar tiene que ser valores que están en el contexto
//         //ambitos de las variables;
//         pintarTarjeta2(tarjetas2, character);

//     }
// }

// async function* tarjetaGenerador3() {
//     //ligar con el DOM tarjetas3
//     tarjetas3 = document.getElementById("tarjetas3");
//     //tarjetas3.innerHTML = '';
    
//     for (i=11; i<18; i++) {
//         const character = await request(BASE_URL+i);
//         yield character.name;
        
//         console.log(character);
//         pintarTarjeta3(tarjetas3, character);

//     }
// }

const revelaPersonaje = (event) => {
    event.preventDefault();
    gen.next();
}
const revelaPersonaje2 = (event) => {
    event.preventDefault();
    gen2.next();
}
const revelaPersonaje3 = (event) => {
    event.preventDefault();
    gen3.next();
}

document.addEventListener('DOMContentLoaded', async () => {
    mouseOver1 = document.getElementById('mouseOver1');
    const results = await fetch(`${BASE_URL}1`);
    const response = await results.json();
    const data = response.results;
    gen = tarjetaGenerador(data.slice(0,5));
    gen.next();
    mouseOver1.addEventListener('mouseover', revelaPersonaje);
    
});

document.addEventListener('DOMContentLoaded', async () => {
    mouseOver2 = document.getElementById('mouseOver2');
    const results = await fetch(`${BASE_URL}1`);
    const response = await results.json();
    const data = response.results;
    gen2 = tarjetaGenerador2(data.slice(6,11));
    gen2.next();
    mouseOver2.addEventListener('mouseover', revelaPersonaje2);
    
});

document.addEventListener('DOMContentLoaded', async () => {
    mouseOver3 = document.getElementById('mouseOver3');
    const results = await fetch(`${BASE_URL}1`);
    const response = await results.json();
    const data = response.results;
    gen3 = tarjetaGenerador3(data.slice(12,17));
    gen3.next();
    mouseOver3.addEventListener('mouseover', revelaPersonaje3);
    
});

// const revelaPersonaje2 = (event) => {
//     event.preventDefault();
//     if (!notGo2) {
//         const { value, done } = gen2.next();
//         notGo2 = done;
//     } else {
//         console.log('Nada más que mostrar');
//     }
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     //dataStarWars1 = document.getElementById('dataStarWars1');
//     mouseOver2 = document.getElementById('mouseOver2');

//     //hay que considerar el gen.next para que no llame a varios 

//     gen2 = tarjetaGenerador2();
//     gen2.next();
//     mouseOver2.addEventListener('mouseover', revelaPersonaje2);
// });

// const revelaPersonaje3 = (event) => {
//     event.preventDefault();
//     if (!notGo3) {
//         const { value, done } = gen3.next();
//         //console.log('value:', value);
//         //console.log('done:', done);
//         notGo3 = done;
//     } else {
//         console.log('Nada más que mostrar');
//     }
// }
// document.addEventListener('DOMContentLoaded', async () => {
//     //dataStarWars1 = document.getElementById('dataStarWars1');
//     mouseOver3 = document.getElementById('mouseOver3');

//     gen3 = tarjetaGenerador3();
//     gen3.next();
//     mouseOver3.addEventListener('mouseover', revelaPersonaje3);
// });


