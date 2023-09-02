import React from "react";
import "../../globals.css";

const Grid = (props) => {
    const [effect, setEffect] = React.useState(props.on);

    function toggleEnter() {
        setEffect((prev) => !prev);
    }

    function toggleLeave() {
        setEffect((prev) => !prev);
    }

    return (
        <div
            className={`p-4 border-b ${effect ? "custom-gradient" : ""}`}
            onMouseEnter={toggleEnter}
            onMouseLeave={toggleLeave}
        >
            <h1 className="text-xl">{props.title}</h1>
            <p className="text-sm">{props.description}</p>
        </div>
    );
};

export default Grid;
