import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ContentRow = class extends React.Component {
  render() {
    return (
      <div className={`md:flex ${this.props.direction}`}>
        <div class="md:basis-1/2 p-8 md:p-14">
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
