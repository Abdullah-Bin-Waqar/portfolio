const projects = [
  {
    title: 'AI-Powered Hospital Management System',
    image: '/HMS.jpg',
    description: 'MERN hospital platform with AI chatbot.',
    technologies: ['MERN', 'AI', 'MongoDB'],
    github: 'https://drive.google.com/file/d/1jmAwJtEJ4obcivsdRsPtszK_DnOJp6Uv/view?usp=sharing',
    live: 'https://www.linkedin.com/posts/abdullah-bin-waqar-bbab90275_fullstackdeveloper-softwareengineering-webdevelopment-activity-7474157473516662784-D3Wx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENFs74BHpXbwdP5mRvbPUeVIe1rdh9slks'
  },
  {
    title: 'Brain Tumor Detection System',
    image: '/brain-tumor.png',
    description: 'MRI tumor detection with CNN and OpenCV.',
    technologies: ['Python', 'CNN', 'OpenCV'],
    github: 'https://drive.google.com/file/d/1cyrHHiAiVVcFlIqbye76oL-hy_56-rwu/view?usp=sharing',
    live: 'https://www.linkedin.com/posts/abdullah-bin-waqar-bbab90275_ai-deeplearning-braintumordetection-activity-7348234104460476416-B_u-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENFs74BHpXbwdP5mRvbPUeVIe1rdh9slks'
  },
  {
    title: 'Data Analysis with Pandas & NumPy',
    image: '/data-analysis.jpg',
    description: 'Cleaned and visualized datasets.',
    technologies: ['Python', 'Pandas', 'NumPy'],
    // github: '#',
    // live: '#'
  },
  {
    title: 'Tic-Tac-Toe Game',
    image: '/tic-tac-toe.png',
    description: 'React multiplayer game.',
    technologies: ['JavaScript', 'React'],
    github: 'https://github.com/AbdullahProject/Tic-Tac-Toe',
    live: 'https://abdullahproject.github.io/Tic-Tac-Toe/'
  },
  {
    title: 'Calculator App',
    image: '/calculator.jpg',
    description: 'C++ calculator with validation.',
    technologies: ['C++'],
    github: 'https://github.com/AbdullahProject/Calculater',
    // live: null
  }
];

export default function ProjectsPage() {
  return (
    <div className='space-y-10'>
      <div className='rounded-[2.5rem] bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>Projects</h1>
        <p className='mt-4 text-slate-200'>Projects are where learning meets innovation. From Artificial Intelligence and Machine Learning applications to data-driven solutions and software development, my work demonstrates a commitment to solving real-world challenges through technology as a Tech Innovator and AI Solutions Architect. Each project represents an opportunity to explore new technologies, improve my skills, and create meaningful impact through practical solutions.</p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.title} className='group'>
            <div className='relative w-full overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(15,23,42,0.16)] transition duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_48px_120px_rgba(0,102,255,0.18)] aspect-[4/3]'>
              <div className='relative h-full w-full [perspective:1400px]'>
                <div className='absolute inset-0 h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                  <div className='absolute inset-0 overflow-hidden rounded-[2rem] shadow-xl [backface-visibility:hidden]'>
                    <img src={project.image} alt={project.title} className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                    <div className='absolute inset-x-0 bottom-0 bg-slate-100 px-6 py-5 backdrop-blur-sm'>
                      <h2 className='text-lg font-semibold text-slate-950'>{project.title}</h2>
                    </div>
                  </div>

                  <div className='absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] bg-[#0052CC] px-5 py-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                    <div className='space-y-4'>
                      <h2 className='text-xl font-semibold'>{project.title}</h2>
                      <p className='text-sm leading-6 text-white/90'>{project.description}</p>
                      <div>
                        <h3 className='text-xs font-semibold uppercase tracking-[0.28em] text-white/80'>Technologies</h3>
                        <div className='mt-3 flex flex-wrap gap-2'>
                          {project.technologies.map((tech) => (
                            <span key={tech} className='rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white'>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                      <a href={project.github} target='_blank' rel='noreferrer' className='inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'>GitHub</a>
                      {project.live && (
                        <a href={project.live} target='_blank' rel='noreferrer' className='inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto'>Live Demo</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
