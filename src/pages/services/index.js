import './styles.scss';
import Automation from './../../assets/images/automation.png';
import Brezel from './../../assets/images/brezel.png';
import Crane from './../../assets/images/crane.png';
import Document from './../../assets/images/document.png';
import Inspection from './../../assets/images/inspection.png';
import Workers from './../../assets/images/workers.png';

const Services = ({ lang }) => {
  console.log(lang);
  return (
    <div className="services-container">
      {lang === 'ukr' && (
        <div className="services">
          <h1 className="services-header">Наші послуги</h1>
          <div className="services-body">
            <p className="services-body-text">
              У роботі судновласника кожного для виникає маса питань, пов'язаних
              с технічним та юридичним супроводом судна. Делегувати рішення цих
              проблем нашій команді - Ваш вірний вибір. Дізнатись ціни на
              необхідні Вам роботи Ви можете зв'язавшись із нами напряму чи
              залишивши заявку на сайті.
            </p>
            <div className="services-body-cards">
              <div className="services-card">
                <img className="services-image" src={Crane} alt="Crane" />
                <div className="services-card-header">Агентування у порту</div>
                Агентування суден, що заходять під погрузку у порти:
                <ul className="services-card-list">
                  <li>Херсонський морський торговий порт</li>
                  <li>Одеський морський торговий порт</li>
                  <li>Миколаївский морський порт</li>
                  <li>Миколаївський річковий порт</li>
                  <li>Чорноморський морський порт</li>
                  <li>Херсонський річковий порт</li>
                </ul>
              </div>
              <div className="services-card">
                <img
                  className="services-image"
                  src={Automation}
                  alt="Automation"
                />
                <div className="services-card-header">Судноремонт</div>
                Забезпечення ремонту суден на судноремонтних заводах:
                <ul className="services-card-list">
                  <li>
                    Херсонський суднобудівний судноремонтний завод ім.
                    Комінтерну
                  </li>
                  <li>Чорноморський судноремонтний завод</li>
                </ul>
              </div>
              <div className="services-card">
                <img className="services-image" src={Brezel} alt="Brezel" />
                <div className="services-card-header">Шипчандлінг</div>
                Забезпечення судна та команди усім необхідним:
                <ul className="services-card-list">
                  <li>Забезпечення продуктами харчування</li>
                  <li>Бункерування питною водою</li>
                  <li>Постачання обладнання, запчастин та комплектуючих</li>
                  <li>Постачання рятувального та протипожежного обладнання</li>
                  <li>Постачання робочого одягу та взуття</li>
                  <li>Інші постачання</li>
                </ul>
              </div>
              <div className="services-card">
                <img
                  className="services-image"
                  src={Inspection}
                  alt="Inspection"
                />
                <div className="services-card-header">
                  Митно-брокерські послуги
                </div>
                Забезпечимо виконання усіх необхідних митних операцій:
                <ul className="services-card-list">
                  <li>Оформлення дозвільних документів</li>
                  <li>Розмитнення вантажів</li>
                  <li>Інші митні послуги</li>
                </ul>
              </div>
              <div className="services-card">
                <img className="services-image" src={Workers} alt="Workers" />
                <div className="services-card-header">Заміна екіпажу</div>
                Виконання переліку процедур, необхідних для заміни екіпажу:
                <ul className="services-card-list">
                  <li>Організація заміни та доставки команди судна</li>
                  <li>Розміщення у готелі</li>
                  <li>Придбання квитків та зустріч екіпажу</li>
                </ul>
              </div>
              <div className="services-card">
                <img className="services-image" src={Document} alt="Document" />
                <div className="services-card-header">Інші послуги</div>
                За заявкою виконаємо додаткові доручення судновласника чи
                каптітана, надамо консультаційні послуги тощо.
              </div>
            </div>
          </div>
        </div>
      )}
      {lang === 'eng' && (
        <div className="services">
          <h1 className="services-header">Our services</h1>
          <div className="services-body">
            <p className="services-body-text">
              Every day a lot of questions related to technical and legal
              support of the ship arise in the shipowner's work. To delegate the
              solution of these problems to our company - is your right choice!
              You can find out prices of works you are interested in by
              contacting us directly or leaving a request on the website.
            </p>
            <div className="services-body-cards">
              <div className="services-card">
                <img className="services-image" src={Crane} alt="Crane" />
                <div className="services-card-header">Port Agencу</div>
                Agency service of vessels calling at the ports for cargo
                operations::
                <ul className="services-card-list">
                  <li>Kherson Commercial Sea Port</li>
                  <li>Odesa Commercial Sea Port</li>
                  <li>Chornomorsk Sea Port</li>
                  <li>Mykolaiv Sea Port</li>
                  <li>Mykolaiv River Port</li>
                  <li>Kherson Piver Port</li>
                </ul>
              </div>
              <div className="services-card">
                <img
                  className="services-image"
                  src={Automation}
                  alt="Automation"
                />
                <div className="services-card-header">Ship repair services</div>
                We provide services related to ship repair at shipyards:
                <ul className="services-card-list">
                  <li>Kherson Shipbuilding Shipyard named by Cominternт</li>
                  <li>Chornomorsk (Illichivsk) Shipyard</li>
                </ul>
              </div>
              <div className="services-card">
                <img className="services-image" src={Brezel} alt="Brezel" />
                <div className="services-card-header">Ship Chandling</div>
                Providing the vessel and crew with all necessary:
                <ul className="services-card-list">
                  <li>Food supply</li>
                  <li>Bunker drinking water</li>
                  <li>Supply of equipment, spare parts and components</li>
                  <li>Supply of rescue and fire fighting equipment</li>
                  <li>Supply of working clothes and shoes</li>
                  <li>Other supplies</li>
                </ul>
              </div>
              <div className="services-card">
                <img
                  className="services-image"
                  src={Inspection}
                  alt="Inspection"
                />
                <div className="services-card-header">
                  Customs brokerage services
                </div>
                We will provide the implementation of all necessary customs
                operations:
                <ul className="services-card-list">
                  <li>Customs clearance permits</li>
                  <li>Customs clearance of cargo</li>
                  <li>Other legal services</li>
                </ul>
              </div>
              <div className="services-card">
                <img className="services-image" src={Workers} alt="Workers" />
                <div className="services-card-header">Crew change</div>
                Providing the list of procedures required for changing the crew:
                <ul className="services-card-list">
                  <li>
                    Organization of the shift and delivery of the ship's crew
                  </li>
                  <li>Accommodation in the hotel</li>
                  <li>Buying tickets and meeting the crew</li>
                </ul>
              </div>
              <div className="services-card">
                <img className="services-image" src={Document} alt="Document" />
                <div className="services-card-header">Other services</div>
                On request, we will carry out additional instructions from the
                shipowner and the captain, provide consulting services, etc.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
