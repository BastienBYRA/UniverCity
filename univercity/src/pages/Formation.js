import React from "react";
import CardWithDesc from "../components/CardWithDesc";
import RowFormation from "../components/RowFormation";

class FormationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listFormation: null}
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.fetchFormation();
  };

  fetchFormation = async () => {
    await fetch(process.env.REACT_APP_API_URL + `/formations`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((responseJson) => {
        this.setState({listFormation : responseJson.formations})
      })
      .catch(async (error) => {
        alert("Erreur, impossible de fetch la liste des formations")
      });
  }

  render() {
    return (
      <div className="mx-36 my-12">
        <h1 className="text-3xl text-[#15191D] mb-6 font-bold text-center">
          Nos Formations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 mx-6 xl:mx-24 2xl:mx-56">
          {this.state.listFormation &&
            this.state.listFormation.map((formation) => {
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
          {this.state.listFormation &&
            this.state.listFormation.map((formation) => {
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
