import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from './Navbar';
import configureStore from '../redux/configureStore';
import App from '../App';

const listRocketTest = [
  {
    id: '5e9d0d95eda69955f709d1eb',
    rocket_name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system priva…launch vehicle to go into orbit around the Earth.',
    flickr_images: 'https://imgur.com/DaCfMsj.jpg',
  },
  {
    id: '5e9d0d95eda69973a809d1ec',
    rocket_name: 'Falcon 9',
    description: 'Falcon 9 is a two-stage rocket designed and manufa… satellites and the Dragon spacecraft into orbit.',
    flickr_images: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  },
  {
    id: '5e9d0d95eda69974db09d1ed',
    rocket_name: 'Falcon Heavy',
    description: 'With the ability to lift into orbit over 54 metric…hicle, the Delta IV Heavy, at one-third the cost.',
    flickr_images: 'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
  },
  {
    id: '5e9d0d96eda699382d09d1ee',
    rocket_name: 'Starship',
    description: 'Starship and Super Heavy Rocket represent a fully …tually replace Falcon 9, Falcon Heavy and Dragon.',
    flickr_images: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
  },
];

const store = configureStore;
describe('test render', () => {
  test('List Rocket should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Navbar />
          </Router>
        </Provider>
      </React.StrictMode>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Simulate user navaigation interaction', () => {
  let defaultRouteUrl = '';

  test('Test application display logo title and list nav', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Navbar />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    const titles = screen.getAllByRole('heading');
    expect(titles[0]).toHaveTextContent('Space Travelers Hub');

    const listNav = screen.getAllByRole('link');
    expect(listNav[0]).toHaveTextContent('Rockets');
    expect(listNav[1]).toHaveTextContent('Missions');
    expect(listNav[2]).toHaveTextContent('My Profile');
  });

  test('Test navigation ListRocket is the default page', async () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    const rocketLink = screen.getAllByRole('link')[0];
    fireEvent.click(rocketLink);

    // simulate a API REPOND to the reducer
    await act(async () => {
      store.dispatch({ type: 'spacex/rocket/GET_ROCKETS/fulfilled', payload: listRocketTest });
    });

    // check the display on the screen
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent(('Reserve Rocket' || 'Cancel reservation'));

    defaultRouteUrl = window.location.href;
  });

  test('test navigation to mission', async () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    const missionLink = screen.getAllByRole('link')[1];
    fireEvent.click(missionLink);

    expect(window.location.href).toBe((`${defaultRouteUrl}missions`));
  });

  test('test navigation to profile', async () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    const profileLink = screen.getAllByRole('link')[2];
    fireEvent.click(profileLink);

    expect(window.location.href).toBe((`${defaultRouteUrl}myprofile`));
  });
});
