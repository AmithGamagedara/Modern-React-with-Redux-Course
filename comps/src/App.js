import React from "react";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoGift, GoFlame } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      App
      <div className="m-3">
        <Button success rounded outline onClick={handleClick} className="mb-5">
          <GoBell />
          Click me!{" "}
        </Button>
      </div>
      <div className="m-3">
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy now!{" "}
        </Button>
      </div>
      <div className="m-3">
        <Button warning>
          <GoGift /> See deal{" "}
        </Button>
      </div>
      <div className="m-3">
        <Button secondary outline>
          Hide Ads!{" "}
        </Button>
      </div>
      <div className="m-3">
        <Button primary rounded>
          <GoFlame /> Something!{" "}
        </Button>
      </div>
    </div>
  );
}

export default App;
