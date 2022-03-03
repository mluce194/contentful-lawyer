import React from 'react'

const MapRow = class extends React.Component {
  render() {
    console.log('image trouvée', this.props.backgroundImage)
    return (
      <div className={`flex ${this.props.direction}`}>
        <div class="basis-1/3 p-20">
          <p dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
        </div>

        <div
          class="basis-2/3"
        >
          <p dangerouslySetInnerHTML={{ __html: this.props.mapContent }}></p>


        </div>
      </div>
    )
  }
}

export default MapRow
