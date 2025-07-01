"use client";

import { useState } from "react";

export default function Configuratore() {
  const [famiglia, setFamiglia] = useState("muro");
  const [larghezza, setLarghezza] = useState(100);
  const [altezza, setAltezza] = useState(200);

  const downloadConfig = () => {
    const data = { famiglia, larghezza, altezza };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "configurazione.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Configuratore Parametrico</h1>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Famiglia di elemento</span>
          <select
            value={famiglia}
            onChange={e => setFamiglia(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
          >
            <option value="muro">Muro</option>
            <option value="trave">Trave</option>
            <option value="solaio">Solaio</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-700">Larghezza (cm)</span>
          <input
            type="number"
            value={larghezza}
            onChange={e => setLarghezza(parseInt(e.target.value))}
            className="mt-1 block w-full border rounded px-2 py-1"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Altezza (cm)</span>
          <input
            type="number"
            value={altezza}
            onChange={e => setAltezza(parseInt(e.target.value))}
            className="mt-1 block w-full border rounded px-2 py-1"
          />
        </label>

        <div className="mt-4">
          <button onClick={downloadConfig} className="bg-green-500 text-white px-4 py-2 rounded">
            Scarica Configurazione
          </button>
        </div>

        <div className="border mt-6 p-4">
          <h2 className="font-bold mb-2">Anteprima</h2>
          <svg width="200" height="200" className="border">
            <rect
              x="10"
              y="10"
              width={larghezza / 2}
              height={altezza / 2}
              fill="lightgray"
              stroke="black"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
