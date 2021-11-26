import React from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

/** @Class representing a Target*/
class Target extends React.Component {
    /**
    * create a Target
    * @param {props} averageData:The source data of the content to be displayed of the in the componentDidMount following the link "http://localhost:3001/user/12/average-sessions"
    * @return {Array} completed with values
    */
    constructor(props) {
        super(props);
        this.state = {
            averageData: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12/average-sessions").then(response => {
            this.setState({averageData: response.data.data.sessions});
        });
    }

    /**
    * Xaxis customized with array(day): transform the integer for a letter(day)
    * @return {Object} return the first letter of the day
    * 
    * graph customized
    * customization of the graph with recharts
    * @return {string} sessionLength values on the y-axis
    * @return {string} The firt value letter of every day on the x-axis
    */

    render() {

        const day = {
            1: "L",
            2: "M",
            3: "M",
            4: "J",
            5: "V",
            6: "S",
            7: "D",
          }

        const CustomXaxis = (value) => {
            return day[value]
        }
        return(
            <div className="target">
                <h2 className="title_target">
                    Durée moyenne des
                    <br />
                    sessions
                </h2>
                <LineChart
                width={258}
                height={263}
                data={this.state.averageData}
                margin={{
                top: 0,
                right: 12,
                left: 12,
                bottom: 24,
                }}
                >
                <XAxis 
                    dataKey="day"
                    stroke="rgba(255, 255, 255, 0.6)"
                    axisLine={false}
                    dy={10}
                    tickFormatter={CustomXaxis}
                    tickLine={false}
                    tick={{
                        fontSize: 12,
                        fontWeight: 500,
                    }}
                />
                <YAxis 
                    dataKey="sessionLength"
                    domain={[0, "dataMax + 60"]}
                    hide={true}
                />
                <Line 
                    type="monotone" 
                    dataKey="sessionLength" 
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                    stroke: "rgba(255,255,255, 0.6)",
                    strokeWidth: 10,
                    r: 5,
                    }}
                />
                <Tooltip 
                    cursor={{stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 32,}}
                />
                </LineChart>
            </div> 
        );
    }
}

export default Target;