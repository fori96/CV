import { Controller } from "../../Controller";
import { HeaderViewModel } from "./HeaderView";

//import React from "react";
//import { ReactElement } from "react";

export class HeaderController implements Controller<HeaderViewModel> {
  viewModel: HeaderViewModel = {
    loading: false,
  };
}

export default HeaderController;
