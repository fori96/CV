import { Controller } from "../../Controller";
import { NavigationViewModel } from "./NavigationView";
import { makeAutoObservable } from "mobx";

//import React from "react";
//import { ReactElement } from "react";

export class NavigationController implements Controller<NavigationViewModel> {
    viewModel: NavigationViewModel = {
        loading: false,
        landscape: "horizontal",
        changeMenuPlacement: () => this.changeMenuPlacement(),
    };

    constructor() {
        makeAutoObservable(this);
    }

    changeMenuPlacement(): void {
        this.viewModel.landscape === "horizontal"
            ? (this.viewModel.landscape = "vertical")
            : (this.viewModel.landscape = "horizontal");
    }
}

export default NavigationController;
