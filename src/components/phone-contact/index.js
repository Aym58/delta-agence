import PhoneIcon from '@mui/icons-material/Phone';

import './styles.scss';

const PhoneContact = ({ phone }) => {
  return (
    <div className="phone-contact">
      <PhoneIcon className="icon" fontSize="small" />
      <p>{phone}</p>
    </div>
  );
};

export default PhoneContact;
