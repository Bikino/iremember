import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar"
import SingleCard from "../../components/singleCard/SingleCard";

export default function Single(){
    return (
        <div className="single">
            <SingleCard/>
            <Sidebar/>
        </div>
    )
}