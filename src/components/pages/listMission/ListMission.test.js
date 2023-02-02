import { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListMission from './ListMission';
import configureStore from '../../../redux/configureStore';

const listmissionarray = [
  {
    id: '9D1B7E0',
    name: 'Thaicom',
    description:
      'Thaicom is the name of a series of communications …en Thailand and modern communications technology.',
    reserved: false,
  },
  {
    id: 'F4F83DE',
    name: 'Telstar',
    description:
      'Telstar 19V (Telstar 19 Vantage) is a communicatio…5230lbs), launched by Ariane 5ECA on 1 July 2009.',
    reserved: false,
  },
  {
    id: 'F3364BF',
    name: 'Iridium NEXT',
    description:
      'In 2017, Iridium began launching Iridium NEXT, a s… of the position of ground stations and gateways.',
    reserved: false,
  },
];

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

test('should first', async () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ListMission />
      </Provider>
    </React.StrictMode>,
  );
  await act(async () => {
    store.dispatch({ type: 'spaceX/Mission/fetchdata/fulfilled', payload: listmissionarray });
  });

  // const name = screen.getAllByRole('heading');
  // expect(name.length).toBe(2);
  const title = screen.getAllByRole('heading')[0];
  const listarray = listmissionarray[0];
  expect(title).toHaveTextContent(listarray.name);
});
