import { ReactComponent as Logo } from './../../assets/logo/logo.svg';

import './styles.scss';
import MailContact from '../mail-contact';
import PhoneContact from '../phone-contact';

const Footer = ({ lang }) => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-cred">
          <div className="footer-name">
            {lang === 'eng' && <div>Limited Liability Company</div>}
            {lang === 'ukr' && (
              <div>Товариство з обмеженою відповідальністю</div>
            )}
            {lang === 'eng' && <div>"DELTA AGENCY"</div>}
            {lang === 'ukr' && <div>"ДЕЛЬТА АГЕНСТВО"</div>}
          </div>
          <div className="footer-logo">
            <Logo height={60} />
          </div>
        </div>
        <div className="footer-contacts">
          <div className="footer-contacts-header">
            {lang === 'eng' && <div>Contacts</div>}
            {lang === 'ukr' && <div>Контакти</div>}
          </div>
          <div className="footer-contacts-body">
            <MailContact
              className="footer-contact"
              mail={'company@delta-agence.com'}
            />
            <PhoneContact
              className="footer-contact"
              phone={'+380 (50) 315 84 26'}
            />
            <PhoneContact
              className="footer-contact"
              phone={'+380 (50) 642 87 18'}
            />
          </div>
        </div>
        <div className="footer-address">
          <div className="footer-address-header">
            {lang === 'eng' && <div>Address</div>}
            {lang === 'ukr' && <div>Адреса</div>}
          </div>
          <div className="footer-address-body">
            {lang === 'eng' && (
              <>
                <p>Odeska square 6А</p>
                <p>73000, Kherson</p>
                <p>Ukraine</p>
              </>
            )}
            {lang === 'ukr' && (
              <>
                <p>Одеська площа, 6А</p>
                <p>м. Херсон, 73000</p>
                <p>Україна</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
