import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPictures: (state, action) => {
      state.pictures = action.payload;
    },
    addPicture: (state, action) => {
      state.pictures.push(action.payload);
    },
    editPicture: (state, action) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === action.payload[1]) {
          return {
            ...pic,
            artist: action.payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, action) => {
      state.pictures = state.pictures.filter(
        (pic) => pic.id !== action.payload
      );
    },
  },
});

export const { setPictures, addPicture, editPicture, deletePicture } =
  picturesSlice.actions;
export default picturesSlice.reducer;
