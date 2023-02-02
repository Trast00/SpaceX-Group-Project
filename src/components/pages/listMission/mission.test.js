import { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Mission from './Mission';
import configureStore from '../../../redux/configureStore';

const store = configureStore;
const listmissionarray = [
  {
    id: '9D1B7E0',
    name: 'Thaicom',
    description:
        'Thaicom is the name of a series of communications Thailand .',
    reserved: false,
  },
  {
    id: 'F4F83DE',
    name: 'Telstar',
    description:
        'Telstar 19V (Telstar 19 Vantage) is a communicatio…5230lbs).',
    reserved: false,
  },
  {
    id: 'F3364BF',
    name: 'Iridium NEXT',
    description:
        'In 2017, Iridium began launching Iridium NEXT.',
    reserved: false,
  },
];

test('should first', async () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Mission mission={listmissionarray[0]} />
      </Provider>
    </React.StrictMode>,
  );
  await act(async () => {
    store.dispatch({ type: 'spaceX/Mission/fetchdata/fulfilled', payload: listmissionarray });
  });

  const title = screen.getAllByRole('heading')[0];
  const listmissionar = listmissionarray[0];
  expect(title).toHaveTextContent(listmissionar.name);
});
