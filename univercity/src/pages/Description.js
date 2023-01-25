import React from "react";
import TitleWithSubtext from "../components/TitleWithSubtext";
import descData from "../data/descriptionPageContent.json"

class DescriptionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="mx-24 mb-12">
            <h1 className="text-center text-3xl font-bold text-rose-500">Le Campus de UniverCity</h1>

            <div>
                {descData && descData.map((data) => {
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

export default DescriptionPage;