import React from "react";
import "./../App.css";
import { useState } from "react";
import { send } from "emailjs-com";

function Footer() {
  
  const [toSend, setToSend] = useState({
    nom: "",
    prenom: "",
    login: "",
    password: "",
    mail: "",
    phone: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_1moaqcg',
      'template_abb0hw4',
      toSend,
      '_V3LhgrfdjaGZwS3S'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
    return (
      <footer className="bg-gray-600 text-center text-white flex justify-center align-center">
        <div className="container p-6">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="flex flex-col align-center">
              <h5 className="font-medium mb-6 uppercase align-start">
                Contacts
              </h5>
              <div className="flex flex-col align-center">
                <p className="mb-1">Téléphone : 06 00 00 00 00</p>
                <p className="mb-1">Mail : secretariat.campus@univercity.fr</p>
                <p className="mb-1">Adresse : Univercity</p>
                <a
                    href="/mentions-legales"
                    className="text-gray-200 hover:text-[#CC0066] underline text-base w-fit mx-auto"
                >
                  Mentions légales
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
              <form onSubmit={onSubmit} action="#" className="space-y-2">
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
                    value={toSend.mail}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm
                      focus:outline-none focus:border-2 focus:border-[#CC0066] dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Sujet"
                    required
                    name="nom"
                    value={toSend.nom}
                    onChange={handleChange}
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
                    name="prenom"
                    value={toSend.prenom}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                    type="submit"
                    className="group w-28 mx-auto
                        py-3 text-sm font-medium
                        rounded-md text-white bg-[#CC0066] hover:bg-[#B8005C]
                        mb-8 uppercase"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
