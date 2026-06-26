import { useState } from 'react';
import axios from 'axios';

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', form);
      localStorage.setItem('adminToken', response.data.token);
      setMessage('Logged in successfully.');
    } catch (error) {
      setMessage('Login failed. Check credentials.');
    }
  };

  return (
    <div className='mx-auto max-w-xl space-y-8 rounded-[2rem] bg-white p-10 shadow-soft'>
      <h1 className='text-3xl font-semibold text-slate-950'>Admin Login</h1>
      <p className='text-slate-600'>Secure access for managing portfolio content, blog posts, certifications, and messages.</p>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <label className='block text-sm text-slate-700'>
          Email
          <input type='email' name='email' value={form.email} onChange={handleChange} required className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-primary' />
        </label>
        <label className='block text-sm text-slate-700'>
          Password
          <input type='password' name='password' value={form.password} onChange={handleChange} required className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-primary' />
        </label>
        <button type='submit' className='btn-primary w-full'>Login</button>
        {message && <p className='text-sm text-primary'>{message}</p>}
      </form>
    </div>
  );
}
