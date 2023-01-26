import React from "react";
import CardWithDesc from "../components/CardWithDesc";
import actuData from "../data/actuPageContent.json"

class ActuPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-col mb-8">

                <div className="mt-8">
                    <h1 className="text-center text-3xl text-[#15191D] font-bold mb-6">
                        Les news à UniverCity
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 mx-20">
                        {actuData &&
                            actuData.map((actualite) => {
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