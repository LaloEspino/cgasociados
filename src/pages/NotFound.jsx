import React, { Component, Fragment } from 'react'
import bug from '../images/bug.svg'
import '../styles/pages/NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <section className='hero is-medium'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <p className='title'>
                Error 404
              </p>
              <p className='subtitle'>
                Página no encontrada
              </p>
              <img className='NotFound__image' src={bug} alt='Bug' />
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default NotFound
