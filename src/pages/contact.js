import React from 'react'

import Layout from '../components/layout'
import EnTete from '../components/EnTete'
import Form from '../components/form'

class Contact extends React.Component {
  render() {



    return (
      <Layout>
        <EnTete titre="Contacter Paul-Marie Beraudo"></EnTete>
        <div className="p-8 md:max-w-[1200px] mx-auto">
   
        <Form></Form>
      </div>
      </Layout>
    )
  }
}

export default Contact

