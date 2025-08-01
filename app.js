// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables del proyecto
   let amigo = [];

   //Funcion
   function agregarAmigo(){
      let inputAmigo = document.getElementById("amigo");
      let nombreAmigo = inputAmigo.value;

      //Condicional
      if (!nombreAmigo) {/*El if va en minuscula--- con el ! se esta negando la variable*/
         alert ("Debes ingresar un nombre");
         return
      }
      amigo.push(nombreAmigo);/*Seguido se llama a la lista de amigos */ 
      console.log(amigo);     
 }