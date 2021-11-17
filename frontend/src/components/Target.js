import React from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class Target extends React.Component {

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

    render() {
        
        return(
            <div className="Target">
                <LineChart
                width={500}
                height={300}
                data={this.state.averageData}
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
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div> 
        );
    }
}

export default Target;