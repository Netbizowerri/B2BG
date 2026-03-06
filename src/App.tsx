import { AnimatePresence, motion } from 'motion/react';
import { type ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFab from './components/WhatsAppFab';
import { isAdminAuthenticated } from './utils/adminAuth';
import AdminForms from './pages/AdminForms';
import AdminLogin from './pages/AdminLogin';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Events from './pages/Events';
import FocusAreas from './pages/FocusAreas';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Leadership from './pages/Leadership';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function ProtectedAdminRoute({ children }: { children: ReactElement }) {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
}

function RoutedApp() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/focus-areas" element={<FocusAreas />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route
                path="/admin/forms"
                element={(
                  <ProtectedAdminRoute>
                    <AdminForms />
                  </ProtectedAdminRoute>
                )}
              />
              <Route
                path="/admin"
                element={(
                  <ProtectedAdminRoute>
                    <Navigate to="/admin/forms" replace />
                  </ProtectedAdminRoute>
                )}
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  );
}
