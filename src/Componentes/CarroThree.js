function CarroThree(props){
    console.log(props.cor)

    return(

        <div>
            <h2>Fiat</h2>
                <div>
                    <section> Modelo: {props.modelo}</section><br></br>
                    <section>Adicionado Por: {props.adicionado}</section><br></br>
                    <section>Cor: {props.cor}</section><br></br>
                    <section>Ano: {props.ano}</section><br></br>
                    <section>Flex: {props.flex}</section><br></br>

                </div>
        </div>
    )

}

export default CarroThree;