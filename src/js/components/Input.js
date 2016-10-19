import React from "react";
import Suggestions from "./Suggestions";

/**
 * Input field where the user enters the keywords for search.
 */
export default class Input extends React.Component {
    constructor() {
      super();
      this.state = {
        suggestionsList: [],
      };
    }
    handleChange(e) {
        const input = e.target.value;
        if(input.length >= 3) {
          //make call to REST endpoint for autocomplete and set
          //the suggestionsList
          this.setState(
           {
             suggestionsList: ['suggestiona', 'suggestionb', 'suggestionc']
           }
          );
        } else {
          this.setState(
           {
             suggestionsList: []
           }
          );
        }
    }

    render() {
      return (
        <div>
          <input placeholder="Search..." onChange={this.handleChange.bind(this)} />
          <Suggestions list={this.state.suggestionsList}/>
        </div>
       );
    }
}
