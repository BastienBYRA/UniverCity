import React from "react";
import CardWithDesc from "../components/CardWithDesc";
import entrepriseData from "../data/entreprisePageContent.json"


class EntreprisesPage extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="mx-36 my-12">
        <h1 className="text-center text-3xl text-[#15191D] font-bold">
          Entreprise, coopérons et créons un nouveau monde
        </h1>

                <div className="xl:mr-64 mt-12">
                    <h1 className="text-center text-3xl text">
                        Voici la liste de tous nos partenariats sur UniverCity.
                        Pourqoui pas nous rejoindre dans ce cas.
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 my-12">
                        {entrepriseData && entrepriseData.map((data) => {
                            return (
                                <CardWithDesc
                                    title={data.title}
                                    img={data.image}
                                    desc={data.description}
                                />
                            );
                        })};
                    </div>
                </div>
            </div>
        );
    }
}
export default EntreprisesPage;
