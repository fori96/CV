import "./header.css";

import React, { ReactElement } from "react";

import { NavLink } from "react-router-dom";
import View from "../../View";
import logo from "../../logo.svg";

//import { observer } from "mobx-react";

export interface HeaderViewModel {
  loading: boolean;
}

export class Header extends View<HeaderViewModel> {
  render(): ReactElement {
    return (
      <React.Fragment>
        <div className="header">
          <NavLink to="/">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <label className="App-title">Önéletrajz</label>
            </div>
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
