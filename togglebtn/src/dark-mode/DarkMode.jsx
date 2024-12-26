import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import "./style.scss";

const DarkMode = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="container">
        {/* change background color on specific condition */}
        <div className={`container-box ${toggle ? "active" : "container-box"}`}>
          <div className="container-box-heading">
            <h1>Dark mode challanges</h1>

            {/* get input on user click */}
            <div onClick={() => setToggle(!toggle)}>

              {/* show icon on condition */}
              {toggle ? <CiSun className="sun" /> : <FaMoon className="moon" />}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum itaque tempora adipisci consequatur, soluta molestias eos placeat expedita unde dolores ex alias libero aspernatur quia et fuga quas praesentium!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, doloremque eum excepturi fugiat amet minima quibusdam eos provident explicabo et ipsam ducimus reprehenderit eaque dolor aut, molestias libero maiores doloribus?
          </p>
        </div>

      </div>
    </>

  );
};

export default DarkMode;
