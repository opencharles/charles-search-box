import React from "react";

import SearchResult from "./SearchResult";
var $ = require('jquery');

/**
 * Panel with autocomplete suggestions that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Results extends React.Component {

  render() {
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
          <div className={"search-results"} id="results">
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
