import React from "react";

class TitleWithSubtext extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.description = this.props.description;
    }
    render() {
        return (
        <div>
            <h2>{this.title}</h2>
            <p>{this.description}</p>
        </div>
        )
    }
}

export default TitleWithSubtext;