import React from "react";
import { Link } from "react-router-dom";
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
        <h2 className="group-hover:text-[#CC0066] text-center my-4 font-semibold text-lg mb-1">
          {this.title}
        </h2>
        <img className="rounded-t-lg aspect-video object-fill w-full" src={this.img} alt={this.title}/>
        <p className="text-center my-4 text-[#373737] text-[15px] py-2 px-4">{this.desc}</p>
        <a href={this.lien} className="text-center text-[#636363] hover:text-[#CC0066] no-underline p-2" target="_blank">Pour plus d'information</a>
      </div>
    );
  }
}

export default CardWithLink;
