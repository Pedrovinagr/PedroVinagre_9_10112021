import React from "react";
import axios from "axios";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

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
          console.log(response)
            this.setState({perfoData: response.data.data.data});
            this.setState({kindData: response.data.data.kind});
            console.log(this.state.perfoData);
            console.log(this.state.kindData);
        });
    }

    

    render() {
      const ACTIVITIES_ORDER_IN_CHART = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energie",
        "Cardio",
      ];

      const dataActivity = [this.state.perfoData]
      console.log(dataActivity)
      const orderedActivities = [];

      for (let activity of ACTIVITIES_ORDER_IN_CHART) {
        for (let item of this.state.perfoData) {
          console.log(item)
          // if (item.activity === activity) {
          //   orderedActivities.push({
          //     activity: activity,
          //     value: item.value,
          //   });
          // }
        }
      }
        
      return(
        <div className="radar">
          <RadarChart width={500}
            height={300} cx="50%" cy="50%" outerRadius="80%" data={this.state.perfoData}>
            <PolarGrid />
            <PolarAngleAxis data={this.state.kindData} dataKey="kind" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>
      );
    }
}

export default RadarPerfo;