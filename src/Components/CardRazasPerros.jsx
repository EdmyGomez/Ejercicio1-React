import {Link} from 'react-router-dom';


function CardRazasPerros (props) {
    // dentro del props {nombreRaza},{imagen}
    return (
      <li className="breedCard">
        <Link to='/Rhodesian'>
        <div className="contenedorImagen">
          <img src={props.imagen} alt={props.nombreRaza} />
        </div>
        </Link>
        <span className="bredTitle">{props.nombreRaza}</span>
      </li>
    );
  }

  export default CardRazasPerros;