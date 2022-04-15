import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

const Navigation = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }


  const currentLang = props.language


  return (
    <div className="bg-neutral-200">
      <nav
        role="navigation"
        className="block md:flex items-center flex-wrap p-6 sm:block max-w-6xl mx-auto"
        aria-label="Main"
      >
        <div className="block md:hidden">
          <button
            className="block items-center px-3 py-2 border border-maroon rounded text-maroon"
            onClick={handleToggle}
          >
            <svg
              className="fill-current h-3 w-3"
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
            <Link
              to={`/${currentLang}`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              Accueil
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/presentation/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              Présentation
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/domaines/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              Domaines d'intervention
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/honoraires/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              Honoraires
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/ventesJudiciaires/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              Ventes judiciaires
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/contact/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
