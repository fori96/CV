import "./studies.css";

import { Col, Row } from "antd";
import React, { ReactElement } from "react";

import View from "../../View";
import { observer } from "mobx-react";

export interface Schools {
    name: string;
    type: string;
    city: string;
    startYear: number;
    endYear: number;
    details: string[];
    image: string;
}

export interface StudiesViewModel {
    loading: boolean;
    schools: Schools[];
}

@observer
export class Studies extends View<StudiesViewModel> {
    render(): ReactElement {
        return (
            <div className="school-page">
                <Row>
                    <Col span={18}>
                        {this.viewModel.schools.map(
                            (school: Schools, id: number) => {
                                return (
                                    <div className="school-card" key={id}>
                                        <h3>{school.type}</h3>
                                        <Row className="school">
                                            <img
                                                src={school.image}
                                                className="school-picture"
                                                alt="portre"
                                            />
                                            <div className="school-info">
                                                <div className="head">
                                                    <label className="school-name">
                                                        {school.name}
                                                    </label>
                                                    <label className="city">
                                                        {school.city}
                                                    </label>
                                                </div>
                                                <label className="time">
                                                    {school.startYear} -{" "}
                                                    {school.endYear}
                                                </label>
                                                <ul className="details">
                                                    {school.details.map(
                                                        (
                                                            det: string,
                                                            id: number
                                                        ) => {
                                                            return (
                                                                <li className="detail">
                                                                    {det}
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </Row>
                                    </div>
                                );
                            }
                        )}
                    </Col>
                    <Col span={6}>
                        <div className="additional">
                            <h3>További kézségek</h3>
                            <label className="topic">Idegen nyelvek:</label>
                            <ul>
                                <li>
                                    <label className="topic-label">
                                        Angol:
                                    </label>
                                    <label>
                                        biztos társalgás (középfokú nyelvvizsga)
                                    </label>
                                </li>
                                <li>
                                    <label className="topic-label">
                                        Német:
                                    </label>
                                    <label>
                                        kezdő, nem használt (érettségi)
                                    </label>
                                </li>
                                <li>
                                    <label className="topic-label">
                                        Japán:
                                    </label>
                                    <label>
                                        több, mint 550 nap sorozat Duolingon
                                    </label>
                                </li>
                            </ul>

                            <label className="topic">
                                Programozási nyelvek:
                            </label>
                            <ul>
                                <li>
                                    <label className="topic-label">
                                        React / Typescript:
                                    </label>
                                    <label>4 év</label>
                                </li>
                                <li>
                                    <label className="topic-label">C#:</label>
                                    <label>1-2 év</label>
                                </li>
                                <li>
                                    <label className="topic-label">
                                        Kotlin:
                                    </label>
                                    <label>1 év</label>
                                </li>
                                <li>
                                    <label className="topic-label">SQL:</label>
                                    <label>1 év</label>
                                </li>
                                <li>
                                    <label className="topic-label">Java:</label>
                                    <label>kevesebb, mint 1 év</label>
                                </li>
                            </ul>

                            <label className="topic">Egyéb:</label>
                            <ul>
                                <li>
                                    <label>Microsoft Office</label>
                                </li>
                                <li>
                                    <label>ECDL</label>
                                </li>
                                <li>
                                    <label>Testing</label>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Studies;
