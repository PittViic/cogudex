import { useState } from 'react'; 
import dadosDosCogumelos from './data/cogumelos.json';
import CogumeloCard from './components/CogumeloCard';
import type { Cogumelo } from './types'; 

type TipoFiltro = 'todos' | 'comestivel' | 'venenoso' | 'nao-comestivel';

function App() {
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState<TipoFiltro>('todos');
  
  const cogumelos: Cogumelo[] = dadosDosCogumelos;

  const cogumelosFiltrados = cogumelos
    .filter(cogumelo => {
      // 1. Filtra por tipo (comestível, venenoso, etc.)
      if (filtroAtivo === 'todos') {
        return true;
      }
      return cogumelo.tipo === filtroAtivo; // Senão, retorna apenas os do tipo selecionado
    })
    .filter(cogumelo => 
      // 2. Depois, filtra o resultado pelo termo de busca
      cogumelo.nomePopular.toLowerCase().includes(termoBusca.toLowerCase()) ||
      cogumelo.nomeCientifico.toLowerCase().includes(termoBusca.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-amber-50 font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-emerald-800 font-serif">Cogudex</h1>
          <p className="text-lg text-emerald-700 mt-2">Seu guia fofinho para o reino Fungi! 🍄</p>
        </header>

        <div className="mb-12 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar por nome popular ou científico..."
              className="flex-grow p-3 border-2 border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
            <div className="flex items-center gap-2 flex-wrap">
              <button 
                onClick={() => setFiltroAtivo('todos')}
                className={`px-4 py-2 rounded-xl font-semibold transition ${filtroAtivo === 'todos' ? 'bg-emerald-500 text-white ring-2 ring-emerald-600' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}
              >
                Todos
              </button>
              <button 
                onClick={() => setFiltroAtivo('comestivel')}
                className={`px-4 py-2 rounded-xl font-semibold transition ${filtroAtivo === 'comestivel' ? 'bg-green-500 text-white ring-2 ring-green-600' : 'bg-green-200 text-green-900 hover:bg-green-300'}`}
              >
                Comestíveis
              </button>
              <button 
                onClick={() => setFiltroAtivo('venenoso')}
                className={`px-4 py-2 rounded-xl font-semibold transition ${filtroAtivo === 'venenoso' ? 'bg-red-500 text-white ring-2 ring-red-600' : 'bg-red-200 text-red-900 hover:bg-red-300'}`}
              >
                Venenosos
              </button>
            </div>
          </div>
        </div>

        <main>
          {cogumelosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cogumelosFiltrados.map(cogumelo => (
                <CogumeloCard key={cogumelo.id} cogumelo={cogumelo} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl text-stone-500">Nenhum cogumelo encontrado com esse nome. :(</p>
            </div>
          )}
        </main>
        
        <footer className="text-center mt-16 text-stone-500">
          <p>Criado com curiosidade.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;