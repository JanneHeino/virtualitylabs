import React from 'react';
import './ServicesPage.css';
import valokuvaus1 from './images/valokuvaus.jpg';
import lyseo from './images/lyseo.PNG';
import videotuotanto from './images/videotuotanto.jpg';

const ServicesPage = () => {
  
  return (
    <div className="services-container">
       <h1 className="services-title">Palvelut</h1>
      <p>Täältä pääset tutustumaan meidän palveluihin.
        Palvelu tarjontaamme kuuluvat virtuaalikerrokset, videotuotanto sekä valokuvaaminen.<br></br>
        Ethän epäröi ottaa yhteyttä, jos jokin jäi mietityttämään. Yhteydenottaminen onnistuu "Ota Yhteyttä" sivulla olevan lomakkeen kautta.
      </p>
      
      <div className="service-item">
        <div className="service-text1">
          <h2>Virtuaalikierrokset</h2>
          <p>Virtuaalikierrokset ovat interaktiivisia digitaalisia matkoja,
            jotka mahdollistavat käyttäjilleen mahdollisuuden tutkia paikkoja,
            tiloja tai kohteita ilman, että heidän tarvitsee fyysisesti olla paikan päällä.
            Nämä kierrokset ovat yhä suositumpia, ja niitä käytetään monilla eri aloilla,
            kuten matkailussa, kiinteistöalalla, koulutuksessa ja kulttuuriperinnön säilyttämisessä.
            Virtuaalikierrosten laajuus ja monipuolisuus ovat lisääntyneet teknologisten edistysaskelten myötä,
            ja niistä on tullut tehokas väline monenlaisiin tarkoituksiin.</p>
        </div>
        <img src={lyseo} alt="lyseo" className="service-image" />
      </div>
      
      <div className="service-item reverse-item">
        <div className="service-text2">
          <h2>Videotuotanto</h2>
          <p>Videotuotannossamme painotamme asiakaslähtöisyyttä ja laadukasta tulosta.
            Tavoitteenamme on täyttää asiakkaiden toiveet ja tarjota vaikuttavia videoita.
            Olemme sitoutuneet innovaatioon ja tarinankerrontaan, ja pyrimme pysymään alan kärjessä..</p>
        </div>
        <img src={videotuotanto} alt="videotuotanto" className="service-image" />
      </div>
      
      <div className="service-item">
        <div className="service-text3">
          <h2>Valokuvaus</h2>
          <p>Valokuvauksessa pyrimme luomaan läheisen ja kotoisan tunnelman,
            jotta asiakkaat voivat ilmaista itseään luontevasti ja tuntea olonsa mukavaksi.
            Tavoitteenamme on ikuistaa heidän ainutlaatuinen kauneutensa ja persoonaansa..</p>
        </div>
        <img src={valokuvaus1} alt="Valokuvaus" className="service-image" />
      </div>

      
    </div>
  
  );
}


export default ServicesPage;