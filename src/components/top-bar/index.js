import './styles.scss';
import PhoneContact from '../phone-contact';
import MailContact from '../mail-contact';

const TopBar = ({ setLang }) => {
  return (
    <div className="top-bar-container">
      <div className="top-bar">
        <div className="top-bar-contacts">
          <PhoneContact phone={'+380 (50) 315 84 26'} />
          <MailContact mail={'company@delta-agence.com'} />
        </div>
        <div className="top-bar-lang-container">
          <div className="top-bar-lang" onClick={() => setLang('ukr')}>
            Укр
          </div>
          <div className="top-bar-lang" onClick={() => setLang('eng')}>
            Eng
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
