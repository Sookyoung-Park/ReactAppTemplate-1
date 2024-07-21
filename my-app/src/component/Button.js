import '../styles/Button.css';

function ButtonA({text}){
    return(
        <div className="ButtonA">
            <button className="styled-button">{text}</button> 
        </div>  
    );
}

export default ButtonA;
