import React from 'react'

const navbar = ({componentes = []}) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand text-uppercase' href="/">Rick y Morthy</a>
      </div>
      {
        componentes.map((item,index) => (
          <div key={index} className='container'>
            <a className='navbar-brand text-uppercase' href={item.route}>{item.name}</a>
          </div>
        ))
      }
    </nav>
    )
}

export default navbar
