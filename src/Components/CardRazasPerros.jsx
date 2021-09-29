import {Link} from 'react-router-dom';


function CardRazasPerros (props) {
    // dentro del props {nombreRaza},{imagen}
    return (
      <li className="breedCard">
        <Link to="/Rhodesian">
          <div className={props.color}>
            <div className="contenedorImagen">
              <img src={props.imagen} alt={props.nombreRaza} />
            </div>
            <span className="bredTitle">{props.nombreRaza}</span>
          </div>
        </Link>
      </li>
    );
  }

  export default CardRazasPerros;