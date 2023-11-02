import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Albums from "./sections/Albums";
import Musics from "./sections/Musics";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Albums />
        <Musics />
      </main>
      <Footer />
    </>
  );
}

export default Home;
