import React from 'react'

import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import TopNav from './topnav'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <TopNav />
        <Navigation />
        <main className="text-primary">{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
