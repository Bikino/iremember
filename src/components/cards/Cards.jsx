import Card from "../card/Card";
import "./cards.css"

export default function Cards({ cards }) {
     
    return (
        <div className="cards">
            {cards.map((p)=> (
                <Card card={p} />               
            ))}        
        </div> 
    );
}