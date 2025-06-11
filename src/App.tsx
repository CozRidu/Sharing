import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import SafetyTipsPage from './pages/SafetyTipsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import AvoidScamsPage from './pages/AvoidScamsPage';
import SupportUsPage from './pages/SupportUsPage';
import { LocationProvider } from './contexts/LocationContext';
import { ToastProvider } from './contexts/ToastContext';
import Header from './components/layout/Header';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ToastProvider>
          <LocationProvider>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Header />
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/listing/:id" element={<ListingPage />} />
                  <Route path="/search/:category" element={<CategoryPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/safety" element={<SafetyTipsPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsOfUsePage />} />
                  <Route path="/avoid-scams" element={<AvoidScamsPage />} />
                  <Route path="/support-us" element={<SupportUsPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </LocationProvider>
        </ToastProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;