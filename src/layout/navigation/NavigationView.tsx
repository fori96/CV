import "./navigation.css";

import { Col, Menu, MenuProps } from "antd";
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
    loading: boolean;
}

@observer
export class Navigation extends View<NavigationViewModel> {
    render(): ReactElement {
        return (
            <div className={`navbar`}>
                <Col className="page-title">
                    <NavLink to="/">
                        <label className="App-title">Önéletrajz</label>
                    </NavLink>
                </Col>
                <div className="menu-wrapper">
                    <Menu
                        className="menu"
                        items={items}
                        activeKey="none"
                        mode="horizontal"
                    />
                </div>
            </div>
        );
    }
}

export default Navigation;
