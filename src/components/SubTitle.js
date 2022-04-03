import React from 'react'
import PropTypes from 'prop-types'

const SubTitle = class extends React.Component {
  render() {
    return <h2 class="bg-neutral-200 p-8 pt-20 pb-20 font-light text-neutral-600 normal-case m-0">{this.props.titre}</h2>
  }
}

SubTitle.propTypes = {
  titre: PropTypes.string,
}

SubTitle.defaultProps = {
  titre: '',
}

export default SubTitle

