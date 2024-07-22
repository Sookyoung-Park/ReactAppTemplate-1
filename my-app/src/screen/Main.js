import React from "react";
import Navbar from "../component/Navbar";
import mainbanner from '../imgs/mainbanner.png';
import Text from "../component/Text";
import ButtonB from "../component/Button2";
import Twobytwolayout from "../component/Twobytwolayout";

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
            <Twobytwolayout/>
            <Text title={"NEXT THIS WEEK"} subtitle={""}/>
            <ButtonB text={"Shop New Arrivals"}/>
          </div>
          <div style={{marginTop:'160px'}}>
          </div>
      </div>
    );
  }
  
  export default Main;
  