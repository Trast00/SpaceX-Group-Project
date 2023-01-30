import React from 'react'
import './ListRocket.css'

const Rocket = (props) => {
  const {id, flickr_images, rocket_name, description} = props.rocket
  return (
    <div className='row rocket'>
      <img src={flickr_images} alt={"Rocket " + rocket_name } />
      <div className="column rocket-description">
        <h4>{rocket_name}</h4>
        <p>{description}</p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  )
}

export default Rocket