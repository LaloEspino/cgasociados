import React, { Component } from 'react'

class PropiedadIntelectual extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title has-text-centered'>
            Propiedad Intelectual
        </h1>

          <div className='content'>
            <p>
              La actividad innovadora de una empresa es un elemento que mejora su posición e incrementa su competitividad en un creciente mercado global, por ello, cada día es más necesario proteger los desarrollos de las empresas a través de los mecanismos de protección que otorga la Propiedad Intelectual.
          </p>

            <p>
              Estos mecanismos de protección han sido armonizados en prácticamente todo el mundo por la mediación de la Organización Mundial de la Propiedad Intelectual (OMPI/WIPO), por lo que ya no es complicado lograr proteger los desarrollos en el mundo.
          </p>

            <p>
              En México se cuenta con tres grandes formas de protección a la Propiedad Intelectual, mismas que son administradas por dos organismos públicos:
          </p>

            <p>
              I. El Instituto Mexicano de la Propiedad Industrial (IMPI), a cargo de la protección a las invenciones mediante el otorgamiento de Patentes, Modelos de Utilidad y Diseños Industriales, y
          </p>

            <p>
              II. El Instituto Nacional del Derecho de Autor (INDAUTOR), a cargo de la protección a las obras artísticas, entre otras.
          </p>

            <p>
              Nuestros servicios incluyen el trámite para la obtención y mantenimiento de los derechos ante ambas instituciones, así como la defensa de los mismos por actos de competencia desleal (piratería).
          </p>
          </div>

          <div className='columns'>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Signos Distintivos
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p><strong>Registros en México y el extranjero de:</strong></p>
                    <p>Marcas</p>
                    <p>Avisos Comerciales</p>
                    <p>Nombres Comerciales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Invenciones
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>Búsquedas del Estado de la Técnica</p>
                    <p>Redacción de memorias Técnicas</p>
                    <p>Solicitudes nacionales e internacionales</p>
                    <p>Registro de diseños industriales</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Defensa de Derechos
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>Solicitud Administrativa de Nulidad</p>
                    <p>Solicitud Administrativa de Caducidad</p>
                    <p>Solicitud Administrativa de Infracción </p>
                    <p>Medidas Cuautelares </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Derechos de Autor
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>Registros de Derechos de Autor</p>
                    <p>Reservas de derechos de publicaciones periódicas</p>
                    <p>Reservas de derechos de personajes ficticios</p>
                    <p>Registro de promociones publicitarias</p>
                    <p>Obtención de ISSN e ISBN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default PropiedadIntelectual
