import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { GatsbyImage } from 'gatsby-plugin-image'

const Diaporama = ({ images }) => {
  if (!images) return null
  if (!Array.isArray(images)) return null
  console.log('données de mes images', images)
  return (
    <div>
      <Carousel className="max-h-[400px]">
        {images.map((image) => {
          return (
            <div className="bg-neutral-900">
              <GatsbyImage image={image.gatsbyImageData} className="opacity-60"/>
                <p className="absolute text-5xl text-center text-white p-3 font-bold leading-relaxed rounded w-[80%] drop-shadow-2xl">
                  {image.description}
                </p>
            </div>
          )
        })}
      </Carousel>
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
