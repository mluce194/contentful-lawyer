import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import EnTete from '../components/EnTete'
import SingleContent from '../components/Content'

class Contact extends React.Component {
  render() {
    const Donnees = get(this, 'props.data.allContentfulContact.nodes[0]')
    const Description = Donnees.remerciement

    console.log('Données de la page contact', Donnees)

    return (
      <Layout lang="en" path="merci">
        <EnTete titre="Contacter Paul-Marie Beraudo"></EnTete>
        <SingleContent contenu={Description}></SingleContent>
      </Layout>
    )
  }
}

export default Contact

export const MerciQueryEn = graphql`
  query MerciQueryEn {
    allContentfulContact {
      nodes {
        remerciement {
          raw
        }
      }
    }
  }
`
