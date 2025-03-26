import { Controller } from "../../Controller";
import { SideMenuViewModel } from "./SideMenuView";

//import React from "react";
//import { ReactElement } from "react";

export class SideMenuController implements Controller<SideMenuViewModel> {
  viewModel: SideMenuViewModel = {
    loading: false,
  };
}

export default SideMenuController;
