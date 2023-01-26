import React from "react";

class RowFormation extends React.Component {
  constructor(props) {
    super(props);
    this._id = this.props._id;
    this.title = this.props.title;
    this.img = this.props.img;
    this.desc = this.props.desc;
    this.duration = this.props.duration;
    this.niveau = this.props.niveau;
  }

  render() {
    return (
      <div className="mt-6 text-[#373737] text-[15px]" id={this._id}>
        <div className="flex flex-row items-center justify-between flex-wrap">
          <p className="text-[#CC0066] text-2xl">{this.title}</p>
          <div className="flex flex-row gap-2 items-end">
            <p className="text-2xl">🕗</p>
            <p>{this.duration}</p>
          </div>
          <div className="flex flex-row gap-2 items-end">
            <p className="text-2xl">🎓</p>
            <p>{this.niveau}</p>
          </div>
        </div>

        <div className="h-1 bg-black mb-4"></div>

        <div className="md:flex flex-row">
          <img src={this.img} className="w-56 object-cover max-h-[150px]" />
          <div>
            <p className="mt-3 md:mt-0 md:ml-8 md:mr-6">{this.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RowFormation;
