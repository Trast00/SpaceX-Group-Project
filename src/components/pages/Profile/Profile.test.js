import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Profile from './Profile';
import App from '../../../App';

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

describe('test render of profile', () => {
  test('Profile should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <Profile />
        </Provider>
      </React.StrictMode>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test user interaction', () => {
  test('test reserve rocket', async () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>,
    );

    // simulate a API REPOND to the reducer
    await act(async () => {
      store.dispatch({ type: 'spacex/rocket/GET_ROCKETS/fulfilled', payload: listRocketTest });
    });

    // test the first rocket
    const buttons = screen.getAllByRole('button');

    // reserve 3 rocket
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);

    // Navigate to profile page
    const profileLink = screen.getAllByRole('link')[2];
    fireEvent.click(profileLink);

    // check if all elements are displayed in the list of rocket
    expect(screen.getByText(listRocketTest[0].rocket_name)).toBeTruthy();
    expect(screen.getByText(listRocketTest[1].rocket_name)).toBeTruthy();
    expect(screen.getByText(listRocketTest[2].rocket_name)).toBeTruthy();
  });
});
