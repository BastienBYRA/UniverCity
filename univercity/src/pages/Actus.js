import React from "react";
import TitleWithSubtext from "../components/TitleWithSubtext";
import actuData from "../data/actuPageContent.json"

class ActuPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="mx-36 mb-12">
            <h1 className="text-center text-5xl font-bold">Les news à UniverCity</h1>

            <div className="xl:mr-64 mt-12">
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