import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import get from 'lodash/get'
import ContentRow from '../components/ContentRow'
import ContentRowThreeColumns from '../components/ContentRowThreeColumns'
import Layout from '../components/layout'


class Domaines extends React.Component {
  render() {

    const Content = get(this, 'props.data.allContentfulDomainesDintervention.nodes[0]')
    const Image1 = Content.illustration1.gatsbyImageData.images.fallback.src
    const Image2 = Content.illustration2.gatsbyImageData.images.fallback.src
    const Image3 = Content.illustration3.gatsbyImageData.images.fallback.src
    const Image4 = Content.illustration3.gatsbyImageData.images.fallback.src
    const Texte1 = Content.texte1
    const Texte2 = Content.texte2
    const Texte3 = Content.texte3
    const Texte4 = Content.texte4
    const Texte5 = Content.texte5
    const Texte6 = Content.texte6
    const Texte7 = Content.texte7
    const TextePresentation = Content.texte8
    const Titreh2 = Content.titre1
    const Titreh1 = Content.titrePrincipal


    console.log("mon image",Image1)


  
    return (
      <Layout>
        <h1>{Titreh1}</h1>
        <p>{renderRichText(TextePresentation)}</p>
        <h2>{Titreh2}</h2>

        <ContentRowThreeColumns description1={Texte1} description2={Texte2} backgroundImage={Image1}></ContentRowThreeColumns>
        <ContentRowThreeColumns description1={Texte3} description2={Texte4} backgroundImage={Image2}></ContentRowThreeColumns>
        <ContentRowThreeColumns description1={Texte5} description2={Texte6} backgroundImage={Image3}></ContentRowThreeColumns>
        <ContentRow description={Texte7} backgroundImage={Image4}></ContentRow>



 
      </Layout>
    )
  }
}

export default Domaines

export const DomainesQuery = graphql`
  query DomainesQuery {
    allContentfulDomainesDintervention {
      nodes {
        illustration1 {
          gatsbyImageData
          description
          title
        }
        illustration2 {
          gatsbyImageData
          description
          title
        }
        illustration3 {
          gatsbyImageData
          description
          title
        }
        illustration4 {
          description
          gatsbyImageData
          title
        }
        texte1 {
          raw
        }
        texte2 {
          raw
        }
        texte3 {
          raw
        }
        texte4 {
          raw
        }
        texte5 {
          raw
        }
        texte6 {
          raw
        }
        texte7 {
          raw
        }
        texte8 {
          raw
        }
        titre1
        titrePrincipal
      }
    }
  }
`


