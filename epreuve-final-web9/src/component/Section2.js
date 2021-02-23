

const Section2 = () => {
    const arry=[
        {
        date:"23 février",
        entrées:["endive, salade croquante et vinaigrette à l'orange", "potage de courge ( selon marché)"],
        plats:["Falafel Burger: Bun's au sarrasin, galette de poischiche frite, coleslaw, sauce tahini , accompagné de pommes de terre sautées.", "Burger Salvi: Bun's au sarrasin, épaule de cochon confite au cidre, sauce BBC maison, champignons, accompagné de pommes de terre sautées." ],
        desserts:["cookie au chocolat", "salade de fruits frais"]
        },
        {
        date:"22 février",
        entrées:["Toast de Labneh et salade verte", "soupe de carottes aux fines herbes"],
        plats:["Poêlée poireaux champignons échalotes, Tagliatelle maison, sauce Gorgonzola", "Bœuf Bourguignon, Tagliatelle maison" ],
        desserts:["Carrot cake amandes, noisettes, citron", "Panna Cotta, coulis de poire, spéculos"]
        },
        {
        date:"19 février",
        entrées:["Salade de lentilles et feta, vinaigrette au miel", "Velouté pois cassés coco"],
        plats:["Brandade de lieu au citron vert et brocoli vapeur", "carottes, buternut et 1/2 oignon rouge rôtis au balsamique, pesto de feuilles de céleri  et mascarpone, riz noir" ],
        desserts:["Salade de fruits", "Crêpe caramel au beurre salée"]
        },
        {
        date:"18 février",
        entrées:["Velouté de potimarron", "salade d'hiver composée et vinaigrette à l'orange"],
        plats:["Saucisse aux herbes et polenta crémeuse, sauce au vin rouge thym et oignons confits", "Gratin de Crozets, poireau champignons et comté" ],
        desserts:["Compote de pommes au Calvados et tuiles de sarrasin", "Muffin au citron"]
        }]
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
      <div id="modal">{}
              <hr />
              <div class="ml-auto">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="https://fr.wikipedia.org/wiki/Astrologie_chinoise">
                    See more
                  </a>
                </button>
                <button
                  class="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                  Close
                </button>
              </div>
            </div>
     
    </div>
  );
};

export default Section2;
