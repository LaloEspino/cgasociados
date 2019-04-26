import React from 'react'

class Loader extends React.Component {

  render() {
    if (this.props.loading) {
      return (
        <div className='columns'>
          <div className='column'>
          </div>
          <div className='column is-two-thirds'>
            <div className='content'>

              <progress className='progress is-small is-primary' max='100'>15%</progress>

            </div>
          </div>
          <div className='column'>
          </div>
        </div>
      )
    } else {
      return (null)
    }
  }
}

export default Loader