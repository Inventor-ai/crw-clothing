import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
         const userRef =  await createUserProfileDocument (userAuth);
         
         userRef.onSnapshot ( snapShot => {
           this.setState (
             {
               currentUser: {
                 id: userRef.id,
                 ...snapShot.data()
               }
             },
             // Muestra datos del usuario logeado (Signed-In)
            //  () => { console.log ("this.setState I:", this.state) }
           );
           console.log ("onSnapShot I:", this.state );
         });
      }
      else {
        this.setState ( { currentUser: userAuth }
          // Muestra que el usuario salió (Signed-Out)
          //, () => console.log ("this.setState O:", this.state)
        );
      }
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
          <Route path='/shop/'  component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
