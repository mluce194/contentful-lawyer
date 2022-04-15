import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import EnTete from '../components/EnTete'
import SingleContent from '../components/Content'
import Form from '../components/form'

class ContactEN extends React.Component {
  render() {
    const Donnees = get(this, 'props.data.allContentfulContact.nodes[0]')
    const Description = Donnees.description


    return (
      <Layout lang="en" path="contact">
        <EnTete titre="Contacter Paul-Marie Beraudo"></EnTete>
        <SingleContent contenu={Description}>
          
        </SingleContent>
        <Form></Form>
          

      </Layout>
    )
  }
}

export default ContactEN

export const ContactENQuery = graphql`
  query contentENfulContact {
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
