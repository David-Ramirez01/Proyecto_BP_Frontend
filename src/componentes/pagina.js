import React from "react";

const pagina = ({ prev, next, onPrevius, onNext }) => {
  const Previus = () => {
    onPrevius();
  };

  const Next = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={Previus}>
              Anterior
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={Next}>
              SIguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default pagina;
