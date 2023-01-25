//npm i emailjs-com
import { useState } from "react";
import { send } from "emailjs-com";

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
    <>
      <div class="index-head">
        <h1>Univercity</h1>
        <p>
          Un avenir étudiant épanouissant,
          <br />
          une Cité universitaire révolutionnaire
        </p>
      </div>
      <div class="inscription-body">
        <ul>
          <li>
            <strong>Opportunités d'enseignement :</strong> Les professeurs ont
            la possibilité d'enseigner à une population diversifiée d'étudiants,
            ce qui peut offrir des défis et des opportunités d'enseignement
            passionnants.
          </li>
          <li>
            <strong>Recherche et développement :</strong> Les professeurs
            peuvent avoir accès à des installations de recherche de pointe et à
            des partenariats avec des entreprises et des organisations qui
            peuvent les aider à mener des recherches de haut niveau et à
            développer leur carrière professionnelle.
          </li>
          <li>
            <strong>Ressources pour l'enseignement :</strong> Les professeurs
            peuvent avoir accès à des ressources pédagogiques et technologiques
            pour améliorer leur enseignement et leur rendre plus efficace.
          </li>
          <li>
            <strong>
              Possibilité de participer à des projets de développement de la
              ville :
            </strong>{" "}
            Les professeurs peuvent participer à des projets pour améliorer les
            conditions de vie dans la ville, et ainsi contribuer à la
            communauté.
          </li>
          <li>
            <strong>Ambiance de travail agréable :</strong> Les professeurs
            peuvent bénéficier d'un environnement de travail stimulant et
            collaboratif, avec des collègues et des étudiants passionnés.
          </li>
        </ul>
        <h2>Inscrivez vous</h2>
        <form onSubmit={onSubmit}>
          <div class="input-row">
            <div class="input-col">
              <label>Nom</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input
                  type="text"
                  name="nom"
                  value={toSend.nom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="input-col">
              <label>Prénom</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input
                  type="text"
                  name="prenom"
                  value={toSend.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="input-row">
            <div class="input-col">
              <label>Login</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input
                  type="text"
                  name="login"
                  value={toSend.login}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="input-col">
              <label>Mot de passe</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input
                  type="text"
                  name="password"
                  value={toSend.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="input-row">
            <div class="input-col">
              <label>Mail</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input
                  type="mail"
                  name="mail"
                  value={toSend.mail}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="input-col">
              <label>Mobile</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input
                  type="number"
                  name="phone"
                  value={toSend.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="envoie">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Inscription;
