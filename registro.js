document.addEventListener('click',function(){

})
const btn_facebook = document.getElementById('btn_fb_login');
const btn_google = document.getElementById('btn_google_login');

btn_facebook.addEventListener('click',function(e){
    e.preventDefault();
    const proveedor = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(proveedor)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
});

btn_google.addEventListener('click',function(e){
    e.preventDefault();
    const proveedor = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(proveedor)
        .then( resultado => {
            console.log(resultado);
        })
        .catch(error => {
            console.log("Error con google");
        })
});