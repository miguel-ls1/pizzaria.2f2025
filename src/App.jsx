import { useState } from "react";
function App(){

  const [nome, setNome] = useState("Memphis")

 // var nome = "hugo souza";

  return (
    <div>
      <h3>pizzaria 2F</h3>
      <input
      className="nome" 
      name="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      placeholder="Digte um nome..."
      type="text"/>
      <button 
      className="botao"
      onClick={()=>{alert(nome)}}>
        CLIQUE AQUI!!
      </button>
    </div>
  )
}
export default App