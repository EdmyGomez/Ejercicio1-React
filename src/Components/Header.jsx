import logo from "Media/logo.png";

const Header = () => {
return (
  <header>
    <ul className="navbar">
      <li>
        <img src={logo} alt="Imagen" className="logo" />
      </li>
      <li>
        <button className="button mainButton">Nuevo Post</button>
      </li>
      <li>
        <div className="buscar">
          <input placeholder="Buscar una raza" />
          <i className="fas fa-search button iconobusqueda"></i>
        </div>
      </li>
      <li>
        <button className="button secondaryButton">Login</button>
      </li>
      <li>
        <button className="button mainButton">Registro</button>
      </li>
    </ul>
  </header>
);

};

export default Header;

// const variableNumerica= 3;
// const variableTexto = "Esto es un texto";
// const variableArray= [1, 2, 3, 4];
// const VariableObjeto= {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3',
// };
// const variableObejtos=[
// {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3', 
// },
// {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3', 
// },
// {
//     llave1: 'valor1',
//     llave2: 'valor2',
//     llave3: 'valor3', 
// },
// ];

// const nombreFuncion=(in1, in2, in3) => {
//     return 'Retorno de la funcion';

// }

// function nombreFuncione(in1, in2, in3){
// return 'Retorno de la funcion';
// }

