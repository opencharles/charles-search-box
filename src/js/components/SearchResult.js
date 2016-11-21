import React from "react";
/**
 * Panel with autocomplete suggestions that should appear right under
 * the input field as soon as the user types in a few letters.
 */
export default class Results extends React.Component {

  render() {
    return (
      <div className={"search-result"} id={this.props.id} key={this.props.key}>
        <a target="_blank"  href={this.props.link}>
            <h3>{this.props.title}</h3>
        </a>
        <div dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
      </div>
    );
  }
}
