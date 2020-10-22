import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/' component={ShopPage} />
      </Switch>
    </div>
  );
}
  // Líneas de prueba de navegación depués del componente </Switch> 
  // para probar URLs dinámicos y cómo reusar el componente destino
export default App;
