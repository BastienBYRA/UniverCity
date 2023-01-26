import React from "react";

class TitleWithSubtext extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.description = this.props.description;
  }
  render() {
    return (
      <div className="mt-5">
        <h2 className="font-medium text-2xl mb-5 text-[#CC0066] borderTitle">{this.title}</h2>
        <p className="text-[#373737] text-[15px]">{this.description}</p>
      </div>
    );
  }
}

export default TitleWithSubtext;
