import React from "react";
import Header from "./Header";
import Weight from "./Weight";
import Target from "./Target";
import RadarPerfo from "./RadarPerfo";

class Dashboard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="dashboard">
                <Header/>
                <Weight/>
                <Target/>
                <RadarPerfo/>
            </div>
        );
    }
}

export default Dashboard;