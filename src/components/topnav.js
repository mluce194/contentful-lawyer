import React from 'react'
import Logo from './logo'
import SwitchLanguage from './language'

const TopNavigation = () => (
  <nav
    role="navigation"
    aria-label="Main"
    className="sm:flex justify-between max-w-6xl mx-auto p-5"
  >
    <Logo></Logo>
    <SwitchLanguage></SwitchLanguage>
  </nav>
)

export default TopNavigation
