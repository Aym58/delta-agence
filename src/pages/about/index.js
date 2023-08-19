import './styles.scss';

const About = ({ lang }) => {
  return (
    <div className="about-container">
      {lang === 'ukr' && (
        <div className="about">
          <h1 className="about-header">Про нас</h1>
          <div className="about-body">
            <p className="about-body-text">
              Товариство з обмеженою відповідальністю "ДЕЛЬТА АГЕНСТВО"
              спеціалізується на наданні послуг з агентування морських суден.
            </p>
            <p className="about-body-text">
              Офіс нашої компанії знаходиться у місті Херсон, поблизу
              Херсонського порту та судоремонтного заводу. Наша компанія надає
              послуги судновласникам у портах Одеси, Чорноморська, Херсона та
              Миколаєва, а також Херсонському суднобудівному судноремонтному
              заводі ім. Комінтерну та Чорноморскому судоремонтному заводі.
            </p>
            <p className="about-body-text">
              Тісна співпраця із судноремонтною компанією ТОВ "Сігран" дозволяє
              оптимізувати проводження суден на ремонт та виконати усі необхідні
              роботи у найкоротші терміни.
            </p>
          </div>
        </div>
      )}
      {lang === 'eng' && (
        <div className="about">
          <h1 className="about-header">About us</h1>
          <div className="about-body">
            <p className="about-body-text">
              Our company provides a full list of professional agency services
              for ships entering the ports and shipyards of Ukraine.
            </p>
            <p className="about-body-text">
              Our team has many years of experience working and cooperating with
              facilities of the marine industry and state structures of Ukraine.
              Our excellent relations with the Port, Customs & Terminal
              authorities ensures a quick and efficient vessel turnaround. We
              will help you to avoid bureaucratic procedures, save time and
              minimize expenses.
            </p>
            <p className="about-body-text">
              We are ready to solve in the shortest terms an extensive list of
              technical and legal issues related to the maintenance, repair,
              crew, cargo operations and support of vessels.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
