import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='min-h-screen overflow-x-hidden text-slate-900'>
      <Navbar />
      <main className='mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 sm:pt-28 lg:px-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
