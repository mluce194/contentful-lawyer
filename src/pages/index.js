import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'


import Layout from '../components/layout'
import ContentRow from '../components/ContentRow'
import MapRow from '../components/MapRow'




class Accueil extends React.Component {
  render() {
    const texte1 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].childContentfulPageDaccueilTexte1TextNode')
    const image1 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image1')
    const image1title = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image1.title')

    const texte2 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].childContentfulPageDaccueilTexte2TextNode')
    const image2 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image2')
    const image2title = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image2.title')

    const texte3 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].childContentfulPageDaccueilTexte3TextNode')
    const map = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].map.map')
   

    console.log("mon texte 1", texte1)
    console.log("voir image 1", image1)
    return (
      <Layout>
      <ContentRow description ={texte1.childMarkdownRemark.html} image={image1.gatsbyImageData} backgroundImage={image1.gatsbyImageData.images.fallback.src} imageTitle={image1title} direction="flex-row"></ContentRow>
      <ContentRow description ={texte2.childMarkdownRemark.html} image={image2.gatsbyImageData} backgroundImage={image2.gatsbyImageData.images.fallback.src} imageTitle={image2title} direction="flex-row-reverse"></ContentRow>
      <MapRow description={texte3.childMarkdownRemark.html} mapContent = {map} direction="flex-row"></MapRow>
      </Layout>
    )
  }
}

export default Accueil

export const AccueilQuery = graphql`
  query AccueilQuery {
    allContentfulPageDaccueil {
      nodes {
        situation {
          lat
          lon
        }
        image2 {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          description
          title
        }
        image1 {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          description
          title
        }
        childContentfulPageDaccueilTexte3TextNode {
          childMarkdownRemark {
            html
          }
        }
        childContentfulPageDaccueilTexte2TextNode {
          childMarkdownRemark {
            html
          }
        }
        childContentfulPageDaccueilTexte1TextNode {
          childMarkdownRemark {
            html
          }
        }
        map {
          map
        }
      }
    }
  }
`

