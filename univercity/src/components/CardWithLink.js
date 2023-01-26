import React from "react";
import {Link} from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import TitleWithSubtext from "./TitleWithSubtext";
import descData from "../data/descriptionPageContent.json";

class CardWithLink extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.img = this.props.img;
        this.desc = this.props.desc;
        this.lien = this.props.lien;
    }

    render() {
        return (
            <div className="group rounded-lg shadow-xl hover:shadow-2xl duration-300">
                <img className="rounded-t-lg aspect-video object-fill w-full" src={this.img} alt={this.title}/>
                <p className="text-center my-4 text-[#373737] text-[15px] py-2 px-4 group-hover:text-[#CC0066]">{this.desc}</p>
            </div>
        );
    }
}

export default CardWithLink;
