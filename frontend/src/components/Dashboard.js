import React from "react";
import Header from "./Header";
import Weight from "./Weight";
import Target from "./Target";
import RadarPerfo from "./RadarPerfo";
import Score from "./Score";
import NutrientGroup from "./NutrientGroup";

class Dashboard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="dashboard">
                <Header/>
                
                <Weight/>
                <div className="graph">
                    <Target/>
                    <RadarPerfo/>
                    <Score/>
                </div>
                <NutrientGroup/>
            </div>
        );
    }
}

export default Dashboard;