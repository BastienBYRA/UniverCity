import React from "react";
import { Link } from "react-router-dom";
import CardWithDesc from "../components/CardWithDesc";
import RowFormation from "../components/RowFormation";
import formationData from "../data/formationPageContent.json";

class FormationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-36 my-12">
        <h1 className="text-3xl text-[#15191D] mb-6 font-bold text-center">
          Nos Formations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 mx-56">
          {formationData &&
            formationData.map((formation) => {
              return (
                <CardWithDesc
                  title={formation.title}
                  img={formation.img}
                  desc={formation.descShort}
                />
              );
            })}
        </div>

        <div className="mt-12">
          {formationData &&
            formationData.map((formation) => {
              return (
                <RowFormation
                  _id={formation._id}
                  title={formation.title}
                  img={formation.img}
                  desc={formation.desc}
                  niveau={formation.niveau}
                  duration={formation.duration}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default FormationPage;
