import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import EnTete from '../components/EnTete'
import SingleContent from '../components/Content'
import Form from '../components/form'

class Contact extends React.Component {
  render() {
    const Donnees = get(this, 'props.data.allContentfulContact.nodes[1]')
    const Description = Donnees.description

    console.log('Données de la page contact', Donnees)

    return (
      <Layout lang="fr">
        <EnTete titre="Contacter Paul-Marie Beraudo"></EnTete>
        <SingleContent contenu={Description}>
          
        </SingleContent>
        <Form></Form>
          

      </Layout>
    )
  }
}

export default Contact

export const ContactQuery = graphql`
  query contentfulContact {
    allContentfulContact {
    nodes {
      description {
        raw
      }
      titre
    }
  }
  }
`
