import "./projects.css";

import { Carousel, Modal } from "antd";
import React, { ReactElement } from "react";

import View from "../../View";
import { observer } from "mobx-react";

export interface ImageViewerViewModel {
    isModalOpen: boolean;
    onCancel(): void;
    images: string[];
}

@observer
export class ImageViewer extends View<ImageViewerViewModel> {
    render(): ReactElement {
        return (
            <Modal
                closable={true}
                className="modal-view"
                open={this.viewModel.isModalOpen}
                onCancel={() => this.viewModel.onCancel()}
            >
                <Carousel arrows infinite={false}>
                    {this.viewModel.images.map((img: string) => {
                        return <img className="img" src={img} />;
                    })}
                </Carousel>
            </Modal>
        );
    }
}

export default ImageViewer;
