import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contacts', label: 'Contacts' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const updateActiveSection = () => {
      const viewportMiddle = window.innerHeight * 0.35;
      const sectionData = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
          const distanceToTop = Math.abs(rect.top - viewportMiddle);

          return { id: section.id, visibleHeight, distanceToTop };
        })
        .filter((item) => item.visibleHeight > 0);

      if (sectionData.length > 0) {
        const active = sectionData.sort((a, b) => {
          if (b.visibleHeight !== a.visibleHeight) {
            return b.visibleHeight - a.visibleHeight;
          }
          return a.distanceToTop - b.distanceToTop;
        })[0];

        setActiveSection(active.id);
        return;
      }

      const fallback = sections
        .map((section) => ({
          id: section.id,
          distanceToTop: Math.abs(section.getBoundingClientRect().top - viewportMiddle)
        }))
        .sort((a, b) => a.distanceToTop - b.distanceToTop)[0];

      if (fallback) {
        setActiveSection(fallback.id);
      }
    };

    let frameId;
    const scheduleUpdate = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const observer = window.IntersectionObserver
      ? new IntersectionObserver(
        () => scheduleUpdate(),
        {
          root: null,
          rootMargin: '-20% 0px -50% 0px',
          threshold: [0.2, 0.4, 0.6]
        }
      )
      : null;

    sections.forEach((section) => observer?.observe(section));

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-sm'
    >
      <div className='relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8'>
        <div className='hidden md:flex'>
          <nav className='flex flex-wrap items-center justify-center gap-4'>
            {links.map((link) => (
              <a
                key={link.id}
                href='#'
                onClick={(event) => handleNavClick(event, link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === link.id ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                {link.label}
              </a>
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
              <a
                key={link.id}
                href='#'
                onClick={(event) => {
                  setMobileOpen(false);
                  handleNavClick(event, link.id);
                }}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${activeSection === link.id ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
