import { useState } from "react";

import boardgames from "./data/boardgames";

function App() {

  // useState iniziale --> array di oggetti (prodotti)
  const [items, setItems] = useState(boardgames);
  // useState all'aggiunta del nuovo prodotto
  const [newItem, setItem] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Aggiunto il prodotto ' + newItem)
  }

  return (
    <>
      {/* // Lista dei prodotti */}

      <ul>
        {boardgames.map(boardgame => <li key={boardgame.id}>{boardgame.title}</li>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={e => { setItem(e.target.value) }}
        />
      </form>
    </>
  )
}

export default App;