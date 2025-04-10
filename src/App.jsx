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

  // rimuovere prodotto utilizzando filter --> restituisce un nuovo array con i prodotti rimanenti
  const removeItem = i => {
    const updateItems = items.filter((item, index) => {
      return index !== i
    })

    setItems(updateItems);
  }

  return (
    <>
      <div className="container">
        <h1>Giochi da tavola</h1>

        {/* Lista dei prodotti */}

        <ul>
          {items.map((item, i) => (
            <li key={i}>{item.title} <button className="btn" onClick={() => removeItem(i)}><i class="fa-solid fa-trash trash"></i></button></li>
          ))}
        </ul>

        {/* Form */}

        <form onSubmit={addNewItem}>
          <input
            type="text"
            value={newItem}
            onChange={e => { setNewItem(e.target.value) }}
          />
          <button className="btn">Aggiungi nuovo prodotto</button>
        </form>
      </div>
    </>
  )
}

export default App;