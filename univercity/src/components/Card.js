import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.img = this.props.img;
  }

  render() {
    return (
      <div className="group rounded-lg shadow-lg hover:shadow-2xl duration-300 hover:scale-105">
        <img
          className="rounded-t-lg aspect-video object-fill "
          src={this.img}
        />
        <p className="group-hover:text-[#CC0066] text-center my-4 text-lg">
          {this.title}
        </p>
      </div>
    );
  }
}

export default Card;
