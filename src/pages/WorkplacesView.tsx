import React, { ReactElement } from "react";

import View from "../View";

export interface WorkplacesViewModel {
  loading: boolean;
}

export class Workplaces extends View<WorkplacesViewModel> {
  render(): ReactElement {
    return <>Workplaces</>;
  }
}

export default Workplaces;
