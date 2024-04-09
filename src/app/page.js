'use client'
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/atoms/ButtonLink";
import ButtonAction from "@/components/atoms/ButtonAction";
import api from "../../lib/firebase/api"
import { useState } from "react";
import firebase from "../../lib/firebase/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router= useRouter()
  const estilo1 = "w-full p-1 border border-cyan-500 mt-2"
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  })
  const SignUp = async () => {
    api.SignUp(credenciales)
    
  }
  const SignIn = async()=>{
    api.SignIn(credenciales).then((s)=>{
      if (s==true){
        router.replace('/App/')
      }
    })
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-cover" style={{ backgroundImage: `url('/mainbg.jpeg')` }} >
      <div className="flex flex-col p-10 items-center justify-center rounded-lg bg-white drop-shadow-2xl">
        <h1 className="mb-10 text-4xl">Bienvenido a SmartPacient</h1>
        <p className="mb-10 text-xl">¡Supervisa el área de urgencias para dar el mejor servicio posible!</p>
        <div className="flex flex-col w-3/4 border-2 border-cyan-500 rounded p-2">
          <label>Cuenta o Correo Electrónico:</label>
          <input value={credenciales.email} onChange={(value) => { setCredenciales({ ...credenciales, ["email"]: value.target.value }) }} className={estilo1} />
          <label>Contraseña:</label>
          <input value={credenciales.password} onChange={(value) => { setCredenciales({ ...credenciales, ["password"]: value.target.value }) }} type="password" className={`${estilo1} `} />
        </div>
        <div className="flex w-full justify-evenly mt-10">
          <ButtonAction title={"Iniciar Sesion"}  func={SignIn} />
          <ButtonLink title={"Crear Cuenta"} href={"/register"} />
        </div>
      </div>
    </main>
  );
}
