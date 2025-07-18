import { Controller } from "../../Controller";
import { HomeViewModel } from "./HomeView";
import WeatherController from "../../components/weather/WeatherController";
import axios from "axios";
import { makeAutoObservable } from "mobx";

export class HomeController implements Controller<HomeViewModel> {
    private weather = new WeatherController();

    viewModel: HomeViewModel = {
        loading: false,
        weather: this.weather.viewModel,
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export default HomeController;
