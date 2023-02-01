import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderer } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import ListMission from './ListMission';
import configureStore from '../../../redux/configureStore';

const store = configureStore;

describe(' test the listmission ', () => {
  test('should ', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <ListMission />
        </Provider>
      </React.StrictMode>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
