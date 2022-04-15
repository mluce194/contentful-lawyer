import React from 'react'

import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import TopNav from './topnav'

const Template = ({children, lang}) => {



    console.log("afficher la langue", lang)

    return (
      <>
        <Seo lang={lang}/>

        <TopNav language={lang} />
        <Navigation language={lang}/>
        <main className="text-primary">{children}</main>
        <Footer />
      </>
    )
  }


export default Template
