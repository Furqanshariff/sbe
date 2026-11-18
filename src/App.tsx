import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '@/src/context/LanguageContext';
import { SiteLayout } from '@/src/components/layout/SiteLayout';
import HomePage from '@/src/pages/HomePage';
import AboutPage from '@/src/pages/AboutPage';
import ServicesPage from '@/src/pages/ServicesPage';
import ProcessPage from '@/src/pages/ProcessPage';
import GalleryPage from '@/src/pages/GalleryPage';
import ContactPage from '@/src/pages/ContactPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
