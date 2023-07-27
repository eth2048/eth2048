import React, { useState } from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";

import "./App.less";

/* eslint-disable react/jsx-no-target-blank */
export const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>2048 ETH</h1>
        </div>
        <div>
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
      <Game key={date.toISOString()} />
      <div>
      <p>
      <b>This game (2048) was built for degens.</b> so I hope you can learn your lesson from it.
        </p>
        <p>
          <b>Wondering what is next for the game?</b> You can find a plan here:
        </p>
        <ul>
          <li>
              Dapp Intergration soon
          </li>
          <li>
            Chat soon
          </li>
          <li>
              Scoreboard soon
          </li>
          <li>
              Reward soon
          </li>
          <li>
              Mooning soon
          </li>
        </ul>
      </div>
      <div className="footer">
        Made with ❤️ by{" "}
          bunch of degens
      </div>
    </div>
  );
};
/* eslint-enable react/jsx-no-target-blank */
