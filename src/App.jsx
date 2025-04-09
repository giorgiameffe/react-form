import boardgames from "./data/boardgames";

function App() {


  return (
    <>
      <ul>
        {boardgames.map(boardgame => <li>{boardgame.title}</li>)}
      </ul>
    </>
  )
}

export default App;