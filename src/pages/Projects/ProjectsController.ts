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
        openModal: (projectId: number, imgId: number) =>
            this.openModal(projectId, imgId),
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

    private openModal(projectId: number, imgId: number) {
        this.viewModel.imageViewer.images =
            this.viewModel.projects[projectId].images;
        this.viewModel.imageViewer.active = imgId;
        this.viewModel.imageViewer.isModalOpen =
            !this.viewModel.imageViewer.isModalOpen;
    }
}

export default ProjectsController;
