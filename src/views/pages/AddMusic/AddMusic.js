import { useSelector, useDispatch } from "react-redux";
import "./AddMusic.css";
import { useState, useRef, useEffect } from "react";
import {
  addSongSideEffect,
  songsRequest,
  updateSong,
} from "../../../state/reducers";

function AddMusic(props) {
  const albums = useSelector((state) => state.albums.albums);
  const albumId = useSelector((state) => state.sideEffects.albumId);
  const create = useSelector((state) => state.sideEffects.create);
  const update = useSelector((state) => state.sideEffects.update);
  const music = useSelector((state) => state.sideEffects.music);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    albumId: albumId !== null ? albumId : undefined,
  });

  const blur = useRef(null);

  useEffect(() => {
    if (update) {
      setFormData({
        title: music.name,
        duration: music.lengthtime,
        artist: music.artist,
        album: music.albumId,
      });
    } else {
      setFormData({
        title: "",
        duration: "",
        artist: "",
        album: "",
      });
    }
  }, [music, update]);

  function handleSubmit() {
    if (update) {
      dispatch(
        updateSong({
          ...formData,
          id: music.id,
        })
      );
    } else if (create) {
      dispatch(addSongSideEffect(formData));
    } else {
      dispatch(songsRequest(formData));
    }
    toggle();
  }

  function toggle() {
    if (blur.current !== undefined) blur.current.style.display = "none";
  }
  return (
    <>
      <div className="blurred-overlay" style={{ display: "none" }} ref={blur}>
        <div className="addMusic__form">
          <img
            src={require("../../images/music_image_cover.png")}
            alt="music cover"
            width={200}
            height={100}
            className="addMusic__cover"
          />
          <h2 className="addMusic__title">Add Music</h2>
          <div id="addMusic__title">
            <label>
              <span className="addMusic__form-label">Title: </span>
              <input
                type="text"
                className="addMusic__form-input"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </label>
          </div>
          <div id="addMusic__duration">
            <label>
              <span className="addMusic__form-label">Duration: </span>
              <input
                type="text"
                className="addMusic__form-input"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              />
            </label>
          </div>
          <div id="addMusic__album">
            <label>
              <span className="addMusic__form-label">Album: </span>
              <select
                name="album"
                id="albumsList"
                value={formData.albumId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    albumId: albumId !== null ? albumId : e.target.value,
                  })
                }
              >
                <option value="0">None</option>
                {albums?.map((album) => (
                  <option value={`${album.id}`} key={album.id}>
                    {album.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div id="addMusic__btns">
            <div className="addMusic___addButton" onClick={handleSubmit}>
              {update ? "Update" : "Add"}
            </div>
            <div className="addMusic___clearButton" onClick={toggle}>
              Clear
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMusic;
