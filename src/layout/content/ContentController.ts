import { ContentViewModel } from "./ContentView";
import { Controller } from "../../Controller";
import NavigationController from "../navigation/NavigationController";
import { makeAutoObservable } from "mobx";

export class ContentController implements Controller<ContentViewModel> {
    private sideMenu = new NavigationController();

    viewModel: ContentViewModel = {
        loading: false,
        navBar: this.sideMenu.viewModel,
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default ContentController;
