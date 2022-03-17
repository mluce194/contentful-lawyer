import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import get from 'lodash/get'
import Layout from '../components/layout'

class VentesJudiciaires extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulVentesJudiciaires.nodes[0]')

    const Texte = Content.texte
    const Titre = Content.titrePrincipal
    console.log("Mon contenu", Content)

    return (
      <Layout>
        <h1>{Titre}</h1>

        <p>{renderRichText(Texte)}</p>
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
