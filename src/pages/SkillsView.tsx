import React, { ReactElement } from "react";

import View from "../View";

export interface SkillsViewModel {
  loading: boolean;
}

export class Skills extends View<SkillsViewModel> {
  render(): ReactElement {
    return <>Skills</>;
  }
}

export default Skills;
