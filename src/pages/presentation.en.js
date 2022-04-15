import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import ContentRow from '../components/ContentRow'
import Layout from '../components/layout'
import EnTete from '../components/EnTete'

class PresentationEN extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulPresentation.nodes[0]')
    const ImageEnTete = Content.imageDenTte.gatsbyImageData.images.fallback.src
    const Image1 = Content.illustration1.gatsbyImageData.images.fallback.src

    const Texte1 = Content.texte1

    const TitrePrincipal = Content.titrePrincipal

    console.log('Mes données de contenu', Texte1)
    return (
      <Layout lang="en">
        <EnTete backgroundImage={ImageEnTete} titre={TitrePrincipal}></EnTete>


        <ContentRow
          description={Texte1}
          backgroundImage={Image1}
        ></ContentRow>
      </Layout>
    )
  }
}

export default PresentationEN

export const PresentationENQuery = graphql`
  query PresentationENQuery {
    allContentfulPresentation {
      nodes {
        illustration1 {
          gatsbyImageData
          title
        }
        texte1 {
          raw
        }
        titre2
        titrePrincipal
        imageDenTte {
          gatsbyImageData
        }
      }
    }
  }
`

