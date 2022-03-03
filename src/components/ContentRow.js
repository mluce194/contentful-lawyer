import React from 'react'

const ContentRow = class extends React.Component {
  render() {
    console.log('image trouvée', this.props.backgroundImage)
    return (
      <div className={`flex ${this.props.direction}`}>
        <div class="basis-1/2 p-20">
          <p dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
        </div>

        <div
          class="basis-1/2 p-20"
          style={{
            backgroundImage: `url(${this.props.backgroundImage})`,
            minHeight: '300px',
          }}
        ></div>
      </div>
    )
  }
}

export default ContentRow
