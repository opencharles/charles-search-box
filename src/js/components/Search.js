import React from "react";

import Input from "./Input";
var $ = require('jquery');

/**
 * Parent component wrapping all the react search box components.
 *
 */
export default class Search extends React.Component {

  /**
   * State of this search component.
   */
  constructor() {
    super();
    this.state = {
      suggestions: [],
      keywords: ""
    };
  }

  /**
   * Make an ajax call to the server to fetch the autocompletition
   * suggestions based on the user's input
   * @param keywords Input given by the user in the search box.
   */
  getSuggestions(keywords) {
    if(keywords.length >= 3) {
      $.support.cors = true;
      $.ajax({
		    type : "GET",
		    url : "http://localhost:8080/test/testautocomplete.json",//"http://localhost:5555/autocomplete/uniqaat?term=" + keywords,
		    dataType : 'json',
		    contentType : "application/json; charset=utf-8",
		    headers : {
		  	  Accept : "application/json; charset=utf-8"
		    },
		    success : function(suggestionsList, status) {
			    if(status == "success") {
            this.setState(
              {
                suggestions: suggestionsList
              }
            );
			    } else {
            console.log("STATUS NOT SUCCESS!");
			    }
		    }.bind(this),
		    statusCode: {
			    404: function() {
            console.log("404 STATUS CODE");
			    },
			    500: function() {
            console.log("500 STATUS CODE");
			    }
		    },
		    error : function(e) {
          console.log("ERROR STATUS CODE");
		    }.bind(this)
    	});
    } else {
       this.setState(
         {
           suggestions: []
         }
       );
    }
  }

  render() {
    return (
      <div>
        <Input
          getSuggestions={this.getSuggestions.bind(this)}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
}
