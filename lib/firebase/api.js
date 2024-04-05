import firebase from "./firebase"
const at = firebase.auth.getAuth()
const d = firebase.db.getDatabase()

const SignUp = async ({ email, password, nombre, rol, telefono}) => {
    firebase.auth.createUserWithEmailAndPassword(at, email, password).then((u) => {
        firebase.auth.sendEmailVerification(u.user).then(() => {
             //alert("Te mandamos un correo de verificación, revisa tu bandeja entrada y spam.") 
             firebase.db.set(firebase.db.ref(d,"/Usuarios/"+u.user.uid),{
                nombre:nombre,
                password:password,
                email:email,
                rol:rol,
                telefono:telefono
             }).then(()=>{
                alert("usuario generado con exito")
             })
            })
    }).catch((error) => {
        alert("No")
    })

}
const SignIn = async ({ email, password }) => {
    var a = await firebase.auth.signInWithEmailAndPassword(at, email, password).then((u) => {
        return (u.user.emailVerified)
    }).catch((error) => {
        return (error)
    })
    return a
}
export default {
    SignUp,
    SignIn
}

