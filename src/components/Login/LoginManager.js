import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const  initilizeLoginFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}
const Googleprovider = new firebase.auth.GoogleAuthProvider();
const Fbprovider = new firebase.auth.FacebookAuthProvider();

export const handleGoogleSignIn = () => {
    return firebase.auth().signInWithPopup(Googleprovider)
        .then(res => {
            const {displayName,email,photoURL} = res.user;
            const signInUser = {
                isSignin: true,
                email: email,
                name: displayName,
                photo: photoURL,
                success: true,
            }
            return signInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}
export const handleFbSignIn = () => {
   return firebase.auth().signInWithPopup(Fbprovider)
   .then(res=>{
     const {displayName,email,photoURL} = res.user;
            const signInUser = {
                isSignin: true,
                email: email,
                name: displayName,
                photo: photoURL,
                success: true,
            }
            return signInUser;
   }).catch(err=>{
        console.log(err);
        console.log(err.message);
   })
}

export const handleSignOut = ()=> {
  return firebase.auth().signOut()
  .then(res=>{
     const signOutUser = {
       isSignin: false,
       email: '',
       name: '',
       photo: '',
     }
     return signOutUser;
  })
  .catch(err=>{
    console.log(err);
    console.log(err.message);
  })
} 

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = res.user;
            newUser.error = ''
            newUser.success = true;
            updateUserName(name)
            return newUser

        })
        .catch(error => {
            const newUser = {}
            newUser.error = error.message;
            newUser.success = false;
            return newUser;
        })
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUser = res.user;
            newUser.error = "";
            newUser.success = true;
            return newUser;
        })
        .catch((error) => {
            const newUser = {};
            newUser.error = error.message;
            newUser.success = false;
            return newUser;
        });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser

    user.updateProfile({
        displayName: name
    }).then(res=>{
        console.log('User name updated successfully!');
    }).catch(error=>{
        console.log(error);
    })
}