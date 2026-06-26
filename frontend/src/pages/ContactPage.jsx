import { useState } from 'react';
import { openCompose } from '../utils/composeEmail';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (inputs are required in markup as well)
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      setStatus({ message: 'Please complete all fields before sending.', type: 'error' });
      return;
    }

    // Compose a Gmail web-compose URL so it opens in the browser (Gmail web) instead
    const to = 'engr.abdullahbinwaqar@gmail.com';
    const subjectEncoded = encodeURIComponent(subject);

    // Build body and encode. Include Name, Email, and Message from the form submission.
    const bodyRaw = `Name: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;
    let bodyEncoded = encodeURIComponent(bodyRaw);

    // Gmail compose URL (opens Gmail web compose). tf=1 opens the compose in a new tab.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subjectEncoded}&body=${bodyEncoded}&tf=1`;

    try {
      // Open Gmail compose in new tab. If popup is blocked, navigate current window as fallback.
      const newWindow = window.open(gmailUrl, '_blank');
      if (!newWindow) window.location.href = gmailUrl;

      setStatus({ message: 'Thank you for reaching out. Your message has been received successfully, and I will get back to you as soon as possible.', type: 'success' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // As a final fallback, open a mailto link which may trigger webmail or desktop client.
      const mailto = `mailto:${to}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      try {
        const w = window.open(mailto, '_blank');
        if (!w) window.location.href = mailto;
        setStatus({ message: 'Thank you for reaching out. Your message has been received successfully, and I will get back to you as soon as possible.', type: 'success' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } catch (err2) {
        setStatus({ message: 'Unable to open an email composer. Please copy the address and send manually.', type: 'error' });
      }
    }
  };

  return (
    <div className='space-y-10'>
      <div className='rounded-3xl bg-gradient-to-br from-slate-950 to-primary p-10 text-white shadow-glow'>
        <h1 className='text-3xl font-semibold text-white'>Contact</h1>
        <p className='mt-4 text-slate-200 leading-7'>Let's connect and create something impactful together. I welcome opportunities in Artificial Intelligence, software development, education, and technology driven innovation for AI Engineers, Data Scientists, and Computer Teachers. Whether you have a project in mind, a collaboration opportunity, or a professional inquiry, I look forward to hearing from you and exploring how we can work together.</p>
      </div>
      <div className='grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <form onSubmit={handleSubmit} className='rounded-3xl bg-slate-50 p-6 sm:p-10 shadow-soft'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold text-slate-950'>Let's Work Together</h2>
            <div className='grid gap-6'>
              <label className='space-y-2 text-sm text-slate-700'>
                <span>Name</span>
                <input type='text' name='name' value={form.name} onChange={handleChange} required className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary' />
              </label>
              <label className='space-y-2 text-sm text-slate-700'>
                <span>Email</span>
                <input type='email' name='email' value={form.email} onChange={handleChange} required className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary' />
              </label>
              <label className='space-y-2 text-sm text-slate-700'>
                <span>Subject</span>
                <input type='text' name='subject' value={form.subject} onChange={handleChange} required className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary' />
              </label>
              <label className='space-y-2 text-sm text-slate-700'>
                <span>Message</span>
                <textarea name='message' value={form.message} onChange={handleChange} required rows='6' className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary' />
              </label>
            </div>
            <button type='submit' className='btn-primary w-full'>Send Message</button>
            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
        <div className='space-y-6 rounded-3xl bg-white p-10 shadow-soft'>
          <div>
            <h2 className='text-xl font-semibold text-slate-950'>Contact Information</h2>
            <div className='mt-6 space-y-4 text-slate-700'>
              <div className='flex items-center gap-3'>
                <FaEnvelope className='text-primary' />
                <button
                  type='button'
                  onClick={() => {
                    // Open a template compose with placeholders (do not read form values)
                    const subject = 'Contact from portfolio website';
                    const body = `Message:\r\n`;
                    openCompose({ to: 'engr.abdullahbinwaqar@gmail.com', subject, body });
                  }}
                  className='flex items-center gap-3 text-slate-600 hover:text-primary'
                >
                  engr.abdullahbinwaqar@gmail.com
                </button>
              </div>
              <div className='flex items-center gap-3'>
                <FaPhone className='text-primary' />
                <a href='tel:+923080333213' className='flex items-center gap-3 text-slate-600 hover:text-primary'>+92 308 0333213</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaLinkedin className='text-primary' />
                <a href='https://linkedin.com/in/abdullah-bin-waqar-bbab90275' target='_blank' rel='noreferrer' className='flex items-center gap-3 text-slate-600 hover:text-primary'>LinkedIn</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaGithub className='text-primary' />
                <a href='https://github.com/AbdullahProject' target='_blank' rel='noreferrer' className='flex items-center gap-3 text-slate-600 hover:text-primary'>GitHub</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaFacebook className='text-primary' />
                <a href='https://www.facebook.com/profile.php?id=61591282499669' target='_blank' rel='noreferrer' className='flex items-center gap-3 text-slate-600 hover:text-primary'>Facebook</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaYoutube className='text-primary' />
                <a href='https://www.youtube.com/@Engr.AbdullahBinWaqar' target='_blank' rel='noreferrer' className='flex items-center gap-3 text-slate-600 hover:text-primary'>YouTube</a>
              </div>
              <div className='flex items-center gap-3'>
                <FaInstagram className='text-primary' />
                <a href='https://www.instagram.com/engr.abdullahbinwaqar/' target='_blank' rel='noreferrer' className='flex items-center gap-3 text-slate-600 hover:text-primary'>Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
