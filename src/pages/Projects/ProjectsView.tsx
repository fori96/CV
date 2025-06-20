import "./projects.css";

import { Col, Row } from "antd";
import ImageViewer, { ImageViewerViewModel } from "./ImageViewerView";
import React, { ReactElement } from "react";

import View from "../../View";
import { ZoomInOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";

export interface Project {
    name: string;
    technology: string;
    year: number;
    link: string;
    description: string;
    images: string[];
}

export interface ProjectsViewModel {
    loading: boolean;
    projects: Project[];
    openModal(id: number): void;

    imageViewer: ImageViewerViewModel;
}

@observer
export class Projects extends View<ProjectsViewModel> {
    render(): ReactElement {
        return (
            <div className="project-page">
                {this.viewModel.projects.map((project: Project, id: number) => {
                    return (
                        <Row className="project-card" key={id}>
                            <Col className="project-detail">
                                <h2 className="project-name">{project.name}</h2>
                                <hr />
                                <div className="project-info">
                                    <label className="info-name">
                                        Használt technológia:
                                    </label>
                                    <label>{project.technology}</label>
                                </div>
                                <div className="project-info">
                                    <label className="info-name">
                                        Készítés éve:
                                    </label>
                                    <label>{project.year}</label>
                                </div>
                                <div className="project-info">
                                    <label className="info-name">Link:</label>
                                    <label>
                                        <a href={project.link}>
                                            {project.link}
                                        </a>
                                    </label>
                                </div>
                                <div className="project-info">
                                    <label className="info-name">Leírás:</label>
                                    <label className="description">
                                        {project.description}
                                    </label>
                                </div>
                            </Col>
                            <Col className="img-col">
                                <Row>
                                    {project.images.map((img, idx) => {
                                        return (
                                            <div
                                                onClick={() =>
                                                    this.viewModel.openModal(id)
                                                }
                                                className="project-img"
                                                style={{
                                                    backgroundImage: `url(${img}`,
                                                }}
                                                key={idx}
                                            >
                                                <ZoomInOutlined className="zoom-icon" />
                                            </div>
                                        );
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    );
                })}
                <ImageViewer viewModel={this.viewModel.imageViewer} />
            </div>
        );
    }
}

export default Projects;
