import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD5IC0PHUU_FE8B_WWxRc09x7J5pc_geV4',
  authDomain: 'sayra-casamento.firebaseapp.com',
  databaseURL: 'https://sayra-casamento.firebaseio.com',
  projectId: 'sayra-casamento',
  storageBucket: 'sayra-casamento.appspot.com',
  messagingSenderId: '975655577925',
};
firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
