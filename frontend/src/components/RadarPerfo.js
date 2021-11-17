import React from "react";
import axios from "axios";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class RadarPerfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            perfoData: [],
            kindData: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12/performance").then(response => {
            console.log(response);
            this.setState({perfoData: response.data.data.data});
            this.setState({kindData: response.data.data.kind});
        });
    }

    render() {
      const data = [
        {
          subject: 'Math',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];
      console.log("RADAR");
        return(
          <RadarChart width={500}
          height={300} cx="50%" cy="50%" outerRadius="80%" data={this.state.perfoData}>
          <PolarGrid />
          <PolarAngleAxis dataKey={this.state.kindData} />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
        );
    }
}

export default RadarPerfo;