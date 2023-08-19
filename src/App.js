import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Menu from './components/menu';
import TopBar from './components/top-bar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contacts from './pages/contacts';
import { useState } from 'react';
import Footer from './components/footer';

const App = () => {
  const [lang, setLang] = useState('ukr');
  const [openedPage, setOpenedPage] = useState('home');

  return (
    <BrowserRouter>
      <div className="app">
        <TopBar setLang={setLang} />
        <Menu lang={lang} openedPage={openedPage} />
        <div className="page">
          <Routes>
            <Route
              onMouseUp={() => setOpenedPage('home')}
              index
              element={<Home lang={lang} />}
            />
            <Route
              onMouseUp={() => setOpenedPage('about')}
              path="about"
              element={<About lang={lang} />}
            />
            <Route
              onMouseUp={() => setOpenedPage('services')}
              path="services"
              element={<Services lang={lang} />}
            />
            <Route
              onMouseUp={() => setOpenedPage('contacts')}
              path="contacts"
              element={<Contacts lang={lang} />}
            />
          </Routes>
        </div>
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
};

export default App;
