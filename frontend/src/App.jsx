import { Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<HomePage />} />
        <Route path='skills' element={<HomePage />} />
        <Route path='experience' element={<HomePage />} />
        <Route path='projects' element={<HomePage />} />
        <Route path='certifications' element={<HomePage />} />
        <Route path='education' element={<HomePage />} />
        <Route path='contact' element={<HomePage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='admin/login' element={<AdminLoginPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
