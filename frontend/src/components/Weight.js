import React from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "../App.css";

/**@Class representing a Weight*/
class Weight extends React.Component {
    /**
    * create a Weight
    * @param {props} activityData:The source data of the content to be displayed of the in the componentDidMount following the link "http: // localhost: 3001 / user / 12 / activity"
    * @return {Array} completed with values
    */
    constructor(props) {
        super(props);
        this.state = {
            activityData: []
        };
    }

    /**
    * Xaxis values customized 
    * @return {Array} keep only the last characters from the string(day), pushing string in the array of state activityData
    */

    componentDidMount() {
        const customXaxis = [];
        axios.get("http://localhost:3001/user/12/activity").then(response => {            
            let data = response.data.data.sessions;
            for (var i = 0; i < data.length; i++) {
                var day = data[i].day;
                var valueDay = day.substring(day.length-1);
                let graphObject = {
                    kilogram: data[i].kilogram,
                    calories: data[i].calories,
                    day: valueDay}
                customXaxis.push(graphObject)
            }
            this.setState({activityData: customXaxis})
        });
    }

    /**
    * graph customized
    * customization of the graph with recharts 
    * @return {string} 2 values on the y-axis => Kilogram and calories
    * @return {string} day values on the x-axis
    */

    render() {

        return(
            <div className="weight">
                <h2 className="title_weight">Activité quotidienne</h2>
                <div className="legend_weight">
                <p className="legend_value">
                    <span className="color_bar background_weight" background="#282D30"></span>
                    Poids (kg)
                </p>
                <p className="legend_value">
                    <span className="color_bar background_calorie" background="#E60000"></span>
                    Calories brûlées (kCal)
                </p>
                </div>
                <BarChart
                width={835}
                height={320}
                data={this.state.activityData}
                margin={{
                    top: 80,
                    right: 48,
                    left: 48,
                    bottom: 32,}}
                barGap={8}
                barCategoryGap="35%"
                >
                <CartesianGrid 
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#dedede"
                />
                <XAxis
                    dataKey="day"
                    dy={16}
                    padding={{ left: -48, right: -48 }}
                    stroke="#9b9eac"
                    tickLine={false}
                    tick={{ fontSize: 14, fontWeight: 500 }}
                />
                <YAxis 
                    yAxisId="kg"
                    dataKey="kilogram"
                    domain={["dataMin - 1", "dataMax + 2"]}
                    allowDecimals={false}
                    dx={48}
                    orientation="right"
                    stroke="#9b9eac"
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    yAxisId="cal"
                    dataKey="calories"
                    domain={[0, "dataMax + 50"]}
                    hide={true}
                />
                <Bar 
                    yAxisId="kg" 
                    dataKey="kilogram" 
                    fill="#282D30" 
                    maxBarSize={8} 
                    radius={[50, 50, 0, 0]}
                />
                <Bar 
                    yAxisId="cal" 
                    dataKey="calories" 
                    fill="#E60000" 
                    maxBarSize={8} 
                    radius={[50, 50, 0, 0]}
                />
                <Tooltip 
                    cursor={{fill: "rgba(0, 0, 0, 0.1)",}}
                />
                </BarChart>
            </div>
        );
    }
}


export default Weight;