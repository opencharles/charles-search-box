import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search";

var searchDiv = document.getElementById("charles-search");
if(searchDiv == null) {
    searchDiv = document.createElement("div");
    searchDiv.setAttribute("id", "charles-search");
    document.body.appendChild(searchDiv);
}

/**
 * Get the query params from the src url.
 */
function getQueryStringParams(url) {
    var queryStringParams = url.substring(url.indexOf("?") + 1, url.length).split('&');
    var result = {}, s2, i;
    for (i = 0; i < queryStringParams.length; i += 1) {
        s2 = queryStringParams[i].split('=');
        result[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
    }
    return result;
};

var autocomplete = '';
var search = '';
var scripts = document.getElementsByTagName('script');
var paramsFound=false;
for(var i=0;i<scripts.length;i++) {
  if(scripts[i].src.indexOf("/charles.min.js") != -1) {
    var params = getQueryStringParams(scripts[i].src);
    autocomplete = params['autocomplete'];
    search = params['search'];
    if(autocomplete && search) {
      paramsFound=true;
      break;
    }
  }
}
if(paramsFound) {
  ReactDOM.render(
    <Search
      autocompleteUrl={autocomplete}
      searchUrl={search}
    />,
    searchDiv
  );
} else {
  console.error("charles.min.js: Please specify urls for both autocomplete and search!");
}
