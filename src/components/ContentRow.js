import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'


const ContentRow = class extends React.Component {
  render() {
    console.log('image trouvée', this.props.backgroundImage)
    return (
      <div className={`md:flex ${this.props.direction}`}>
        <div class="md:basis-1/2 p-5 md:p-20">
        <p>{renderRichText(this.props.description)}</p>
        </div>

        <div
          class="md:basis-1/2 p-5 md:p-20"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            minHeight: '300px',
          }}
        ></div>
      </div>
    )
  }
}

export default ContentRow
