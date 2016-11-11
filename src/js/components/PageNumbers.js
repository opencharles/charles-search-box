import React from "react";

import PageNumber from "./PageNumber";

/**
 * Component for the list of page numbers that appreast at the bottom of
 * the search results.
 */
export default class PageNumbers extends React.Component {
  /**
   * State of this search component.
   */
  constructor() {
    super();
    this.state = {
      selectedPage: 0
    };
  }

  /**
   * Handle the event when the user clicks on a page number.
   */
  selectPage(number) {
    this.setState(
      {
        selectedPage: number
      }
    );
  }


  render() {
    var links = this.props.pages;
    var pagesLis = []
    if(links) {
      for (var i = 0; i < links.length; i++) {
        pagesLis.push(
          <PageNumber
            selectPage={this.selectPage.bind(this)}
            id={"search-page-" + i}
            key={"search-page-" + i}
            link={links[i]}
            number={i+1}
            selected = {i==this.state.selectedPage}
          />
        );
      }
    }
    return (
      pagesLis.length > 0 ?
          <ul className={"search-pages"} id="pages">
              {
                pagesLis.map(
                  function(page){
                   return page;
                  }
                )
              }
          </ul> : null
    );
  }
}
