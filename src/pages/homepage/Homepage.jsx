import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./homepage.css";

export default function Homepage() {
  const [cards,setCards] = useState([]);
  const { search } = useLocation();

  console.log(search);
  useEffect(() => {
    const fetchCards = async ()=> {
      const res = await axios.get("/cards" + search)
      setCards(res.data)
    }
    fetchCards()
  },[search])
    
  return (
      <>
        <Header/>
        <div className="home">
          <Cards cards={cards} />
          <Sidebar />
        </div>
      </>
    );
  }