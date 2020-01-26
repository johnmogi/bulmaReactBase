import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  public render(): JSX.Element {
    return (
      <div className="header">
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Primary bold title</h1>
              <h2 className="subtitle">Primary bold subtitle</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
