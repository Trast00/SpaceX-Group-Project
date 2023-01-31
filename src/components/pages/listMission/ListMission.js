import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionaction } from '../../../redux/missions/missionReducer';
import './ListMission.css';

const ListMission = () => {
  const dispatch = useDispatch();
  const show = useSelector((data) => data.mission);
  useEffect(() => {
    dispatch(missionaction());
  }, [dispatch]);
  return (
    <div>
      <ul className="List-mission-main">
        <li className="Mission-List">
          <h3 className="border">Mission</h3>
          <p className="Header border">Description</p>
          <h4 className="border">Status</h4>
        </li>
        {show.data.map((data) => (
          <li className="Mission-List Mission-row" key={data.id} id={data.id}>
            <h3 className="border">{data.name}</h3>
            <p className="border">{data.description}</p>
            {data.reserved ? (
              <div className="border flex-center">
                <p>Active Menmber</p>
              </div>
            ) : (
              <div className="border flex-center">
                <p className="Not-Approved">NOT A MEMBER</p>
              </div>
            )}
            {data.reserved ? (
              <div className="border flex-center">
                <button type="button" className="Approved-button">Join Mission</button>
              </div>
            ) : (
              <div className="border flex-center">
                <button type="button" className="Not-Approved-button">Leave Mission</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMission;
