import "./styles.css";
import React, { useEffect } from "react";
import data from "./static";

export default function App() {
  const [trafficLight, setTrafficLight] = React.useState(data[0]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTrafficLight(data[trafficLight.next - 1]);
    }, trafficLight.timer);
    return () => clearInterval(timer);
  }, [trafficLight]);
  return (
    <div id="app">
      <div class="main-div">
        {data?.map((item) => {
          return (
            <div
              class="child-div1"
              style={
                item.id === trafficLight.id
                  ? {
                      backgroundColor: trafficLight.color,
                      border: "1px solid black",
                    }
                  : {}
              }
            ></div>
          );
        })}
      </div>
      <div class="traffic-bar"></div>
      <div className="line"></div>
    </div>
  );
}
