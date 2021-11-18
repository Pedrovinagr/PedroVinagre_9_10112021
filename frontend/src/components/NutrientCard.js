import React from "react";
// import axios from "axios";
// import NutrientGroup from "./NutrientGroup";

import Calorie from "../assets/Calorie.png";
import Carbohydrate from "../assets/Carbohydrate.png";
import Protein from "../assets/Protein.png";
import Lipid from "../assets/Lipid.png";

class NutrientCard extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userInfos: null
    //     }
    // }

    componentDidMount() {
        // axios.get("http://localhost:3001/user/12").then(response => {
        //     this.setState({userInfos: response.data.data.userInfos});
        // });
    }

    render() {
        const ICON_BY_TYPE = {
            Calories: Calorie,
            Glucides: Carbohydrate,
            Protéines: Protein,
            Lipides: Lipid,
          };
          
          const UNIT_BY_TYPE = {
            Calories: "kCal",
            Glucides: "g",
            Protéines: "g",
            Lipides: "g",
          };

        return(
            <div>
                <img src={ICON_BY_TYPE[this.props.type]} alt={this.props.type} width="60" height="60" />
                {this.props.value}
                {UNIT_BY_TYPE[this.props.type]}
            </div>
        );
    }
}

export default NutrientCard;