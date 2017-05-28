import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { browserHistory, Router } from 'react-router'
import './Footer.scss'



class Footer extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
        <footer className='footer'>
            <p>Crafted by <Link to="/">Fahmi Fachreza</Link></p>
        </footer>
    )
  }
}

export default Footer
