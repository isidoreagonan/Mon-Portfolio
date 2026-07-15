import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  
  let pathname = '/';
  let navigate: any = null;
  try {
    pathname = useRouterState({ select: (s) => s.location.pathname });
    navigate = useNavigate();
  } catch {
    pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  }
  const isHome = pathname === '/' || pathname === '';

  type NavLink = { id: string; name: string; kind: 'anchor' | 'route'; to?: string };
  const navLinks: NavLink[] = [
    { id: 'accueil', name: 'Accueil', kind: 'anchor' },
    { id: 'services', name: 'Pour qui ?', kind: 'anchor' },
    { id: 'projets', name: 'Réalisations', kind: 'anchor' },
    { id: 'mon-histoire', name: 'Mon Histoire', kind: 'route', to: '/mon-histoire' },
    { id: 'audit', name: 'Votre Stratégie', kind: 'anchor' },
    { id: 'contact', name: 'Contact', kind: 'anchor' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHome) {
        const scrollPosition = window.scrollY + 120;
        for (const link of navLinks) {
          if (link.kind === 'anchor') {
            const el = document.getElementById(link.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(link.id);
              }
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (isHome && typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          const offset = hashId === 'accueil' ? 0 : 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
          setActiveSection(hashId);
        }
      }, 150);
    }
  }, [isHome, pathname]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (!isHome) {
      if (navigate) {
        if (id === 'accueil') {
          navigate({ to: '/' });
        } else {
          navigate({ to: '/', hash: id });
        }
      } else {
        window.location.assign(id === 'accueil' ? '/' : `/#${id}`);
      }
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'accueil' ? 0 : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
      setActiveSection(id);
    } else if (id === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('accueil');
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out pointer-events-auto glassmorphism ${
        scrolled
          ? 'py-3 shadow-2xl shadow-brand-emerald/10 border-b border-brand-emerald/40 backdrop-blur-2xl'
          : 'py-5 shadow-lg shadow-black/60 border-b border-white/10'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo - Complètement à gauche et clique = recharge le site */}
        <a
          id="nav-logo"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            window.location.href = '/';
          }}
          className="flex items-center space-x-3 group shrink-0"
        >
          <div className="w-10 h-10 bg-brand-emerald rounded-none flex items-center justify-center font-black text-black text-base shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-300">
            AIA
          </div>
          <span className="text-sm font-bold tracking-tight uppercase text-white group-hover:text-brand-emerald transition-colors">
            Agonan Isidore Abraham
          </span>
        </a>

        {/* Desktop navigation - Centré au milieu */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          {navLinks.map((link) => {
            const isActive =
              link.kind === 'route' ? pathname === link.to : isHome && activeSection === link.id;
            const className = `text-xs font-mono uppercase tracking-widest transition-all duration-300 relative px-3 py-1.5 rounded-none ${
              isActive
                ? 'text-brand-emerald font-bold bg-brand-emerald/10 shadow-[inset_0_0_12px_rgba(16,185,129,0.2)] border border-brand-emerald/30'
                : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`;

            if (link.kind === 'route') {
              return (
                <Link
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  to={link.to!}
                  onClick={() => setIsOpen(false)}
                  className={className}
                >
                  {link.name}
                </Link>
              );
            }

            if (!isHome) {
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.id === 'accueil' ? '/' : `/#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    window.location.href = link.id === 'accueil' ? '/' : `/#${link.id}`;
                  }}
                  className={className}
                >
                  {link.name}
                </a>
              );
            }

            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={className}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Bouton COLLABORER + Hamburger - Complètement à droite */}
        <div className="flex items-center space-x-4 shrink-0">
          {isHome ? (
            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest bg-transparent border border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-black transition-all duration-300 group shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            >
              <span>Collaborer</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <Link
              id="nav-cta-btn"
              to="/"
              hash="contact"
              onClick={() => setIsOpen(false)}
              className="hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-none text-xs font-mono uppercase tracking-widest bg-transparent border border-brand-emerald text-brand-emerald hover:bg-brand-emerald hover:text-black transition-all duration-300 group shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            >
              <span>Collaborer</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-none text-zinc-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center border border-white/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 right-0 w-full max-w-sm glassmorphism border-l border-white/10 z-50 p-8 flex flex-col justify-between transform transition-transform duration-500 lg:hidden rounded-none ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-2 font-display font-bold text-lg">
              <div className="w-8 h-8 rounded-none bg-brand-emerald flex items-center justify-center text-black font-bold text-xs">
                AIA
              </div>
              <span className="text-white font-mono text-sm tracking-widest uppercase">AGONAN I.A.</span>
            </div>
            <button
              id="mobile-menu-close"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-none text-zinc-400 hover:text-white hover:bg-white/5 transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => {
              const isActive =
                link.kind === 'route' ? pathname === link.to : isHome && activeSection === link.id;
              const className = `text-sm font-mono uppercase tracking-widest transition-all duration-300 px-4 py-3 border flex items-center ${
                isActive
                  ? 'text-brand-emerald font-bold bg-brand-emerald/10 border-brand-emerald/30 shadow-[inset_0_0_12px_rgba(16,185,129,0.2)]'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5 border-transparent'
              }`;

              if (link.kind === 'route') {
                return (
                  <Link
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    to={link.to!}
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    <span className="text-brand-emerald mr-4 opacity-50">0{index + 1}</span>
                    {link.name}
                  </Link>
                );
              }

              return (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.id === 'accueil' ? '/' : `/#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (isHome) {
                      handleScrollTo(e, link.id);
                    } else {
                      window.location.href = link.id === 'accueil' ? '/' : `/#${link.id}`;
                    }
                  }}
                  className={className}
                >
                  <span className="text-brand-emerald mr-4 opacity-50">0{index + 1}</span>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          {isHome ? (
            <a
              id="mobile-nav-cta"
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="w-full py-4 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black text-center flex items-center justify-center space-x-2 shadow-lg hover:bg-brand-emerald/90 transition-all"
            >
              <span>Travailler ensemble</span>
              <Sparkles className="w-4 h-4 text-black animate-pulse" />
            </a>
          ) : (
            <Link
              id="mobile-nav-cta"
              to="/"
              hash="contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 rounded-none font-mono text-xs uppercase tracking-widest bg-brand-emerald text-black text-center flex items-center justify-center space-x-2 shadow-lg hover:bg-brand-emerald/90 transition-all"
            >
              <span>Travailler ensemble</span>
              <Sparkles className="w-4 h-4 text-black animate-pulse" />
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-nav-backdrop"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </nav>
  );
}




