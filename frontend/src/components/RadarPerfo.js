import React from "react";
import axios from "axios";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class RadarPerfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            perfoData: [],
            kindData: ""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12/performance").then(response => {
            this.setState({perfoData: response.data.data.data});
            this.setState({kindData: response.data.data.kind});
            console.log(this.state.perfoData);
            console.log(this.state.kindData);
        });
    }

    render() {
      return(
        console.log(this.state.perfoData),
        console.log(this.state.kindData),
          <RadarChart width={500}
          height={300} cx="50%" cy="50%" outerRadius="80%" data={this.state.perfoData}>
          <PolarGrid />
          <PolarAngleAxis data={this.state.kindData} dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      );
    }
}

export default RadarPerfo;