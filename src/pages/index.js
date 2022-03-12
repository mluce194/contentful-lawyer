import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'


import Layout from '../components/layout'
import ContentRow from '../components/ContentRow'
import MapRow from '../components/MapRow'




class Accueil extends React.Component {
  render() {
    const texte1 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].richText1')
    const image1 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image1')

    const texte2 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].richText2')
    const image2 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image2')

    const texte3 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].richText3')
    const map = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].map.map')
   

    console.log("mon texte 1", texte1)
    console.log("voir image 1", image1)
    return (
      <Layout>
      <ContentRow description ={texte1} backgroundImage={image1.gatsbyImageData.images.fallback.src} direction="flex-row"></ContentRow>
      <ContentRow description ={texte2} backgroundImage={image2.gatsbyImageData.images.fallback.src} direction="flex-row-reverse"></ContentRow>
      <MapRow description={texte3} mapContent = {map} direction="flex-row"></MapRow>
      </Layout>
    )
  }
}

export default Accueil

export const AccueilQuery = graphql`
  query AccueilQuery {
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
  }
`

