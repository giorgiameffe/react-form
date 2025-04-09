import { useState } from "react";

import boardgames from "./data/boardgames";

function App() {

  // useState di riferimento --> array di oggetti (prodotti)
  const [items, setItems] = useState(boardgames);

  // useState iniziale dell'input 
  const [newItem, setNewItem] = useState('');

  // salvare in una variabile la creazione dell'id
  const id = parseInt((items.at(-1).id) + 1);

  // creare nuovo prodotto con incremento id e rispettivo titolo
  const newArticle = {
    id,
    title: newItem
  }

  // aggiungere nuovo prodotto tramite spread operator
  const addNewItem = event => {
    event.preventDefault();
    const updatedItems = [...items, newArticle];
    setItems(updatedItems);
    setNewItem('');
    console.log('Aggiunto il prodotto ' + newItem)
  }


  return (
    <>
      {/* Lista dei prodotti */}

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>

      {/* Form */}

      <form onSubmit={addNewItem}>
        <input
          type="text"
          value={newItem}
          onChange={e => { setNewItem(e.target.value) }}
        />
        <button>Aggiungi nuovo prodotto</button>
      </form>
    </>
  )
}

export default App;