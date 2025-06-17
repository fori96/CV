import { Controller } from "../../Controller";
import ImageViewerController from "./ImageViewerController";
import { ProjectsViewModel } from "./ProjectsView";
import { makeAutoObservable } from "mobx";
import projects from "./project.json";

export class ProjectsController implements Controller<ProjectsViewModel> {
    private imageViewer = new ImageViewerController();

    viewModel: ProjectsViewModel = {
        loading: false,
        projects: [],
        openModal: (id: number) => this.openModal(id),
        imageViewer: this.imageViewer.viewModel,
    };

    //TODO: load skills from backend maybe

    constructor() {
        makeAutoObservable(this);

        this.getProjects();
    }

    private getProjects() {
        this.viewModel.projects = projects.projects;
    }

    private openModal(id: number) {
        this.viewModel.imageViewer.images = this.viewModel.projects[id].images;
        this.viewModel.imageViewer.isModalOpen =
            !this.viewModel.imageViewer.isModalOpen;
    }
}

export default ProjectsController;
