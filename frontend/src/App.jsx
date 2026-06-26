import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import EducationPage from './pages/EducationPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='skills' element={<SkillsPage />} />
        <Route path='experience' element={<ExperiencePage />} />
        <Route path='projects' element={<ProjectsPage />} />
        <Route path='certifications' element={<CertificationsPage />} />
        <Route path='education' element={<EducationPage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='admin/login' element={<AdminLoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
