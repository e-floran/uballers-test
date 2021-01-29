export default function Ground(props){
    const {name, adress, limit, price, baskets, transport}=props;

    let filteredPrice = "";
    if (price===""){
        filteredPrice = ", accès libre";
    } else{
        filteredPrice = price;
    };
    let access = "";
    if (limit==="" && price===""){
        access = "Aucune information enregistrée";
    } else{
        access = limit + filteredPrice;
    }

    return(
        <div>
            <header>
                <h1>{name}</h1>
                <button>Ajouter aux favoris</button>
            </header>
            <section className="contentContainer">
                <article className="localisationContainer">
                    <h2>Localisation</h2>
                    {adress!==""
                        ? <p>{adress}</p>
                        : <p>Aucune adresse enregistrée</p>
                    }
                </article>
                <article  className="detailsContainer">
                    <h2>Détails du terrain</h2>
                    <p>Accessibilité : {access}</p>
                    {baskets!==""
                        ? <p>Nombre de paniers : {baskets}</p>
                        : <p>Nombre de paniers : information non enregistrée</p>
                    }
                    {transport!==""
                        ? <p>Accès en transports : {transport}</p>
                        : <p>Accès en transports : information non enregistrée</p>
                    }
                </article>
            </section>
        </div>
    );
};