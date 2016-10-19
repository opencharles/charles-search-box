import React from "react";

/**
 * Panel with autocomplete suggestions that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Suggestions extends React.Component {

  render() {
    var suggestions = [];
    for (var i = 0; i < this.props.list.length; i++) {
        suggestions.push(
         <li id={"suggestion" + i}>{this.props.list[i]}</li>
       );
    }
    return (
      suggestions.length > 0 ?
          <ul id="suggestions">
              {
                suggestions.map(
                  function(suggestion){
                   return suggestion;
                  }
                )
              }
          </ul> : null
    );
  }
}
