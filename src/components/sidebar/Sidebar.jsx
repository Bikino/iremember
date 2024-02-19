import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";

export default function Sidebar() {
  const [sites, setSites] = useState([]);
  useEffect(() => {
    const getSites = async () => {
      const res = await axios.get("/sites");
      setSites(res.data)
    };
    getSites();

  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">MEMORIAL SITES</span>
        <ul className="sidebarList">
           {sites.map((s) =>(
            <li className="sidebarListItem">           
              {<Link className="link" to={`/?site=${s.sitename}`}>
                {s.sitename}
              </Link>}
            </li>
           ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}