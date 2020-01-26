import React, { Component } from "react";
import "./layout.css";
import { Header } from "../header/header";
import { Copyrights } from "../copyrights/copyrights";
import { Main } from "../main/main";
import { Navbar } from "../navbar/navbar";

export class Layout extends Component {
  // The render function will return the component UI
  public render(): JSX.Element {
    return (
      <div className="layout container is-fluid">
        <Navbar />
        <header className="container ">
          <Header />
        </header>

        <main className="container">
          <Main />
        </main>

        <footer className="container is-fluid">
          <Copyrights />
        </footer>
      </div>
    );
  }
}
