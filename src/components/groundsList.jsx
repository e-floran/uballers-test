import { Link } from 'react-router-dom';
import data from "../assets/test-Uballers-groundsData.json";

export default function GroundsList(){
    return(
        <div className="contentContainer">
                <h2>Liste des terrains</h2>
            <section className="groundSelector">
            {
            Object.values(data).map((ground) => {
                console.log(ground)
                return (
                    <Link key={ground.groundId} to={`/${ground.groundId}`}>{ground.groundName}</Link>
                )
            })}
            </section>
        </div>
    )
};