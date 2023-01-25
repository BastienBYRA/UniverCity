import React from "react";
import TitleWithSubtext from "../components/TitleWithSubtext";
import descData from "../data/descriptionPageContent.json";

class DescriptionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mx-36 my-12">
        <h1 className="text-center text-3xl text-[#15191D] font-bold">
          Le Campus de UniverCity
        </h1>

        <div className="xl:mr-64 mt-12">
          {descData &&
            descData.map((data) => {
              return (
                <TitleWithSubtext
                  title={data.title}
                  description={data.description}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default DescriptionPage;
