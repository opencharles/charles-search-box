import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search";

var searchBox = document.getElementById("searchBox");
if(searchBox == null) {
    searchBox = document.createElement("div");
    searchBox.setAttribute("id", "searchBox");
    document.body.appendChild(searchBox);
}
ReactDOM.render(<Search/>, searchBox);
