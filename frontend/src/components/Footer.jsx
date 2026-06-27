import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { openCompose, readFormFromDOM } from '../utils/composeEmail';

export default function Footer() {
  return (
    <footer className='border-t border-slate-200/70 bg-white/90'>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div>
            <p className='text-sm font-semibold text-slate-900'>Abdullah Bin Waqar</p>
            <p className='mt-3 max-w-xl text-sm leading-7 text-slate-600'>
              AI Engineer and Data Analyst with expertise in Machine Learning, Deep Learning, Computer Vision, and Generative AI. Experienced in developing intelligent applications, analyzing data driven solutions, and building modern web systems using cutting edge technologies. Passionate about solving real-world problems through innovation, research, and continuous learning.
            </p>
          </div>
          <div className='space-y-4'>
            <p className='text-sm font-semibold text-slate-900'>Contact</p>
            <div className='flex flex-col gap-3 text-sm text-slate-600'>
              <button
                type='button'
                onClick={() => {
                  // try to read form values from DOM if user is on contact page
                  const data = readFormFromDOM();
                  const subject = 'Contact from portfolio website';
                  const body = `Message:\r\n`;
                  openCompose({ to: 'engr.abdullahbinwaqar@gmail.com', subject, body });
                }}
                className='flex items-center gap-3 text-slate-600 hover:text-primary'
              >
                <FaEnvelope /> engr.abdullahbinwaqar@gmail.com
              </button>
              <a href='tel:+923080333213' className='flex items-center gap-3 hover:text-primary'>
                <FaPhone /> +92 308 0333213
              </a>
              <a href='https://linkedin.com/in/abdullah-bin-waqar-bbab90275' target='_blank' rel='noreferrer' className='flex items-center gap-3 hover:text-primary'>
                <FaLinkedin /> LinkedIn
              </a>
              <a href='https://github.com/Abdullah-Bin-Waqar/portfolio' target='_blank' rel='noreferrer' className='flex items-center gap-3 hover:text-primary'>
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
        <p className='mt-8 text-center text-xs uppercase tracking-[0.24em] text-slate-500'>
          © 2026 Abdullah Bin Waqar • AI Engineer & Software Developer
        </p>
      </div>
    </footer>
  );
}
