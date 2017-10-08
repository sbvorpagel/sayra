// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuefire from 'vuefire';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import firebase from './services/firebase';

Vue.use(VueResource);
Vue.use(Vuefire);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  firebase: {
    confirm: firebase.database.ref('confirm'),
  },
  template: '<App/>',
  components: { App },
});
