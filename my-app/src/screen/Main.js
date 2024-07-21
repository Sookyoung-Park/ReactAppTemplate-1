
import React from "react";
import Navbar from "../component/Navbar";
import mainbanner from '../imgs/mainbanner.png';
import Text from "../component/Text";
import ButtonB from "../component/Button2";

function Main() {
  return (
      <div className="LoginPage">
          <Navbar/>
          <div>
            <img
              src={mainbanner} alt="mainbanner"
              style={{width: '100%'}}
            />
            <Text title={"WINNING IS NOT FOR EVERYONE"} subtitle={"It is for those who do whatever it takes"}/>
            <ButtonB text={'Watch'}/>
          </div>
          <div>
            <p>2*2 layout</p>
            <p>text</p>
            <p>button</p>
          </div>
          <div>
            <p>Shop by classic</p>
          </div>
      </div>
    );
  }
  
  export default Main;
  