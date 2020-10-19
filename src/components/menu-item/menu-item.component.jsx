import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

// Los dos últimos parámetros  -history, match- provienen de 
// la función HOC withRouter() -HOC: High Order Component
const MenuItem = ( {title, imageUrl, size, linkUrl, history, match} ) => (
// Variables organizadas según se fueron utilizando en el componente
//const MenuItem = ( {size, linkUrl, imageUrl, title, history, match} ) => ( 
   <div className={`menu-item ${size}`}
        onClick={ ()=> history.push( `${ match.url }${linkUrl}` )}
   >
   <div className="background-image"
        style={{ backgroundImage: `url(${imageUrl})`}}        
   />
     <div className="content">
       <h1 className="title ">{ title }</h1>
       <span className="subtitle">SHOP NOW</span>
     </div>
   </div>
)

export default withRouter(MenuItem);
