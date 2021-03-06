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


    return (
      <Layout lang="fr" path="contact">
        <EnTete titre="Contacter Paul-Marie Beraudo"></EnTete>
        <SingleContent contenu={Description}>
          
        </SingleContent>
        <Form lang="fr"></Form>
          

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
