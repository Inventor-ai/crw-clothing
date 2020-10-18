import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ( {title, linkUrl, size} ) => (
   <div className="menu-item">
     <div className="content">
       <h1>{ title }</h1>
       <span>SHOP NOW</span>
     </div>
   </div>
)

export default MenuItem;
