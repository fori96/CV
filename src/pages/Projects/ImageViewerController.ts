import { Controller } from "../../Controller";
import { ImageViewerViewModel } from "./ImageViewerView";
import { makeAutoObservable } from "mobx";

export class ImageViewerController implements Controller<ImageViewerViewModel> {
    viewModel: ImageViewerViewModel = {
        isModalOpen: false,
        onCancel: () => this.onCancel(),
        images: [],
        active: 0,
    };

    //TODO: load skills from backend maybe

    constructor() {
        makeAutoObservable(this);
    }

    private onCancel() {
        this.viewModel.isModalOpen = false;
    }
}

export default ImageViewerController;
