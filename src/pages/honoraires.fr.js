import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import SingleContent from '../components/Content'
import EnTete from '../components/EnTete'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../components/honoraires.table.css'

class Honoraires extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulHonoraires.nodes[1]')

    const Texte = Content.texte
    const Titre = Content.titrePrincipal
    const ImageEnTete = Content.imageDenTte.gatsbyImageData.images.fallback.src
    const Tableau = Content.tableau.tableau

    return (
      <Layout lang="fr" path="honoraires">
        <EnTete titre={Titre} backgroundImage={ImageEnTete}></EnTete>
        <SingleContent contenu={Texte}></SingleContent>
        <ReactMarkdown
          children={Tableau}
          remarkPlugins={[remarkGfm]}
          className="feeTable md:max-w-[1200px] mx-auto"
        />
        
      </Layout>
    )
  }
}

export default Honoraires

export const HonorairesQuery = graphql`
  query HonorairesQuery {
    allContentfulHonoraires {
      nodes {
        titrePrincipal
        texte {
          raw
        }
        imageDenTte {
          gatsbyImageData
        }
        tableau {
          tableau
        }
      }
    }
  }
`
