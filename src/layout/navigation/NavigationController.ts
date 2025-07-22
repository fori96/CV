import { Controller } from "../../Controller";
import { NavigationViewModel } from "./NavigationView";
import { makeAutoObservable } from "mobx";

//import React from "react";
//import { ReactElement } from "react";

export class NavigationController implements Controller<NavigationViewModel> {
    viewModel: NavigationViewModel = {
        loading: false,
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default NavigationController;
