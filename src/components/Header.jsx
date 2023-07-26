import { Search, Language, ExpandMore } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../imgs/airbnb.png";
import { useState } from "react";
import "../styles/Header.css";
import React from "react";

const Header = () => {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={Logo} alt="airbnb" sizes="200x200" />
      </Link>
      <div className="header_center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input ? (
          <Link to="/search">
            <Search />
          </Link>
        ) : (
          <Search />
        )}
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar src="https://yt3.ggpht.com/-SbaAWwcE5cg/AAAAAAAAAAI/AAAAAAAAAAA/Ms-wJZrJqtY/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg" />
      </div>
    </div>
  );
};

export default Header;
