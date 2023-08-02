document.addEventListener('DOMContentLoaded', function () {
  Swal.fire({
  icon: 'info',
  title: '¡Bienvenido!',
  text: 'Si es tu primera vez, tenés un 20% de descuento en tu presupuesto.',
  confirmButtonText: 'Aceptar'
  });
  });

// Consultar precio de actividad (hay que escribir con las respectivas mayúsculas) 

let actividadBuscada = document.getElementById("busquedaActividad");

function busquedaActividad() {
    const precioActividad = [
    { nombre: "Pase Libre", precio: 5000 },
    { nombre: "Crossfit", precio: 3000 },
    { nombre: "GAP", precio: 2500 },
    { nombre: "Zumba", precio: 4200 },
    { nombre: "Step", precio: 3500 },
    { nombre: "Musculación", precio: 4000 },
    { nombre: "Spinning", precio: 4100 },
  ];
  return precioActividad.find((el) => el.nombre === actividadBuscada.value);
}

let buscar = document.getElementById("buscar");
buscar.addEventListener("click", respuestaClick);


function respuestaClick() {
  let mensaje = document.getElementById("resultadoActividadBuscada");
  let actividadEncontrada = busquedaActividad();

  if (actividadEncontrada) {
  mensaje.innerHTML = ("El precio de la actividad es de: $" + actividadEncontrada.precio);
  } else {
  mensaje.innerHTML = "Actividad no encontrada, recuerda escribir el nombre respetando las mayúsculas";
  }
}


//Presupuesto

function calcularPresupuesto() {

  const actividad = document.getElementById('actividadPresupuesto').value;
  const isFirstTime = document.querySelector('input[name="primero"]:checked').value === 'si';
  const genero = document.querySelector('input[name="genero"]:checked').value;


  let presupuesto = parseFloat(actividad);
  isFirstTime ? (presupuesto *= 0.8) : null;
  genero === 'femenino' ? (presupuesto *= 0.9) : null;

  document.getElementById('resultadoPresupuesto').textContent = `Tu presupuesto es de: $${presupuesto.toFixed(2)}`;
}

document.getElementById('consultar').addEventListener('submit', function (event) {
  event.preventDefault(); 
  calcularPresupuesto(); 
});

document.getElementById('primeraVez').addEventListener('click', function () {
  Swal.fire({
  icon: 'success',
  title: 'Descuento por Primera Vez',
  text: '¡Tenés un 20% de descuento en tu presupuesto!',
  confirmButtonText: 'Aceptar'
  });
});
document.getElementById('generoFemenino').addEventListener('click', function () {
  Swal.fire({
  icon: 'success',
  title: 'Descuento por Género Femenino',
  text: '¡Tenés un 10% de descuento en tu presupuesto!',
  confirmButtonText: 'Aceptar'
  });
});

//Storage & JSON 
function guardarLocalStorage(e) {
  e.preventDefault();

  const persona = {
    nombre: document.getElementById("first-name").value,
    apellido: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    edad: document.getElementById("age").value
  };

  let personas = obtenerPersonasRegistradas();
  personas.push(persona);
  localStorage.setItem('personas', JSON.stringify(personas));
  console.log(personas); // Opcional: Mostrar el array de personas en la consola para verificar
}

function obtenerPersonasRegistradas() {
  let personas = [];
  if (localStorage.getItem('personas')) {
    personas = JSON.parse(localStorage.getItem('personas'));
  }
  return personas;
}

document.getElementById("send").addEventListener("submit", (e) => {
  guardarLocalStorage(e);
  Swal.fire({
    icon: 'success',
    title: 'Te has registrado exitosamente',
    text: '¡Gracias por registrarte en Spartan Fitness Center!',
    confirmButtonText: 'Aceptar'
  });
});

//Modal de términos y condiciones
const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('exampleModalLabel');

myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()
})

//API Indice de Masa Corporal
const urlApi = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric';

async function obtenerIMC(e) {
  e.preventDefault();
  const altura = document.getElementById("altura").value;
  const pesoKilogramos = document.getElementById("peso").value;

  const pesoDecigramos = pesoKilogramos * 10000;

  try {
    const response = await fetch(`${urlApi}?weight=${pesoDecigramos}&height=${altura}`, {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '93994dc17cmshb906990761073cdp1b7dc3jsn57fb06bb9b81',
    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    },
});

const data = await response.json();
console.log(data);
const resultadoIMC = data.bmi.toFixed(2); 
document.getElementById("resultadoImc").innerHTML = `Tu IMC es: ${resultadoIMC}`; //el resultado da siempre 0.00 porque es un numero muy largo que he intentado cambiar pero es la configuracion de la API (tiene que elevar al cuadrado la altura pero no lo hace). También intenté con otra y me pasaba lo mismo.
  } catch (error) {
  console.error(error);
  }
}
document.getElementById("calcular").addEventListener("submit", obtenerIMC);