import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import ContentRow from '../components/ContentRow'
import Layout from '../components/layout'
import SubTitle from '../components/SubTitle'
import SingleContent from '../components/Content'
import EnTete from '../components/EnTete'

class DomainesEN extends React.Component {
  render() {
    const Content = get(
      this,
      'props.data.allContentfulDomainesDintervention.nodes[0]'
    )
    const Image1 = Content.illustration1.gatsbyImageData.images.fallback.src
    const Image2 = Content.illustration2.gatsbyImageData.images.fallback.src
    const Image3 = Content.illustration3.gatsbyImageData.images.fallback.src
    const Image4 = Content.illustration4.gatsbyImageData.images.fallback.src
    const ImageEnTete = Content.imageDenTte.gatsbyImageData.images.fallback.src
    const Texte1 = Content.texte1
    const Texte3 = Content.texte3
    const Texte4 = Content.texte4
    const Texte5 = Content.texte5
    const TextePresentation = Content.texte8
    const Titreh2 = Content.titre1
    const Titreh1 = Content.titrePrincipal

    return (
      <Layout>
        <EnTete titre={Titreh1} backgroundImage={ImageEnTete}></EnTete>
        <SingleContent contenu={TextePresentation}></SingleContent>
        <SubTitle titre={Titreh2}></SubTitle>

        <ContentRow
          description={Texte1}
          backgroundImage={Image1}
        ></ContentRow>
     <ContentRow
          description={Texte4}
          backgroundImage={Image2}
          direction="flex-row-reverse"
        ></ContentRow>
        <ContentRow
          description={Texte3}
          backgroundImage={Image3}
        ></ContentRow>
        <ContentRow
          description={Texte5}
          backgroundImage={Image4}
          direction="flex-row-reverse"
        ></ContentRow>
      </Layout>
    )
  }
}

export default DomainesEN

export const DomainesENQuery = graphql`
  query DomainesENQuery {
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
        imageDenTte {
          gatsbyImageData
        }
      }
    }
  }
`
