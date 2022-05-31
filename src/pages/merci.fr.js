import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import EnTete from '../components/EnTete'
import SingleContent from '../components/Content'

class Contact extends React.Component {
  render() {
    const Donnees = get(this, 'props.data.allContentfulContact.nodes[1]')
    const Description = Donnees.remerciement


    return (
      <Layout lang="fr" path="merci">
        <EnTete titre="Contacter Paul-Marie Beraudo"></EnTete>
        <SingleContent contenu={Description}></SingleContent>
      </Layout>
    )
  }
}

export default Contact

export const MerciQuery = graphql`
  query contentfulMerci {
    allContentfulContact {
      nodes {
        remerciement {
          raw
        }
      }
    }
  }
`
