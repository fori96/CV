import React from "react";

export interface ViewProps {
    viewModel: any
}

export class View<T> extends React.Component<ViewProps> {
    get viewModel() {
        return this.props.viewModel;
    }
}

export default View;