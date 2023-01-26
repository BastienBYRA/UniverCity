import React from "react";
import CardWithLink from "../components/CardWithLink";
import entrepriseData from "../data/entreprisePageContent.json"


class EntreprisesPage extends React.Component {
    constructor(props) {
        super(props);
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
