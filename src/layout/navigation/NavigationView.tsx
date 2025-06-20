import "./navigation.css";

import { Col, Menu, MenuProps, Row } from "antd";
import {
    InsertRowAboveOutlined,
    InsertRowLeftOutlined,
} from "@ant-design/icons";
import React, { ReactElement } from "react";

import { NavLink } from "react-router-dom";
import View from "../../View";
import { observer } from "mobx-react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        key: "/BasicInformation",
        label: <NavLink to="/BasicInformation">Alapadatok</NavLink>,
    },
    {
        key: "/Studies",
        label: <NavLink to="/Studies">Tanulmányok</NavLink>,
    },
    {
        key: "/Workplaces",
        label: <NavLink to="/Workplaces">Korábbi tapasztalatok</NavLink>,
    },
    {
        key: "/Skills",
        label: <NavLink to="/Skills">Projektek</NavLink>,
    },
];

export interface NavigationViewModel {
    landscape: string;
    loading: boolean;
    changeMenuPlacement(): void;
}

@observer
export class Navigation extends View<NavigationViewModel> {
    render(): ReactElement {
        return (
            <div className={`navbar ${this.viewModel.landscape}`}>
                <Col className="page-title">
                    <NavLink to="/">
                        <label className="App-title">Önéletrajz</label>
                    </NavLink>
                </Col>
                <Menu
                    className="menu"
                    mode={
                        this.viewModel.landscape === "horizontal"
                            ? "horizontal"
                            : "inline"
                    }
                    items={items}
                    activeKey="none"
                />
                {this.viewModel.landscape === "horizontal" ? (
                    <InsertRowLeftOutlined
                        className="menuPlacement"
                        onClick={() => this.viewModel.changeMenuPlacement()}
                    />
                ) : (
                    <InsertRowAboveOutlined
                        className="menuPlacement"
                        onClick={() => this.viewModel.changeMenuPlacement()}
                    />
                )}
            </div>
        );
    }
}

export default Navigation;
