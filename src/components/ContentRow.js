import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


const ContentRow = class extends React.Component {

  render() {

    console.log("image trouvée", this.props.backgroundImage)
    return (

      <div className="columns-3">
        <p dangerouslySetInnerHTML={{ __html: this.props.description}}></p>
        <GatsbyImage alt={this.props.imageTitle} image={this.props.image} />
        <div style={{ backgroundImage: `url(${this.props.backgroundImage})`, backgroundColor: 'red'}}>L'image de fond devrait être ici</div>
      
      </div>
    )

  }

 

}







export default ContentRow;