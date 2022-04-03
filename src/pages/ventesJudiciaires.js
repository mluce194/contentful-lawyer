import React from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import Layout from '../components/layout'
import MainTitle from '../components/MainTitle'
import SingleContent from '../components/Content'

class VentesJudiciaires extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulVentesJudiciaires.nodes[0]')

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

export default VentesJudiciaires

export const VentesJudiciairesQuery = graphql`
  query VentesJudiciairesQuery {
    allContentfulVentesJudiciaires {
      nodes {
        texte {
          raw
        }
        titrePrincipal
      }
    }
  }
`
