import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ListMission from './ListMission';
import configureStore from '../../../redux/configureStore';

const store = configureStore;
describe('teting', () => {
  test('should ', () => {
    jest.mock('../../../redux/missions/missionReducer.js');
    const tree = (
      <React.StrictMode>
        <Provider store={store}>
          <ListMission />
        </Provider>
      </React.StrictMode>
    );
    expect(tree).toMatchSnapshot();
  });
});
