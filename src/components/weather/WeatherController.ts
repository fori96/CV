import { Controller } from "../../Controller";
import { WeatherViewModel } from "./WeatherView";
import axios from "axios";
import { makeAutoObservable } from "mobx";

const WEATHER_API_KEY = "ad496bc23d3a0d84a7ce4a006ab0ca4d";

export class WeatherController implements Controller<WeatherViewModel> {
    viewModel: WeatherViewModel = {
        loading: true,
        location: "Budapest",
        weatherData: null,
        weatherIcon: null,
        onSearch: (location: string) => this.onSearch(location),
    };

    constructor() {
        makeAutoObservable(this);

        this.fetchData(this.viewModel.location);
    }

    private async fetchData(location: string) {
        try {
            const response = await axios(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${WEATHER_API_KEY}`
            );
            if (response !== undefined) {
                this.viewModel.weatherData = response.data;
                const icon = await axios(
                    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                );
                if (icon) {
                    this.viewModel.weatherIcon = icon.data;
                }
                this.viewModel.loading = false;
            }
        } catch (error: any) {
            this.viewModel.loading = false;
        }
    }

    private onSearch(location: string) {
        this.viewModel.location = location;
        this.viewModel.loading = true;
        this.fetchData(location);
    }
}

export default WeatherController;
