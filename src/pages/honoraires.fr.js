import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import SingleContent from '../components/Content'
import EnTete from '../components/EnTete'
import Layout from '../components/layout'

class Honoraires extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulHonoraires.nodes[1]')

    const Texte = Content.texte
    const Titre = Content.titrePrincipal
    const ImageEnTete = Content.imageDenTte.gatsbyImageData.images.fallback.src

    return (
      <Layout>
        <EnTete titre={Titre} backgroundImage={ImageEnTete}></EnTete>

        <SingleContent contenu={Texte}></SingleContent>
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
      }
    }
  }
`
