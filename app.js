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
      amigo.push(nombreAmigo);/*Seguido se llama a la lista de amigos */ 
      /*console.log(amigo);*/
      inputAmigo.focus();
      generarAmigos();/*llamar a la funcion generarAmigos para que muestre lista de amigos*/ 
 }

   function generarAmigos(){
      let listaAmigos = document.getElementById("listaAmigos");
      listaAmigos.innerHTML = "";/*Limpiar lista de amigos*/ 
      /*console.log(amigo);*/

      //Bucle para recorrer el array (indice)=i
      for(let i = 0 < amigo.length; i++) /* Contador */ {
         let item = document.createElement("li");
         item.textContent = amigo[i];
         listaAmigos.appendChild(item);/*agregar elemento a la lista*/


      }

   }

   function sortearAmigo(){
   
   }