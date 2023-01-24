import React from "react";
import TitleWithSubtext from "../components/TitleWithSubtext";
import actuData from "../data/actuPageContent.json"

class ActuPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="mx-24 mb-12">
            <h1 className="text-center text-2xl font-bold my-12 underline">Les news à UniverCity</h1>

            <div>
                {actuData && actuData.map((data) => {
                    return (
                        <TitleWithSubtext 
                            title={data.title}
                            description={data.description}
                        />
                    )
                })}
            </div>
            
        </div>
        )
    }
}

export default ActuPage;