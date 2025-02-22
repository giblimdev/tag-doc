import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Présentation du Projet :{" "}
            <span className="text-blue-600">Tag Doc & Vidéo</span>
          </h1>
          <p className="text-xl text-gray-700">
            Un système intelligent pour classifier, évaluer et découvrir des
            vidéos de qualité.
          </p>
        </header>

        {/* Objective Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Objectif Général
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Le projet <strong>Tag Doc & Vidéo</strong> a pour mission de
            développer un système intelligent de classification, d'évaluation et
            d'indexation des contenus vidéo en ligne. Ce système vise à
            faciliter la découverte de vidéos de qualité, pertinentes et
            fiables, tout en éliminant les contenus indésirables ou
            propagandistes. L'objectif est de promouvoir une expérience
            utilisateur optimale en permettant une recherche rapide et efficace
            de contenus adaptés aux besoins de chacun.
          </p>
        </section>

        {/* Tagging Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            1. Le Taggage : La Clé de la Découverte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Précision et Pertinence
              </h3>
              <p className="text-gray-700">
                Les tags agissent comme des mots-clés qui permettent au système
                de recherche de comprendre le contenu d'une vidéo et de la
                proposer aux utilisateurs intéressés. Plus les tags sont précis
                et pertinents, plus les résultats de recherche seront
                pertinents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Organisation et Classification
              </h3>
              <p className="text-gray-700">
                Le taggage permet d'organiser et de classifier les vidéos par
                thématiques, genres, sujets, etc. Cela facilite la navigation et
                la découverte de contenus similaires. Les tags peuvent également
                être utilisés pour créer des catégories et des playlists.
              </p>
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            2. Thématiques Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Actualités : Reportages, analyses de l'actualité.",
              "Divertissement : Contenu amusant (sketchs, défis, etc.).",
              "Éducation : Tutoriels, cours en ligne, documentaires.",
              "Films : Bandes-annonces, critiques, making-of.",
              "Musique : Clips, concerts, tutoriels de musique.",
              "Nature : Documentaires animaliers, environnement.",
              "Sciences : Vulgarisation scientifique, expériences.",
              "Sport : Compétitions, entraînements, interviews.",
              "Technologie : Tests de produits, actualités tech.",
              "Voyages : Vlogs de voyage, guides, découvertes.",
              "Spiritualité : Méditation, réflexions philosophiques.",
            ].map((theme, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500"
              >
                <p className="text-gray-700">{theme}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            3. Qualité du Contenu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Critères d'Évaluation
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Originalité : La vidéo apporte-t-elle quelque chose de nouveau
                  ?
                </li>
                <li>
                  Pertinence : Le contenu est-il en adéquation avec le titre ?
                </li>
                <li>Fiabilité : Les informations sont-elles vérifiées ?</li>
                <li>Profondeur : Le sujet est-il traité en profondeur ?</li>
                <li>
                  Clarté : Le message est-il clair et facile à comprendre ?
                </li>
                <li>
                  Utilité : La vidéo est-elle divertissante ou éducative ?
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Impact de la Vidéo
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Émotion : Suscite-t-elle des émotions (joie, tristesse) ?
                </li>
                <li>Inspiration : Est-elle motivante ou inspirante ?</li>
                <li>Réflexion : Invite-t-elle à la réflexion ?</li>
                <li>
                  Apprentissage : Permet-elle d'apprendre quelque chose de
                  nouveau ?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            4. Le Rôle de la Communauté
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Contribution au Classement
              </h3>
              <p className="text-gray-700">
                Les utilisateurs peuvent visionner, commenter, partager et
                évaluer les vidéos. Ces interactions aident le système à
                déterminer la popularité et la pertinence des contenus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Validation et Modération
              </h3>
              <p className="text-gray-700">
                La communauté peut signaler les tags inappropriés et contribuer
                à la vérification des informations, améliorant ainsi la qualité
                du contenu.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Conclusion</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Tag Doc & Vidéo</strong> est un projet ambitieux qui combine
            intelligence artificielle et intelligence collective pour offrir une
            expérience utilisateur optimale. En classifiant, évaluant et
            indexant les contenus vidéo, ce système permet de découvrir des
            vidéos de qualité, tout en éliminant les contenus indésirables.
            Grâce à la participation active de la communauté, le projet vise à
            créer un écosystème de contenu fiable, pertinent et enrichissant.
          </p>
        </section>
      </main>
    </div>
  );
}
