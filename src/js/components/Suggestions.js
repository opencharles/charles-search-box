import React from "react";
var $ = require('jquery');

/**
 * Panel with autocomplete suggestions that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Suggestions extends React.Component {

  /**
   * If the user clicks on a suggestion, add it to the input field.
   */
  handleClick(e) {
    this.props.selectSuggestion(e.target.innerHTML);
  }

  render() {
    var suggestions = [];
    for (var i = 0; i < this.props.list.length; i++) {
        suggestions.push(
         <div onClick={this.handleClick.bind(this)} className={"content-suggesstion-entry"} id={"suggestion" + i} key={"suggestion" + i}>{this.props.list[i]}</div>
       );
    }

    var inputPos = $("#charles-search-field").offset();
    var autocompletePos;
    if(inputPos) {//at first render, this will be undefined
      autocompletePos = {
        top: inputPos.top + $("#charles-search-field").outerHeight() + "px",
        left: inputPos.left  + "px",
        width: $("#charles-search-field").outerWidth() + "px"
      };
    }

    return (
      suggestions.length > 0 ?
          <div style={autocompletePos} className={"suggestionGroupClass"} id="suggestions">
              {
                suggestions.map(
                  function(suggestion){
                   return suggestion;
                  }
                )
              }
          </div> : null
    );
  }
}
