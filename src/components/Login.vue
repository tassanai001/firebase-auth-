<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"
                  >Email</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>

            <div
              class="col-md-6"
              style="display: flex; justify-content: space-between; margin-top: 20px;"
            >
              <img
                style="cursor: pointer;"
                src="@/assets/google-logo.png"
                alt="google logo"
                srcset="google logo"
                width="30px"
                height="auto"
                @click="onLoginWithGoogle"
              />
              <img
                style="cursor: pointer;"
                src="@/assets/fb-logo.jpeg"
                alt="google logo"
                srcset="google logo"
                width="30px"
                height="auto"
                @click="onLoginWithFacebook"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    onLoginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((error) => {
          console.log(error);
          // Handle Errors here.
          //   var errorCode = error.code;
          //   var errorMessage = error.message;
          //   // The email of the user's account used.
          //   var email = error.email;
          //   // The firebase.auth.AuthCredential type that was used.
          //   var credential = error.credential;
          // ...
        });
      console.log("onLoginWithGoogle", firebase);
    },
    onLoginWithFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log("with faebook", result);
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
