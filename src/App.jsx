import react1 from "../public/react.png"

export default function App(){
  return(
    <div className="App">
      <img src={react1} alt="" />
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuários</p>
      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr />
      <h1>Crie interfaces de usuários de componentes</h1>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamaos componentes</p>
      <hr />
      <h1>Escreva componentes com cóigo de marcação</h1>
      <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão de sintaxe e JavaScript popularizada pelo React </p>
      <hr />
      <h1>Próximos passos</h1>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutlização de componente</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  )
}
