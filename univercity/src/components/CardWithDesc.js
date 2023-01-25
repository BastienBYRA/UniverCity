import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import TitleWithSubtext from "./TitleWithSubtext";
import descData from "../data/descriptionPageContent.json";

class CardWithDesc extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.img = this.props.img;
    this.desc = this.props.desc;
  }

  render() {
    return (
      <div className="group rounded-lg shadow-lg hover:shadow-2xl duration-300">
        <p className="group-hover:text-[#CC0066] text-center my-4 text-lg">
          {this.title}
        </p>
        <img className="rounded-t-lg aspect-video object-fill" src={this.img} />
        <p className="text-center my-4 text-lg py-2 px-4">{this.desc}</p>
      </div>
    );
  }
}

export default CardWithDesc;
