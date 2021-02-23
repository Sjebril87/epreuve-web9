const Section2 = () => {
  return (
    <div className="App-section2">
        <div className="flex">
      <div className="contenent-left">
        <h1 className="title1">Archives</h1>
        <h1 className="title2">Gustatives</h1>
        <br/>
        <p>
          Un menu de la Maison Salvi vous a séduit? Vous refusez de croire qu'il
          ne reviendra pas à la carte? </p>
          <br/>
          <br/>
          <p>Je vous propose de passer en revue les
          recettes, et donnes votre avis. Choisissez votre favori !
        </p>
        <br/>
        <br/>
        <button className="button2"> VOTER</button>
      </div>
      <div className="contenent-right">
          <div className="image">{<img src="all2.jpg"/>}</div>
      
      </div>
      </div>
      <div className="carousel">
  
      <img src="1.jpg" class="d-block w-100" alt="..."/>
  
      <img src="2.jpg" class="d-block w-100" alt="..."/>
 
      <img src="3.jpg" class="d-block w-100" alt="..."/>
    

      </div>
          
     
    </div>
  );
};

export default Section2;
