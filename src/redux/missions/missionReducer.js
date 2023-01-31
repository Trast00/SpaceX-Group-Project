import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const missionaction = createAsyncThunk('data/fetch', async () => {
  const fetchdata = await fetch('https://api.spacexdata.com/v3/missions');
  const datafound = await fetchdata.json();
  const listdata = [];
  datafound.forEach((data) => {
    const list = { id: data.mission_id, name: data.mission_name, description: data.description };
    listdata.push(list);
  });
  return listdata;
});

const missionReducer = createSlice({
  name: 'Mission',
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(missionaction.fulfilled, (states, action) => {
        // eslint-disable-next-line no-param-reassign
        states.data = action.payload;
      });
  },
});

export default missionReducer;
