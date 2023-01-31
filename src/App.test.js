
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ListRocket from './components/pages/ListRocket/ListRocket';
import Navbar from './components/Navbar';

const store = configureStore
describe('test render', () => {
  test('List Rocket should match snapshoot', () => { 
    const tree = renderer.create(
      <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    ).toJSON()
    
    expect(tree).toMatchSnapshot();
  })
})
