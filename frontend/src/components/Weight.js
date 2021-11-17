import React from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

    render() {
        return(
            <div className="weight">
                <BarChart
                width={500}
                height={300}
                data={this.state.activityData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" />
                <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            </div>
        );
    }
}

export default Weight;