import { useState } from 'react';

const certifications = [
  {
    title: 'Microsoft AI Certification',
    issuer: 'Microsoft',
    date: '2025',
    details: 'Professional AI and machine learning fundamentals certification.',
    image: '/Microsoft.jpg'
  },
  {
    title: 'AI (ML/DL) Training',
    issuer: 'Corvit Lahore',
    date: '2025',
    details: 'Hands-on training in machine learning and deep learning techniques.',
    image: '/Corvit.jpg'
  },
  {
    title: 'WorldPress Certification',
    issuer: 'Digi Skills',
    date: '2024',
    details: 'Completed WordPress development certification through Digi Skills.',
    image: '/WORDPRESS-1.png'
  },
  {
    title: 'Programming Essentials in C++',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    details: 'Foundational programming certification in C++ development.',
    image: '/Cicso.jpg'
  }
];

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className='space-y-10'>
      <div className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>Certifications</h1>
        <p className='mt-4 text-slate-200 leading-7'>My certifications showcase a strong commitment to lifelong learning and professional development. They reflect the knowledge, skills, and industry recognized training I have acquired to stay at the forefront of technology and innovation.</p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {certifications.map((cert) => (
          <button
            key={cert.title}
            type='button'
            onClick={() => setSelectedCert(cert)}
            className='text-left rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.18)]'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-primary'>{cert.date}</p>
            <h2 className='mt-4 text-xl font-semibold text-slate-950'>{cert.title}</h2>
            <p className='mt-2 text-sm font-medium text-slate-700'>{cert.issuer}</p>
            <p className='mt-4 text-slate-600'>{cert.details}</p>
          </button>
        ))}
      </div>

      {selectedCert && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-slate-950/70 p-4'
          onClick={() => setSelectedCert(null)}
        >
          <div
            className='relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl'
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              onClick={() => setSelectedCert(null)}
              className='absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700'
            >
              &times;
            </button>
            <div className='p-6 sm:p-8'>
              <h2 className='text-2xl font-semibold text-slate-950'>{selectedCert.title}</h2>
              <p className='mt-1 text-sm text-slate-600'>{selectedCert.issuer} • {selectedCert.date}</p>
            </div>
            <div className='max-h-[75vh] overflow-hidden bg-slate-100'>
              <img src={selectedCert.image} alt={selectedCert.title} className='h-full w-full object-contain' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
