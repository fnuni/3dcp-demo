import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function EdilElement({ type, width, height, depth }) {
  const colorMap = {
    muro: "orange",
    trave: "steelblue",
    solaio: "green",
    pilastro: "brown"
  };
  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={colorMap[type]} />
    </mesh>
  );
}

export default function App() {
  const [type, setType] = useState("muro");
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(0.3);
  const [density, setDensity] = useState(50);

  const volume = (width * height * depth).toFixed(2);
  const printTime = ((volume * density) / 10).toFixed(1);
  const maxLoad = (volume * 10 * (density / 100)).toFixed(1);
  const safetyFactor = (maxLoad / 2).toFixed(1);

  const elements = ["muro", "trave", "solaio", "pilastro"];

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div style={{ flex: 1, padding: 20, backgroundColor: "#f3f4f6", overflowY: "auto" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Dimostratore Piattaforma 3DCP</h1>

        <div>
          <label style={{ fontWeight: "600" }}>Tipo elemento:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "4px", marginBottom: "10px" }}
          >
            {elements.map((el) => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
        </div>

        <label>
          Lunghezza: {width} m
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.1"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Altezza: {height} m
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Spessore: {depth} m
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.05"
            value={depth}
            onChange={(e) => setDepth(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Densità riempimento: {density}%
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={density}
            onChange={(e) => setDensity(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>

        <div style={{ marginTop: 20, padding: 10, backgroundColor: "white", borderRadius: 6, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <p><strong>Volume:</strong> {volume} m³</p>
          <p><strong>Tempo stampa stimato:</strong> {printTime} h</p>
          <p><strong>Carico massimo:</strong> {maxLoad} kN</p>
          <p><strong>Fattore di sicurezza:</strong> {safetyFactor}</p>
        </div>

        <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
          <button>Esporta G-Code</button>
          <button>Esporta BIM</button>
          <button>Richiedi produzione</button>
        </div>
      </div>

      <div style={{ flex: 1, backgroundColor: "black" }}>
        <Canvas camera={{ position: [5, 5, 5] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <EdilElement type={type} width={width} height={height} depth={depth} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}