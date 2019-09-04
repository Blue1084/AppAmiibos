<template>
  <div>
    <div class="chat card">
      <div id="post" class="box">Loading posts...</div>

      <div class="nombre card" v-for=" (mensaje, i) in mensajes " :key="i">
        <small>
          <i>
            <b>{{mensaje.n}} said</b>
          </i>
        </small>
        <p>{{mensaje.texto}}</p>
      </div>
    </div>
    <div class="inputs row">
      <textarea
        id="textInput"
        placeholder="Your message..."
        v-model="objetoEnviable.texto"
        v-on:keyup.enter="writeNewPost"
        class="col-9"
      />

      <button id="create-post" class="button is-primary col-4" v-on:click="writeNewPost">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getPosts();
  },

  data() {
    return {
      // creamos un objeto que contenga el texto que se va a enviar
      objetoEnviable: {
        texto: null

        // le ponemos null por que aun no tiene ningun valor.
      },
      mensajes: []
    };
  },

  methods: {
    //   en el methods incorporamos las funciones que se van a realizar.

    writeNewPost() {
      this.objetoEnviable.n = firebase.auth().currentUser.displayName;

      //   n que es la parte de nombre que esta dentro de objeto debe buscarla en la firebase displayName
      console.log("enviado");

      firebase
        .database()
        .ref("ChatAppAmiibo")
        .push(this.objetoEnviable);
    },
    getPosts(mensajes) {
      //   firebase
      //     .database() //ves dentro de firebase a la seccion de database
      //     .ref("ChatAppAmiibo") //en la seccion de ChatAppAmiibo
      //     .on("value", function(data) {
      //       //cuando encuentres un valor ejecuta esta funcion (data)

      //     });

      firebase
        .database()
        .ref("ChatAppAmiibo")
        .on("value", snapshot => {
          this.objetoEnviable.texto = "";
          this.mensajes = Object.values(snapshot.val());
        });
    }
  }
};
</script>

<style scoped>
.nombre {
  background-color: rgb(221, 217, 217);
  width: 200px;
  padding: 5px;
}
.chat {
  height: 450px;
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  background-image: url("../assets/logo_a.png");
  background-repeat: no-repeat;
  background-size: 350px 350px;
  background-position: center;
}
textarea {
  border-color: darkcyan;
  border-style: solid;
  background-color: lightcyan;
  border-radius: 5px;
}
.row {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
