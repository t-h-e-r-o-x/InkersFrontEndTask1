import React,{Component} from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Tooltip,
} from 'recharts'; //import Piechart from Recharts Library

class Piechart extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  constructor(props){
    super(props);
  }

  render() {
    return (
    <div className = "center" style={{ width: '100%' , height: 300, textAlign: 'center'  }}>
      <PieChart width={400} height={400}>
        <Pie dataKey="yplot" isAnimationActive={false} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
  </div>
    );
  }
}

export default Piechart;
