import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className='footer'>
          <div className='content has-text-centered'>
            <p>
              Copyright © by <strong>Campillo Gomez y Asociados S.C.</strong>, 2012, Mexico
            </p>
            <p>
              <Link to='/privacidad'>Aviso de privacidad</Link>
            </p>
            <p>
              Español - Ingles
            </p>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer
