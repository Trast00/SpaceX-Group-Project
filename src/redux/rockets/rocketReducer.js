import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* ACTIONS */

export const fetchRockets = createAsyncThunk('spacex/rocket/GET_ROCKETS', async () => {
  const result = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await result.json();

  const listRocket = [];
  data.forEach((rocket) => {
    const newRocket = {
      id: rocket.id,
      rocket_name: rocket.name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
    };
    listRocket.push(newRocket);
  });
  return listRocket;
});

const rocketReducer = createSlice({
  name: 'spacex/rocket/',
  initialState: [],
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newList = state.listRocket.map((rocket) => {
        if (rocket.id === id) { return { ...rocket, reserved: true }; }
        return rocket;
      });

      return { ...state, listRocket: [...newList] };
    },
    unreserveRocket: (state, action) => {
      const id = action.payload;
      const newList = state.listRocket.map((rocket) => {
        if (rocket.id === id) { return { ...rocket, reserved: false }; }
        return rocket;
      });

      return { ...state, listRocket: [...newList] };
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled,
        (state, action) => ({ ...state, listRocket: [...action.payload] }));
  },
});

export const { unreserveRocket, reserveRocket } = rocketReducer.actions;
export default rocketReducer.reducer;
