import React from 'react'
import { Route } from 'react-router'
import CursosViews from './views/CursosViews'
import CrearCursoView from './views/CrearCursoView'
import EditarCursoView from './views/EditarCursoView'
import NotasView from './views/NotasView'

import LoginView from './views/LoginView'

import CursosViewAlum from './views/CursosViewAlum'
import NotasViewAlum from './views/NotasViewAlum'

import MainView from './views/MainView'

export default function Routes() {
    return (
        <div>

            <Route path="/" exact component={MainView} />
            <Route path="/login" exact component={LoginView} />
            <Route path='/login/admin' exact component={CursosViews} />
            <Route path='/login/admin/crear' exact component={CrearCursoView} />
            <Route path="/login/admin/editar/:id" exact component={EditarCursoView} />
            <Route path="/login/admin/cursos/:id" exact component={NotasView} />
            <Route path="/login/alumnos" exact component={CursosViewAlum} />
            <Route path="/login/alumnos/cursos/:id" exact component={NotasViewAlum} />

        </div>
    )
}
