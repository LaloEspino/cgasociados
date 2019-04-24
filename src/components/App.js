import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma/css/bulma.css'

import Layout from './Layout'

import Home from '../pages/Home'
import PropiedadIntelectual from '../pages/PropiedadIntelectual'
import ComercioExterior from '../pages/ComercioExterior'
import ServiciosMigratorios from '../pages/ServiciosMigratorios.js'
import Contacto from '../pages/Contacto'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/propiedad-intelectual' component={PropiedadIntelectual} />
          <Route exact path='/comercio-exterior' component={ComercioExterior} />
          <Route exact path='/servicios-migratorios' component={ServiciosMigratorios} />
          <Route exact path='/contacto' component={Contacto} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
