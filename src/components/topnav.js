import React from 'react'
import Logo from './logo'
import SwitchLanguage from './language'

const TopNavigation = (props) => {
  
  
  return (
  <nav
    role="navigation"
    aria-label="Main"
    className="sm:flex justify-between max-w-6xl mx-auto p-5"
  >
    <Logo></Logo>
    <SwitchLanguage language={props.language} path={props.path}></SwitchLanguage>
  </nav>
)

  }

export default TopNavigation
