<template>
  <div class="chat">
    <div id="post" class="box">Loading posts...</div>

    <div class="inputs">
      <input
        id="textInput"
        class="input"
        type="text"
        placeholder="Your message..."
        v-model="NewMissage"
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
      mensaje: [],
      nombre: [],
      objectoEnviable: [],
      NewMissage: null
    };
  },

  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => alert("Logged"));
    },
    writeNewPost() {
      this.mensaje.unshift(this.NewMissage);
      this.NewMissage = null;
      this.nombre = firebase.auth().currentUser.displayName;

      //   this.objectoEnviable.unshift(this.nombre)

      firebase
        .database()
        .ref("ChatAppAmiibo")
        .push(objectoEnviable);
    },
    getPosts() {
      firebase
        .database()
        .ref("ChatAppAmiibo")
        .on("value", function(data) {
          document.getElementById("posts").innerHTML = "";
          console.log(Object.values(data.val()));

          let mensajes = Object.values(data.val());
          for (let i = 0; i < mensajes.length; i++) {
            let parrafo = document.createElement("p");
            let nombre = document.createElement("p");

            parrafo.innerHTML = mensajes[i].mensaje;
            nombre.innerHTML = mensajes[i].nombre;

            document.getElementById("posts").append(parrafo);
            document.getElementById("posts").append(nombre);
          }
        });
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
//   let objectoEnviable = {
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
