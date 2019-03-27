import React, { Component } from 'react';
import Home from "./Home";
import SignIn from "./SignIn";
import Navigation from "./Navigation";
import Particles from "react-particles-js";
import Wrong from "./Wrong";
import './App.css';

//for particles background
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

//default state of the app upon rendering
const initialState = {
  isSignedIn: false,
  route: 'signin',
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

//setting document title
  componentDidMount(){
    document.title = "InkersTask-SharanChandra";
  }

//to keep track of which page the user should advance to
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
        {this.state.route === "signin"? //check if sign in page is required to be rendered
          <SignIn onRouteChange = {this.onRouteChange}/>
        :(this.state.route === "wrong"? //check if wrong credentials page is required to be rendered
        <Wrong onRouteChange = {this.onRouteChange}/>
        :
        <Home /> //render home page if none of the above conditions are matched
      )
      }
      </div>

    );
  }
}

export default App;
