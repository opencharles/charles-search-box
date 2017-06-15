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

var search = 'http://ec2-34-209-37-87.us-west-2.compute.amazonaws.com:8080/charles-rest/api/s/';
var repo = $('script[id=charlesscript]').attr('repo');
var size = $('script[id=charlesscript]').attr('size');
var placeholder = $('script[id=charlesscript]').attr('placeholder');
if(!size) {
  size = 3;
}
if(!placeholder) {
  placeholder = "Search as you type...";
}
if(repo) {
  $('head').append(
    '<link href="http://www.amihaiemil.com/css/charles/charles_light.css" type="text/css" rel="stylesheet"/>'
  )
  ReactDOM.render(
    <Search searchUrl={search + repo + "?index=0&size=" + size + "&kw="} placeholder={placeholder}/>,
    searchDiv
  );
} else {
  console.error("charles.min.js: Please specify the Github repo full name!");
}
