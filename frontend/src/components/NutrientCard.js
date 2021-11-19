import React from "react";

import Calorie from "../assets/Calorie.png";
import Carbohydrate from "../assets/Carbohydrate.png";
import Protein from "../assets/Protein.png";
import Lipid from "../assets/Lipid.png";

class NutrientCard extends React.Component {

    render() {
        const iconType = {
            Calories: Calorie,
            Glucides: Carbohydrate,
            Protéines: Protein,
            Lipides: Lipid,
          };
          
          const unitType = {
            Calories: "kCal",
            Glucides: "g",
            Protéines: "g",
            Lipides: "g",
          };

          const categoryType = {
            Calories: "Calories",
            Glucides: "Glucides",
            Protéines: "Protéines",
            Lipides: "Lipides",
          };


        return(
            <div className="nutrient_element">
                <img src={iconType[this.props.type]} alt={this.props.type} width="60" height="60" />
                <p className="nutrient_value">
                    {this.props.value}
                    {unitType[this.props.type]}
                    <span className="nutrient_category"> {categoryType[this.props.type]} </span>
                </p>
                
            </div>
        );
    }
}

export default NutrientCard;