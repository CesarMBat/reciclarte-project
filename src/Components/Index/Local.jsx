import { Marker, LoadScript, GoogleMap } from "@react-google-maps/api";
import "./local.css";

const Local = () => {
 

  const defaultCenter = {
    lat: -23.55395905109023,
    lng: -46.687473872690674,
  };
  
  return (
    <div>
      <main className="main-local">
        <section className="section-left-local">
          <h1 className="h1-local">Nossa Localização</h1>
          <p className="p-local">
            Estamos localizados na Rua Madalena, 172 - Vila Madalena, São Paulo
            - SP
            <br />
            Venha nos visitar para fazer/receber seu pedido
          </p>
        </section>
        <div>
          <LoadScript googleMapsApiKey="AIzaSyCBdQvOKHqwDKWEQhCXTgo9SC4FHOH3l-A">
            <GoogleMap
              mapContainerClassName="mapStyles"
              zoom={15}
              center={defaultCenter}
            >
              <Marker
                position={defaultCenter}
                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              >
              </Marker>
            </GoogleMap>
          </LoadScript>
        </div>
      </main>
    </div>
  );
};

export default Local;
