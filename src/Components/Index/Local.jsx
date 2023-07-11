import React from "react";
import { Marker, LoadScript, GoogleMap } from "@react-google-maps/api";
import "./local.css";

const Local = () => {
 

  const defaultCenter = {
    lat: -23.55395905109023,
    lng: -46.687473872690674,
  };
  const svgIcon = {
    path: "M12 2C6.48 2 2 6.48 2 12c0 4.41 3.58 8 8 8s8-3.59 8-8c0-5.52-4.48-10-10-10zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    fillColor: 'blue',
    fillOpacity: 1.0,
    strokeWeight: 0,
    scale: 1.5
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
                icon={svgIcon}
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
