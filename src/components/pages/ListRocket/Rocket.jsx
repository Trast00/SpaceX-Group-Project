import React from 'react'
import './ListRocket.css'

const Rocket = (props) => {
  const {flickr_images, rocket_name, 
    description, reserved} = props.rocket

  
  return (
    <div className='row rocket'>
      <img src={flickr_images} alt={"Rocket " + rocket_name } />
      <div className="column rocket-description">
        <p>{reserved && (<p className='badge-reserved'>Reserved</p>)} {description}</p>
        {reserved? <button>Reserve Rocket</button>
        : <button>Cancel reservation</button>}
      </div>
    </div>
  )
}

export default Rocket