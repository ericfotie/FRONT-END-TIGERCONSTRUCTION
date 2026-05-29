const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Info Entreprise */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-500 mb-4">TIGER CONSTRUCTION</h2>
                    <p className="mb-2 font-medium">📍 { "Yaoundé, Cameroun" }</p>
                    <p className="text-slate-400">📞 { "694 08 30 75 / 653 15 34 00" }</p>
                    <p className="text-slate-400">📧 { "josephdjako2016@gmail.com" }</p>
                    <p className="mt-4 font-bold text-blue-400">Dirigé par : Joseph Djako</p>
                </div>

                {/* Nos Services */}
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2">Nos Services</h3>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li>1- Conception des plans</li>
                        <li>2- Dessin 2D et 3D des plans</li>
                        <li>3- Rendu vidéo externe et interne</li>
                        <li>4- Calculs des structures</li>
                        <li>5- Réalisations des structures</li>
                        <li>6- Suivi des chantiers</li>
                        <li>7- Rectification des structures échouées</li>
                        <li>8- Conseils</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h3 className="text-xl font-bold mb-4">Besoin d'expertise ?</h3>
                    <p className="text-slate-400 mb-6">Nous accompagnons vos projets de la conception à la réalisation.</p>
                    <a href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition">
                        Nous contacter
                    </a>
                </div>
            </div>
            <div className="text-center mt-12 text-slate-600 text-xs border-t border-slate-800 pt-6">
                © {new Date().getFullYear()} TIGER CONSTRUCTION - Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;