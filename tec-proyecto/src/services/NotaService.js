import axios from 'axios'


  const URL = `${process.env.REACT_APP_API}/buscar-calificacion`


const obtenerNota = async (id) => {
    try {
        let {data} = await axios.get(`${URL}?curso=${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const editarNota = async (cursoEditado, id) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }

        let {data} = await axios.put(`${URL}/${id}/notas/${id}`,cursoEditado,{headers})
        return data
    } catch (error) {
        throw error        
    }
}


export{
    obtenerNota,
    editarNota
}