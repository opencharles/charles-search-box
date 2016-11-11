import React from "react";
/**
 * Component for an element in the pages list.
 */
export default class PageNumber extends React.Component {

  /**
   * Handle the event when the user clicks on a page number.
   */
  handleClick(e) {
    this.props.selectPage(e.target.innerHTML - 1);
  }

  render() {
    return (
        this.props.selected ?
        <li onClick={this.handleClick.bind(this)} className={"search-page selected"} id={this.props.id} key={this.props.key}>
          {this.props.number}
        </li>
        :
        <li onClick={this.handleClick.bind(this)} className={"search-page"} id={this.props.id} key={this.props.key}>
          {this.props.number}
        </li>
    );
  }
}
