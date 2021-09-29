import CardRazasPerros from "Components/CardRazasPerros";
import logo from "Media/logo.png";
import borderCollie from "Media/borderCollie.jpg";
import Rhodesian from "Media/rhodesian.jpg";

function Index() {
  return (
    <div>
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
      <main>
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
              color="backgroundrojo"
            />
            <CardRazasPerros
              nombreRaza="Rhodesian"
              imagen={Rhodesian}
              color="backgroundrojo"
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
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}


export default Index;