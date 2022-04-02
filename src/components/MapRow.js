import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const MapRow = class extends React.Component {
  render() {
    return (
      <div className={`md:flex ${this.props.direction}`}>
        <div class="md:basis-1/3 p-5 md:p-20">
          <p>{renderRichText(this.props.description)}</p>
        </div>

        <div class="md:basis-2/3">
          <p dangerouslySetInnerHTML={{ __html: this.props.mapContent }}></p>
        </div>
      </div>
    )
  }
}

MapRow.propTypes = {
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  direction: PropTypes.string,
  map: PropTypes.string,
}

MapRow.defaultProps = {
  description: '',
  backgroundImage: '',
  direction: '',
  map: '',
}

export default MapRow
