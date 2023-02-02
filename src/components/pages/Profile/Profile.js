import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const listRocket = useSelector((state) => state.rocketReducer.listRocket);
  const listMission = useSelector((state) => state.mission.data);

  return (
    <div className="flex-center">
      <div className="flex-center column profile-missions">
        <h2>mission</h2>
        <ul className="no-style flex-center column list-reserved">
          {listMission.length > 0 ? listMission.filter((data) => data.reserved).map((mission) => (
            <li key={mission.id} id={mission.id}>
              <h4>{mission.name}</h4>
            </li>
          )) : 'Empty List'}
        </ul>
      </div>
      <div className="flex-center column profile-rockets">
        <h2>My Rockets</h2>
        <ul className="no-style flex-center column list-reserved">
          {(listRocket && listRocket.filter((rocket) => rocket.reserved).length !== 0)
            ? listRocket.filter((rocket) => rocket.reserved)
              .map((rocket) => (<li key={rocket.id}>{rocket.rocket_name}</li>))
            : 'Empty List'}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
