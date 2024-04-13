import React from 'react';
import './AboutUsPage.css';
import groupImage from './images/ryhmäkuvaTEMP.jpg'; // HUOM TÄMÄ ON TEMP KUVA
import työntekijä1 from './images/työntekijä1.jpg';
import työntekijä2 from './images/työntekijä2.jpg';
import työntekijä3 from './images/työntekijä3.jpg';
// HUOM kaikki työntekijä kuvat ovat 400x400 px kooltaan.

const AboutUsPage = () => {
  return (
    <div>
      <h1 className="page-title">Tietoa meistä</h1>

      <div className="company-description">
      
    <p>
        Olemme innokkaita teknologia-asiantuntijoita, ammattimaisia valokuvaajia ja videon muokkaajia, jotka jakavat intohimon rakentaa parempaa huomista teknologian avulla.
    </p>
    <h2>Tehtävämme</h2>
    <p>
        Tavoitteenamme on olla virtuaaliteknologian kärjessä ja mahdollistaa jokaiselle yritykselle teknologian tarjoamat edut. Haluamme mullistaa yritysten ja asiakkaiden välisen vuorovaikutuksen verkossa, kaiken tämän tavoitteena on tarjota vertaansa vailla oleva asiakaskokemus.
    </p>
    <h2>Visiomme</h2>
    <p>
        Visiomme on digitaalisesti yhteen kytkeytynyt maailma, jossa virtuaaliteknologian innovatiivinen potentiaali antaa yrityksille, koulutuslaitoksille, terveydenhuoltoalan toimijoille ja yksilöille mahdollisuuden menestyä, uudistua ja luoda yhteistyöllä, mahdollisuuksilla ja rajoittamattomilla potentiaaleilla määriteltyä yhteistä tulevaisuutta.
    </p>
      </div>

      <div className="group-image-container">
        <img src={groupImage} alt="Group Image" />
      </div>

      <h1 className="page-title">Tiimin jäsenet</h1>

      <div className="employee-container">
        
        <div className="employee">
          <img src={työntekijä1} alt="Employee 1" />
          <div className="employee-details">
            <h3>Igor Smirin</h3>
            <p>Virtuality Labs Oy:n toimitusjohtaja ja myyntiedustaja - Igor Smirin</p>
    <p>
        Tähän mennessä olen hoitanut organisoinnin ja myynnin sekä yrityksen strategian suunnittelua.
    </p>
    <p>
        Vuorovaikutustaitoni, oma-aloitteisuus ja kunnianhimoisuus ovat vahvuuksiani, jotka tukevat työtehtävääni. 
    </p>
   
          </div>
        </div>

        <div className="employee">
          <img src={työntekijä2} alt="Employee 1" />
          <div className="employee-details">
            <h3>Aapo Ruusunen</h3>
            <p>Virtuality Labs Oy:n hallituksen puheenjohtaja, talousjohtaja, lakijohtaja ja myyntivastaava</p>
    <p>
        Työtehtäviini kuuluu esimerkiksi myynti, projektien suunnittelu, sopimusten valmisteleminen ja erilaiset taloushallinnon tehtävät.
    </p>
    <p>
        Erinomaiset vuorovaikutustaitoni ja tarkkaavaisuuteni ovat vahvuuksiani, jotka tukevat työnkuvaani.
    </p>
    
          </div>
        </div>

        <div className="employee">
          <img src={työntekijä3} alt="Employee 1" />
          <div className="employee-details">
            <h3>Petja Fenske</h3>
            <p>Virtuality Labs Oy:n tekninen vastaava ja editoija - Petja Fenske</p>
    <p>
        Tässä yrityksessä vastuullani ovat tekniset tehtävät, kuten virtuaalikierrosten rakentaminen, UI/UX-suunnittelu, nettisivujen kehittäminen, videoiden editointi ja kuvaaminen.
    </p>
    <p>
        Yksi vahvuuksistani on kyky oppia nopeasti ja omaksua uutta samanaikaisesti. Lisäksi minulla on vahvat tekniset taidot, kuten ohjelmointi ja Adobe-ohjelmistojen hallinta.
    </p>
   
          </div>
        </div>

        {/* Tähän voi lisätä lisää työntekijöitä tulevaisuudessa. */}
        
      </div>
    </div>
  );
}

export default AboutUsPage;