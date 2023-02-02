import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const missionaction = createAsyncThunk('spaceX/Mission/fetchdata', async () => {
  const fetchdata = await fetch('https://api.spacexdata.com/v3/missions');
  const datafound = await fetchdata.json();
  const listdata = [];
  datafound.forEach((data) => {
    const list = {
      id: data.mission_id,
      name: data.mission_name,
      description: data.description,
      reserved: false,
    };
    listdata.push(list);
  });
  return listdata;
});

const missionReducer = createSlice({
  name: 'spaceX/Mission/',
  initialState: { data: [] },
  reducers: {
    Update: (state, action) => {
      const newState = state.data.map((data) => {
        if (data.id === action.payload) {
          return { ...data, reserved: true };
        }
        return data;
      });
      return { ...state, data: [...newState] };
    },
    Default: (state, action) => {
      const newState = state.data.map((data) => {
        if (data.id === action.payload) {
          return { ...data, reserved: false };
        }
        return data;
      });
      return { ...state, data: [...newState] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(missionaction.fulfilled,
        (states, action) => ({ ...states, data: [...action.payload] }));
  },
});

export const { Update, Default } = missionReducer.actions;

export default missionReducer;
