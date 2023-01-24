import React from "react";
import './../App.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // return <div className="footer">
        //     <div className="gauche">
        //         <p>Téléphone : 06 00 00 00 00</p>
        //         <p>Mail : secretariat.campus@univercity.fr</p>
        //         <p>Adresse : Univercity</p>
        //         <a href="/mentions-legales" className="block py-2 pl-3 text-gray-200 hover:text-white underline text-base">Mentions légales</a>

        //     </div>

        //     <div className="droite"></div>


        // </div>;

        return <footer className="bg-gray-600 text-center lg:text-left text-white">
            <div className="container p-6">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="mb-6 md:mb-0 ">
                        <h5 className="font-medium mb-2 uppercase">Informations</h5>

                        <p className="mb-1">Téléphone : 06 00 00 00 00</p>
                        <p className="mb-1">Mail : secretariat.campus@univercity.fr</p>
                        <p className="mb-1">Adresse : Univercity</p>
                        <a href="#"
                            className="block py-2 pl-3 text-gray-200 hover:text-rose-400 underline text-base"
                            aria-current="page">Mentions légales</a>

                    </div>

                    <div className="mb-6 md:mb-0">
                        <h5 className="font-medium mb-2 uppercase">Contacts</h5>

                        {/* <form action="#" class="space-y-8">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </footer>
    }
}

export default Footer;