import { AppviewModel } from "./App";
import BasicInformationController from "./pages/BasicInformation/BasicInformationController";
import ContentController from "./layout/content/ContentController";
import { Controller } from "./Controller";
import HomeController from "./pages/Home/HomeController";
import ProjectsController from "./pages/Projects/ProjectsController";
import StudiesController from "./pages/Studies/StudiesController";
import WorkplacesController from "./pages/Works/WorkplacesController";

export class AppController implements Controller<AppviewModel> {
    private content: ContentController = new ContentController();
    private home = new HomeController();
    private basicInfo: BasicInformationController =
        new BasicInformationController();
    private studies: StudiesController = new StudiesController();
    private projects: ProjectsController = new ProjectsController();
    private works: WorkplacesController = new WorkplacesController();

    viewModel: AppviewModel = {
        loading: false,
        content: this.content.viewModel,
        home: this.home.viewModel,
        basic: this.basicInfo.viewModel,
        studies: this.studies.viewModel,
        projects: this.projects.viewModel,
        works: this.works.viewModel,
    };
}

export default AppController;
