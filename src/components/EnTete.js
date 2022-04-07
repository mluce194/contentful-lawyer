import React from 'react'
import PropTypes from 'prop-types'
import defautlBgImage from '../images/avocat-thonon-les-bains.jpg'


const EnTete = class extends React.Component {
  render() {
    const ImageUrl = this.props.backgroundImage
    console.log("image de fond trouvée",defautlBgImage)
    return (
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ImageUrl})` }}
      >
        <div className="flex justify-center items-center w-full h-full bg-neutral-900 bg-opacity-60">
          <h1 className="text-5xl text-center text-white p-3 font-bold leading-relaxed rounded max-w-[800px]">
            {this.props.titre}
          </h1>
        </div>{' '}
      </div>
    )
  }
}

EnTete.propTypes = {
  backgroundImage: PropTypes.string,
  titre: PropTypes.string,
}

EnTete.defaultProps = {
  backgroundImage: defautlBgImage,
  titre: 'Paul-Marie Beraudo, avocat',
}

export default EnTete
