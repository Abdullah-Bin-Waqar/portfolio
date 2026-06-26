const education = [
  { degree: 'Bachelor of Science in Computer Science', institution: 'Virtual University of Pakistan', duration: '2022 – 2026' }
];

export default function EducationPage() {
  return (
    <div className='space-y-10'>
      <div className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>Education</h1>
        <p className='mt-4 text-slate-200 leading-7'>My academic journey in Computer Science provided a strong foundation in software development, programming, data structures, algorithms, database systems, and modern computing technologies. Through rigorous coursework and practical projects, I developed analytical thinking, problem-solving abilities, and a deep understanding of technology-driven solutions.

          During my Bachelor of Science in Computer Science, I explored diverse areas of computing, with a growing focus on Artificial Intelligence, Machine Learning, Data Analysis, and Software Engineering. This educational experience not only strengthened my technical expertise but also inspired a passion for continuous learning, innovation, and the application of technology to solve real-world challenges.

          My academic achievements, combined with hands-on project development and professional training, have prepared me to contribute effectively in both industry and educational environments while continuously adapting to emerging technologies.</p>
      </div>
      <div className='grid gap-6 lg:grid-cols-2'>
        {education.map((item) => (
          <div key={item.institution} className='rounded-[2rem] bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900 p-6 sm:p-8 shadow-soft text-white'>
            <h2 className='mt-4 text-2xl font-semibold'>{item.degree}</h2>
            <p className='mt-3 text-sm text-slate-200'>{item.institution}</p>
            <p className='mt-2 text-sm text-slate-200'>{item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
