import Section from "../../../components/Section";
import "./Musics.css";
import { useEffect } from "react";
import {
  deleteSong,
  getSongs,
  setMusic,
  setUpdate,
} from "../../../../state/reducers";
import { useDispatch, useSelector } from "react-redux";

function Musics() {
  const dispatch = useDispatch();
  const musics = useSelector((state) => {
    return state.songs.songs;
  });

  function handleBlur(e) {
    let addmusic = document.querySelector(".blurred-overlay"); // Select the element inside the function
    console.log(addmusic.style.display);
    if (addmusic.style.display === "none" || addmusic.style.display === "") {
      addmusic.style.display = "block";
    } else {
      addmusic.style.display = "none";
    }
  }

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <Section handleBlur={handleBlur}>
      <table className="musics__table">
        <thead className="musics__table-header">
          <tr>
            <th className="musics__table-no">#</th>
            <th className="musics__table-title">Title</th>
            <th className="musics__table-time">
              <img
                src={require("../../../images/time_icon.png")}
                alt="time"
                className="time-icon"
              />
            </th>
            <th className="musics__table-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {musics?.map((music) => (
            <tr key={music.id}>
              <td>{music.id}</td>
              <td>{music.name}</td>
              <td>{music.lengthtime}</td>
              <td>
                <span
                  className="music__table-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(setUpdate(true));
                    dispatch(setMusic(music));
                    handleBlur();
                  }}
                >
                  Edit{" "}
                </span>
                <span
                  className="music__table-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(deleteSong(music.id));
                  }}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}

export default Musics;
