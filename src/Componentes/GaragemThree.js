import CarroThree from "./CarroThree";


function GaragemThree(props){
    console.log(props)

return(
        <div className="Fiat">
            <h1 className="GaragemThree">Garagem do {props.nome}</h1>
            <button onClick={props.mensagemApresentacao}>Clique e receba sua mensagem</button>

        <CarroThree
        modelo={"Uno"}
        adicionado={props.nome}
        cor={"Branco"}
        ano={1980}
        flex={"Não"}
        />
        </div>
)
}


export default GaragemThree;