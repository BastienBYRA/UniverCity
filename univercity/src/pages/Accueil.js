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
        <div className="campus-presentation">
          <h1 className="text-3xl text-rose-500 mb-10 font-bold">
            Notre campus
          </h1>
          <p>
            La Cité universitaire UniverCity est un lieu de vie et
            d'apprentissage exceptionnel, offrant un cadre de vie idéal pour les
            étudiants. Le campus se compose d'un parc d'attractions futuriste,
            des salles de sports, des gymnases, des piscines, des commerces et
            des logements étudiants à prix avantageux. Les étudiants peuvent
            bénéficier d'un système de points qui leur permet d'obtenir des
            réductions, de payer les transports en commun et de bénéficier
            d'autres avantages. Les étudiants peuvent également participer à des
            projets pour améliorer les conditions de vie dans la ville et avoir
            des possibilités de travailler dans la ville après les études.
          </p>
          <a href="/campus">Voir plus</a>
        </div>
      </>
    );
  }
}

export default AccueilPage;
