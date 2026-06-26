export default function AboutPage() {
  return (
    <div className='space-y-10'>
      <section className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-6 sm:p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>About me</h1>
        <p className='mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-slate-200'>
          I am <b>Abdullah Bin Waqar</b>, an AI Engineer , Data Analyst and Computer Science Educator with a Bachelor of Science in Computer Science. My expertise spans Machine Learning, Deep Learning, Computer Vision, Data Analysis, Large Language Models (LLMs), and Retrieval Augmented Generation (RAG) systems.
          I have worked on real world AI projects, including AI-powered healthcare solutions, brain tumor detection systems, and data-driven applications. My experience as an AI Engineer, combined with over three years of teaching Computer Science and Mathematics, has strengthened my technical, communication, and leadership skills.
          I am passionate about building intelligent solutions, solving real-world problems through AI, and helping others understand technology through effective teaching and mentorship. I continuously strive to learn emerging technologies and create innovative solutions that make a meaningful impact.
        </p>
      </section>
      <section className='grid gap-8 lg:grid-cols-2'>
        <div className='space-y-6 rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
          <h2 className='text-2xl font-semibold'>Professional Biography</h2>
          <p className='leading-8 text-slate-200'>I am an AI Engineer , Data Analyst and Computer Science Educator with a Bachelor's degree in Computer Science. I am passionate about AI, software development, and technology driven innovation. My goal is to build intelligent solutions, solve real-world challenges, and contribute to the growth of technology through continuous learning and knowledge sharing.</p>
          <div className='space-y-4 text-sm text-slate-300'>
            <p><span className='font-semibold text-white'>Mission:</span> Create AI systems that empower intelligent decision making and help organizations grow with data-driven innovation.</p>
            <p><span className='font-semibold text-white'>Core Strengths:</span> Machine Learning, Computer Vision, Data Analytics, Full-stack development, Technical teaching.</p>
          </div>
        </div>
        <div className='space-y-6'>
          <div className='rounded-3xl bg-white p-8 shadow-soft'>
            <h3 className='text-xl font-semibold text-slate-950'>Education</h3>
            <p className='mt-3 text-slate-600'>Bachelor of Science in Computer Science, Virtual University of Pakistan</p>
            <p className='mt-2 text-sm text-slate-500'>2022 – 2026</p>
          </div>
          <div className='rounded-3xl bg-white p-8 shadow-soft'>
            <h3 className='text-xl font-semibold text-slate-950'>Career Journey</h3>
            <ul className='mt-4 space-y-4 text-slate-600'>
              <li>AI Engineer at Beetle Infotech LLC</li>
              <li>AI Engineer Intern at CyberGen</li>
              <li>Computer Teacher at UGI Cantt Campus</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
