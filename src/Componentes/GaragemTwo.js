import CarroTwo from "./CarroTwo"

function GaragemTwo(props){
    console.log(props)
return (
    <div className="hb20">
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.mensagemApresentacao} >Clique e receba sua mensagem</button>
      

      <CarroTwo 
      modelo={"HB20"}
      adicionado={props.nome}
      cor={"Prata"}
      ano={2022}
      flex={"Sim"}
      />
    </div>
  );
}

export default GaragemTwo;