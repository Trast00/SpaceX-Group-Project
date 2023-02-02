import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionaction } from '../../../redux/missions/missionReducer';
import './ListMission.css';
import Mission from './Mission';

const ListMission = () => {
  const dispatch = useDispatch();
  const show = useSelector((data) => data.mission);

  useEffect(() => {
    if (show.data.length === 0) {
      dispatch(missionaction());
    }
  }, [dispatch, show.data.length]);
  return (
    <div>
      <ul className="List-mission-main">
        <li className="Mission-List">
          <h3 className="border">Mission</h3>
          <p className="Header border">Description</p>
          <h4 className="border">Status</h4>
        </li>
        {show.data.map((data) => (
          <Mission key={data.id} mission={data} />
        ))}
      </ul>
    </div>
  );
};

export default ListMission;
