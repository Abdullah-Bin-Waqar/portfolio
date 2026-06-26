import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import CertificationsPage from './CertificationsPage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';

const stats = [
  { label: 'Projects Delivered', value: '5+' },
  { label: 'Years in Education', value: '3+' },
  { label: 'Years in Industry', value: '2+' }
];

export default function HomePage() {
  const location = useLocation();
  const publicBase = import.meta.env.BASE_URL || '/';
  const resumeUrl = encodeURI(`${publicBase}Abdullah bin waqar.pdf`);

  useEffect(() => {
    const routeMap = {
      '': 'home',
      about: 'about',
      skills: 'skills',
      experience: 'experience',
      projects: 'projects',
      certifications: 'certifications',
      education: 'education',
      contact: 'contacts'
    };

    const key = location.pathname.replace(/^\/+|\/+$/g, '');
    const sectionId = routeMap[key] || 'home';
    const target = document.getElementById(sectionId);

    if (target) {
      const offset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className='space-y-16'>
      <section id='home' className='scroll-mt-24'>
        <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center'>
          <div className='space-y-8'>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className='inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary'>
                AI Engineer • Data Scientist • Computer Teacher
              </p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className='text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
              Abdullah Bin Waqar
            </motion.h1>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className='relative flex items-center justify-center overflow-visible p-0 lg:hidden'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.12),_transparent_40%)]' />
              <img
                src={`${publicBase}Abdullahbinwaqar.png`}
                alt='Abdullah Bin Waqar'
                className='relative w-full max-w-[280px] rounded-full object-cover shadow-[0_40px_80px_rgba(0,102,255,0.18)] sm:max-w-[320px]'
              />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='max-w-2xl text-lg leading-8 text-slate-600'>
              Abdullah Bin Waqar is an AI Engineer, Data Scientist, and Computer Teacher specializing in Machine Learning, Deep Learning, Computer Vision, Data Analysis, and Generative AI. He builds AI-powered solutions and teaches computer science with a strong focus on practical innovation.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className='flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
              <a href='#contacts' className='btn-primary w-full sm:w-auto'>Hire me</a>
              <a href={resumeUrl} target='_blank' rel='noreferrer' className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft transition hover:border-primary/40 hover:text-primary sm:w-auto'>
                <FaDownload /> Download Resume
              </a>
            </motion.div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              {stats.map((item) => (
                <div key={item.label} className='group rounded-3xl bg-white p-5 shadow-soft transition duration-300 hover:bg-gradient-to-br hover:from-slate-950 hover:to-primary hover:text-white'>
                  <p className='text-2xl font-semibold text-slate-950 transition-colors duration-300 group-hover:text-white'>{item.value}</p>
                  <p className='mt-2 text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-200'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className='relative hidden items-center justify-center overflow-visible p-0 lg:flex'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.12),_transparent_40%)]' />
            <img
              src={`${publicBase}Abdullahbinwaqar.png`}
              alt='Abdullah Bin Waqar'
              className='relative w-full max-w-[420px] rounded-full object-cover shadow-[0_40px_80px_rgba(0,102,255,0.18)]'
            />
          </motion.div>
        </div>
        <div className='mt-16 grid gap-6 lg:grid-cols-[1fr_0.8fr]'>
          <div className='rounded-3xl bg-white p-8 sm:p-10 shadow-soft'>
            <h2 className='text-2xl font-semibold text-slate-950'>AI Engineer and Data Analytics Professional</h2>
            <p className='mt-4 text-slate-600'>I am an AI Engineer and Data Analyst focused on building innovative AI-powered solutions that solve real world problems. With expertise in Machine Learning, Deep Learning, Computer Vision, and modern software development, I combine technical excellence with practical implementation. I am also passionate about education, mentoring students in computer science and empowering them through technology.</p>
          </div>
          <div className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-8 sm:p-10 text-white shadow-glow'>
            <h3 className='text-xl font-semibold'>How I add value</h3>
            <ul className='mt-6 space-y-4 text-sm leading-7'>
              <li>• Build robust AI solutions for healthcare, analytics, and automation.</li>
              <li>• Design data-driven systems with strong architecture and clean UX.</li>
              <li>• Educate teams and learners on ML, Python, and AI best practices.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='about' className='scroll-mt-24'>
        <AboutPage />
      </section>

      <section id='skills' className='scroll-mt-24'>
        <SkillsPage />
      </section>

      <section id='experience' className='scroll-mt-24'>
        <ExperiencePage />
      </section>

      <section id='projects' className='scroll-mt-24'>
        <ProjectsPage />
      </section>

      <section id='certifications' className='scroll-mt-24'>
        <CertificationsPage />
      </section>

      <section id='education' className='scroll-mt-24'>
        <EducationPage />
      </section>

      <section id='contacts' className='scroll-mt-24'>
        <ContactPage />
      </section>
    </div>
  );
}
