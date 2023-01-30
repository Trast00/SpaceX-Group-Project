import React from 'react';
import Rocket from './Rocket';
import './ListRocket.css'

const ListRocket = () => {

  const listRocket = [
    {
      id: "fdsfsf1s",
      title: "Title rocket 1",
      description: " Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The same layout is used to for",
      reserved: false
    },
    {
      id: "fdsfsfss1s",
      title: "Title rocket 2",
      description: " Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The same layout is used to for",
      reserved: false
    }
  ]
  return (
    <ul>
      {listRocket.map(rocket => (
        <li><Rocket key={rocket.id} rocket={rocket}/></li>
      ))}
    </ul>
  )

};

export default ListRocket;
