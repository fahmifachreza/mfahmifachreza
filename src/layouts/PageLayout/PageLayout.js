import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import Footer from '../../components/Footer/Footer'

import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container'>
    <Header/>
    <MobileHeader/>
    <div>
      {children}
    </div>
    <Footer/>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
