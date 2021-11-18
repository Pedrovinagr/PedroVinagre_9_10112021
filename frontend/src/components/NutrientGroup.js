import React from "react";
import axios from "axios";

import NutrientCard from "./NutrientCard";


class NutrientGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyData: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12").then(response => {
            this.setState({keyData: response.data.data.keyData});
            console.log(this.state.keyData)
        });
    }

    render() {

        return(
            <div>
                <NutrientCard type="Calories" value={this.state.keyData.calorieCount} />

                <NutrientCard type="Protéines" value={this.state.keyData.proteinCount} />

                <NutrientCard type="Glucides" value={this.state.keyData.carbohydrateCount} />

                <NutrientCard type="Lipides" value={this.state.keyData.lipidCount} />
            </div>
        );
    }
}

export default NutrientGroup;