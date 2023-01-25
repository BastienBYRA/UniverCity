//npm i emailjs-com
import {useState} from "react";
import {send} from "emailjs-com";

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
                document.location.href="http://localhost:3000/";
            })
            .catch((err) => {
                alert('Erreur lors de l\'envoi du formulaire...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return (
        <>
            <div className="index-head">
                <h1>Univercity</h1>
                <p>
                    Un avenir étudiant épanouissant,
                    <br/>
                    une Cité universitaire révolutionnaire
                </p>
            </div>
            <div className="w-9/12 mx-auto text-[#373737] text-[15px]">
                <ul className="mb-16">
                    <li className="mb-3">
                        <h2 className="font-medium text-2xl mb-1 text-[#CC0066]">Opportunités d'enseignement :</h2>
                        Les professeurs ont la possibilité d'enseigner à une population diversifiée d'étudiants,
                        ce qui peut offrir des défis et des opportunités d'enseignement
                        passionnants.
                    </li>
                    <li className="mb-3">
                        <h2 className="font-medium text-2xl mb-1 text-[#CC0066]">Recherche et développement :</h2>
                        Les professeurs peuvent avoir accès à des installations de recherche de pointe et à
                        des partenariats avec des entreprises et des organisations qui
                        peuvent les aider à mener des recherches de haut niveau et à
                        développer leur carrière professionnelle.
                    </li>
                    <li className="mb-3">
                        <h2 className="font-medium text-2xl mb-1 text-[#CC0066]">Ressources pour l'enseignement :</h2>
                        Les professeurs peuvent avoir accès à des ressources pédagogiques et technologiques
                        pour améliorer leur enseignement et leur rendre plus efficace.
                    </li>
                    <li className="mb-3">
                        <h2 className="font-medium text-2xl mb-1 text-[#CC0066]">
                            Possibilité de participer à des projets de développement de la
                            ville :
                        </h2>{" "}
                        Les professeurs peuvent participer à des projets pour améliorer les
                        conditions de vie dans la ville, et ainsi contribuer à la
                        communauté.
                    </li>
                    <li>
                        <h2 className="font-medium text-2xl mb-1 text-[#CC0066]">Ambiance de travail agréable :</h2>
                        Les professeurs peuvent bénéficier d'un environnement de travail stimulant et
                        collaboratif, avec des collègues et des étudiants passionnés.
                    </li>
                </ul>
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
