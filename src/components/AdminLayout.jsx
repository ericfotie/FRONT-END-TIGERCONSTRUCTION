import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AdminLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/admin/messages', label: 'Messages Clients', icon: '✉️' },
        { path: '/admin/categories', label: 'Catégories', icon: '📂' },
        { path: '/admin/services', label: 'Services', icon: '🛠️' },
        { path: '/admin/projets', label: 'Projets Chantiers', icon: '🏗️' },
    ];

    const handleLogout = () => {
        // Nettoyage de l'état de sécurité
        localStorage.removeItem('isAdminAuthenticated');
        // Redirection vers le login
        navigate('/admin-login');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Fixe */}
                <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-6">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Menu Gestion</h2>
                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => {
                            const active = location.pathname.includes(item.path.split('/')[2]);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${
                                        active
                                            ? 'bg-blue-50 text-blue-900'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    <span>{item.icon}</span> {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bouton de déconnexion MD3 */}
                    <button
                        onClick={handleLogout}
                        className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 font-semibold hover:bg-red-50 transition-colors duration-200"
                    >
                        <span>🚪</span> Déconnexion
                    </button>
                </aside>

                {/* Contenu Principal */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        <header className="mb-8">
                            <h1 className="text-3xl font-extrabold text-slate-900">
                                Panneau <span className="text-blue-900">Tiger Construction</span>
                            </h1>
                            <p className="text-slate-500">Gérez vos activités en toute sérénité.</p>
                        </header>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[600px]">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;