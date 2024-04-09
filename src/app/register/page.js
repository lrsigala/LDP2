'use client'
import { useState } from "react"
import api from "../../../lib/firebase/api"
import ButtonAction from "@/components/atoms/ButtonAction";
import ButtonLink from "@/components/atoms/ButtonLink";

export default function Register() {

    const [credenciales, setCredenciales] = useState({
        nombre: '',
        telefono: '',
        email: '',
        password: '',
        confirmar: '',
        rol:'User'
    })
    const estilo1 = "w-full p-1 border border-cyan-500 mt-2"
    const SignUp = async () => {
        if (credenciales.password!=credenciales.confirmar){
            alert('Las contraseñas no coinciden.')
        } else{
            api.SignUp(credenciales)
        }
    }
    return (
        <main className="flex h-screen flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url('/mainbg.jpeg')` }} >
            <div className="flex h-screen w-screen  items-center justify-center bg-black/50">
                <div className="flex h-4/5 w-3/4 items-center justify-center bg-white rounded-lg">
                    <img src={'/people.jpg'} className="w-1/2 h-full object-cover rounded-l-lg" />
                    <div className="flex flex-col w-1/2 p-10">
                        <h1 className="text-xl text-center border-b border-cyan-500 mb-2">Ingresa tus datos</h1>
                        <label>Nombre:</label>
                        <input value={credenciales.nombre} onChange={(value) => { setCredenciales({ ...credenciales, ["nombre"]: value.target.value }) }} className={estilo1} />
                        <label>Telefono:</label>
                        <input value={credenciales.telefono} onChange={(value) => { setCredenciales({ ...credenciales, ["telefono"]: value.target.value }) }} className={estilo1} />
                        <label>Cuenta o Correo Electrónico:</label>
                        <input value={credenciales.email} onChange={(value) => { setCredenciales({ ...credenciales, ["email"]: value.target.value }) }} className={estilo1} />
                        <label>Contraseña:</label>
                        <input value={credenciales.password} onChange={(value) => { setCredenciales({ ...credenciales, ["password"]: value.target.value }) }} type="password" className={`${estilo1}`} />
                        <label>Confirmar Contraseña:</label>
                        <input value={credenciales.confirmar} onChange={(value) => { setCredenciales({ ...credenciales, ["confirmar"]: value.target.value }) }} type="password" className={`${estilo1}`} />
                        <div className="flex w-full justify-evenly mt-10">
                            <ButtonAction title={"Crear Cuenta"} func={SignUp} />
                            <ButtonLink   title={"   Volver  "} href={'/'}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}