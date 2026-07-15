import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-12 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Corporate footer info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          
          {/* Company structure and location */}
          <div className="flex items-center space-x-3">
            <Globe className="w-4 h-4 text-brand-emerald" />
            <span>Dolapo ECOM LLC — Société Offshore Enregistrée</span>
          </div>

          {/* Copyright details */}
          <div className="text-center md:text-right">
            <span>© 2026 Dolapo ECOM LLC. Tous droits réservés.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
