import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ContentRowThreeColumns = class extends React.Component {
  render() {
    return (
      <div className={`md:flex items-stretch ${this.props.direction}`}>
        <div
          class={`md:basis-1/3 min-h-[300px] p-8 md:p-14 ${
            this.props.direction === 'flex-row' ? 'bg-secondary' : ''
          }`}
        >
          <p>{renderRichText(this.props.description1)}</p>
        </div>

        <div
          class={`md:basis-1/3 min-h-[300px] p-8 md:p-14 ${
            this.props.direction === 'flex-row-reverse' ? 'bg-secondary' : ''
          }`}
        >
          <p>{renderRichText(this.props.description2)}</p>
        </div>

        <div
          class="md:basis-1/3 min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
          }}
        ></div>
      </div>
    )
  }
}

ContentRowThreeColumns.propTypes = {
  description1: PropTypes.string,
  backgroundImage: PropTypes.string,
  description2: PropTypes.string,
  direction: PropTypes.string,
}

ContentRowThreeColumns.defaultProps = {
  description1: '',
  description2: '',
  backgroundImage: '',
  direction: 'flex-row',
}

export default ContentRowThreeColumns
