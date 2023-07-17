            // Consultar precio de actividad (hay que escribir con las respectivas mayúsculas) 
            // Se agregan Dom, se eliminan los prompt y alerts, se realiza evento
            
            let actividadBuscada = document.getElementById("busquedaActividad");

            function busquedaActividad() {
              const precioActividad = [
                { nombre: "Pase Libre", precio: 5000 },
                { nombre: "CrossFit", precio: 3000 },
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
                mensaje.innerHTML = "Actividad no encontrada";
              }
            }
            
            
            //Proyecto Presupuesto
         
           
          let actividadPresupuesto = document.querySelector("#actividadPresupuesto");
          const radioSeleccionado = document.querySelector('input[type="radio"]:checked');
          function presupuestoForm() {
              e.preventDefault();
            let presupuesto = 0;
          
            if (radioSeleccionado.value === "si" && radioSeleccionado.name === "masculino") {
              presupuesto = (actividadPresupuesto.value / 2) - (actividadPresupuesto.value * 10 / 100);
            } else if (radioSeleccionado.value === "si" && radioSeleccionado.name === "femenino") {
              presupuesto = (actividadPresupuesto.value / 2) - (actividadPresupuesto.value * 5 / 100);
            } else if (radioSeleccionado.value === "no" && radioSeleccionado.name === "masculino") {
              presupuesto = (actividadPresupuesto.value * 10) / 100;
            } else {
              presupuesto = (actividadPresupuesto.value * 5) / 100;
            }
          
            return presupuesto;
          }



            let consultar = document.getElementById("consultar");
            consultar.addEventListener("submit", presupuesto);
            let presupuestoEncontrado = presupuestoForm();
            
            function presupuesto() {
                e.preventDefault();
              let consultarPresupuesto = document.getElementById("resultadoPresupuesto");
              if (presupuestoEncontrado) {
                mensaje.innerHTML = ("El precio final es de: $" + presupuestoEncontrado);
              } else {
                mensaje.innerHTML = ("El precio final es de: $" + presupuestoEncontrado);
              }
            }

  
        //Storage & JSON (reparado codigo)

function guardarLocalStorage(e){
e.preventDefault();
let persona = {
nombre:document.getElementById("first-name").value,
apellido:document.getElementById("last-name").value,
email:document.getElementById("email").value,
edad:document.getElementById("age").value
};
localStorage.setItem('persona', JSON.stringify(persona));
}

function obtenerLocalStorage(){
if(localStorage.getItem('persona')){
let persona = JSON.parse(localStorage.getItem('persona'));
console.log(persona);
} else {console.log("No hay registros")};
}


let send = document.getElementById("send");
send.addEventListener("submit", (e)=> { 
    guardarLocalStorage (e); 
    obtenerLocalStorage ();
});       
