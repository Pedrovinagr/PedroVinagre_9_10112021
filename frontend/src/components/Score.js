import React from "react";
// import axios from "axios";
import { RadialBarChart, RadialBar, Legend } from 'recharts';

class Score extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         perfoData: [],
    //         kindData: []
    //     };
    // }

    componentDidMount() {
        // axios.get("http://localhost:3001/user/12/performance").then(response => {
        //   console.log(response)
        //     this.setState({perfoData: response.data.data.data});
        //     this.setState({kindData: response.data.data.kind});
        //     console.log(this.state.perfoData);
        //     console.log(this.state.kindData);
        // });
    }

    

    render() {
      const data = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#8884d8',
        },
      ];

      const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };

      return(
        <div className="score">
          <RadialBarChart width={500} height={300} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </div>
      );
    }
}

export default Score;