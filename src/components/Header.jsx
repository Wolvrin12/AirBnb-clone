import React from "react";
import { Search, Language, ExpandMore } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://airbnb--anouarchlih82.repl.co/airbnb.png"
          alt="airbnb"
        />
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
}

export default Header;
