import React from 'react'


import Layout from '../components/layout'
import EnTete from '../components/EnTete'

class NotFound extends React.Component {
  render() {



    return (
      <Layout>

<EnTete titre="Paul-Marie Beraudo, avocat"></EnTete>
        <p className="max-w-[1200px] text-xl mx-auto p-10 text-center">Oups... Ceci est gênant. Il semblerait que cette page n'existe pas ou plus.<br></br>
        Nous vous invitons à retourner à la <a href="/" className="text-secondary">Page d'accueil</a></p>


      </Layout>
    )
  }
}

export default NotFound


