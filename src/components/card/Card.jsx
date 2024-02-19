import "./card.css"
import { Link } from "react-router-dom";
export default function Card({card}){
    return (
            <div className="card">
              {/* {card.photo && ( */}
              {(
                <Link to={`/card/${card._id}`}>
                  <img
                  className="cardImg"
                  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
              />
              </Link>
              )
              }
            	            
              {card.photo}
              
            <div className="cardInfo">
              <div className="cardCats">
                {/* <span className="cardCat">
                {card.firstname}
                   
                </span> */}
                {/* <span className="cardCat">
                  <Link className="link" to="/card">
                  
                  </Link>
                </span> */}
              </div>
              
              <hr />
              <Link to={`/card/${card._id}`} className="link">
                <span className="cardTitle">{card.firstname} {card.lastname}</span>
              </Link>
              <hr />
              <span className="cardTitle">
                {card.placeofdeath} 
              </span>
              <hr/>
              <span className="cardTitle">                
                {card.dateofdeath}
              </span>
              <span className="cardDate">1 hour ago</span>
            </div>
            <p className="cardDesc">
              {card.message}
            </p>
          </div>
    
    );
}