const posts = [
  { title: 'Building AI-Driven Product Experiences', category: 'AI', summary: 'A practical guide to building AI applications with user-focused product design and model governance.', date: 'June 2026' },
  { title: 'Working with Large Language Models in Production', category: 'ML', summary: 'Architecting LLM services with prompt design, scalability, and responsible AI considerations.', date: 'May 2026' },
  { title: 'Data Analysis Best Practices for Reliable Insight', category: 'Analytics', summary: 'Streamlining EDA, cleaning pipelines, and visualization for fast decision-making.', date: 'April 2026' }
];

export default function BlogPage() {
  return (
    <div className='space-y-10'>
      <div className='rounded-3xl bg-white p-10 shadow-soft'>
        <h1 className='text-3xl font-semibold text-slate-950'>Blog</h1>
        <p className='mt-4 max-w-2xl text-slate-600'>Admin-managed blog system for sharing AI engineering insights, machine learning tutorials, and data strategy articles.</p>
      </div>
      <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        {posts.map((post) => (
          <article key={post.title} className='rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-soft'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-primary'>{post.category}</p>
            <h2 className='mt-4 text-xl font-semibold text-slate-950'>{post.title}</h2>
            <p className='mt-3 text-slate-600'>{post.summary}</p>
            <p className='mt-6 text-sm font-medium text-slate-500'>{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
