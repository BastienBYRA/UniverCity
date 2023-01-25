import React from "react";
import Header from "../components/Header";
import TitleWithSubtext from "../components/TitleWithSubtext";
import descData from "../data/descriptionPageContent.json";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="index-head">
        <h1>Univercity</h1>
        <p>
          Un avenir étudiant épanouissant,
          <br />
          une Cité universitaire révolutionnaire
        </p>
        </div>
      </>
    );
  }
}

export default Banner;
