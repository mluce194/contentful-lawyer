import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const MapRow = class extends React.Component {
  render() {
    return (
      <div className={`md:flex ${this.props.direction}`}>
        <div className="md:basis-1/3 p-8 md:p-14">
          <div>{renderRichText(this.props.description)}</div>
        </div>

        <div className="md:basis-2/3">
          <p dangerouslySetInnerHTML={{ __html: this.props.mapContent }}></p>
        </div>
      </div>
    )
  }
}

MapRow.propTypes = {
  description: PropTypes.object,
  backgroundImage: PropTypes.string,
  direction: PropTypes.string,
  map: PropTypes.string,
}

MapRow.defaultProps = {
  description: {raw: ''},
  backgroundImage: '',
  direction: '',
  map: '',
}

export default MapRow
