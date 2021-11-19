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
            this.setState({perfoData: response.data.data.data});
            this.setState({kindData: response.data.data.kind});
        });
    }

    

    render() {
      // const ACTIVITIES_ORDER_IN_CHART = [
      //   "Intensité",
      //   "Vitesse",
      //   "Force",
      //   "Endurance",
      //   "Energie",
      //   "Cardio",
      // ];

      // const dataActivity = [this.state.perfoData]
      // console.log(dataActivity)
      // const orderedActivities = [];

      // for (let activity of ACTIVITIES_ORDER_IN_CHART) {
      //   for (let item of this.state.perfoData) {
      //     console.log(item)
          // if (item.activity === activity) {
          //   orderedActivities.push({
          //     activity: activity,
          //     value: item.value,
          //   });
          // }
      //   }
      // }
        
      return(
        <div className="radar">
          <RadarChart 
            width={258}
            height={263}
            outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
            data={this.state.perfoData}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis 
              data={this.state.kindData} 
              dataKey="kind"
              stroke="white"
              dy={4}
              tickLine={false}
              tick={{fontSize: 12, fontWeight: 500}}
            />
            <Radar 
              dataKey="value" 
              stroke="transparent"
              fill="rgba(255, 1, 1, 0.7)" 
              fillOpacity={0.7} 
            />
          </RadarChart>
        </div>
      );
    }
}

export default RadarPerfo;