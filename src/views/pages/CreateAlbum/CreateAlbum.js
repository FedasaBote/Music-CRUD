// import Musics from '../Home/sections/Musics/Musics'
import AddButton from "../../components/AddButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./CreateAlbum.css";
import { addAlbum, setCreate } from "../../../state/reducers";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function CreateAlbum() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const musics = useSelector((state) => state.sideEffects.songs);

  // const [formdata, setFormData] = useState();
  const [album, setAlbum] = useState({
    title: "",
    artist: "",
    year: "",
    musics: [],
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

  async function handleSubmit() {
    if (
      album.title === "" ||
      album.artist === "" ||
      album.year === "" ||
      album.musics.length === 0
      // album.pic === ""
    ) {
      return;
    }

    dispatch(addAlbum(album));
    navigate("/");
  }

  useEffect(() => {
    dispatch(setCreate(true));

    return () => dispatch(setCreate(false));
  }, [dispatch]);

  useEffect(() => {
    setAlbum((prevAlbum) => ({
      ...prevAlbum,
      musics: [...musics],
    }));
  }, [musics]);

  return (
    <>
      <Header />
      <div className="createAlbum__card">
        <div className="createAlbum__form">
          <h2 className="createAlbum__form-header">Create Album</h2>
          <div className="createAlbum__form-inputs">
            <div className="createAlbum__form-photo">
              <img
                src={
                  album.pic
                    ? album.pic
                    : require("../../images/album_cover.png")
                }
                alt="album cover"
                height={150}
                width={150}
                className="alubum_cover"
              />
              <img
                src={require("../../images/add_image_icon.png")}
                alt=""
                height={50}
                width={50}
                className="addImage__icon"
              />
            </div>
            <div className="createAlbum__form-content">
              <label>
                Title:{" "}
                <input
                  type="text"
                  value={album.title}
                  onChange={(e) =>
                    setAlbum({ ...album, title: e.target.value })
                  }
                />
              </label>
              <label>
                Artist:{" "}
                <input
                  type="text"
                  value={album.artist}
                  onChange={(e) =>
                    setAlbum({ ...album, artist: e.target.value })
                  }
                />
              </label>
              <label>
                Year:{" "}
                <input
                  type="number"
                  value={album.year}
                  onChange={(e) => setAlbum({ ...album, year: e.target.value })}
                />
              </label>
            </div>
          </div>
          <table className="createAlbum__table">
            <thead>
              <tr className="createAlbum__table-header">
                <td className="createAlbum__table-label" colSpan={2}>
                  <img src={require("../../images/music_icon.png")} alt="" />
                  <span className="createAlbum__table-label-text">Musics</span>
                </td>
                <td></td>
                <td className="createAlbum__table-addButton">
                  <AddButton text="Add Music" handleBlur={handleBlur} />
                </td>
              </tr>
              <tr>
                <th className="createAlbum__table-no">#</th>
                <th className="createAlbum__table-title">Title</th>
                <th className="createAlbum__table-time">#</th>
                <th className="createAlbum__table-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="createAlbum__table-no">#</td>
                <td className="createAlbum__table-title">Title</td>
                <td className="createAlbum__table-time">#</td>
                <td className="createAlbum__table-actions">Actions</td>
              </tr>
              {musics.map((song, idx) => {
                return (
                  <tr>
                    <td className="createAlbum__table-no">{idx + 1}</td>
                    <td className="createAlbum__table-title">{song.title}</td>
                    <td className="createAlbum__table-time">{song.duration}</td>
                    <td className="createAlbum__table-actions">Actions</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="createAlbum__form-btns">
            <div className="createAlbum__form-createBtn" onClick={handleSubmit}>
              Create
            </div>
            <div className="createAlbum__form-cancelBtn">Cancel</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateAlbum;

// in flutter the following Widgets are called the Widgets Graphics Manipulation Widgets
// 1.DecoratedBox
// 2.Transform
// 3. ClipRRect
// 4. RotatedBox
// 5. Opacity
// 6. ShaderMask
// 7. BackdropFilter
// 8. Align
// 9. Positioned
// 10. AnimatedAlign
// 11. AnimatedPositioned
// 12. AnimatedOpacity
// 13. AnimatedDefaultTextStyle
// 14. AnimatedPadding
// 15. AnimatedContainer
// 16. AnimatedCrossFade
// 17. AnimatedSwitcher
// 18. AnimatedSize
// 19. AnimatedAlign
