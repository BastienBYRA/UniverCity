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
        <h2 className="font-semibold text-2xl">{this.title}</h2>
        <p className="text-gray-500">{this.description}</p>
      </div>
    );
  }
}

export default TitleWithSubtext;
