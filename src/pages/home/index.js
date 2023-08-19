import Slider from '../../components/slider';
import './styles.scss';

const Home = ({ lang }) => {
  return (
    <>
      <Slider />
      <div className="home-container">
        {lang === 'ukr' && (
          <div className="home">
            <h1 className="home-header">ТОВ "Дельта Агенство"</h1>
            <div className="home-body">
              <p className="home-body-text">
                Наша компанія надає повний перелік професійних послуг з
                агентування морських суден, що заходять у порти на судоремонтні
                заводи України.
              </p>
              <p className="home-body-text">
                Наша команда спеціалістів має багаторічний досвід роботи з
                підприємствами галузі морського господарства України та
                державних структур і допоможе Вам зекономити час, уникнути
                зайвих витрат та бюрократичних процедур.
              </p>
              <p className="home-body-text">
                Ми готові у найкоротший термін вирішити повний перелік технічних
                та юридичних питань, пов'язаних із супроводом, ремонтом,
                вантажними роботами та матеріальним забезпеченням суден.
              </p>
            </div>
          </div>
        )}
        {lang === 'eng' && (
          <div className="home">
            <h1 className="home-header">"Delta Agence" LLC</h1>
            <div className="home-body">
              <p className="home-body-text">
                Our company provides a full list of professional agency services
                for ships entering the ports and shipyards of Ukraine.
              </p>
              <p className="home-body-text">
                Our team has many years of experience working and cooperating
                with facilities of the marine industry and state structures of
                Ukraine. Our excellent relations with the Port, Customs &
                Terminal authorities ensures a quick and efficient vessel
                turnaround. We will help you to avoid bureaucratic procedures,
                save time and minimize expenses.
              </p>
              <p className="home-body-text">
                We are ready to solve in the shortest terms an extensive list of
                technical and legal issues related to the maintenance, repair,
                crew, cargo operations and support of vessels.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
