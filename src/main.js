import Vue from 'vue'
import firebase from "firebase"

import router from "./routes/index";
import App from './App.vue'
import store from "./store";

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

// var provider = new firebase.auth.GoogleAuthProvider();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
