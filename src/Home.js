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

  onSubmitBar = () => {
    fetch('https://infinite-shore-16170.herokuapp.com/bardata', {
      method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({graphName:'bar', graphData: data});
    })
  }

  onSubmitPie = () => {
    fetch('https://infinite-shore-16170.herokuapp.com/piedata', {
      method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
