import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'


const ContentRowThreeColumns = class extends React.Component {
  render() {


    console.log('image trouvée', this.props.backgroundImage)
    return (
      <div className={`flex ${this.props.direction}`}>
        <div class="basis-1/3 p-20">
          <p>{renderRichText(this.props.description1)}</p>
        </div>

        <div class="basis-1/3 p-20">
          <p>{renderRichText(this.props.description2)}</p>
        </div>

        <div
          class="basis-1/3 p-20"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            minHeight: '300px',
          }}
        ></div>
      </div>
    )
  }
}

ContentRowThreeColumns.defaultProps = {
  description1: "",
  description2: ""
}

export default ContentRowThreeColumns
