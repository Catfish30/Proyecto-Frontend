import React from 'react'
import {useRef} from 'react'


export default function FormCurso({value,actualizarInput,manejarSubmit,manejarImagen}) {

    // const inputFile = useRef()


    return (
        <div className="row justify-content-center">
            <div className="col-4">
                <form onSubmit={(e) => {manejarSubmit(e)}}>
                    <div className="mb-3">
                        <label className="form-label">
                            Nombre Curso
                        </label>
                        <input type="text" className="form-control" name="cursoNombre" value={value.cursoNombre} onChange={(e) => {actualizarInput(e)}}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Nombre Docente
                        </label>
                        <input type="text" className="form-control" name="docente" value={value.cursoDocente} onChange={(e) => {actualizarInput(e)}}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Curso Semestre
                        </label>
                        <input type="text" className="form-control" name="cursoSemestre" value={value.cursoSemestre} onChange={(e) => {actualizarInput(e)}}>
                        </input>
                    </div>

             
                    {/* <div className="mb-3">
                        <label className="form-label">
                            Imagen Curso
                        </label>
                        <input type="file" className="form-control" ref={inputFile} onChange={(e) => {manejarImagen(e)}} >
                        </input>
                    </div> */}

                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
