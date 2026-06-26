const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'C++', level: 84 },
      { name: 'JavaScript', level: 88 },
      { name: 'C', level: 75 }
    ]
  },
  {
    title: 'Artificial Intelligence',
    skills: [
      { name: 'Machine Learning', level: 88 },
      { name: 'Deep Learning', level: 86 },
      { name: 'CNNs', level: 82 },
      { name: 'Computer Vision', level: 85 },
      { name: 'OpenCV', level: 84 },
      { name: 'Generative AI', level: 76 },
      { name: 'LLMs', level: 72 },
      { name: 'RAG', level: 68 }
    ]
  },
  {
    title: 'Data Analytics',
    skills: [
      { name: 'NumPy', level: 90 },
      { name: 'Pandas', level: 88 },
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 70 },
      { name: 'Excel', level: 95 }
    ]
  },
  {
    title: 'Computer Science',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', level: 86 },
      { name: 'Data Structures & Algorithms (DSA)', level: 88 }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'MERN Stack', level: 88 },
      { name: 'Django', level: 72 },
      { name: 'WordPress', level: 66 }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 86 },
      { name: 'MySQL', level: 76 },
      { name: 'SQL Server', level: 70 }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 94 }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className='space-y-10'>
      <div className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>Skills</h1>
        <p className='mt-4 text-slate-200'>I am a Machine Learning Expert, Deep Learning Specialist, Data Analyst, and AI Solutions Architect passionate about acquiring new skills and exploring emerging technologies. Through continuous learning and hands-on experience, I strive to grow as a technology professional and create solutions that make a meaningful impact.</p>
      </div>
      <div className='grid gap-6 lg:grid-cols-2'>
        {categories.map((category) => (
          <div key={category.title} className='rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-soft'>
            <h2 className='text-xl font-semibold text-slate-950'>{category.title}</h2>
            <div className='mt-6 space-y-5'>
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className='flex items-center justify-between gap-4 text-sm font-medium text-slate-700'>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className='mt-2 h-2 w-full rounded-full bg-slate-200'>
                    <div className='h-full rounded-full bg-primary' style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
