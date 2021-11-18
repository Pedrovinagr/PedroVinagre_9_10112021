import React from "react";
// import Header from "./Header";
// import Weight from "./Weight";
// import Target from "./Target";
// import RadarPerfo from "./RadarPerfo";
// import Score from "./Score";
import NutrientGroup from "./NutrientGroup";

class Dashboard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="dashboard">
                {/* <Header/>
                <Weight/>
                <Target/>
                <RadarPerfo/>
                <Score/> */}
                <NutrientGroup/>
            </div>
        );
    }
}

export default Dashboard;