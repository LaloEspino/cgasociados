import React, { Component } from 'react'

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section class="section">
        <div className='container'>
          <h1 className='title has-text-centered'>
            Campillo Gómez y Asociados, S. C.
          </h1>

          <div className='content'>

            <p>
              La firma es una asociación civil cuyo objeto es proveer servicios de asesoría, consultoría y gestión en materia de Propiedad Intelectual, así como ofrecer servicios de apoyo al comercio, tales como registros sanitarios, permisos de importación, litigios, contratos, etc., orientados a la explotación industrial y comercial de los derechos de PI.
            </p>

            {/* Misión */}

            <h4 className='subtitle has-text-centered'>
              Misión
            </h4>

            <p>
              Prestar servicios confiables, oportunos, eficaces y eficientes en relación con la Propiedad Intelectual y materias afines, estableciendo relaciones cordiales y profesionales con el personal y los clientes para lograr un beneficio mutuo.
            </p>

            {/* Experiencia */}

            <h4 className='subtitle has-text-centered'>
              Experiencia
            </h4>

            <p>
              Si bien la firma es de las más recientes en su constitución, cuenta con una experiencia en el campo de las marcas y patentes de más de 30 años entre sus socios.
            </p>

          </div>

        </div>
      </section>
    )
  }
}

export default Home
