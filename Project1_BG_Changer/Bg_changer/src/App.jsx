import './App.css'
function App() {
  function change(x){
    document.body.style.backgroundColor = x
  }
  return (
    <>
      <div>
        <button onClick={()=>change("beige")}>Beige</button>
        <button onClick={()=>change("black")}>Black</button>
        <button onClick={()=>change("blue")}>Blue</button>
        <button onClick={()=>change("red")}>Red</button>
        <button onClick={()=>change("yellow")}>Yellow</button>
        <button onClick={()=>change("green")}>Green</button>
        <button onClick={()=>change("grey")}>Grey</button>
        <button onClick={()=>change("brown")}>Brown</button>
      </div>
    </>
  )
}

export default App
