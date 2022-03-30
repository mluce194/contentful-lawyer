import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="bg-neutral-200">
    <nav
      role="navigation"
      class="block md:flex items-center flex-wrap p-6 sm:block max-w-6xl mx-auto"
      aria-label="Main"
    >
      <div class="block md:hidden">
        <button
          class="block items-center px-3 py-2 border border-maroon rounded text-maroon"
          onClick={handleToggle}
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <ul className={`${toggleMenu ? 'block' : 'hidden'} md:flex`}>
        <li className="block m-2">
          <Link to="/" activeClassName="active" className="block m-2 font-light text-slim text-primary hover:text-secondary md:inline-block md:mt-0 md:ml-6">
            Home
          </Link>
        </li>
        <li className="block m-2">
          <Link to="/presentation/" activeClassName="active" className="block m-2 font-light text-slim text-primary hover:text-secondary md:inline-block md:mt-0 md:ml-6">
            Présentation
          </Link>
        </li>
        <li className="block m-2">
          <Link to="/domaines/" activeClassName="active" className="block m-2 font-light text-slim text-primary hover:text-secondary md:inline-block md:mt-0 md:ml-6">
            Domaines d'intervention
          </Link>
        </li>
        <li className="block m-2">
          <Link to="/honoraires/" activeClassName="active" className="block m-2 font-light text-slim text-primary hover:text-secondary md:inline-block md:mt-0 md:ml-6">
            Honoraires
          </Link>
        </li>
        <li className="block m-2">
          <Link to="/ventesJudiciaires/" activeClassName="active" className="block m-2 font-light text-slim text-primary hover:text-secondary md:inline-block md:mt-0 md:ml-6">
            Ventes judiciaires
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navigation
