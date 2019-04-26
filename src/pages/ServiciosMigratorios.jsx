import React, { Component } from 'react'

class ServiciosMigratorios extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title has-text-centered'>
            Servicios Migratorios
        </h1>

          <div className='content'>
            <p>
              Se denomina migración a todo desplazamiento de la población que se produce desde un lugar de origen a otro destino y lleva consigo un cambio de la residencia habitual. Las migraciones de seres humanos se estudian tanto por la Demografía como por la Geografía de la Población.
          </p>
            <p>
              La migración a México se da por cuestiones de trabajo, inversión, deporte, investigación, protección internacional tales como refugiado o Asilado u otros; en las cuales es necesario pedir a las autoridades Mexicanas la autorización para internarse de modo legal a nuestro país.
          </p>
            <p>
              Si deseas trabajar o estudiar en México, notros te podemos ayudar a obtener tu documento migratorio que te permita permanecer sin ningún problema.
          </p>
          </div>

          <div className='columns'>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Permisos de Importación
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>
                      Obtención de Forma Migratoria: (No Inmigrante, Inmigrante, Inmigrado)
                  </p>
                    <p>
                      Registro Nacional de Extranjeros
                  </p>
                    <p>
                      Referendo a Calidad Migratoria
                  </p>
                    <p>
                      Naturalización
                  </p>
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

export default ServiciosMigratorios
