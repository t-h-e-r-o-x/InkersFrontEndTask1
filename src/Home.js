import React,{Component} from "react";
import BarGraph from "./BarGraph";
import Piechart from "./Piechart";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      graphName: '',
      graphData: [{}]
    }
  }

//when generate bar graph is clicked
  onSubmitBar = () => {
    fetch('https://infinite-shore-16170.herokuapp.com/bardata', { //call to server to return bar graph plotting points
      method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({graphName:'bar', graphData: data});
    })
  }

//when generate piechart is clicked
  onSubmitPie = () => {
    fetch('https://infinite-shore-16170.herokuapp.com/piedata', { //call to server to return piechart plotting points
      method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({graphName:'pie', graphData: data});
    })
  }

    render(){
      return(
      <div>
        <p className = "red f1">Welcome Home!</p>
        <p className='f3 ba b--gold gold link bg-animate hover-bg-black pa3 pointer' onClick = {this.onSubmitBar}>Generate Bar Graph</p>
        <p className='f3 ba b--gold gold link bg-animate hover-bg-black pa3 pointer' onClick = {this.onSubmitPie}>Generate Pie Chart</p>
        {this.state.graphName === 'bar'?
      <BarGraph data = {this.state.graphData} />
      :
      <Piechart data = {this.state.graphData} />
    }
      </div>
    );
  }
}

export default Home;
