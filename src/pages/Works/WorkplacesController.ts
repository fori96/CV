import { Controller } from "../../Controller";
import { WorkplacesViewModel } from "./WorkplacesView";

export class WorkplacesController implements Controller<WorkplacesViewModel> {
  viewModel: WorkplacesViewModel = {
    loading: false,
  };
}

export default WorkplacesController;
