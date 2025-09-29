// import { useState } from "react";
import fist_icon from "../assets/fist_icon.svg";

// import paper_icon from "../assets/paper_icon.svg";
// import scissors_icon from "../assets/scissors_icon.svg";

import "../App.css";

export default function GameplayBlock() {
  // const [newMove, setNewMove] = useState({ fist });

  // const PlayerMove = (props) => {
  //   setNewMove(props);
  // };

  return (
    <div className="flex gap-[58px] justify-center">
      <img src={fist_icon} className="scale-x-[-1] w-[100px] h-[100px]" />

      <div className="text-[20px] font-bold font-display text-black mt-[50px] mb-[26px]">
        VS
      </div>
      <img src={fist_icon} className="w-[100px] h-[100px]" />
    </div>
  );
}
