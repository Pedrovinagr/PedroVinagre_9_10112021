import React from "react";
import axios from "axios";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

class RadarPerfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            perfoData: []
        };
    }

    componentDidMount() {
      let graphData = []
        axios.get("http://localhost:3001/user/12/performance").then(response => {
          let kind = response.data.data.kind;
          let data = response.data.data.data;
          for(var i = 0; i < data.length -1; i++){
            var kindValues = Object.values(kind);
            let graphObject = {
              value: data[i].value,
              kind: kindValues[data[i].kind]}
              graphData.push(graphObject);
            }
            this.setState({perfoData: graphData});
            console.log(this.state.perfoData)

        });
    }

    render() {
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