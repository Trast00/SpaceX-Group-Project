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
    <div className="row rocket">
      <img src={flickr_images} alt={`Rocket ${rocket_name}`} />
      <div className="column rocket-description">
        <div className="description-wrapper">
          <h4>{rocket_name}</h4>
          <p>{reserved && (<span className='badge-reserved'>Reserved</span>)} {description}</p>
        </div>
        
        {reserved? 
<<<<<<< HEAD
         <button onClick={()=>{dispatch(unreserveRocket(id))}} className="btn-cancel">Cancel reservation</button>
        : <button onClick={()=>{dispatch(reserveRocket(id))}}>Reserve Rocket</button>}
=======
         <button onClick={()=>{dispatch(unreserveRocket(id))}}>Cancel reservation</button>
        : <button onClick={()=> {dispatch(reserveRocket(id))}}>Reserve Rocket</button>}
>>>>>>> 3cbb530dfc7c0ec05856236b65745d2d681c93b5
      </div>
    </div>
  );
};

Rocket.propType = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    flickr_images: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};
export default Rocket;
