import React from 'react'

class Message extends React.Component {

  render() {
    return (
      <div className='columns'>
        <div className='column'>
        </div>
        <div className='column is-two-thirds'>
          <div className='content'>

            <article className={`message ${!this.props.error ? 'is-success' : 'is-danger'}`}>
              <div className="message-header">
                <p>{`${!this.props.error
                  ? 'Éxito'
                  : 'Error'}`}</p>
                <button onClick={this.props.onClose} className="delete" aria-label="delete"></button>
              </div>
              <div className="message-body">
                {`${!this.props.error
                  ? 'El mensaje fue enviado con éxito'
                  : 'El mensaje no pudo ser enviado, intente mas tarde'}`}
              </div>
            </article>

          </div>
        </div>
        <div className='column'>
        </div>
      </div>
    )
  }
}

export default Message