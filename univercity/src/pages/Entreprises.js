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

                <div className="mt-6 h-0.5 bg-slate-800"></div>

                <h3 className="mt-8 text-center text-xl font-bold">Pour nous rejoindre.</h3>

                <div className="mt-6 mb-6 md:mb-0 flex items-center">
                <form action="#" className="space-y-2 mx-auto w-96">
                    <div>
                    <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm
                            focus:outline-none focus:border-2 focus:border-[#CC0066] dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Nom de l'entreprise"
                        required
                        name="nom"
                    />
                    </div>
                    <div>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:outline-none focus:border-2 focus:border-[#CC0066] block w-full p-2.5 dark:bg-gray-700
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                        dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Email"
                        required
                        name="mail"
                    />
                    </div>
                    <div className="sm:col-span-2">
                    <textarea
                        id="message"
                        rows="2"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
                        border-gray-300 focus:outline-none focus:border-2 focus:border-[#CC0066] dark:bg-gray-700
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                        dark:focus:border-primary-500"
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="group mx-auto
                            py-3 text-sm font-medium
                            rounded-md text-white bg-[#CC0066] hover:bg-[#B8005C]
                            mb-8 uppercase w-full"
                    >
                    Envoyer
                    </button>
                </form>
                </div>
            </div>
        );
    }
}
export default EntreprisesPage;
