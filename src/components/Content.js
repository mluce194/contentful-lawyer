import React from 'react'
import PropTypes from 'prop-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const SingleContent = class extends React.Component {
  render() {
    return (
      <div className="p-8 md:max-w-[1200px] mx-auto">
        <p>{renderRichText(this.props.contenu)}</p>
      </div>
    )
  }
}

SingleContent.propTypes = {
  contenu: PropTypes.string,
}

SingleContent.defaultProps = {
  contenu: '',
}

export default SingleContent
