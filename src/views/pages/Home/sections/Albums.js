import Section from "../../../components/Section";
import Card from "../../../components/AlbumCard";
import "./Albums.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAlbums } from "../../../../state/reducers";
function Albums() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);
  // console.log(albums);
  // albums.map((album) => console.log(album.name));
  // console.log(albums, "this is it structure jkdfffffffffff");
  function handleBlur() {
    navigate("/addAlbum");
  }
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);
  return (
    <Section handleBlur={handleBlur}>
      <div className="albums__card-list">
        {albums?.map((album) => (
          <Link to={`album/${album.id}`}>
            <Card key={album.id} album={album} />
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default Albums;
