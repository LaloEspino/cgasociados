import React, { Component } from 'react'

import '../styles/pages/Contacto.css'

class Contacto extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      asunto: '',
      comentario: '',
      sended: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ sended: true })
    if (this.fieldsIntroduced()) {
      this.restartFields()
      console.log('simons')
    }
  }

  fieldsIntroduced = () => {
    if (
      this.state.nombre &&
      this.state.empresa &&
      this.state.email &&
      this.state.telefono &&
      this.state.asunto &&
      this.state.comentario
    ) {
      return true
    } else {
      return false
    }
  }

  restartFields = () => {
    this.setState({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      asunto: '',
      comentario: '',
      sended: false
    })
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title has-text-centered'>
            Contacto
          </h1>

          <div className='content'>

            <p>
              Llene el siguiente formulario y en breve nos pondremos en contacto con usted.
            </p>

            <form onSubmit={this.handleSubmit}>
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Nombre:</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded'>
                      <input
                        className='input'
                        name='nombre'
                        value={this.state.nombre}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='' />
                    </p>
                    {!this.state.nombre && this.state.sended && <p className='help is-danger'>
                      Este campo es obligatorio
                  </p>}
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Empresa:</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded'>
                      <input
                        className='input'
                        name='empresa'
                        value={this.state.empresa}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='' />
                    </p>
                    {!this.state.empresa && this.state.sended && <p className='help is-danger'>
                      Este campo es obligatorio
                  </p>}
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Email:</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded'>
                      <input
                        className='input'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        type='email'
                        placeholder='' />
                    </p>
                    {!this.state.email && this.state.sended && <p className='help is-danger'>
                      Este campo es obligatorio
                  </p>}
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Teléfono:</label>
                </div>
                <div className='field-body'>
                  <div className='field is-expanded'>
                    <div className='field has-addons'>
                      <p className='control'>
                        <span className='button is-static'>
                          +55
                      </span>
                      </p>
                      <p className='control is-expanded'>
                        <input
                          className='input'
                          name='telefono'
                          value={this.state.telefono}
                          onChange={this.handleChange}
                          type='tel'
                          placeholder='' />
                      </p>
                    </div>
                    {!this.state.telefono && this.state.sended && <p className='help is-danger'>
                      Este campo es obligatorio
                  </p>}
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Asunto</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded'>
                      <input
                        className='input'
                        name='asunto'
                        value={this.state.asunto}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='' />
                    </p>
                    {!this.state.asunto && this.state.sended && <p className='help is-danger'>
                      Este campo es obligatorio
                  </p>}
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Comentario</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <div className='control'>
                      <textarea
                        name='comentario'
                        value={this.state.comentario}
                        onChange={this.handleChange}
                        type='text'
                        className='textarea'
                        placeholder='Describa en que podemos ayudarle'></textarea>
                    </div>
                    {!this.state.comentario && this.state.sended && <p className='help is-danger'>
                      Este campo es obligatorio
                  </p>}
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label'>

                </div>
                <div className='field-body'>
                  <div className='field'>
                    <div className='control'>
                      <button className='button is-link'>
                        Enviar mensaje
                    </button>
                    </div>
                  </div>
                </div>
              </div>

            </form>

          </div>

          <hr />

          <div className='columns'>
            <div className='column'>
            </div>
            <div className='column is-two-thirds'>
              <div className='content'>
                <p>
                  <strong>Dirección</strong>: José María Rico No. 212-302
                  Colonia Actipan del Valle
                  México, D.F. C.P. 03100
                </p>

                <p>
                  <strong>Tel</strong>: (55) 5575 8008
                  (55) 5559 1768
                </p>

                <p>
                  <strong>Fax</strong>: (55) 5559 1768
                </p>

                <p>
                  <strong>email</strong>: <a href='mailto:contacto@cgasociados.com.mx'>contacto@cgasociados.com.mx</a>
                </p>
              </div>
            </div>
            <div className='column'>
            </div>
          </div>

          <hr />

          <div>
            <iframe
              title='mapa'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120403.4564725961!2d-99.26816077471352!3d19.429335370300294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9c25c424a3%3A0xfb07ad54bf83ad94!2sCAMPILLO+G%C3%93MEZ+Y+ASOCIADOS%2C+S.+C.!5e0!3m2!1ses!2smx!4v1551155524826'
              className='Contacto__mapa'
              frameBorder='0'
              allowFullScreen></iframe>
          </div>

        </div>
      </section>
    )
  }
}

export default Contacto
