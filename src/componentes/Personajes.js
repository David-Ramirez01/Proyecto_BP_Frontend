import React from 'react'

const Personajes = ({Characters = []}) => {
  return (
    <div className='row'>
      {
        Characters.map((item,index) => (
          <div key={index} className='col mb-4'>
            <div className='card' style={{minWidth:'200px'}}>
              <img className='card-img-top' src={item.image} alt={item.name} />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <hr/>
                <p>Especie: {item.species}</p>
                <p>Estado: {item.status}</p>
                <p>Generoi: {item.gender}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Personajes
