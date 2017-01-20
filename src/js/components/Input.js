import React from "react";
var FaSearch = require('react-icons/lib/fa/search');
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
        this.props.getSuggestions('');
        this.props.getSearchResults(this.props.searchUrl/*this.state.keywords*/, true);
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
        var input = e.target.value;
        this.props.getSearchResults(input, true);
      } else {
        if(e.keyCode != 13)  {
          var suggestionsContainer = $(".suggestionGroupClass");
          if(suggestionsContainer != null) {//if we don't have some suggestions displayed, it makes no sense to go further
            //console.log(e.keyCode);
            switch (e.keyCode) {
              case 38://up arrow pressed
                var activeItem = suggestionsContainer.find('.active-result');
                if (activeItem.length == 0) {
                  suggestionsContainer.children().last().addClass("active-result");
                } else {
                  var prevItem = activeItem.prev();
                  activeItem.removeClass("active-result");
                  if (prevItem.length == 0) {
                    suggestionsContainer.children().last().addClass("active-result");
                  } else {
                    prevItem.addClass("active-result");
                  }
                }
                break;
              case 40://down arrow pressed
                var activeItem = suggestionsContainer.find('.active-result');
                if (activeItem.length == 0) {
                  suggestionsContainer.children().first().addClass("active-result");
                } else {
                  var nextItem = activeItem.next();
                  activeItem.removeClass("active-result");
                  if (nextItem.length == 0) {
                    suggestionsContainer.children().first().addClass("active-result");
                  } else {
                    nextItem.addClass("active-result");
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
        var query = '';
        var activeSuggestion = $(".active-result").text();
        if(activeSuggestion != '') {
          query = activeSuggestion;
          this.setState (
            {
              keywords: query
            }
          );
          this.props.getSuggestions('');
        } else {
          if($(".suggestionGroupClass")) {
            this.props.getSuggestions('');
          }
          if(this.state.keywords != '') {
            query = this.state.keywords;
          }
        }
        if(query.length > 0) {
          this.props.getSearchResults(query);
        }
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
      return (
        <div id="charles-search-wrapper">
          <div id="charles-search-input-wrapper">
          {
            this.state.keywords.length == 0 ?
              <input
                id="charles-search-field" placeholder="Search..."
                onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)}
                autoComplete="off"
              />
            :
              <input id="charles-search-field" value={this.state.keywords}
                onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleChange.bind(this)}
                autoComplete="off"
              />
          }
          </div>
        </div>
       );
    }
}
