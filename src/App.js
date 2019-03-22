import React, { Component } from 'react';
import Home from "./Home";
import SignIn from "./SignIn";
import Navigation from "./Navigation";
import Particles from "react-particles-js";
import Wrong from "./Wrong";
import './App.css';

const particlesOptions = {
  particles: {
                  number:{
                    value: 200,
                    density:{
                      enable: true,
                      value_area: 2000
                    }
                  }
            	}
}

const initialState = {
  isSignedIn: false,
  route: 'signin',
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  componentDidMount(){
    document.title = "InkersTask-SharanChandra";
  }

  onRouteChange = (data) => {
    if(data === 'signout')
    this.setState(initialState);

    else if(data === 'wrong' || data === 'signin')
    {
      this.setState({route:data});
      this.setState({isSignedIn: false});
    }
    else{
    this.setState({route: data});
    this.setState({isSignedIn: true});
  }
  }

  render() {
    return (
      <div className = "App">
        <Particles className = "particles" params = {particlesOptions}/>
        <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} />
        {this.state.route === "signin"?
          <SignIn onRouteChange = {this.onRouteChange}/>
        :(this.state.route === "wrong"?
        <Wrong onRouteChange = {this.onRouteChange}/>
        :
        <Home />
      )
      }
      </div>

    );
  }
}

export default App;
