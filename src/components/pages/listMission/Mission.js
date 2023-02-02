import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Update, Default } from '../../../redux/missions/missionReducer';

const Mission = (props) => {
  const dispatch = useDispatch();
  const UpdateDispatch = (id) => {
    dispatch(Update(id));
  };
  const DefaultDispatch = (id) => {
    dispatch(Default(id));
  };

  const {
    id, name, description, reserved,
  } = props.mission;

  return (
    <li className="Mission-List Mission-row" key={id} id={id}>
      <h3 className="border">{name}</h3>
      <p className="border">{description}</p>
      {reserved ? (
        <div className="border flex-center">
          <p className="Approved">Active Menmber</p>
        </div>
      ) : (
        <div className="border flex-center">
          <p className="Not-Approved">NOT A MEMBER</p>
        </div>
      )}
      {reserved ? (
        <div className="border flex-center">
          <button type="button" onClick={() => DefaultDispatch(id)} className="Not-Approved-button">Leave Mission</button>
        </div>
      ) : (
        <div className="border flex-center">
          <button type="button" onClick={() => UpdateDispatch(id)} className="Approved-button">Join Mission</button>
        </div>
      )}
    </li>
  );
};

Mission.PropTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

export default Mission;
