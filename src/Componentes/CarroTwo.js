function CarroTwo(props) {
  console.log(props.cor)
  return (
    <div>
      <h2>Hyundai</h2>
          <div>
              <section>Modelo: {props.modelo}</section><br></br>
              <section>Cor: {props.cor}</section><br></br>
              <section>Ano: {props.ano}</section><br></br>
              <section>Flex: {props.flex}</section><br></br>
              <section>Adicionado Por: {props.adicionado}</section><br></br>
          </div>
      {/* <h2>Hyundai</h2>
      <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>AdicionadorPor: {props.adicionadorPor}</li>
      <h2>Chevrolet</h2>
      <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>AdicionadorPor: {props.adicionadorPor}</li>
      <h2>Fiat</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>AdicionadorPor: {props.adicionadorPor}</li>
      </ul> */}
    </div>
    
  );
}

export default CarroTwo;
