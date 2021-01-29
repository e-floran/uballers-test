import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import data from "../assets/test-Uballers-groundsData.json";

export default function Ground(){
    const {id} = useParams();
    const [groundDetails, setGroundDetails] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() => {
        setGroundDetails(()=>{
            return Object.values(data).find((e) => e.groundId === id);
        });
        if(!localStorage["favoriteGrounds"]){
            localStorage.setItem('favoriteGrounds', JSON.stringify({}));
        } else{
            let favoriteCheck = JSON.parse(localStorage["favoriteGrounds"]);
            if(Object.keys(favoriteCheck).includes(id)){
                setIsFavorite(true);
            }
        }
    },[id]);
    // useEffect(()=>{
    //     if(!localStorage["favoriteGrounds"]){
    //         localStorage.setItem('favoriteGrounds', JSON.stringify({}));
    //     } else{
    //         let favoriteCheck = JSON.parse(localStorage["favoriteGrounds"]);
    //         if(Object.keys(favoriteCheck).includes(id)){
    //             setIsFavorite(true);
    //         }
    //     }
    // },[id]);
    function favoriteHandler(){
        let stockFavorite = JSON.parse(localStorage["favoriteGrounds"]);
        stockFavorite[id] = true;
        localStorage.removeItem('favoriteGrounds');
        localStorage.setItem('favoriteGrounds', JSON.stringify(stockFavorite));
        setIsFavorite(true);
    }
    
    const {groundName, adress, limit, price, basketNumber, transport}=groundDetails;

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
        <div className="contentContainer">
                <h1>{groundName}</h1>
                {isFavorite
                ? <p><span>★</span>Ce terrain a été ajouté à mes favoris.</p>
                : <button onClick={favoriteHandler}>Ajouter aux favoris</button>
                }
                
            <section>
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
                    {basketNumber!==""
                        ? <p>Nombre de paniers : {basketNumber}</p>
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