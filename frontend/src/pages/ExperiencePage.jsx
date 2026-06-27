const timeline = [
  { role: 'AI Engineer', company: 'Beetle Infotech LLC', duration: 'Aug 2025 – Present', description: 'Building intelligent applications and AI-powered workflows for enterprise clients.' },
  { role: 'AI Engineer Intern', company: 'CyberGen', duration: 'Apr 2025 – Jun 2025', description: 'Developed machine learning models and automated data pipelines for prototypes.' },
  { role: 'Computer Teacher', company: 'UGI Walton Cantt Campus', duration: 'Jul 2025 – Present', description: 'Teaching computer science fundamentals and programming to advanced learners.' },
  { role: 'Computer and Math Teacher', company: 'The Shaheen Academy', duration: '2024 – 2025', description: 'Delivered mathematics and computing lessons with practical skill development.' },
  { role: 'Computer and Math Teacher', company: 'The Concept Academy of Science and Arts', duration: '2023 – 2024', description: 'Guided students through programming concepts, logic, and data structures.' },
  { role: 'Computer and Math Teacher', company: 'Al Shamas Science Academy', duration: '2022 – 2023', description: 'Supported academic growth in computer science and mathematics across grades.' }
];

export default function ExperiencePage() {
  return (
    <div className='space-y-10'>
      <div className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>Experience</h1>
        <p className='mt-4 text-slate-200'>My professional experience is built on a combination of technical innovation and knowledge sharing. By developing intelligent software solutions and empowering learners through practical education, I have cultivated a results driven approach to solving challenges, embracing continuous learning, and creating meaningful technological impact.</p>
      </div>
      <div className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-glow'>
        <div className='absolute left-6 top-0 h-full w-1 bg-primary/20'></div>
        <div className='space-y-8'>
          {timeline.map((item, index) => (
            <div key={item.company} className='relative pl-12 sm:pl-16'>
              <div className='absolute left-3 top-3 h-4 w-4 rounded-full bg-primary ring-8 ring-white' />
              <div className='rounded-3xl bg-white p-6 sm:p-8 shadow-soft'>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                  <div>
                    <p className='text-lg font-semibold text-slate-950'>{item.role}</p>
                    <p className='text-sm uppercase tracking-[0.24em] text-primary'>{item.company}</p>
                  </div>
                  <span className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600'>{item.duration}</span>
                </div>
                <p className='mt-4 text-slate-600'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
