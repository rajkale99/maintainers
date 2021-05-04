import React, { useEffect } from "react";
import style from "./contributors.module.css";
import "./contributors.module.css";

const Contributor = () => {
  const [arr, setarr] = React.useState([]);
  const [switchmaintainer] = React.useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://raw.githubusercontent.com/legionos-devices/OTA/11/devices.json"
      );
      response = await response.json();
      setarr(response);
    }

    fetchMyAPI();
  }, []);
  return (
    <div className={style["home"]}>
      <div>
        <div>
            <div className={style["title"]}>
              LEGIONOS TEAM
             </div>
            </div>
        </div>
        <div className={style["switch_button"]}>
        </div>
        {switchmaintainer && (
          <div className={style["all-cards"]}>
            {arr.map((element, i) => {
              return (
                <div key={i} className={style["card-item"]}>
                  
                    <img
                      src={element.photo}
                      alt=""
                      className={style["main-photo"]}
                    />
                    <div
                      className={style["card-title"]}
                      
                    >
                      
                      <b>{element.maintainer_name}</b>
                    </div>

                    <div
                      className={style["main-subtitle"]}
                      style={{ fontSize: "15px" }}
                    >
          
                      {element.name}
                    </div>
<br></br>
                    <a href={element.github_link} className={style["custom-btn"]}>Github</a>
                    &nbsp; &nbsp; &nbsp;
                    <a href={element.telegram_link} className={style["custom-btn"]}>Telegram</a>

                  
                </div>
              );
            })}
          </div>
    
        )}
<br></br><br></br><br></br>
      </div>
  );
};
export default Contributor;
