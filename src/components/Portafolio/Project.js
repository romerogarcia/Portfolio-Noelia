import React from 'react'

import './Project.css'

function Project(props) {

  const {nombre, leng, desc, url, github} = props.projects;
 
  return (
    <div className="item-proj">
        <div className="item-header">
          <p>{nombre}</p>
          <span>X</span>
        </div>
        
        <div className="item-bo"> 
          
          <div className="item-info">
            <h2>{nombre}</h2>
            <h3>{leng}</h3>
            <p className='descripcion'>{desc}</p>
            <div className='boton-link-page'>
              <a className='link-page' href={url} target='_blank' rel='noreferrer'>Ver página</a>
              <a className='link-page github' href={github} target='_blank' rel='noreferrer'>Github</a>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Project

