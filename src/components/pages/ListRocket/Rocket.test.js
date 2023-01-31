import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rocket from './Rocket';
import configureStore from '../../../redux/configureStore';
import ListRocket from './ListRocket';

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
    const testRocket = {
      id: 'rocket.id',
      rocket_name: 'rocket.name',
      description: 'rocket.description',
      flickr_images: 'rocket.flickr_images[0]',
    };

    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <Rocket rocket={testRocket} />
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
          <ListRocket />
        </Provider>
      </React.StrictMode>,
    );

    // simulate a API REPOND to the reducer
    await act(async () => {
      store.dispatch({ type: 'spacex/rocket/GET_ROCKETS/fulfilled', payload: listRocketTest });
    });

    // test the first rocket
    const title = screen.getAllByRole('heading')[0];
    const button = screen.getAllByRole('button')[0];

    const testRocket = listRocketTest[0];
    expect(title).toHaveTextContent(testRocket.rocket_name);
    expect(button).toHaveTextContent('Reserve Rocket');

    const description = screen.getByText(testRocket.description);

    fireEvent.click(button);
    expect(button).toHaveTextContent('Cancel reservation');

    expect(description).toHaveTextContent(`Reserved ${testRocket.description}`);
  });
});
