import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TitleWithSubtext from "../components/TitleWithSubtext";
import descData from "../data/descriptionPageContent.json";

class AccueilPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Banner />
        <div className="mb-8">
          <div className="campus-presentation flex flex-col">
            <h1 className="text-3xl text-[#15191D] mb-10 font-bold">Notre campus</h1>
            <div className="mx-auto bg-white w-9/12 p-2 shadow-xl">
              <p className="text-[#373737] text-[15px]">
                La Cité universitaire UniverCity est un lieu de vie et d'apprentissage
                exceptionnel, offrant un cadre de vie idéal pour les étudiants. Le
                campus se compose d'un parc d'attractions futuriste, des salles de
                sports, des gymnases, des piscines, des commerces et des logements
                étudiants à prix avantageux. Les étudiants peuvent bénéficier d'un
                système de points qui leur permet d'obtenir des réductions, de payer
                les transports en commun et de bénéficier d'autres avantages. Les
                étudiants peuvent également participer à des projets pour améliorer
                les conditions de vie dans la ville et avoir des possibilités de
                travailler dans la ville après les études.
              </p>
              <a href="/campus" className="text-[#373737] hover:text-[#CC0066] flex items-center justify-center mt-4">
                Voir plus
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="currentColor"
                     className="w-6 h-6 ml-2">
                  <path fill-rule="evenodd"
                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                        clip-rule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AccueilPage;
