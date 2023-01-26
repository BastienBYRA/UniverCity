import Banner from "../components/Banner";
import TitleWithSubtext from "../components/TitleWithSubtext";

const Mentions = () => {
  return (
    <div className="mb-8">
      <Banner />
      <h1 className="text-center text-3xl text-[#15191D] font-bold">
        Mentions légales
      </h1>
      <div className="w-9/12 mx-auto mt-12">
        <TitleWithSubtext
          title="Présentation du site"
          description="En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance 
          dans l’économie numérique, il est précisé aux utilisateurs du site www.univercity.com
          l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :

Propriétaire : Damien Guibol 
Créateur : Univercity
Responsable publication : Arthur Débridé – 07 67 07 05 60
Le responsable publication est une personne physique ou une personne morale.
Webmaster : Lucas Camou
Hébergeur : OVH
Credit : Boursorama"
        />
      </div>
    </div>
  );
};

export default Mentions;
