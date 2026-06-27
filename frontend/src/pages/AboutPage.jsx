export default function AboutPage() {
  return (
    <div className='space-y-10'>
      <section className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-6 sm:p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>About me</h1>
        <p className='mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-slate-200'>
          With a strong academic foundation in Computer Science and practical experience in Artificial Intelligence, my work focuses on designing intelligent systems that solve meaningful real-world problems. My expertise covers Machine Learning, Deep Learning, Computer Vision, Data Analysis, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG).

          Throughout my journey, I have developed AI-powered healthcare applications, brain tumor detection systems, and data-driven software solutions that combine innovation with practical usability. Beyond software development, more than three years of teaching Computer Science and Mathematics have strengthened my communication, leadership, and problem-solving abilities.

          Driven by curiosity and continuous learning, I strive to build technology that creates measurable impact while sharing knowledge that inspires the next generation of technology professionals.
        </p>
      </section>
      <section className='grid gap-8 lg:grid-cols-2'>
        <div className='space-y-6 rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
          <h2 className='text-2xl font-semibold'>Professional Biography</h2>
          <p className='leading-8 text-slate-200'>Abdullah Bin Waqar is an AI Engineer, Data Analyst, and Computer Science Educator committed to advancing technology through innovation, research, and education. Holding a Bachelor's degree in Computer Science, he specializes in developing intelligent software solutions powered by Artificial Intelligence, Machine Learning, and Data Analytics. His professional interests extend beyond software development to mentoring future technology professionals, promoting practical learning, and exploring emerging AI technologies that address complex real-world challenges. With a balance of technical expertise and educational experience, he aims to contribute to the future of intelligent computing and digital transformation.</p>
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
