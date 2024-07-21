import '../styles/Text.css';

function Text({title, subtitle}){
    return(
        <div className="Textbox">
            <h2>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
        </div>
    );
  };


export default Text;