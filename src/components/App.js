import React from "react";
import "../styles/App.css";
import { Layout } from "./Layout";
import { Background } from "./layout/Background";


export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout />
            </div>
        )
    }
}
