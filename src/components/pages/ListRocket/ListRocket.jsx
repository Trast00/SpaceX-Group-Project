import React from 'react';
import Rocket from './Rocket';
import './ListRocket.css'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRockets } from '../../../redux/rockets/rocketReducer';


const ListRocket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRockets())
  }, [])

  const listRocket = useSelector(state => state.rocketReducer.listRocket, shallowEqual)

  return (
    <ul>
      {(listRocket)? listRocket.map(rocket => (
        <li key={rocket.id} ><Rocket rocket={rocket}/></li>
      )): <p>Empty list</p>}
    </ul>
  )

};

export default ListRocket;
