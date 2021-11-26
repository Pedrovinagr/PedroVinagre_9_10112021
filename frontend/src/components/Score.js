import React from "react";
import axios from "axios";
import { Cell, Pie, PieChart } from "recharts";

/**@Class representing a Score*/
class Score extends React.Component {
    /**
      * create a Score
      * @param {props} scoreData : the source data of the content to be displayed of the in the componentDidMount following the link "http://localhost:3001/user/12"
      * @return {Array} completed with values
      */
    constructor(props) {
        super(props);
        this.state = {
            scoreData: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12").then(response => {
          this.setState({scoreData: response.data.data.todayScore});
        });
    }

    /**
      * graph customized
      * customization of the graph with recharts
      * @return {string}  values on the x-axis
      */

    render() {

      const pieData = [
        { name: "completed", value: this.state.scoreData, fillColor: "#E60000" },
        { name: "not-completed", value: 1 - this.state.scoreData, fillColor: "transparent" },
      ];

      return(
        <div className="score">
          <h2 className="title_score">Score</h2>
          <PieChart width={258} height={263}>
            <Pie
              data={pieData}
              dataKey="value"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  cornerRadius="50%"
                />
              ))}
            </Pie>
          </PieChart>
          <p className="legend_score">
            <span className="score_value">{`${100 * this.state.scoreData}%`}</span>
            <br />
            de votre
            <br />
            objectif
          </p>
        </div>
      );
    }
}

export default Score;