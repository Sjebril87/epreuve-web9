const Section1 = () => {
  return (
    <div className="App-section1">
      <div className="cercle"></div>
      <div className="contenent">
        <div className="section-contenent">
          <div className="cercle2"> </div>
          <div className="text">
            <p>
              La Maison de Salvi offre chauqe jour le choix entre un menu acrné
              ou végé:10€ livraison incluse (sur Rennes uniquement).
            </p>
            <p>
              Des produits sains et simples, de saison, mis en musique et en
              couleur par le Chef Pablo. Qui d'autre aurait pu réconcilier la
              famille autour d'une idée aussi simple et chaleureuse?
              <br />
              <br />
              Il est temps de passe commande !
              <br />
              <br />
            </p>
          </div>
          <button className="button" id="btn">
            MENU DU JOUR
          </button>
        </div>
        <div className="chef-photo" style={{height:100,width:400, marginRight:240, marginTop:107}}>{<img src="cuistot1.jpg"/>}</div>
        
      </div>
      <div className="cercle3"></div>
    </div>
  );
};

export default Section1;
