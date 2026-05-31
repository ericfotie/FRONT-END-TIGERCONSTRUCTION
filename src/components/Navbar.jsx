import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Style MD3 "Navigation Rail/Bar"
    const getLinkClass = (path) =>
        `flex items-center px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            location.pathname === path
                ? 'bg-blue-800 text-white shadow-sm ring-1 ring-blue-700'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`;

    return (
        <nav className="bg-blue-950 border-b border-white/10 shadow-lg px-6 py-3 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center font-bold text-blue-950 shadow-md transform group-hover:rotate-3 transition-transform">
                    T
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-lg tracking-wide uppercase leading-tight">
                        Tiger
                    </span>
                    <span className="text-slate-400 text-[10px] font-medium tracking-widest uppercase">
                        Construction
                    </span>
                </div>
            </Link>

            {/* Navigation Section */}
            <div className="flex items-center gap-2 bg-blue-900/30 p-1.5 rounded-full border border-white/5">
                <Link to="/" className={getLinkClass('/')}>
                    <span className="mr-2">🏠</span> Accueil
                </Link>

                {/* Nouveau lien Services ajouté ici */}
                <Link to="/services" className={getLinkClass('/services')}>
                    <span className="mr-2">🛠️</span> Services
                </Link>

                <Link to="/client" className={getLinkClass('/client')}>
                    <span className="mr-2">📊</span> Espace Client
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;