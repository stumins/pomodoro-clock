import React from "react";
import {hot} from "react-hot-loader";
import "./PomodoroClock.css";

class PomodoroClock extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default hot(module)(PomodoroClock);