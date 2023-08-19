import './styles.scss';
import PhoneContact from '../../components/phone-contact';
import MailContact from '../../components/mail-contact';
import { Button, TextField } from '@mui/material';

const Contacts = ({ lang }) => {
  return (
    <div className="contacts-container">
      {lang === 'ukr' && (
        <div className="contacts">
          <div className="contacts-block">
            <h1 className="contacts-header">Реквізити</h1>
            <div className="contacts-body">
              <div className="contacts-body-block">
                <h2 className="contacts-body-header">Директор</h2>
                <div className="contacts-body-text">
                  <p>Семенов Володимир Вікторович</p>
                  <PhoneContact phone={'+380 (50) 315 84 26'} />
                </div>
              </div>
              <div className="contacts-body-block">
                <h2 className="contacts-body-header">Агент</h2>
                <div className="contacts-body-text">
                  <p> Нікішенко Олексій Миколайович</p>
                  <PhoneContact phone={'+380 (50) 598 22 33'} />
                </div>
              </div>
              <div className="contacts-body-block">
                <h2 className="contacts-body-header">
                  Юридична адреса підприємства
                </h2>
                <div className="contacts-body-text">
                  <p>Україна, 73000, м. Херсон</p>
                  <p>Одеська площа 6А</p>
                </div>
                <div className="contacts-body-text">
                  <p>Україна, 73021, м. Херсон, а/с № 31</p>
                  <p>Код ЄДРПОУ 39277912</p>
                  <p>р/р 26001010622065 «БАНК ВОСТОК»</p>
                  <p>м. Дніпро, МФО 307123</p>
                </div>
                <div className="contacts-body-text">
                  <MailContact mail={'company@delta-agence.com'} />
                  <PhoneContact phone={'+380 (50) 642 87 18'} />
                </div>
              </div>
            </div>
          </div>
          <div className="contacts-block">
            <h1 className="contacts-header">Напишіть нам</h1>
            <div className="contacts-body">
              <TextField id="outlined-basic" label="Ім'я" type="text" />
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Повідомлення"
                variant="outlined"
                type="text"
                multiline
                minRows={2}
              />
              <Button variant="contained" size="large" disableElevation>
                Відправити
              </Button>
            </div>
          </div>
        </div>
      )}
      {lang === 'eng' && (
        <div className="contacts">
          <div className="contacts-block">
            <h1 className="contacts-header">Details</h1>
            <div className="contacts-body">
              <div className="contacts-body-block">
                <h2 className="contacts-body-header">President</h2>
                <div className="contacts-body-text">
                  <p>Semenov Volodymyr Viktorovich</p>
                  <PhoneContact phone={'+380 (50) 315 84 26'} />
                </div>
              </div>
              <div className="contacts-body-block">
                <h2 className="contacts-body-header">Agent</h2>
                <div className="contacts-body-text">
                  <p>Nikishenko Alexey Nikolaevich</p>
                  <PhoneContact phone={'+380 (50) 598 22 33'} />
                </div>
              </div>
              <div className="contacts-body-block">
                <h2 className="contacts-body-header">Legal address</h2>
                <div className="contacts-body-text">
                  <p>Ukraine, 73000, Kherson</p>
                  <p>Odeska square 6А</p>
                </div>
                <div className="contacts-body-text">
                  <p>P. O. box No. 31, 73021, Kherson, Ukraine</p>
                  <p>Odeska square 6А</p>
                  <p>USREOU Code: 39277912</p>
                  <p>p/a 26001010622065 РJSC «BANK VOSTOK», Dnipro, Ukraine</p>
                  <p>SWIFT code: ACJCUA2N</p>
                </div>
                <div className="contacts-body-text">
                  <MailContact mail={'company@delta-agence.com'} />
                  <PhoneContact phone={'+380 (50) 642 87 18'} />
                </div>
              </div>
            </div>
          </div>
          <div className="contacts-block">
            <h1 className="contacts-header">Contact us</h1>
            <div className="contacts-body">
              <TextField id="outlined-basic" label="Name" type="text" />
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Повідомлення"
                variant="outlined"
                type="text"
                multiline
                minRows={2}
              />
              <Button variant="contained" size="large" disableElevation>
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
