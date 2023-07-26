import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import { useHistory } from "react-router-dom";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import "react-date-range/dist/styles.css";
import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker
        className="search_clander"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of guests
        <People />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button
        onClick={() => {
          history.push("/search");
        }}
      >
        Search Airbnb
      </Button>
    </div>
  );
};

export default Search;
