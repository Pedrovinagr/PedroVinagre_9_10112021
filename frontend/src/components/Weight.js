import React from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "../App.css";

class Weight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activityData: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12/activity").then(response => {
            this.setState({activityData: response.data.data.sessions});
        });
    }

    // CustomTooltip({ active, payload }) {
    //     if (active && payload) {
    //       return (
    //         <div className="TooltipContainer">
    //           <p className="TooltipLine" background="#2b2d30">
    //             {`${payload[0].value} kg`}
    //           </p>
    //           <p className="TooltipLine" background="#74798c">
    //             {`${payload[1].value} kCal`}
    //           </p>
    //         </div>
    //       );
    //     }
    // }

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
                    // content={<CustomTooltip />}
                    cursor={{fill: "rgba(0, 0, 0, 0.1)",}}
                />
                </BarChart>
            </div>
        );
    }
}


export default Weight;