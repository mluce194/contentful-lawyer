import React from 'react'
import PropTypes from 'prop-types'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Diaporama = ({ images }) => {
  if (!images) return null
  if (!Array.isArray(images)) return null
  return (
    <div>
      <Slide>
        {images.map((image) => {
          return (
            <div className="each-slide" key={image.id}>
              <div
                style={{
                  backgroundImage: `url(${image.slide.gatsbyImageData.images.fallback.src})`,
                }}
                className="h-[500px] bg-cover"
              >
                <div className="h-[100%] bg-opacity-20 bg-black flex items-center justify-center">
                  <div className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl max-w-[1000px] p-10 bg-black bg-opacity-40 rounded">
                    {image.titrediapo}
                    <span className="block text-xl xs:text-2xl md:text-3xl leading-tight mt-5">
                      {image.description}
                    </span>
                    <a href={image.lien} className="p-2 my-5 mx-2 bg-secondary hover:bg-white font-bold text-white hover:text-secondary rounded shadow-md transition duration-500 md:text-xl">
                      En savoir plus
                    </a>
                  </div>
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
