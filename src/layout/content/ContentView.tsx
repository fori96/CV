import "./Content.css";

import React, { ReactElement } from "react";
import SideMenu, { SideMenuViewModel } from "../sideMenu/SideMenuView";

import Header from "../header/HeaderView";
import { Outlet } from "react-router";
import { Row } from "antd";
import View from "../../View";

//import { observer } from "mobx-react";

export interface ContentViewModel {
  loading: boolean;

  sideMenu: SideMenuViewModel;
}

export class Content extends View<ContentViewModel> {
  render(): ReactElement {
    return (
      <div className="main">
        <Header viewModel={this.viewModel.header} />
        <Row>
          <SideMenu viewModel={this.viewModel.sideMenu} />
          <div className="content">
            <Outlet context={"lasjdf"} />
          </div>
        </Row>
      </div>
    );
  }
}

export default Content;
