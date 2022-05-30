import React, { useContext } from "react";
import { Screen } from "./ScreenStyle";
import { CalcContext } from "../../CalcContext";

const Display = () => {
  const { display } = useContext(CalcContext);
  return (
    <Screen>
      <h2>{display}</h2>
    </Screen>
  );
};

export default Display;
