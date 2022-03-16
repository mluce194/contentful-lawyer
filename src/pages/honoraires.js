import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import get from 'lodash/get'
import ContentRow from '../components/ContentRow'
import ContentRowThreeColumns from '../components/ContentRowThreeColumns'
import Layout from '../components/layout'

class Honoraires extends React.Component {
  render() {
    const Content = get(this, 'props.data.allContentfulHonoraires.nodes[0]')

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
