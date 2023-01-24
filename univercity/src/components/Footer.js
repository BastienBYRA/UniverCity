import React from "react";
import './../App.css';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return <div className="footer">
            <div className="gauche">
                <p>Téléphone : 06 00 00 00 00</p>
                <p>Mail : secretariat.campus@univercity.fr</p>
                <p>Adresse : Univercity</p>

            </div>

            <div className="droite"></div>
        </div>;
    }
}

export default Footer;