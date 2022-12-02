import { useEffect, useState } from "react";
import Nav from "./componentes/navbar";
import Person from "./componentes/Personajes";
import Page from "./componentes/pagina";
import axios from "axios";
function App() {
  const [Personage, setPersonages] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const Iurl = "https://rickandmortyapi.com/api/character";

  const BuscarP = async (url) => {
    await axios.get(url).then((resp) => {
      setPersonages(resp.data.results);
      setInfo(resp.data.info);
    });
  };

  useEffect(() => {
    BuscarP(Iurl);
  },[]);

  const onPrevius = () => {
    BuscarP(info.prev);
    const prevPage = page - 1 ;
    setPage(prevPage);
  };

  const onNext = () => {
    BuscarP(info.next);
    const nextPage = page + 1 ;
    setPage(nextPage);
  };

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
