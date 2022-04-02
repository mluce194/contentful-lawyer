import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ContentRow = class extends React.Component {


  render() {

    const ImageUrl = this.props.backgroundImage;

    console.log("Mon image de fond", this.props.backgroundImage)
    return (
      <div className={`md:flex ${this.props.direction}`}>
        <div className="md:basis-1/2 p-8 md:p-14">
          <p>{renderRichText(this.props.description)}</p>
        </div>

        <div
          className="md:basis-1/2 p-5 md:p-20 min-h-[300px]"
          style={{ backgroundImage: `url(${ImageUrl})` }}></div>
      </div>
    )
  }
}

ContentRow.propTypes = {
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  direction: PropTypes.string,
}

ContentRow.defaultProps = {
  description: '',
  backgroundImage: '',
  direction: '',
}

export default ContentRow
