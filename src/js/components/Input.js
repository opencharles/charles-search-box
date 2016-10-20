import React from "react";
var $ = require('jquery');

/**
 * Input field where the user enters the keywords for search.
 */
export default class Input extends React.Component {

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
          //user pressed enter, perform the search.
        }
      }
    }

    render() {
      var kw = this.props.keywords;
      return (
        <div>
          {
            kw.length == 0 ?
              <input placeholder="Search..." onKeyUp={this.handleKeyUp.bind(this)}/>
            :
              <input defaultValue={kw} onKeyUp={this.handleKeyUp.bind(this)}/>
          }
        </div>
       );
    }
}
