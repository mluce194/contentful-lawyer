import React from 'react'
import PropTypes from 'prop-types'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'






const Diaporama = ({ images }) => {
  if (!images) return null
  if (!Array.isArray(images)) return null
  console.log('données de mes images', images)
  return (
    <div>
      <Slide>
        {images.map((image, index) => {
          return (
            <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${image.gatsbyImageData.images.fallback.src})`}} className="h-[500px] bg-cover">
              <div className="h-[100%] bg-opacity-50 bg-black flex items-center justify-center">
              <div className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl max-w-[800px]">{image.title}<span className="block text-xl xs:text-2xl md:text-3xl leading-tigh">{image.description}</span></div>
              </div>
            </div>
          </div>
          )
        })}
      </Slide>
    </div>
  )
}

Diaporama.propTypes = {
  images: PropTypes.array,
}

Diaporama.defaultProps = {
  images: [],
}

export default Diaporama
