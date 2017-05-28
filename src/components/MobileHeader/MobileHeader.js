import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { browserHistory, Router } from 'react-router'
import './MobileHeader.scss'



class MobileHeader extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
        <header className='mobile-nav-wrap'>
            <nav>
                <ul className='mobile-nav-list'>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/bio">Bio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
  }
}

export default MobileHeader
