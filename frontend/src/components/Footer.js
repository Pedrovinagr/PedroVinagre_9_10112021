import React from "react";
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

class Footer extends React.Component {

    render() {
    
        return(
            <div className='footer'>
                <div className='nav_sport'>
                    <img src={icon1} alt='yoga' className='icon yoga'/>
                    <img src={icon2} alt='yoga' className='icon swimming'/>
                    <img src={icon3} alt='yoga' className='icon cycling'/>
                    <img src={icon4} alt='yoga' className='icon bodybuilding'/>
                </div>
                <p className='copyright'> Copiryght, SportSee 2020 </p>
            </div>
        );
    }
}

export default Footer;