import Ground from "./ground";
import data from "../assets/test-Uballers-groundsData.json";

export default function GroundsList(){
    return(
        <div >
            <header>
                <h1>Liste des terrains</h1>
            </header>
            <section  className="contentContainer">
            {
            Object.values(data).map((ground) => {
                console.log(ground)
                return (
                    <button>{ground.groundName}</button>
                )
            })}
            </section>
        </div>
    )
};