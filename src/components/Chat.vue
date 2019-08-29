<template>
  <div class="chat">
    <div id="post" class="box">Loading posts...</div>

    <div class="inputs">
      <input
        id="textInput"
        class="input"
        type="text"
        placeholder="Your message..."
        v-model="objetoEnviable.texto"
      />

      <button id="login" class="button is-info" v-on:click="login">Login</button>
      <button id="create-post" class="button is-primary" v-on:click="writeNewPost">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // creamos un objeto que contenga el texto que se va a enviar
      objetoEnviable: {
        texto: null
        // le ponemos null por que aun no tiene ningun valor.
      }
    };
  },

  methods: {
    //   en el methods incorporamos las funciones que se van a realizar.
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => alert("Logged"));
    },
    writeNewPost() {
      this.objetoEnviable.n = firebase.auth().currentUser.displayName;
      //   n que es la parte de nombre que esta dentro de objeto debe buscarla en la firebase displayName

      firebase
        .database()
        .ref("ChatAppAmiibo")
        .push(this.objetoEnviable);
    },
    getPosts() {
      firebase
        .database() //ves dentro de firebase a la seccion de database
        .ref("ChatAppAmiibo") //en la seccion de ChatAppAmiibo
        .on("value", function(data) {}); //cuando tengas un valor eejecuta esta funcion (data)
    }
  }
};

// document.getElementById("login").addEventListener("click", login);
// document.getElementById("create-post").addEventListener("click", writeNewPost);

// getPosts();

// function login() {
//   var provider = new firebase.auth.GoogleAuthProvider();

//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(user => alert("Logged"));
// }

// function writeNewPost() {
//   let mensaje = document.getElementById("textInput").value;
//   let nombre = firebase.auth().currentUser.displayName;

//   // si el nombre del objeto y el nombre de la variable coincide solo hace falta poner uno solo
//   // ejemplo: nombre : nombre ---> nombre
//   let objetoEnviable = {
//     nombre,
//     mensaje
//   };

//   firebase
//     .database()
//     .ref("ChatAppAmiibo")
//     .push(objectoEnviable);
// }

// function getPosts() {
//   firebase
//     .database()
//     .ref("ChatAppAmiibo")
//     .on("value", function(data) {
//       document.getElementById("posts").innerHTML = "";

//       let mensajes = Object.values(data.val());
//       for (let i = 0; i < mensajes.length; i++) {
//         let parrafo = document.createElement("p");
//         let nombre = document.createElement("p");

//         parrafo.innerHTML = mensajes[i].mensaje;
//         nombre.innerHTML = mensajes[i].nombre;

//         document.getElementById("posts").append(parrafo);
//         document.getElementById("posts").append(nombre);
//       }
//     });
// }
</script>

<style>
</style>
