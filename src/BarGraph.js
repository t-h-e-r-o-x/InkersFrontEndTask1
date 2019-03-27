import React,{Component} from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'; //import BarGraph from Recharts Library

class BarGraph extends Component{
  constructor(props){
    super(props);
  }

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render(){
    return(
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="xplot" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="yplot" fill="#8884d8" />
                </BarChart>
  );
}
}

export default BarGraph;
