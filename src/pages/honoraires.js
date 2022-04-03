import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import SingleContent from '../components/Content'
import MainTitle from '../components/MainTitle'
import Layout from '../components/layout'

class Honoraires extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulHonoraires.nodes[0]')

    const Texte = Content.texte
    const Titre = Content.titrePrincipal

    return (
      <Layout>
        <MainTitle titre={Titre}></MainTitle>

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
        texte {
          raw
        }
        titrePrincipal
      }
    }
  }
`
