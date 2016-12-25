import React from "react";

import SearchResult from "./SearchResult";
var $ = require('jquery');

/**
 * Panel with results that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Results extends React.Component {

  render() {
    var inputPos = $("#charles-search-field").offset();
    var panelPos;
    if(inputPos) {//at first render, this will be undefined
      panelPos = {
        top: inputPos.top + $("#charles-search-field").outerHeight() + "px",
        left: inputPos.left  + "px",
        width: $("#charles-search-field").outerWidth() + "px"
      };
    }
    var resArray = this.props.searchResults;
    var resultsDivs = [];
    if(resArray) {
      for (var i = 0; i < resArray.length; i++) {
        resultsDivs.push(
          <SearchResult
            id={"search-result-" + i}
            key={"search-result-" + i}
            link={resArray[i].link}
            title={resArray[i].title}
            text={resArray[i].text}
          />
        );
      }
    }
    return (
      resultsDivs.length > 0 ?
          <div style={panelPos} className={"suggestionGroupClass"} id="suggestions">
              {
                resultsDivs.map(
                  function(result){
                   return result;
                  }
                )
              }
          </div> : null
    );
  }
}
