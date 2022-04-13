import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ContentRowThreeColumns = class extends React.Component {
  render() {
    return (
      <div className={`md:flex items-stretch ${this.props.direction}`}>
        <div
          className={`md:basis-1/3 min-h-[300px] p-8 md:p-14 ${
            this.props.direction === 'flex-row' ? 'bg-secondary' : ''
          }`}
        >
          <div>{this.props.description1 ? renderRichText(this.props.description1) : ''}</div>
        </div>

        <div
          className={`md:basis-1/3 min-h-[300px] p-8 md:p-14 ${
            this.props.direction === 'flex-row-reverse' ? 'bg-secondary' : ''
          }`}
        >
          <div>{this.props.description2 ? renderRichText(this.props.description2) : ''}</div>
        </div>

        <div
          className="md:basis-1/3 min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
          }}
        ></div>
      </div>
    )
  }
}

ContentRowThreeColumns.propTypes = {
  description1: PropTypes.object,
  backgroundImage: PropTypes.string,
  description2: PropTypes.object,
  direction: PropTypes.string,
}

ContentRowThreeColumns.defaultProps = {
  description1: {raw: ''},
  description2: {raw: ''},
  backgroundImage: '',
  direction: 'flex-row',
}

export default ContentRowThreeColumns
