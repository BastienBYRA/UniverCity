import React from "react";
import CardWithLink from "../components/CardWithLink";
import entrepriseData from "../data/entreprisePageContent.json"


class EntreprisesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listEntreprises: null}
    }

    componentDidMount = () => {
        this.fetchFormation();
    };

    fetchFormation = async () => {
        await fetch(`http://152.228.210.58/api/companies/`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((responseJson)=> {
            this.setState({listEntreprises: responseJson.companies})
        })
        .catch(async (error) => {
            alert("Erreur, impossible de fetch la liste des entreprises")
        });
    }

    render() {
        return (
            <div className="mx-36 my-12">
                <h1 className="text-center text-3xl text-[#15191D] font-bold">Partenaires UniverCity</h1>

                <div className="flex mx-auto mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                        {entrepriseData && entrepriseData.map((data) => {
                            return (
                                <CardWithLink
                                    title={data.title}
                                    img={data.image}
                                    desc={data.description}
                                    lien={data.lien}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default EntreprisesPage;
