import React from 'react'

import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import TopNav from './topnav'


const Template = ({ children, lang, path }) => {


  return (
    <>
      <Seo lang={lang} />

      <TopNav language={lang} path={path}/>
      <Navigation language={lang}/>
      <main className="text-primary">{children}</main>
      <Footer />
    </>
  )
}



export default Template


