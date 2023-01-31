
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import React from 'react';
import ListRocket from './ListRocket';
import configureStore from '../../../redux/configureStore';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => { 
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <ListRocket />
        </Provider>
    </React.StrictMode>,
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})