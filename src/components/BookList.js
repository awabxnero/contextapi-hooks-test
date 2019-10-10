import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{
          background: theme.bg,
          color: theme.syntax
        }}
      >
        <ul>
          <li style={{ background: theme.ui }}>
            So good they can't ignore you
          </li>
          <li style={{ background: theme.ui }}>>deep work</li>
          <li style={{ background: theme.ui }}>>48 laws of power</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
