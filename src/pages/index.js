import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'


import Layout from '../components/layout'
import ContentRow from '../components/ContentRow'




class Accueil extends React.Component {
  render() {
    const texte1 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].childContentfulPageDaccueilTexte1TextNode')
    const image1 = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image1')
    const image1title = get(this, 'props.data.allContentfulPageDaccueil.nodes[0].image1.title')
   

    console.log("mon texte 1", texte1)
    console.log("voir image 1", image1)
    return (
      <Layout>
      <ContentRow description ={texte1.childMarkdownRemark.html} image={image1.gatsbyImageData} backgroundImage={image1.gatsbyImageData.images.fallback.src} imageTitle={image1title}></ContentRow>
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
      }
    }
  }
`

