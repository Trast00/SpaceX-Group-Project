
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import React from 'react';
import Rocket from './Rocket';
import configureStore from '../../../redux/configureStore';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => { 
    const newRocket = {
      id: "rocket.id",
      rocket_name: "rocket.name",
      description: "rocket.description",
      flickr_images: "rocket.flickr_images[0]",
    };
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <Rocket rocket={newRocket} />
        </Provider>
    </React.StrictMode>,
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})