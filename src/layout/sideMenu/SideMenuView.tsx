import "./sideMenu.css";

import { Layout, Menu, MenuProps } from "antd";
import React, { ReactElement } from "react";

import { NavLink } from "react-router-dom";
import View from "../../View";

//import { observer } from "mobx-react";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: <NavLink to="/BasicInformation">Alapadatok</NavLink>,
  },
  {
    key: "sub2",
    label: <NavLink to="/Studies">Tanulmányok</NavLink>,
  },
  {
    key: "sub4",
    label: <NavLink to="/Skills">Kézségek</NavLink>,
  },
  {
    key: "grp",
    label: <NavLink to="/Workplaces">Korábbi tapasztalatok</NavLink>,
  },
];

export interface SideMenuViewModel {
  loading: boolean;
}

export class SideMenu extends View<SideMenuViewModel> {
  render(): ReactElement {
    return (
      <React.Fragment>
        <Sider className="sideMenu">
          <Menu className="menu" mode="inline" items={items} activeKey="none" />
        </Sider>
      </React.Fragment>
    );
  }
}

export default SideMenu;
