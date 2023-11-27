"use client";
import { useState } from "react";
import alienPlanets from "./lib/planets.jsx"
import Divider from "./components/divider.jsx";
import Spacer from "./components/spacer.jsx";
import Image from "next/image"

export default function Home() {
  const [planets, setPlanets] = useState(alienPlanets);

  return (
    <main>
      <p>1</p>
      <Divider />
      <div className = "blueSquare"></div>
      <Spacer />
      <p>2</p>
      <Divider />
      <div>
        <Image src={"/pingu.png"} width={500} height={500} />
      </div>
      <Spacer />
      <p>3</p>
      <Divider />
      <h3>Alien Planets</h3>
      <div className="planets-container">
      {planets.map((planet) => {
        return (
            <div className="planet-info">
              <p className="title">{planet.emoji}</p>
              <p className="title">{planet.name}</p>
              <p>{planet.name} is {planet.distanceFromEarth} from earth. {planet.name} is believed to 
              {planet.hasLife === true ? ' have life. ' : ' not have life. '}
              The atmosphere of {planet.name} is {planet.atmosphere}.</p>
            </div>
        );
      })}
      </div>
    </main>
  );
}