import '../styles/Twobytwolayout.css';
import ButtonB from './Button2';

import layoutimg1 from '../imgs/layoutimg1.png'
import layoutimg2 from '../imgs/layoutimg2.png'
import layoutimg3 from '../imgs/layoutimg3.png'
import layoutimg4 from '../imgs/layoutimg4.png'

function Twobytwolayout(){
  return (
    <div className="layout-container">
      <div className='row'>
        <div className='column'>
          <img src={layoutimg1} alt="layoutimg1" />
          <div className="content">
            <p>Discover Air</p>
            <ButtonB text={'GO'}/>
          </div>
        </div>
        <div className='column'>
          <img src={layoutimg2} alt="layoutimg2" />
          <div className="content">
            <p>Nike Air Max 90</p>
            <ButtonB text={'GO'}/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <img src={layoutimg3} alt="layoutimg3" />
          <div className="content">
            <p>Wembanyama AirMax 90</p>
            <ButtonB text={'GO'}/>
          </div>
        </div>
        <div className='column'>
          <img src={layoutimg4} alt="layoutimg4" />
          <div className="content">
            <p>Nike Free Metcon 6</p>
            <ButtonB text={'GO'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twobytwolayout;


