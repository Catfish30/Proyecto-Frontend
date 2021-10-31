import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router'
import { crearCurso,subirArchivo } from '../services/cursosService'
import FormCurso from '../components/FormCurso'
import Swal from 'sweetalert2'
import NavTop2 from '../components/NavTop2';
let imagen;

export default function CrearCursoView() {

    const [value,setValue] = useState({
        cursoNombre:'',
        docente:0,
        cursoSemestre:''
        
    })

    const history = useHistory()

    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            // const urlArchivo = await subirArchivo(imagen)
            await crearCurso({...value})    
            await Swal.fire({
                icon:'success',
                title:'Curso Creado',
                showConfirmButton:false,
                timer:2500
            })
            history.push('/login/admin')
        } catch (error) {
            console.error(error)
        }
    }

    const manejarImagen = (e) => {
        e.preventDefault()
        imagen = e.target.files[0]
    }



    return (
        <div>
            <NavTop2 />
            <div className="container p-4" style={{minHeight:'74vh'}}>
                <div className="row justify-content-center">
                    <div>
                    <h1 className="py-3 text-center" >Crear Curso</h1>
                        <FormCurso value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
