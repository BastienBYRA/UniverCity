import React from "react";
import TitleWithSubtext from "../components/TitleWithSubtext";
import descData from "../data/descriptionPageContent.json"

class DescriptionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h1>Le Campus de UniverCity</h1>

            {descData && descData.map((data) => {
                return (
                    <TitleWithSubtext 
                        title={data.title}
                        description={data.description}
                    />
                )
            })}
        </div>
        )
    }
}

export default DescriptionPage;