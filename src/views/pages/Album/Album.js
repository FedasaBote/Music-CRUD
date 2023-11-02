import Header from "../../components/Header";
import AlbumDetail from "../../components/AlbumDetail";
import AlbumMusics from "./section/AlbumMusics/AlbumMusics";
import Footer from "../../components/Footer";
import "./Album.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { albumsRequest } from "../../../state/reducers";
function Album({ album }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const albumDetail = useSelector((state) => state.albums.albumDetail);
  // console.log(albumDetail);

  useEffect(() => {
    dispatch(albumsRequest(+id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <main>
        <AlbumDetail albumDetail={albumDetail} />
        <AlbumMusics id={id} />
      </main>
      <Footer />
    </>
  );
}

export default Album;
