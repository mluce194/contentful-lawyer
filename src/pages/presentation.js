import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import ContentRow from '../components/ContentRow'
import ContentRowThreeColumns from '../components/ContentRowThreeColumns'
import MainTitle from '../components/MainTitle'
import SubTitle from '../components/SubTitle'
import Layout from '../components/layout'



class Presentation extends React.Component {
  render() {

    const Content = get(this, 'props.data.allContentfulPresentation.nodes[0]')
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
    const TitrePrincipal = Content.titrePrincipal
    const Titre1 = Content.titre1
    const Titre2 = Content.titre2





  
    return (
      <Layout>
        <MainTitle titre={TitrePrincipal}></MainTitle>
 
        <SubTitle titre={Titre1}></SubTitle>

        <ContentRowThreeColumns description1={Texte1} description2={Texte2} backgroundImage={Image1} direction="flex-row-reverse"></ContentRowThreeColumns>
        <ContentRowThreeColumns description1={Texte3} description2={Texte4} backgroundImage={Image2}></ContentRowThreeColumns>
        <SubTitle titre={Titre2}></SubTitle>
        <ContentRowThreeColumns description1={Texte5} description2={Texte6} backgroundImage={Image3} direction="flex-row-reverse"></ContentRowThreeColumns>
        <ContentRow description={Texte7} backgroundImage={Image4}></ContentRow>



 
      </Layout>
    )
  }
}

export default Presentation

export const PresentationQuery = graphql`
  query PresentationQuery {
    allContentfulPresentation {
      nodes {
        illustration1 {
          gatsbyImageData
          title
        }
        illustration2 {
          gatsbyImageData
          title
        }
        illustration3 {
          gatsbyImageData
        }
        illustration4 {
          gatsbyImageData
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
  
        titre1
        titre2
        titrePrincipal

      }
    }
  }
`


