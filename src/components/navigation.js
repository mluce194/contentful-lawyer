import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Navigation = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  const currentLang = props.language
  const data = useStaticQuery(graphql`
    query NavQuery {
      allContentfulDomainesDintervention {
        nodes {
          titreDuMenu
        }
      }
      allContentfulHonoraires {
        nodes {
          titreDuMenu
        }
      }
      allContentfulVentesJudiciaires {
        nodes {
          titreDuMenu
        }
      }
      allContentfulContact {
        nodes {
          titreDuMenu
        }
      }
      allContentfulPageDaccueil {
        nodes {
          titreDuMenu
        }
      }
      allContentfulPresentation {
        nodes {
          titreDuMenu
        }
      }
    }
  `)

  const AccueilEn = data.allContentfulPageDaccueil.nodes[0].titreDuMenu
  const AccueilFr = data.allContentfulPageDaccueil.nodes[1].titreDuMenu
  const DomainesEn =
    data.allContentfulDomainesDintervention.nodes[0].titreDuMenu
  const DomainesFr =
    data.allContentfulDomainesDintervention.nodes[1].titreDuMenu
  const PresentationEn = data.allContentfulPresentation.nodes[0].titreDuMenu
  const PresentationFr = data.allContentfulPresentation.nodes[1].titreDuMenu
  const HonorairesEn = data.allContentfulHonoraires.nodes[0].titreDuMenu
  const HonorairesFr = data.allContentfulHonoraires.nodes[1].titreDuMenu
  const ContactEn = data.allContentfulContact.nodes[0].titreDuMenu
  const ContactFr = data.allContentfulContact.nodes[1].titreDuMenu
  const VentesJudiciairesEn =
    data.allContentfulVentesJudiciaires.nodes[0].titreDuMenu
  const VentesJudiciairesFr =
    data.allContentfulVentesJudiciaires.nodes[1].titreDuMenu

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
              {currentLang === 'en' ? AccueilEn : AccueilFr}
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/presentation/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              {currentLang === 'en' ? PresentationEn : PresentationFr}
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/domaines/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              {currentLang === 'en' ? DomainesEn : DomainesFr}
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/honoraires/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              {currentLang === 'en' ? HonorairesEn : HonorairesFr}
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/ventesJudiciaires/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              {currentLang === 'en' ? VentesJudiciairesEn : VentesJudiciairesFr}
            </Link>
          </li>
          <li className="block m-2">
            <Link
              to={`/${currentLang}/contact/`}
              activeClassName="active"
              className="block m-2 font-light text-slim text-primary hover:text-secondary focus:text-secondary md:inline-block md:mt-0 md:ml-6"
            >
              {currentLang === 'en' ? ContactEn : ContactFr}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
