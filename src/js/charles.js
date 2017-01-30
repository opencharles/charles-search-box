import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search";
var $ = require('jquery');

var searchDiv = document.getElementById("charles-search");
if(searchDiv == null) {
    searchDiv = document.createElement("div");
    searchDiv.setAttribute("id", "charles-search");
    document.body.appendChild(searchDiv);
}

var search = 'http://ec2-54-68-83-8.us-west-2.compute.amazonaws.com:8080/charles-rest/api/s/';
var repo = $('script[id=charlesscript]').attr('repo');
if(repo.length > 0) {
  $('head').append(
    '<link href="http://amihaiemil.github.io/css/charles_light.css" type="text/css" rel="stylesheet"/>'
  )
  ReactDOM.render(
    <Search searchUrl={search + repo + "?index=0&size=5&kw="}/>,
    searchDiv
  );
} else {
  console.error("charles.min.js: Please specify the Github repo full name!");
}
