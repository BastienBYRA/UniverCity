import React from "react";

class TitleWithSubtextandImage extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.description = this.props.description;
    this.image = this.props.image
  }
  render() {
    return (
      <div className="group rounded-lg shadow-lg hover:shadow-2xl duration-300 hover:scale-105">
        <h2 className="font-medium text-2xl text mb-1 text-[#CC0066]">{this.title}</h2>
        {/* <img
            className="rounded-t-lg aspect-video object-fill"
            src={this.image}
        /> */}
        <p className="group-hover:text-[#CC0066] text-center my-4 text-lg">{this.description}</p>                     
      </div>
    );
  }
}

export default TitleWithSubtextandImage;
