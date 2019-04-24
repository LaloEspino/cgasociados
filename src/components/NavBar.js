import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClick = (e) => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Fragment>
        <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>

            <Link className={`navbar-item ${window.location.pathname === '/' && 'is-active'}`} onClick={this.handleClick} to='/'>
              <p className='title is-6'>
                CGAsociados
              </p>
            </Link>

            <Link to='' role='button' className={`navbar-burger burger ${this.state.open && 'is-active'}`} onClick={this.handleClick} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </Link>
          </div>

          <div id='navbarBasicExample' className={`navbar-menu ${this.state.open && 'is-active'}`}>
            <div className='navbar-start'>
              <Link className={`navbar-item ${window.location.pathname === '/propiedad-intelectual' && 'is-active'}`} onClick={this.handleClick} to='/propiedad-intelectual'>
                Propiedad Intelectual
              </Link>

              <Link className={`navbar-item ${window.location.pathname === '/comercio-exterior' && 'is-active'}`} onClick={this.handleClick} to='/comercio-exterior'>
                Comercio Exterior
              </Link>

              <Link className={`navbar-item ${window.location.pathname === '/servicios-migratorios' && 'is-active'}`} onClick={this.handleClick} to='/servicios-migratorios'>
                Servicios Migratorios
              </Link>

              <Link className={`navbar-item ${window.location.pathname === '/contacto' && 'is-active'}`} onClick={this.handleClick} to='/contacto'>
                Contacto
              </Link>
            </div>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default NavBar
