import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ContentRow = class extends React.Component {


  render() {

    const ImageUrl = this.props.backgroundImage;
    return (
      <div className={`md:flex ${this.props.direction} ${this.props.direction === "flex-row-reverse" ? "bg-secondary" : ""}`}>
        <div className="md:basis-1/2 p-8 md:p-14">
          <div>{this.props.description ? renderRichText(this.props.description) : ''}</div>
        </div>

        <div
          className="md:basis-1/2 min-h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url(${ImageUrl})` }}></div>
      </div>
    )
  }
}

ContentRow.propTypes = {
  description: PropTypes.object,
  backgroundImage: PropTypes.string,
  direction: PropTypes.string,
}

ContentRow.defaultProps = {
  description: '',
  backgroundImage: '',
  direction: 'flex-row',
}

export default ContentRow
