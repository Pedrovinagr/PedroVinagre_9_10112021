import React from "react";
import axios from "axios";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfos: null
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/user/12").then(response => {
            this.setState({userInfos: response.data.data.userInfos});
        });
    }

    render() {
        if(this.state.userInfos != null){
            return(
                <div className="Header">
                    <h1>Bonjour {this.state.userInfos.firstName}</h1>
                    <span>
                        Félicitations ! Vous avez explosé vos objectifs hier
                        !&nbsp;👏
                    </span>

                </div>
            );
        }else{
            return(
                <div>
                    <h1>Welcome !</h1>
                </div>
            );
        }
    }
}

export default Header;