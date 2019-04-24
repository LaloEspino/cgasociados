import React, { Component, Fragment } from 'react'
import bug from '../images/bug.svg'
import '../styles/pages/NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <section class="hero is-medium">
          <div class="hero-body">
            <div class="container has-text-centered">
              <p class="title">
                Error 404
              </p>
              <p class="subtitle">
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
