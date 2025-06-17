import "./App.css";

import BasicInformation, {
    BasicInformationViewModel,
} from "./pages/BasicInformation/BasicInformationView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content, { ContentViewModel } from "./layout/content/ContentView";
import Home, { HomeViewModel } from "./pages/Home/HomeView";
import Projects, { ProjectsViewModel } from "./pages/Projects/ProjectsView";
import React, { ReactElement } from "react";
import Studies, { StudiesViewModel } from "./pages/Studies/StudiesView";
import Workplaces, { WorkplacesViewModel } from "./pages/Works/WorkplacesView";

import { View } from "./View";

//import { observer } from "mobx-react";

export interface AppviewModel {
    loading: boolean;
    content: ContentViewModel;
    home: HomeViewModel;
    basic: BasicInformationViewModel;
    studies: StudiesViewModel;
    projects: ProjectsViewModel;
    works: WorkplacesViewModel;
}

export class App extends View<AppviewModel> {
    render(): ReactElement {
        return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Content viewModel={this.viewModel.content} />
                            }
                        >
                            <Route
                                index
                                element={
                                    <Home viewModel={this.viewModel.home} />
                                }
                            />
                            <Route
                                path="/BasicInformation"
                                element={
                                    <BasicInformation
                                        viewModel={
                                            this.viewModel.basicInformation
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/Studies"
                                element={
                                    <Studies
                                        viewModel={this.viewModel.studies}
                                    />
                                }
                            />
                            <Route
                                path="/Workplaces"
                                element={
                                    <Workplaces
                                        viewModel={this.viewModel.workplaces}
                                    />
                                }
                            />
                            <Route
                                path="/Skills"
                                element={
                                    <Projects
                                        viewModel={this.viewModel.projects}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
