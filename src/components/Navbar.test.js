
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import React from 'react';
import Navbar from './Navbar';
import configureStore from '../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

describe('test render', () => {
  test('List Rocket should match snapshoot', () => { 
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={configureStore}>
          <Router>
            <Navbar />
          </Router>
        </Provider>
      </React.StrictMode>,
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })
})