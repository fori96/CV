import { AppviewModel } from "./App";
import ContentController from "./layout/content/ContentController";
import { Controller } from "./Controller";
import HeaderController from "./layout/header/HeaderController";
import HomeController from "./pages/HomeController";
import SideMenuController from "./layout/sideMenu/SideMenuController";
//import React from "react";
//import { ReactElement } from "react";

export class AppController implements Controller<AppviewModel> {
  private header: HeaderController = new HeaderController();
  private sideMenu: SideMenuController = new SideMenuController();
  private content: ContentController = new ContentController();
  private home = new HomeController();

  viewModel: AppviewModel = {
    loading: false,
    header: this.header.viewModel,
    sideMenu: this.sideMenu.viewModel,
    content: this.content.viewModel,
    home: this.home.viewModel,
  };
}

export default AppController;
