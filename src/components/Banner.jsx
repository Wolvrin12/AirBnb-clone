import { useHistory } from "react-router-dom";
import { Cancel } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Search from "./Search";
import "../styles/Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [ads, setAds] = useState(true);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      {ads && (
        <div className="banner_info">
          <Cancel className="close_ads" onClick={() => setAds(false)} />
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near you
          </h5>
          <Button
            variant="outlined"
            onClick={() => {
              history.push("/search");
            }}
          >
            Explore Nearby
          </Button>
        </div>
      )}
    </div>
  );
};

export default Banner;
