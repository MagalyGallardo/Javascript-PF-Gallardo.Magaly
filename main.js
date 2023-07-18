
// Consultar precio de actividad (hay que escribir con las respectivas mayúsculas) 
            
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

              function calcularPresupuesto() {
                
                const actividad = document.getElementById('actividadPresupuesto').value;
                const isFirstTime = document.querySelector('input[name="primero"]:checked').value === 'si';
                const genero = document.querySelector('input[name="genero"]:checked').value;

              
                let presupuesto = parseFloat(actividad);
                if (isFirstTime) {
                  presupuesto *= 0.8; 
                }
                if (genero === 'femenino') {
                  presupuesto *= 0.9; 
                }

                document.getElementById('resultadoPresupuesto').textContent = `El presupuesto es: $${presupuesto.toFixed(2)}`;
              }

              document.getElementById('consultar').addEventListener('submit', function (event) {
                event.preventDefault(); 
                calcularPresupuesto(); 
              });
  
        //Storage & JSON (reparado codigo)

            function guardarLocalStorage(e) {
              e.preventDefault();
              
              let persona = {
                nombre: document.getElementById("first-name").value,
                apellido: document.getElementById("last-name").value,
                email: document.getElementById("email").value,
                edad: document.getElementById("age").value
              };
              
              localStorage.setItem('persona', JSON.stringify(persona));
            }

            function obtenerLocalStorage() {
              if (localStorage.getItem('persona')) {
                let persona = JSON.parse(localStorage.getItem('persona'));
                console.log(persona);
              } else {
                console.log("No hay registros");
              }
            }

            document.getElementById("send").addEventListener("submit", (e) => {
              guardarLocalStorage(e);
              obtenerLocalStorage();
            });

