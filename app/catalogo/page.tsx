import { catalogData } from "@/lib/catalogData";
import Image from "next/image";

export default function Catalogo() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Catalogo di Esempi</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {catalogData.map(item => (
          <div key={item.id} className="border rounded-lg p-4 shadow">
            <Image src={item.immagine} alt={item.nome} width={300} height={200} className="rounded"/>
            <h2 className="text-xl font-bold mt-2">{item.nome}</h2>
            <p className="text-gray-700">{item.descrizione}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
