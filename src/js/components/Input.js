import React from "react";

import Suggestions from "./Suggestions";
var $ = require('jquery');

/**
 * Input field where the user enters the keywords for search.
 */
export default class Input extends React.Component {

    constructor() {
      super();
      this.state = {
        keywords: ""
      };
    }

    /**
     * Set a suggested string as the value of the input field.
     */
    selectSuggestion(suggestion) {
      if(suggestion.length > 0) {
        this.setState(
          {
            keywords: suggestion
          }
        );
      }
    }

    /**
     * Handle the event of key up on the input field.
     */
    handleKeyUp(e) {
      if (
        e.keyCode != 13 && e.keyCode != 40 && e.keyCode != 38 &&
        e.keyCode != 37 && e.keyCode != 39
      ) {
        const input = e.target.value;
        this.props.getSuggestions(input);
      } else {
        if(e.keyCode != 13)  {
          var suggestionsContainer = $(".suggestionGroupClass");
          if(suggestionsContainer != null) {//if we don't have some suggestions displayed, it makes no sense to go further
            //console.log(e.keyCode);
            switch (e.keyCode) {
              case 38://up arrow pressed
                var activeItem = suggestionsContainer.find('.active-suggestion-item');
                if (activeItem.length == 0) {
                  suggestionsContainer.children().last().addClass("active-suggestion-item");
                } else {
                  var prevItem = activeItem.prev();
                  activeItem.removeClass("active-suggestion-item");
                  if (prevItem.length == 0) {
                    suggestionsContainer.children().last().addClass("active-suggestion-item");
                  } else {
                    prevItem.addClass("active-suggestion-item");
                  }
                }
                break;
              case 40://down arrow pressed
                var activeItem = suggestionsContainer.find('.active-suggestion-item');
                if (activeItem.length == 0) {
                  suggestionsContainer.children().first().addClass("active-suggestion-item");
                } else {
                  var nextItem = activeItem.next();
                  activeItem.removeClass("active-suggestion-item");
                  if (nextItem.length == 0) {
                    suggestionsContainer.children().first().addClass("active-suggestion-item");
                  } else {
                    nextItem.addClass("active-suggestion-item");
                  }
                }
                break;
            }
          }
        } else {
          this.enterPressed(e);
        }
      }
    }

    /**
     * Handles the event where 'enter' key was pressed on this input field.
     */
    enterPressed(e) {

    }

    /**
     * Handle onChange event.
     */
    handleChange(e){
      this.setState (
        {
          keywords: e.target.value
        }
      );
    }

    render() {
      //var kw = this.props.keywords;
      return (
        <div>
          {
            this.state.keywords.length == 0 ?
              <input placeholder="Search..." onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)}/>
            :
              <input value={this.state.keywords} onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)}/>
          }
          <Suggestions
            selectSuggestion={this.selectSuggestion.bind(this)}
            list={this.props.suggestions}
          />
        </div>
       );
    }
}
