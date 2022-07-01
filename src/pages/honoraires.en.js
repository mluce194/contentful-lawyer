import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import SingleContent from '../components/Content'
import EnTete from '../components/EnTete'
import Layout from '../components/layout'

class HonorairesEN extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulHonoraires.nodes[0]')

    const Texte = Content.texte
    const Titre = Content.titrePrincipal
    const ImageEnTete = Content.imageDenTte.gatsbyImageData.images.fallback.src

    return (
      <Layout lang="en" path="honoraires"> 
        <EnTete titre={Titre} backgroundImage={ImageEnTete}></EnTete>

        <SingleContent contenu={Texte}></SingleContent>
      </Layout>
    )
  }
}

export default HonorairesEN

export const HonorairesENQuery = graphql`
  query HonorairesENQuery {
    allContentfulHonoraires {
      nodes {
        titrePrincipal
        texte {
          raw
        }
        imageDenTte {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`
