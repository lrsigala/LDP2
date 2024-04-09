'use client'
import { useEffect, useState } from "react"

export default function RegPa() {
    const [datos, setDatos] = useState({
        nombre:'',
        edad:'',
        peso:'',
        triage:'',
    })

    return (
        <div className="flex h-screen w-screen  items-center justify-center bg-black/10 p-3">
            <div className="flex flex-col h-full w-full items-center justify-center bg-white/90 rounded">
                <form className="flex flex-col w-1/2 p-10">
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
                </form>
            </div>
        </div>
    )
}