import React from 'react';

import { useState } from 'react';
function SingleColorPicker({ color, value, onColorChange }) {
  let colorIndividual = `rgb(${color === 'r' ? value : '0'},${
    color === 'g' ? value : '0'
  },${color === 'b' ? value : '0'})`;

  return (
    <div className="p-4 flex ">
      <div
        className=" p-4  w-28 h-28"
        style={{ background: colorIndividual }}
      ></div>
      <label className="p-4">{color.toUpperCase()}</label>
      <input
        className="border p-4"
        type="number"
        min={0}
        max={255}
        value={value}
        onChange={onColorChange}
      />
    </div>
  );
}

export default function RGBColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  let finalColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="mx-auto flex p-4">
      <div className="p-4">
        <p>RGBColorPicker</p>
        <SingleColorPicker
          color="r"
          value={red}
          onColorChange={(e) => setRed(e.target.value)}
        />
        <SingleColorPicker
          color="g"
          value={green}
          onColorChange={(e) => setGreen(e.target.value)}
        />
        <SingleColorPicker
          color="b"
          value={blue}
          onColorChange={(e) => setBlue(e.target.value)}
        />
      </div>
      <div className="p-4">
        <h1>COLOR FINAL</h1>
        <div
          className=" p-4  w-28 h-28"
          style={{ background: finalColor }}
        ></div>
        <p>{finalColor}</p>
      </div>
    </div>
  );
}
