//npm i emailjs-com
import { useState } from "react";
import { send } from "emailjs-com";
import TitleWithSubtext from "../components/TitleWithSubtext";
import inscriptionData from "../data/inscriptionPageContent.json";

function Inscription() {
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
                alert('Votre demande a été envoyée !', response.status, response.text);
                document.location.href = "http://localhost:3000/";
            })
            .catch((err) => {
                alert('Erreur lors de l\'envoi du formulaire...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>


            <div className="index-head">
                <h1>Univercity</h1>
                <p>
                    Un avenir étudiant épanouissant,
                    <br />
                    une Cité universitaire révolutionnaire
                </p>
            </div>
            <div className="w-9/12 mx-auto mt-12 mb-12">
                {inscriptionData &&
                    inscriptionData.map((data) => {
                        return (
                            <TitleWithSubtext
                                title={data.title}
                                description={data.description}
                            />
                        );
                    })}
            </div>
            <div className="w-9/12 mx-auto text-[#373737] text-[15px]">
                <h1 className="text-3xl text-[#15191D] font-bold text-center mb-10">Inscrivez vous</h1>
                <form onSubmit={onSubmit} className="w-4/6 flex flex-col mx-auto" action="#" method="POST">
                    <div className="flex justify-around mb-4">
                        <input
                            type="text"
                            name="nom"
                            value={toSend.nom}
                            onChange={handleChange}
                            className="relative block
                                    px-3 py-2 border border-gray-300
                                    placeholder-gray-500 rounded-md
                                    focus:outline-none focus:border-2 focus:border-[#CC0066]
                                    focus:z-10"
                            placeholder="Nom"
                        />
                        <input
                            type="text"
                            name="prenom"
                            value={toSend.prenom}
                            onChange={handleChange}
                            className="relative block
                                    px-3 py-2 border border-gray-300
                                    placeholder-gray-500 rounded-md
                                    focus:outline-none focus:border-2 focus:border-[#CC0066]
                                    focus:z-10"
                            placeholder="Prenom"
                        />
                    </div>
                    <div className="flex justify-around mb-4">
                        <input
                            type="text"
                            name="login"
                            value={toSend.login}
                            onChange={handleChange}
                            className="relative block
                                    px-3 py-2 border border-gray-300
                                    placeholder-gray-500 rounded-md
                                    focus:outline-none focus:border-2 focus:border-[#CC0066]
                                    focus:z-10"
                            placeholder="Login"
                        />
                        <input
                            type="password"
                            name="password"
                            value={toSend.password}
                            onChange={handleChange}
                            className="relative block
                                    px-3 py-2 border border-gray-300
                                    placeholder-gray-500 rounded-md
                                    focus:outline-none focus:border-2 focus:border-[#CC0066]
                                    focus:z-10"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-around mb-4">
                        <input
                            type="email"
                            name="mail"
                            value={toSend.mail}
                            onChange={handleChange}
                            className="relative block
                                    px-3 py-2 border border-gray-300
                                    placeholder-gray-500 rounded-md
                                    focus:outline-none focus:border-2 focus:border-[#CC0066]
                                    focus:z-10"
                            placeholder="Email"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={toSend.phone}
                            onChange={handleChange}
                            className="relative block
                                    px-3 py-2 border border-gray-300
                                    placeholder-gray-500 rounded-md
                                    focus:outline-none focus:border-2 focus:border-[#CC0066]
                                    focus:z-10"
                            placeholder="Téléphone"
                        />
                    </div>
                    <button
                        type="submit"
                        className="group w-32 mx-auto
                        py-2 px-4 text-sm font-medium
                        rounded-md text-white bg-[#CC0066] hover:bg-[#B8005C]
                        mb-8 uppercase"
                    >
                        Valider
                    </button>
                </form>
            </div>
        </>
    )
        ;
}

export default Inscription;
