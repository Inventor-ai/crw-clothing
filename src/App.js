import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Auth is a Open messaging system that return user state
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState ({ currentUser: user });
      console.log ( user );
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop/' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
  // Líneas de prueba de navegación depués del componente </Switch> 
  // para probar URLs dinámicos y cómo reusar el componente destino
export default App;
