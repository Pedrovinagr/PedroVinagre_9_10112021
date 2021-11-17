import React from "react";
// import axios from "axios";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


class RadarPerfo extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         perfoData: []
    //         kindData: []
    //     };
    // }

    componentDidMount() {
        // axios.get("http://localhost:3001/user/12/performance").then(response => {
        //     console.log(response);
        //     this.setState({perfoData: response.data.data.data});
        //     this.setState({kindData: response.data.data.kind});
        // });
    }

    render() {
      const data = [
        {
          subject: 'Math',
          A: 120,
          B: 110
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130
        },
        {
          subject: 'English',
          A: 86,
          B: 130
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90
        },
        {
          subject: 'History',
          A: 65,
          B: 85
        },
      ];

        return(
          <div className="Radar">
            <RadarChart widht={500} height={500} margin={{top: 5, right: 30, left: 20, bottom: 5,}}
                  cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </div>
        );
    }
}

export default RadarPerfo;