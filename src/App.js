import { useEffect, useState } from "react";
import Nav from "./componentes/navbar";
import Person from "./componentes/Personajes";
import Page from "./componentes/pagina";
function App() {
  const [Personage, setPersonages] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const Iurl = "https://rickandmortyapi.com/api/character";

  const BuscaPersonajes = (url) => {
    fetch(url)
      .then((respuest) => respuest.json())
      .then((data) => {
        setPersonages(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
    BuscaPersonajes(info.prev);
    const prevPage = page - 1;
    setPage(prevPage);
  };

  const onNext = () => {
    BuscaPersonajes(info.next);
    const nextPage = page + 1;
    setPage(nextPage);
  };

  useEffect(() => {
    BuscaPersonajes(Iurl);
  }, []);

  return (
    <>
      <Nav />
      <div className="container mt-5">
        <h1> Pagina :{page}</h1>
        <Page
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
        <Person Characters={Personage} />
        <Page
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
