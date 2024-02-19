// import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";
import "./singleCard.css";

export default function SingleCard(){
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [card,setCard] = useState({})

    useEffect(() => {
      const getCard = async () => {
        const res = await axios.get("/cards/" + path);
        setCard(res.data)
      };
      getCard()
    }, [path]);
    return (
        <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
        <span className="cardTitle">{card.firstname} {card.lastname}</span>

          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Poster: 
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${card.username}`}>
                {card.username} 
              </Link> 
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
           {card.message}
          <br />
        </p>
      </div>
    </div>
    )
}