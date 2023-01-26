import React from "react";
import CardWithDesc from "../components/CardWithDesc";
import actuData from "../data/actuPageContent.json";

class ActuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listActus: null };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.fetchActus();
  };

  fetchActus = async () => {
    await fetch(`http://152.228.210.58/api/events/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((responseJson) => {
        this.setState({ listActus: responseJson.events });
      })
      .catch(async (error) => {
        alert("Erreur, impossible de fetch la liste des formations");
      });
  };

  render() {
    return (
      <div className="flex flex-col mb-8">
        <div className="mt-8">
          <h1 className="text-center text-3xl text-[#15191D] font-bold mb-6">
            Les news à UniverCity
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 mx-8 sm:mx-20">
            {this.state.listActus &&
              this.state.listActus.map((actualite) => {
                return (
                  <CardWithDesc
                    title={actualite.title}
                    img={actualite.image}
                    desc={actualite.description}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );

    // )
  }
}

export default ActuPage;
