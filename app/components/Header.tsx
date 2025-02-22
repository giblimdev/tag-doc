import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/logo.png" // Remplacez par le chemin de votre logo
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-xl font-bold text-blue-900">
                  Tag Doc & Vidéo
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              À Propos
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Fonctionnalités
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Bouton d'action */}
          <div className="flex items-center">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Se Connecter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
