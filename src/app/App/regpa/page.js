'use client'
import { useEffect, useState } from "react"
import ButtonAction from "@/components/atoms/ButtonAction"
import api from "../../../../lib/firebase/api"
export default function RegPa() {
    const [datos, setDatos] = useState({
        nombre: '',
        edad: '',
        peso: '',
        triage: '',
    })
    const estilo1 = "w-full p-1 border border-cyan-500 mt-2"
    const valoresTriage = [
        {
            key: '1',
            nombre: 'Resucitacion',
            color: 'bg-red-500'
        }, {
            key: '2',
            nombre: 'Emergencia',
            color: 'bg-orange-500'
        }, {
            key: '3',
            nombre: 'Urgencia',
            color: 'bg-yellow-200'
        }, {
            key: '4',
            nombre: 'Menos urgente',
            color: 'bg-green-500'
        }, {
            key: '5',
            nombre: 'No urgente',
            color: 'bg-blue-500'
        }
    ]
    const buttonTriage = ({ key, nombre, color }) => {
        return (
            <button onClick={() => { setDatos({ ...datos, ["triage"]: key }) }} className={`${color} ${key === datos.triage && 'border-2 border-black'}`}>{nombre}</button>
        )
    }
    const save = ()=>{
        api.savePatient(datos)
    }
    return (
        <div className="flex h-screen w-screen  items-center justify-center bg-black/10 p-3">
            <div className="flex flex-col h-full w-full items-center justify-center bg-white/90 rounded">
                <div className="flex flex-col w-1/2 p-10">
                    <h1 className="text-xl text-center border-b border-cyan-500 mb-2">Ingresa los datos del paciente:</h1>
                    <label>Nombre:</label>
                    <input value={datos.nombre} onChange={(value) => { setDatos({ ...datos, ["nombre"]: value.target.value }) }} className={estilo1} />
                    <label>Edad:</label>
                    <input value={datos.edad} onChange={(value) => { setDatos({ ...datos, ["edad"]: value.target.value }) }} className={estilo1} />
                    <label>Peso:</label>
                    <input value={datos.peso} onChange={(value) => { setDatos({ ...datos, ["peso"]: value.target.value }) }} className={estilo1} />
                    <label>Triage:</label>
                    <div className="flex w-full justify-between">
                        {valoresTriage.map((item, index) => buttonTriage(item))}
                    </div>
                    <div className="flex w-full justify-evenly mt-10">
                        <ButtonAction title={"Guardar Paciente"} func={save} />
                    </div>
                </div>
            </div>
        </div>
    )
}