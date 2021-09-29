import CardRazasPerros from "Components/CardRazasPerros";

import borderCollie from "Media/borderCollie.jpg";
import Rhodesian from "Media/rhodesian.jpg";

function Index() {
  return (

       <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardcontainer">
            <CardRazasPerros
              nombreRaza="Borderdercollie"
              imagen={borderCollie}
            />
            <CardRazasPerros nombreRaza="Rhodesian" imagen={Rhodesian} />
            <CardRazasPerros
              nombreRaza="Borderdercollie"
              imagen={borderCollie}
              color="backGroundRojo"
            />
            <CardRazasPerros
              nombreRaza="Rhodesian"
              imagen={Rhodesian}
              color="backGrounVerde"
            />
            {/* <li className="breedCard">
              <div className="contenedorImagen">
                <img src={borderCollie} alt="border Collie" />
              </div>
              <span className="bredTitle">Border Collie</span>
            </li>

            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={Rhodesian} alt="Rhodesian" />
              </div>
              <span className="bredTitle">Rhodesian</span>
            </li>  */}
          </ul>
        </section>


  );
}


export default Index;