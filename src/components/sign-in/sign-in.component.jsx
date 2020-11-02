import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
       email: '',
       password: ''
    }    
  }

  handleSubmit = evento => {
    console.log ('handleSubmit');
    evento.preventDefault()  
    this.setState( { email: '', password: '' } );
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => {
        console.log ('this.state', this.state );
        console.log ('handleChange', [name], value );
    });
  }

  render () {
    return (
      <div className="sign-in">
        <h2>I already have a an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
           <FormInput
               type="email" 
               name="email" 
               label='email'
               value={this.state.email} 
               handleChange={this.handleChange}                
               required
           />

           <FormInput
              type="password"
              name="password"
              label='password'
              value={this.state.password}
              handleChange={this.handleChange}
              required
           />
           <div className="buttons">
             <CustomButton type="submit"> Sign In </CustomButton>
             <CustomButton 
                type="button"
                onClick={ signInWithGoogle }  
                isGoogleSignIn
             >
                {' '}
                Sign in with Google
                 {' '}
              </CustomButton>
           </div>
        </form>
      </div>  
    );
  }
}

export default SignIn;

/*
        <form onSubmit={this.handleSubmit}>
           <input type="email" onChange={this.handleChange}
              name="email" value={this.state.email} required
           />
           <label >Email</label>
           <input 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
           />
           <label>Password</label>

           <input type="submit" value="Submit Form"/>
        </form>
*/