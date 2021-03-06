import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ContentRow from '../components/ContentRow'
import MapRow from '../components/MapRow'
import Diaporama from '../components/Diaporama'

class AccueilEN extends React.Component {
  render() {
    const donnees = get(this, 'props.data.allContentfulPageDaccueil.nodes[0]')
    const texte1 = donnees.richText1
    const image1 = donnees.image1
    const texte2 = donnees.richText2
    const image2 = donnees.image2
    const texte3 = donnees.richText3
    const map = donnees.map.map
    const imagesDiapo = get(this, 'props.data.allContentfulDiaporama.nodes')

    return (
      <Layout lang="en" path="">
        <Diaporama images={imagesDiapo}></Diaporama>

        <ContentRow
          description={texte1}
          backgroundImage={image1.gatsbyImageData.images.fallback.src}
          direction="flex-row"
        ></ContentRow>
        <ContentRow
          description={texte2}
          backgroundImage={image2.gatsbyImageData.images.fallback.src}
          direction="flex-row-reverse"
        ></ContentRow>
        <MapRow
          description={texte3}
          mapContent={map}
          direction="flex-row"
        ></MapRow>
      </Layout>
    )
  }
}

export default AccueilEN

export const AccueilENQuery = graphql`
  query AccueilENQuery {
    allContentfulPageDaccueil {
      nodes {
        image2 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        image1 {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        richText1 {
          raw
        }
        richText2 {
          raw
        }
        richText3 {
          raw
        }
        map {
          map
        }
      }
    }
    allContentfulDiaporama(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        id
        description
        titrediapo
        lien
        node_locale
        slide {
          gatsbyImageData
        }
      }
    }
  }
`
