import * as admin from 'firebase-admin';

const firebaseConfig = {
    apiKey: "AIzaSyAMcoOj1ViWr6Wx7LwAtDoHp3XrlXB8lrg",
    authDomain: "facebook-group-helper.firebaseapp.com",
    databaseURL: "https://facebook-group-helper.firebaseio.com",
    projectId: "facebook-group-helper",
    storageBucket: "facebook-group-helper.appspot.com",
    messagingSenderId: "802797544391",
    appId: "1:802797544391:web:be005db8ec771c49baafe2",
    measurementId: "G-XWBCFLV36H"
};

const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: firebaseConfig.databaseURL
});

admin.initializeApp(firebaseConfig);

module.exports = admin;