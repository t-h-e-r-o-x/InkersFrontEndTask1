import React, {Component} from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInUser: '',
      signInPassword: ''
    }
  }

//to update the username for the state
  onUserChange = (event) => {
    this.setState({signInUser: event.target.value})
  }
//to update the password for the state
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

//function that is carried out on clicking submit
onSubmitSignIn = () => {
  fetch("https://infinite-shore-16170.herokuapp.com/signin",{ //call to server
    method: 'post',
    headers : {'Content-Type':'application/json'},
    body: JSON.stringify({
      user: this.state.signInUser,
      password: this.state.signInPassword
    })
  })
  .then( response => response.json())
  .then( auth => {
    if(auth == "In"){  //checking response from server and changing "route" variable(in App.js state object) accordingly
      this.props.onRouteChange('home');
    }
    else{
      this.props.onRouteChange('wrong');
    }
  })
}

render(){
  return(
    <article className="br2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 gold fw6 ph0 mh0 center">Welcome to the Task!</legend>
            <div className="mt3">
              <label className="db gold fw6 lh-copy f5" htmlFor="email-address">Username</label>
              <input onChange={this.onUserChange} className="pa2 white input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db gold fw6 lh-copy f5" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b white pa2 input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={this.onSubmitSignIn} className="b gold ph3 pv2 input-reset ba b--mid-gray bg-transparent bg-animate hover-bg-mid-gray grow pointer f4 dib" type="submit" value="Sign in"/>
          </div>
        </div>
      </main>
    </article>
  );
}
}

export default SignIn;
