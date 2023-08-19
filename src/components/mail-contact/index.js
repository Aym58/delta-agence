import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './styles.scss';

const MailContact = ({ mail }) => {
  return (
    <div className="mail-contact">
      <MailOutlineIcon className="icon" fontSize="small" />
      <p>{mail}</p>
    </div>
  );
};

export default MailContact;
