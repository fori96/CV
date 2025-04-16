import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content, { ContentViewModel } from "./layout/content/ContentView";
import Home, { HomeViewModel } from "./pages/Home/HomeView";
import React, { ReactElement } from "react";

import BasicInformation from "./pages/BasicInformation/BasicInformationView";
import { HeaderViewModel } from "./layout/header/HeaderView";
import { SideMenuViewModel } from "./layout/sideMenu/SideMenuView";
import Skills from "./pages/Skills/SkillsView";
import Studies from "./pages/Studies/StudiesView";
import { View } from "./View";
import Workplaces from "./pages/Works/WorkplacesView";

//import { observer } from "mobx-react";

export interface AppviewModel {
  loading: boolean;
  header: HeaderViewModel;
  sideMenu: SideMenuViewModel;
  content: ContentViewModel;
  home: HomeViewModel;
}

export class App extends View<AppviewModel> {
  render(): ReactElement {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Content viewModel={this.viewModel.content} />}
            >
              <Route index element={<Home viewModel={this.viewModel.home} />} />
              <Route
                path="/BasicInformation"
                element={
                  <BasicInformation
                    viewModel={this.viewModel.basicInformation}
                  />
                }
              />
              <Route
                path="/Studies"
                element={<Studies viewModel={this.viewModel.studies} />}
              />
              <Route
                path="/Skills"
                element={<Skills viewModel={this.viewModel.skills} />}
              />
              <Route
                path="/Workplaces"
                element={<Workplaces viewModel={this.viewModel.workplaces} />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
