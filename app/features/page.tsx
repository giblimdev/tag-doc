export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-6xl mx-auto p-8 pb-20">
        {/* Titre de la page */}
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Fonctionnalités de{" "}
          <span className="text-blue-600">Tag Doc & Vidéo</span>
        </h1>

        {/* Section des fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte 1 : Taggage Précis */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Taggage Précis
            </h2>
            <p className="text-gray-700">
              Les tags (mots-clés) permettent de classifier les vidéos par
              thèmes, genres et sujets. Un taggage précis améliore la pertinence
              des résultats de recherche.
            </p>
          </div>

          {/* Carte 2 : Thématiques Variées */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Thématiques Variées
            </h2>
            <p className="text-gray-700">
              Le système organise les vidéos en catégories telles que
              Actualités, Divertissement, Éducation, Films, Musique, Nature,
              Sciences, Sport, Technologie, Voyages et Spiritualité.
            </p>
          </div>

          {/* Carte 3 : Évaluation de la Qualité */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Évaluation de la Qualité
            </h2>
            <p className="text-gray-700">
              Les vidéos sont évaluées sur des critères comme l'originalité, la
              pertinence, la fiabilité, la profondeur, la clarté et l'utilité.
              Une note objective est attribuée pour guider les utilisateurs.
            </p>
          </div>

          {/* Carte 4 : Rôle de la Communauté */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Rôle de la Communauté
            </h2>
            <p className="text-gray-700">
              Les utilisateurs contribuent au classement des vidéos via leurs
              interactions (vues, commentaires, partages). La communauté aide
              également à valider les tags et à modérer les contenus.
            </p>
          </div>

          {/* Carte 5 : Fiabilité des Informations */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Fiabilité des Informations
            </h2>
            <p className="text-gray-700">
              Les sources citées dans les vidéos sont évaluées pour leur
              crédibilité, vérifiabilité et diversité. Les arguments doivent
              être logiques, cohérents et exempts de sophismes.
            </p>
          </div>

          {/* Carte 6 : Structure de Données */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Structure de Données
            </h2>
            <p className="text-gray-700">
              Chaque vidéo est enregistrée avec des informations détaillées
              (titre, langue, thèmes, qualité, classement, nombre de vues,
              durée, etc.).
            </p>
          </div>
        </div>

        {/* Section de conclusion */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Pourquoi choisir Tag Doc & Vidéo ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Tag Doc & Vidéo</strong> combine intelligence artificielle
            et intelligence collective pour offrir une expérience utilisateur
            optimale. En classifiant, évaluant et indexant les contenus vidéo,
            ce système permet de découvrir des vidéos de qualité, tout en
            éliminant les contenus indésirables.
          </p>
        </div>
      </main>
    </div>
  );
}
