import React from 'react'
import './ListRocket.css'

const Rocket = (props) => {
  console.log('in: ', props)
  const {imgUrl, title, description} = props.rocket
  return (
    <div className='row rocket'>
      <img src={imgUrl} alt={"Rocket " + title } />
      <div className="column rocket-description">
        <h4>{title}</h4>
        <p>{description}</p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  )
}

export default Rocket