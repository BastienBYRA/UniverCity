import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import TitleWithSubtext from "../components/TitleWithSubtext";
// import formationData from "../data/formationPageContent.json";
import { HashLink } from "react-router-hash-link";

class AccueilPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listFormation: null };
  }

  componentDidMount = () => {
    this.fetchFormation();
  };

  fetchFormation = async () => {
    await fetch(`http://152.228.210.58/api/formations/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((responseJson) => {
        this.setState({ listFormation: responseJson.formations });
      })
      .catch(async (error) => {
        alert("Erreur, impossible de fetch la liste des formations");
      });
  };

  render() {
    return (
      <>
        <Banner />
        <div className="mx-12 sm:mx-24 xl:mx-36">
          <div className="campus-presentation flex flex-col">
            <h1 className="text-3xl text-[#15191D] mb-10 font-bold">
              Notre campus
            </h1>
            <div className="md:mx-12 lg:mx-24 bg-white p-2 shadow-xl">
              <p className="text-[#373737] text-[15px]">
                La Cité universitaire UniverCity est un lieu de vie et
                d'apprentissage exceptionnel, offrant un cadre de vie idéal pour
                les étudiants. Le campus se compose d'un parc d'attractions
                futuriste, des salles de sports, des gymnases, des piscines, des
                commerces et des logements étudiants à prix avantageux. Les
                étudiants peuvent bénéficier d'un système de points qui leur
                permet d'obtenir des réductions, de payer les transports en
                commun et de bénéficier d'autres avantages. Les étudiants
                peuvent également participer à des projets pour améliorer les
                conditions de vie dans la ville et avoir des possibilités de
                travailler dans la ville après les études.
              </p>
              <a
                href="/description"
                className="text-[#373737] hover:text-[#CC0066] flex items-center justify-center mt-4"
              >
                Voir plus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 20"
                  fill="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="mt-24 mb-12">
              <h1 className="text-3xl text-[#15191D] font-bold">
                Nos formations
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
                {this.state.listFormation &&
                  this.state.listFormation.map((formation) => {
                    return (
                      <HashLink smooth to={"formation#" + formation._id}>
                        <Card title={formation.title} img={formation.img} />
                      </HashLink>
                    );
                  })}
              </div>

              <Link
                className="flex items-center justify-center mx-auto w-[10%] min-w-[150px] border border-black py-2 px-6 rounded-md hover:bg-neutral-100 duration-200 hover:text-[#CC0066] hover:border-[#CC0066]"
                to="/formation"
              >
                Voir plus
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AccueilPage;
