import Banner from "../components/Banner";

const LeanCanvas = () => {
  return (
    <div className="mb-8">
      <Banner />
      <h1 className="text-center text-3xl text-[#15191D] font-bold">Notre Lean Canvas</h1>
      <table>
        <tr className="row">
          <td colSpan="2" rowSpan="2" className="align-top">
            <h2>4 - Solution</h2>
            <ul>
              <li>Meilleur cadre de vie pour les étudiants</li>
              <li>
                Facilite la venue à l'université grâce à sa structure pensée
                pour.
              </li>
              <li>Met en place des logements étudiant à prix avantageux.</li>
              <li>
                Pousse à l'excellence pour obtenir des points qui permettent
                d’obtenir différents avantages (réductions, payer les
                transports, etc…)
              </li>
            </ul>
          </td>
          <td colSpan="2" className="align-top">
            <h2>2 - Problèmes</h2>
            <ul>
              <li>Motivation des étudiants</li>
              <li>Temps de trajet</li>
              <li>Pas de récompense de travail</li>
            </ul>
          </td>
          <td colSpan="2" rowSpan="2" className="align-top">
            <h2>9 - Relation avec les utilisateurs</h2>
            <ul>
              <li>
                Créer une relation de confiance et transparence avec les
                utilisateurs en informant régulièrement des améliorations et en
                donnant la possibilité de donner leur avis
              </li>
              <li>
                Maintenir une communication ouverte et répondre rapidement aux
                demandes et préoccupations
              </li>
              <li>
                Relations avec les étudiants et les professeurs, et les
                commerçants locaux impliqués dans le système de points
              </li>
              <li>
                Maintenir et renforcer les relations existantes pour un meilleur
                fonctionnement de la Cité universitaire.
              </li>
              <li>
                Maintenir un réseau de partenaire avec les entreprises, elles
                parlent de nous, elle nous font de la promotion lors de leur
                conférence et notre cité lui proposera des étudiants comme
                stagiaires, alternants ou employés
              </li>
            </ul>
          </td>
          <td colSpan="2" className="align-top">
            <h2>3 - Proposition de valeur unique</h2>
            <p>
              Une cité autonome qui implique ses étudiants dans son
              fonctionnement
            </p>
          </td>
          <td colSpan="2" rowSpan="2" className="align-top">
            <h2>1 - Utilisateurs</h2>
            <ul>
              <li>Étudiants</li>
              <li>Futurs étudiants</li>
              <li>Professeurs</li>
              <li>Employés hors universitaire (Boulanger, Artisan ...)</li>
              <li>Entreprise</li>
            </ul>
            <h2 className="mt-8">1.1 - Beta utilisateurs</h2>
            <ul>
              <li>Étudiants</li>
              <li>Professeurs</li>
            </ul>
          </td>
        </tr>
        <tr className="row align-top">
          <td colSpan="2">
            <h2>6 - Indicateurs clés</h2>
            <ul>
              <li>20 000 étudiants</li>
              <li>666 professeurs</li>
              <li>206 Entreprises partenaires</li>
            </ul>
          </td>
          <td colSpan="2" className="align-top">
            <h2>5 - Stratégie d'adoption</h2>
            <p>
              Ville universitaire avec un système de points, propice à
              l’apprentissage avec des aménagements pour améliorer grandement la
              vie étudiante.
            </p>
          </td>
        </tr>
        <tr>
          <td colSpan="5" className="align-top">
            <h2>7 - Coûts</h2>
            <ul>
              <li>Construction + Entretien de la cité</li>
              <li>Matériel</li>
              <li>Salaire des professeurs</li>
              <li>Maintenance du campus en général</li>
              <li>Agents "municipaux"</li>
            </ul>
          </td>
          <td colSpan="5" className="align-top">
            <h2>8 - Sources de revenus</h2>
            <ul>
              <li>L'Etat</li>
              <li>Prix du campus pour chaque étudiant inscrit</li>
              <li>Prix du loyer</li>
              <li>Investissement des entreprises partenaires</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LeanCanvas;
