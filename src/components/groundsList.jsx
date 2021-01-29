import { Link } from 'react-router-dom';
import data from "../assets/test-Uballers-groundsData.json";

export default function GroundsList(){
    return(
        <div className="contentContainer">
                <h2>Liste des terrains</h2>
            <section>
            {
            Object.values(data).map((ground) => {
                console.log(ground)
                return (
                    <button key={ground.groundId}><Link to={`/${ground.groundId}`}>{ground.groundName}</Link></button>
                )
            })}
            </section>
        </div>
    )
};