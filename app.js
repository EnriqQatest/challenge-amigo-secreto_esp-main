// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables del proyecto
   let amigo = []; /* Array */

   //Funcion
   function agregarAmigo(){
      let inputAmigo = document.getElementById("amigo");/*Conexion con el HTML por medio del document.*/
      let nombreAmigo = inputAmigo.value;

      //Condicional
      if (!nombreAmigo) {/*El if va en minuscula--- con el ! se esta negando la variable*/
         alert ("Debes ingresar un nombre");
         return
      }
      if (amigo.some(n => n.toLowerCase() === nombreAmigo.toLowerCase())) {
         alert("Nombre ya fue ingresado");
         return;/**Condicionale para que el mismo nombre no sea ingresado */
      }
      if (amigo.includes(nombreAmigo)) {
         alert("Nombre ya fue ingresado");/* Condicional para que no sea ingresado el mismo nombre */
         return;
      }

      // Valida que solo contenga letras
      
       let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
      if (!soloLetras.test(nombreAmigo)) {
      alert("El nombre solo puede contener letras");
      return;
      }


      amigo.push(nombreAmigo);/*Seguido se llama a la lista de amigos */ 
      /*console.log(amigo);*/
      inputAmigo.value = ""; // Limpia el input después de agregar
      inputAmigo.focus();
      generarAmigos();/*llamar a la funcion generarAmigos para que muestre lista de amigos*/ 
 }

   function generarAmigos(){
      let listaAmigos = document.getElementById("listaAmigos");
      listaAmigos.innerHTML = ("");/*Limpiar lista de amigos*/ 
      /*console.log(amigo);*/

      //Bucle para recorrer el array (indice)=i
      for(let i = 0; i < amigo.length; i++) /* Contador */ {
         let item = document.createElement("li");
         item.textContent = amigo[i];
         listaAmigos.appendChild(item);/*agregar elemento a la lista*/

      }
      }

   function sortearAmigo() {
      if (amigo.length === 0) {
         alert("No hay amigos para sortear");
         return;
      } 
      if (amigo.length < 3){
         alert("Debe haber al menos 3 amigos para sortear");
         return;
      }

      // Variable para almacenar el amigo sorteado
      let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;/*Muestra resultado de amigo sorteado*/

   
      let limpiarLista = document.getElementById("listaAmigos");
      limpiarLista.innerHTML = (""); // Limpia la lista de amigos despues de sortear


   
   }
   