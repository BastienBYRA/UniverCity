import React from "react";
import Iframe from "react-iframe";
import { useState } from "react";
import { send } from "emailjs-com";

import "./../App.css";

function ContactPage() {
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
    send("service_1moaqcg", "template_abb0hw4", toSend, "_V3LhgrfdjaGZwS3S")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22493.314440171223!2d0.6929318314757388!3d45.193891255354295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff7101944a0ee1%3A0xe0b3cf9e038ef785!2sP%C3%A9rigueux!5e0!3m2!1sfr!2sfr!4v1674642767179!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>
      <div class="container px-5 py-24 mx-auto flex text-center">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-3 font-medium title-font">
            Coordonnées de contacts
          </h2>
          <div className="flex flex-col align-center">
            <p className="mb-1">Téléphone : 06 00 00 00 00</p>
            <p className="mb-1">Mail : secretariat.campus@univercity.fr</p>
            <p className="mb-3">Adresse : Univercity</p>
          </div>
          <form onSubmit={onSubmit}>
          <div class="relative mb-4">
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="mail"
              value={toSend.mail}
              onChange={handleChange}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <input
              placeholder="Sujet"
              type="text"
              id="sujet"
              name="nom"
              value={toSend.nom}
              onChange={handleChange}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <textarea
              placeholder="Message"
              id="message"
              name="prenom"
              value={toSend.prenom}
              onChange={handleChange}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Envoyer
          </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
