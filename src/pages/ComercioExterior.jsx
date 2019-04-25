import React, { Component } from 'react'

class ComercioExterior extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title has-text-centered'>
            Comercio Exterior
        </h1>

          <div className='content'>
            <p>El Comercio Internacional, esto es, el intercambio de bienes, productos y servicios entre dos países o entre dos regiones (Comercio Exterior), no es completamente libre ya que existen barreras establecidas para su regulación y control, entre otras, los aranceles, las salvaguardias, las cuotas de exportación/importación, así como barreras no arancelarias, que incluyen tanto normas legales como procedimientos administrativos no basados en medidas explícitas, sino en directivas informales de instituciones y gobiernos. </p>

            <p>Otro tipo de barreras a considerar incluyen el establecimiento de controles sanitarios, fitosanitarios o medioambientales, controles y trámites administrativos, así como controles de embalajes, etiquetados o calidad técnica. </p>

            <p>Especialmente importante es la importación de productos, que permiten a los ciudadanos del país de destino, adquirir productos no producidos localmente, o más baratos o de mayor calidad, resultando en un beneficio al consumidor. </p>

            <p>En este sentido, nuestros servicios se dirigen hacia el trámite para la obtención de los permisos, registros, certificados y otros documentos, que permitan la importación en el Territorio Nacional, de esos productos de interés para el consumidor, ya sea de forma temporal o definitiva. </p>
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
                      Secretaría de Salud
                  </p>
                    <p>
                      Secretaría de Economía
                  </p>
                    <p>
                      SEMARNAT
                  </p>
                    <p>
                      SHCP/SAT
                  </p>
                    <p>
                      SEDNA
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Certificados NOM
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>
                      Certificaciones
                  </p>
                    <p>
                      Dictámenes
                  </p>
                    <p>
                      Pruebas de Laboratorio
                  </p>

                  </div>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <header className='card-header'>
                  <p className='card-header-title'>
                    Trámites ante COFEPRIS
                </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>
                      Registros sanitarios para medicamentos, equipo y dispositivos médicos
                  </p>
                    <p>
                      Avisos de Funcionamiento
                  </p>
                    <p>
                      Licencias Sanitarias
                  </p>
                    <p>
                      Autorizaciones Sanitarias
                  </p>
                    <p>
                      Renovación de Registros Sanitarios
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

export default ComercioExterior
