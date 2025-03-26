import { Controller } from "../Controller";
import { StudiesViewModel } from "./StudiesView";

export class StudiesController implements Controller<StudiesViewModel> {
  viewModel: StudiesViewModel = {
    loading: false,
  };
}

export default StudiesController;
