import reduxSaga from "redux-saga";
import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  getAlbums,
  addAlbum,
  getSongs,
  addSongsSuccess,
  songsRequest,
  songsFailure,
  albumsFailure,
  albumsRequest,
  getAlbumsSuccess,
  getSongsSuccess,
  getAlbumDetail,
  getAlbumSongs,
  getAlbumSongsSuccess,
  deleteSong,
  deleteSongSuccess,
  updateSong,
  updateSongSuccess,
} from "./reducers";
const sagaMiddleware = reduxSaga();

function* fetchAlbums() {
  try {
    const response = yield fetch("http://localhost:3001/albums");
    if (!response.ok) {
      throw new Error("Failed to fetch albums");
    }
    const albums = yield response.json();
    yield put({ type: getAlbumsSuccess.type, payload: albums });
  } catch (error) {
    yield put({ type: albumsFailure.type, error: error.message });
    console.error("Error fetching albums:", error);
  }
}

function* fetchSongs() {
  try {
    const response = yield fetch("http://localhost:3001/songs");
    if (!response.ok) {
      throw new Error("Failed to fetch songs");
    }
    const songs = yield response.json();
    yield put({ type: getSongsSuccess.type, payload: songs });
  } catch (error) {
    yield put({ type: songsFailure.type, error: error.message });
    console.error("Error fetching albums:", error);
  }
}

function* deleteSongFromServer(action) {
  try {
    const response = yield fetch(
      `http://localhost:3001/songs/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete songs");
    }
    yield put({ type: deleteSongSuccess.type, payload: action.payload });
  } catch (error) {
    yield put({ type: songsFailure.type, error: error.message });
    console.error("Error fetching albums:", error);
  }
}

function* updateSongOnServer(action) {
  console.log("I am called with this", action.payload);
  try {
    console.log(action.payload);
    const response = yield call(
      fetch,
      `http://localhost:3001/songs/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: action.payload.id,
          name: action.payload.title,
          artist: action.payload.artist ?? "unknown",
          album: action.payload.album,
          lengthtime: action.payload.duration,
        }),
      }
    );

    if (response.ok) {
      const songs = yield response.json();
      yield put({ type: updateSongSuccess.type, payload: songs });
    } else {
      yield put({ type: songsFailure.type, payload: response.statusText });
    }
  } catch (error) {
    yield put({ type: songsFailure.type, payload: error.message });
  }
}

function* addAlbumToServer(action) {
  yield put({ type: albumsRequest.type });
  try {
    const response = yield call(fetch, "http://localhost:3001/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: action.payload.title,
        artist: action.payload.artist,
        year: action.payload.year,
        url: action.payload.pic,
      }),
    });

    // console.log(action.payload, "this an album data");

    if (response.ok) {
      const { id } = yield response.json();
      const songs = action.payload.musics.map((song) => ({
        name: song.title,
        artist: song.artist,
        albumId: id,
        lengthtime: song.duration,
      }));

      for (let i = 0; i < songs.length; i++) {
        yield put({
          type: songsRequest.type,
          payload: songs[i],
        });
      }
    }

    // yield put({ type: addAlbum.type, payload: album });
  } catch (error) {
    yield put({ type: albumsFailure.type, error: error.message });
  }
}

function* addSongToServer(action) {
  const url = `http://localhost:3001/songs`;

  action.payload = {
    name: action.payload.title,
    artist: action.payload.artist,
    lengthtime: action.payload.duration,
  };
  console.log(action.payload, "this is from middleware", url);
  const body = JSON.stringify(
    url === "http://localhost:3001/songs"
      ? action.payload
      : { songs: action.payload }
  );
  try {
    const response = yield call(fetch, url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: body,
    });

    if (response.ok) {
      const songs = yield response.json();
      console.log(songs);
      yield put({ type: addSongsSuccess.type, payload: songs });
    } else {
      yield put({ type: songsFailure.type, payload: response.statusText });
    }
  } catch (error) {
    yield put({ type: songsFailure.type, payload: error.message });
  }
}
function* fetchAlbumDetail(action) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:3001/albums/${action.payload}`
    );

    if (response.ok) {
      const albumd = yield response.json();
      console.log(albumd);
      yield put({ type: getAlbumDetail.type, payload: albumd });
    }
  } catch (error) {}
}
function* fetchAlbumSongs(action) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:3001/albums/${action.payload}/songs`
    );

    if (response.ok) {
      const songs = yield response.json();
      console.log("this is from middleware", songs);
      yield put({ type: getAlbumSongsSuccess.type, payload: songs });
    }
  } catch (error) {}
}

function* watchFetchAlbumSongs() {
  yield takeLatest(getAlbumSongs.type, fetchAlbumSongs);
}
function* watchAlbumDetail() {
  yield takeLatest(albumsRequest.type, fetchAlbumDetail);
}
function* watchAddSong() {
  yield takeLatest(songsRequest.type, addSongToServer);
}

function* watchAddAlbum() {
  yield takeLatest(addAlbum.type, addAlbumToServer);
}

function* watchFetchSongs() {
  yield takeLatest(getSongs.type, fetchSongs);
}

function* watchFetchAlbums() {
  yield takeLatest(getAlbums.type, fetchAlbums);
}

function* watchDeleteSong() {
  yield takeLatest(deleteSong.type, deleteSongFromServer);
}
function* watchUpdateSong() {
  yield takeLatest(updateSong.type, updateSongOnServer);
}

function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchFetchAlbums(),
    watchAddSong(),
    watchAddAlbum(),
    watchAlbumDetail(),
    watchFetchAlbumSongs(),
    watchDeleteSong(),
    watchUpdateSong(),
  ]);
}

// const sagaMiddleware = reduxSaga();
export { rootSaga };
export default sagaMiddleware;
