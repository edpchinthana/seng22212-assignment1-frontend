import config from './firebaseConfig';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

export default firebase.initializeApp(config);