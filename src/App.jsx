import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import Album from "./views/pages/Album/Album";
import AddMusic from "./views/pages/AddMusic/AddMusic";
import CreateAlbum from "./views/pages/CreateAlbum/CreateAlbum";
// import AddMusic from './views/pages/AddMusic/AddMusic'

function App() {
  return (
    <BrowserRouter>
      <AddMusic />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="album/:id" element={<Album />} />
        <Route path="/addAlbum" element={<CreateAlbum />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
