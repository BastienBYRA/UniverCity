import React from "react";
import { Link } from "react-router-dom";
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
        <div className="mx-36">
          <div className="campus-presentation my-6">
            <h1 className="text-5xl mb-10 font-bold">Notre campus</h1>
            <p>
              La Cité universitaire UniverCity est un lieu de vie et
              d'apprentissage exceptionnel, offrant un cadre de vie idéal pour
              les étudiants. Le campus se compose d'un parc d'attractions
              futuriste, des salles de sports, des gymnases, des piscines, des
              commerces et des logements étudiants à prix avantageux. Les
              étudiants peuvent bénéficier d'un système de points qui leur
              permet d'obtenir des réductions, de payer les transports en commun
              et de bénéficier d'autres avantages. Les étudiants peuvent
              également participer à des projets pour améliorer les conditions
              de vie dans la ville et avoir des possibilités de travailler dans
              la ville après les études.
            </p>
            <a href="/campus">Voir plus</a>
          </div>

          <div className="mt-24 mb-12">
            <h1 className="text-5xl mb-10 font-bold text-center">
              Nos formations
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 my-12">
              <div className="rounded-lg shadow-lg hover:shadow-2xl duration-300 hover:scale-110">
                <img
                  className="rounded-t-lg aspect-video object-fill"
                  src="https://asset.lemde.fr/prd-blogs/2020/07/48b7729e-ezgif.com-webp-to-jpg.jpg"
                />
                <p className="text-center my-4 text-lg">Informatique</p>
              </div>
              <div className="rounded-lg shadow-lg hover:shadow-2xl duration-300 hover:scale-110">
                <img
                  className="rounded-t-lg aspect-video object-fill "
                  src="https://www.iut-brest.fr/wp-content/uploads/2019/08/IUT-BREST_GMP-4-1200x801.jpg"
                />
                <p className="text-center my-4 text-lg">Mécanique</p>
              </div>
              <div className="rounded-lg shadow-lg hover:shadow-2xl duration-300 hover:scale-110">
                <img
                  className="rounded-t-lg aspect-video object-fill"
                  src="https://master-alfacentre.alfacentre.org/sites/default/files/media/FM/images_ROME/i_rome_K2402.jpg"
                />
                <p className="text-center my-4 text-lg">Biologie</p>
              </div>
            </div>

            <Link
              className="flex items-center justify-center mx-auto w-[10%] border border-black py-2 px-6 rounded-md hover:bg-neutral-100 duration-200"
              to="/formations"
            >
              Voir plus
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default AccueilPage;
