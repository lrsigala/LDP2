import firebase from "./firebase"
const at = firebase.auth.getAuth()
const d = firebase.db.getDatabase()

const SignUp = async ({ email, password, nombre, rol, telefono }) => {
    firebase.auth.createUserWithEmailAndPassword(at, email, password).then((u) => {
        firebase.auth.sendEmailVerification(u.user).then(() => {
            firebase.db.set(firebase.db.ref(d, "/Usuarios/" + u.user.uid), {
                nombre: nombre,
                password: password,
                email: email,
                rol: rol,
                telefono: telefono
            }).then(() => {
                alert("Te mandamos un correo de verificación, revisa tu bandeja entrada y/o spam.")
            })
        })
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/invalid-email") {
            alert('Correo invalido')
        } else if (errorCode == "auth/email-already-in-use") {
            alert('Esta correo ya se encuentra registrado')
        } else if (errorCode == 'auth/weak-password') {
            alert('Contraseña muy debil')
        }
    })

}
const SignIn = async ({ email, password }) => {
    var a = await firebase.auth.signInWithEmailAndPassword(at, email, password).then((u) => {
        if (u.user.emailVerified) {
            return (true)
        } else {
            alert("Tu cuenta aún no ha sido verificada.")
        }


    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            Alert.alert('Alerta', 'Contraseña Incorrecta', [
                { text: 'Okay', style: 'okay' },
                { text: 'Cambiar contraseña', style: 'okay', onPress: () => { cambiarcontra(email) } },
            ]);
        } else if (errorCode === "auth/invalid-email") {
            alert('El correo es invalido')
        } else if (errorCode === 'auth/user-not-found') {
            alert('Usuario no encontrado')
        } else if (errorCode === 'auth/network-request-failed') {
            alert('Error de conexión, vuelve a intentar conectarte');
        } else {
            alert(errorCode + ' - ' + errorMessage);
        }
        return (false)
    })
    return a
}

export default {
    SignUp,
    SignIn
}

