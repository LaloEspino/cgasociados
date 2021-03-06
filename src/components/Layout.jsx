import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

class Layout extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout