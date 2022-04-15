import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import Layout from '../components/layout'
import SingleContent from '../components/Content'
import EnTete from '../components/EnTete'

class VentesJudiciaires extends React.Component {
  render() {
    const Content = get(
      this,
      'props.data.allContentfulVentesJudiciaires.nodes[1]'
    )

    const Texte = Content.texte
    const Titre = Content.titrePrincipal
    const ImageEnTete = Content.imageDenTte.gatsbyImageData.images.fallback.src

    return (
      <Layout lang="fr">
        <EnTete titre={Titre} backgroundImage={ImageEnTete}></EnTete>

        <SingleContent contenu={Texte}></SingleContent>
      </Layout>
    )
  }
}

export default VentesJudiciaires

export const VentesJudiciairesQuery = graphql`
  query VentesJudiciairesQuery {
    allContentfulVentesJudiciaires {
      nodes {
        texte {
          raw
        }
        titrePrincipal
        imageDenTte {
          gatsbyImageData
        }
      }
    }
  }
`
