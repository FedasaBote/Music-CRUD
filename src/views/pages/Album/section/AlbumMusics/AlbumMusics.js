import { useEffect } from "react";
import "./AlbumMusics.css";
import AddButton from "../../../../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumSongs, setAlbum } from "../../../../../state/reducers";
function AlbumMusics({ id }) {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.albums.songs);
  console.log(songs);

  function handleBlur(e) {
    let addmusic = document.querySelector(".blurred-overlay"); // Select the element inside the function
    if (addmusic.style.display === "none" || addmusic.style.display === "") {
      addmusic.style.display = "block";
    } else {
      addmusic.style.display = "none";
    }
  }
  useEffect(() => {
    dispatch(setAlbum(id));
    dispatch(getAlbumSongs(id));

    return () => dispatch(setAlbum(null));
  }, [dispatch, id]);
  return (
    <div className="albumMusics">
      <table className="musics__table">
        <thead className="musics__table-header">
          <tr className="table__header">
            <td className="table_header-label" colSpan={2}>
              <span className="table__header-icon">
                <img
                  src={require("../../../../images/music_icon.png")}
                  alt=""
                />
              </span>
              <span className="table__header-text">Musics</span>
            </td>
            <td colSpan={2}>
              <AddButton text="Add music" handleBlur={handleBlur} />
            </td>
          </tr>
          <tr>
            <th className="musics__table-no">#</th>
            <th className="musics__table-title">Title</th>
            <th className="musics__table-time">
              <img
                src={require("../../../../images/time_icon.png")}
                alt="time"
                className="time-icon"
              />
            </th>
            <th className="musics__table-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return (
              <tr>
                <td>{song.id}</td>
                <td>{song.name}</td>
                <td>{song.lengthtime}</td>
                <td>
                  <span className="music__table-icon">Edit </span>
                  <span className="music__table-icon">Delete</span>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>Song 1</td>
            <td>3:44</td>
            <td>
              <span className="music__table-icon">Edit </span>
              <span className="music__table-icon">Delete</span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Song 1</td>
            <td>3:44</td>
            <td>
              <span className="music__table-icon">Edit </span>
              <span className="music__table-icon">Delete</span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Song 1</td>
            <td>3:44</td>
            <td>
              <span className="music__table-icon">Edit </span>
              <span className="music__table-icon">Delete</span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Song 1</td>
            <td>3:44</td>
            <td>
              <span className="music__table-icon">Edit </span>
              <span className="music__table-icon">Delete</span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Song 1</td>
            <td>3:44</td>
            <td>
              <span className="music__table-icon">Edit </span>
              <span className="music__table-icon">Delete</span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Song 1</td>
            <td>3:44</td>
            <td>
              <span className="music__table-icon">Edit </span>
              <span className="music__table-icon">Delete</span>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default AlbumMusics;
