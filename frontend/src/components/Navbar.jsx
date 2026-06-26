import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/education', label: 'Education' },
  // { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='sticky top-0 z-30 border-b border-slate-200/80 bg-white shadow-sm'
    >
      <div className='relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8'>
        <div className='hidden md:flex'>
          <nav className='flex flex-wrap items-center justify-center gap-4'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'text-primary bg-primary/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <button
          type='button'
          onClick={() => setMobileOpen((prev) => !prev)}
          className='absolute right-4 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-primary hover:text-primary md:hidden'
          aria-label='Toggle navigation'
        >
          {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className='border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden'>
          <nav className='grid gap-3 text-center'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => {
                  setMobileOpen(false);
                  handleNavClick();
                }}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
