import Garagem from "./Componentes/Garagem";
import GaragemTwo from "./Componentes/GaragemTwo";
import GaragemThree from "./Componentes/GaragemThree"
import "./styles.css";

export default function App() {
  const nome = "Ammal-A"
  const nomeA = "Carlos"
  const nomeB = "Bergson"
  // const nomeC = "Louzada"

  function apresentaGaragem(){
    alert(`Bem-Vindo a Garagem da turma ${nome}`)
  }
  function apresentaGaragemA(){
    alert(`Bem-Vindo a Garagem de ${nomeA}`)
  }
  function apresentaGaragemB(){
    alert(`Bem-Vindo a Garagem de ${nomeB}`)
  }
  // function apresentaGaragemB(){
  //   alert(`Boas vindas a garagem de ${nomeB}`)
  // }
  // function apresentaGaragemC(){
  //   alert(`Boas vindas a garagem de ${nomeC}`)
  // }
  

  return (
    <div className="App">
      <Garagem nome={nome} mensagemApresentacao ={apresentaGaragem} />
      <GaragemTwo nome={nomeA} mensagemApresentacao={apresentaGaragemA} />
      <GaragemThree nome={nomeB} mensagemApresentacao={apresentaGaragemB}/>
      {/* <Garagem nome={nomeB} mensagemApresentacao={apresentaGaragemB} />
      <Garagem nome={nomeC} mensagemApresentacao={apresentaGaragemC} /> */}
    </div>
  );
}
