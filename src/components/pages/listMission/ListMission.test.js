import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import missionReducer from '../../../redux/missions/missionReducer';
import configureStore from './redux/configureStore';
import ListRocket from '../ListRocket/ListRocket';

const store = configureStore;

describe(' test the listmission ', () => {
  test('should ', () => {
    const render = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <ListRocket />
        </Provider>
      </React.StrictMode>,
    );
  });
});
