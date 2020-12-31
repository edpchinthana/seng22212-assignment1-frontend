import FirebaseApp from "../../FirebaseApp";
import firebase from "firebase/app";
import "firebase/auth";
import {removeLoading, setLoading} from "../../store/isLoading/actions";

export const userLogin = async (email: string, password: string , stayLogged:boolean) => {
    try{
        if(stayLogged){
            await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        }else{
            await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        }
        return await FirebaseApp.auth().signInWithEmailAndPassword(email.replace(/\s/g, '') , password.replace(/\s/g, ''));
    }catch (e){
        throw e;
    }
}

export const signOutUser =  async () => {
    try{
        await FirebaseApp.auth().signOut();
    }catch (e) {
        throw e;
    }
}
// export const getToken = async () => {
//     return await FirebaseApp.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//         return idToken;
//     }).catch(function(error) {
//         throw  error;
//     });
// }
