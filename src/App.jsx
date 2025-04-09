import { useState } from "react";

import boardgames from "./data/boardgames";

function App() {

  const [items, setItems] = useState('');

  return (
    <>
      {/* // Lista dei prodotti */}
      <ul>
        {boardgames.map(boardgame => <li key={boardgame.id}>{boardgame.title}</li>)}
      </ul>

      <form>
        <input
          type="text"
          value={items}
          onChange={e => { setItems(e.target.value) }}
        />
      </form>
    </>
  )
}

export default App;