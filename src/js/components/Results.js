import React from "react";

import SearchResult from "./SearchResult";

/**
 * Panel with autocomplete suggestions that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Results extends React.Component {

  render() {
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
          <section className={"search-results"} id="results">
              {
                resultsDivs.map(
                  function(result){
                   return result;
                  }
                )
              }
          </section> : null
    );
  }
}
