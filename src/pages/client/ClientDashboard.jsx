import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { projetService } from '../../services/projetService';

const ProjetCard = ({ p }) => (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500">
        <div className="h-72 w-full bg-slate-100 relative overflow-hidden">
            {p.galerie && p.galerie.length > 0 && (
                <img
                    src={`http://127.0.0.1:8090/api/media/images/${p.galerie[0].id}`}
                    alt={p.titre}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-8">
            <div className="flex justify-between items-start mb-5">
                <div>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        p.statut === 'TERMINE' ? 'bg-green-50 text-green-700' :
                            p.statut === 'EN_COURS' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${p.statut === 'TERMINE' ? 'bg-green-500' : p.statut === 'EN_COURS' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>
                        {p.statut === 'EN_COURS' ? 'En cours' : p.statut === 'ETUDE' ? 'En étude' : 'Terminé'}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-950 mt-3">{p.titre}</h3>
                </div>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase border border-slate-100">
                    {p.nomCategorie}
                </span>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8 line-clamp-3">{p.description}</p>
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="text-lg">📍</span> {p.localisation}
                </div>
            </div>
        </div>
    </div>
);

const ClientDashboard = () => {
    const [projets, setProjets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showProjets, setShowProjets] = useState(false);

    useEffect(() => {
        const fetchProjets = async () => {
            try {
                const response = await projetService.getAccueil();
                setProjets(response.data);
            } catch (error) { console.error(error); } finally { setLoading(false); }
        };
        fetchProjets();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <div className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-100">
                <Navbar />
            </div>

            <div className="relative w-full h-[40vh] bg-blue-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Votre espace client</h1>
                    <p className="text-xl text-blue-100 max-w-xl font-medium">Suivi en temps réel de vos chantiers TIGER CONSTRUCTION.</p>
                </div>
            </div>

            <main className="flex-grow max-w-5xl mx-auto w-full px-6 md:px-12 -mt-24 relative z-10">
                {!showProjets ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-950 mb-3">Mes Projets</h2>
                                <p className="text-slate-600 mb-8">{loading ? "Chargement..." : `${projets.length} projet(s) en cours.`}</p>
                            </div>
                            <button onClick={() => setShowProjets(true)} className="w-full md:w-auto px-8 py-4 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">Consulter</button>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-950 mb-3">Support</h2>
                                <p className="text-slate-600 mb-8">Besoin d'assistance ? Nos experts sont à votre disposition.</p>
                            </div>
                            <Link to="/contact" className="inline-block text-center px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all">Contacter</Link>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <button onClick={() => setShowProjets(false)} className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-blue-300 transition-all shadow-sm">
                            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span> Retour
                        </button>
                        <div className="grid grid-cols-1 gap-8">
                            {projets.map((p, i) => <ProjetCard key={i} p={p} />)}
                        </div>
                    </div>
                )}
            </main>

            <footer className="bg-slate-950 text-white mt-24 py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">TIGER CONSTRUCTION</h2>
                        <div className="space-y-3 text-slate-400">
                            <p>📍 Yaoundé, Cameroun</p>
                            <p>📞 694 08 30 75 / 653 15 34 00</p>
                            <p>📧 josephdjako2016@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Nos Services</h3>
                        <ul className="text-sm text-slate-300 space-y-3">
                            {['Conception des plans', 'Dessin 2D/3D', 'Rendu vidéo', 'Calculs de structures', 'Réalisations', 'Suivi de chantiers', 'Rectifications', 'Conseils'].map((s, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-6">Expertise</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">Nous transformons vos idées en structures durables grâce à une expertise technique éprouvée.</p>
                        <Link to="/contact" className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors">Discutons de votre projet</Link>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-slate-600 text-xs">
                    © {new Date().getFullYear()} TIGER CONSTRUCTION - Tous droits réservés.
                </div>
            </footer>
        </div>
    );
};

export default ClientDashboard;