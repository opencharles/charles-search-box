import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search";

var searchDiv = document.getElementById("charles-search");
if(searchDiv == null) {
    searchDiv = document.createElement("div");
    searchDiv.setAttribute("id", "charles-search");
    document.body.appendChild(searchDiv);
}
ReactDOM.render(<Search/>, searchDiv);
