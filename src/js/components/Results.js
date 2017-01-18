import React from "react";

import SearchResult from "./SearchResult";
import PageNumbers from "./PageNumbers";

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
        width: ($("#charles-search-field").outerWidth() + 70) + "px"
      };
    }
    var resArray = this.props.searchResults.res;
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
        <div id="resultsPanel" className="resultsPanel">
          <div className="suggestionGroupClass" id="suggestions">
              {
                resultsDivs.map(
                  function(result){
                   return result;
                  }
                )
              }
          </div>
          <PageNumbers
            getSearchResults={this.props.getSearchResults}
            results={this.props.searchResults} id="paginator" key="paginator"
          />
        </div>
          : null
    );
  }
}
