import { useState } from "react";
import "./App.css";

function MovieItem({ src, alt, handleClick }) {
  return (
    <div onClick={handleClick}>
      <img src={src} alt={alt} />
    </div>
  );
}

function App() {
  // const bigImgURL = "/my-id-gangnam-beauty-background.webp";
  const [bigImgURL, setBigImgURL] = useState(
    "/my-id-gangnam-beauty-background.webp"
  );

  return (
    <main>
      <nav>
        <h2>NETFLIX</h2>
        <a href="/">Beranda</a>
        <a href="/">Acara TV</a>
        <a href="/">Film</a>
        <a href="/">Baru & Populer</a>
        <a href="/">Daftar Saya</a>
        <a href="/">Telusuri menurut Bahasa</a>
      </nav>
      <div
        className="big"
        style={{
          backgroundImage: `url("${bigImgURL}")`,
        }}
      ></div>
      <div className="row">
        <MovieItem
          src="/my-id-gangnam-beauty-background.webp"
          alt="my-id-is-gangnam-beauty"
          handleClick={() =>
            setBigImgURL("/my-id-gangnam-beauty-background.webp")
          }
        />
        <MovieItem
          src="/parasyte.webp"
          alt="parasyte"
          handleClick={() => setBigImgURL("/parasyte.webp")}
        />
        <MovieItem
          src="/stranger-things.jpg"
          alt="stranger thins"
          handleClick={() => setBigImgURL("/stranger-things.jpg")}
        />
        <MovieItem
          src="/alice-in-borderland.jpg"
          alt="alice in borderland"
          handleClick={() => setBigImgURL("/alice-in-borderland.jpg")}
        />
        <MovieItem
          src="/boys-over-flowers.webp"
          alt="boys oer flower"
          handleClick={() => setBigImgURL("/boys-over-flowers.webp")}
        />
      </div>
    </main>
  );
}

export default App;

//         <div
//           onClick={() => setBigImgURL("/my-id-gangnam-beauty-background.webp")}
//         >
//           <img
//             src="/my-id-gangnam-beauty-background.webp"
//             alt="my-id-is-gangnam-beauty"
//           />
//         </div>
//         <div onClick={() => setBigImgURL("/parasyte.webp")}>
//           <img src="/parasyte.webp" alt="parasyte" />
//         </div>
//         <div onClick={() => setBigImgURL("/stranger-things.jpg")}>
//           <img src="/stranger-things.jpg" alt="stranger things" />
//         </div>
//         <div onClick={() => setBigImgURL("/boys-over-flowers.webp")}>
//           <img src="/boys-over-flowers.webp" alt="boys over flower" />
//         </div>
//         <div onClick={() => setBigImgURL("/alice-in-borderland.jpg")}>
//           <img src="/alice-in-borderland.jpg" alt="alice in borderland" />
//         </div>
