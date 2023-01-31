import React from 'react'
import { useDispatch } from 'react-redux'
import { reserveRocket, unreserveRocket } from '../../../redux/rockets/rocketReducer'
import './ListRocket.css'
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const dispatch = useDispatch()
  const {id, flickr_images, rocket_name, 
    description, reserved} = props.rocket

  
  return (
    <div className='row rocket'>
      <img src={flickr_images} alt={"Rocket " + rocket_name } />
      <div className="column rocket-description">
        <h4>{rocket_name}</h4>
        <p>{reserved && (<span className='badge-reserved'>Reserved</span>)} {description}</p>
        {reserved? 
         <button onClick={()=>{dispatch(unreserveRocket(id))}}>Cancel reservation</button>
        : <button onClick={()=>{dispatch(reserveRocket(id))}}>Reserve Rocket</button>}
      </div>
    </div>
  )
}

export default Rocket