import React from 'react'
import { Link } from 'gatsby'

const Logo = () => {
  return (
    <Link to="/" title="Logo" className="font-serif text-secondary text-2xl">
      Paul-Marie Beraudo
      <span className="block text-primary font-sans text-base font-light">
        -- Avocat au Barreau de Thonon Les Bains
      </span>
    </Link>
  )
}



export default Logo
