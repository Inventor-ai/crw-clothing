import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
//import { Route, Link } from 'react-router-dom';

import './App.css';

const ItemsPage = (props) => {
  console.log ( props );
  return (
    <div>
      <h1>ITEMS PAGE</h1>
      <p>Select from list:</p>
      <Link to={`${props.match.url}/13`} > Model: 13 </Link>
      <Link to={`${props.match.url}/23`} > Model: 23 </Link>
      <Link to={`${props.match.url}/33`} > Model: 33 </Link>
    </div>
  );
};

const ItemsInfoPage = (props) => {
  console.log ( props );
  return (
    <div>
      <h1>INFO PAGE: {props.match.params.itemId}</h1>
    </div>
  );
};

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop/:itemId' component={ItemsInfoPage} />
    </Switch>
    <Route path='/anyroute/blog/test/hatspage' component={ItemsPage} />
    <Route path='/anyroute/blog/test/hatspage/:itemId' component={ItemsInfoPage} />
    <Route path='/blog/glasses/topics' component={ItemsPage} />
    <Route path='/blog/glasses/topics/:itemId' component={ItemsInfoPage} />
  </div>;
}
  // Líneas de prueba de navegación depués del componente </Switch> 
  // para probar URLs dinámicos y cómo reusar el componente destino
export default App;
