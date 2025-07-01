export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Piattaforma 3DCP ETSGFGSF + UNIPPPPP</h1>
      <p className="mb-4">
        Questa piattaforma digitale facilita l'adozione della stampa 3D robotica per l'edilizia,
        offrendo strumenti per la configurazione, visualizzazione e analisi strutturale di componenti edilizi.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Catalogo pubblico interattivo</li>
        <li>Configuratore parametrico</li>
        <li>Download modelli personalizzati</li>
      </ul>
      <div className="flex space-x-4">
        <a href="/catalogo" className="bg-blue-500 text-white px-4 py-2 rounded">Vai al Catalogo</a>
        <a href="/configuratore" className="bg-green-500 text-white px-4 py-2 rounded">Apri il Configuratore</a>
      </div>
    </main>
  );
}
