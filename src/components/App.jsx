import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma/css/bulma.css'
import 'emailjs-com/dist/email.min.js'

import '../styles/pages/Global.css'

import Layout from './Layout'

import Home from '../pages/Home'
import PropiedadIntelectual from '../pages/PropiedadIntelectual'
import ComercioExterior from '../pages/ComercioExterior'
import ServiciosMigratorios from '../pages/ServiciosMigratorios'
import Contacto from '../pages/Contacto'
import NotFound from '../pages/NotFound'
import Privacidad from '../pages/Privacidad'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* Para github pages */}
            <Route exact path='/cgasociados' component={Home} />
            <Route exact path='/propiedad-intelectual' component={PropiedadIntelectual} />
            <Route exact path='/comercio-exterior' component={ComercioExterior} />
            <Route exact path='/servicios-migratorios' component={ServiciosMigratorios} />
            <Route exact path='/contacto' component={Contacto} />
            <Route exact path='/privacidad' component={Privacidad} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
