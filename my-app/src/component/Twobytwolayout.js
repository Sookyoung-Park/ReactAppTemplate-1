import '../styles/Twobytwolayout.css';
import ButtonB from './Button2';

function Twobytwolayout(){
  return (
    <div className="layout-container">
      <div className='row'>
        <div className='column'>
          1 of 2
          <ButtonB text={'GO'}/>
        </div>
        <div className='column'>
          2 of 2
          <ButtonB text={'GO'}/>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div className='column'>
          3 of 4
          <ButtonB text={'GO'}/>
        </div>
        <div className='column'>
          4 of 4
          
        </div>
      </div>
    </div>
  );
}

export default Twobytwolayout;


