import React from "react";

/**
 * Panel with autocomplete suggestions that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Suggestions extends React.Component {

  /**
   * If the user clicks on a suggestion, add it to the input field.
   */
  handleClick(e) {
    console.log("CLICK EVENT ON SUGGESTION!");
    this.props.selectSuggestion(e.target.innerHTML);
  }

  render() {
    var suggestions = [];
    for (var i = 0; i < this.props.list.length; i++) {
        suggestions.push(
         <li onClick={this.handleClick.bind(this)} className={"content-suggesstion-entry"} id={"suggestion" + i} key={"suggestion" + i}>{this.props.list[i]}</li>
       );
    }
    return (
      suggestions.length > 0 ?
          <ul className={"suggestionGroupClass"} id="suggestions">
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
