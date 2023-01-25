import React from "react";
import './../App.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <footer className="bg-gray-600 text-center text-white flex justify-center align-center">
            <div className="container p-6">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-between align-center">
                        <h5 className="font-medium mb-2 uppercase align-start">Contacts</h5>
                        <div className="flex flex-col align-center">
                            <p className="mb-1">Téléphone : 06 00 00 00 00</p>
                            <p className="mb-1">Mail : secretariat.campus@univercity.fr</p>
                            <p className="mb-1">Adresse : Univercity</p>
                        </div>
                        <a href="/mentions-legales" className="block py-2 pl-3 text-gray-200 hover:text-rose-400 underline text-base align-end">Mentions légales</a>
                    </div>


                    <div className="mb-6 md:mb-0">

                        <form action="#" className="space-y-2">
                            <div>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
                            </div>
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Sujet" required />
                            </div>
                            <div className="sm:col-span-2">
                                <textarea id="message" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    }
}

export default Footer;