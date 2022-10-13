import Carro from "./Carro";

function Garagem(props) {
  console.log(props)
  return (
    <div className="fusca">
      <h1 className="GaragemOne">Garagem da {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}> Clique e receba sua mensagem </button>
      

      <Carro 
      modelo={"Fusca"}
      adicionado={props.nome}
      cor={"Azul"}
      ano={1960}
      flex={"Não"}
      />
      {/* <Carro 
      adicionadorPor ={props.nome}
      cor={"Verde"}
      ano={2022}
      flex={"true"}
      /> */}
      {/* <Carro
      adicionadorPor ={props.nome} 
      cor={"Azul"}
      ano={2022}
      flex={"true"}
      />
      <Carro 
      adicionadorPor ={props.nome}
      cor={"Laranja"}
      ano={2022}
      flex={"true"}
      /> */}
    </div>
  );
}

export default Garagem;
