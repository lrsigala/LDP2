'use client'
import { useEffect, useState } from "react"
import firebase from "../../../lib/firebase/firebase"


export default function App() {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        const db = firebase.db.getDatabase();
        const PacientesRef = firebase.db.ref(db, '/Pacientes');
        firebase.db.onValue(PacientesRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = [];
                snapshot.forEach((element) => {
                    data.push({
                        id: element.key,
                        nombre: element.val()
                    })
                })
                setPatients(data);
                console.log(data)
            }

        });
    }, [])

    return (
        <div className="flex h-screen w-screen  items-center justify-center bg-black/10 p-3">
            <div className="flex flex-col h-full w-full items-center justify-center bg-white/90 rounded">
                {patients.length === 0 ? 'No hay pacientes registrados' :
                    patients.map((item, index) => {
                        return (
                            <h2>{item.id}</h2>)
                    })
                }
            </div>
        </div>
    )
}