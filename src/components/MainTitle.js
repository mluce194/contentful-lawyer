import React from 'react'
import PropTypes from 'prop-types'

const MainTitle = class extends React.Component {
  render() {
    return <h1 className="p-5 text-xl text-center">{this.props.titre}</h1>
  }
}

MainTitle.propTypes = {
  titre: PropTypes.string,
}

MainTitle.defaultProps = {
  titre: '',
}

export default MainTitle
