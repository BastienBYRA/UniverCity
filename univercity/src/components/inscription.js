const Inscription = () => {
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
        <form>
          <div class="input-row">
            <div class="input-col">
              <label>Nom</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input type="text" name="nom" />
              </div>
            </div>
            <div class="input-col">
              <label>Prénom</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input type="text" name="prenom" />
              </div>
            </div>
          </div>
          <div class="input-row">
            <div class="input-col">
              <label>Login</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input type="text" name="login" />
              </div>
            </div>
            <div class="input-col">
              <label>Mot de passe</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input type="text" name="password" />
              </div>
            </div>
          </div>
          <div class="input-row">
            <div class="input-col">
              <label>Mail</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input type="mail" name="mail" />
              </div>
            </div>
            <div class="input-col">
              <label>Mobile</label>
              <div>
                <i class="fa fa-angle-right"></i>
                <input type="number" name="phone" />
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
};

export default Inscription;
