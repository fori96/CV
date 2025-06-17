import { Controller } from "../../Controller";
import { StudiesViewModel } from "./StudiesView";
import { makeAutoObservable } from "mobx";
import schools from "./schools.json";

export class StudiesController implements Controller<StudiesViewModel> {
    viewModel: StudiesViewModel = {
        loading: false,
        schools: [],
    };

    constructor() {
        makeAutoObservable(this);

        this.getSchools();
    }

    private getSchools() {
        this.viewModel.schools = schools.schools;
    }
}

export default StudiesController;
