import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo/logo.svg';
import './styles.scss';
import MobileMenu from '../mobile-menu';

const Menu = ({ lang }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="logo">
          <Logo height={60} />
        </div>
        <div className="menu-items-mobile">
          <MobileMenu lang={lang} />
        </div>
        <div className="menu-items">
          <Link
            to="/"
            className={path === '/' ? 'selected-menu-link' : 'menu-link'}
          >
            {lang === 'ukr' && 'Головна'}
            {lang === 'eng' && 'Home'}
          </Link>
          <Link
            to="/about"
            className={path === '/about' ? 'selected-menu-link' : 'menu-link'}
          >
            {lang === 'ukr' && 'Про нас'}
            {lang === 'eng' && 'About'}
          </Link>
          <Link
            to="/services"
            className={
              path === '/services' ? 'selected-menu-link' : 'menu-link'
            }
          >
            {lang === 'ukr' && 'Послуги'}
            {lang === 'eng' && 'Services'}
          </Link>
          <Link
            to="/contacts"
            className={
              path === '/contacts' ? 'selected-menu-link' : 'menu-link'
            }
          >
            {lang === 'ukr' && 'Контакти'}
            {lang === 'eng' && 'Contacts'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
