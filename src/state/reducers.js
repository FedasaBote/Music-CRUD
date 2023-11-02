import { createSlice } from "@reduxjs/toolkit";

const sideEffectSlice = createSlice({
  name: "sideEffect",
  initialState: {
    albumId: null,
    songs: [],
    create: false,
    update: false,
    music: {},
  },
  reducers: {
    setAlbum(state, action) {
      return { ...state, albumId: action.payload };
    },
    addSongSideEffect(state, action) {
      return { ...state, songs: [...state.songs, action.payload] };
    },

    setCreate(state, action) {
      return { ...state, create: action.payload };
    },

    setUpdate(state, action) {
      state.update = action.payload;
    },
    setMusic(state, action) {
      state.music = action.payload;
    },
  },
});
const albumSlice = createSlice({
  name: "album",
  initialState: {
    albums: [],
    albumDetail: null,
    songs: [],
  },
  reducers: {
    albumsRequest(state, action) {
      return state;
    },
    getAlbums(state, action) {
      return state;
    },
    getAlbumDetail(state, action) {
      return {
        ...state,
        albumDetail: action.payload,
      };
    },
    getAlbumsSuccess(state, action) {
      return {
        ...state,
        albums: action.payload,
      };
    },
    addAlbum(state, action) {
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    },
    albumsFailure(state, action) {
      return state;
    },
    getAlbumSongs(state, action) {
      return state;
    },
    getAlbumSongsSuccess(state, action) {
      return {
        ...state,
        songs: action.payload,
      };
    },
  },
});

const songSlice = createSlice({
  name: "song",
  initialState: { songs: [] },
  reducers: {
    getSongs(state, action) {
      return state;
    },
    getSongsSuccess(state, action) {
      return { ...state, songs: action.payload };
    },
    addSongsSuccess(state, action) {
      return {
        ...state,

        songs: [...state.songs, action.payload],
      };
    },
    songsFailure(state, action) {
      return state;
    },
    songsRequest(state, action) {
      return state;
    },
    addSong(state, action) {
      return {
        ...state,

        songs: [...state.songs.songs, action.payload],
      };
    },
    deleteSong(state, action) {
      return state;
    },
    deleteSongSuccess(state, action) {
      return {
        ...state,
        songs: [...state.songs.filter((song) => song.id !== action.payload)],
      };
    },
    updateSong(state, action) {
      return state;
    },
    updateSongSuccess(state, action) {
      const updatedSongs = state.songs.map((song) => {
        if (song.id !== action.payload.id) {
          return song;
        }
        return action.payload;
      });
      return {
        ...state,
        songs: updatedSongs,
      };
    },
  },
});
export const {
  getAlbums,
  addAlbum,
  albumsFailure,
  albumsRequest,
  getAlbumsSuccess,
  getAlbumDetail,
  getAlbumSongs,
  getAlbumSongsSuccess,
} = albumSlice.actions;
export const {
  getSongs,
  addSong,
  songsFailure,
  songsRequest,
  getSongsSuccess,
  addSongsSuccess,
  deleteSongSuccess,
  deleteSong,
  updateSong,
  updateSongSuccess,
} = songSlice.actions;
export const { setAlbum, addSongSideEffect, setCreate, setUpdate, setMusic } =
  sideEffectSlice.actions;
export const albumReducer = albumSlice.reducer;
export const songReducer = songSlice.reducer;
export const sideEffectReducer = sideEffectSlice.reducer;
